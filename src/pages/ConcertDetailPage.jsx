import { useState, useMemo } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { getConcert } from '../data/concerts';
import { getArtist } from '../data/artists';
import { generateSeats } from '../data/seats';
import { useApp } from '../context/AppContext';
import ArtistBanner from '../components/detail/ArtistBanner';
import SeatMap from '../components/detail/SeatMap';
import SeatsioSeatMap, { seatsioConfigured, getSeatsioEventKey } from '../components/detail/SeatsioSeatMap';
import TicketSidebar from '../components/detail/TicketSidebar';
import LockPromptModal from '../components/detail/LockPromptModal';

export default function ConcertDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { unlockedSeats, isVerifiedFor } = useApp();
  const [showModal, setShowModal] = useState(false);

  const concert = getConcert(id);
  const artist = concert ? getArtist(concert.artistId) : null;

  const seats = useMemo(() => {
    if (!concert) return [];
    return generateSeats(concert);
  }, [concert]);

  if (!concert || !artist) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20 text-center">
        <h2 className="text-white text-2xl font-bold mb-4">Concert not found</h2>
        <Link to="/concerts" className="btn-primary">Back to Concerts</Link>
      </div>
    );
  }

  const joyPassUnlocked = !!unlockedSeats[concert.id];
  const alreadyVerified = isVerifiedFor(concert.artistId, concert.joyPassPercentileRequired);
  const useSeatsio = seatsioConfigured(concert.id);
  const seatsioEventKey = getSeatsioEventKey(concert.id);

  const handleLockedSeatClick = () => {
    if (alreadyVerified) return;
    setShowModal(true);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Back link */}
      <Link
        to="/concerts"
        className="inline-flex items-center gap-2 text-gray-400 hover:text-white text-sm mb-6 transition-colors"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
        All Concerts
      </Link>

      <ArtistBanner artist={artist} concert={concert} />

      {/* JoyPass status banner */}
      <div className="mt-6">
        {joyPassUnlocked ? (
          <div className="flex items-center gap-3 bg-amber-500/10 border border-amber-500/30 rounded-xl px-5 py-4">
            <span className="text-2xl">⭐</span>
            <div>
              <div className="text-amber-400 font-bold">JoyPass Unlocked!</div>
              <div className="text-amber-400/70 text-sm">
                All {concert.joyPassSeats} exclusive seats are available to you.
              </div>
            </div>
          </div>
        ) : (
          <div className="flex items-center justify-between gap-4 bg-brand-surface border border-brand-border rounded-xl px-5 py-4">
            <div className="flex items-center gap-3">
              <span className="text-2xl">🔒</span>
              <div>
                <div className="text-white font-bold">
                  {concert.joyPassSeats} JoyPass seats locked
                </div>
                <div className="text-gray-400 text-sm">
                  Reserved for top {concert.joyPassPercentileRequired}% listeners of {artist.name}
                </div>
              </div>
            </div>
            <button
              onClick={() => navigate(`/verify/${artist.id}?returnTo=/concerts/${concert.id}`)}
              className="btn-primary shrink-0"
            >
              Verify Status
            </button>
          </div>
        )}
      </div>

      {/* Main layout */}
      <div className="mt-8 flex flex-col lg:flex-row gap-8">
        {/* Seat map */}
        <div className="flex-1 card-surface p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-white font-bold text-xl">Select Seats</h2>
            {useSeatsio && (
              <span className="text-xs text-gray-500 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-green-500 inline-block" />
                Live venue map
              </span>
            )}
          </div>
          {useSeatsio ? (
            <SeatsioSeatMap
              eventKey={seatsioEventKey}
              concert={concert}
              joyPassUnlocked={joyPassUnlocked}
              onLockedSeatClick={handleLockedSeatClick}
            />
          ) : (
            <SeatMap
              seats={seats}
              concert={concert}
              joyPassUnlocked={joyPassUnlocked}
              onLockedSeatClick={handleLockedSeatClick}
            />
          )}
        </div>

        {/* Sidebar */}
        <div className="lg:w-80">
          <TicketSidebar concertId={concert.id} />
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <LockPromptModal
          concert={concert}
          artist={artist}
          onClose={() => setShowModal(false)}
        />
      )}
    </div>
  );
}
