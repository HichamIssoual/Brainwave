import { useLocation } from 'react-router-dom';
import { brainwave } from '../assets';
import { navigation } from '../constants';
import Button from './Button';
import MenuSvg from '../assets/svg/MenuSvg';
import { useState } from 'react';
import { HamburgerMenu } from './design/Header';
const Header = () => {
  const pathName = useLocation();
  const [openNav, setOpenNav] = useState(false);
  return (
    <div className="fixed top-0 left-0 z-50 lg:backdrop-blur-0 bg-n-8/90 w-full border-b-[0.1px] border-n-1/55">
      <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4 justify-between relative">
        <img src={brainwave} alt="brainwave" className="max-sm:w-40" />
        <nav
          className={`${
            openNav == true ? 'flex' : 'hidden'
          } max-lg:flex-col max-lg:absolute max-lg:top-[77px] max-lg:w-full max-lg:text-center max-lg:right-0 lg:flex items-center justify-center text-n-3 text-sm bg-n-8 z-50`}
        >
          {navigation.map((item) => {
            return (
              <a
                key={item.id}
                className={`${
                  item.onlyMobile ? 'lg:hidden' : ''
                } p-6 font-code transition-colors hover:text-n-1 ${
                  pathName.hash === item.url && 'text-n-1'
                }`}
                href={item.url}
              >
                {item.title}
              </a>
            );
          })}
          <HamburgerMenu />
        </nav>
        <div className="max-lg:hidden block">
          <a className="font-code text-n-3 text-sm pr-6" href="#signup">
            New Acount
          </a>
          <Button href="#login">
            <span className="hover:text-color-1">Sing In</span>
          </Button>
        </div>
        <Button className={'lg:hidden'} onClick={() => setOpenNav(!openNav)}>
          <MenuSvg openNavigation={openNav} />
        </Button>
      </div>
    </div>
  );
};
export default Header;
