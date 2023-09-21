import "./App.css";
import { useState } from "react";

function App() {
  const [ourText, setOurText] = useState("");
  const [selectedVoice, setSelectedVoice] = useState("");

  const msg = new SpeechSynthesisUtterance();

  const [voices, setVoices] = useState([]);

  window.speechSynthesis.onvoiceschanged = () => {
    setVoices(window.speechSynthesis.getVoices());
  };

  const renderVoiceOptions = () => {
    return voices.map((voice, index) => (
      <option key={index} value={index}>
        {voice.name}
      </option>
    ));
  };

  const speechHandler = () => {
    msg.voice = (!selectedVoice ?  voices[0] : selectedVoice);
    msg.text = ourText;
    window.speechSynthesis.speak(msg);
  };

  const handleSelect = (e) => {
    const selectedIndex = e.target.value;
    setSelectedVoice(voices[selectedIndex]);
  };

  return (
    <div className="mt-[6%]">
      <h1 className="flex justify-center font-bold text-4xl text-white max-md:text-2xl">
        Text to Speech
        <span className="text-red-500 underline bg-gr decoration-white ml-2">
          Converter
        </span>
      </h1>
      <div className="flex flex-col items-center justify-center">
        <textarea
          className="h-full min-h-[300px] w-1/2 resize-none rounded-[7px] border-2 mt-10 px-3 py-2.5 text-sm font-normal transition-all focus:border-2 focus:border-pink-500  focus:outline-0 text-white bg-[#404188] placeholder-white mb-10 max-md:w-[75%]"
          placeholder="Enter your Text here... "
          type="text"
          value={ourText}
          onChange={(e) => setOurText(e.target.value)}
        ></textarea>

        <div className="flex w-1/2 gap-2 max-md:flex-col">
          <select
            className="flex w-full text-white bg-[#403d84] h-[50px] px-5 outline-0 border-0 rounded-[35px]"
            onChange={(e) => handleSelect(e)}
          >
            <option value="0">Select a voice</option>
            {renderVoiceOptions()}
          </select>

          <button
            className="bg-[#D73654] text-white text-m border-0 rounded-[35px]  px-[45px] py-[10px] cursor-pointer outline-0"
            onClick={() => speechHandler(msg)}
          >
            Listen
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
