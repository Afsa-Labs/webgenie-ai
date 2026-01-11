import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { message } = await req.json();

    const prompt = `
You are a professional frontend developer.

Generate a COMPLETE website using:
- HTML
- Tailwind CSS (via CDN)

Rules:
- ONLY return code
- NO explanations
- NO markdown
- NO backticks
- Responsive design
- Include navbar, hero section, content section, footer

Website request:
${message}
`;

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages: [{ role: "user", content: prompt }],
        temperature: 0.7,
      }),
    });

    const data = await response.json();

    return NextResponse.json({
      reply: data.choices[0].message.content,
    });
  } catch (error) {
    return NextResponse.json({ error: "AI generation failed" });
  }
}
