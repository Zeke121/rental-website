// components/Navigation.jsx
'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function Navigation() {
  const pathname = usePathname();
  
  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex space-x-8">
            <Link 
              href="/"
              className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium
                ${pathname === '/' ? 'border-indigo-500 text-gray-900' : 'border-transparent text-gray-500 hover:text-gray-700'}`}
            >
              Home
            </Link>
            <Link 
              href="/sign-in"
              className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium
                ${pathname === '/sign-in' ? 'border-indigo-500 text-gray-900' : 'border-transparent text-gray-500 hover:text-gray-700'}`}
            >
              Sign In
            </Link>
            <Link 
              href="/list-property"
              className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium
                ${pathname === '/list-property' ? 'border-indigo-500 text-gray-900' : 'border-transparent text-gray-500 hover:text-gray-700'}`}
            >
              List Property
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}