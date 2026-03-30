export default function StepCard({ step, icon, title, description }) {
  return (
    <div className="card-surface p-8 flex flex-col items-center text-center group hover:border-brand-purple/50 transition-colors duration-300">
      <div className="w-14 h-14 rounded-full bg-brand-purple/20 border border-brand-purple/30 flex items-center justify-center mb-6 group-hover:bg-brand-purple/30 transition-colors">
        <span className="text-brand-purple text-2xl">{icon}</span>
      </div>
      <div className="text-xs font-bold uppercase tracking-widest text-brand-purple mb-3">
        Step {step}
      </div>
      <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
      <p className="text-gray-400 leading-relaxed">{description}</p>
    </div>
  );
}
