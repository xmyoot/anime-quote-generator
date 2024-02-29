import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import Quote from '../Quote';
import { AnimeData } from '../../hooks/useAnimeData';

function QuoteList({ quotes }: { quotes: AnimeData[] }) {
  const colors = [
    'bg-red-400',
    'bg-blue-400',
    'bg-green-400',
    'bg-sky-400',
    'bg-indigo-400',
    'bg-purple-400',
    'bg-pink-400',
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-5 items-stretch p-10">
      {quotes.map((quote, index) => (
        <div
          key={index}
          className={`${
            colors[Math.floor(Math.random() * colors.length)]
          } rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-200`}
        >
          <Quote
            quote={quote.quote}
            anime={quote.anime}
            character={quote.character}
          />
        </div>
      ))}
    </div>
  );
}

export default QuoteList;
