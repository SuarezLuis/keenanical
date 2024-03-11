import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPEN_AI_API_KEY as string,
});

export const POST = async (req: Request) => {
  const body: { action: string; text: string } = await req.json();
  let command = "";
  switch (body.action) {
    case "kennanicalize":
      command = "Use as many fancy and complicated words to say: ";
      break;
    case "dekennanicalize":
      command = "Use the simplest language to say: ";
      break;
    default:
      command = "Use as many fancy words to say: ";
  }

  const completion = await openai.chat.completions.create({
    messages: [
      {
        role: "system",
        content: `${command} ${body.text}`,
      },
    ],
    model: "gpt-3.5-turbo",
  });

  return new Response(JSON.stringify(completion.choices[0].message.content), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
};
