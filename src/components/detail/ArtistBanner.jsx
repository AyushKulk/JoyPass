export default function ArtistBanner({ artist, concert }) {
  return (
    <div className="relative h-64 sm:h-80 overflow-hidden rounded-xl">
      <img
        src={artist.image}
        alt={artist.name}
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/60 to-transparent" />

      <div className="absolute bottom-0 left-0 right-0 p-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <div className="text-brand-purple text-sm font-semibold uppercase tracking-widest mb-1">
              {artist.genre}
            </div>
            <h1 className="text-4xl sm:text-5xl font-black text-white">{artist.name}</h1>
          </div>
          <div className="text-right">
            <div className="text-white font-semibold">{concert.venue}</div>
            <div className="text-gray-400 text-sm">{concert.city}</div>
            <div className="text-gray-400 text-sm">{concert.date} · {concert.time}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
