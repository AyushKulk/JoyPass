import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Radial gradient background */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 50% 40%, rgba(147,51,234,0.25) 0%, rgba(217,70,239,0.1) 30%, transparent 70%)',
        }}
      />
      <div className="absolute inset-0 bg-brand-dark/60" />

      {/* Decorative blobs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-brand-purple/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-brand-magenta/10 rounded-full blur-3xl" />

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 bg-brand-surface border border-brand-border text-brand-gold text-sm font-medium px-4 py-2 rounded-full mb-8">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          Exclusive seats for top fans
        </div>

        <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black tracking-tight text-white mb-6 leading-none">
          Only true fans
          <br />
          <span className="bg-gradient-to-r from-brand-purple to-brand-magenta bg-clip-text text-transparent">
            get in.
          </span>
        </h1>

        <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
          Artists lock front-row seats exclusively for their top listeners — verified through
          Spotify or Apple Music. If you've been there from the start, you deserve the best seat
          in the house.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/concerts" className="btn-primary text-lg px-8 py-4">
            Browse Concerts
          </Link>
          <a href="#how-it-works" className="btn-secondary text-lg px-8 py-4">
            How It Works
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-600">
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-gray-600 to-transparent" />
      </div>
    </section>
  );
}
