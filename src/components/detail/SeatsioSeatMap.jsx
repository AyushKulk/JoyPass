import { useRef, useEffect } from 'react';
import { SeatsioSeatingChart } from '@seatsio/seatsio-react';
import { useApp } from '../../context/AppContext';

const WORKSPACE_KEY = import.meta.env.VITE_SEATSIO_WORKSPACE_KEY;
const REGION = import.meta.env.VITE_SEATSIO_REGION || 'eu';
const JOYPASS_CATEGORY = import.meta.env.VITE_SEATSIO_JOYPASS_CATEGORY;

// Color palette matching brand tokens
const COLORS = {
  joypassLocked: '#92400e',   // amber-800 — locked gold seat
  joypassUnlocked: '#f59e0b', // brand-gold — unlocked JoyPass
  regular: '#059669',          // emerald-600 — regular available
  selected: '#9333ea',         // brand-purple — selected
};

function isJoyPassObject(object) {
  if (!JOYPASS_CATEGORY) return false;
  return String(object.category?.key) === String(JOYPASS_CATEGORY);
}

export default function SeatsioSeatMap({
  eventKey,
  concert,
  joyPassUnlocked,
  onLockedSeatClick,
}) {
  const { addToCart, removeFromCart, cart, isInCart } = useApp();
  const chartRef = useRef(null);

  // Keep chart selection in sync if cart changes externally (e.g. sidebar remove)
  useEffect(() => {
    const chart = chartRef.current;
    if (!chart) return;
    // Deselect any seat that's been removed from the cart
    chart.listSelectedObjects().then((selected) => {
      selected.forEach((obj) => {
        if (!isInCart(obj.id)) {
          chart.deselectObject(obj.id).catch(() => {});
        }
      });
    }).catch(() => {});
  }, [cart, isInCart]);

  const handleObjectSelected = (object) => {
    addToCart({
      seatId: object.id,
      concertId: concert.id,
      row: object.labels?.parent || object.labels?.own || '',
      col: object.labels?.own || '',
      type: isJoyPassObject(object) ? 'joypass' : 'regular',
      price: object.pricing?.price ?? (isJoyPassObject(object) ? concert.joyPassPrice : concert.regularPrice),
    });
  };

  const handleObjectDeselected = (object) => {
    removeFromCart(object.id);
  };

  const handleObjectClicked = (object) => {
    // If JoyPass seat and locked, show the unlock modal instead of selecting
    if (isJoyPassObject(object) && !joyPassUnlocked) {
      onLockedSeatClick(object);
      return;
    }
  };

  const isObjectSelectable = (object) => {
    // Block JoyPass seats when locked
    if (isJoyPassObject(object) && !joyPassUnlocked) return false;
    return true;
  };

  const getObjectColor = (object, defaultColor, extraConfig) => {
    if (isInCart(object.id)) return COLORS.selected;
    if (isJoyPassObject(object)) {
      return joyPassUnlocked ? COLORS.joypassUnlocked : COLORS.joypassLocked;
    }
    return defaultColor;
  };

  const pricing = [
    ...(JOYPASS_CATEGORY
      ? [{ category: JOYPASS_CATEGORY, price: concert.joyPassPrice }]
      : []),
    { category: 1, price: concert.regularPrice },
    { category: 2, price: concert.regularPrice },
  ];

  return (
    <div style={{ height: '520px' }} className="rounded-xl overflow-hidden">
      <SeatsioSeatingChart
        workspaceKey={WORKSPACE_KEY}
        event={eventKey}
        region={REGION}
        onObjectSelected={handleObjectSelected}
        onObjectDeselected={handleObjectDeselected}
        onObjectClicked={handleObjectClicked}
        isObjectSelectable={isObjectSelectable}
        objectColor={getObjectColor}
        pricing={pricing}
        priceFormatter={(price) => `$${price}`}
        onChartRendered={(chart) => {
          chartRef.current = chart;
        }}
        colorScheme="dark"
        colors={{
          colorSelected: COLORS.selected,
        }}
        stylePreset="bubblegum"
        style={{
          fontFamily: 'inherit',
        }}
        loading={
          <div className="flex items-center justify-center h-full bg-brand-surface rounded-xl">
            <div className="text-center">
              <div className="w-10 h-10 border-4 border-brand-border border-t-brand-purple rounded-full animate-spin mx-auto mb-4" />
              <p className="text-gray-400 text-sm">Loading venue map…</p>
            </div>
          </div>
        }
      />
    </div>
  );
}

// concert-001 → CONCERT_001
function concertEnvSuffix(concertId) {
  return concertId.replace('-', '_').toUpperCase();
}

/**
 * Returns true if seats.io is configured for this concert.
 * Used by ConcertDetailPage to decide which map to render.
 */
export function seatsioConfigured(concertId) {
  const envKey = `VITE_SEATSIO_EVENT_${concertEnvSuffix(concertId)}`;
  const key = import.meta.env[envKey];
  return !!(WORKSPACE_KEY && key);
}

export function getSeatsioEventKey(concertId) {
  const envKey = `VITE_SEATSIO_EVENT_${concertEnvSuffix(concertId)}`;
  return import.meta.env[envKey] || null;
}
