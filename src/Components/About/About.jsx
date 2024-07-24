

const About = () => {

  const mySkills = ["HTML", "CSS", "JavaScript", "TypeScript", "Tailwind", "BootStarp", "React.js", "Next.js", "Git"]
  return (
    <div className='flex flex-col lg:flex-row py-3 md:py-6 px-7 md:px-16' id='about'>
      {/* My Skills section */}
      <div className="w-1/2 space-y-6">
        <div className="">
          <h3 className="my-3 lg:my-6 font-bold text-3xl">
            My Skills
          </h3>
        </div>
        <div className="mt-0 lg:mt-14">
          <ul className="flex flex-wrap gap-2 text-center">
            {
              mySkills.map((skill, idx) => <li key={idx} className="px-3 py-3 border border-black rounded-xl text-xl font-semibold">{skill}</li>)
            }
          </ul>
        </div>
      </div>

      {/* About me text section */}
      <div className="w-1/2">
        <h4 className="my-3 lg:my-6 font-bold text-3xl">About Me</h4>
        <p className="text-justify text-xl text-slate-600">{`I am a master's graduate in Robotics from the University of Sussex, Brighton. I developed a fascination for coding after taking a Programming for Engineers course. This newfound passion led me to explore web development, where I fell in love with creating dynamic and user-friendly web interfaces. Currently, I am seeking opportunities in front-end development, combining my technical expertise with creative problem-solving skills.`}</p>
        <p className="text-justify text-xl text-slate-600 my-4">
          Outside my professional pursuits, I enjoy playing badminton and cricket, traveling to new destinations, and watching movies.
        </p>
        <p></p>
      </div>
    </div>
  );
};

About.displayName = 'About';

export default About;
