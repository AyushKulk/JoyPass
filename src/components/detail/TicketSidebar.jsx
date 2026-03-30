import { useApp } from '../../context/AppContext';

export default function TicketSidebar({ concertId }) {
  const { cart, removeFromCart, clearCart } = useApp();

  const concertCart = cart.filter((i) => i.concertId === concertId);
  const total = concertCart.reduce((sum, i) => sum + i.price, 0);

  return (
    <div className="card-surface p-6 sticky top-24">
      <h3 className="text-white font-bold text-lg mb-5 flex items-center gap-2">
        <svg className="w-5 h-5 text-brand-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
        </svg>
        Your Tickets
      </h3>

      {concertCart.length === 0 ? (
        <div className="text-center py-8">
          <div className="text-4xl mb-3">🎟️</div>
          <p className="text-gray-500 text-sm">Click on a seat to add it to your cart.</p>
        </div>
      ) : (
        <>
          <div className="space-y-2 mb-5">
            {concertCart.map((item) => (
              <div
                key={item.seatId}
                className="flex items-center justify-between bg-brand-dark rounded-lg px-3 py-2.5"
              >
                <div className="flex items-center gap-2.5">
                  {item.type === 'joypass' ? (
                    <span className="text-brand-gold text-sm">⭐</span>
                  ) : (
                    <span className="text-emerald-500 text-sm">●</span>
                  )}
                  <div>
                    <div className="text-white text-sm font-medium">
                      Row {item.row}, Seat {item.col}
                    </div>
                    {item.type === 'joypass' && (
                      <div className="text-brand-gold text-xs">JoyPass Exclusive</div>
                    )}
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-white font-semibold">${item.price}</span>
                  <button
                    onClick={() => removeFromCart(item.seatId)}
                    className="text-gray-600 hover:text-red-400 transition-colors"
                    aria-label="Remove"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="border-t border-brand-border pt-4 mb-5">
            <div className="flex justify-between items-center">
              <span className="text-gray-400">Total</span>
              <span className="text-white font-black text-xl">${total}</span>
            </div>
            <div className="text-gray-600 text-xs mt-1">{concertCart.length} ticket{concertCart.length !== 1 ? 's' : ''}</div>
          </div>

          <button className="btn-primary w-full mb-3">
            Checkout
          </button>
          <button
            onClick={clearCart}
            className="w-full text-center text-gray-500 hover:text-gray-300 text-sm transition-colors py-1"
          >
            Clear all
          </button>
        </>
      )}
    </div>
  );
}
