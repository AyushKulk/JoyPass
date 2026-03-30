const STEPS = ['Choose Platform', 'Connecting', 'Your Results'];

export default function VerifyStepIndicator({ currentStep }) {
  return (
    <div className="flex items-center justify-center gap-0 mb-10">
      {STEPS.map((label, i) => {
        const stepNum = i + 1;
        const isDone = stepNum < currentStep;
        const isActive = stepNum === currentStep;

        return (
          <div key={label} className="flex items-center">
            <div className="flex flex-col items-center">
              <div
                className={`w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold transition-all ${
                  isDone
                    ? 'bg-brand-purple text-white'
                    : isActive
                    ? 'bg-brand-purple/30 border-2 border-brand-purple text-brand-purple'
                    : 'bg-brand-surface border border-brand-border text-gray-600'
                }`}
              >
                {isDone ? (
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                ) : (
                  stepNum
                )}
              </div>
              <span
                className={`text-xs mt-2 font-medium whitespace-nowrap ${
                  isActive ? 'text-white' : isDone ? 'text-brand-purple' : 'text-gray-600'
                }`}
              >
                {label}
              </span>
            </div>
            {i < STEPS.length - 1 && (
              <div
                className={`w-16 sm:w-24 h-px mx-2 mb-5 transition-colors ${
                  isDone ? 'bg-brand-purple' : 'bg-brand-border'
                }`}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}
