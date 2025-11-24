import { useLanguage } from "../contexts/LanguageContext";
import { Card, CardContent } from "../../components/ui/card";
import {
  Users,
  UserCheck,
  Award,
  BookOpen,
  Calendar,
  Handshake,
  MessageCircle,
  DollarSign,
  Globe,
  Leaf,
  MapPin,
} from "lucide-react";

export function OrganizationalStructurePage() {
  const { t } = useLanguage();

  const board = [
    {
      position: { id: "Ketua / Presiden", en: "Chair / President" },
      description: {
        id: "Memimpin organisasi dan menetapkan visi strategis",
        en: "Leads the organization and sets strategic vision",
      },
    },
    {
      position: { id: "Wakil Ketua", en: "Vice Chair" },
      description: {
        id: "Mendukung Ketua dan mengawasi inisiatif khusus",
        en: "Supports the Chair and oversees special initiatives",
      },
    },
    {
      position: { id: "Sekretaris", en: "Secretary" },
      description: {
        id: "Mengelola catatan, komunikasi, dan tata kelola",
        en: "Manages records, communications, and governance",
      },
    },
    {
      position: { id: "Bendahara", en: "Treasurer" },
      description: {
        id: "Mengawasi keuangan, anggaran, dan pelaporan",
        en: "Oversees finance, budgets, and reporting",
      },
    },
  ];

  const divisions = [
    {
      icon: Users,
      name: { id: "Keanggotaan", en: "Membership" },
      mandate: {
        id: "Merekrut, mempertahankan, dan melayani anggota di semua kategori",
        en: "Recruit, retain, and service members across all categories",
      },
    },
    {
      icon: Award,
      name: { id: "Standar & Kepatuhan", en: "Standards & Compliance" },
      mandate: {
        id: "Menegakkan standar industri dan kepatuhan peraturan",
        en: "Enforce industry standards and regulatory compliance",
      },
    },
    {
      icon: BookOpen,
      name: { id: "Pendidikan & Sertifikasi", en: "Education & Certification" },
      mandate: {
        id: "Memberikan program pelatihan dan sertifikasi profesional",
        en: "Deliver training programs and professional certification",
      },
    },
    {
      icon: Calendar,
      name: { id: "Acara & MICE", en: "Events & MICE" },
      mandate: {
        id: "Mengatur konferensi, networking, dan layanan MICE",
        en: "Organize conferences, networking, and MICE services",
      },
    },
    {
      icon: Handshake,
      name: { id: "Kemitraan & Advokasi", en: "Partnerships & Advocacy" },
      mandate: {
        id: "Membangun kemitraan dan mewakili kepentingan industri",
        en: "Build partnerships and represent industry interests",
      },
    },
    {
      icon: MessageCircle,
      name: { id: "Komunikasi & PR", en: "Communications & PR" },
      mandate: {
        id: "Mengelola komunikasi internal dan eksternal",
        en: "Manage internal and external communications",
      },
    },
    {
      icon: DollarSign,
      name: { id: "Keuangan & Audit", en: "Finance & Audit" },
      mandate: {
        id: "Mengelola keuangan dan memastikan transparansi",
        en: "Manage finances and ensure transparency",
      },
    },
    {
      icon: Globe,
      name: { id: "IT & Digital", en: "IT & Digital" },
      mandate: {
        id: "Mengoperasikan platform digital dan layanan teknologi",
        en: "Operate digital platforms and technology services",
      },
    },
    {
      icon: Leaf,
      name: {
        id: "Keberlanjutan & Komunitas",
        en: "Sustainability & Community",
      },
      mandate: {
        id: "Mendorong praktik berkelanjutan dan keterlibatan masyarakat",
        en: "Promote sustainable practices and community engagement",
      },
    },
    {
      icon: MapPin,
      name: { id: "Chapter Regional", en: "Regional Chapters" },
      mandate: {
        id: "Koordinasi dengan chapter daerah di seluruh wilayah",
        en: "Coordinate with regional chapters across territories",
      },
    },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="bg-linear-to-br from-slate-900 to-slate-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl mb-4">
            {t({ id: "Struktur Organisasi", en: "Organizational Structure" })}
          </h1>
          <p className="text-xl text-slate-200 max-w-3xl">
            {t({
              id: "Tata kelola yang transparan dan akuntabel untuk melayani anggota",
              en: "Transparent and accountable governance serving our members",
            })}
          </p>
        </div>
      </section>

      {/* National Board */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl text-slate-900 mb-4">
              {t({ id: "Dewan Pengurus Nasional", en: "National Board" })}
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              {t({
                id: "Kepemimpinan terpilih yang memandu arah strategis organisasi",
                en: "Elected leadership guiding the strategic direction of the organization",
              })}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {board.map((member, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 rounded-full bg-linear-to-br from-emerald-600 to-teal-600 mx-auto mb-4 flex items-center justify-center">
                    <UserCheck className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl text-slate-900 mb-2">
                    {t(member.position)}
                  </h3>
                  <p className="text-slate-600 text-sm">
                    {t(member.description)}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Secretariat */}
      <section className="bg-amber-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl text-slate-900 mb-4">
              {t({
                id: "Sekretariat / Direktur Eksekutif",
                en: "Secretariat / Executive Director",
              })}
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              {t({
                id: "Operasional sehari-hari dan layanan anggota",
                en: "Day-to-day operations and member services",
              })}
            </p>
          </div>

          <Card className="max-w-3xl mx-auto border-0 shadow-md">
            <CardContent className="p-8">
              <div className="space-y-4 text-slate-700">
                <p>
                  {t({
                    id: "Sekretariat bertanggung jawab atas operasional harian PHRI Bandung, termasuk koordinasi divisi, layanan anggota, dan implementasi kebijakan dewan.",
                    en: "The Secretariat is responsible for the daily operations of PHRI Bandung, including division coordination, member services, and implementation of board policies.",
                  })}
                </p>
                <p>
                  {t({
                    id: "Dipimpin oleh Direktur Eksekutif yang ditunjuk oleh dewan, sekretariat memastikan kelancaran fungsi organisasi dan kepuasan anggota.",
                    en: "Led by an Executive Director appointed by the board, the secretariat ensures smooth organizational function and member satisfaction.",
                  })}
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Divisions */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl text-slate-900 mb-4">
              {t({ id: "Divisi Fungsional", en: "Functional Divisions" })}
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              {t({
                id: "Tim khusus yang melayani berbagai kebutuhan anggota",
                en: "Specialized teams serving various member needs",
              })}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {divisions.map((division, index) => (
              <Card
                key={index}
                className="border-0 shadow-md hover:shadow-lg transition-shadow"
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
                      <division.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-lg text-slate-900 mb-2">
                        {t(division.name)}
                      </h3>
                      <p className="text-slate-600 text-sm">
                        {t(division.mandate)}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Governance Terms */}
      <section className="bg-slate-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl text-slate-900 mb-4">
              {t({ id: "Ketentuan Tata Kelola", en: "Governance Terms" })}
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="border-0 shadow-md">
              <CardContent className="p-6 text-center">
                <div className="text-4xl text-emerald-600 mb-2">3</div>
                <h3 className="text-xl text-slate-900 mb-2">
                  {t({ id: "Tahun", en: "Years" })}
                </h3>
                <p className="text-slate-600">
                  {t({ id: "Masa Jabatan Dewan", en: "Board Term Length" })}
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md">
              <CardContent className="p-6 text-center">
                <div className="text-4xl text-emerald-600 mb-2">4x</div>
                <h3 className="text-xl text-slate-900 mb-2">
                  {t({ id: "Per Tahun", en: "Per Year" })}
                </h3>
                <p className="text-slate-600">
                  {t({ id: "Pertemuan Dewan", en: "Board Meetings" })}
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md">
              <CardContent className="p-6 text-center">
                <div className="text-4xl text-emerald-600 mb-2">100%</div>
                <h3 className="text-xl text-slate-900 mb-2">
                  {t({ id: "Transparan", en: "Transparent" })}
                </h3>
                <p className="text-slate-600">
                  {t({ id: "Pelaporan Keuangan", en: "Financial Reporting" })}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
