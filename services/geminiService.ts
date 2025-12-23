import { GoogleGenAI } from "@google/genai";

// Initialize the client
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const SYSTEM_INSTRUCTION = `
Bạn là Trợ lý ảo AI của Trung tâm Dịch vụ Việc làm Đồng Nai.
Nhiệm vụ của bạn là hỗ trợ người lao động và doanh nghiệp trả lời các câu hỏi liên quan đến:
1. Tìm kiếm việc làm.
2. Bảo hiểm thất nghiệp.
3. Thủ tục hành chính.
4. Thông tin liên hệ của trung tâm.

Phong cách trả lời: Thân thiện, chuyên nghiệp, ngắn gọn và sử dụng Tiếng Việt.
Nếu không biết câu trả lời, hãy hướng dẫn họ liên hệ hotline: 02513 894 810.
`;

export const sendMessageToGemini = async (message: string, history: {role: string, parts: {text: string}[]}[]): Promise<string> => {
  try {
    const chat = ai.chats.create({
      model: 'gemini-3-flash-preview',
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      },
      history: history 
    });

    const result = await chat.sendMessage({ message: message });
    return result.text || "Xin lỗi, tôi không thể xử lý yêu cầu này lúc này.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Hệ thống đang bận, vui lòng thử lại sau.";
  }
};