/* eslint-disable no-unused-vars */
import React from 'react';

const sentences = [
  "This is the first sentence.",
  "Here is the second sentence.",
  "Finally, the third sentence."
];

const Announcement = () => {
  return (
    <div className="relative overflow-hidden whitespace-nowrap bg-slate-900 flex items-center justify-center h-8">
      <div className="animate-marquee flex text-white">
        {sentences.map((sentence, index) => (
          <span key={index} className="px-4">{sentence}</span>
        ))}
        {sentences.map((sentence, index) => (
          <span key={index + sentences.length} className="px-12">{sentence}</span>
        ))}
        {sentences.map((sentence, index) => (
          <span key={index + sentences.length} className="px-12">{sentence}</span>
        ))}
        {sentences.map((sentence, index) => (
          <span key={index + sentences.length} className="px-12">{sentence}</span>
        ))}
        
      </div>
    </div>
  );
};

export default Announcement;
