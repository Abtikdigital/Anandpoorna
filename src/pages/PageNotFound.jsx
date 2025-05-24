import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-[#fdf9f4] px-6">
      <div className="text-center max-w-xl">
        <h1 className="text-9xl font-bold text-[#C57C2C]">404</h1>
        <h2 className="text-3xl font-semibold mt-4 mb-2">Page Not Found</h2>
        <p className="text-gray-600 mb-6">
          Sorry, the page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          to="/"
          className="inline-block bg-[#C57C2C] hover:bg-[#a9641f] text-white px-6 py-2 rounded-full text-lg font-semibold transition-all duration-300"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default PageNotFound;
