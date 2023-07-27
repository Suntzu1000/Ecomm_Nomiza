import express from 'express';

let openai: any;
import('openai').then((OpenAIApi) => openai = OpenAIApi);

// rest of the code


const openaiRouter = express.Router();

openaiRouter.post('/generate', async (req, res) => {
  const prompt = req.body.prompt;

  try {
    await openai;
    const result = await openai.Completion.create({
      engine: 'text-davinci-002',
      prompt: prompt,
      max_tokens: 60,
    });

    res.json(result.data);
  } catch (error) {
    res.status(500).json({ error: 'Error calling OpenAI API' });
  }
});


export { openaiRouter };
