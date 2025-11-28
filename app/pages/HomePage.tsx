import {
  ArrowRight,
  Building2,
  FileCheck,
  Handshake,
  Info,
  Users,
  Utensils,
} from "lucide-react";
import { CallToAction } from "../../components/CallToAction";
import { Hero } from "../../components/Hero";
import { Card, CardContent } from "../../components/ui/card";
import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../data/translations";

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  const { t } = useLanguage();

  const stats = [
    {
      icon: Building2,
      value: "150+",
      label: { id: "Hotel Anggota", en: "Member Hotels" },
    },
    {
      icon: Utensils,
      value: "200+",
      label: { id: "Restoran Anggota", en: "Member Restaurants" },
    },
    {
      icon: Users,
      value: "400+",
      label: { id: "Total Anggota", en: "Total Members" },
    },
  ];

  const features = [
    {
      icon: FileCheck,
      title: { id: "Amanat AD/ART PHRI", en: "PHRI Articles of Association" },
      description: {
        id: "Setiap badan usaha pariwisata bidang hotel, restoran, dan lembaga pendidikan kepariwisataan adalah bagian dari keanggotaan PHRI dalam upaya memajukan usahanya secara bersama-sama agar mempunyai kekuatan yang optimal",
        en: "Every tourism business in hotels, restaurants, and tourism education institutions is part of PHRI membership in efforts to advance their businesses together to have optimal strength",
      },
    },
    {
      icon: Handshake,
      title: { id: "Manfaat Bersama", en: "Mutual Benefits" },
      description: {
        id: "Saling memberikan manfaat antar sesama anggota PHRI baik untuk kemajuan bisnisnya maupun dalam pengurusan perizinan usahanya",
        en: "Provide mutual benefits among PHRI members for business advancement and assistance with business licensing processes",
      },
    },
    {
      icon: Info,
      title: { id: "Informasi & Pelatihan", en: "Information & Training" },
      description: {
        id: "Mendapatkan informasi tentang perkembangan dunia usaha hotel & restoran serta kebutuhan hotel dan restoran lainnya seperti pelatihan SDM, dll",
        en: "Receive information about hotel & restaurant business developments and other hotel and restaurant needs such as HR training, etc.",
      },
    },
  ];

  return (
    <div>
      {/* Hero */}
      <Hero
        variant="slateWithImage"
        size="large"
        backgroundImage="/background.jpeg"
        title={translations.hero.title}
        description={translations.hero.subtitle}
        buttons={[
          {
            text: translations.hero.joinNow,
            onClick: () => onNavigate("/how-to-join"),
            className: "bg-purple-700 hover:bg-purple-800",
            icon: <ArrowRight className="w-4 h-4" />,
          },
          {
            text: translations.hero.exploreMembership,
            onClick: () => onNavigate("/membership"),
            variant: "outline",
            className:
              "bg-white/10 border-white/20 text-white hover:bg-white/20",
          },
        ]}
      />

      {/* Stats */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-indigo-100 text-indigo-700 mb-3">
                  <stat.icon className="w-6 h-6" />
                </div>
                <div className="text-3xl md:text-4xl text-slate-900 mb-1">
                  {stat.value}
                </div>
                <div className="text-slate-600">{t(stat.label)}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="bg-indigo-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl text-slate-900 mb-4">
                {t({ id: "Visi Kami", en: "Our Vision" })}
              </h2>
              <p className="text-slate-700">
                {t({
                  id: "Menjadi mitra terpercaya yang meningkatkan keunggulan perhotelan dan layanan makanan, mendorong kolaborasi, dan memajukan standar industri di seluruh Indonesia.",
                  en: "To be the trusted partner elevating hospitality and food-service excellence, fostering collaboration, and advancing industry standards nationwide.",
                })}
              </p>
            </div>
            <div>
              <h2 className="text-3xl text-slate-900 mb-4">
                {t({ id: "Misi Kami", en: "Our Mission" })}
              </h2>
              <p className="text-slate-700">
                {t({
                  id: "Memberikan nilai kepada anggota melalui advokasi, pendidikan, networking, dan dukungan operasional yang memperkuat ekosistem perhotelan.",
                  en: "Deliver member value through advocacy, education, networking, and operational support that strengthens the hospitality ecosystem.",
                })}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl text-slate-900 mb-4">
              {t({
                id: "Mengapa Bergabung dengan PHRI?",
                en: "Why Join PHRI?",
              })}
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              {t({
                id: "Bergabunglah dengan jaringan profesional perhotelan terkemuka di Indonesia",
                en: "Join Indonesia's leading hospitality professional network",
              })}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="border-0 shadow-md hover:shadow-lg transition-shadow"
              >
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-lg bg-linear-to-br from-purple-700 to-indigo-700 flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl text-slate-900 mb-2">
                    {t(feature.title)}
                  </h3>
                  <p className="text-slate-600">{t(feature.description)}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CallToAction
        variant="purple"
        useCard={false}
        title={{ id: "Siap Bergabung?", en: "Ready to Join?" }}
        description={{
          id: "Mulai perjalanan Anda dengan PHRI Bandung dan tingkatkan bisnis perhotelan Anda",
          en: "Start your journey with PHRI Bandung and elevate your hospitality business",
        }}
        buttons={[
          {
            text: { id: "Cara Bergabung", en: "How to Join" },
            onClick: () => onNavigate("/how-to-join"),
            variant: "default",
            icon: <ArrowRight className="w-4 h-4" />,
          },
          {
            text: translations.hero.viewDirectory,
            onClick: () => onNavigate("/active-member"),
            variant: "secondary",
          },
        ]}
      />
    </div>
  );
}
