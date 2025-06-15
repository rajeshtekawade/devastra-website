import { GoogleGenerativeAI } from '@google/generative-ai';

export const getGeminiResponse = async (prompt: string) => {
  try {
    console.log('API Key exists:', !!process.env.NEXT_PUBLIC_GEMINI_API_KEY);
    
    const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
    
    if (!apiKey) {
      console.error('API key is missing from environment variables');
      return "API key is not configured properly.";
    }

    console.log('Initializing Google AI...');
    
    // Initialize the Google AI SDK
    const genAI = new GoogleGenerativeAI(apiKey);
    
    // Try different models
    const models = ["gemini-1.5-flash", "gemini-pro"];
    
    for (const modelName of models) {
      try {
        console.log(`Trying model: ${modelName}`);
        
        const model = genAI.getGenerativeModel({ model: modelName });

        // Create the prompt
        const fullPrompt = `You are ApX Engine, DevAstra Tech's proprietary AI assistant. You are helpful, knowledgeable, and professional. Please respond to: ${prompt}`;

        console.log('Sending request to Gemini...');
        
        // Generate content with timeout
        const result = await Promise.race([
          model.generateContent(fullPrompt),
          new Promise((_, reject) => 
            setTimeout(() => reject(new Error('Request timeout')), 30000)
          )
        ]) as any;

        console.log('Got result, extracting response...');
        
        const response = await result.response;
        const text = response.text();

        console.log('Gemini response received successfully');
        console.log('Response preview:', text.substring(0, 100));
        
        return text || "Sorry, I didn't get that.";
        
      } catch (modelError) {
        console.error(`Error with model ${modelName}:`, modelError);
        continue; // Try next model
      }
    }
    
    throw new Error('All models failed');

  } catch (error) {
    console.error('Error calling Gemini API:', error);
    
    if (error instanceof Error) {
      console.error('Error name:', error.name);
      console.error('Error message:', error.message);
      console.error('Error stack:', error.stack);
      
      if (error.message.includes('API key not valid') || error.message.includes('invalid API key')) {
        return "API key is invalid. Please check your configuration.";
      } else if (error.message.includes('quota') || error.message.includes('QUOTA_EXCEEDED')) {
        return "API quota exceeded. Please try again later.";
      } else if (error.message.includes('timeout')) {
        return "Request timed out. Please try again.";
      } else if (error.message.includes('PERMISSION_DENIED')) {
        return "Permission denied. Please check API key permissions.";
      }
    }
    
    return "I apologize, but I'm experiencing technical difficulties. Please try again in a moment.";
  }
};
