import { type KeyboardEvent, useState } from "react";
import { motion } from "motion/react";
import { Bot, MessageSquare, Send, X } from "lucide-react";

const INITIAL_MESSAGES = [
  {
    sender: "assistant",
    text: "Hello! This is your chatbox preview. You can send messages here, but AI responses are not enabled yet.",
  },
];

export function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState(INITIAL_MESSAGES);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    const trimmed = input.trim();
    if (!trimmed) return;

    setMessages((prev) => [...prev, { sender: "user", text: trimmed }]);
    setInput("");
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      event.preventDefault();
      sendMessage();
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {open && (
        <motion.div
          initial={{ opacity: 0, y: 16, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          className="w-[320px] rounded-3xl bg-[#141414] border border-green-500/20 shadow-2xl shadow-black/50 overflow-hidden"
        >
          <div className="flex items-center justify-between gap-3 bg-[#0c0c0c] px-4 py-3 border-b border-green-500/10">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-green-400/10 text-green-400">
                <Bot size={18} />
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-green-400">Chatbox</p>
                <p className="text-sm text-white">Portfolio preview</p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="rounded-full p-2 text-gray-400 hover:text-white transition-colors"
              aria-label="Close chatbox"
            >
              <X size={16} />
            </button>
          </div>

          <div className="space-y-3 p-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.sender === "assistant" ? "justify-start" : "justify-end"}`}
              >
                <div
                  className={`max-w-[85%] rounded-3xl p-3 text-sm leading-relaxed ${
                    message.sender === "assistant"
                      ? "bg-[#0d0d0d] text-gray-300"
                      : "bg-green-500/15 text-green-200 border border-green-500/30"
                  }`}
                >
                  <p>{message.text}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="border-t border-green-500/10 bg-[#0b0b0b] px-4 py-3">
            <div className="flex items-center gap-3">
              <MessageSquare size={16} className="text-gray-500" />
              <input
                type="text"
                value={input}
                onChange={(event) => setInput(event.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Type a message..."
                className="w-full bg-transparent text-sm text-gray-200 placeholder:text-gray-500 outline-none"
              />
              <button
                type="button"
                onClick={sendMessage}
                className="rounded-full bg-green-400/10 p-2 text-green-400 hover:bg-green-400/20 transition-colors"
              >
                <Send size={14} />
              </button>
            </div>
          </div>
        </motion.div>
      )}

      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        className="relative flex h-14 w-14 items-center justify-center rounded-full bg-green-400 text-[#0a0a0a] shadow-2xl shadow-green-500/20 transition-transform duration-200 hover:-translate-y-0.5"
        aria-label="Open chatbox"
      >
        <Bot size={24} />
        <span className="absolute -top-1 -right-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-black text-[10px] text-white border border-green-400/50">
          Chat
        </span>
      </button>
    </div>
  );
}
