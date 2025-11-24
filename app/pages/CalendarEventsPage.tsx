import { useState } from "react";
import { useLanguage } from "../contexts/LanguageContext";
import { mockEvents } from "../data/mockData";
import { Card, CardContent } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { Badge } from "../../components/ui/badge";
import { Calendar, Clock, MapPin, User, Download } from "lucide-react";
import { format } from "date-fns";
import { id as idLocale, enUS } from "date-fns/locale";

export function CalendarEventsPage() {
  const { t, language } = useLanguage();
  const [selectedEvent, setSelectedEvent] = useState<string | null>(null);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const locale = language === "id" ? idLocale : enUS;
    return format(date, "EEEE, dd MMMM yyyy", { locale });
  };

  const isUpcoming = (dateString: string) => {
    return new Date(dateString) >= new Date();
  };

  const upcomingEvents = mockEvents.filter((event) => isUpcoming(event.date));
  const pastEvents = mockEvents.filter((event) => !isUpcoming(event.date));

  return (
    <div>
      {/* Hero */}
      <section className="bg-linear-to-br from-emerald-600 to-teal-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl mb-4">
            {t({ id: "Kalender & Acara", en: "Calendar & Events" })}
          </h1>
          <p className="text-xl text-emerald-50 max-w-3xl">
            {t({
              id: "Bergabunglah dengan konferensi, seminar, dan acara networking kami",
              en: "Join our conferences, seminars, and networking events",
            })}
          </p>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-3xl text-slate-900">
                {t({ id: "Acara Mendatang", en: "Upcoming Events" })}
              </h2>
              <Button variant="outline" className="gap-2">
                <Download className="w-4 h-4" />
                {t({ id: "Unduh Kalender", en: "Download Calendar" })}
              </Button>
            </div>

            {upcomingEvents.length > 0 ? (
              <div className="grid gap-6">
                {upcomingEvents.map((event) => (
                  <Card
                    key={event.id}
                    className="border-0 shadow-lg hover:shadow-xl transition-shadow overflow-hidden"
                  >
                    <div className="grid md:grid-cols-3 gap-6">
                      <div className="md:col-span-1">
                        <img
                          src={event.image}
                          alt={t(event.title)}
                          className="w-full h-64 md:h-full object-cover"
                        />
                      </div>
                      <CardContent className="md:col-span-2 p-6">
                        <div className="mb-3">
                          <Badge className="bg-emerald-100 text-emerald-700">
                            {t({ id: "Mendatang", en: "Upcoming" })}
                          </Badge>
                        </div>
                        <h3 className="text-2xl text-slate-900 mb-4">
                          {t(event.title)}
                        </h3>
                        <div className="space-y-2 mb-4">
                          <div className="flex items-center gap-2 text-slate-600">
                            <Calendar className="w-4 h-4" />
                            <span>{formatDate(event.date)}</span>
                          </div>
                          <div className="flex items-center gap-2 text-slate-600">
                            <Clock className="w-4 h-4" />
                            <span>{event.time}</span>
                          </div>
                          <div className="flex items-center gap-2 text-slate-600">
                            <MapPin className="w-4 h-4" />
                            <span>{t(event.venue)}</span>
                          </div>
                          {event.speaker && (
                            <div className="flex items-center gap-2 text-slate-600">
                              <User className="w-4 h-4" />
                              <span>{t(event.speaker)}</span>
                            </div>
                          )}
                        </div>
                        <p className="text-slate-700 mb-4">
                          {t(event.description)}
                        </p>
                        <Button className="bg-emerald-600 hover:bg-emerald-700">
                          {t({ id: "Daftar Sekarang", en: "Register Now" })}
                        </Button>
                      </CardContent>
                    </div>
                  </Card>
                ))}
              </div>
            ) : (
              <Card className="border-0 shadow-md">
                <CardContent className="p-12 text-center">
                  <Calendar className="w-16 h-16 text-slate-300 mx-auto mb-4" />
                  <p className="text-slate-600">
                    {t({
                      id: "Tidak ada acara mendatang saat ini. Periksa kembali segera!",
                      en: "No upcoming events at the moment. Check back soon!",
                    })}
                  </p>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </section>

      {/* Past Events */}
      {pastEvents.length > 0 && (
        <section className="bg-slate-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl text-slate-900 mb-8">
              {t({ id: "Acara Sebelumnya", en: "Past Events" })}
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {pastEvents.map((event) => (
                <Card
                  key={event.id}
                  className="border-0 shadow-md hover:shadow-lg transition-shadow"
                >
                  <img
                    src={event.image}
                    alt={t(event.title)}
                    className="w-full h-48 object-cover"
                  />
                  <CardContent className="p-6">
                    <h3 className="text-xl text-slate-900 mb-2">
                      {t(event.title)}
                    </h3>
                    <div className="space-y-1 mb-3 text-sm text-slate-600">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>{formatDate(event.date)}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        <span>{t(event.venue)}</span>
                      </div>
                    </div>
                    <p className="text-slate-700 text-sm line-clamp-2">
                      {t(event.description)}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="border-0 shadow-xl bg-linear-to-br from-slate-900 to-slate-800 text-white">
            <CardContent className="p-8 md:p-12 text-center">
              <h2 className="text-3xl mb-4">
                {t({
                  id: "Ingin Menyelenggarakan Acara?",
                  en: "Want to Host an Event?",
                })}
              </h2>
              <p className="text-xl text-slate-200 mb-8 max-w-2xl mx-auto">
                {t({
                  id: "Anggota PHRI dapat mengajukan untuk menyelenggarakan acara dan mendapatkan dukungan promosi",
                  en: "PHRI members can apply to host events and receive promotional support",
                })}
              </p>
              <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700">
                {t({ id: "Hubungi Kami", en: "Contact Us" })}
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
