import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Dialog,
  DialogPanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from '@headlessui/react'
import {
  Bars3Icon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon, ChevronRightIcon } from '@heroicons/react/20/solid'
import ProductList from './ProductCategoryList';

// Logo component
const BayMetersLogo = () => (
  <div className="flex items-center">
    <span className="text-green-50 text-3xl font-anek">BayMeters</span>  
  </div>
);

export default function Navbar() {

  const ProductCategory = ProductList();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen)

  return (
    <header className="bg-white/80 backdrop-blur-sm sticky top-0 z-50">
      <link href="https://fonts.googleapis.com/css2?family=Anek+Odia:wght@100;200;300;400;500;600;700;800&display=swap" rel="stylesheet"></link>

      <nav aria-label="Global" className="h-16 mx-auto flex max-w-full items-center justify-between p-6 lg:px-10">
        
        <div className="flex flex-1 lg:hidden">

          <Link to="/" className="pt-2">
            <span className="sr-only">Your Company</span>
            <BayMetersLogo />
          </Link>
        </div>

        <PopoverGroup className="hidden lg:flex lg:gap-x-16">

        <Link to="/" className="pt-2">
            <span className="sr-only">Your Company</span>
            <BayMetersLogo />
        </Link>

        {/* <a href="/comingsoon" target="_blank" rel="noopener noreferrer" className="pl-3 pt-2.5 text-lg font-extralight leading-6 text-gray-900">
          Quick Pay
        </a> */}

        <Popover className="relative">
          <PopoverButton className="flex items-center gap-x-1 pt-2.5 leading-6 text-lg font-extralight text-gray-700 focus:outline-none">
            Product
            <ChevronDownIcon aria-hidden="true" className="h-5 w-5 flex-none text-gray-600" />
          </PopoverButton>
          <PopoverPanel transition 
          className="absolute left-0 z-50 mt-5 w-screen max-w-sm overflow-hidden bg-white shadow-2xl rounded-md transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in">
            
            <div className="p-5">
              {ProductCategory.map((item) => (
                <Link 
                  key={item} 
                  to={`/products/${encodeURIComponent(item)}`}
                  className="group relative flex items-center justify-between gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-green-100"
                >
                  <span className="text-lg font-extralight text-gray-700">{item}</span>
                  <ChevronRightIcon aria-hidden="true" className="h-5 w-5 flex-none text-gray-600" />
                </Link>
              ))}
            </div>
          </PopoverPanel>
        </Popover>

        <Link to = "/about" className="pl-3 pt-2.5 text-lg font-extralight leading-6 text-gray-900">
          About
        </Link>
      
      </PopoverGroup>
      
      <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link to ="/contact" className="text-medium font-normal leading-6 text-white p-2 px-4 bg-teal-900 hover:bg-teal-600 rounded-sm">
          Contact Us </Link>
      </div>


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

      </nav>

      {/* Mobile View */}
      <Dialog open={mobileMenuOpen} onClose={toggleMobileMenu} className="lg:hidden">
        <div className="fixed inset-0 z-50" />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          
          {/* Close Button */}
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

                {/* <Link
                  to="/comingsoon" target="_blank" rel="noopener noreferrer"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Quick Pay
                </Link> */}

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
                        {ProductCategory.map((item) => (
                          <DisclosureButton
                            key={item}
                            as={Link}
                            to={`/products/${encodeURIComponent(item)}`}
                            onClick={toggleMobileMenu}
                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-green-100"
                          >
                            {item}
                          </DisclosureButton>
                        ))}
                      </DisclosurePanel>
                    </>
                )}
              </Disclosure>
            
                {/* <Disclosure as="div" className="-mx-3">
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
                </Disclosure> */}

                {/* <a
                  href="/"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Industries
                </a> */}
                
                <Link
                  to="/about"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  About
                </Link>

              </div>

              <div className="py-6">
                <Link
                  to="/contact"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  )
}