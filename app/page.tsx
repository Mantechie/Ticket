// components
import Master from '@components/Layout/Master';
import Section from '@components/Section/Section';
import Heading from '@components/Heading/Heading';
import EventCard from '@components/Card/EventCard';
import CardGroup from '@components/Card/CardGroup';

import FormSearch from './home/components/FormSearch';
import CircleButtons from './home/components/CircleButtons';

const Page: React.FC = () => (
  <Master>
    <Section className='white-background'>
      <div className='container'>
        <div className='center'>
          <Heading type={1} color='gray' text='Discover' />
          <p className='gray'>
            Discover, search, and filter the best events happening across India.
          </p>
        </div>
      </div>

      <div className='center'>
        <div className='container'>
          <div className='top-search'>
            <FormSearch />
          </div>
        </div>
        <div className='circle-buttons'>
          <CircleButtons />
        </div>
      </div>
    </Section>

    {/* Latest Events */}
    <CardGroup url='list' title='Latest events' color='blue' background='gray'>
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
        when='Fri, Nov 28, 2025 20:00'
        name='Sunburn EDM Festival'
        venue='Vagator Beach, Goa'
        image='https://images.unsplash.com/photo-1507878866276-a947ef722fee?q=80&w=400&auto=format&fit=crop'
      />
      <EventCard
        url='3'
        from='₹399'
        color='blue'
        when='Sun, Jan 12, 2026 18:30'
        name='Stand-Up Night with Zakir Khan'
        venue='Siri Fort Auditorium, Delhi'
        image='https://imgs.search.brave.com/ZQNx-D-2twXgOyTMSY-EkehJZYmo2acKMexsROF5g8Y/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL1Mv/cHYtdGFyZ2V0LWlt/YWdlcy80MWFjOTAx/ODczNWE1ZTgxYzUx/MWYzZDE0ZjZlYjM0/MmYwOTBlMWE1MDA2/ZGI2MDY4OWZjMDk1/ZGNjOTVkNDVhLmpw/Zw'
      />
      <EventCard
        url='4'
        from='₹799'
        color='blue'
        when='Sat, Feb 8, 2026 19:00'
        name='Coldplay: Music World Tour'
        venue='Auditorium, Bengaluru'
        image='https://images.unsplash.com/photo-1507874457470-272b3c8d8ee2?q=80&w=400&auto=format&fit=crop'
      />
    </CardGroup>

    {/* More Events */}
    <CardGroup url='list' title='More events' color='red' background='white'>
      <EventCard
        url='5'
        from='₹250'
        color='red'
        when='Sun, Jan 5, 2026 16:00'
        name='India Food Festival'
        venue='Jawaharlal Nehru Stadium, Delhi'
        image='https://images.unsplash.com/photo-1532634896-26909d0d4b89?q=80&w=400&auto=format&fit=crop'
      />
      <EventCard
        url='6'
        from='₹150'
        color='red'
        when='Fri, Dec 20, 2025 18:00'
        name='Art and Culture Expo'
        venue='Phoenix Marketcity, Chennai'
        image='https://images.unsplash.com/photo-1504274066651-8d31a536b11a?q=80&w=400&auto=format&fit=crop'
      />
      <EventCard
        url='7'
        from='₹499'
        color='red'
        when='Sat, Feb 22, 2026 19:30'
        name='Bollywood Night Bash'
        venue='Hitex Exhibition Center, Hyderabad'
        image='https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?q=80&w=400&auto=format&fit=crop'
      />
    </CardGroup>

    {/* Editors Choice */}
    <CardGroup url='list' title='Editors choice' color='orange' background='gray'>
      <EventCard
        url='8'
        from='₹999'
        color='orange'
        when='Fri, Dec 26, 2025 19:00'
        name='AR Rahman Live – India Tour'
        venue='Mahalaxmi Racecourse, Mumbai'
        image='https://images.unsplash.com/photo-1518972559570-7cc1309f3229?q=80&w=400&auto=format&fit=crop'
      />
      <EventCard
        url='9'
        from='₹299'
        color='orange'
        when='Sat, Jan 10, 2026 17:00'
        name='Comic Con India 2026'
        venue='KTPO Trade Center, Bengaluru'
        image='https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=400&auto=format&fit=crop'
      />
      <EventCard
        url='10'
        from='₹199'
        color='orange'
        when='Sun, Jan 18, 2026 10:00'
        name='India Art Fair 2026'
        venue='NSIC Exhibition Grounds, Delhi'
        image='https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?q=80&w=400&auto=format&fit=crop'
      />
    </CardGroup>

    {/* For Kids */}
    <CardGroup url='list' title='For kids' color='purple' background='white'>
      <EventCard
        url='11'
        from='₹199'
        color='purple'
        when='Sat, Dec 28, 2025 10:00'
        name='Disney on Ice – Magical Adventure for kids'
        venue='BKC Grounds, Mumbai'
        image='https://imgs.search.brave.com/JoG2gHiNPAAU7KK9RknzEV4BFb1tAFfD_lj7Ix6nyWo/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/bW9tcmV3cml0dGVu/LmNvbS93cC1jb250/ZW50L3VwbG9hZHMv/MjAyMi8wMS9EMjdj/XzIwMTgwOTIzXzAz/MzQ0X0VkaXQtNzIw/eDU0MC5qcGcud2Vi/cA'
      />
      <EventCard
        url='12'
        from='₹149'
        color='purple'
        when='Sun, Jan 4, 2026 11:00'
        name='Kids Science Festival'
        venue='Birla Science Centre, Hyderabad'
        image='https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?q=80&w=400&auto=format&fit=crop'
      />
      <EventCard
        url='13'
        from='₹299'
        color='purple'
        when='Sat, Jan 25, 2026 15:00'
        name='Junior Chef Challenge'
        venue='World Trade Center, Pune, Maharashtra'
        image='https://imgs.search.brave.com/9Si0MSjyUSA6tIs45Ys-MPEDg07dzLfWNDtieXtcgaQ/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jZG4u/c2hvcGlmeS5jb20v/cy9maWxlcy8xLzA0/NjkvOTcyNC8yMDIz/L2ZpbGVzL2hvbWUt/cGFnZS1naXJsLnBu/Zz92PTE3NDU3OTUx/MzI'
      />
    </CardGroup>
  </Master>
);

export default Page;
