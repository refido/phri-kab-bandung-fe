import { MembershipTier } from '../types';

export const hotelTiers: MembershipTier[] = [
    {
        category: { id: 'Hotel Bintang 5', en: '5-Star Hotel' },
        entryFee: 'Rp. 3.300.000',
        yearlyFee: 'Rp. 3.300.000',
        type: 'hotel',
    },
    {
        category: { id: 'Hotel Bintang 4', en: '4-Star Hotel' },
        entryFee: 'Rp. 3.000.000',
        yearlyFee: 'Rp. 3.000.000',
        type: 'hotel',
    },
    {
        category: { id: 'Hotel Bintang 3', en: '3-Star Hotel' },
        entryFee: 'Rp. 2.500.000',
        yearlyFee: 'Rp. 2.500.000',
        type: 'hotel',
    },
    {
        category: { id: 'Hotel Bintang 2', en: '2-Star Hotel' },
        entryFee: 'Rp. 1.100.000',
        yearlyFee: 'Rp. 1.100.000',
        type: 'hotel',
    },
    {
        category: { id: 'Hotel Bintang 1', en: '1-Star Hotel' },
        entryFee: 'Rp. 1.000.000',
        yearlyFee: 'Rp. 1.000.000',
        type: 'hotel',
    },
    {
        category: { id: 'Hotel Non-Bintang', en: 'Non-Star Hotel' },
        entryFee: 'Rp. 600.000',
        yearlyFee: 'Rp. 600.000',
        type: 'hotel',
    },
];

export const restaurantTiers: MembershipTier[] = [
    {
        category: { id: 'Restoran - Tinggi (Fine Dining)', en: 'Restaurant - High (Fine Dining)' },
        entryFee: 'Rp. 1.000.000',
        yearlyFee: 'Rp. 1.000.000',
        type: 'restaurant',
    },
    {
        category: { id: 'Restoran - Menengah Tinggi', en: 'Restaurant - Mid-High' },
        entryFee: 'Rp. 850.000',
        yearlyFee: 'Rp. 850.000',
        type: 'restaurant',
    },
    {
        category: { id: 'Restoran - Menengah Rendah', en: 'Restaurant - Mid-Low' },
        entryFee: 'Rp. 550.000',
        yearlyFee: 'Rp. 550.000',
        type: 'restaurant',
    },
    {
        category: { id: 'Restoran - Rendah (Casual)', en: 'Restaurant - Low (Casual)' },
        entryFee: 'Rp. 550.000',
        yearlyFee: 'Rp. 550.000',
        type: 'restaurant',
    },
];

export const alliedTiers: MembershipTier[] = [
    {
        category: { id: 'Lembaga Pendidikan', en: 'Education Institution' },
        entryFee: 'Rp. 750.000',
        yearlyFee: 'Rp. 750.000',
        type: 'allied',
    },
    {
        category: { id: 'Afiliasi Serikat', en: 'Union Affiliates' },
        entryFee: 'Rp. 1.000.000',
        yearlyFee: 'Rp. 1.000.000',
        type: 'allied',
    },
    {
        category: { id: 'Afiliasi Gabungan', en: 'Combined Affiliates' },
        entryFee: 'Rp. 500.000',
        yearlyFee: 'Rp. 500.000',
        type: 'allied',
    },
];