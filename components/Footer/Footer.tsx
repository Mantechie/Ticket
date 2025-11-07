import Link from 'next/link';

// components
import ButtonLink from '@components/Button/ButtonLink';

const Footer: React.FC = () => (
  <footer>
    <div className='container'>
      <div className='logo'></div>
      <div className='links'>
        <Link href='/' className='white'>
          Home
        </Link>
        <Link href='/venues' className='white'>
          Venues
        </Link>
        <Link href='/members/tickets' className='white'>
          My tickets
        </Link>
        <Link href='/' className='white'>
          My account
        </Link>
      </div>
      <div className='links'>
        <Link href='/help' className='white'>
          Help
        </Link>
        <Link href='/news' className='white'>
          News
        </Link>
        <Link href='/contact' className='white'>
          Contact us
        </Link>
        <Link href='/promoters' className='white'>
          For promoters
        </Link>
      </div>
      <div className='members'>
        <Link href='/members/signup' className='blue'>
          Sign up
        </Link>
        <ButtonLink color='blue' text='Login' url='members/signin' />
      </div>
    </div>
    <div className='newsletter'>
      <p>Don&apos;t miss the latest on Modern ticketing news and events.</p>
      <div className='input-container'>
        <input
          type='email'
          name='email'
          autoComplete='off'
          placeholder='your@emailaddress.com'
          required
        />
        <button type='submit'>
          <span className='material-symbols-outlined'>arrow_forward</span>
        </button>
      </div>
    </div>
    <div className='copy'>
      <span>&copy; 2025 - Modern ticketing</span>
      <div className='terms'>
        <Link href='/legal/privacy-policy'>Privacy policy</Link>
        &nbsp;&bull;&nbsp;
        <Link href='/legal/cookies'>Cookies</Link>
        &nbsp;&bull;&nbsp;
        <Link href='/legal/terms-of-service'>Terms of service</Link>
      </div>
    </div>
  </footer>
);

export default Footer;
