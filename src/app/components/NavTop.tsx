"use client";
import React from 'react';
import { Navbar } from 'flowbite-react';
import { MdEmail, MdPermPhoneMsg } from 'react-icons/md';
import Link from 'next/link';

const NavTop = () => {
  return (
    <Navbar fluid className="md:px-24 w-full bg-stone-950">
      <div className="flex flex-col md:flex-row justify-center px-2 w-full items-center md:justify-between md:items-center">
        <Navbar.Brand>
          <Link href="/">
            <img src="https://www.heavyhaulers.com/images/hh-label-icons/hh-verticle-logo-final.png" className="md:mr-3 h-10" alt="Heavy Haulers Logo" />
          </Link>
        </Navbar.Brand>

        <div className="text-center flex flex-col m-0 gap-0 md:flex-row md:items-center justify-center h-20 md:h-auto pb-5 md:pb-0 min-h-min">
          <li className="list-none">
            <Link href="mailto:noah@ntslogistics.com" className="text-lg h-6 text-center font-bold navbar-link-hover border-gray-200 md:mb-0 md:mr-4 md:border-r md:pr-4 flex justify-center items-center gap-1">
              <MdEmail />noah@ntslogistics.com
            </Link>
          </li>
          <li className="list-none">
            <Link href="tel:1-954-495-8184" className="text-lg h-6 underline-offset-4 underline font-bold navbar-link-hover md:mb-0 md:mr-4 md:pr-4 flex justify-center items-center gap-1">
              <MdPermPhoneMsg /> 954-495-8184
            </Link>
          </li>
    
        </div>
      </div>
    </Navbar>
  );
};

export default NavTop;