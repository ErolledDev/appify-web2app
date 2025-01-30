import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

export const Verification = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Simple Verification Process</h2>
          <div className="bg-white p-8 rounded-2xl shadow-lg space-y-6">
            <p className="text-lg text-gray-700">
              With a simple one-line script in the meta tag or by uploading a verification file to your root directory.
            </p>
            <div className="bg-gray-50 p-4 rounded-lg">
              <code className="text-sm text-gray-800 block">
                &lt;meta data-name="OpenApp" content="verifyd2x2Q0daenROOWo2QmtTWjJ3WnA0UT09" /&gt;
              </code>
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