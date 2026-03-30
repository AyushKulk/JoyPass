export default function Footer() {
  return (
    <footer className="border-t border-brand-border bg-brand-surface/50 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="text-xl font-black tracking-tight">
            <span className="text-brand-purple">Joy</span>
            <span className="text-white">Pass</span>
          </span>
          <span className="text-gray-500 text-sm">— exclusive seats for true fans</span>
        </div>
        <p className="text-gray-500 text-sm">© 2026 JoyPass. Demo project.</p>
      </div>
    </footer>
  );
}
