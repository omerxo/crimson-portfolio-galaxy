
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-theme-black text-theme-light-gray p-4">
      <div className="text-center max-w-md">
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-theme-red">404</h1>
          <div className="h-1 w-20 bg-theme-red mx-auto my-4"></div>
          <p className="text-2xl font-light mb-6">Page Not Found</p>
          <p className="text-theme-light-gray/70 mb-8">
            The page you are looking for doesn't exist or has been moved.
          </p>
        </div>
        
        <Link 
          to="/" 
          className="px-6 py-3 bg-theme-red text-white rounded-md hover:bg-red-700 transition-colors duration-300 inline-flex items-center"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-5 w-5 mr-2" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Return to Home
        </Link>
      </div>
      
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-theme-red/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-theme-red/5 rounded-full blur-3xl"></div>
      </div>
    </div>
  );
};

export default NotFound;
