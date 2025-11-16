import { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { hotelTiers, restaurantTiers, alliedTiers } from '../data/membershipTiers';
import { Card, CardContent } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../components/ui/tabs';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '../../components/ui/table';
import { CheckCircle2, Download, Building2, Utensils, GraduationCap } from 'lucide-react';

interface MembershipPageProps {
  onNavigate: (page: string) => void;
}

export function MembershipPage({ onNavigate }: MembershipPageProps) {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState('hotels');

  const benefits = [
    {
      id: 'Tarif dan pembaruan harga khusus anggota',
      en: 'Member-only rates and pricing updates',
    },
    {
      id: 'Listing direktori dengan foto dan kontak',
      en: 'Directory listing with photos and contact',
    },
    {
      id: 'Akses ke acara asosiasi dan workshop pelatihan',
      en: 'Access to association events and training workshops',
    },
    {
      id: 'Newsletter dan pembaruan industri dalam dua bahasa',
      en: 'Newsletter and industry updates in both languages',
    },
    {
      id: 'Peluang networking dengan sesama profesional',
      en: 'Networking opportunities with peers',
    },
    {
      id: 'Partisipasi chapter regional',
      en: 'Regional chapter participation',
    },
    {
      id: 'Hak suara (anggota penuh)',
      en: 'Voting rights (full members)',
    },
    {
      id: 'Peluang co-marketing dan integrasi mitra',
      en: 'Co-marketing opportunities and partner integrations',
    },
    {
      id: 'Kredit diskon ruang acara (tier lebih tinggi)',
      en: 'Event space discount credits (higher tiers)',
    },
    {
      id: 'Dukungan prioritas dan layanan concierge',
      en: 'Priority support and concierge services',
    },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="bg-linear-to-br from-slate-900 via-slate-800 to-indigo-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl mb-4">
            {t({ id: 'Keanggotaan PHRI', en: 'PHRI Membership' })}
          </h1>
          <p className="text-xl text-emerald-50 max-w-3xl">
            {t({
              id: 'Pilih kategori keanggotaan yang sesuai dengan bisnis Anda',
              en: 'Choose the membership category that fits your business',
            })}
          </p>
        </div>
      </section>

      {/* Membership Tables */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-12">
              <TabsTrigger value="hotels">
                <Building2 className="w-4 h-4 mr-2" />
                {t({ id: 'Hotel', en: 'Hotels' })}
              </TabsTrigger>
              <TabsTrigger value="restaurants">
                <Utensils className="w-4 h-4 mr-2" />
                {t({ id: 'Restoran', en: 'Restaurants' })}
              </TabsTrigger>
              <TabsTrigger value="allied">
                <GraduationCap className="w-4 h-4 mr-2" />
                {t({ id: 'Lainnya', en: 'Others' })}
              </TabsTrigger>
            </TabsList>

            <TabsContent value="hotels">
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <h2 className="text-2xl text-slate-900 mb-6">
                    {t({ id: 'Kategori Hotel', en: 'Hotel Categories' })}
                  </h2>
                  <div className="overflow-x-auto">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>{t({ id: 'Kategori', en: 'Category' })}</TableHead>
                          <TableHead className="text-right">
                            {t({ id: 'Biaya Masuk', en: 'Entry Fee' })}
                          </TableHead>
                          <TableHead className="text-right">
                            {t({ id: 'Iuran Tahunan', en: 'Yearly Fee' })}
                          </TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {hotelTiers.map((tier, index) => (
                          <TableRow key={index}>
                            <TableCell>{t(tier.category)}</TableCell>
                            <TableCell className="text-right">{tier.entryFee}</TableCell>
                            <TableCell className="text-right">{tier.yearlyFee}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="restaurants">
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <h2 className="text-2xl text-slate-900 mb-6">
                    {t({ id: 'Kategori Restoran', en: 'Restaurant Categories' })}
                  </h2>
                  <div className="overflow-x-auto">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>{t({ id: 'Kategori', en: 'Category' })}</TableHead>
                          <TableHead className="text-right">
                            {t({ id: 'Biaya Masuk', en: 'Entry Fee' })}
                          </TableHead>
                          <TableHead className="text-right">
                            {t({ id: 'Iuran Tahunan', en: 'Yearly Fee' })}
                          </TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {restaurantTiers.map((tier, index) => (
                          <TableRow key={index}>
                            <TableCell>{t(tier.category)}</TableCell>
                            <TableCell className="text-right">{tier.entryFee}</TableCell>
                            <TableCell className="text-right">{tier.yearlyFee}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="allied">
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <h2 className="text-2xl text-slate-900 mb-6">
                    {t({ id: 'Kategori Pendidikan & Afiliasi', en: 'Education & Affiliate Categories' })}
                  </h2>
                  <div className="overflow-x-auto">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>{t({ id: 'Kategori', en: 'Category' })}</TableHead>
                          <TableHead className="text-right">
                            {t({ id: 'Biaya Masuk', en: 'Entry Fee' })}
                          </TableHead>
                          <TableHead className="text-right">
                            {t({ id: 'Iuran Tahunan', en: 'Yearly Fee' })}
                          </TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {alliedTiers.map((tier, index) => (
                          <TableRow key={index}>
                            <TableCell>{t(tier.category)}</TableCell>
                            <TableCell className="text-right">{tier.entryFee}</TableCell>
                            <TableCell className="text-right">{tier.yearlyFee}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          <div className="mt-8 text-center">
            <Button variant="outline" className="gap-2">
              <Download className="w-4 h-4" />
              {t({ id: 'Unduh Jadwal Biaya', en: 'Download Fee Schedule' })}
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-amber-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl text-slate-900 mb-4">
              {t({ id: 'Manfaat Keanggotaan', en: 'Membership Benefits' })}
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              {t({
                id: 'Semua anggota mendapatkan akses ke manfaat berikut',
                en: 'All members receive access to the following benefits',
              })}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-3 bg-white p-4 rounded-lg shadow-sm">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <span className="text-slate-700">{t(benefit)}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="border-0 shadow-xl bg-linear-to-br from-emerald-600 to-teal-600 text-white">
            <CardContent className="p-8 md:p-12 text-center">
              <h2 className="text-3xl mb-4">
                {t({ id: 'Siap Bergabung?', en: 'Ready to Join?' })}
              </h2>
              <p className="text-xl text-emerald-50 mb-8 max-w-2xl mx-auto">
                {t({
                  id: 'Pelajari cara bergabung dan mulai menikmati manfaat keanggotaan PHRI Bandung',
                  en: 'Learn how to join and start enjoying PHRI Bandung membership benefits',
                })}
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button
                  size="lg"
                  className="bg-white text-emerald-700 hover:bg-slate-100"
                  onClick={() => onNavigate('/how-to-join')}
                >
                  {t({ id: 'Cara Bergabung', en: 'How to Join' })}
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => onNavigate('/contact')}
                >
                  {t({ id: 'Hubungi Kami', en: 'Contact Us' })}
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}