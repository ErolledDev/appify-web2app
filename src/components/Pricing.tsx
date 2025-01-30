import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export const Pricing = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container px-4 mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Simple Pricing</h2>
        <div className="max-w-md mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="p-8">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-2xl font-bold">App Building</h3>
              <Badge variant="secondary" className="text-lg">
                50% OFF
              </Badge>
            </div>
            <div className="mb-6">
              <span className="text-4xl font-bold">$10</span>
              <span className="text-gray-500 line-through ml-2">$20</span>
            </div>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center">
                <Check className="w-5 h-5 text-primary mr-2" />
                <span>Android/iOS App Building</span>
              </li>
              <li className="flex items-center">
                <Check className="w-5 h-5 text-primary mr-2" />
                <span>Add-ons: $5 for Android/iOS</span>
              </li>
            </ul>
            <Button asChild className="w-full bg-accent hover:bg-accent/90">
              <a href="https://form.google.com" target="_blank" rel="noopener noreferrer">
                Get Started Now
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};