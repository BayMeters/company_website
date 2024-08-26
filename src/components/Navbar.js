import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from '@headlessui/react'
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon, ChevronRightIcon } from '@heroicons/react/20/solid'

// Navigation items
const products = [
  { name: 'Flowmeter', description: 'Get a better understanding of your traffic', href: '#', icon: ChartPieIcon },
  { name: 'Liquid analysis', description: 'Speak directly to your customers', href: '#', icon: CursorArrowRaysIcon },
  { name: 'Level', description: 'Your customers data will be safe and secure', href: '#', icon: FingerPrintIcon },
  { name: 'Pressure', description: 'Connect with third-party tools', href: '#', icon: SquaresPlusIcon },
  { name: 'System products', description: 'Build strategic funnels that will convert', href: '#', icon: ArrowPathIcon },
  { name: 'Temperature', description: 'Your customers data will be safe and secure', href: '#', icon: FingerPrintIcon },
]

const industries = [
  "Water & Wastewater",
  "Agriculture",
  "Food & Beverage"
];

// Logo component
const BayMetersLogo = () => (
  <div className="flex items-center">
    <span className="text-green-50 text-3xl font-anek">BayMeters</span>  
  </div>
);

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen)

  return (
    <header className="bg-white/80 backdrop-blur-sm sticky top-0 z-50">
      <link href="https://fonts.googleapis.com/css2?family=Anek+Odia:wght@100;200;300;400;500;600;700;800&display=swap" rel="stylesheet"></link>

      <nav aria-label="Global" className="h-16 mx-auto flex max-w-full items-center justify-between p-6 lg:px-10">
        
        <div className="flex flex-1 lg:hidden">
          <a href="/" className="pt-2">
            <span className="sr-only">Your Company</span>
            <BayMetersLogo />
          </a>
        </div>

        <PopoverGroup className="hidden lg:flex lg:gap-x-16">

        <Link to="/" className="pt-2">
            <span className="sr-only">Your Company</span>
            <BayMetersLogo />
          </Link>

          <Popover>
            <PopoverButton className="flex items-center gap-x-1 pt-2.5 text-lg font-extralight leading-6 text-gray-700 focus:outline-none ">
              Product
              <ChevronDownIcon aria-hidden="true" className="h-5 w-5 flex-none text-gray-600" />
            </PopoverButton>
            <PopoverPanel
              transition
              className="absolute rounded-md left-[calc(15%)] z-50 top-[calc(100%)] w-screen max-w-md overflow-hidden bg-white shadow-2xl transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
            >
              <div className="p-4">
                {products.map((item) => (
                  <div
                    key={item.name}
                    className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                  >
                    {/* <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                      <item.icon aria-hidden="true" className="h-6 w-6 text-gray-600 group-hover:text-green-50" />
                    </div> */}
                    <div className="flex-auto">
                      <a href={item.href} className="block font-semibold text-gray-900">
                        {item.name}
                        <span className="absolute inset-0" />
                      </a>
                      {/* <p className="mt-1 text-gray-600">{item.description}</p> */}
                    </div>
                  </div>
                ))}
              </div>
            </PopoverPanel>
          </Popover>

          <Popover>
            <PopoverButton className="flex items-center gap-x-1 pt-2.5 text-lg font-extralight leading-6 text-gray-900 focus:outline-none ">
              Industries
              <ChevronDownIcon aria-hidden="true" className="h-5 w-5 flex-none text-gray-600" />
            </PopoverButton>
            <PopoverPanel
              transition
              className="absolute rounded-md left-[calc(25%)] z-50 top-[calc(100%)] w-screen max-w-md overflow-hidden bg-white shadow-2xl transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
            >
              <div className="p-4">
                {products.map((item) => (
                  <div
                    key={item.name}
                    className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                  >
                    <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                      <item.icon aria-hidden="true" className="h-6 w-6 text-gray-600 group-hover:text-green-50" />
                    </div>
                    <div className="flex-auto">
                      <a href={item.href} className="block font-semibold text-gray-900">
                        {item.name}
                        <span className="absolute inset-0" />
                      </a>
                      <p className="mt-1 text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </PopoverPanel>
          </Popover>

          <a href="/about" className="pl-3 pt-2.5 text-lg font-extralight leading-6 text-gray-900">
            About
          </a>

        </PopoverGroup>
        
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={toggleMobileMenu}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">{mobileMenuOpen ? 'Close menu' : 'Open menu'}</span>
            {mobileMenuOpen ? (
              <XMarkIcon aria-hidden="true" className="h-6 w-6" />
            ) : (
              <Bars3Icon aria-hidden="true" className="h-6 w-6" />
            )}
          </button>
        </div>

        

        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a href="#" className="text-medium font-normal leading-6 text-white p-2 px-4 bg-teal-900 hover:bg-teal-600 rounded-sm">Contact Us</a>
        </div>
      </nav>

      {/* Mobile View */}
      <Dialog open={mobileMenuOpen} onClose={toggleMobileMenu} className="lg:hidden">
        <div className="fixed inset-0 z-50" />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          
          <div className="flex justify-end mb-6">
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={toggleMobileMenu}>
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>

          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <DisclosureButton className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                        Product
                        <ChevronDownIcon
                          className={`h-5 w-5 flex-none ${open ? 'rotate-180' : ''}`}
                          aria-hidden="true"
                        />
                      </DisclosureButton>
                      <DisclosurePanel className="mt-2 space-y-2">
                        {[...products].map((item) => (
                          <DisclosureButton
                            key={item.name}
                            as="a"
                            href={item.href}
                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                          >
                            {item.name}
                          </DisclosureButton>
                        ))}
                      </DisclosurePanel>
                    </>
                  )}
                </Disclosure>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Industries
                </a>
                <a
                  href="/about"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  About
                </a>
              </div>
              <div className="py-6">
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  )
}