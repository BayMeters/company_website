import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const ViewMoreButton = ({ className, activeTab }) => (
  <Link 
    to={`/products/${encodeURIComponent(activeTab)}`}
    className={`${className} gap-10 flex justify-between text-left cursor-pointer bg-white p-4 rounded-sm hover:border border-teal-200 hover:shadow-lg`}
  >
    <div>
      <h2 className="text-xl font-normal text-teal-900 mb-3">More products...</h2>
    </div>
    <div>
      <ArrowRight className="text-teal-500" size={24} />
    </div>
  </Link>
);

export default ViewMoreButton;