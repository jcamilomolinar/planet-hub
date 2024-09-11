import React from "react";

interface ChatMessageProps {
  message: string;
  isUserMessage?: boolean; // Si es verdadero, indica que es el mensaje del usuario actual
}

export function ChatMessage({ message, isUserMessage = false }: ChatMessageProps) {
  return (
    <div
      className={`max-w-xs p-2 rounded-lg text-white mb-2 ${
        isUserMessage ? "bg-blue-500 self-end" : "bg-gray-300 text-black self-start"
      }`}
      style={{ display: "inline-block" }}
    >
      <p>{message}</p>
    </div>
  );
}
