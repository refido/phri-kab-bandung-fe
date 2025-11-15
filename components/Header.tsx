import { useState } from "react";
import { useLanguage } from "../app/contexts/LanguageContext";
import { translations } from "../app/data/translations";
import { Button } from "./ui/button";
import { Menu, Globe, ChevronDown } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "./ui/navigation-menu";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "./ui/collapsible";

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export function Header({ currentPage, onNavigate }: HeaderProps) {
  const { language, setLanguage, t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileMoreOpen, setMobileMoreOpen] = useState(false);

  // Tier 1: Primary Navigation (Always Visible)
  const primaryNavItems = [
    { key: "home", path: "/" },
    { key: "about", path: "/about" },
    { key: "membership", path: "/membership" },
    { key: "activeMembers", path: "/active-member" },
    { key: "contact", path: "/contact" },
  ];

  // Tier 2: Secondary Navigation (Under "Selengkapnya" / "More")
  const secondaryNavItems = [
    { key: "howToJoin", path: "/how-to-join" },
    { key: "orgStructure", path: "/organizational-structure" },
    { key: "calendar", path: "/calendar-events" },
    { key: "gallery", path: "/gallery" },
    { key: "articles", path: "/artikel" },
    { key: "associatedMembers", path: "/associated-member" },
  ];

  const toggleLanguage = () => {
    setLanguage(language === "id" ? "en" : "id");
  };

  const handleNavClick = (path: string) => {
    onNavigate(path);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <button
            onClick={() => handleNavClick("/")}
            className="flex items-center gap-3 hover:opacity-80 transition-opacity"
          >
            <div className="w-12 h-12 bg-linear-to-br from-purple-700 to-indigo-700 rounded-lg flex items-center justify-center shadow-md">
              <span className="text-white">PHRI</span>
            </div>
            <div className="hidden md:block">
              <div className="text-slate-900 text-left">PHRI Kab Bandung</div>
              <div className="text-slate-600 text-sm">
                {language === "id"
                  ? "Perhimpunan Hotel & Restoran Indonesia"
                  : "Indonesian Hotel & Restaurant Association"}
              </div>
            </div>
          </button>

          {/* Desktop Navigation with Mega Menu */}
          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList className="flex items-center gap-1">
              {/* Primary Navigation Items */}
              {primaryNavItems.map((item) => (
                <NavigationMenuItem key={item.key}>
                  <button
                    onClick={() => handleNavClick(item.path)}
                    className={`px-4 py-2 rounded-md transition-colors text-sm ${
                      currentPage === item.path
                        ? "bg-emerald-50 text-purple-700"
                        : "text-slate-700 hover:bg-slate-50"
                    }`}
                  >
                    {t(
                      translations.nav[
                        item.key as keyof typeof translations.nav
                      ]
                    )}
                  </button>
                </NavigationMenuItem>
              ))}

              {/* "Selengkapnya" Mega Menu */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="px-4 py-2 text-sm text-slate-700 hover:bg-slate-50">
                  {t(translations.nav.more)}
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="w-[400px] p-4">
                    <div className="grid gap-1">
                      {secondaryNavItems.map((item) => (
                        <NavigationMenuLink key={item.key} asChild>
                          <button
                            onClick={() => handleNavClick(item.path)}
                            className={`w-full flex items-start gap-3 px-4 py-3 rounded-md transition-colors text-left ${
                              currentPage === item.path
                                ? "bg-emerald-50 text-purple-700"
                                : "hover:bg-slate-50"
                            }`}
                          >
                            <div className="flex-1">
                              <div
                                className={`mb-1 ${
                                  currentPage === item.path
                                    ? "text-purple-700"
                                    : "text-slate-900"
                                }`}
                              >
                                {t(
                                  translations.nav[
                                    item.key as keyof typeof translations.nav
                                  ]
                                )}
                              </div>
                              <p className="text-sm text-slate-600 line-clamp-1">
                                {item.key === "howToJoin" &&
                                  t({
                                    id: "Pelajari cara menjadi anggota",
                                    en: "Learn how to become a member",
                                  })}
                                {item.key === "orgStructure" &&
                                  t({
                                    id: "Struktur dan tata kelola organisasi",
                                    en: "Organization structure and governance",
                                  })}
                                {item.key === "calendar" &&
                                  t({
                                    id: "Acara dan kegiatan mendatang",
                                    en: "Upcoming events and activities",
                                  })}
                                {item.key === "gallery" &&
                                  t({
                                    id: "Foto dan dokumentasi acara",
                                    en: "Photos and event documentation",
                                  })}
                                {item.key === "articles" &&
                                  t({
                                    id: "Berita dan artikel industri",
                                    en: "News and industry articles",
                                  })}
                                {item.key === "associatedMembers" &&
                                  t({
                                    id: "Organisasi mitra kami",
                                    en: "Our partner organizations",
                                  })}
                              </p>
                            </div>
                          </button>
                        </NavigationMenuLink>
                      ))}
                    </div>
                    <div className="border-t mt-3 pt-3">
                      <button
                        onClick={() =>
                          handleNavClick("/ajukan-listing-perusahaan")
                        }
                        className="w-full px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-md transition-colors text-sm"
                      >
                        {t(translations.nav.submitListing)}
                      </button>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* Language Toggle & Mobile Menu */}
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={toggleLanguage}
              className="gap-2"
            >
              <Globe className="w-4 h-4" />
              {language === "id" ? "ID" : "EN"}
            </Button>

            {/* Mobile Menu */}
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger className="lg:hidden inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-slate-950 disabled:pointer-events-none disabled:opacity-50 border border-slate-200 bg-white shadow-sm hover:bg-slate-100 hover:text-slate-900 h-9 px-3">
                <Menu className="w-5 h-5" />
              </SheetTrigger>
              <SheetContent side="right" className="w-72 overflow-y-auto">
                <nav className="flex flex-col gap-2 mt-8">
                  {/* Primary Navigation */}
                  {primaryNavItems.map((item) => (
                    <button
                      key={item.key}
                      onClick={() => handleNavClick(item.path)}
                      className={`px-4 py-3 rounded-md text-left transition-colors ${
                        currentPage === item.path
                          ? "bg-emerald-50 text-purple-700"
                          : "text-slate-700 hover:bg-slate-50"
                      }`}
                    >
                      {t(
                        translations.nav[
                          item.key as keyof typeof translations.nav
                        ]
                      )}
                    </button>
                  ))}

                  {/* Separator */}
                  <div className="border-t my-2"></div>

                  {/* "Selengkapnya" Collapsible */}
                  <Collapsible
                    open={mobileMoreOpen}
                    onOpenChange={setMobileMoreOpen}
                  >
                    <CollapsibleTrigger className="w-full flex items-center justify-between px-4 py-3 text-slate-700 hover:bg-slate-50 rounded-md transition-colors">
                      <span>{t(translations.nav.more)}</span>
                      <ChevronDown
                        className={`w-4 h-4 transition-transform ${
                          mobileMoreOpen ? "rotate-180" : ""
                        }`}
                      />
                    </CollapsibleTrigger>
                    <CollapsibleContent className="mt-1">
                      <div className="flex flex-col gap-1 pl-4">
                        {secondaryNavItems.map((item) => (
                          <button
                            key={item.key}
                            onClick={() => handleNavClick(item.path)}
                            className={`px-4 py-2 rounded-md text-left transition-colors text-sm ${
                              currentPage === item.path
                                ? "bg-emerald-50 text-purple-700"
                                : "text-slate-600 hover:bg-slate-50"
                            }`}
                          >
                            {t(
                              translations.nav[
                                item.key as keyof typeof translations.nav
                              ]
                            )}
                          </button>
                        ))}
                      </div>
                    </CollapsibleContent>
                  </Collapsible>

                  {/* Separator */}
                  <div className="border-t my-2"></div>

                  {/* Submit Listing CTA */}
                  <button
                    onClick={() => handleNavClick("/ajukan-listing-perusahaan")}
                    className="px-4 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-md transition-colors"
                  >
                    {t(translations.nav.submitListing)}
                  </button>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
