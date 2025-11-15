"use client";

import { useState } from 'react';
import { LanguageProvider } from './contexts/LanguageContext';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { HomePage } from '../app/pages/HomePage';
import { Toaster } from '../components/ui/sonner';
export default function App() {
  const [currentPage, setCurrentPage] = useState('/');

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

   const renderPage = () => {
    switch (currentPage) {
      case '/':
        return <HomePage onNavigate={handleNavigate} />;
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