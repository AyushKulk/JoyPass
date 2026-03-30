import SeatCell from './SeatCell';

const ROW_LABELS = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];

export default function SeatMap({ seats, concert, joyPassUnlocked, onLockedSeatClick }) {
  const { rows, seatsPerRow } = concert;

  // Group seats by row
  const rowMap = {};
  for (const seat of seats) {
    if (!rowMap[seat.row]) rowMap[seat.row] = [];
    rowMap[seat.row].push(seat);
  }

  return (
    <div>
      <div className="overflow-x-auto">
        <div className="min-w-max">
          {/* Stage */}
          <div className="flex justify-center mb-6">
            <div className="bg-brand-surface border border-brand-border text-gray-400 text-xs font-bold uppercase tracking-widest px-12 py-2 rounded-t-xl w-full max-w-lg text-center">
              STAGE
            </div>
          </div>

          {/* Seat rows */}
          <div className="space-y-1.5">
            {ROW_LABELS.slice(0, rows).map((rowLabel) => {
              const rowSeats = rowMap[rowLabel] || [];
              return (
                <div key={rowLabel} className="flex items-center gap-2">
                  <span className="w-5 text-right text-xs text-gray-600 font-mono shrink-0">
                    {rowLabel}
                  </span>
                  <div className="flex gap-1">
                    {rowSeats.map((seat) => (
                      <SeatCell
                        key={seat.id}
                        seat={seat}
                        concertId={concert.id}
                        joyPassUnlocked={joyPassUnlocked}
                        onLockedClick={onLockedSeatClick}
                      />
                    ))}
                  </div>
                  <span className="w-5 text-xs text-gray-600 font-mono shrink-0">
                    {rowLabel}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Legend */}
          <div className="mt-8 flex flex-wrap items-center gap-4 text-xs text-gray-400">
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-sm bg-emerald-900/40 border border-emerald-700/50" />
              Regular
            </div>
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-sm bg-gray-800 border border-gray-700" />
              Taken
            </div>
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-sm bg-amber-900/40 border border-amber-700/50 flex items-center justify-center text-amber-600 text-xs">🔒</div>
              JoyPass (locked)
            </div>
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-sm bg-amber-400 border border-amber-300 flex items-center justify-center text-amber-900 text-xs">⭐</div>
              JoyPass (unlocked)
            </div>
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-sm bg-brand-purple border-2 border-purple-400" />
              Selected
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
