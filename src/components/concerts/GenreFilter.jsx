export default function GenreFilter({ genres, selected, onSelect }) {
  return (
    <div className="flex items-center gap-3 flex-wrap">
      <button
        onClick={() => onSelect(null)}
        className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
          selected === null
            ? 'bg-brand-purple text-white'
            : 'bg-brand-surface border border-brand-border text-gray-400 hover:text-white hover:border-brand-purple/50'
        }`}
      >
        All
      </button>
      {genres.map((genre) => (
        <button
          key={genre}
          onClick={() => onSelect(genre)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
            selected === genre
              ? 'bg-brand-purple text-white'
              : 'bg-brand-surface border border-brand-border text-gray-400 hover:text-white hover:border-brand-purple/50'
          }`}
        >
          {genre}
        </button>
      ))}
    </div>
  );
}
