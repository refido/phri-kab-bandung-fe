import { useLanguage } from "../contexts/LanguageContext";
import { Card, CardContent } from "../../components/ui/card";
import { Target, Eye, Award, Users } from "lucide-react";

export function AboutPage() {
  const { t } = useLanguage();

  const values = [
    {
      icon: Target,
      title: { id: "Profesionalisme", en: "Professionalism" },
      description: {
        id: "Menjunjung tinggi standar profesional dalam setiap aspek layanan",
        en: "Upholding professional standards in every aspect of service",
      },
    },
    {
      icon: Users,
      title: { id: "Kolaborasi", en: "Collaboration" },
      description: {
        id: "Membangun kemitraan yang kuat antar anggota dan stakeholder",
        en: "Building strong partnerships among members and stakeholders",
      },
    },
    {
      icon: Award,
      title: { id: "Keunggulan", en: "Excellence" },
      description: {
        id: "Mendorong inovasi dan peningkatan berkelanjutan",
        en: "Driving innovation and continuous improvement",
      },
    },
    {
      icon: Eye,
      title: { id: "Integritas", en: "Integrity" },
      description: {
        id: "Beroperasi dengan transparansi dan akuntabilitas",
        en: "Operating with transparency and accountability",
      },
    },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="bg-linear-to-br from-slate-900 to-slate-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl mb-4">
            {t({ id: "Tentang PHRI Bandung", en: "About PHRI Kab Bandung" })}
          </h1>
          <p className="text-xl text-slate-200 max-w-3xl">
            {t({
              id: "Asosiasi kontemporer yang memadukan tradisi keramahan Indonesia dengan standar bisnis modern",
              en: "A contemporary association blending Indonesian hospitality tradition with modern business standards",
            })}
          </p>
        </div>
      </section>

      {/* Profile */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl text-slate-900 mb-6">
                {t({ id: "Profil Organisasi", en: "Organization Profile" })}
              </h2>
              <div className="space-y-4 text-slate-700">
                <p>
                  {t({
                    id: "Perhimpunan Hotel dan Restoran Indonesia (PHRI) Kab Bandung adalah organisasi profesional yang mewakili kepentingan industri perhotelan dan restoran di wilayah Bandung dan sekitarnya. Didirikan untuk meningkatkan standar layanan, mendorong kolaborasi, dan memajukan industri pariwisata di Indonesia.",
                    en: "The Indonesian Hotel and Restaurant Association (PHRI) Kab Bandung is a professional organization representing the interests of the hotel and restaurant industry in Bandung and surrounding areas. Established to elevate service standards, foster collaboration, and advance the tourism industry in Indonesia.",
                  })}
                </p>
                <p>
                  {t({
                    id: "Dengan lebih dari 400 anggota aktif, PHRI Bandung melayani hotel dari berbagai kategori bintang, restoran dari berbagai segmen, institusi pendidikan, dan anggota afiliasi yang berkontribusi pada ekosistem perhotelan.",
                    en: "With over 400 active members, PHRI Bandung serves hotels across star categories, restaurants across segments, educational institutions, and affiliate members contributing to the hospitality ecosystem.",
                  })}
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3RlbCUyMGxvYmJ5fGVufDF8fHx8MTc2MjAxMTI3OHww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="PHRI Kab Bandung"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="bg-indigo-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="w-16 h-16 rounded-full bg-linear-to-br from-purple-700 to-indigo-700 flex items-center justify-center mb-6">
                  <Eye className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-2xl text-slate-900 mb-4">
                  {t({ id: "Visi", en: "Vision" })}
                </h2>
                <p className="text-slate-700">
                  {t({
                    id: "Menjadi mitra terpercaya yang meningkatkan keunggulan perhotelan dan layanan makanan, mendorong kolaborasi, dan memajukan standar industri di seluruh Indonesia.",
                    en: "To be the trusted partner elevating hospitality and food-service excellence, fostering collaboration, and advancing industry standards nationwide.",
                  })}
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="w-16 h-16 rounded-full bg-linear-to-br from-purple-700 to-indigo-700 flex items-center justify-center mb-6">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-2xl text-slate-900 mb-4">
                  {t({ id: "Misi", en: "Mission" })}
                </h2>
                <p className="text-slate-700">
                  {t({
                    id: "Memberikan nilai kepada anggota melalui advokasi, pendidikan, networking, dan dukungan operasional yang memperkuat ekosistem perhotelan.",
                    en: "Deliver member value through advocacy, education, networking, and operational support that strengthens the hospitality ecosystem.",
                  })}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl text-slate-900 mb-4">
              {t({ id: "Nilai-Nilai Kami", en: "Our Values" })}
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              {t({
                id: "Prinsip-prinsip yang memandu setiap keputusan dan tindakan kami",
                en: "The principles that guide our every decision and action",
              })}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card
                key={index}
                className="border-0 shadow-md hover:shadow-lg transition-shadow"
              >
                <CardContent className="p-6 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-purple-100 text-purple-600 mb-4">
                    <value.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl text-slate-900 mb-2">
                    {t(value.title)}
                  </h3>
                  <p className="text-slate-600">{t(value.description)}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Governance */}
      <section className="bg-indigo-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl text-slate-900 mb-8 text-center">
            {t({ id: "Tata Kelola", en: "Governance" })}
          </h2>
          <div className="max-w-3xl mx-auto space-y-6 text-slate-700">
            <p>
              {t({
                id: "PHRI Bandung dikelola oleh Dewan Pengurus Nasional yang dipilih, dengan dukungan Sekretariat Eksekutif dan berbagai divisi fungsional. Struktur governance kami dirancang untuk transparansi, akuntabilitas, dan pengambilan keputusan yang efektif.",
                en: "PHRI Bandung is governed by an elected National Board, supported by an Executive Secretariat and various functional divisions. Our governance structure is designed for transparency, accountability, and effective decision-making.",
              })}
            </p>
            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl text-slate-900 mb-3">
                  {t({ id: "Masa Jabatan", en: "Term Length" })}
                </h3>
                <p className="text-slate-600">
                  {t({
                    id: "3 tahun dengan kemungkinan pemilihan kembali",
                    en: "3 years with re-election possibility",
                  })}
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl text-slate-900 mb-3">
                  {t({ id: "Hak Suara", en: "Voting Rights" })}
                </h3>
                <p className="text-slate-600">
                  {t({
                    id: "Anggota penuh memiliki hak suara dalam keputusan organisasi",
                    en: "Full members have voting rights in organizational decisions",
                  })}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
