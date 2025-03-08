import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <ul className="flex space-x-6 justify-center">
        <li>
          <a href="/" className="hover:underline">
            Home
          </a>
        </li>
        <li>
          <Link href="/board" className="hover:underline">
            Board
          </Link>
        </li>
        <li>
          <a href="/events" className="hover:underline">
            Events
          </a>
        </li>
        <li>
          <a href="/contact" className="hover:underline">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}