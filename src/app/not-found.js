import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#173162] text-white px-4">
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">Page Not Found</h2>
        <p className="text-gray-300 mb-6">
          Sorry, the page you're looking for doesn't exist.
        </p>
        <Link
          href="/"
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 inline-block"
        >
          Go back home
        </Link>
      </div>
    </div>
  );
}
