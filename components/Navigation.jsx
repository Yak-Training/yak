import React, { Fragment } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import Image from 'next/image';
import Link from 'next/link';
import { Popover, Transition } from '@headlessui/react';
import { XIcon } from '@heroicons/react/outline';
import Anchor from './Anchor';
import logo from '../public/logo.svg';
import Typography from './Typography';
import links from '../data/links';

const Navigation = () => (
  <Popover>
    <div className="relative pt-6 px-4 sm:px-6 lg:px-8">
      <nav className="relative flex items-center justify-between sm:h-10 lg:justify-start" aria-label="Global">
        <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
          <div className="flex items-center justify-between w-full md:w-auto">
            <Link href="./" passHref>
              <Anchor>
                <span className="sr-only">Yak</span>
                <Image
                  width={125}
                  height={125}
                  src={logo}
                  alt="Yak"
                />
              </Anchor>
            </Link>
            <div className="-mr-2 flex items-center md:hidden">
              <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                <span className="sr-only">Open main menu</span>
                <MenuIcon className="h-6 w-6" aria-hidden="true" />
              </Popover.Button>
            </div>
          </div>
        </div>
        <div className="hidden md:flex md:ml-11 md:pr-4 md:space-x-8">
          {links.map((item) => (
            <Link
              href={item.href}
              key={item.name}
              passHref
            >
              <Anchor className="hover:text-gray-900">
                <Typography variant="body2">
                  {item.name}
                </Typography>
              </Anchor>
            </Link>
          ))}

        </div>
      </nav>
    </div>

    <Transition
      as={Fragment}
      enter="duration-150 ease-out"
      enterFrom="opacity-0 scale-95"
      enterTo="opacity-100 scale-100"
      leave="duration-100 ease-in"
      leaveFrom="opacity-100 scale-100"
      leaveTo="opacity-0 scale-95"
    >
      <Popover.Panel
        focus
        className="absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
      >
        <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
          <div className="px-5 pt-4 flex items-center justify-between">
            <Link href="./" passHref>
              <Anchor>
                <span className="sr-only">Yak</span>
                <Image
                  width={125}
                  height={125}
                  src={logo}
                  alt="Yak"
                />
              </Anchor>
            </Link>
            <div className="-mr-2">
              <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                <span className="sr-only">Close main menu</span>
                <XIcon className="h-6 w-6" aria-hidden="true" />
              </Popover.Button>
            </div>
          </div>
          <div className="px-2 pt-2 pb-3 space-y-1">
            {links.map((item) => (
              <Link
                href={item.href}
                passHref
                key={item.name}
              >
                <Anchor className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">
                  {item.name}
                </Anchor>
              </Link>
            ))}
          </div>
        </div>
      </Popover.Panel>
    </Transition>
  </Popover>
);

export default Navigation;
