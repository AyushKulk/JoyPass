export const listenerData = {
  'artist-001': {
    percentile: 8,
    hoursListened: 312,
    totalStreams: 1847,
    topSongs: [
      { title: 'Glacial Drift', streams: 423 },
      { title: 'Velvet Static', streams: 387 },
      { title: 'Neon Horizon', streams: 301 },
    ],
    listeningStreak: 18,
    topMonth: 'December 2025',
  },
  'artist-002': {
    percentile: 22,
    hoursListened: 89,
    totalStreams: 521,
    topSongs: [
      { title: 'Crash Override', streams: 189 },
      { title: 'Glitch Angel', streams: 142 },
      { title: 'Pixelburst', streams: 95 },
    ],
    listeningStreak: 4,
    topMonth: 'October 2025',
  },
  'artist-003': {
    percentile: 5,
    hoursListened: 478,
    totalStreams: 2934,
    topSongs: [
      { title: 'Honeyed Rain', streams: 712 },
      { title: 'Silk & Stone', streams: 634 },
      { title: 'Golden Hour', streams: 589 },
    ],
    listeningStreak: 32,
    topMonth: 'February 2026',
  },
  'artist-004': {
    percentile: 30,
    hoursListened: 42,
    totalStreams: 247,
    topSongs: [
      { title: 'Industrial Fury', streams: 98 },
      { title: 'Concrete Hammer', streams: 81 },
      { title: 'Grid Lock', streams: 68 },
    ],
    listeningStreak: 2,
    topMonth: 'January 2026',
  },
  'artist-005': {
    percentile: 11,
    hoursListened: 223,
    totalStreams: 1302,
    topSongs: [
      { title: 'Paper Wings', streams: 401 },
      { title: 'Midnight Drive', streams: 342 },
      { title: 'Fluorescent', streams: 278 },
    ],
    listeningStreak: 11,
    topMonth: 'March 2026',
  },
};

export const getListenerData = (artistId) => listenerData[artistId] || null;
