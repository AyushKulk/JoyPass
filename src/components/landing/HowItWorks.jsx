import StepCard from './StepCard';

const steps = [
  {
    icon: '🔒',
    title: 'Artist Locks Seats',
    description:
      'Artists designate a portion of front-row seats exclusively for their most loyal listeners — unavailable to the general public.',
  },
  {
    icon: '🎵',
    title: 'Connect Your Music',
    description:
      'Link your Spotify or Apple Music account. We analyze your listening history to determine your fan percentile.',
  },
  {
    icon: '⭐',
    title: 'Unlock Your Seats',
    description:
      'If you qualify as a top fan, the exclusive seats unlock just for you. Buy them before anyone else can.',
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black text-white mb-4">How JoyPass Works</h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            Three simple steps to prove you're a real fan and unlock the seats you deserve.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {steps.map((step, i) => (
            <StepCard
              key={i}
              step={i + 1}
              icon={step.icon}
              title={step.title}
              description={step.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
