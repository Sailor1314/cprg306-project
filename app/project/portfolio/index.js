import Link from 'next/link';

const Home = () => (
  <div className='flex flex-col items-center justify-center'>
    <h1>Welcome to My Portfolio</h1>
    <p>I am Sailor, a Software Development Student.</p>
    <nav>
      <Link href="/about">About Me</Link>
      <Link href="/projects">Projects</Link>
      <Link href="/contact">Contact</Link>
    </nav>
  </div>
);

export default Home;
