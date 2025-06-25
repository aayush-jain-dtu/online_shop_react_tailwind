import { useState, useEffect } from 'react';

function DelayedImage({ src, alt }) {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 2000); // 2 second delay

    return () => clearTimeout(timer);
  }, []);

  return loaded ? (
    <img src={src} alt={alt} className="w-full h-80 object-cover" />
  ) : (
    <div className="w-full h-80 bg-gray-300 animate-pulse"></div> // Skeleton loader
  );
}

export default DelayedImage;
