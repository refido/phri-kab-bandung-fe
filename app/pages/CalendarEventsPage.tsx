import { format } from "date-fns";
import { enUS, id as idLocale } from "date-fns/locale";
import { Calendar, Clock, MapPin, User } from "lucide-react";
import Image from "next/image";
import { CallToAction } from "../../components/CallToAction";
import { Hero } from "../../components/Hero";
import { Badge } from "../../components/ui/badge";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { useLanguage } from "../contexts/LanguageContext";
import { mockEvents } from "../data/mockData";
interface CalendarEventsPageProps {
  onNavigate: (page: string) => void;
}

export function CalendarEventsPage({ onNavigate }: CalendarEventsPageProps) {
  const { t, language } = useLanguage();

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
      <Hero
        variant="slate"
        title={{ id: "Kalender & Acara", en: "Calendar & Events" }}
        description={{
          id: "Bergabunglah dengan konferensi, seminar, dan acara networking kami",
          en: "Join our conferences, seminars, and networking events",
        }}
      />

      {/* Upcoming Events */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            {upcomingEvents.length > 0 ? (
              <div className="grid gap-6">
                {upcomingEvents.map((event) => (
                  <Card
                    key={event.id}
                    className="border-0 shadow-lg hover:shadow-xl transition-shadow overflow-hidden"
                  >
                    <div className="grid md:grid-cols-3 gap-6">
                      <div className="md:col-span-1">
                        <Image
                          src={event.image}
                          alt={t(event.title)}
                          className="w-full h-64 md:h-full object-cover"
                          width={1080}
                          height={720}
                          loading="lazy"
                        />
                      </div>
                      <CardContent className="md:col-span-2 p-6">
                        <div className="mb-3">
                          <Badge className="bg-purple-100 text-purple-700">
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
                        <Button className="bg-purple-600 hover:bg-purple-700">
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
        <section className="bg-indigo-50 py-16">
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
                  <Image
                    src={event.image}
                    alt={t(event.title)}
                    className="w-full h-48 object-cover"
                    width={1080}
                    height={720}
                    loading="lazy"
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
      <CallToAction
        variant="slate"
        useCard={true}
        title={{
          id: "Ingin Menyelenggarakan Acara?",
          en: "Want to Host an Event?",
        }}
        description={{
          id: "Anggota PHRI dapat mengajukan untuk menyelenggarakan acara dan mendapatkan dukungan promosi",
          en: "PHRI members can apply to host events and receive promotional support",
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
