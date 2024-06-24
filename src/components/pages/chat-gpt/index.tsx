"use client";
import React, { useState } from "react";
import axios from "axios";

const ChatGPTComponent = () => {
  const [input, setInput] = useState("");
  const [response, setResponse] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };
  console.log(process.env.REACT_APP_OPENAI_API_KEY);
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        // "https://api.openai.com/v1/engines/davinci-codex/completions"
        " https://api.openai.com/v1/chat/completions",
        {
          prompt: input,
          max_tokens: 150,
          n: 1,
          stop: null,
          temperature: 0.7,
          model: "gpt-3.5-turbo",
          engine: "davinci-codex",
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`, // Replace 'YOUR_API_KEY' with your actual OpenAI API key
          },
        }
      );
      setResponse(res.data.choices[0].text);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="p-4 max-w-md mx-auto bg-gray-800 text-white rounded-md">
      <form onSubmit={handleSubmit}>
        <label
          htmlFor="input"
          className="block mb-2 text-sm font-medium text-gray-200"
        >
          Ask ChatGPT:
        </label>
        <input
          id="input"
          type="text"
          value={input}
          onChange={handleInputChange}
          className="w-full p-2 mb-4 text-gray-900 rounded-md"
        />
        <button
          type="submit"
          className="w-full p-2 bg-blue-500 hover:bg-blue-700 rounded-md text-white"
        >
          Submit
        </button>
      </form>
      {response && (
        <div className="mt-4 p-2 bg-gray-700 rounded-md">
          <h2 className="text-lg font-semibold">Response:</h2>
          <p>{response}</p>
        </div>
      )}
    </div>
  );
};

export { ChatGPTComponent };
