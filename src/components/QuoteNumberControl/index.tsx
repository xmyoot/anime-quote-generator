import React, { useState } from 'react';
const QuoteNumberControl = ({
  setSlider,
}: {
  setSlider: (value: number) => void;
}) => {
  const [quoteNumber, setQuoteNumber] = useState(1);

  const handleSliderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuoteNumber(Number(event.target.value));
    setSlider(Number(event.target.value));
  };

  return (
    <div className="flex justify-center contents-center gap-4 mt-5">
      <span># of quotes: </span>
      <input
        type="range"
        min={1}
        max={10}
        value={quoteNumber}
        onChange={handleSliderChange}
      />
      <span>{quoteNumber}</span>
    </div>
  );
};

export default QuoteNumberControl;
