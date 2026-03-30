export default function PlatformSelect({ onSelect }) {
  return (
    <div>
      <div className="text-center mb-8">
        <h2 className="text-3xl font-black text-white mb-2">Connect Your Music</h2>
        <p className="text-gray-400">Choose your streaming platform to verify your listener status.</p>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        {/* Spotify */}
        <button
          onClick={() => onSelect('Spotify')}
          className="card-surface p-8 flex flex-col items-center gap-4 hover:border-green-500/50 hover:bg-green-950/20 transition-all duration-300 group rounded-xl"
        >
          <div className="w-16 h-16 bg-green-500/20 rounded-2xl flex items-center justify-center group-hover:bg-green-500/30 transition-colors">
            <svg className="w-9 h-9 text-green-400" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
            </svg>
          </div>
          <div>
            <div className="text-white font-bold text-lg">Spotify</div>
            <div className="text-gray-400 text-sm">Connect with Spotify</div>
          </div>
        </button>

        {/* Apple Music */}
        <button
          onClick={() => onSelect('Apple Music')}
          className="card-surface p-8 flex flex-col items-center gap-4 hover:border-red-500/50 hover:bg-red-950/20 transition-all duration-300 group rounded-xl"
        >
          <div className="w-16 h-16 bg-red-500/20 rounded-2xl flex items-center justify-center group-hover:bg-red-500/30 transition-colors">
            <svg className="w-9 h-9 text-red-400" viewBox="0 0 24 24" fill="currentColor">
              <path d="M23.994 6.124a9.23 9.23 0 00-.24-2.19c-.317-1.31-1.062-2.31-2.18-3.043a5.022 5.022 0 00-1.877-.726 10.496 10.496 0 00-1.564-.15c-.05-.003-.09-.01-.1-.01H5.96c-.05 0-.09.003-.12.01a10.52 10.52 0 00-1.564.15 5.021 5.021 0 00-1.876.726C1.3 1.624.555 2.624.24 3.934A9.23 9.23 0 000 6.124C0 6.454 0 6.784.003 7.114v9.772c0 .33 0 .66-.003.99 0 .33 0 .66.003.99v.32c.016 1.3.36 2.41 1.02 3.303.66.893 1.58 1.43 2.76 1.573a6.85 6.85 0 001.068.072H19.15a6.85 6.85 0 001.067-.072c1.18-.143 2.1-.68 2.76-1.573.66-.894 1.004-2.003 1.02-3.303v-.32c.003-.33.003-.66.003-.99V7.104c0-.33 0-.66-.003-.99l-.003-.99zM15.8 12.68c-.354.204-.704.413-1.05.627-.247.152-.49.312-.738.466a47.6 47.6 0 01-.777.466c-.26.15-.517.307-.78.457-.006.004-.01.008-.017.01l-.003.003c-.16.088-.32.178-.483.264a3.25 3.25 0 01-.546.24 2.09 2.09 0 01-.63.095c-.63 0-1.147-.244-1.55-.734-.403-.49-.604-1.116-.604-1.88v-7.37c0-.286.074-.53.22-.73.146-.2.373-.3.68-.3.287 0 .516.098.69.294.174.197.26.443.26.738v4.89c.273-.146.543-.295.813-.444.27-.15.537-.298.805-.44.27-.143.535-.286.8-.43.265-.142.533-.28.8-.42v-5.01c0-.285.075-.528.224-.727.15-.2.38-.3.69-.3.287 0 .518.098.694.294.176.197.264.443.264.737v5.96c.002.266-.03.524-.094.77-.064.246-.185.47-.36.672-.175.2-.4.36-.68.476z" />
            </svg>
          </div>
          <div>
            <div className="text-white font-bold text-lg">Apple Music</div>
            <div className="text-gray-400 text-sm">Connect with Apple Music</div>
          </div>
        </button>
      </div>
    </div>
  );
}
