import { type Metadata } from 'next';

// components
import Master from '@components/Layout/Master';
import Section from '@components/Section/Section';
import Heading from '@components/Heading/Heading';
import EventCard from '@components/Card/EventCard';
import CardGroup from '@components/Card/CardGroup';

const Page: React.FC = () => (
  <Master>
    {/* Venue Cover */}
    <div className='blur-cover'>
      <div
        style={{
          backgroundImage: `url("https://images.unsplash.com/photo-1581320543450-469b6f3b8aa7?q=80&w=1000&auto=format&fit=crop")`,
        }}
        className='event-cover cover-image flex flex-v-center flex-h-center'
      />
      <div className='cover-info'>
        <div
          style={{
            backgroundImage: `url("https://images.unsplash.com/photo-1581320543450-469b6f3b8aa7?q=80&w=1000&auto=format&fit=crop")`,
          }}
          className='cover-image image'
        />
        <Heading type={1} color='white' text='NSCI Dome, Worli' />
        <Heading type={6} color='white' text='Mumbai, Maharashtra' />
      </div>
    </div>

    {/* Venue Details */}
    <Section className='white-background'>
      <div className='container'>
        <div className='venue-details'>
          <Heading type={4} color='gray' text='Venue details' />
          <div className='paragraph-container gray'>
            <p>
              NSCI Dome, located in Worli, Mumbai, is one of India’s premier indoor sports and
              entertainment arenas. The venue hosts concerts, sports events, corporate gatherings,
              and award shows with a seating capacity of over 8,000 spectators.
            </p>
            <p>
              Known for its world-class facilities and central location, NSCI Dome has hosted some
              of the biggest names in music and entertainment — including Arijit Singh, AR Rahman,
              and international artists. It’s a favorite choice for grand concerts, comedy shows,
              and cultural festivals in Mumbai.
            </p>
          </div>
        </div>
      </div>
    </Section>

    {/* Location and Directions */}
    <Section className='white-background'>
      <div className='container'>
        <Heading type={6} color='gray' text='Address' />
        <div className='paragraph-container'>
          <p className='gray'>NSCI Dome, Lala Lajpatrai Marg, Worli, Mumbai, Maharashtra 400018</p>
        </div>
        <Heading type={6} color='gray' text='How to get there?' />
        <div className='paragraph-container'>
          <p className='gray'>
            Easily accessible via local train (Lower Parel or Mahalaxmi stations) and the Western
            Express Highway. Taxis and app-based cabs are available 24/7.
          </p>
          <p className='gray'>
            <a
              target='_blank'
              href='https://www.google.com/maps?q=NSCI+Dome+Worli+Mumbai'
              className='blue'
            >
              Get directions
            </a>
            &nbsp; &bull; &nbsp;
            <a
              target='_blank'
              href='https://www.google.com/maps/place/NSCI+Dome+Worli+Mumbai'
              className='blue'
            >
              Show in map
            </a>
          </p>
        </div>
        <Heading type={6} color='gray' text='Accessibility information' />
        <div className='paragraph-container'>
          <p className='gray'>
            The venue is fully accessible with ramps, elevators, and wheelchair seating areas. Ample
            parking and separate entry points for VIPs and guests are available.
          </p>
        </div>
      </div>
    </Section>

    {/* Events at this Venue */}
    <CardGroup url='list' title='Events at this venue' color='gray' background='gray'>
      <EventCard
        url='1'
        from='₹499'
        color='orange'
        when='Sat, Dec 14, 2025 19:00'
        name='Arijit Singh Live Concert'
        venue='NSCI Dome, Mumbai'
        image='https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?q=80&w=400&auto=format&fit=crop'
      />
      <EventCard
        url='2'
        from='₹299'
        color='orange'
        when='Fri, Dec 20, 2025 20:00'
        name='The Great Indian Laughter Night'
        venue='NSCI Dome, Mumbai'
        image='https://images.unsplash.com/photo-1529400971008-f566de0e6dfc?q=80&w=400&auto=format&fit=crop'
      />
      <EventCard
        url='3'
        from='₹699'
        color='orange'
        when='Sun, Jan 18, 2026 18:00'
        name='AR Rahman – India Tour'
        venue='NSCI Dome, Mumbai'
        image='https://images.unsplash.com/photo-1507878866276-a947ef722fee?q=80&w=400&auto=format&fit=crop'
      />
      <EventCard
        url='4'
        from='₹399'
        color='orange'
        when='Sat, Feb 8, 2026 17:30'
        name='Bollywood Music Awards 2026'
        venue='NSCI Dome, Mumbai'
        image='https://images.unsplash.com/photo-1507874457470-272b3c8d8ee2?q=80&w=400&auto=format&fit=crop'
      />
    </CardGroup>
  </Master>
);

const title = 'NSCI Dome, Mumbai – Venue Details';
const canonical = 'https://ticketzilla.in/venue/nsci-dome';
const description =
  'Explore NSCI Dome, Mumbai – India’s top indoor venue for concerts, shows, and live events. Get address, directions, and upcoming events hosted here.';

export const metadata: Metadata = {
  title,
  description,
  keywords:
    'ticketzilla, nsci dome mumbai, concert venue india, live shows, event tickets, arijit singh concert',
  alternates: { canonical },
  openGraph: {
    title,
    description,
    url: canonical,
    type: 'website',
    siteName: 'TicketZilla',
    images: 'https://ticketzilla.in/logo192.png',
  },
};

export default Page;
