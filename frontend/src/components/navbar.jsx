import Link from 'next/link';
import React from 'react';




export function NavbarComponent(){

    const navItems = [
        { name: 'Men', href: '/men' },
        { name: 'Women', href: '/women' },
        { name: 'Contact', href: '/contact' },
      ];
      
      const NavLinks = ({ items }) => (
        <>
          {items.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-black hover:text-blue-600 transition-colors flex items-center h-16">
              {item.name}
            </Link>
          ))}
        </>
      )

      return (
        (<nav className="bg-white shadow-md">
            <div className="hidden lg:flex items-center justify-center flex-1">
                <div className="flex items-center space-x-4">
                <NavLinks items={navItems} />
                </div>
            </div>
        </nav>
      )
    )
}