import { Link } from 'react-router-dom';
import { getArtist } from '../../data/artists';

export default function ConcertCard({ concert }) {
  const artist = getArtist(concert.artistId);

  return (
    <Link
      to={`/concerts/${concert.id}`}
      className="card-surface overflow-hidden group hover:border-brand-purple/40 transition-all duration-300 hover:-translate-y-1 block"
    >
      {/* Artist image background */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={artist.image}
          alt={artist.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-surface via-brand-surface/50 to-transparent" />

        {/* JoyPass badge */}
        <div className="absolute top-3 right-3">
          <span className="joypass-badge">
            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
            </svg>
            {concert.joyPassSeats} JoyPass seats
          </span>
        </div>

        {/* Genre pill */}
        <div className="absolute bottom-3 left-3">
          <span className="bg-brand-dark/80 text-gray-300 text-xs font-medium px-2.5 py-1 rounded-full">
            {artist.genre}
          </span>
        </div>
      </div>

      {/* Card body */}
      <div className="p-5">
        <h3 className="text-white font-bold text-lg mb-1 group-hover:text-brand-purple transition-colors">
          {artist.name}
        </h3>
        <div className="flex items-center gap-1.5 text-gray-400 text-sm mb-4">
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          {concert.venue} · {concert.city}
        </div>

        <div className="flex items-center gap-1.5 text-gray-400 text-sm mb-5">
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          {concert.date} · {concert.time}
        </div>

        <div className="flex items-center justify-between">
          <div>
            <span className="text-gray-500 text-xs">From</span>
            <div className="text-white font-bold">${concert.regularPrice}</div>
          </div>
          <div className="text-right">
            <span className="text-brand-gold text-xs font-medium">JoyPass</span>
            <div className="text-brand-gold font-bold">${concert.joyPassPrice}</div>
          </div>
        </div>

        <div className="mt-4 pt-4 border-t border-brand-border flex items-center gap-2 text-xs text-gray-500">
          <svg className="w-3.5 h-3.5 text-brand-gold" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
          </svg>
          Top {concert.joyPassPercentileRequired}% listeners only
        </div>
      </div>
    </Link>
  );
}
