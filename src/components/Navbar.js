import React, { useState, useEffect } from 'react';
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
import { ChevronDownIcon, PhoneIcon } from '@heroicons/react/20/solid'

// Navigation items

const products = [
  { name: 'Analytics', description: 'Get a better understanding of your traffic', href: '#', icon: ChartPieIcon },
  { name: 'Engagement', description: 'Speak directly to your customers', href: '#', icon: CursorArrowRaysIcon },
  { name: 'Security', description: 'Your customers’ data will be safe and secure', href: '#', icon: FingerPrintIcon },
  { name: 'Integrations', description: 'Connect with third-party tools', href: '#', icon: SquaresPlusIcon },
  { name: 'Automations', description: 'Build strategic funnels that will convert', href: '#', icon: ArrowPathIcon },
]

// Logo component
const BayMetersLogo = () => (
  <div className="flex items-center">
      {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 449 293" className="h-8 mr-2">
          <path d="M435.985 224.493C435.985 107.688 341.297 13 224.493 13C107.688 13 13 107.688 13 224.493" stroke="#2ECC71" strokeWidth="25" fill='None'/>
          <path d="M13 224V224C13 254.928 38.072 280 69 280H380C410.928 280 436 254.928 436 224V224" stroke="#2ECC71" strokeWidth="25" fill='None'/>
          <rect x="216.954" y="13.5" width="15.6311" height="48.8934" rx="7.81557" fill="#2ECC71" stroke="#2ECC71"/>
          <rect x="73.5072" y="81.96" width="15.6311" height="48.8934" rx="7.81557" transform="rotate(-45 73.5072 81.96)" fill="#2ECC71" stroke="#2ECC71"/>
          <rect x="338.534" y="115.879" width="15.6311" height="48.8934" rx="7.81557" transform="rotate(-135 338.534 115.879)" fill="#2ECC71" stroke="#2ECC71"/>
          <rect x="18.7" y="211.131" width="15.6311" height="48.8934" rx="7.81557" transform="rotate(-90 18.7 211.131)" fill="#2ECC71" stroke="#2ECC71"/>
          <rect x="258.283" y="207.163" width="15.6311" height="79.3838" rx="7.81557" transform="rotate(-100 258.283 207.163)" fill="#2ECC71" stroke="#2ECC71"/>
          <path d="M256.348 203.704C256.348 221.144 242.21 235.281 224.77 235.281C207.33 235.281 193.192 221.144 193.192 203.704C193.192 186.264 207.33 172.126 224.77 172.126C242.21 172.126 256.348 186.264 256.348 203.704Z" stroke="#2ECC71" strokeWidth="20" fill='None'/>
      </svg> */}
      <span className="text-green-50 text-3xl font-anek">BayMeters</span>  
  </div>
);


export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-white/80 backdrop-blur-sm sticky top-0 z-50">
      <link href="https://fonts.googleapis.com/css2?family=Anek+Odia:wght@100;200;300;400;500;600;700;800&display=swap" rel="stylesheet"></link>

      <nav aria-label="Global" className="h-20 shadow-md mx-auto flex max-w-full items-center justify-between p-6 lg:px-20">
        <div className="flex lg:flex-1">
          <a href="#" className="pt-2">
            <span className="sr-only">Your Company</span>
            <BayMetersLogo />
          </a>
        </div>
        
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="h-6 w-6" />
          </button>
        </div>
        <PopoverGroup className="hidden lg:flex lg:gap-x-12">
          <Popover className="relative">
            <PopoverButton className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900">
              Product
              <ChevronDownIcon aria-hidden="true" className="h-5 w-5 flex-none text-gray-400" />
            </PopoverButton>

            <PopoverPanel
              transition
              className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
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

          <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
            Features
          </a>
          <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
            Marketplace
          </a>
          <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
            Company
          </a>
        </PopoverGroup>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end ">
          <a href="#" className="text-sm font-semibold leading-6 text-gray-900"> Contact </a>
          {/* <PhoneIcon aria-hidden="true" className="h-5 w-5 flex-none group-data-[open]:rotate-180" /> */}
        </div>
      </nav>
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">      
          <div className="flex items-center justify-between">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Disclosure as="div" className="-mx-3">
                  <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                    Product
                    <ChevronDownIcon aria-hidden="true" className="h-5 w-5 flex-none group-data-[open]:rotate-180" />
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
                </Disclosure>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Features
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Marketplace
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Company
                </a>
              </div>
              <div className="py-6">
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Log in
                </a>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  )
}
