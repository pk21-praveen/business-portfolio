'use client'

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

// Define the type for NavLink props
type NavLinkProps = {
  href: string;
  label: string;
};

// Reusable NavLink component to handle active state and styling
const NavLink: React.FC<NavLinkProps> = ({ href, label }) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  const linkClassName = isActive
    ? 'text-primary font-semibold'
    : 'text-gray-700 hover:text-primary';

  return (
    <Link href={href} className={`${linkClassName} uppercase block py-2 px-1 rounded font-medium`}>
      {label}
    </Link>
  );
};

export const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks: NavLinkProps[] = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/service', label: 'Services' },
    { href: '/contact', label: 'Contact' },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow sticky top-0 z-50">
      <div className="container-fluid mx-auto flex items-center justify-between p-4 lg:px-8">
        {/* Brand */}
        <Link href="/" className="text-primary text-3xl font-bold">
          WooDY
        </Link>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="lg:hidden text-gray-500 hover:text-primary focus:outline-none"
          aria-label="Toggle menu"
          onClick={toggleMenu}
        >
          <span className="material-icons">{isMenuOpen ? 'close' : 'menu'}</span>
        </button>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex lg:items-center lg:space-x-6">
          {navLinks.map((link) => (
            <NavLink key={link.href} href={link.href} label={link.label} />
          ))}
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white shadow-md absolute w-full top-full left-0 z-40">
          {navLinks.map((link) => (
            <NavLink key={link.href} href={link.href} label={link.label} />
          ))}
        </div>
      )}
    </nav>
  );
};
