import { createContext, useContext, useState } from 'react';

const AppContext = createContext(null);

export function AppProvider({ children }) {
  const [verifiedArtists, setVerifiedArtists] = useState({});
  const [unlockedSeats, setUnlockedSeats] = useState({});
  const [cart, setCart] = useState([]);

  function saveVerification(artistId, data) {
    setVerifiedArtists((prev) => ({ ...prev, [artistId]: data }));
  }

  function unlockConcertSeats(concertId) {
    setUnlockedSeats((prev) => ({ ...prev, [concertId]: true }));
  }

  function isVerifiedFor(artistId, requiredPercentile) {
    const data = verifiedArtists[artistId];
    if (!data) return false;
    return data.percentile <= requiredPercentile;
  }

  function addToCart(item) {
    setCart((prev) => {
      if (prev.find((i) => i.seatId === item.seatId)) return prev;
      return [...prev, item];
    });
  }

  function removeFromCart(seatId) {
    setCart((prev) => prev.filter((i) => i.seatId !== seatId));
  }

  function toggleSeat(seat, concert) {
    const inCart = cart.find((i) => i.seatId === seat.id);
    if (inCart) {
      removeFromCart(seat.id);
    } else {
      addToCart({
        seatId: seat.id,
        concertId: concert.id,
        row: seat.row,
        col: seat.col,
        type: seat.type,
        price: seat.price,
      });
    }
  }

  function isInCart(seatId) {
    return !!cart.find((i) => i.seatId === seatId);
  }

  function clearCart() {
    setCart([]);
  }

  return (
    <AppContext.Provider
      value={{
        verifiedArtists,
        unlockedSeats,
        cart,
        saveVerification,
        unlockConcertSeats,
        isVerifiedFor,
        addToCart,
        removeFromCart,
        toggleSeat,
        isInCart,
        clearCart,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error('useApp must be used within AppProvider');
  return ctx;
}
