import { useState } from "react";
import { useLanguage } from "../contexts/LanguageContext";
import { mockGalleryItems } from "../data/mockData";
import { Card } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { Badge } from "../../components/ui/badge";
import { Dialog, DialogContent } from "../../components/ui/dialog";
import { X, Upload } from "lucide-react";

export function GalleryPage() {
  const { t } = useLanguage();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const categories = [
    { value: "all", label: { id: "Semua", en: "All" } },
    { value: "events", label: { id: "Acara", en: "Events" } },
    { value: "members", label: { id: "Anggota", en: "Members" } },
    {
      value: "sustainability",
      label: { id: "Keberlanjutan", en: "Sustainability" },
    },
    { value: "awards", label: { id: "Penghargaan", en: "Awards" } },
    { value: "regional", label: { id: "Regional", en: "Regional" } },
  ];

  const filteredItems =
    selectedCategory === "all"
      ? mockGalleryItems
      : mockGalleryItems.filter((item) => item.category === selectedCategory);

  const getCategoryLabel = (category: string) => {
    const cat = categories.find((c) => c.value === category);
    return cat ? t(cat.label) : category;
  };

  return (
    <div>
      {/* Hero */}
      <section className="bg-linear-to-br from-slate-900 to-slate-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl mb-4">
            {t({ id: "Galeri", en: "Gallery" })}
          </h1>
          <p className="text-xl text-slate-200 max-w-3xl">
            {t({
              id: "Jelajahi momen berkesan dari acara, anggota, dan kegiatan PHRI Bandung",
              en: "Explore memorable moments from PHRI Bandung events, members, and activities",
            })}
          </p>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filters */}
          <div className="mb-8">
            <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <Button
                    key={category.value}
                    variant={
                      selectedCategory === category.value
                        ? "default"
                        : "outline"
                    }
                    className={
                      selectedCategory === category.value
                        ? "bg-emerald-600 hover:bg-emerald-700"
                        : ""
                    }
                    onClick={() => setSelectedCategory(category.value)}
                  >
                    {t(category.label)}
                  </Button>
                ))}
              </div>
              <Button variant="outline" className="gap-2">
                <Upload className="w-4 h-4" />
                {t({ id: "Kirim Foto", en: "Submit Photos" })}
              </Button>
            </div>
            <p className="text-slate-600">
              {t({ id: "Menampilkan", en: "Showing" })} {filteredItems.length}{" "}
              {t({ id: "foto", en: "photos" })}
            </p>
          </div>

          {/* Masonry Grid */}
          <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
            {filteredItems.map((item) => (
              <Card
                key={item.id}
                className="break-inside-avoid border-0 shadow-md hover:shadow-xl transition-shadow cursor-pointer overflow-hidden"
                onClick={() => setSelectedImage(item.id)}
              >
                <img
                  src={item.image}
                  alt={t(item.caption)}
                  className="w-full object-cover"
                  loading="lazy"
                />
                <div className="p-4">
                  <Badge className="bg-emerald-100 text-emerald-700 mb-2">
                    {getCategoryLabel(item.category)}
                  </Badge>
                  <p className="text-slate-700 text-sm">{t(item.caption)}</p>
                  <p className="text-slate-500 text-xs mt-1">
                    {new Date(item.date).toLocaleDateString(
                      t({ id: "id-ID", en: "en-US" })
                    )}
                  </p>
                </div>
              </Card>
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className="text-center py-16">
              <p className="text-slate-600">
                {t({
                  id: "Tidak ada foto dalam kategori ini",
                  en: "No photos in this category",
                })}
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      <Dialog
        open={selectedImage !== null}
        onOpenChange={() => setSelectedImage(null)}
      >
        <DialogContent className="max-w-6xl p-0">
          {selectedImage &&
            (() => {
              const item = mockGalleryItems.find((i) => i.id === selectedImage);
              if (!item) return null;
              return (
                <div className="relative">
                  <button
                    onClick={() => setSelectedImage(null)}
                    className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/50 hover:bg-black/70 text-white flex items-center justify-center transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                  <img
                    src={item.image}
                    alt={t(item.caption)}
                    className="w-full h-auto max-h-[90vh] object-contain"
                  />
                  <div className="p-6 bg-white">
                    <Badge className="bg-emerald-100 text-emerald-700 mb-2">
                      {getCategoryLabel(item.category)}
                    </Badge>
                    <p className="text-slate-900 mb-1">{t(item.caption)}</p>
                    <p className="text-slate-500 text-sm">
                      {new Date(item.date).toLocaleDateString(
                        t({ id: "id-ID", en: "en-US" })
                      )}
                    </p>
                  </div>
                </div>
              );
            })()}
        </DialogContent>
      </Dialog>
    </div>
  );
}
