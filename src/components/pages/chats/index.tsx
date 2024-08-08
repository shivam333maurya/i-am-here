"use client";
import { useEffect, useRef, useState } from "react";
import { FaPaperPlane } from "react-icons/fa";
import io from "socket.io-client";
import { IoMdSend } from "react-icons/io";

// const socket = io("http://localhost:8000"); // Connect to backend

const Socket = () => {
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState<string[]>(["Hi", "Hello!"]);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    const handleMessage = (msg: string) => {
      setChat((prevChat) => [...prevChat, msg]);
    };

    // socket.on("message", handleMessage);

    return () => {
      // socket.off("message", handleMessage);
    };
  }, []);

  useEffect(() => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = "auto"; // Reset the height to auto to get the correct scrollHeight
      textarea.style.height = `${textarea.scrollHeight}px`; // Set the height based on scrollHeight
    }
  }, [message]);

  const sendMessage = () => {
    // socket.emit("message", message);
    setMessage("");
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter") {
      e.preventDefault(); // Prevent default Enter behavior
      if (!e.shiftKey) {
        sendMessage();
      }
    }
  };

  return (
    <div className="w-2/3 h-screen flex flex-col justify-end">
      <div className="flex flex-col w-[calc(100%-60px)] justify-end p-2">
        {chat.map((msg, index) => (
          <div
            key={index}
            className={`${index % 2 === 0 ? "self-start" : "self-end"}`}
          >
            {msg}
          </div>
        ))}
      </div>
      <div className="flex items-center gap-2 justify-start w-full mb-6">
        <textarea
          ref={textareaRef}
          className="shadow appearance-none border rounded-[20px] w-[calc(100%-60px)] py-2 px-3 text-gray-900 leading-tight bg-gray-700 focus:outline-none focus:shadow-outline"
          placeholder="Type here to send message"
          value={message}
          rows={1}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={handleKeyDown}
          style={{
            resize: "none", // Prevent manual resizing
            overflow: "hidden", // Hide scrollbars
            // maxHeight: "60px", // Maximum height, adjust if needed
          }}
        />
        <IoMdSend
          onClick={sendMessage}
          fontSize={26}
          style={{
            // transform: "translateY(-50%)",
            cursor: "pointer",
            color: "white", // Icon color
          }}
        />
      </div>
    </div>
  );
};

export { Socket };
