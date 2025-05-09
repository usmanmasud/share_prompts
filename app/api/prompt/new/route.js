import { connectToDB } from "@utils/database";
import Prompt from "@models/prompt";

export const POST = async (request) => {
  const { userId, prompt, tag } = await request.json();
  console.log("userId:", userId);

  try {
    await connectToDB();

    const newPrompt = new Prompt({
      creator: userId,
      prompt: prompt,
      tag: tag,
    });

    await newPrompt.save();

    return new Response(JSON.stringify(newPrompt), {
      status: 201,
    });
  } catch (error) {
    return new Response("failed to create a new prompt", { status: 500 });
  }
};
