import { ArrowRight, Calendar, User } from "lucide-react";
import { Hero } from "../../components/Hero";
import { Badge } from "../../components/ui/badge";
import { Card, CardContent } from "../../components/ui/card";
import { useLanguage } from "../contexts/LanguageContext";

export function ArticlesPage() {
  const { t } = useLanguage();

  const articles = [
    {
      id: "1",
      title: {
        id: "Tren Perhotelan 2025: Teknologi dan Keberlanjutan",
        en: "Hospitality Trends 2025: Technology and Sustainability",
      },
      excerpt: {
        id: "Industri perhotelan mengalami transformasi signifikan dengan adopsi teknologi digital dan fokus pada praktik berkelanjutan.",
        en: "The hospitality industry is experiencing significant transformation with digital technology adoption and focus on sustainable practices.",
      },
      category: { id: "Industri", en: "Industry" },
      author: "PHRI Bandung",
      date: "2025-10-15",
      image:
        "https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3RlbCUyMGxvYmJ5fGVufDF8fHx8MTc2MjAxMTI3OHww&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      id: "2",
      title: {
        id: "Profil Anggota: Grand Preanger Hotel Merayakan 100 Tahun",
        en: "Member Spotlight: Grand Preanger Hotel Celebrates 100 Years",
      },
      excerpt: {
        id: "Mengenal lebih dekat salah satu hotel bersejarah di Bandung yang telah menjadi ikon kota selama satu abad.",
        en: "Get to know one of Bandung's historic hotels that has been a city icon for a century.",
      },
      category: { id: "Anggota", en: "Members" },
      author: "Tim Editorial",
      date: "2025-09-28",
      image:
        "https://images.unsplash.com/photo-1751325898021-e7b59d56c5f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3RlbCUyMHJlc29ydCUyMHN1bnNldHxlbnwxfHx8fDE3NjIwMjE1NDV8MA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      id: "3",
      title: {
        id: "Panduan: Meningkatkan Standar Layanan Restoran",
        en: "Guide: Elevating Restaurant Service Standards",
      },
      excerpt: {
        id: "Tips praktis dan best practices untuk meningkatkan kualitas layanan restoran Anda berdasarkan standar PHRI.",
        en: "Practical tips and best practices to improve your restaurant service quality based on PHRI standards.",
      },
      category: { id: "Pendidikan", en: "Education" },
      author: "Divisi Pendidikan PHRI",
      date: "2025-09-10",
      image:
        "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaW5lJTIwZGluaW5nJTIwcmVzdGF1cmFudHxlbnwxfHx8fDE3NjIwMTkxODF8MA&ixlib=rb-4.1.0&q=80&w=1080",
    },
  ];

  return (
    <div>
      {/* Hero */}
      <Hero
        variant="slate"
        title={{ id: "Artikel & Berita", en: "Articles & News" }}
        description={{
          id: "Wawasan industri, profil anggota, dan pembaruan dari PHRI Bandung",
          en: "Industry insights, member spotlights, and updates from PHRI Bandung",
        }}
      />

      {/* Featured Article */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {articles[0] && (
            <Card className="border-0 shadow-xl overflow-hidden mb-12">
              <div className="grid md:grid-cols-2 gap-0">
                <img
                  src={articles[0].image}
                  alt={t(articles[0].title)}
                  className="w-full h-full object-cover"
                />
                <CardContent className="p-8 md:p-12 flex flex-col justify-center">
                  <Badge className="bg-purple-100 text-purple-700 w-fit mb-4">
                    {t({ id: "Unggulan", en: "Featured" })}
                  </Badge>
                  <h2 className="text-3xl text-slate-900 mb-4">
                    {t(articles[0].title)}
                  </h2>
                  <p className="text-slate-700 mb-6">
                    {t(articles[0].excerpt)}
                  </p>
                  <div className="flex items-center gap-4 text-sm text-slate-600 mb-6">
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4" />
                      <span>{articles[0].author}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>
                        {new Date(articles[0].date).toLocaleDateString(
                          t({ id: "id-ID", en: "en-US" })
                        )}
                      </span>
                    </div>
                  </div>
                  <button className="flex items-center gap-2 text-purple-600 hover:text-purple-700">
                    {t({ id: "Baca Selengkapnya", en: "Read More" })}
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </CardContent>
              </div>
            </Card>
          )}

          {/* Articles Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {articles.slice(1).map((article) => (
              <Card
                key={article.id}
                className="border-0 shadow-lg hover:shadow-xl transition-shadow overflow-hidden"
              >
                <img
                  src={article.image}
                  alt={t(article.title)}
                  className="w-full h-56 object-cover"
                />
                <CardContent className="p-6">
                  <Badge className="bg-slate-100 text-slate-700 mb-3">
                    {t(article.category)}
                  </Badge>
                  <h3 className="text-xl text-slate-900 mb-3">
                    {t(article.title)}
                  </h3>
                  <p className="text-slate-700 mb-4 line-clamp-2">
                    {t(article.excerpt)}
                  </p>
                  <div className="flex items-center gap-4 text-sm text-slate-600 mb-4">
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4" />
                      <span>{article.author}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>
                        {new Date(article.date).toLocaleDateString(
                          t({ id: "id-ID", en: "en-US" })
                        )}
                      </span>
                    </div>
                  </div>
                  <button className="flex items-center gap-2 text-purple-600 hover:text-purple-700">
                    {t({ id: "Baca Selengkapnya", en: "Read More" })}
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-indigo-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl text-slate-900 mb-4">
            {t({
              id: "Berlangganan Newsletter",
              en: "Subscribe to Newsletter",
            })}
          </h2>
          <p className="text-slate-600 mb-8">
            {t({
              id: "Dapatkan artikel terbaru dan pembaruan industri langsung ke inbox Anda",
              en: "Get the latest articles and industry updates delivered to your inbox",
            })}
          </p>
          <div className="flex gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder={t({
                id: "Alamat email Anda",
                en: "Your email address",
              })}
              className="flex-1 px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
            <button className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors">
              {t({ id: "Berlangganan", en: "Subscribe" })}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
