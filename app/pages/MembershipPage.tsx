import {
  Building2,
  CheckCircle2, Utensils
} from "lucide-react";
import { useState } from "react";
import { CallToAction } from "../../components/CallToAction";
import { Hero } from "../../components/Hero";
import { Card, CardContent } from "../../components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../components/ui/table";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../components/ui/tabs";
import { useLanguage } from "../contexts/LanguageContext";
import {
  hotelTiers,
  restaurantTiers
} from "../data/membershipTiers";

interface MembershipPageProps {
  onNavigate: (page: string) => void;
}

export function MembershipPage({ onNavigate }: MembershipPageProps) {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState("hotels");

  const benefits = [
    {
      id: "Tercatat sebagai anggota (member) PHRI dalam daftar keanggotaan yang mempunyai hak & kewajiban yang sama dengan anggota lainnya",
      en: "Registered as a PHRI member in the membership list with equal rights and obligations as other members",
    },
    {
      id: "PHRI menjadi sarana silaturahmi para anggota dan sekaligus sebagai sarana yang dapat saling memberikan saran/masukan/usulan untuk kemajuan usahanya",
      en: "PHRI serves as a fellowship platform for members and a means to mutually provide suggestions/input/proposals for business advancement",
    },
    {
      id: "PHRI memberikan layanan konsultasi dan paket-paket pelatihan usaha hotel & restoran yang dikemas dalam bentuk pelatihan sehari (fullday) oleh narasumber/mentor/trainer berpengalaman",
      en: "PHRI provides consulting services and hotel & restaurant business training packages in full-day format by experienced speakers/mentors/trainers",
    },
    {
      id: "Pelatihan Kepemimpinan (Leadership)",
      en: "Leadership Training",
    },
    {
      id: "Pelayanan Prima (Excellence Service/Hospitality)",
      en: "Excellence Service/Hospitality Training",
    },
    {
      id: "Pembinaan Usaha (Binus)",
      en: "Business Development (Binus)",
    },
    {
      id: "Sosialisasi Perizinan",
      en: "Licensing Socialization",
    },
    {
      id: "Laik Hygiene & Sanitasi",
      en: "Hygiene & Sanitation Standards",
    },
    {
      id: "Sertifikasi Halal",
      en: "Halal Certification",
    },
    {
      id: "Dan banyak lagi sesuai dengan kebutuhan atau permintaan hotel dan restoran masing-masing",
      en: "And many more according to the needs or requests of each hotel and restaurant",
    },
  ];

  return (
    <div>
      {/* Hero */}
      <Hero
        variant="slateWithImage"
        size="large"
        backgroundImage="https://images.unsplash.com/photo-1591194570502-c801051a2937?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        title={{ id: "Keanggotaan PHRI", en: "PHRI Membership" }}
        description={{
          id: "Pilih kategori keanggotaan yang sesuai dengan bisnis Anda",
          en: "Choose the membership category that fits your business",
        }}
      />

      {/* Membership Tables */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-12">
              <TabsTrigger value="hotels">
                <Building2 className="w-4 h-4 mr-2" />
                {t({ id: "Hotel", en: "Hotels" })}
              </TabsTrigger>
              <TabsTrigger value="restaurants">
                <Utensils className="w-4 h-4 mr-2" />
                {t({ id: "Restoran", en: "Restaurants" })}
              </TabsTrigger>
            </TabsList>

            <TabsContent value="hotels">
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <h2 className="text-2xl text-slate-900 mb-6">
                    {t({ id: "Kategori Hotel", en: "Hotel Categories" })}
                  </h2>
                  <div className="overflow-x-auto">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>
                            {t({ id: "Kategori", en: "Category" })}
                          </TableHead>
                          <TableHead className="text-right">
                            {t({ id: "Biaya Masuk", en: "Entry Fee" })}
                          </TableHead>
                          <TableHead className="text-right">
                            {t({ id: "Iuran Tahunan", en: "Yearly Fee" })}
                          </TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {hotelTiers.map((tier, index) => (
                          <TableRow key={index}>
                            <TableCell>{t(tier.category)}</TableCell>
                            <TableCell className="text-right">
                              {tier.entryFee}
                            </TableCell>
                            <TableCell className="text-right">
                              {tier.yearlyFee}
                            </TableCell>
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
                    {t({
                      id: "Kategori Restoran",
                      en: "Restaurant Categories",
                    })}
                  </h2>
                  <div className="overflow-x-auto">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>
                            {t({ id: "Kategori", en: "Category" })}
                          </TableHead>
                          <TableHead className="text-right">
                            {t({ id: "Biaya Masuk", en: "Entry Fee" })}
                          </TableHead>
                          <TableHead className="text-right">
                            {t({ id: "Iuran Tahunan", en: "Yearly Fee" })}
                          </TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {restaurantTiers.map((tier, index) => (
                          <TableRow key={index}>
                            <TableCell>{t(tier.category)}</TableCell>
                            <TableCell className="text-right">
                              {tier.entryFee}
                            </TableCell>
                            <TableCell className="text-right">
                              {tier.yearlyFee}
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-indigo-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl text-slate-900 mb-4">
              {t({ id: "Manfaat Keanggotaan", en: "Membership Benefits" })}
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              {t({
                id: "Menjadi bagian dari komunitas anggota PHRI Kabupaten Bandung dalam mengembangkan usaha perhotelan dan restoran",
                en: "Become part of the PHRI Kabupaten Bandung member community in developing hotel and restaurant businesses",
              })}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-start gap-3 bg-white p-4 rounded-lg shadow-sm"
              >
                <CheckCircle2 className="w-5 h-5 text-purple-600 shrink-0 mt-0.5" />
                <span className="text-slate-700">{t(benefit)}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CallToAction
        variant="purple"
        useCard={true}
        title={{ id: "Siap Bergabung?", en: "Ready to Join?" }}
        description={{
          id: "Pelajari cara bergabung dan mulai menikmati manfaat keanggotaan PHRI Bandung",
          en: "Learn how to join and start enjoying PHRI Bandung membership benefits",
        }}
        buttons={[
          {
            text: { id: "Cara Bergabung", en: "How to Join" },
            onClick: () => onNavigate("/how-to-join"),
            variant: "default",
          },
          {
            text: { id: "Hubungi Kami", en: "Contact Us" },
            onClick: () => onNavigate("/contact"),
            variant: "secondary",
          },
        ]}
      />
    </div>
  );
}
