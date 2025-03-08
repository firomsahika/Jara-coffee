import React, { useState } from "react";
import { FiMessageCircle } from "react-icons/fi"; // Importing the chat bubble icon

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const toggleChatbot = () => {
    setIsOpen(!isOpen);
  };

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleSendMessage = () => {
    if (input.trim()) {
      setMessages([...messages, { sender: "user", text: input }]);
      setInput(""); // Clear the input field

      // Simulate a response from the chatbot
      setTimeout(() => {
        setMessages((prevMessages) => [
          ...prevMessages,
          { sender: "bot", text: "Thanks for your message!" },
        ]);
      }, 1000);
    }
  };

  return (
    <div className="">
      {/* Chat Icon and Text Below */}
      <div
        className={`fixed bottom-5 right-5 flex gap-2 items-center cursor-pointer ${
          isOpen ? "hidden" : "block"
        }`}
        onClick={toggleChatbot}
      >
        {/* React Icons Chat Bubble */}
        <span className="hidden md:flex lg:flex text-gray-800 rounded-2xl shadow-2xl bg-white p-3 text-md  poppins mt-2 ">Chat with us👋</span>
        <FiMessageCircle size={50} className="text-white text-3xl p-3 bg-green-500 rounded-full shadow-lg" />
       
      </div>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-5 right-5 w-80 bg-white rounded-lg shadow-lg border border-gray-300">
          <div className="flex justify-between items-center bg-green-500 p-3 rounded-t-lg">
            <h4 className="text-white font-semibold">Chatbot</h4>
            <button className="text-white" onClick={toggleChatbot}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <div className="p-4 h-60 overflow-y-auto space-y-3">
            {/* Messages */}
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`p-3 rounded-lg ${
                    msg.sender === "user"
                      ? "bg-green-500 text-white"
                      : "bg-gray-200 text-gray-700"
                  } max-w-xs`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
          </div>

          {/* Input and Send Button */}
          <div className="flex items-center p-3 border-t border-gray-300">
            <input
              type="text"
              value={input}
              onChange={handleInputChange}
              placeholder="Type a message..."
              className="w-full p-2 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <button
              className="ml-3 p-2 bg-green-500 text-white rounded-lg"
              onClick={handleSendMessage}
            >
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
