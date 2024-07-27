import { Typewriter } from 'react-simple-typewriter';
import './Banner.css';

const Banner = () => {

  const handleDone = () => {
    console.log(`Done after 5 loops!`)
  }
  return (
    <div className="relative">
      <div className="opacity-50 bg-banner-pic bg-cover bg-center min-h-screen bg-opacity-95" id="home"></div>
      <div className='w-full my-3 md:my-6 py-3 md:py-6 px-7 md:px-16 absolute top-20 text-[#000000]'>
        <div className="text-center text-5xl text-black font-extrabold bg-none">
          <h1>Hi! I am
            <span className="">
              <Typewriter
                words={[' Sohel Rana', ' a Web Developer', ' React Developer']}
                loop={false}
                cursor
                cursorStyle='_'
                typeSpeed={70}
                delaySpeed={1500}
                deleteSpeed={60}
                onLoopDone={handleDone}
              />
            </span>
          </h1>
        </div>
        <div>
          <div className='text-center mt-7'>
            <button className='btn bg-white btn-wide text-2xl font-extrabold'>Resume</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
