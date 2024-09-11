import React from 'react';

const BayMetersLogo = () => (
    <div className="flex items-center">
      <span className="text-teal-950 text-3xl font-anek">BayMeters</span>  
    </div>
  );

const Footer = () => {
  return (
    <footer class="bg-green-50 font-sans">
    <div class="container px-6 py-12 mx-auto">
        {/* <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-4"> */}
        <div class="flex justify-items-center mx-20 gap-40">

            {/* <div class="sm:col-span-2">
                <h1 class="max-w-lg text-xl font-medium tracking-tight font-anek text-gray-800 xl:text-2xl">Subscribe our newsletter to get an update.</h1>

                <div class="flex flex-col mx-auto mt-6 space-y-3 md:space-y-0 md:flex-row">
                    <input id="email" type="text" class="px-4 py-2 text-gray-800 bg-white border rounded-md focus:border-blue-400  focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300" placeholder="Email Address" />
            
                    <button class="w-full px-6 py-2.5 text-sm font-medium tracking-wider text-white transition-colors duration-300 transform md:w-auto md:mx-4 focus:outline-none bg-teal-950 rounded-lg hover:bg-gray-700 focus:ring focus:ring-gray-300 focus:ring-opacity-80">
                        Subscribe
                    </button>
                </div>
            </div> */}
            
            <div className="flex flex-col flex-auto">
                <a href="/" >
                    <span className="sr-only">Your Company</span>
                    <BayMetersLogo />
                </a>
                <p className='mt-2.5 text-teal-800 transition-colors duration-300 text-sm mb-5'>
                    BayMeters LLC<br/>
                    Corporate Commons<br/>
                    6200 Stoneridge Mall Road, 3rd Floor<br/>
                    Pleasanton, CA 94568<br/>
                    866 305-7799
                </p>
                {/* <div class="flex gap-4 hover:cursor-pointer">
                    <img src="https://www.svgrepo.com/show/343567/linkedin-network-communication-connection-internet-online.svg" width="31" height="31" alt="in"/>
                    <img src="https://www.svgrepo.com/show/475647/facebook-color.svg" width="30" height="30" alt="fb"  />
                </div> */}
            </div>

            <div className='flex-auto'>
                <p class="font-semibold text-gray-800 text-xl">Quick Link</p>

                <div class="flex flex-row items-start mt-5 space-x-28">
                    <a href="/" class="text-teal-800 text-xl transition-colors duration-300 hover:underline">Home</a>
                    <a href="https://www.supmeaauto.com/products" target="_blank" rel="noopener noreferrer" class="text-teal-800 text-xl transition-colors duration-300 hover:underline">Product</a>
                    <a href="/about" class="text-teal-800 text-xl transition-colors duration-300 hover:underline">About</a>
                    <a href='/contact' class="text-teal-800 text-xl transition-colors duration-300 hover:underline">Contact</a>
                </div>
            </div>

            {/* <div className='flex-auto'>
                <p class="font-semibold text-gray-800">products</p> 
                <div class="flex flex-col items-start mt-5 space-y-2">
                    <p class="text-teal-800 transition-colors duration-300 hover:underline hover:cursor-pointer ">Flowmeter</p>
                    <p class="text-teal-800 transition-colors duration-300 hover:underline hover:cursor-pointer ">Liquid analysis</p>
                    <p class="text-teal-800 transition-colors duration-300 hover:underline hover:cursor-pointer ">Level</p>
                    <p class="text-teal-800 transition-colors duration-300 hover:underline hover:cursor-pointer ">Pressure</p>
                    <p class="text-teal-800 transition-colors duration-300 hover:underline hover:cursor-pointer ">System products</p>
                    <p class="text-teal-800 transition-colors duration-300 hover:underline hover:cursor-pointer ">Temperature</p>
                </div>
            </div> */}

            {/* <div className='flex-auto'>
                <p class="font-semibold text-gray-800">Industries</p>

                <div class="flex flex-col items-start mt-5 space-y-2">
                    <p class="text-teal-800 transition-colors duration-300 hover:underline hover:cursor-pointer ">Water & Waste water</p>
                    <p class="text-teal-800 transition-colors duration-300 hover:underline hover:cursor-pointer ">Agriculture</p>
                    <p class="text-teal-800 transition-colors duration-300 hover:underline hover:cursor-pointer ">Food & Beverage</p>
                </div>
            </div> */}

        </div>
        
        {/* <hr class="my-6 border-gray-200 md:my-8 h-2" /> */}
        
        <div class="sm:flex sm:items-center sm:justify-between mb-8">
            {/* <div class="flex flex-1 gap-4 hover:cursor-pointer">
                <img src="https://www.svgrepo.com/show/303139/google-play-badge-logo.svg" width="130" height="110" alt="" />
                <img src="https://www.svgrepo.com/show/303128/download-on-the-app-store-apple-logo.svg" width="130" height="110" alt="" />
            </div> */}
            
            {/* <div class="flex gap-4 hover:cursor-pointer">
                <img src="https://www.svgrepo.com/show/303114/facebook-3-logo.svg" width="30" height="30" alt="fb" />
                <img src="https://www.svgrepo.com/show/303115/twitter-3-logo.svg" width="30" height="30" alt="tw" />
                <img src="https://www.svgrepo.com/show/303145/instagram-2-1-logo.svg" width="30" height="30" alt="inst" />
                <img src="https://www.svgrepo.com/show/94698/github.svg" class="" width="30" height="30" alt="gt" />
                <img src="https://www.svgrepo.com/show/22037/path.svg" width="30" height="30" alt="pn" />
                <img src="https://www.svgrepo.com/show/343567/linkedin-network-communication-connection-internet-online.svg" width="35" height="35" alt="in" class="hover:text" />
                <img src="https://www.svgrepo.com/show/22048/dribbble.svg" class="" width="30" height="30" alt="db" />
            </div> */}
        </div>
        <p class="text-teal-800 font-light text-center md:text-lg pt-10">© 2024 BayMeters LLC. All rights reserved.</p>
    </div>
</footer>
  );
};

export default Footer;

