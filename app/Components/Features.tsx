export default function Features() {
  return (
    <section className="max-w-6xl mx-auto mt-24 px-6">
      <h2 className="text-4xl font-bold text-center mb-10">
        Powerful Features of <span className="text-blue-600">WebGenie-AI</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* FEATURE 1 */}
        <div className="p-6 bg-white shadow-md rounded-xl text-center">
          <h3 className="text-2xl font-semibold mb-3">AI Website Builder</h3>
          <p className="text-gray-600">
            Generate complete websites instantly with the power of AI.
          </p>
        </div>

        {/* FEATURE 2 */}
        <div className="p-6 bg-white shadow-md rounded-xl text-center">
          <h3 className="text-2xl font-semibold mb-3">Smart Optimization</h3>
          <p className="text-gray-600">
            Improve performance, SEO, and layout automatically.
          </p>
        </div>

        {/* FEATURE 3 */}
        <div className="p-6 bg-white shadow-md rounded-xl text-center">
          <h3 className="text-2xl font-semibold mb-3">Instant Deployment</h3>
          <p className="text-gray-600">
            Deploy your website to the internet with a single click.
          </p>
        </div>

      </div>
    </section>
  );
}
