"use client";

import React from "react";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { ArrowUp, Paperclip, Square, X, StopCircle, Mic } from "lucide-react";
import { motion } from "framer-motion";

// Utility function for className merging
const cn = (...classes: (string | undefined | null | false)[]) =>
  classes.filter(Boolean).join(" ");

// Scoped scrollbar styles injected client-side only (avoids SSR `document`).
const SCROLLBAR_STYLES = `
  textarea::-webkit-scrollbar { width: 6px; }
  textarea::-webkit-scrollbar-track { background: transparent; }
  textarea::-webkit-scrollbar-thumb { background-color: #444; border-radius: 3px; }
  textarea::-webkit-scrollbar-thumb:hover { background-color: #555; }
`;
let stylesInjected = false;
function useInjectStylesOnce() {
  React.useEffect(() => {
    if (stylesInjected || typeof document === "undefined") return;
    const el = document.createElement("style");
    el.dataset.aiPromptBox = "true";
    el.innerText = SCROLLBAR_STYLES;
    document.head.appendChild(el);
    stylesInjected = true;
  }, []);
}

// Textarea
interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  className?: string;
}
const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => (
    <textarea
      className={cn(
        "flex min-h-[44px] w-full resize-none rounded-md border-none bg-transparent px-3 py-2.5 text-base text-gray-100 placeholder:text-gray-400 focus-visible:outline-none focus-visible:ring-0 disabled:cursor-not-allowed disabled:opacity-50",
        className,
      )}
      ref={ref}
      rows={1}
      {...props}
    />
  ),
);
Textarea.displayName = "Textarea";

// Tooltip
const TooltipProvider = TooltipPrimitive.Provider;
const Tooltip = TooltipPrimitive.Root;
const TooltipTrigger = TooltipPrimitive.Trigger;
const TooltipContent = React.forwardRef<
  React.ElementRef<typeof TooltipPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content>
>(({ className, sideOffset = 4, ...props }, ref) => (
  <TooltipPrimitive.Content
    ref={ref}
    sideOffset={sideOffset}
    className={cn(
      "z-50 overflow-hidden rounded-md border border-[#333] bg-[#1F2023] px-3 py-1.5 text-sm text-white shadow-md",
      className,
    )}
    {...props}
  />
));
TooltipContent.displayName = TooltipPrimitive.Content.displayName;

// Button
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost";
  size?: "default" | "sm" | "lg" | "icon";
}
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", ...props }, ref) => {
    const variantClasses = {
      default: "bg-white hover:bg-white/80 text-black",
      outline: "border border-[#444] bg-transparent hover:bg-[#3A3A40]",
      ghost: "bg-transparent hover:bg-[#3A3A40]",
    };
    const sizeClasses = {
      default: "h-10 px-4 py-2",
      sm: "h-8 px-3 text-sm",
      lg: "h-12 px-6",
      icon: "h-8 w-8 rounded-full aspect-[1/1]",
    };
    return (
      <button
        className={cn(
          "inline-flex items-center justify-center font-medium transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50",
          variantClasses[variant],
          sizeClasses[size],
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

// Voice recorder (optional UI; wiring is no-op in this build)
const VoiceRecorder: React.FC<{
  isRecording: boolean;
  onStartRecording: () => void;
  onStopRecording: (duration: number) => void;
  visualizerBars?: number;
}> = ({ isRecording, onStartRecording, onStopRecording, visualizerBars = 32 }) => {
  const [time, setTime] = React.useState(0);
  const timerRef = React.useRef<ReturnType<typeof setInterval> | null>(null);
  React.useEffect(() => {
    if (isRecording) {
      onStartRecording();
      timerRef.current = setInterval(() => setTime((t) => t + 1), 1000);
    } else {
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
      onStopRecording(time);
      setTime(0);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isRecording]);
  const formatTime = (s: number) => {
    const m = Math.floor(s / 60);
    const x = s % 60;
    return `${m.toString().padStart(2, "0")}:${x.toString().padStart(2, "0")}`;
  };
  return (
    <div
      className={cn(
        "flex w-full flex-col items-center justify-center py-3 transition-all duration-300",
        isRecording ? "opacity-100" : "h-0 opacity-0",
      )}
    >
      <div className="mb-3 flex items-center gap-2">
        <div className="h-2 w-2 animate-pulse rounded-full bg-red-500" />
        <span className="font-mono text-sm text-white/80">{formatTime(time)}</span>
      </div>
      <div className="flex h-10 w-full items-center justify-center gap-0.5 px-4">
        {[...Array(visualizerBars)].map((_, i) => (
          <div
            key={i}
            className="w-0.5 animate-pulse rounded-full bg-white/50"
            style={{
              height: `${Math.max(15, Math.random() * 100)}%`,
              animationDelay: `${i * 0.05}s`,
              animationDuration: `${0.5 + Math.random() * 0.5}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
};

// PromptInput context
interface PromptInputContextType {
  isLoading: boolean;
  value: string;
  setValue: (value: string) => void;
  maxHeight: number | string;
  onSubmit?: () => void;
  disabled?: boolean;
}
const PromptInputContext = React.createContext<PromptInputContextType>({
  isLoading: false,
  value: "",
  setValue: () => {},
  maxHeight: 240,
  onSubmit: undefined,
  disabled: false,
});
function usePromptInput() {
  return React.useContext(PromptInputContext);
}

interface PromptInputProps {
  isLoading?: boolean;
  value?: string;
  onValueChange?: (value: string) => void;
  maxHeight?: number | string;
  onSubmit?: () => void;
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
}
const PromptInput = React.forwardRef<HTMLDivElement, PromptInputProps>(
  (
    { className, isLoading = false, maxHeight = 240, value, onValueChange, onSubmit, children, disabled = false },
    ref,
  ) => {
    const [internal, setInternal] = React.useState(value || "");
    const handleChange = (v: string) => {
      setInternal(v);
      onValueChange?.(v);
    };
    return (
      <TooltipProvider>
        <PromptInputContext.Provider
          value={{
            isLoading,
            value: value ?? internal,
            setValue: onValueChange ?? handleChange,
            maxHeight,
            onSubmit,
            disabled,
          }}
        >
          <div
            ref={ref}
            className={cn(
              "rounded-3xl border border-[#444] bg-[#1F2023] p-2 shadow-[0_8px_30px_rgba(0,0,0,0.24)] transition-all duration-300",
              isLoading && "border-red-500/70",
              className,
            )}
          >
            {children}
          </div>
        </PromptInputContext.Provider>
      </TooltipProvider>
    );
  },
);
PromptInput.displayName = "PromptInput";

interface PromptInputTextareaProps {
  disableAutosize?: boolean;
  placeholder?: string;
}
const PromptInputTextarea: React.FC<
  PromptInputTextareaProps & React.ComponentProps<typeof Textarea>
> = ({ className, onKeyDown, disableAutosize = false, placeholder, ...props }) => {
  const { value, setValue, maxHeight, onSubmit, disabled } = usePromptInput();
  const textareaRef = React.useRef<HTMLTextAreaElement>(null);
  React.useEffect(() => {
    if (disableAutosize || !textareaRef.current) return;
    textareaRef.current.style.height = "auto";
    textareaRef.current.style.height =
      typeof maxHeight === "number"
        ? `${Math.min(textareaRef.current.scrollHeight, maxHeight)}px`
        : `min(${textareaRef.current.scrollHeight}px, ${maxHeight})`;
  }, [value, maxHeight, disableAutosize]);
  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      onSubmit?.();
    }
    onKeyDown?.(e);
  };
  return (
    <Textarea
      ref={textareaRef}
      value={value}
      onChange={(e) => setValue(e.target.value)}
      onKeyDown={handleKeyDown}
      className={cn("text-base", className)}
      disabled={disabled}
      placeholder={placeholder}
      {...props}
    />
  );
};

interface PromptInputActionsProps extends React.HTMLAttributes<HTMLDivElement> {}
const PromptInputActions: React.FC<PromptInputActionsProps> = ({
  children,
  className,
  ...props
}) => (
  <div className={cn("flex items-center gap-2", className)} {...props}>
    {children}
  </div>
);

interface PromptInputActionProps {
  tooltip: React.ReactNode;
  children: React.ReactNode;
  side?: "top" | "bottom" | "left" | "right";
}
const PromptInputAction: React.FC<PromptInputActionProps> = ({
  tooltip,
  children,
  side = "top",
}) => {
  return (
    <Tooltip>
      <TooltipTrigger asChild>{children}</TooltipTrigger>
      <TooltipContent side={side}>{tooltip}</TooltipContent>
    </Tooltip>
  );
};

// Main PromptInputBox
interface PromptInputBoxProps {
  onSend?: (message: string) => void;
  isLoading?: boolean;
  placeholder?: string;
  className?: string;
}
export const PromptInputBox = React.forwardRef<HTMLDivElement, PromptInputBoxProps>(
  (props, ref) => {
    const { onSend = () => {}, isLoading = false, placeholder = "Type your message here…", className } = props;
    useInjectStylesOnce();

    const [input, setInput] = React.useState("");
    const [isRecording, setIsRecording] = React.useState(false);
    const hasContent = input.trim() !== "";

    const handleSubmit = () => {
      if (!hasContent) return;
      onSend(input);
      setInput("");
    };

    return (
      <PromptInput
        value={input}
        onValueChange={setInput}
        isLoading={isLoading}
        onSubmit={handleSubmit}
        className={cn(
          "w-full border-[#444] bg-[#1F2023] shadow-[0_8px_30px_rgba(0,0,0,0.24)] transition-all duration-300 ease-in-out",
          isRecording && "border-red-500/70",
          className,
        )}
        disabled={isLoading || isRecording}
        ref={ref}
      >
        <div
          className={cn(
            "transition-all duration-300",
            isRecording ? "h-0 overflow-hidden opacity-0" : "opacity-100",
          )}
        >
          <PromptInputTextarea placeholder={placeholder} className="text-base" />
        </div>

        {isRecording && (
          <VoiceRecorder
            isRecording={isRecording}
            onStartRecording={() => {}}
            onStopRecording={() => setIsRecording(false)}
          />
        )}

        <PromptInputActions className="flex items-center justify-between gap-2 p-0 pt-2">
          <div
            className={cn(
              "flex items-center gap-1 transition-opacity duration-300",
              isRecording ? "invisible h-0 opacity-0" : "visible opacity-100",
            )}
          >
            <span className="text-xs text-white/40 px-2">
              Try: &ldquo;take me to reviews&rdquo; · &ldquo;EB-2 NIW calculator&rdquo;
            </span>
          </div>

          <PromptInputAction
            tooltip={
              isLoading ? "Stop" : isRecording ? "Stop recording" : hasContent ? "Send" : "Voice"
            }
          >
            <Button
              variant="default"
              size="icon"
              className={cn(
                "h-8 w-8 rounded-full transition-all duration-200",
                isRecording
                  ? "bg-transparent text-red-500 hover:bg-gray-600/30 hover:text-red-400"
                  : hasContent
                    ? "bg-white text-[#1F2023] hover:bg-white/80"
                    : "bg-transparent text-[#9CA3AF] hover:bg-gray-600/30 hover:text-[#D1D5DB]",
              )}
              onClick={() => {
                if (isRecording) setIsRecording(false);
                else if (hasContent) handleSubmit();
                else setIsRecording(true);
              }}
              disabled={isLoading && !hasContent}
            >
              {isLoading ? (
                <Square className="h-4 w-4 animate-pulse fill-[#1F2023]" />
              ) : isRecording ? (
                <StopCircle className="h-5 w-5 text-red-500" />
              ) : hasContent ? (
                <ArrowUp className="h-4 w-4 text-[#1F2023]" />
              ) : (
                <Mic className="h-5 w-5 text-[#1F2023]" />
              )}
            </Button>
          </PromptInputAction>
        </PromptInputActions>
      </PromptInput>
    );
  },
);
PromptInputBox.displayName = "PromptInputBox";
