import { useApp } from '../../context/AppContext';

export default function SeatCell({ seat, concertId, joyPassUnlocked, onLockedClick }) {
  const { isInCart, toggleSeat } = useApp();
  const inCart = isInCart(seat.id);

  // Determine visual state
  const getClasses = () => {
    const base = 'w-7 h-7 rounded-sm text-xs flex items-center justify-center transition-all duration-150 cursor-pointer select-none font-bold';

    if (inCart) {
      return `${base} bg-brand-purple border-2 border-purple-400 text-white scale-110`;
    }
    if (seat.isTaken) {
      return `${base} bg-gray-800 border border-gray-700 text-gray-700 cursor-not-allowed`;
    }
    if (seat.isJoyPass) {
      if (joyPassUnlocked) {
        return `${base} bg-amber-400 border-2 border-amber-300 text-amber-900 hover:bg-amber-300 hover:scale-110`;
      }
      return `${base} bg-amber-900/40 border border-amber-700/50 text-amber-600 hover:bg-amber-800/50`;
    }
    // Regular available seat
    return `${base} bg-emerald-900/40 border border-emerald-700/50 text-emerald-500 hover:bg-emerald-700/50 hover:scale-110`;
  };

  const handleClick = () => {
    if (seat.isTaken) return;
    if (seat.isJoyPass && !joyPassUnlocked) {
      onLockedClick(seat);
      return;
    }
    toggleSeat(seat, { id: concertId });
  };

  const getIcon = () => {
    if (inCart) return '✓';
    if (seat.isTaken) return '×';
    if (seat.isJoyPass && !joyPassUnlocked) return '🔒';
    if (seat.isJoyPass && joyPassUnlocked) return '⭐';
    return '';
  };

  return (
    <div
      className={getClasses()}
      onClick={handleClick}
      title={
        seat.isTaken
          ? 'Taken'
          : seat.isJoyPass && !joyPassUnlocked
          ? `JoyPass exclusive — $${seat.price}`
          : `Row ${seat.row}, Seat ${seat.col} — $${seat.price}`
      }
    >
      {getIcon()}
    </div>
  );
}
