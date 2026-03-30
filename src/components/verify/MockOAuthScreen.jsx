import { useEffect } from 'react';

export default function MockOAuthScreen({ platform, onComplete }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 2500);
    return () => clearTimeout(timer);
  }, [onComplete]);

  const isSpotify = platform === 'Spotify';
  const color = isSpotify ? 'text-green-400' : 'text-red-400';
  const bg = isSpotify ? 'bg-green-500/20 border-green-500/30' : 'bg-red-500/20 border-red-500/30';

  return (
    <div className="text-center py-8">
      <div className={`w-20 h-20 ${bg} border rounded-2xl flex items-center justify-center mx-auto mb-8`}>
        {isSpotify ? (
          <svg className={`w-10 h-10 ${color}`} viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
          </svg>
        ) : (
          <svg className={`w-10 h-10 ${color}`} viewBox="0 0 24 24" fill="currentColor">
            <path d="M23.994 6.124a9.23 9.23 0 00-.24-2.19c-.317-1.31-1.062-2.31-2.18-3.043a5.022 5.022 0 00-1.877-.726 10.496 10.496 0 00-1.564-.15c-.05-.003-.09-.01-.1-.01H5.96c-.05 0-.09.003-.12.01a10.52 10.52 0 00-1.564.15 5.021 5.021 0 00-1.876.726C1.3 1.624.555 2.624.24 3.934A9.23 9.23 0 000 6.124C0 6.454 0 6.784.003 7.114v9.772c0 .33 0 .66-.003.99 0 .33 0 .66.003.99v.32c.016 1.3.36 2.41 1.02 3.303.66.893 1.58 1.43 2.76 1.573a6.85 6.85 0 001.068.072H19.15a6.85 6.85 0 001.067-.072c1.18-.143 2.1-.68 2.76-1.573.66-.894 1.004-2.003 1.02-3.303v-.32c.003-.33.003-.66.003-.99V7.104c0-.33 0-.66-.003-.99l-.003-.99z" />
          </svg>
        )}
      </div>

      <h2 className="text-2xl font-black text-white mb-2">Connecting to {platform}</h2>
      <p className="text-gray-400 mb-8">Analyzing your listening history…</p>

      {/* Spinner */}
      <div className="flex justify-center mb-8">
        <div className="w-10 h-10 border-4 border-brand-border border-t-brand-purple rounded-full animate-spin" />
      </div>

      {/* Steps */}
      <div className="max-w-xs mx-auto space-y-3 text-sm text-left">
        {[
          'Authenticating account',
          'Fetching listening history',
          'Calculating fan percentile',
        ].map((step, i) => (
          <div key={step} className="flex items-center gap-3 text-gray-400">
            <div className="w-5 h-5 rounded-full bg-brand-purple/20 border border-brand-purple/40 flex items-center justify-center shrink-0">
              <div className="w-2 h-2 rounded-full bg-brand-purple animate-pulse" style={{ animationDelay: `${i * 300}ms` }} />
            </div>
            {step}
          </div>
        ))}
      </div>
    </div>
  );
}
