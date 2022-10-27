import NavLink from '../components/nav-link';

export default function Home() {
  return (
    <div className="flex justify-center py-80">
      <h1 className="text-3xl">
        Get Started with the <NavLink href="/example-1">first example</NavLink>!
      </h1>
    </div>
  );
}
