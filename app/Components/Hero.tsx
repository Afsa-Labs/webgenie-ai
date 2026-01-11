import Link from "next/link";

export default function Hero() {
  return (
    <section className="flex flex-col items-center text-center mt-20 px-6">
      <h1 className="text-5xl font-bold">
        Welcome to <span className="text-blue-600">WebGenie-AI</span>
      </h1>

      <p className="mt-4 text-gray-600 max-w-xl">
        Your personal AI assistant to build and generate websites effortlessly.
      </p>

      <Link href="/ai-page">
        <button className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg text-lg hover:bg-blue-700 transition">
          Get Started
        </button>
      </Link>
    </section>
  );
}
