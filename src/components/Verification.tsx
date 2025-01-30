export const Verification = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Simple Verification Process</h2>
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <p className="text-lg text-gray-700 mb-6">
              With a simple one-line script in the meta tag or by uploading a verification file to your root directory.
            </p>
            <div className="bg-gray-50 p-4 rounded-lg">
              <code className="text-sm text-gray-800">
                &lt;meta name="appify-verification" content="your-unique-code" /&gt;
              </code>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};