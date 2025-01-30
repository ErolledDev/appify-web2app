import { Button } from "@/components/ui/button";

export const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <a href="/" className="text-2xl font-bold text-primary">
            appify
          </a>
          <Button asChild variant="outline">
            <a href="#" className="flex items-center gap-2">
              Download appify
            </a>
          </Button>
        </div>
      </div>
    </nav>
  );
};