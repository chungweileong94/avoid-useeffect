import Link from 'next/link';
import NavLink from '../components/nav-link';
import './global.css';

type Props = {
  children: React.ReactNode;
};

export default function RootLayout({children}: Props) {
  return (
    <html lang="en">
      <head>
        <title>Avoid `useEffect`</title>
        <link rel="icon" href="/favicon.ico" />
      </head>

      <body>
        <header className="flex flex-row justify-between p-6 shadow-sm">
          <Link href="/" className="flex items-center gap-1">
            Say NO to <b>`useEffect`</b>
          </Link>
          <nav className="flex gap-8">
            <NavLink href="/example-1">Example 1</NavLink>
            <NavLink href="/example-2">Example 2</NavLink>
            <NavLink href="/example-3">Example 3</NavLink>
            <NavLink href="/example-4">Example 4</NavLink>
          </nav>
        </header>
        <div className="p-8">{children}</div>
      </body>
    </html>
  );
}
