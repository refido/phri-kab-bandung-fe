import { Award, Eye, MapPin, Target, Users } from "lucide-react";
import Image from "next/image";
import { Hero } from "../../components/Hero";
import { Card, CardContent } from "../../components/ui/card";
import { useLanguage } from "../contexts/LanguageContext";

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
      <Hero
        variant="slateWithImage"
        size="large"
        backgroundImage="https://images.unsplash.com/photo-1560053608-13721e0d69e8?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        title={{ id: "Tentang PHRI Bandung", en: "About PHRI Kab Bandung" }}
        description={{
          id: "Organisasi kemasyarakatan yang menghimpun pengusaha kepariwisataan bidang perhotelan dan restoran",
          en: "Community organization uniting tourism entrepreneurs in hotels and restaurants",
        }}
      />

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
                    id: "PHRI (Perhimpunan Hotel & Restoran Indonesia) Kabupaten Bandung adalah organisasi kemasyarakatan yang menghimpun para anggotanya dari pengusaha kepariwisataan bidang perhotelan dan restoran yang berada di wilayah hukum Kabupaten Bandung, Jawa Barat.",
                    en: "PHRI (Indonesian Hotel & Restaurant Association) Kabupaten Bandung is a community organization that brings together members from tourism entrepreneurs in the hotel and restaurant sectors within the jurisdiction of Bandung Regency, West Java.",
                  })}
                </p>
                <p>
                  {t({
                    id: "PHRI awalnya didirikan oleh para tokoh pengusaha hotel dan restoran di Indonesia yang berpusat di Jakarta sebagai Badan Pimpinan Pusat (BPP) membawahi tingkat provinsi dan kabupaten kota. BPC PHRI Kabupaten Bandung menginduk ke BPD PHRI Jawa Barat.",
                    en: "PHRI was originally founded by hotel and restaurant entrepreneurs in Indonesia, centered in Jakarta as the Central Management Board (BPP), overseeing provincial and regency/city levels. BPC PHRI Kabupaten Bandung is under BPD PHRI West Java.",
                  })}
                </p>
                <p>
                  {t({
                    id: "PHRI mencakup berbagai jenis akomodasi (hotel, penginapan, villa, cottage, bungalow, homestay), usaha restoran (restoran, rumah makan, cafe, kantin, cafeteria, kedai), serta lembaga pendidikan kepariwisataan yang berkontribusi dalam pengembangan SDM Pariwisata.",
                    en: "PHRI includes various types of accommodation (hotels, inns, villas, cottages, bungalows, homestays), restaurant businesses (restaurants, eateries, cafes, canteens, cafeterias, stalls), and tourism education institutions contributing to the development of Tourism HR.",
                  })}
                </p>
              </div>
            </div>
            <div className="relative">
              <Image
                src="https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3RlbCUyMGxvYmJ5fGVufDF8fHx8MTc2MjAxMTI3OHww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="PHRI Kab Bandung"
                className="rounded-lg shadow-xl"
                width={1080}
                height={720}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Geographic Coverage */}
      <section className="bg-slate-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl text-slate-900 mb-4">
              {t({ id: "Cakupan Wilayah", en: "Geographic Coverage" })}
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              {t({
                id: "BPC PHRI Kabupaten Bandung mencakup wilayah yang luas dan dibagi dalam 4 koordinator wilayah",
                en: "BPC PHRI Kabupaten Bandung covers a vast area divided into 4 regional coordinators",
              })}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { region: { id: "Utara", en: "North" }, area: "Dago" },
              { region: { id: "Timur", en: "East" }, area: "Nagreg" },
              { region: { id: "Selatan", en: "South" }, area: "Ciwidey" },
              { region: { id: "Barat", en: "West" }, area: "Kutawaringin" },
            ].map((korwil, index) => (
              <Card key={index} className="border-0 shadow-md">
                <CardContent className="p-6 text-center">
                  <MapPin className="w-8 h-8 text-purple-600 mx-auto mb-3" />
                  <h3 className="text-xl text-slate-900 mb-1">
                    {t({ id: "Korwil", en: "Regional" })} {t(korwil.region)}
                  </h3>
                  <p className="text-slate-600">{korwil.area}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="bg-indigo-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center justify-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-full bg-linear-to-br from-purple-700 to-indigo-700 flex items-center justify-center shrink-0">
                    <Eye className="w-8 h-8 text-white" />
                  </div>
                  <h2 className="text-4xl text-slate-900">
                    {t({ id: "Visi", en: "Vision" })}
                  </h2>
                </div>
                <p className="text-slate-700 text-lg font-medium">
                  {t({
                    id: "Membangun PHRI Kab Bandung menuju puncak keunggulan kepariwisataan nasional",
                    en: "Building PHRI Kab Bandung towards the peak of national tourism excellence",
                  })}
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center justify-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-full bg-linear-to-br from-purple-700 to-indigo-700 flex items-center justify-center shrink-0">
                    <Target className="w-8 h-8 text-white" />
                  </div>
                  <h2 className="text-4xl text-slate-900">
                    {t({ id: "Misi", en: "Mission" })}
                  </h2>
                </div>
                <ul className="space-y-3 text-slate-700">
                  <li className="flex items-start gap-2">
                    <span className="text-purple-600 font-bold mt-1">1.</span>
                    <span>
                      {t({
                        id: "Membangun SDM PHRI yang kreatif, amanah, unggul, dan terdepan (KAUT)",
                        en: "Build creative, trustworthy, excellent, and leading (KAUT) PHRI human resources",
                      })}
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-600 font-bold mt-1">2.</span>
                    <span>
                      {t({
                        id: "Mendorong usaha-usaha anggota PHRI Kab Bandung sukses, gemilang, mandiri (SUGEMA)",
                        en: "Encourage PHRI Kab Bandung member businesses to be successful, glorious, and independent (SUGEMA)",
                      })}
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-600 font-bold mt-1">3.</span>
                    <span>
                      {t({
                        id: "Menciptakan hotel-hotel & restoran PHRI Kab Bandung menjadi destinasi wisata pilihan yang terkenal dengan keramahannya, kenyamanannya, keamanannya, dan kenangannya bagi wisatawan (TERKENANG)",
                        en: "Create PHRI Kab Bandung hotels & restaurants to become tourist destination choices famous for their hospitality, comfort, security, and memories for tourists (TERKENANG)",
                      })}
                    </span>
                  </li>
                </ul>
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
                id: "PHRI Bandung dikelola oleh Dewan Pengurus yang dipilih, dengan dukungan Sekretariat Eksekutif dan berbagai divisi fungsional. Struktur governance kami dirancang untuk transparansi, akuntabilitas, dan pengambilan keputusan yang efektif.",
                en: "PHRI Bandung is governed by an elected Board, supported by an Executive Secretariat and various functional divisions. Our governance structure is designed for transparency, accountability, and effective decision-making.",
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
