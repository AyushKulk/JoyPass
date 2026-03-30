import { Link, useLocation } from 'react-router-dom';
import { useApp } from '../../context/AppContext';

export default function Navbar() {
  const { cart } = useApp();
  const location = useLocation();

  return (
    <nav className="sticky top-0 z-50 bg-brand-dark/90 backdrop-blur border-b border-brand-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <Link to="/" className="flex items-center gap-2">
          <span className="text-2xl font-black tracking-tight">
            <span className="text-brand-purple">Joy</span>
            <span className="text-white">Pass</span>
          </span>
        </Link>

        <div className="flex items-center gap-6">
          <Link
            to="/concerts"
            className={`text-sm font-medium transition-colors ${
              location.pathname.startsWith('/concerts')
                ? 'text-white'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            Concerts
          </Link>
          {cart.length > 0 && (
            <div className="flex items-center gap-1.5 bg-brand-purple/20 border border-brand-purple/40 text-brand-purple text-sm font-semibold px-3 py-1.5 rounded-full">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-9H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              {cart.length}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
