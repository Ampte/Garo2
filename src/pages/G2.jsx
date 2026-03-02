import { useState, useRef, useEffect } from "react";
import "/src/styles/G2.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const API = import.meta.env.VITE_API_URL;


export default function G2() {

  const [messages, setMessages] = useState([
    { text: "Hello! How can I help you?", sender: "bot" },
  ]);

  const [input, setInput] = useState("");
  const chatEndRef = useRef(null);

  /* ---------- AUTO SCROLL ---------- */
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  /* ---------- SEND MESSAGE ---------- */
  const sendMessage = async () => {
  if (!input.trim()) return;

  const userMessage = { text: input, sender: "user" };
  setMessages(prev => [...prev, userMessage]);
  setInput("");

  try {
    const response = await fetch(`${API}/getResponse`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ input }),
    });

    if (!response.ok) {
      throw new Error("API failed");
    }

    const data = await response.json();

    setMessages(prev => [
      ...prev,
      { text: data.reply, sender: "bot" }
    ]);

  } catch (error) {
    console.error("FETCH ERROR:", error);

    setMessages(prev => [
      ...prev,
      { text: "Server not responding.", sender: "bot" },
    ]);
  }
};
  /* ---------- ENTER KEY ---------- */
  const handleKeyPress = (e) => {
    if (e.key === "Enter") sendMessage();
  };

  return (
    <>
      <Navbar />

      <div className="chat-container">

        <div className="chat-header">💬 G2</div>

        <div className="chat-body">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`message-row ${
                msg.sender === "user" ? "user" : "bot"
              }`}
            >
              <div className="avatar"></div>
              <div className="message-bubble">{msg.text}</div>
            </div>
          ))}
          <div ref={chatEndRef}></div>
        </div>

        <div className="chat-input">
          <input
            type="text"
            placeholder="Message"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyPress}
          />

          <button onClick={sendMessage}>Send</button>
        </div>

      </div>

      <Footer />
    </>
  );
}