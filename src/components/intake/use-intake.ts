"use client";

import { useCallback, useMemo, useState } from "react";
import {
  type IntakeData,
  type IntakeStep,
  type ServiceType,
  type ImmigrationCategory,
  type BusinessCategory,
  type ContactMethod,
  INITIAL_INTAKE_DATA,
  getStepSequence,
} from "./types";

export function useIntake() {
  const [data, setData] = useState<IntakeData>(INITIAL_INTAKE_DATA);
  const [currentStep, setCurrentStep] = useState<IntakeStep>("welcome");
  const [direction, setDirection] = useState<1 | -1>(1);

  const steps = useMemo(() => getStepSequence(data.service), [data.service]);
  const currentIndex = steps.indexOf(currentStep);
  const progress = steps.length > 1 ? currentIndex / (steps.length - 1) : 0;

  const goTo = useCallback(
    (step: IntakeStep, dir: 1 | -1 = 1) => {
      setDirection(dir);
      setCurrentStep(step);
    },
    []
  );

  const next = useCallback(() => {
    const idx = steps.indexOf(currentStep);
    if (idx < steps.length - 1) {
      goTo(steps[idx + 1], 1);
    }
  }, [steps, currentStep, goTo]);

  const back = useCallback(() => {
    const idx = steps.indexOf(currentStep);
    if (idx > 0) {
      goTo(steps[idx - 1], -1);
    }
  }, [steps, currentStep, goTo]);

  const canGoBack = currentIndex > 0 && currentStep !== "complete";

  const setService = useCallback(
    (service: ServiceType) => {
      setData((prev) => ({
        ...prev,
        service,
        // Reset sub-categories when service changes
        immigrationCategory: null,
        businessCategory: null,
      }));
    },
    []
  );

  const setImmigrationCategory = useCallback(
    (category: ImmigrationCategory) => {
      setData((prev) => ({ ...prev, immigrationCategory: category }));
    },
    []
  );

  const setBusinessCategory = useCallback(
    (category: BusinessCategory) => {
      setData((prev) => ({ ...prev, businessCategory: category }));
    },
    []
  );

  const setContactField = useCallback(
    (field: keyof Pick<IntakeData, "firstName" | "lastName" | "email" | "phone">, value: string) => {
      setData((prev) => ({ ...prev, [field]: value }));
    },
    []
  );

  const setPreferredContact = useCallback(
    (method: ContactMethod) => {
      setData((prev) => ({ ...prev, preferredContact: method }));
    },
    []
  );

  const setMessage = useCallback(
    (message: string) => {
      setData((prev) => ({ ...prev, message }));
    },
    []
  );

  const reset = useCallback(() => {
    setData(INITIAL_INTAKE_DATA);
    setCurrentStep("welcome");
    setDirection(1);
  }, []);

  return {
    data,
    currentStep,
    direction,
    steps,
    currentIndex,
    progress,
    canGoBack,
    next,
    back,
    goTo,
    setService,
    setImmigrationCategory,
    setBusinessCategory,
    setContactField,
    setPreferredContact,
    setMessage,
    reset,
  };
}
