export const artists = [
  {
    id: 'artist-001',
    name: 'Aurora Veil',
    genre: 'Indie Electronic',
    image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800&q=80',
    bio: 'Aurora Veil crafts ethereal soundscapes blending organic textures with electronic production.',
  },
  {
    id: 'artist-002',
    name: 'KYRO',
    genre: 'Hyperpop',
    image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&q=80',
    bio: 'KYRO pushes the boundaries of pop music with hyper-saturated production and razor-sharp hooks.',
  },
  {
    id: 'artist-003',
    name: 'Mirabel',
    genre: 'R&B',
    image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=800&q=80',
    bio: 'Mirabel weaves soulful melodies with contemporary R&B production, creating timeless music.',
  },
  {
    id: 'artist-004',
    name: 'Voltage',
    genre: 'Hard Techno',
    image: 'https://images.unsplash.com/photo-1571266028243-d220c6a6fe2e?w=800&q=80',
    bio: 'Voltage delivers relentless hard techno with industrial precision and dancefloor dominance.',
  },
  {
    id: 'artist-005',
    name: 'Hana Rivers',
    genre: 'Alt-Pop',
    image: 'https://images.unsplash.com/photo-1501386761578-eac5c94b800a?w=800&q=80',
    bio: 'Hana Rivers blends indie sensibilities with mainstream pop appeal and introspective lyrics.',
  },
];

export const getArtist = (id) => artists.find((a) => a.id === id);
