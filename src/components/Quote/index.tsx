import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';

function Quote({
  quote,
  anime,
  character,
}: {
  quote: string;
  anime: string;
  character: string;
}) {
  return (
    <div className="p-6">
      <FontAwesomeIcon
        icon={faQuoteLeft}
        className="text-2xl text-white mb-4"
      />
      <p className="text-lg font-bold text-white mb-2">{quote}</p>
      <p className="text-lg text-white mt-2">
        - {character}{' '}
        <span className="text-md font-semibold text-gray-200">({anime})</span>
      </p>
    </div>
  );
}

export default Quote;
