import ConcertCard from './ConcertCard';

export default function ConcertGrid({ concerts }) {
  if (concerts.length === 0) {
    return (
      <div className="text-center py-20">
        <div className="text-5xl mb-4">🎵</div>
        <h3 className="text-white text-xl font-bold mb-2">No concerts found</h3>
        <p className="text-gray-400">Try a different genre filter.</p>
      </div>
    );
  }

  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {concerts.map((concert) => (
        <ConcertCard key={concert.id} concert={concert} />
      ))}
    </div>
  );
}
