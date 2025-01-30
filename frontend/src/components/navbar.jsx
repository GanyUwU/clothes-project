'use client';

import Link from 'next/link';
import React, { useState } from 'react';

export function NavbarComponent() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const brandName = "YSL - sarojini nagar"; // Added brand name 

    const navItems = [
        { name: 'Men', href: '/men' },
        { name: 'Women', href: '/women' },
        { name: 'Contact', href: '/contact' },
    ];

    const NavLinks = ({ items }) => (
        <div className="flex flex-col lg:flex-row lg:space-x-4"> {/* Added flex-col for vertical on small screens, and space-x-4 for horizontal on larger screens */}
            {items.map((item) => (
                <Link
                    key={item.name}
                    href={item.href}
                    className="text-black hover:text-blue-600 transition-colors flex items-center h-16 px-4"
                >
                    {item.name}
                </Link>
            ))}
        </div>
    );

    return (
        <nav className="bg-white shadow-md">
            <div className="flex flex-col lg:flex-row items-center justify-between px-8 py-4"> {/* Changed to flex-col lg:flex-row and added padding */}
                {/* Brand Name */}
                <div className="text-xl font-bold text-black mb-2 lg:mb-0 mr-4"> {/* Added margin bottom for small screens and margin right for larger screens */}
                    {brandName}
                </div>

                <NavLinks items={navItems} /> {/* NavLinks below the brand name */}

                {/* Profile Icon and Dropdown */}
                <div className="relative mt-2 lg:mt-0"> {/* Added margin top for small screens and reset margin top for larger screens */}
                    <button
                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                        aria-expanded="false"
                        className="lv-header-icon-account"
                    >
                        <svg
                            focusable="false"
                            aria-hidden="true"
                            className="lv-icon h-10 w-10"
                            viewBox="0 0 24 24"
                        >
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zM12 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 10c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4z" />
                        </svg>
                        <span className="sr-only">My LV</span>
                    </button>

                    {/* Dropdown Menu */}
                    {isDropdownOpen && (
                        <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10">
                            <Link
                                href="/profile"
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                            >
                                Profile
                            </Link>
                            <Link
                                href="/settings"
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                            >
                                Settings
                            </Link>
                            <Link
                                href="/logout"
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                            >
                                Logout
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
}