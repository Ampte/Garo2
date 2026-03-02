import { useState } from "react";
import "../styles/Translator.css";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const API = import.meta.env.VITE_API_URL;

function Translator() {

  /* ---------- STATES ---------- */

  const [sourceLang, setSourceLang] = useState("english");
  const [targetLang, setTargetLang] = useState("garo");

  const [inputText, setInputText] = useState("");
  const [translatedText, setTranslatedText] = useState("");
  const [loading, setLoading] = useState(false);

  /* ---------- SWAP ---------- */

  const handleSwap = () => {
    const tempLang = sourceLang;
    setSourceLang(targetLang);
    setTargetLang(tempLang);

    const tempText = inputText;
    setInputText(translatedText);
    setTranslatedText(tempText);
  };

  /* ---------- TRANSLATE ---------- */

  const handleTranslate = async () => {
  if (!inputText.trim()) return;

  if (sourceLang === targetLang) {
    setTranslatedText(inputText);
    return;
  }

  try {
    setLoading(true);

    const response = await fetch(`${API}/translate`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        text: inputText,
        from: sourceLang,
        to: targetLang,
      }),
    });

    if (!response.ok) {
      throw new Error("API request failed");
    }

    const data = await response.json();

    setTranslatedText(
      data.translation || data.reply || "Not found"
    );

  } catch (error) {
    console.error(error);
    setTranslatedText("Translation failed");
  } finally {
    setLoading(false);
  }
};
  /* ---------- UI ---------- */

  return (
    <>
      <Navbar />

      <div className="page">
        <div className="translator-card">

          <div className="card-header">
            <span>💬 Translate</span>
          </div>

          <div className="language-row">

            <select
              value={sourceLang}
              onChange={(e) => setSourceLang(e.target.value)}
            >
              <option value="english">English</option>
              <option value="garo">Garo</option>
            </select>

            <span className="swap" onClick={handleSwap}>⇄</span>

            <select
              value={targetLang}
              onChange={(e) => setTargetLang(e.target.value)}
            >
              <option value="garo">Garo</option>
              <option value="english">English</option>
            </select>

          </div>

          <div className="text-area-row">

            <textarea
              placeholder="Enter text..."
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
            />

            <textarea
              placeholder="Translation..."
              value={loading ? "Translating..." : translatedText}
              readOnly
            />

          </div>

          <div className="btn-container">
            <button
              className="translate-btn"
              onClick={handleTranslate}
              disabled={loading}
            >
              {loading ? "Translating..." : "Translate"}
            </button>
          </div>

        </div>
      </div>

      <Footer />
    </>
  );
}

export default Translator;