import { useState, useEffect } from 'react';

const RotatingText = () => {
  const features = [
    "Competitive Pricing.",
    "Quick Fulfillment.",
    "Customize Configurations."
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % features.length);
        setIsAnimating(false);
      }, 1000); // Change text after animation completes
    }, 2500); // Every 3 seconds

    return () => clearInterval(timer);
  }, [features.length]);

  const currentText = features[currentIndex];
  const nextText = features[(currentIndex + 1) % features.length];

  return (
    <div>
      <div className="relative h-10 w-full overflow-hidden">
        {/* Old (Current) Text */}
        <div
          key={currentText}
          className={`absolute top-0 left-0 transform transition-all duration-1000 ease-in-out
            ${isAnimating ? 'translate-x-full opacity-0' : 'translate-x-0 opacity-100'}
          `}
        >
          {currentText}
        </div>

        {/* New (Incoming) Text */}
        <div
          key={nextText}
          className={`absolute top-0 left-0 transform transition-all duration-1000 ease-in-out
            ${isAnimating ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'}
          `}
        >
          {nextText}
        </div>
      </div>
    </div>
  );
};

export default RotatingText;