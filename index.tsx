import { GoogleGenAI } from "@google/genai";

// Initialize Chatbot Logic when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    
    // --- Mobile Menu Logic ---
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }

    // --- Scroll Animation Logic (Intersection Observer) ---
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1 // Trigger when 10% of the element is visible
    };

    const scrollObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target); // Only animate once
            }
        });
    }, observerOptions);

    // Select all elements to reveal
    const revealElements = document.querySelectorAll('.reveal, .reveal-group');
    revealElements.forEach(el => scrollObserver.observe(el));


    // --- Chatbot Logic ---
    const chatToggleBtn = document.getElementById('chatbot-toggle-btn');
    const chatWindow = document.getElementById('chat-window');
    const closeChatBtn = document.getElementById('close-chat');
    const sendBtn = document.getElementById('send-btn');
    const chatInput = document.getElementById('chat-input') as HTMLInputElement;
    const messagesArea = document.getElementById('messages-area');
    const loadingIndicator = document.getElementById('loading-indicator');

    let history: { role: string; parts: { text: string }[] }[] = [];

    // Toggle Chat Window
    const toggleChat = () => {
        if (chatWindow) {
            if (chatWindow.classList.contains('hidden')) {
                chatWindow.classList.remove('hidden');
                chatWindow.classList.add('flex');
                chatWindow.classList.add('slide-in-bottom');
                if(chatToggleBtn) chatToggleBtn.classList.add('scale-0');
            } else {
                chatWindow.classList.add('hidden');
                chatWindow.classList.remove('flex');
                if(chatToggleBtn) chatToggleBtn.classList.remove('scale-0');
            }
        }
    };

    if (chatToggleBtn) chatToggleBtn.addEventListener('click', toggleChat);
    if (closeChatBtn) closeChatBtn.addEventListener('click', toggleChat);

    // Append Message to UI
    const appendMessage = (role: 'user' | 'model', text: string) => {
        if (!messagesArea) return;

        const msgDiv = document.createElement('div');
        msgDiv.className = `flex ${role === 'user' ? 'justify-end' : 'justify-start'} slide-in-bottom`;
        
        const avatarHtml = role === 'model' 
            ? `<div class="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-2 text-blue-600 text-xs font-bold shrink-0">AI</div>` 
            : '';

        const bubbleClass = role === 'user' 
            ? 'bg-blue-600 text-white rounded-br-none' 
            : 'bg-white text-gray-800 border border-gray-100 rounded-bl-none';

        const time = new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
        const timeClass = role === 'user' ? 'text-blue-200' : 'text-gray-400';

        msgDiv.innerHTML = `
            ${avatarHtml}
            <div class="max-w-[75%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed shadow-sm ${bubbleClass}">
                ${text}
                <div class="text-[10px] mt-1 ${timeClass}">${time}</div>
            </div>
        `;
        
        messagesArea.appendChild(msgDiv);
        messagesArea.scrollTop = messagesArea.scrollHeight;
    };

    // Initialize Gemini AI
    // NOTE: In ASP.NET, you should manage the API key securely on the backend if possible, 
    // or inject it into the frontend securely.
    const apiKey = process.env.API_KEY;
    const ai = new GoogleGenAI({ apiKey });
    
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

    const handleSendMessage = async () => {
        if (!chatInput || !chatInput.value.trim()) return;
        
        const userText = chatInput.value.trim();
        appendMessage('user', userText);
        chatInput.value = '';
        
        if (loadingIndicator) loadingIndicator.classList.remove('hidden');
        if (messagesArea) messagesArea.scrollTop = messagesArea.scrollHeight;

        try {
            // Setup history for context
            const chatHistory = history.length > 0 ? history : undefined;
            
            const chat = ai.chats.create({
                model: 'gemini-3-flash-preview',
                config: {
                    systemInstruction: SYSTEM_INSTRUCTION,
                },
                history: chatHistory
            });

            const result = await chat.sendMessage({ message: userText });
            const responseText = result.text || "Xin lỗi, tôi không thể trả lời lúc này.";

            // Update history
            history.push({ role: 'user', parts: [{ text: userText }] });
            history.push({ role: 'model', parts: [{ text: responseText }] });

            appendMessage('model', responseText);

        } catch (error) {
            console.error("Gemini Error:", error);
            appendMessage('model', "Xin lỗi, hệ thống đang bận. Vui lòng thử lại sau.");
        } finally {
            if (loadingIndicator) loadingIndicator.classList.add('hidden');
            if (messagesArea) messagesArea.scrollTop = messagesArea.scrollHeight;
        }
    };

    if (sendBtn) sendBtn.addEventListener('click', handleSendMessage);
    if (chatInput) {
        chatInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') handleSendMessage();
        });
    }
});
