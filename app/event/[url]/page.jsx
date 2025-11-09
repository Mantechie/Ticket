import React, { useMemo } from 'react';
import Link from 'next/link';

// components
import Master from '@components/Layout/Master';
import Section from '@components/Section/Section';
import Heading from '@components/Heading/Heading';
import EventCard from '@components/Card/EventCard';
import CardGroup from '@components/Card/CardGroup';
import TicketForm from './components/TicketForm';

const Page = () => {
  // Event Data (Localized for India)
  const event = useMemo(
    () => ({
      id: 1,
      name: 'Arijit Singh Live Concert',
      date: 'Sat, Dec 14, 2025 19:00',
      venue: 'NSCI Dome, Worli, Mumbai',
      address: 'NSCI Dome, Lala Lajpatrai Marg, Worli, Mumbai, Maharashtra 400018',
      latitude: 18.9915,
      longitude: 72.8173,
      image:
        'https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?q=80&w=1200&auto=format&fit=crop',
      description: `
        Experience an unforgettable night with Arijit Singh performing his greatest hits live at the iconic NSCI Dome in Mumbai!
        Join thousands of fans as the soulful singer brings magic to the stage with his mesmerizing voice, breathtaking visuals, and a full live band experience.
      `,
      tickets: [
        { id: 1, name: 'General Admission', price: '₹2500' },
        { id: 2, name: 'VIP Pass', price: '₹5500' },
        {
          id: 3,
          name: 'Student Ticket',
          price: '₹1500',
          information: 'Valid student ID required.',
        },
      ],
    }),
    []
  );

  const mapsLink = `https://www.google.com/maps?q=${encodeURIComponent(event.address)}`;
  const directionLink = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
    event.latitude + ',' + event.longitude
  )}`;

  return (
    <Master>
      {/* Cover Image Section */}
      <div className='relative blur-cover'>
        <div
          style={{ backgroundImage: `url(${event.image})` }}
          className='event-cover cover-image flex flex-v-center flex-h-center'
        />
        <div className='cover-info bg-gradient-to-t from-black/80 to-transparent p-8'>
          <Heading type={1} color='white' text={event.name} />
          <Heading type={5} color='white' text={event.date} />
          <Heading type={6} color='white' text={event.venue} />
        </div>
      </div>

      {/* Event Details */}
      <Section className='white-background py-10'>
        <div className='container grid md:grid-cols-2 gap-8'>
          {/* Left Column: Description */}
          <div>
            <Heading type={4} color='gray' text='Event Details' />
            <div className='paragraph-container gray mt-4'>
              <p>{event.description}</p>
              <p>
                Gates open 60 minutes before showtime. Food, beverages, and merchandise are
                available inside the venue. Please arrive early to ensure smooth entry.
              </p>
            </div>
          </div>

          {/* Right Column: Ticket Section */}
          <div className='ticket-box'>
            <div className='ticket-box-header mb-4'>
              <Heading type={4} color='gray' text='Available Tickets' />
            </div>
            <TicketForm data={event.tickets} />
          </div>
        </div>
      </Section>

      {/* Venue Section */}
      <Section className='white-background py-10'>
        <div className='container'>
          <Heading type={4} color='gray' text={event.venue} />
          <Heading type={6} color='gray' text='Address' />
          <div className='paragraph-container mt-2'>
            <p className='gray'>{event.address}</p>
          </div>

          <Heading type={6} color='gray' text='How to Get There?' className='mt-4' />
          <div className='paragraph-container mt-2'>
            <p className='gray'>
              The venue is well connected via Mumbai’s local train network — nearest stations are
              Mahalaxmi and Lower Parel. App-based cabs and ample parking are also available nearby.
            </p>
            <p className='gray mt-2'>
              <Link href='/venue/1' className='text-blue-600 hover:underline'>
                Venue details
              </Link>
              &nbsp; &bull; &nbsp;
              <a
                href={directionLink}
                target='_blank'
                rel='noopener noreferrer'
                className='text-blue-600 hover:underline'
              >
                Show Directions
              </a>
              &nbsp; &bull; &nbsp;
              <a
                href={mapsLink}
                target='_blank'
                rel='noopener noreferrer'
                className='text-blue-600 hover:underline'
              >
                Open in Google Maps
              </a>
            </p>
          </div>

          <Heading type={6} color='gray' text='Accessibility Information' className='mt-4' />
          <div className='paragraph-container'>
            <p className='gray'>
              NSCI Dome provides wheelchair access, elevator facilities, and priority entry for
              specially-abled guests. Staff assistance is available at all main entrances.
            </p>
          </div>
        </div>
      </Section>

      {/* Related Events */}
      <CardGroup url='list' title='Other Popular Events in India' color='orange' background='gray'>
        <EventCard
          url='2'
          from='₹1999'
          color='orange'
          when='Sun, Jan 12, 2026 18:00'
          name='AR Rahman India Tour'
          venue='Bangalore Palace Grounds, Bengaluru'
          image='https://images.unsplash.com/photo-1507874457470-272b3c8d8ee2?q=80&w=400&auto=format&fit=crop'
        />
        <EventCard
          url='3'
          from='₹999'
          color='orange'
          when='Fri, Feb 14, 2026 19:00'
          name='Famous Sunburn Goa – Music Festival'
          venue='Vagator Beach of Goa, Goa'
          image='https://images.unsplash.com/photo-1507878866276-a947ef722fee?q=80&w=400&auto=format&fit=crop'
        />
        <EventCard
          url='4'
          from='₹499'
          color='orange'
          when='Sat, Mar 8, 2026 17:00'
          name='Zakir Khan Stand-Up Night'
          venue='Siri Fort Auditorium, New Delhi'
          image='https://imgs.search.brave.com/ZQNx-D-2twXgOyTMSY-EkehJZYmo2acKMexsROF5g8Y/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL1Mv/cHYtdGFyZ2V0LWlt/YWdlcy80MWFjOTAx/ODczNWE1ZTgxYzUx/MWYzZDE0ZjZlYjM0/MmYwOTBlMWE1MDA2/ZGI2MDY4OWZjMDk1/ZGNjOTVkNDVhLmpw/Zw'
        />
        <EventCard
          url='5'
          from='₹599'
          color='orange'
          when='Sun, Apr 20, 2026 19:30'
          name='Bollywood Music Awards'
          venue='Hitex Exhibition Center, Hyderabad'
          image='https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=400&auto=format&fit=crop'
        />
      </CardGroup>
    </Master>
  );
};

const title = 'Arijit Singh Live Concert | TicketZilla India';
const canonical = 'https://ticketzilla.in/event/arijit-singh-mumbai';
const description =
  'Book tickets for Arijit Singh Live Concert at NSCI Dome, Mumbai via TicketZilla. Explore event details, ticket prices, and directions on Google Maps.';

export const metadata = {
  title,
  description,
  keywords:
    'ticketzilla india, arijit singh concert, live music, mumbai events, nsci dome, bollywood concerts, india tickets',
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
