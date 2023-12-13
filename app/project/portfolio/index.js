import Link from 'next/link';

const Home = () => (
  <div>
    <h1>Welcome to My Portfolio</h1>
    <p>I am [Your Name], a [Your Profession/Title].</p>
    <nav>
      <Link href="/about">About Me</Link>
      <Link href="/projects">Projects</Link>
      <Link href="/contact">Contact</Link>
    </nav>
  </div>
);

export default Home;
