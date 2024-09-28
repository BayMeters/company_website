import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Breadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  return (
    <nav aria-label="Breadcrumb" className="mb-4">
      <ol className="flex items-center text-lg font-anek text-gray-500">
        {pathnames.map((name, index) => {
          const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
          const isLast = index === pathnames.length - 1;
          return (
            <li key={name} className="flex items-center">
              {index !== 0 && (
                <span className="mx-2 select-none">&gt;</span>
              )}
              {isLast ? (
                <span className="text-gray-500">
                  {decodeURIComponent(name).replace(/-/g, ' ')}
                </span>
              ) : (
                <Link 
                  to={routeTo} 
                  className="hover:underline underline-offset-4 decoration-inherit"
                >
                  {name.replace(/-/g, ' ')}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;