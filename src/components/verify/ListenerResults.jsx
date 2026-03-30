export default function ListenerResults({ artist, listenerData, concert, isEligible, onUnlock }) {
  const { percentile, hoursListened, totalStreams, topSongs, listeningStreak, topMonth } = listenerData;

  return (
    <div>
      <div className="text-center mb-8">
        {isEligible ? (
          <>
            <div className="w-20 h-20 bg-green-500/20 border border-green-500/30 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-10 h-10 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
            <h2 className="text-3xl font-black text-white mb-2">You qualify!</h2>
            <p className="text-gray-400">
              You're in the top{' '}
              <span className="text-green-400 font-bold">{percentile}%</span> of {artist.name}{' '}
              listeners — JoyPass seats are yours to unlock.
            </p>
          </>
        ) : (
          <>
            <div className="w-20 h-20 bg-red-500/20 border border-red-500/30 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-10 h-10 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </div>
            <h2 className="text-3xl font-black text-white mb-2">Not eligible</h2>
            <p className="text-gray-400">
              You're in the top{' '}
              <span className="text-red-400 font-bold">{percentile}%</span> of {artist.name}{' '}
              listeners. JoyPass requires top{' '}
              <span className="text-brand-gold font-bold">{concert.joyPassPercentileRequired}%</span>.
            </p>
          </>
        )}
      </div>

      {/* Stats grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
        {[
          { label: 'Percentile', value: `Top ${percentile}%`, color: isEligible ? 'text-green-400' : 'text-red-400' },
          { label: 'Hours Listened', value: `${hoursListened}h`, color: 'text-white' },
          { label: 'Total Streams', value: totalStreams.toLocaleString(), color: 'text-white' },
          { label: 'Day Streak', value: `${listeningStreak} days`, color: 'text-white' },
        ].map((stat) => (
          <div key={stat.label} className="card-surface bg-brand-dark p-4 rounded-lg text-center">
            <div className={`text-xl font-black mb-1 ${stat.color}`}>{stat.value}</div>
            <div className="text-gray-500 text-xs">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Top songs */}
      <div className="card-surface p-5 rounded-xl mb-6">
        <h3 className="text-white font-bold mb-4 flex items-center gap-2">
          <span>🎵</span> Your Top Songs
        </h3>
        <div className="space-y-3">
          {topSongs.map((song, i) => (
            <div key={song.title} className="flex items-center gap-3">
              <span className="text-gray-600 text-sm font-mono w-4">{i + 1}</span>
              <div className="flex-1">
                <div className="text-white text-sm font-medium">{song.title}</div>
                <div className="text-gray-500 text-xs">{song.streams} streams</div>
              </div>
              <div className="w-24 bg-brand-dark rounded-full h-1.5">
                <div
                  className="bg-brand-purple h-1.5 rounded-full"
                  style={{ width: `${(song.streams / topSongs[0].streams) * 100}%` }}
                />
              </div>
            </div>
          ))}
        </div>
        <div className="mt-4 pt-4 border-t border-brand-border text-xs text-gray-500">
          Best month: <span className="text-gray-400">{topMonth}</span>
        </div>
      </div>

      {/* CTA */}
      {isEligible ? (
        <button onClick={onUnlock} className="btn-primary w-full text-center">
          ⭐ Return & Unlock Seats
        </button>
      ) : (
        <div className="card-surface bg-brand-dark p-4 rounded-xl text-center">
          <p className="text-gray-400 text-sm mb-3">
            Keep listening to {artist.name} to qualify for future shows.
          </p>
          <button onClick={onUnlock} className="btn-secondary w-full">
            Return to Concert
          </button>
        </div>
      )}
    </div>
  );
}
