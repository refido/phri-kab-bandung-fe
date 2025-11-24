import { Event, Member, GalleryItem } from '../types';

export const mockEvents: Event[] = [
    {
        id: '1',
        title: {
            id: 'Konferensi Tahunan Perhotelan & Restoran 2025',
            en: 'Annual Hospitality & Restaurant Conference 2025',
        },
        date: '2025-12-15',
        time: '09:00 - 17:00',
        venue: {
            id: 'Grand Ballroom, Hotel Savoy Homann',
            en: 'Grand Ballroom, Savoy Homann Hotel',
        },
        description: {
            id: 'Konferensi tahunan yang menghadirkan para pemimpin industri, diskusi panel tentang tren masa depan, dan peluang networking dengan sesama profesional perhotelan.',
            en: 'Annual conference featuring industry leaders, panel discussions on future trends, and networking opportunities with hospitality professionals.',
        },
        speaker: {
            id: 'Dr. Ahmad Suryanto - Pakar Pariwisata',
            en: 'Dr. Ahmad Suryanto - Tourism Expert',
        },
        image: 'https://images.unsplash.com/photo-1606788635785-a0b56e892fdd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3RlbCUyMGNvbmZlcmVuY2UlMjBldmVudHxlbnwxfHx8fDE3NjIwMjE1NDZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
        location: { lat: -6.9175, lng: 107.6191 },
    },
    {
        id: '2',
        title: {
            id: 'Pelatihan Standar Layanan Perhotelan',
            en: 'Hotel Service Standards Training',
        },
        date: '2025-11-20',
        time: '13:00 - 16:00',
        venue: {
            id: 'Ruang Seminar PHRI Bandung',
            en: 'PHRI Bandung Seminar Room',
        },
        description: {
            id: 'Workshop intensif tentang standar layanan perhotelan internasional, protokol tamu, dan praktik terbaik untuk meningkatkan pengalaman tamu.',
            en: 'Intensive workshop on international hotel service standards, guest protocols, and best practices to enhance guest experience.',
        },
        image: 'https://images.unsplash.com/photo-1675716921224-e087a0cca69a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMG5ldHdvcmtpbmclMjBldmVudHxlbnwxfHx8fDE3NjIwMDg0ODJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
        location: { lat: -6.9175, lng: 107.6191 },
    },
    {
        id: '3',
        title: {
            id: 'Networking Mixer - Anggota PHRI',
            en: 'PHRI Members Networking Mixer',
        },
        date: '2025-11-10',
        time: '18:00 - 21:00',
        venue: {
            id: 'Sky Lounge, Trans Luxury Hotel',
            en: 'Sky Lounge, Trans Luxury Hotel',
        },
        description: {
            id: 'Acara networking eksklusif untuk anggota PHRI, kesempatan untuk membangun koneksi bisnis dan berbagi pengalaman dengan sesama pelaku industri.',
            en: 'Exclusive networking event for PHRI members, opportunity to build business connections and share experiences with industry peers.',
        },
        image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaW5lJTIwZGluaW5nJTIwcmVzdGF1cmFudHxlbnwxfHx8fDE3NjIwMTkxODF8MA&ixlib=rb-4.1.0&q=80&w=1080',
        location: { lat: -6.9147, lng: 107.6098 },
    },
];

export const mockMembers: Member[] = [
    {
        id: '1',
        name: 'Grand Preanger Hotel',
        category: 'Hotel Bintang 5',
        type: 'hotel',
        starRating: 5,
        address: {
            id: 'Jl. Asia Afrika No.81, Bandung 40111',
            en: 'Jl. Asia Afrika No.81, Bandung 40111',
        },
        phone: '+62 22 4230631',
        email: 'info@grandpreanger.com',
        website: 'www.grandpreanger.com',
        description: {
            id: 'Hotel mewah bersejarah di jantung kota Bandung, menawarkan pengalaman menginap premium dengan layanan berkelas dunia.',
            en: 'Historic luxury hotel in the heart of Bandung, offering premium accommodation with world-class service.',
        },
        images: [
            'https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3RlbCUyMGxvYmJ5fGVufDF8fHx8MTc2MjAxMTI3OHww&ixlib=rb-4.1.0&q=80&w=1080',
        ],
        location: { lat: -6.9215, lng: 107.6077 },
    },
    {
        id: '2',
        name: 'Savoy Homann Hotel',
        category: 'Hotel Bintang 4',
        type: 'hotel',
        starRating: 4,
        address: {
            id: 'Jl. Asia Afrika No.112, Bandung 40261',
            en: 'Jl. Asia Afrika No.112, Bandung 40261',
        },
        phone: '+62 22 4232244',
        email: 'reservation@savoyhomann.com',
        description: {
            id: 'Hotel heritage dengan sentuhan modern, lokasi strategis di pusat kota Bandung.',
            en: 'Heritage hotel with modern touches, strategically located in central Bandung.',
        },
        images: [
            'https://images.unsplash.com/photo-1751325898021-e7b59d56c5f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3RlbCUyMHJlc29ydCUyMHN1bnNldHxlbnwxfHx8fDE3NjIwMjE1NDV8MA&ixlib=rb-4.1.0&q=80&w=1080',
        ],
        location: { lat: -6.9175, lng: 107.6191 },
    },
    {
        id: '3',
        name: 'Sky Dining Restaurant',
        category: 'Restoran - Tinggi',
        type: 'restaurant',
        tier: 'fine-dining',
        address: {
            id: 'Lantai 20, Trans Luxury Hotel, Bandung',
            en: '20th Floor, Trans Luxury Hotel, Bandung',
        },
        phone: '+62 22 87242000',
        email: 'skydining@transluxury.com',
        description: {
            id: 'Restoran fine dining dengan pemandangan kota spektakuler, menyajikan masakan internasional dan Indonesia kontemporer.',
            en: 'Fine dining restaurant with spectacular city views, serving international and contemporary Indonesian cuisine.',
        },
        images: [
            'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaW5lJTIwZGluaW5nJTIwcmVzdGF1cmFudHxlbnwxfHx8fDE3NjIwMTkxODF8MA&ixlib=rb-4.1.0&q=80&w=1080',
        ],
        location: { lat: -6.9147, lng: 107.6098 },
    },
    {
        id: '4',
        name: 'Akademi Perhotelan Bandung',
        category: 'Lembaga Pendidikan',
        type: 'affiliate',
        address: {
            id: 'Jl. Cihampelas No.45, Bandung',
            en: 'Jl. Cihampelas No.45, Bandung',
        },
        phone: '+62 22 2033456',
        email: 'info@akademiperhotelan.ac.id',
        description: {
            id: 'Institusi pendidikan terkemuka untuk pelatihan dan sertifikasi profesional di bidang perhotelan dan restoran.',
            en: 'Leading educational institution for hospitality and restaurant professional training and certification.',
        },
        images: [
            'https://images.unsplash.com/photo-1675716921224-e087a0cca69a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMG5ldHdvcmtpbmclMjBldmVudHxlbnwxfHx8fDE3NjIwMDg0ODJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
        ],
        location: { lat: -6.8915, lng: 107.6107 },
    },
];

export const mockGalleryItems: GalleryItem[] = [
    {
        id: '1',
        image: 'https://images.unsplash.com/photo-1606788635785-a0b56e892fdd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3RlbCUyMGNvbmZlcmVuY2UlMjBldmVudHxlbnwxfHx8fDE3NjIwMjE1NDZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
        caption: {
            id: 'Konferensi Tahunan PHRI Bandung 2024',
            en: 'PHRI Bandung Annual Conference 2024',
        },
        category: 'events',
        date: '2024-10-15',
    },
    {
        id: '2',
        image: 'https://images.unsplash.com/photo-1675716921224-e087a0cca69a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMG5ldHdvcmtpbmclMjBldmVudHxlbnwxfHx8fDE3NjIwMDg0ODJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
        caption: {
            id: 'Networking Mixer Anggota PHRI',
            en: 'PHRI Members Networking Mixer',
        },
        category: 'events',
        date: '2024-09-20',
    },
    {
        id: '3',
        image: 'https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3RlbCUyMGxvYmJ5fGVufDF8fHx8MTc2MjAxMTI3OHww&ixlib=rb-4.1.0&q=80&w=1080',
        caption: {
            id: 'Hotel Anggota PHRI - Lobby Mewah',
            en: 'PHRI Member Hotel - Luxury Lobby',
        },
        category: 'members',
        date: '2024-08-10',
    },
    {
        id: '4',
        image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaW5lJTIwZGluaW5nJTIwcmVzdGF1cmFudHxlbnwxfHx8fDE3NjIwMTkxODF8MA&ixlib=rb-4.1.0&q=80&w=1080',
        caption: {
            id: 'Restoran Anggota - Fine Dining',
            en: 'Member Restaurant - Fine Dining',
        },
        category: 'members',
        date: '2024-07-22',
    },
    {
        id: '5',
        image: 'https://images.unsplash.com/photo-1604161926875-bb58f9a0d81b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGElMjB3ZWxsbmVzcyUyMGhvdGVsfGVufDF8fHx8MTc2MjAyMTU0Nnww&ixlib=rb-4.1.0&q=80&w=1080',
        caption: {
            id: 'Program Keberlanjutan & Wellness',
            en: 'Sustainability & Wellness Program',
        },
        category: 'sustainability',
        date: '2024-06-15',
    },
    {
        id: '6',
        image: 'https://images.unsplash.com/photo-1758526348403-b729c700d675?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3RlbCUyMHN0YWZmJTIwc2VydmljZXxlbnwxfHx8fDE3NjIwMjE1NDd8MA&ixlib=rb-4.1.0&q=80&w=1080',
        caption: {
            id: 'Pelatihan Standar Layanan',
            en: 'Service Standards Training',
        },
        category: 'events',
        date: '2024-05-30',
    },
];
