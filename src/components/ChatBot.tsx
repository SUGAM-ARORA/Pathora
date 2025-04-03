import { useState } from "react";
import axios from "axios";

interface Message {
  text: string;
  sender: "user" | "bot";
}

const Chatbot = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");

  const sendMessage = async () => {
    if (!input.trim()) return;
  
    const newMessages: Message[] = [...messages, { text: input, sender: "user" as "user" }];
    setMessages(newMessages);
    setInput("");
  
    try {
      const response = await axios.post("http://localhost:5000/chat", {
        message: input,
      });
  
      setMessages([...newMessages, { text: response.data.reply, sender: "bot" as "bot" }]);
    } catch (error) {
      console.error("Error fetching response:", error);
    }
  };
  

  return (
    <div className="w-full max-w-md p-4 mx-auto bg-gray-100 shadow-lg rounded-xl">
      <h2 className="mb-3 text-xl font-semibold text-center">Gemini Chatbot</h2>

      {/* Chat Box */}
      <div className="p-3 overflow-y-auto bg-white border rounded-md shadow-inner h-80">
        {messages.map((msg, index) => (
          <div key={index} className={`mb-2 flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}>
            <div
              className={`px-4 py-2 max-w-xs rounded-lg ${
                msg.sender === "user" ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-900"
              }`}
            >
              {msg.text}
            </div>
          </div>
        ))}
      </div>

      {/* Input Box */}
      <div className="flex mt-3">
        <input
          type="text"
          className="flex-1 px-3 py-2 border rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Type a message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
        />
        <button
          className="px-4 py-2 text-white transition bg-blue-500 rounded-r-md hover:bg-blue-600"
          onClick={sendMessage}
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default Chatbot;
