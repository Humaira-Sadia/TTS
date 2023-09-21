import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [text, setText] = useState("");
  const msg = new SpeechSynthesisUtterance();

  const speechHandler = (msg) => {
    msg.text = text;
    window.speechSynthesis.speak(msg);
  };
  return (
    <div>
      <h1 className="flex justify-center font-bold text-4xl">
        Text to Speech <span> Converter</span>
      </h1>
      <textarea
        class="h-full min-h-[300px] w-1/2 resize-none rounded-[7px] border-2 mt-10 px-3 py-2.5 text-sm font-normal transition-all focus:border-2 focus:border-pink-500  focus:outline-0 text-white bg-violet-800"
        placeholder="Enter your Text here... "
        type="text"
        value={ourText}
        onChange={(e) => setOurText(e.target.value)}
      ></textarea>

      <button onClick={() => speechHandler(msg)}>Listen</button>
    </div>
  );
}

export default App;
