"use client";

import { useState } from "react";
import Logo from "../Components/Logo";

const templates = [
  "Portfolio",
  "Business Website",
  "Restaurant",
  "Landing Page",
];

export default function AIPage() {
  const [prompt, setPrompt] = useState("");
  const [template, setTemplate] = useState("");
  const [code, setCode] = useState("");
  const [loading, setLoading] = useState(false);

  const generateWebsite = async () => {
    if (!prompt || !template) return;

    setLoading(true);
    setCode("");

    const res = await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        message: `${template} website. ${prompt}`,
      }),
    });

    const data = await res.json();
    setCode(data.reply);
    setLoading(false);
  };

  return (
    <main className="min-h-screen relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-100 via-purple-100 to-indigo-200 animate-[pulse_8s_ease-in-out_infinite]" />

      <div className="relative z-10 p-6">
        <div className="max-w-7xl mx-auto">
          <header className="flex justify-between items-center mb-10">
            <Logo />
          </header>

          <div className="grid md:grid-cols-2 gap-8">
            {/* LEFT */}
            <div className="bg-white/80 backdrop-blur-xl rounded-2xl shadow-2xl p-6 space-y-6">
              <h2 className="text-xl font-semibold">
                Create your AI Website
              </h2>

              <div className="grid grid-cols-2 gap-4">
                {templates.map((item) => (
                  <button
                    key={item}
                    onClick={() => setTemplate(item)}
                    className={`p-3 rounded-xl border transition font-medium ${
                      template === item
                        ? "bg-indigo-600 text-white"
                        : "bg-gray-100 hover:bg-gray-200"
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>

              <textarea
                className="w-full border rounded-xl p-3 h-28"
                placeholder="Describe your website idea..."
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
              />

              <button
                onClick={generateWebsite}
                disabled={loading}
                className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3 rounded-xl font-semibold"
              >
                {loading ? "Generating..." : "Generate Website ✨"}
              </button>
            </div>

            {/* RIGHT */}
            <div className="bg-white/80 backdrop-blur-xl rounded-2xl shadow-2xl overflow-hidden">
              {code ? (
                <iframe
                  title="Live Preview"
                  srcDoc={code}
                  className="w-full h-[600px]"
                />
              ) : (
                <div className="h-[600px] flex items-center justify-center text-gray-400">
                  Live preview will appear here
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
