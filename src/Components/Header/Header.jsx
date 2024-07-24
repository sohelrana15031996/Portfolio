import PropTypes from 'prop-types'
import { Link } from 'react-scroll';
import Headroom from 'react-headroom';

const Header = () => {



  const navLinks = (
    <>
      <li className="text-2xl font-bold"><Link to="home"
        spy={true}
        smooth={true}
        offset={-100}
        duration={500}>Home</Link></li>
      <li className="text-2xl font-bold"><Link to="about"
        spy={true}
        smooth={true}
        offset={-100}
        duration={500}>About</Link></li>
      <li className="text-2xl font-bold"><Link to="portfolio"
        spy={true}
        smooth={true}
        offset={-100}
        duration={500}>Portfolio</Link></li>
      <li className="text-2xl font-bold"><Link to="contact"
        spy={true}
        smooth={true}
        offset={-150}
        duration={500}>Contact</Link></li>
    </>
  );

  return (
    <Headroom className=''>
      <div className="navbar bg-base-100 py-3 md:py-6 px-7 md:px-16">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow ">
              {navLinks}
            </ul>
          </div>
          <a className="btn btn-ghost text-4xl font-extrabold">SRDev</a>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {navLinks}
          </ul>
        </div>
      </div>
    </Headroom>
  );
};

Header.propTypes = {
  handleScrollToAbout: PropTypes.func
}

export default Header;
