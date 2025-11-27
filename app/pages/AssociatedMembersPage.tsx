import { Briefcase, Building2, Handshake } from "lucide-react";
import { CallToAction } from "../../components/CallToAction";
import { Hero } from "../../components/Hero";
import { Card, CardContent } from "../../components/ui/card";
import { useLanguage } from "../contexts/LanguageContext";

interface AssociatedMembersPageProps {
  onNavigate: (page: string) => void;
}

export function AssociatedMembersPage({
  onNavigate,
}: AssociatedMembersPageProps) {
  const { t } = useLanguage();

  const associatedOrgs = [
    {
      name: "Indonesia Tourism Board",
      type: { id: "Pemerintah", en: "Government" },
      description: {
        id: "Badan pariwisata nasional yang mendukung pengembangan industri perhotelan",
        en: "National tourism board supporting hospitality industry development",
      },
      icon: Building2,
    },
    {
      name: "Bandung Chamber of Commerce",
      type: { id: "Bisnis", en: "Business" },
      description: {
        id: "Kamar dagang yang mewakili kepentingan bisnis di wilayah Bandung",
        en: "Chamber of commerce representing business interests in Bandung region",
      },
      icon: Briefcase,
    },
    {
      name: "Indonesian Culinary Association",
      type: { id: "Industri", en: "Industry" },
      description: {
        id: "Asosiasi kuliner yang mendukung standar dan inovasi restoran",
        en: "Culinary association supporting restaurant standards and innovation",
      },
      icon: Handshake,
    },
  ];

  return (
    <div>
      {/* Hero */}
      <Hero
        variant="slate"
        title={{ id: "Anggota Asosiasi", en: "Associated Members" }}
        description={{
          id: "Organisasi mitra dan sekutu yang mendukung misi PHRI Bandung",
          en: "Partner and allied organizations supporting PHRI Bandung mission",
        }}
      />

      {/* Associated Organizations */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl text-slate-900 mb-4">
              {t({ id: "Organisasi Mitra", en: "Partner Organizations" })}
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              {t({
                id: "Bekerja sama dengan organisasi terkemuka untuk memperkuat ekosistem perhotelan",
                en: "Collaborating with leading organizations to strengthen the hospitality ecosystem",
              })}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {associatedOrgs.map((org, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg hover:shadow-xl transition-shadow"
              >
                <CardContent className="p-8">
                  <div className="w-16 h-16 rounded-full bg-linear-to-br from-purple-600 to-indigo-600 flex items-center justify-center mb-6 mx-auto">
                    <org.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl text-slate-900 mb-2 text-center">
                    {org.name}
                  </h3>
                  <p className="text-purple-600 text-center mb-4">
                    {t(org.type)}
                  </p>
                  <p className="text-slate-600 text-center">
                    {t(org.description)}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Benefits */}
      <section className="bg-indigo-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl text-slate-900 mb-4">
              {t({ id: "Manfaat Kemitraan", en: "Partnership Benefits" })}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="border-0 shadow-md">
              <CardContent className="p-6">
                <h3 className="text-xl text-slate-900 mb-4">
                  {t({ id: "Untuk Anggota PHRI", en: "For PHRI Members" })}
                </h3>
                <ul className="space-y-2 text-slate-700">
                  <li className="flex items-start gap-2">
                    <span className="text-purple-600">•</span>
                    <span>
                      {t({
                        id: "Akses ke sumber daya mitra",
                        en: "Access to partner resources",
                      })}
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-600">•</span>
                    <span>
                      {t({
                        id: "Peluang kolaborasi bisnis",
                        en: "Business collaboration opportunities",
                      })}
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-600">•</span>
                    <span>
                      {t({
                        id: "Pembaruan industri eksklusif",
                        en: "Exclusive industry updates",
                      })}
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md">
              <CardContent className="p-6">
                <h3 className="text-xl text-slate-900 mb-4">
                  {t({
                    id: "Untuk Organisasi Mitra",
                    en: "For Partner Organizations",
                  })}
                </h3>
                <ul className="space-y-2 text-slate-700">
                  <li className="flex items-start gap-2">
                    <span className="text-purple-600">•</span>
                    <span>
                      {t({
                        id: "Jangkauan ke jaringan perhotelan",
                        en: "Reach to hospitality network",
                      })}
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-600">•</span>
                    <span>
                      {t({ id: "Program bersama", en: "Joint programs" })}
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-600">•</span>
                    <span>
                      {t({ id: "Visibilitas merek", en: "Brand visibility" })}
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CallToAction
        variant="purple"
        useCard={true}
        title={{
          id: "Tertarik Bermitra?",
          en: "Interested in Partnering?",
        }}
        description={{
          id: "Hubungi kami untuk mendiskusikan peluang kemitraan strategis",
          en: "Contact us to discuss strategic partnership opportunities",
        }}
        buttons={[
          {
            text: { id: "Hubungi Kami", en: "Contact Us" },
            onClick: () => onNavigate("/contact"),
            variant: "default",
          },
        ]}
      />
    </div>
  );
}
