import { useState, useEffect } from 'react';
import mainLogo from './assets/anime_quotes_logo.svg';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft, faSquareCheck } from '@fortawesome/free-solid-svg-icons';
import QuoteNumberControl from '../src/components/QuoteNumberControl';
import QuoteList from './components/QuoteList';
import data from './data.json';
import { generateQuotes } from './utils/generateQuoteList';

function App() {
  const [displayNum, setDisplayNum] = useState(1);
  const [quotes, setQuotes] = useState(() => generateQuotes(data, displayNum));

  const handleGenerateQuotes = () => {
    setQuotes(generateQuotes(data, displayNum));
  };
  useEffect(() => {
    setQuotes(generateQuotes(data, displayNum));
  }, [displayNum]);

  return (
    <>
      <div className="flex justify-center">
        <a href="" target="_blank">
          <img src={mainLogo} className="size-80" alt="Site logo" />
        </a>
      </div>
      <div className="flex justify-center items-center">
        <FontAwesomeIcon
          className="size-14 text-fuchsia-400 mr-2"
          icon={faQuoteLeft}
        />
        <h1 className="font-mono text-3xl">Random Anime Quote Generator</h1>
      </div>
      <div className="mt-10 flex justify-center items-baseline gap-5">
        <button
          className="size-1/4 bg-fuchsia-500 text-white font-bold rounded-lg focus:outline-none focus:shadow-outline hover:bg-fuchsia-600 hover:shadow-lg transition duration-300 ease-in-out"
          onClick={handleGenerateQuotes}
        >
          <FontAwesomeIcon className="pr-2" icon={faSquareCheck} />
          Generate Quotes
        </button>
        <QuoteNumberControl setSlider={setDisplayNum} />
      </div>
      <QuoteList quotes={quotes} />
    </>
  );
}

export default App;
