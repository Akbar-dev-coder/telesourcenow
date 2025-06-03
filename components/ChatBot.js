"use client";
import { useState } from "react";
import { Button } from "./ui/button";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosSend } from "react-icons/io";

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      from: "bot",
      text: "Hi! How can I help you today?",
    },
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;
    const userMessage = { from: "user", text: input };
    const botReply = {
      from: "bot",
      text: `You said: "${input}". Let me look into that for you!`,
    };
    setMessages([...messages, userMessage, botReply]);
    setInput("");
  };

  return (
    <>
      <Button
        className={
          "fixed bottom-6 right-6 w-14 h-14 bg-[#6b47cf] text-white rounded-full shadow-lg text-2xl flex items-center justify-center hover:bg-[#735192] transition cursor-pointer"
        }
        onClick={() => setIsOpen(!isOpen)}
      >
        💬
      </Button>
      <div
        className={`fixed bottom-22 right-6 w-80 max-w-sm h-[380px] bg-white rounded-2xl shadow-xl flex flex-col transition-all duration-300 transform origin-bottom-right z-50 ${
          isOpen
            ? "scale-100 opacity-100"
            : "scale-75 opacity-0 pointer-events-none"
        }`}
      >
        <div className="bg-[#6b47cf] text-white px-4 py-3 flex justify-between items-center rounded-t-2xl">
          <span className="font-semibold">🤖 Chatbot</span>
          <IoIosArrowDown
            onClick={() => setIsOpen(false)}
            className="cursor-pointer"
          />
        </div>
        <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-gray-100">
          {messages.map((msg, i) => (
            <div
              key={i}
              className={`flex items-end ${
                msg.from === "user" ? "justify-end" : ""
              }`}
            >
              {msg.from === "bot" && (
                <div className="w-8 h-8 bg-purple-200 rounded-full flex items-center justify-center mr-2 text-sm">
                  🤖
                </div>
              )}
              <div
                className={`px-4 py-2 rounded-2xl text-sm max-w-[75%] ${
                  msg.from === "user"
                    ? "bg-[#6b47cf] text-white rounded-br-none"
                    : "bg-white text-black rounded-bl-none"
                }`}
              >
                {msg.text}
              </div>
              {msg.from === "user" && (
                <div className="w-8 h-8 bg-purple-200 rounded-full flex items-center justify-center ml-2 text-sm">
                  🙋
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="flex items-center border-t px-3 py-2 bg-white">
          <input
            type="text"
            placeholder="Message..."
            className="flex-1 p-2 border border-gray-300 rounded-lg text-sm outline-none"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
          />
          <IoIosSend
            onClick={handleSend}
            className="text-2xl mx-2 bg-[#6b47cf] text-white rounded-xl  w-10 h-9 hover:bg-[#735192] transition cursor-pointer"
          />
        </div>
      </div>
    </>
  );
};

export default ChatBot;
