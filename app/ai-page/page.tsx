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
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-100 via-purple-100 to-indigo-200 animate-[pulse_8s_ease-in-out_infinite]" />

      <div className="relative z-10 p-4 md:p-6">
        <div className="max-w-7xl mx-auto">
          <header className="flex justify-between items-center mb-6 md:mb-10">
            <Logo />
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {/* LEFT */}
            <div className="bg-white/80 backdrop-blur-xl rounded-2xl shadow-2xl p-5 md:p-6 space-y-5">
              <h2 className="text-lg md:text-xl font-semibold">
                Create your AI Website
              </h2>

              <div className="grid grid-cols-2 gap-3 md:gap-4">
                {templates.map((item) => (
                  <button
                    key={item}
                    onClick={() => setTemplate(item)}
                    className={`p-2 md:p-3 rounded-xl border transition font-medium text-sm md:text-base ${
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
                className="w-full border rounded-xl p-3 h-24 md:h-28 text-sm md:text-base"
                placeholder="Describe your website idea..."
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
              />

              <button
                onClick={generateWebsite}
                disabled={loading}
                className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3 rounded-xl font-semibold text-sm md:text-base"
              >
                {loading ? "Generating..." : "Generate Website ✨"}
              </button>
            </div>

            {/* RIGHT */}
            <div className="bg-white/80 backdrop-blur-xl rounded-2xl shadow-2xl p-4 space-y-4">

              {/* LIVE PREVIEW */}
              {code ? (
                <iframe
                  title="Live Preview"
                  srcDoc={code}
                  className="w-full h-[260px] md:h-[350px] rounded-xl border"
                />
              ) : (
                <div className="h-[260px] md:h-[350px] flex items-center justify-center text-gray-400 text-sm">
                  Live preview will appear here
                </div>
              )}

              {/* GENERATED CODE */}
              {code && (
                <>
                  <h3 className="font-semibold text-base md:text-lg">
                    Generated Code
                  </h3>

                  <pre className="bg-black text-green-400 text-xs md:text-sm p-3 md:p-4 rounded-xl max-h-[220px] md:max-h-[300px] overflow-auto">
                    <code>{code}</code>
                  </pre>

                  <button
                    onClick={() => {
                      navigator.clipboard.writeText(code);
                      alert("Code copied successfully!");
                    }}
                    className="w-full bg-indigo-600 text-white py-2 rounded-xl font-semibold text-sm md:text-base hover:bg-indigo-700"
                  >
                    Copy Code
                  </button>
                </>
              )}

            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
