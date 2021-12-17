/* This example requires Tailwind CSS v2.0+ */
import React, { Fragment } from 'react';
import styled from '@emotion/styled';
import Link from 'next/link';
import { Popover, Transition } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import Image from 'next/image';
import Anchor from './Anchor';
import logo from '../public/logo.svg';
import adventure from '../public/adventure.jpeg';
import Typography from './Typography';
import Button from './Button';

const StyledButton = styled(Button)`
  &&& {
    background-color: ${(props) => props.theme.palette.primary.main};
  }
`;

export default function Hero({ navLinks, heroText }) {
  return (
    <div className="relative bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <svg
            className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg>

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
                  {navLinks.map((item) => (
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
                          width={100}
                          height={100}
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
                    {navLinks.map((item) => (
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

          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <Typography className="mb-6" component="h1" gutterBottom variant="h3">{heroText}</Typography>
              <Typography className="mb-6" variant="body1" gutterBottom>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam porta est enim, ut convallis eros blandit ac.</Typography>
              <Link
                href={{
                  pathname: '/contact',
                }}
              >
                <Anchor>
                  <StyledButton size="large" variant="contained">
                    Contact
                  </StyledButton>
                </Anchor>
              </Link>
            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <Image
          alt="Mountains"
          src={adventure}
          layout="fill"
          objectFit="cover"
          placeholder="blur"
          blurDataURL={adventure}
        />
      </div>
    </div>
  );
}
