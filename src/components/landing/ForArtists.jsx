export default function ForArtists() {
  return (
    <section className="py-24 px-4 bg-brand-surface/30">
      <div className="max-w-4xl mx-auto">
        <div className="card-surface p-12 relative overflow-hidden">
          {/* Decorative gradient */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-magenta/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-brand-purple/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row items-center gap-10">
            <div className="flex-1">
              <div className="inline-flex items-center gap-2 bg-brand-magenta/20 border border-brand-magenta/40 text-brand-magenta text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-6">
                For Artists
              </div>
              <h2 className="text-4xl font-black text-white mb-4 leading-tight">
                Reward the fans who
                <br />
                <span className="text-brand-purple">never stopped listening.</span>
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed mb-6">
                Set aside a percentage of seats for your verified top listeners. Build deeper
                connections with your core fanbase and create unforgettable moments at your shows.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  'Verified through streaming data — no bots or scalpers',
                  'You control the fan percentile threshold',
                  'Boost loyalty and long-term fan engagement',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-gray-300">
                    <svg className="w-5 h-5 text-brand-purple mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
              <button className="btn-primary">
                Partner With Us
              </button>
            </div>

            <div className="lg:w-72 text-center">
              <div className="inline-block bg-brand-dark border border-brand-border rounded-2xl p-8">
                <div className="text-6xl mb-4">🎤</div>
                <div className="text-4xl font-black text-white mb-2">Top 15%</div>
                <div className="text-gray-400 text-sm mb-6">of your listeners get exclusive access</div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">JoyPass seats</span>
                    <span className="text-brand-gold font-semibold">24 seats</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Fans eligible</span>
                    <span className="text-green-400 font-semibold">~1,200</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
