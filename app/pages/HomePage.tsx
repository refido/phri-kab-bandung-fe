import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../data/translations";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import {
  Building2,
  Utensils,
  Users,
  ArrowRight,
  Award,
  BookOpen,
  Calendar,
} from "lucide-react";

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
      icon: Award,
      title: { id: "Standar Kualitas", en: "Quality Standards" },
      description: {
        id: "Mendorong keunggulan melalui standar industri dan program sertifikasi",
        en: "Driving excellence through industry standards and certification programs",
      },
    },
    {
      icon: BookOpen,
      title: { id: "Pendidikan & Pelatihan", en: "Education & Training" },
      description: {
        id: "Workshop, seminar, dan pelatihan berkelanjutan untuk anggota",
        en: "Workshops, seminars, and ongoing training for members",
      },
    },
    {
      icon: Calendar,
      title: { id: "Networking & Acara", en: "Networking & Events" },
      description: {
        id: "Konferensi, mixer, dan acara networking reguler untuk membangun koneksi",
        en: "Conferences, mixers, and regular networking events to build connections",
      },
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-linear-to-br from-slate-900 via-slate-800 to-indigo-900 text-white">
        <div className="absolute inset-0 bg-[url('https://plus.unsplash.com/premium_photo-1682092934139-187d9f73e32c?q=80&w=1742&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6">
              {t(translations.hero.title)}
            </h1>
            <p className="text-xl md:text-2xl text-slate-200 mb-8">
              {t(translations.hero.subtitle)}
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                className="bg-purple-700 hover:bg-purple-800"
                onClick={() => onNavigate("/how-to-join")}
              >
                {t(translations.hero.joinNow)}
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-white/10 border-white/20 text-white hover:bg-white/20"
                onClick={() => onNavigate("/membership")}
              >
                {t(translations.hero.exploreMembership)}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
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
      <section className="bg-cyan-50 py-16">
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

      {/* CTA Section */}
      <section className="bg-linear-to-br from-purple-700 to-indigo-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl mb-4">
            {t({ id: "Siap Bergabung?", en: "Ready to Join?" })}
          </h2>
          <p className="text-xl text-indigo-50 mb-8 max-w-2xl mx-auto">
            {t({
              id: "Mulai perjalanan Anda dengan PHRI Bandung dan tingkatkan bisnis perhotelan Anda",
              en: "Start your journey with PHRI Bandung and elevate your hospitality business",
            })}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              size="lg"
              className="bg-white text-indigo-700 hover:bg-slate-100"
              onClick={() => onNavigate("/how-to-join")}
            >
              {t({ id: "Cara Bergabung", en: "How to Join" })}
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            <Button
              size="lg"
              className="bg-white text-indigo-700 hover:bg-slate-100"
              variant="outline"
              onClick={() => onNavigate("/active-member")}
            >
              {t(translations.hero.viewDirectory)}
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
