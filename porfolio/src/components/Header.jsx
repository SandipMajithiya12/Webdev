import React from 'react';
import { Link ,ScrollLink} from 'react-scroll';

const Header = () => {
  let Links = [
    { name : "Home" ,link:'home'},
    { name : "About me" ,link:'about'},
    { name : "Projects" ,link:'projects'},
    { name : "contact" ,link:'contact'},
  ]
  return (
    <div className='w-full max-w-7xl'>
      <div className='md:flex items-center justify-between py-4 md:px-10 px-10 right-0'> 
        <div className='font-blod text-2xl cursor-pointer flex items-center gap-1'>
          <span className='text-primary hover:text-white'>Sandip</span>
          {
            <ul className='md:flex md:items-center md:pb-0 absolute md:static md:z-auto z-10 left-0 w-full
            md:w-auto mt-4 md:mt-0 md:pl-9 pl-9  sm:bg-trasparent transition-all duration-500 ease-in'>
                {
                  Links.map(link => <li key={link.name} className='md:ml-8 md:my-0 my-7 font-semiblod' >
                    <Link
                    to ={link.link}
                    activeClass='active'
                    smooth={true}
                    spy={true}
                    className='text-white transition-all duration-500 hover:text-primary'
                    >{link.name}

                    </Link>
                  </li>)
                }
            </ul>
          }
        </div>
      </div>
      
    </div>
  );
};

export default Header;