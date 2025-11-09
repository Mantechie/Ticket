import { type Metadata } from 'next';

// components
import Master from '@components/Layout/Master';
import Section from '@components/Section/Section';
import Heading from '@components/Heading/Heading';
import VenueCard from '@components/Card/VenueCard';
import CardGroup from '@components/Card/CardGroup';
import FormSearch from './components/FormSearch';

const Page: React.FC = () => (
  <Master>
    <Section className='white-background'>
      <div className='container'>
        <div className='center'>
          <Heading type={1} color='gray' text='Venues' />
          <p className='gray'>Discover the most popular and trending event venues across India.</p>
          <div className='top-search'>
            <FormSearch />
          </div>
        </div>
      </div>
    </Section>

    {/* Latest Venues */}
    <CardGroup url='venues' title='Latest Venues' color='gray' background='gray'>
      <VenueCard
        url='1'
        color='gray'
        name='NSCI Dome, Worli'
        location='Mumbai, Maharashtra'
        image='https://images.unsplash.com/photo-1581320543450-469b6f3b8aa7?q=80&w=1000&auto=format&fit=crop'
      />
      <VenueCard
        url='2'
        color='gray'
        name='Jawaharlal Nehru Stadium'
        location='New Delhi, Delhi'
        image='https://images.unsplash.com/photo-1521334726092-b509a19597c6?q=80&w=1000&auto=format&fit=crop'
      />
      <VenueCard
        url='3'
        color='gray'
        name='Bangalore Palace Grounds'
        location='Bengaluru, Karnataka'
        image='https://images.unsplash.com/photo-1519098901905-2b7b690a47f1?q=80&w=1000&auto=format&fit=crop'
      />
      <VenueCard
        url='4'
        color='gray'
        name='Hitex Exhibition Center'
        location='Hyderabad, Telangana'
        image='https://images.unsplash.com/photo-1581320455141-b3f3eaf1deef?q=80&w=1000&auto=format&fit=crop'
      />
      <VenueCard
        url='5'
        color='gray'
        name='Salt Lake Stadium'
        location='Kolkata, West Bengal'
        image='https://images.unsplash.com/photo-1624541893072-76cb1a9f0587?q=80&w=1000&auto=format&fit=crop'
      />
      <VenueCard
        url='6'
        color='gray'
        name='Phoenix Marketcity'
        location='Chennai, Tamil Nadu'
        image='https://images.unsplash.com/photo-1526041092449-209d556f7a32?q=80&w=1000&auto=format&fit=crop'
      />
      <VenueCard
        url='7'
        color='gray'
        name='Shilpgram Cultural Complex'
        location='Jaipur, Rajasthan'
        image='https://images.unsplash.com/photo-1509377242442-8996aefae3e9?q=80&w=1000&auto=format&fit=crop'
      />
    </CardGroup>

    {/* Other Venues */}
    <CardGroup url='venues' title='Other Popular Venues' color='gray' background='white'>
      <VenueCard
        url='8'
        color='gray'
        name='BKC Grounds'
        location='Mumbai, Maharashtra'
        image='https://images.unsplash.com/photo-1576244150887-38b9b7a8baf7?q=80&w=1000&auto=format&fit=crop'
      />
      <VenueCard
        url='9'
        color='gray'
        name='Siri Fort Auditorium'
        location='New Delhi, Delhi'
        image='https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=1000&auto=format&fit=crop'
      />
      <VenueCard
        url='10'
        color='gray'
        name='KTPO Trade Center'
        location='Bengaluru, Karnataka'
        image='https://images.unsplash.com/photo-1532634896-26909d0d4b89?q=80&w=1000&auto=format&fit=crop'
      />
      <VenueCard
        url='11'
        color='gray'
        name='Hyderabad International Convention Centre'
        location='Hyderabad, Telangana'
        image='https://images.unsplash.com/photo-1505843513577-22bb7d21e455?q=80&w=1000&auto=format&fit=crop'
      />
      <VenueCard
        url='12'
        color='gray'
        name='Eco Park Convention Center'
        location='Kolkata, West Bengal'
        image='https://images.unsplash.com/photo-1545259742-2b5e9f9d1c2d?q=80&w=1000&auto=format&fit=crop'
      />
      <VenueCard
        url='13'
        color='gray'
        name='Leela Palace Convention Hall'
        location='Chennai, Tamil Nadu'
        image='https://images.unsplash.com/photo-1509343256512-d77a5cb3791b?q=80&w=1000&auto=format&fit=crop'
      />
      <VenueCard
        url='14'
        color='gray'
        name='EON IT Park Auditorium'
        location='Pune, Maharashtra'
        image='https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=1000&auto=format&fit=crop'
      />
    </CardGroup>
  </Master>
);

const title = 'Venues in India';
const canonical = 'https://ticketzilla.in/venues';
const description =
  'Discover top event venues in India including Mumbai, Delhi, Bengaluru, Hyderabad, Kolkata, Chennai, Jaipur, and more.';

export const metadata: Metadata = {
  title,
  description,
  keywords: 'ticketzilla, event venues, india venues, concert halls, stadiums, arenas',
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
