import { useState } from 'react';
import { concerts, allGenres } from '../data/concerts';
import GenreFilter from '../components/concerts/GenreFilter';
import ConcertGrid from '../components/concerts/ConcertGrid';

export default function ConcertsPage() {
  const [selectedGenre, setSelectedGenre] = useState(null);

  const filtered = selectedGenre
    ? concerts.filter((c) => c.genres.includes(selectedGenre))
    : concerts;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-10">
        <h1 className="text-4xl font-black text-white mb-2">Upcoming Concerts</h1>
        <p className="text-gray-400">
          Find shows with JoyPass exclusive seats — reserved for top listeners only.
        </p>
      </div>

      <div className="mb-8">
        <GenreFilter genres={allGenres} selected={selectedGenre} onSelect={setSelectedGenre} />
      </div>

      <ConcertGrid concerts={filtered} />
    </div>
  );
}
