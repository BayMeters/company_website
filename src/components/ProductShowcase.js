import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';

const industries = [
  "Water & Wastewater",
  "Food & Beverage",
  "Pulp & Paper",
  "Mining & Others"
];

const products = [
  {
    name: "Micropilot FMR67B - 80 GHz radar sensor",
    description: "Highest performance for demanding applications",
    image: "/api/placeholder/150/150",
    price: 75,
  },
  {
    name: "iTEMP TMT182B temperature transmitter",
    description: "HART® temperature head transmitter with one universal sensor",
    image: "/api/placeholder/150/150",
    price: 150,
  },
  {
    name: "iTEMP TMT86 temperature transmitter",
    description: "PROFINET® temperature transmitter as head or field device with two universal sensor",
    image: "/api/placeholder/150/150",
    price: 200,
  }
];

const ProductCard = ({ product }) => (
  <div className="bg-white p-4 rounded-lg border border-teal-200 cursor-pointer hover:shadow-xl">
    <img src={product.image} alt={product.name} className="w-full h-32 object-contain mb-4" />
    <h3 className="text-xl font-normal text-teal-900 mb-2">{product.name}</h3>
    <p className="text-sm text-teal-900 mb-4 font-extralight">{product.description}</p>
    <p className="text-sm text-teal-900 font-semibold">${product.price}</p>
  </div>
);

const ViewMoreButton = ({ className }) => (
  <button className={`${className} gap-10 flex justify-between text-left bg-white p-4 rounded-lg hover:border border-teal-200 hover:shadow-lg`}>
    {/* <h3 className="pt-1 text-xl font-anek text-green-50 mb-2">View more products</h3> */}
    <div>
      <h2 className="text-xl font-normal text-teal-900 mb-2">More products...</h2>
      <p className="text-sm text-teal-900 font-extralight mb-2">Check out our latest industry launches and innovations</p>
    </div>
    <div> <ArrowRight className="text-teal-500" size={24} /></div>
    
  </button>
);


const ProductShowcase = () => {
  const [activeTab, setActiveTab] = useState(industries[0]);

  return (
    <div className="my-8">
      <h1 className="text-6xl font-anek font-medium text-green-50 mb-2">Our Products</h1>
      <div className="flex overflow-x-auto mb-6 space-x-8">
        {industries.map((industry) => (
          <button
            key={industry}
            className={`px-1 py-2 whitespace-nowrap relative font-extralight text-lg transition duration-300 ease-in-out group ${
              activeTab === industry
                ? 'text-teal-950'
                : 'text-teal-900 hover:text-teal-950'
            }`}
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
        {products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
        <div className="hidden lg:flex lg:col-span-3 items-center justify-center">
          <ViewMoreButton className="w-full h-23" />
        </div>
        <div className="lg:hidden">
          <ViewMoreButton className="w-full h-full" />
        </div>
      </div>
    </div>
  );
};

export default ProductShowcase;