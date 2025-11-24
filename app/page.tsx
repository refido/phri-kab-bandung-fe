"use client";

import { useState } from "react";
import { LanguageProvider } from "./contexts/LanguageContext";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { HomePage } from "../app/pages/HomePage";
import { AboutPage } from "./pages/AboutPage";
import { MembershipPage } from "./pages/MembershipPage";
import { ActiveMembersPage } from "./pages/ActiveMembersPage";
import { ContactPage } from "./pages/ContactPage";
import { HowToJoinPage } from "./pages/HowToJoinPage";
import { OrganizationalStructurePage } from "./pages/OrganizationalStructurePage";
import { CalendarEventsPage } from "./pages/CalendarEventsPage";
import { GalleryPage } from "./pages/GalleryPage";
import { ArticlesPage } from "./pages/ArticlesPage";
import { AssociatedMembersPage } from "./pages/AssociatedMembersPage";
import { SubmitListingPage } from "./pages/SubmitListingPage";
import { Toaster } from "../components/ui/sonner";
export default function App() {
  const [currentPage, setCurrentPage] = useState("/");

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const renderPage = () => {
    switch (currentPage) {
      case "/":
        return <HomePage onNavigate={handleNavigate} />;
      case "/about":
        return <AboutPage />;
      case "/membership":
        return <MembershipPage onNavigate={handleNavigate} />;
      case "/active-member":
        return <ActiveMembersPage />;
      case "/contact":
        return <ContactPage />;
      case "/how-to-join":
        return <HowToJoinPage onNavigate={handleNavigate} />;
      case "/organizational-structure":
        return <OrganizationalStructurePage />;
      case "/calendar-events":
        return <CalendarEventsPage />;
      case "/gallery":
        return <GalleryPage />;
      case "/artikel":
        return <ArticlesPage />;
      case "/associated-member":
        return <AssociatedMembersPage />;
      case "/ajukan-listing-perusahaan":
        return <SubmitListingPage />;
      default:
        return <HomePage onNavigate={handleNavigate} />;
    }
  };

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-white">
        <Header currentPage={currentPage} onNavigate={handleNavigate} />
        <main>{renderPage()}</main>
        <Footer onNavigate={handleNavigate} />
        <Toaster />
      </div>
    </LanguageProvider>
  );
}
