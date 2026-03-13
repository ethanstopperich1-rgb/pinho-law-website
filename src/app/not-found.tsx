import { Link } from "@/i18n/navigation";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-[#1A1A2E] antialiased">
        <Container className="flex min-h-screen flex-col items-center justify-center text-center">
          <h1 className="text-6xl font-bold">404</h1>
          <p className="mt-4 text-lg text-[#6B6B80]">
            The page you are looking for does not exist.
          </p>
          <div className="mt-8">
            <a href="/en">
              <Button>Back to Home</Button>
            </a>
          </div>
        </Container>
      </body>
    </html>
  );
}
