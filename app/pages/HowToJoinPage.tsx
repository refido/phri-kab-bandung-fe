import { useLanguage } from "../contexts/LanguageContext";
import { Card, CardContent } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import {
  CheckCircle2,
  FileText,
  UserCheck,
  Clock,
  Award,
  ArrowRight,
} from "lucide-react";

interface HowToJoinPageProps {
  onNavigate: (page: string) => void;
}

export function HowToJoinPage({ onNavigate }: HowToJoinPageProps) {
  const { t } = useLanguage();

  const steps = [
    {
      number: "1",
      icon: FileText,
      title: { id: "Siapkan Dokumen", en: "Prepare Documents" },
      description: {
        id: "Kumpulkan semua dokumen yang diperlukan termasuk izin usaha, NPWP, dan profil perusahaan",
        en: "Gather all required documents including business license, tax ID, and company profile",
      },
    },
    {
      number: "2",
      icon: FileText,
      title: { id: "Ajukan Permohonan", en: "Submit Application" },
      description: {
        id: "Isi formulir aplikasi online atau kunjungi kantor PHRI Bandung untuk bantuan",
        en: "Complete online application form or visit PHRI Bandung office for assistance",
      },
    },
    {
      number: "3",
      icon: UserCheck,
      title: { id: "Proses Verifikasi", en: "Verification Process" },
      description: {
        id: "Tim kami akan memverifikasi dokumen dan melakukan kunjungan lokasi jika diperlukan",
        en: "Our team will verify documents and conduct site visit if necessary",
      },
    },
    {
      number: "4",
      icon: Clock,
      title: { id: "Pembayaran Biaya", en: "Fee Payment" },
      description: {
        id: "Bayar biaya pendaftaran dan iuran tahunan sesuai kategori keanggotaan",
        en: "Pay entry fee and annual dues according to membership category",
      },
    },
    {
      number: "5",
      icon: CheckCircle2,
      title: { id: "Persetujuan", en: "Approval" },
      description: {
        id: "Aplikasi akan ditinjau dan disetujui oleh dewan pengurus",
        en: "Application will be reviewed and approved by the board",
      },
    },
    {
      number: "6",
      icon: Award,
      title: { id: "Penerbitan Keanggotaan", en: "Membership Issuance" },
      description: {
        id: "Terima sertifikat keanggotaan dan akses penuh ke manfaat PHRI",
        en: "Receive membership certificate and full access to PHRI benefits",
      },
    },
  ];

  const requirements = [
    {
      category: { id: "Hotel", en: "Hotels" },
      items: [
        {
          id: "Izin usaha hotel yang masih berlaku",
          en: "Valid hotel business license",
        },
        { id: "NPWP perusahaan", en: "Company tax ID (NPWP)" },
        {
          id: "Sertifikat klasifikasi bintang (jika ada)",
          en: "Star classification certificate (if applicable)",
        },
        {
          id: "Profil hotel dan daftar fasilitas",
          en: "Hotel profile and facilities list",
        },
      ],
    },
    {
      category: { id: "Restoran", en: "Restaurants" },
      items: [
        {
          id: "Izin usaha restoran yang masih berlaku",
          en: "Valid restaurant business license",
        },
        { id: "NPWP perusahaan", en: "Company tax ID (NPWP)" },
        {
          id: "Sertifikat higiene dan sanitasi",
          en: "Hygiene and sanitation certificate",
        },
        { id: "Menu dan konsep restoran", en: "Menu and restaurant concept" },
      ],
    },
    {
      category: { id: "Lembaga Pendidikan", en: "Education Institutions" },
      items: {
        id: "Izin operasional institusi pendidikan",
        en: "Educational institution operational permit",
      },
    },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="bg-linear-to-br from-emerald-600 to-teal-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl mb-4">
            {t({ id: "Cara Bergabung", en: "How to Join" })}
          </h1>
          <p className="text-xl text-emerald-50 max-w-3xl">
            {t({
              id: "Mulai perjalanan Anda dengan PHRI Bandung dalam 6 langkah mudah",
              en: "Start your journey with PHRI Bandung in 6 easy steps",
            })}
          </p>
        </div>
      </section>

      {/* Steps */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl text-slate-900 mb-4">
              {t({ id: "Proses Pendaftaran", en: "Registration Process" })}
            </h2>
            <p className="text-slate-600">
              {t({
                id: "Ikuti langkah-langkah berikut untuk menjadi anggota PHRI Bandung",
                en: "Follow these steps to become a PHRI Bandung member",
              })}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg hover:shadow-xl transition-shadow"
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-linear-to-br from-emerald-600 to-teal-600 flex items-center justify-center text-white shrink-0">
                      {step.number}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <step.icon className="w-5 h-5 text-emerald-600" />
                        <h3 className="text-xl text-slate-900">
                          {t(step.title)}
                        </h3>
                      </div>
                      <p className="text-slate-600">{t(step.description)}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="bg-slate-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl text-slate-900 mb-4">
              {t({ id: "Persyaratan Dokumen", en: "Document Requirements" })}
            </h2>
            <p className="text-slate-600">
              {t({
                id: "Dokumen yang diperlukan berdasarkan kategori anggota",
                en: "Required documents by member category",
              })}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {requirements.map((req, index) => (
              <Card key={index} className="border-0 shadow-md">
                <CardContent className="p-6">
                  <h3 className="text-xl text-slate-900 mb-4">
                    {t(req.category)}
                  </h3>
                  <ul className="space-y-3">
                    {Array.isArray(req.items) ? (
                      req.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                          <span className="text-slate-600 text-sm">
                            {t(item)}
                          </span>
                        </li>
                      ))
                    ) : (
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                        <span className="text-slate-600 text-sm">
                          {t(req.items)}
                        </span>
                      </li>
                    )}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl text-slate-900 mb-4">
              {t({ id: "Timeline Proses", en: "Process Timeline" })}
            </h2>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8">
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-24 shrink-0 text-emerald-600">
                  {t({ id: "Hari 1-3", en: "Day 1-3" })}
                </div>
                <div className="flex-1 text-slate-700">
                  {t({
                    id: "Pengajuan aplikasi dan verifikasi dokumen awal",
                    en: "Application submission and initial document verification",
                  })}
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-24 shrink-0 text-emerald-600">
                  {t({ id: "Hari 4-7", en: "Day 4-7" })}
                </div>
                <div className="flex-1 text-slate-700">
                  {t({
                    id: "Kunjungan lokasi dan verifikasi mendalam (jika diperlukan)",
                    en: "Site visit and in-depth verification (if required)",
                  })}
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-24 shrink-0 text-emerald-600">
                  {t({ id: "Hari 8-10", en: "Day 8-10" })}
                </div>
                <div className="flex-1 text-slate-700">
                  {t({
                    id: "Review dewan dan keputusan persetujuan",
                    en: "Board review and approval decision",
                  })}
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-24 shrink-0 text-emerald-600">
                  {t({ id: "Hari 11-14", en: "Day 11-14" })}
                </div>
                <div className="flex-1 text-slate-700">
                  {t({
                    id: "Penerbitan sertifikat dan aktivasi keanggotaan",
                    en: "Certificate issuance and membership activation",
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-linear-to-br from-slate-900 to-slate-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl mb-4">
            {t({ id: "Siap Memulai?", en: "Ready to Start?" })}
          </h2>
          <p className="text-xl text-slate-200 mb-8 max-w-2xl mx-auto">
            {t({
              id: "Lihat kategori keanggotaan dan biaya untuk memilih yang sesuai untuk bisnis Anda",
              en: "View membership categories and fees to choose the right fit for your business",
            })}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              size="lg"
              className="bg-emerald-600 hover:bg-emerald-700"
              onClick={() => onNavigate("/membership")}
            >
              {t({ id: "Lihat Keanggotaan", en: "View Membership" })}
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => onNavigate("/ajukan-listing-perusahaan")}
            >
              {t({ id: "Ajukan Sekarang", en: "Apply Now" })}
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
