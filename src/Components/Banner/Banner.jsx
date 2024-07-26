import { useEffect, useState } from 'react';
import './Banner.css';  // Import your CSS file for the typewriter effect

const Banner = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [showFirstText, setShowFirstText] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    // Toggle between the texts after each completes
    const timer = setInterval(() => {
      setShowFirstText(prev => !prev);
    }, 4000); // Adjust timing to match the total animation duration of both texts

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative">
      <div className="opacity-50 bg-banner-pic bg-cover bg-center min-h-screen bg-opacity-95" id="home">
      </div>
      <div
        className='w-full my-3 md:my-6 py-3 md:py-6 px-7 md:px-16 absolute top-20 left-1/2 transform -translate-x-1/2 text-[#000000]'
        style={{ transform: `translateX(-50%) translateX(${scrollPosition * 0.1}px)` }}
      >
        <div>
          <div className="typewriter">
            <h2 className={`text-6xl font-extrabold text-center tracking-widest w-full ${showFirstText ? '' : 'hidden'}`}>
              I am Sohel Rana
            </h2>
            <p className={`text-6xl font-extrabold text-center tracking-widest w-full ${showFirstText ? 'hidden' : ''}`}>
              I am a web developer
            </p>
          </div>
          <div className='text-center mt-7'>
            <button className='btn bg-white btn-wide text-2xl font-extrabold'>Resume</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
