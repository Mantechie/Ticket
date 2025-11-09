import { type Metadata } from 'next';

// components
import Master from '@components/Layout/Master';
import Section from '@components/Section/Section';
import Heading from '@components/Heading/Heading';

const Page: React.FC = () => (
  <Master>
    <Section className='white-background py-10'>
      <div className='container mx-auto px-4'>
        <div className='center mb-8'>
          <Heading type={1} color='gray' text='Terms of Service' />
        </div>

        <div className='prose max-w-4xl mx-auto text-gray-700 leading-relaxed'>
          <p>
            Welcome to <strong>TicketZilla</strong>. These Terms of Service ("Terms") govern your
            access to and use of our website, mobile application, and related services
            (collectively, the "Platform"). Please read them carefully before using TicketZilla.
          </p>

          <h2>1. Acceptance of Terms</h2>
          <p>
            By accessing or using TicketZilla, you agree to comply with these Terms and our{' '}
            <a href='/privacy' className='text-blue-600'>
              Privacy Policy
            </a>
            If you do not agree, you may not use our services.
          </p>

          <h2>2. User Accounts</h2>
          <p>
            You must create an account to book tickets or manage events. You are responsible for
            maintaining the confidentiality of your login credentials and for all activities that
            occur under your account.
          </p>

          <h2>3. Event Listings and Bookings</h2>
          <p>
            TicketZilla provides a platform for users and organizers to create, list, and book
            events. We are not responsible for the quality, safety, legality, or accuracy of events
            listed by organizers.
          </p>

          <h2>4. Payments and Refunds</h2>
          <p>
            All payments are processed through secure third-party gateways. Fees may vary based on
            event type and payment method. Refunds are subject to the organizer’s policy and will be
            handled according to our
            <a href='/refund-policy' className='text-blue-600'>
              Refund Policy
            </a>
            .
          </p>

          <h2>5. Cancellations</h2>
          <p>
            Organizers reserve the right to cancel or reschedule events. In such cases, users will
            be notified via email or app notifications, and refunds will be issued as applicable.
          </p>

          <h2>6. Prohibited Activities</h2>
          <p>
            You agree not to misuse the TicketZilla Platform, including but not attempting to
            interfere with our systems, engaging in fraudulent activity, reselling tickets without
            authorization, or uploading harmful content.
          </p>

          <h2>7. Intellectual Property</h2>
          <p>
            All trademarks, logos, and content displayed on TicketZilla are the property of their
            respective owners. You may not copy, reproduce, or distribute any materials without
            prior written consent.
          </p>

          <h2>8. Limitation of Liability</h2>
          <p>
            TicketZilla and its affiliates are not liable for any indirect, incidental, or
            consequential damages resulting from your use of the platform or attendance at events
            booked through TicketZilla.
          </p>

          <h2>9. Termination</h2>
          <p>
            We reserve the right to suspend or terminate your account if you violate these Terms or
            engage in harmful behavior toward other users or the platform.
          </p>

          <h2>10. Updates to These Terms</h2>
          <p>
            TicketZilla may update these Terms from time to time. The latest version will always be
            available on this page, and continued use of the platform constitutes acceptance of any
            updates.
          </p>

          <h2>11. Contact Us</h2>
          <p>
            For any questions regarding these Terms, please contact our support team at
            <a href='mailto:support@ticketzilla.com' className='text-blue-600'>
              support@ticketzilla.com
            </a>
            .
          </p>

          <p className='text-sm text-gray-500 mt-10'> Last updated: November 2025</p>
        </div>
      </div>
    </Section>
  </Master>
);

const title = 'Terms of Service | TicketZilla';
const canonical = 'https://ticketzilla.com/legal/';
const description =
  'Read TicketZilla’s Terms of Service outlining user responsibilities, booking policies, event management, payments, and limitations.';

export const metadata: Metadata = {
  title,
  description,
  keywords: 'ticketzilla, ticket booking, event management, terms of service, legal, booking rules',
  alternates: { canonical },
  openGraph: {
    title,
    description,
    url: canonical,
    type: 'website',
    siteName: 'TicketZilla',
    images: 'https://ticketzilla.com/logo192.png',
  },
};

export default Page;
