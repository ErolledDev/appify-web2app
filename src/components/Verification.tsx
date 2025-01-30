import { Button } from "@/components/ui/button";
import { Download, Copy, Check } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";

export const Verification = () => {
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();
  const metaTag = '<meta data-name="OpenApp" content="verifyd2x2Q0daenROOWo2QmtTWjJ3WnA0UT09" />';

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(metaTag);
      setCopied(true);
      toast({
        title: "Copied to clipboard",
        description: "The meta tag has been copied to your clipboard.",
      });
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      toast({
        title: "Failed to copy",
        description: "Please try copying manually.",
        variant: "destructive",
      });
    }
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Simple Verification Process</h2>
          <div className="bg-white p-8 rounded-2xl shadow-lg space-y-6">
            <p className="text-lg text-gray-700">
              With a simple one-line script in the meta tag or by uploading a verification file to your root directory.
            </p>
            <div className="bg-gray-50 p-4 rounded-lg relative group">
              <code className="text-sm text-gray-800 block whitespace-pre-wrap break-all">
                {metaTag}
              </code>
              <button
                onClick={handleCopy}
                className="absolute right-2 top-2 p-2 text-gray-500 hover:text-gray-700 transition-colors"
                aria-label="Copy to clipboard"
              >
                {copied ? (
                  <Check className="w-5 h-5 text-green-500" />
                ) : (
                  <Copy className="w-5 h-5" />
                )}
              </button>
            </div>
            <div className="flex justify-center">
              <Button asChild variant="outline">
                <a href="#" className="flex items-center gap-2">
                  <Download className="w-4 h-4" />
                  Download Verification File
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};