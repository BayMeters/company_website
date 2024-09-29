import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  // Get the first photo ID from the list
  const firstPhotoId = product.Photos && product.Photos.length > 0 ? product.Photos[0] : null;
  
  // Function to get image URL dynamically
  const getImageUrl = (photoId) => {
    try {
      return require(`../Pictures/${photoId}`);
    } catch (error) {
      console.error(`Failed to load image: ${photoId}`, error);
      return null;
    }
  };

  // Get the image URL
  const imageUrl = firstPhotoId ? getImageUrl(firstPhotoId) : null;

  // Function to truncate description
  const truncateDescription = (description) => {
    if (!description) return '';
    const sentences = description.split('.');
    return sentences[0] + '.';
  };
  // Construct the link to the single product page
  const productLink = `/products/${encodeURIComponent(product.Type)}/${encodeURIComponent(product.Model)}`;
  
  return (
    
      <div className="rounded-sm border border-teal-200 cursor-pointer hover:shadow-xl bg-white">
        <Link to={productLink} className="block">
        {imageUrl && (
          <div className="flex justify-center">
            <img src={imageUrl} alt={product.Model} className="w-2/3 h-auto object-contain bg-white my-5 transition-transform duration-300 hover:scale-110" />
          </div>
        )}
        <div className='p-4 space-y-6 mb-4'> 
          <h3 className="text-2xl font-normal text-teal-900">{product.Model}</h3>
          <p className="text-base text-teal-900 font-extralight">{truncateDescription(product.Description)}</p>
          <p className="text-base text-teal-900 font-extralight">Contact us for <strong>price</strong></p>
        </div>
      </Link>
      </div>
  );
};

export default ProductCard;