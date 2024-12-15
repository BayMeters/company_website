import React from 'react';
import { Link } from 'react-router-dom';
import { Dialog, DialogPanel, Disclosure } from '@headlessui/react';
import { XMarkIcon, ChevronDownIcon } from '@heroicons/react/24/outline';

export const MobileNav = ({ products, isOpen, onClose }) => (
  <Dialog open={isOpen} onClose={onClose} className="lg:hidden">
    <div className="fixed inset-0 z-50" />
    <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
      <div className="flex justify-end items-center">
        <button onClick={onClose} className="p-2.5 text-gray-700">
          <XMarkIcon className="h-6 w-6" />
        </button>
      </div>

      <div className="mt-6 flow-root">
        <div className="divide-y divide-gray-500/10">
          <div className="space-y-2 py-2">
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                    Product
                    <ChevronDownIcon className={`h-5 w-5 ${open ? 'rotate-180' : ''}`} />
                  </Disclosure.Button>

                  <Disclosure.Panel className="mt-2 space-y-2">
                    {products.map((item) => (
                      <Link
                        key={item}
                        to={`/products/${encodeURIComponent(item)}`}
                        onClick={onClose}
                        className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-green-100"
                      >
                        {item}
                      </Link>
                    ))}
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
            
            <Link 
              to="/about" 
              onClick={onClose}
              className="block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
            >
              About
            </Link>
          </div>

          <div className="py-6">
            <Link 
              to="/contact" 
              onClick={onClose}
              className="block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </DialogPanel>
  </Dialog>
);