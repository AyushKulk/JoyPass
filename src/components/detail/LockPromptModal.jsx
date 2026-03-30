import { useNavigate } from 'react-router-dom';

export default function LockPromptModal({ concert, artist, onClose }) {
  const navigate = useNavigate();

  const handleVerify = () => {
    navigate(`/verify/${artist.id}?returnTo=/concerts/${concert.id}`);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative card-surface p-8 max-w-md w-full shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-white transition-colors"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="text-center mb-6">
          <div className="w-16 h-16 bg-amber-500/20 border border-amber-500/30 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
            </svg>
          </div>
          <h2 className="text-2xl font-black text-white mb-2">JoyPass Exclusive Seat</h2>
          <p className="text-gray-400">
            This seat is reserved for{' '}
            <span className="text-brand-gold font-semibold">
              top {concert.joyPassPercentileRequired}% listeners
            </span>{' '}
            of {artist.name}.
          </p>
        </div>

        <div className="card-surface bg-brand-dark p-4 rounded-lg mb-6 space-y-3">
          <div className="flex items-start gap-3">
            <svg className="w-5 h-5 text-brand-purple mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            <p className="text-gray-300 text-sm">
              Connect your Spotify or Apple Music to verify your listener status
            </p>
          </div>
          <div className="flex items-start gap-3">
            <svg className="w-5 h-5 text-brand-purple mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            <p className="text-gray-300 text-sm">
              If you qualify, all JoyPass seats for this concert unlock instantly
            </p>
          </div>
        </div>

        <button onClick={handleVerify} className="btn-primary w-full text-center mb-3">
          Verify My Listening
        </button>
        <button
          onClick={onClose}
          className="w-full text-center text-gray-500 hover:text-gray-300 text-sm transition-colors py-1"
        >
          Not now
        </button>
      </div>
    </div>
  );
}
