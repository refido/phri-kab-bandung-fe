import { ChevronDown, Globe, Menu } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "../app/contexts/LanguageContext";
import { translations } from "../app/data/translations";
import { Button } from "./ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "./ui/collapsible";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "./ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";

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
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3">
          {/* Logo */}
          <button
            onClick={() => handleNavClick("/")}
            className="flex items-center gap-3 hover:opacity-80 transition-opacity"
          >
            <div className="w-14 h-14 bg-linear-to-br from-purple-700 to-indigo-700 rounded-lg flex items-center justify-center shadow-md">
              <span className="text-white font-semibold text-lg">PHRI</span>
            </div>
            <div className="hidden md:block">
              <div className="text-slate-900 font-semibold text-lg">
                PHRI Kab Bandung
              </div>
              <div className="text-slate-600 text-xs">
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
                    className={`px-4 py-2 rounded-md transition-all duration-200 text-sm font-medium ${
                      currentPage === item.path
                        ? "bg-purple-50 text-purple-700 shadow-sm"
                        : "text-slate-700 hover:bg-slate-100 hover:text-slate-900"
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
                <NavigationMenuTrigger className="px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100 hover:text-slate-900 transition-all duration-200">
                  {t(translations.nav.more)}
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="w-[420px] p-6">
                    <div className="mb-4">
                      <h3 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">
                        {t({
                          id: "Informasi Tambahan",
                          en: "Additional Information",
                        })}
                      </h3>
                    </div>
                    <div className="grid gap-2">
                      {secondaryNavItems.map((item) => (
                        <NavigationMenuLink key={item.key} asChild>
                          <button
                            onClick={() => handleNavClick(item.path)}
                            className={`w-full flex items-start gap-3 px-4 py-3 rounded-lg transition-all duration-200 text-left group ${
                              currentPage === item.path
                                ? "bg-purple-50 text-purple-700 shadow-sm"
                                : "hover:bg-slate-50 hover:shadow-sm"
                            }`}
                          >
                            <div className="flex-1">
                              <div
                                className={`mb-1 font-medium ${
                                  currentPage === item.path
                                    ? "text-purple-700"
                                    : "text-slate-900 group-hover:text-purple-700"
                                }`}
                              >
                                {t(
                                  translations.nav[
                                    item.key as keyof typeof translations.nav
                                  ]
                                )}
                              </div>
                              <p className="text-xs text-slate-600 line-clamp-1">
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
                    <div className="border-t mt-4 pt-4">
                      <button
                        onClick={() =>
                          handleNavClick("/ajukan-listing-perusahaan")
                        }
                        className="w-full px-4 py-2.5 bg-linear-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white rounded-lg transition-all duration-200 text-sm font-medium shadow-sm hover:shadow-md"
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
              className="gap-2 font-medium"
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
                      className={`px-4 py-3 rounded-lg text-left transition-all duration-200 font-medium ${
                        currentPage === item.path
                          ? "bg-purple-50 text-purple-700 shadow-sm"
                          : "text-slate-700 hover:bg-slate-100"
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
                    <CollapsibleTrigger className="w-full flex items-center justify-between px-4 py-3 text-slate-700 hover:bg-slate-100 rounded-lg transition-all duration-200 font-medium">
                      <span>{t(translations.nav.more)}</span>
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-200 ${
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
                            className={`px-4 py-2.5 rounded-lg text-left transition-all duration-200 text-sm font-medium ${
                              currentPage === item.path
                                ? "bg-purple-50 text-purple-700"
                                : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
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
                    className="px-4 py-3 bg-linear-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white rounded-lg transition-all duration-200 font-medium shadow-sm hover:shadow-md"
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
