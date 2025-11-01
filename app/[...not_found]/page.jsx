import { notFound } from 'next/navigation';

const Page = () => {
  notFound();
};

export const metadata = {
  title: '404 - Not found',
};

export default Page;
