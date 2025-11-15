import { useLanguage } from "../app/contexts/LanguageContext";
import { translations } from "../app/data/translations";
import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

interface FooterProps {
  onNavigate: (page: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  const { t } = useLanguage();

  const quickLinks = [
    { key: "about", path: "/about" },
    { key: "membership", path: "/membership" },
    { key: "calendar", path: "/calendar-events" },
    { key: "activeMembers", path: "/active-member" },
  ];

  return (
    <footer className="bg-slate-900 text-white mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* About */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-linear-to-br from-purple-700 to-indigo-700 rounded-lg flex items-center justify-center">
                <span className="text-white text-sm">PHRI</span>
              </div>
              <div>
                <div className="text-white">PHRI Kab Bandung</div>
              </div>
            </div>
            <p className="text-slate-400 text-sm">
              {t({
                id: "Memadukan tradisi keramahan Indonesia dengan standar bisnis modern untuk melayani hotel, restoran, dan anggota terkait.",
                en: "Blending Indonesian hospitality tradition with modern business standards serving hotels, restaurants, and allied members.",
              })}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4">{t(translations.footer.quickLinks)}</h3>
            <div className="flex flex-col gap-2">
              {quickLinks.map((link) => (
                <button
                  key={link.key}
                  onClick={() => onNavigate(link.path)}
                  className="text-slate-400 hover:text-purple-400 transition-colors text-left text-sm"
                >
                  {t(
                    translations.nav[link.key as keyof typeof translations.nav]
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4">{t(translations.footer.contact)}</h3>
            <div className="flex flex-col gap-3 text-sm text-slate-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-1 shrink-0" />
                <span>Jl. Asia Afrika No. 112, Bandung 40261, Indonesia</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 shrink-0" />
                <span>+62 22 4232244</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 shrink-0" />
                <span>info@phribandung.or.id</span>
              </div>
            </div>

            {/* Social Media */}
            <div className="mt-6">
              <h4 className="text-sm mb-3">
                {t(translations.footer.followUs)}
              </h4>
              <div className="flex gap-3">
                <a
                  href="#"
                  className="w-8 h-8 rounded-full bg-slate-800 hover:bg-purple-600 flex items-center justify-center transition-colors"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <a
                  href="#"
                  className="w-8 h-8 rounded-full bg-slate-800 hover:bg-purple-600 flex items-center justify-center transition-colors"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href="#"
                  className="w-8 h-8 rounded-full bg-slate-800 hover:bg-purple-600 flex items-center justify-center transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-8 pt-8 text-center text-sm text-slate-400">
          <p>© 2025 PHRI Bandung. {t(translations.footer.allRights)}.</p>
        </div>
      </div>
    </footer>
  );
}
