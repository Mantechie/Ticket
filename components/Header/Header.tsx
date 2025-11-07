'use client';

import { useRef, useState } from 'react';
import Logo from '/public/Logo.jpg';
import Link from 'next/link';

// hooks
import useClickOutside from '@hooks/useClickOutside';

// components
//import Dropdown from '@components/Dropdown/Dropdown';
//import DropdownItem from '@components/Dropdown/DropdownItem';
//import ProfilePhoto from '@components/Profile/ProfilePhoto';
import ButtonLink from '@components/Button/ButtonLink';

const Header: React.FC = () => {
  const wrapperRef = useRef<any>(null);

  const [menu, setMenu] = useState<boolean>(false);
  // eslint-disable-next-line no-unused-vars
  const [dropdown, setDropdown] = useState<boolean>(false);

  /**
   * This is a functional component for the Header.
   * It uses the useClickOutside hook to handle click events outside the component.
   * It also manages the state of the menu and dropdown.
   */
  useClickOutside(wrapperRef, () => {
    setDropdown(false);
  });

  /**
   * Toggles the menu state.
   */
  const menuState = (): void => {
    setMenu((state) => !state);
  };

  return (
    <header>
      <div className='container'>
        <div className='logo'>
          <img src={Logo.src} alt='TicketZilla' width={100} height={70} />
          <button
            type='button'
            onClick={() => {
              menuState();
            }}
          >
            <span className='material-symbols-outlined'>menu</span>
          </button>
        </div>
        <div className='links responsive-hide'>
          <Link href='/' className='gray'>
            Home
          </Link>
          <Link href='/contact' className='gray'>
            Contact us
          </Link>
          <Link href='/news' className='gray'>
            News
          </Link>
        </div>
        <div className='members' ref={wrapperRef}>
          <Link href='/members/signup' className='blue'>
            Sign up
          </Link>
          <ButtonLink color='blue' text='Login' url={`members/signin`} />
          {/*<Link href='/members/account'>
            <ProfilePhoto image='https://www.cenksari.com/content/profile.jpg' size='small' />
          </Link>
          <button
            type='button'
            className='menu-opener'
            onClick={() => {
              setDropdown(!dropdown);
            }}
          >
            Pradeep's College Bua's Company
            <span className='material-symbols-outlined'>
              {dropdown ? 'keyboard_arrow_up' : 'keyboard_arrow_down'}
            </span>
          </button>
          {dropdown && (
            <Dropdown color='gray'>
              <DropdownItem url='members/tickets' text='My tickets' />
              <DropdownItem url='members/account' text='My account' />
              <hr />
              <DropdownItem url='members/signout' text='Sign out' />
            </Dropdown>
          )}*/}
        </div>
      </div>
      {menu && (
        <div className='main-menu-backdrop'>
          <div className='main-menu'>
            <div className='top'>
              <button
                type='button'
                onClick={() => {
                  menuState();
                }}
              >
                <span className='material-symbols-outlined'>close</span>
              </button>
            </div>
            <div className='padding-top center'>
              <ul>
                <li>
                  <Link href='/' className='white'>
                    Home
                  </Link>
                </li>
                <li>
                  <Link href='/news' className='white'>
                    News
                  </Link>
                </li>
                <li>
                  <Link href='/help' className='white'>
                    Help
                  </Link>
                </li>
                <li>
                  <Link href='/venues' className='white'>
                    Venues
                  </Link>
                </li>
                <li>
                  <Link href='/tickets' className='white'>
                    My tickets
                  </Link>
                </li>
                <li>
                  <Link href='/contact' className='white'>
                    Contact us
                  </Link>
                </li>
                <li>
                  <Link href='/promoters' className='white'>
                    For promoters
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
