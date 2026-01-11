export default function Services() {
  return (
    <section className="max-w-6xl mx-auto mt-24 px-6">
      <h2 className="text-4xl font-bold text-center mb-10">
        Our <span className="text-blue-600">Services</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* SERVICE 1 */}
        <div className="p-6 bg-white shadow-md rounded-xl text-center">
          <h3 className="text-2xl font-semibold mb-3">AI Website Generation</h3>
          <p className="text-gray-600">
            Create full websites instantly with AI, no coding required.
          </p>
        </div>

        {/* SERVICE 2 */}
        <div className="p-6 bg-white shadow-md rounded-xl text-center">
          <h3 className="text-2xl font-semibold mb-3">SEO Optimization</h3>
          <p className="text-gray-600">
            Improve website SEO automatically for better rankings.
          </p>
        </div>

        {/* SERVICE 3 */}
        <div className="p-6 bg-white shadow-md rounded-xl text-center">
          <h3 className="text-2xl font-semibold mb-3">Custom Templates</h3>
          <p className="text-gray-600">
            Choose from multiple ready-to-use templates for fast setup.
          </p>
        </div>

        {/* SERVICE 4 */}
        <div className="p-6 bg-white shadow-md rounded-xl text-center">
          <h3 className="text-2xl font-semibold mb-3">Instant Deployment</h3>
          <p className="text-gray-600">
            Deploy your website online with a single click, instantly live.
          </p>
        </div>
      </div>
    </section>
  );
}
