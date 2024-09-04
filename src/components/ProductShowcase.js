import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import Flowmeter from '../Assets/flowmeter.webp';
import Flowmetertwo from '../Assets/flowmeter2.webp';
import Pressure from '../Assets/pressure.webp';

const industries = [
  'Flowmeter', 
  'Liquid analysis',
  'Level',
  'Pressure',
  'System products',
  'Temperature',
  "other"
];

const products = [
  {
    name: "SUP-LDG Carbon steel body electromagnetic flow meter",
    description: "SUP-LDG Electromagnetic meters are a leading choice to deliver the performance and precision your applications require.",
    image: Flowmeter,
    price: 75,
    categories: ["Flowmeter","other"]
  },
  {
    name: "SUP-LDG Stainless steel body electromagnetic flowmeter",
    description: "Magnetic flow meters operate under the principle of Faraday's Law of Electromagnetic Induction to measure liquid velocity.",
    image: Flowmetertwo,
    price: 150,
    categories: ["Flowmeter", "Food & Beverage","other"]
  },
  {
    name: "SUP-P3000 Pressure transmitter",
    description: "SUP-3000 Pressure transmitter uses the unique and proven silicon sensor with state-of-the-art digital processing to provide exceptional performance in terms of accuracy, long term stability and functionalities. -0.1MPa~40MPa full detection range.",
    image: Pressure,
    price: 200,
    categories: ["Pressure", "Food & Beverage","other"]
  }
];

const ProductCard = ({ product }) => (
  <div className="bg-teal-200 rounded-sm border border-teal-200 cursor-pointer hover:shadow-xl">
    <img src={product.image} alt={product.name} className="w-full h-auto object-contain" />
    <div className='p-4 bg-teal-200'> 
      <h3 className="text-xl font-normal text-teal-900 mb-2">{product.name}</h3>
      <p className="text-sm text-teal-900 mb-4 font-extralight">{product.description}</p>
      <div className="flex gap-1">
       <p className="text-sm text-teal-900 font-extralight mt-0.5">from</p>
        <p className="text-md text-teal-900 font-semibold">${product.price}</p>
      </div>
    </div>
  </div>
);

const ViewMoreButton = ({ className }) => (
  <a href='/products' className={`${className} gap-10 flex justify-between text-left cursor-pointer bg-white p-4 rounded-sm hover:border border-teal-200 hover:shadow-lg`}>
    {/* <h3 className="pt-1 text-xl font-anek text-green-50 mb-2">View more products</h3> */}
    <div>
      <h2 className="text-xl font-normal text-teal-900 mb-3">More products...</h2>
      <p className="text-sm text-teal-900 font-extralight mb-2">Check out our latest industry launches and innovations</p>
    </div>
    <div> <ArrowRight className="text-teal-500" size={24} /></div>
    
  </a>
);


const ProductShowcase = () => {
  const [activeTab, setActiveTab] = useState(industries[0]);

  const filteredProducts = products.filter(product => product.categories.includes(activeTab));

  return (
    <div className="my-8 mx-8">
      <h1 className="text-6xl font-anek font-medium text-green-50 mb-2">Our Products</h1>
      <div className="flex overflow-x-auto mb-6 space-x-8">
        {industries.map((industry) => (
          <button
            key={industry}
            className={`px-1 py-2 whitespace-nowrap relative font-extralight text-lg transition duration-300 ease-in-out group 
              ${activeTab === industry
                ? 'text-teal-950'
                : 'text-teal-700 hover:text-teal-950'}`
              }   
            onClick={() => setActiveTab(industry)}
          >
            {industry}
            <span className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-5/6 h-0.5 bg-teal-950 transition-all duration-300 ease-in-out ${
              activeTab === industry
                ? 'opacity-100'
                : 'opacity-0 group-hover:opacity-100'
            }`}></span>
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.map((product, index) => (
          
          <ProductCard key={index} product={product} />
          
        ))}

        <div className={`items-center justify-center
              ${filteredProducts.length > 2
                ? 'sm:col-span-1 lg:col-span-3 items-center justify-center'
                : 'sm:col-span-2 lg:col-span-1'}`
              }   >
          <ViewMoreButton className="w-full h-full" />
        </div>
        
      </div>
    </div>
  );
};

export default ProductShowcase;

