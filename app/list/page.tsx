import { type Metadata } from 'next';

// components
import Master from '@components/Layout/Master';
import Section from '@components/Section/Section';
import Heading from '@components/Heading/Heading';
import EventCard from '@components/Card/EventCard';

const Page: React.FC = () => (
  <Master>
    {/* Header Section */}
    <Section className='white-background'>
      <div className='container'>
        <div className='padding-bottom center'>
          <Heading type={1} color='gray' text='Events' />
          <p className='gray'>Discover, search and book the best events happening across India.</p>
        </div>
      </div>
    </Section>

    {/* Event Listing */}
    <Section className='list-cards'>
      <div className='container center'>
        <EventCard
          url='1'
          from='₹499'
          color='blue'
          when='Sat, Dec 14, 2025 19:00'
          name='Arijit Singh Live Concert'
          venue='NSCI Dome, Mumbai'
          image='https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?q=80&w=400&auto=format&fit=crop'
        />
        <EventCard
          url='2'
          from='₹299'
          color='blue'
          when='Fri, Dec 20, 2025 20:00'
          name='Sunburn EDM Festival'
          venue='Vagator Beach, Goa'
          image='https://images.unsplash.com/photo-1507878866276-a947ef722fee?q=80&w=400&auto=format&fit=crop'
        />
        <EventCard
          url='3'
          from='₹399'
          color='blue'
          when='Sun, Jan 12, 2026 18:30'
          name='Zakir Khan Stand-Up Comedy'
          venue='Siri Fort Auditorium, Delhi'
          image='https://imgs.search.brave.com/ZQNx-D-2twXgOyTMSY-EkehJZYmo2acKMexsROF5g8Y/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL1Mv/cHYtdGFyZ2V0LWlt/YWdlcy80MWFjOTAx/ODczNWE1ZTgxYzUx/MWYzZDE0ZjZlYjM0/MmYwOTBlMWE1MDA2/ZGI2MDY4OWZjMDk1/ZGNjOTVkNDVhLmpw/Zw'
        />
        <EventCard
          url='4'
          from='₹699'
          color='blue'
          when='Sat, Feb 8, 2026 19:00'
          name='Coldplay: Music of the Spheres Tour'
          venue='Kanteerava Stadium, Bengaluru'
          image='https://images.unsplash.com/photo-1507874457470-272b3c8d8ee2?q=80&w=400&auto=format&fit=crop'
        />
        <EventCard
          url='5'
          from='₹250'
          color='blue'
          when='Sun, Jan 5, 2026 16:00'
          name='India Food Festival'
          venue='Jawaharlal Nehru Stadium, Delhi'
          image='https://images.unsplash.com/photo-1532634896-26909d0d4b89?q=80&w=400&auto=format&fit=crop'
        />
        <EventCard
          url='6'
          from='₹349'
          color='blue'
          when='Fri, Jan 24, 2026 18:00'
          name='AR Rahman – India Tour'
          venue='Hitex Exhibition Center, Hyderabad'
          image='https://images.unsplash.com/photo-1505843513577-22bb7d21e455?q=80&w=400&auto=format&fit=crop'
        />
      </div>
    </Section>
  </Master>
);

const title = 'Events in India';
const canonical = 'https://ticketzilla.in/events';
const description =
  'Explore upcoming concerts, comedy shows, and festivals in India. Book tickets for events in Mumbai, Delhi, Bengaluru, Hyderabad, Goa, and more with TicketZilla.';

export const metadata: Metadata = {
  title,
  description,
  keywords:
    'ticketzilla, events in india, concerts, live shows, arijit singh, zakir khan, sunburn, AR Rahman, coldplay tour, comedy india',
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
