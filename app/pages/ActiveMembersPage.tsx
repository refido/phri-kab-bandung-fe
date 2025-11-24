import { useState } from "react";
import { useLanguage } from "../contexts/LanguageContext";
import { mockMembers } from "../data/mockData";
import { Card, CardContent } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Badge } from "../../components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../components/ui/select";
import {
  Building2,
  Utensils,
  GraduationCap,
  Users,
  Search,
  MapPin,
  Phone,
  Mail,
  Globe,
  Map,
} from "lucide-react";

export function ActiveMembersPage() {
  const { t } = useLanguage();
  const [searchQuery, setSearchQuery] = useState("");
  const [typeFilter, setTypeFilter] = useState<string>("all");
  const [viewMode, setViewMode] = useState<"grid" | "map">("grid");

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "hotel":
        return Building2;
      case "restaurant":
        return Utensils;
      case "education":
        return GraduationCap;
      default:
        return Users;
    }
  };

  const filteredMembers = mockMembers.filter((member) => {
    const matchesSearch =
      member.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      t(member.description).toLowerCase().includes(searchQuery.toLowerCase());
    const matchesType = typeFilter === "all" || member.type === typeFilter;
    return matchesSearch && matchesType;
  });

  return (
    <div>
      {/* Hero */}
      <section className="bg-linear-to-br from-emerald-600 to-teal-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl mb-4">
            {t({ id: "Anggota Aktif", en: "Active Members" })}
          </h1>
          <p className="text-xl text-emerald-50 max-w-3xl">
            {t({
              id: "Jelajahi direktori anggota PHRI Bandung yang aktif",
              en: "Explore our directory of active PHRI Bandung members",
            })}
          </p>
        </div>
      </section>

      {/* Search & Filters */}
      <section className="bg-white border-b sticky top-[73px] z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <Input
                placeholder={t({
                  id: "Cari anggota...",
                  en: "Search members...",
                })}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={typeFilter} onValueChange={setTypeFilter}>
              <SelectTrigger className="w-full md:w-64">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">
                  {t({ id: "Semua Tipe", en: "All Types" })}
                </SelectItem>
                <SelectItem value="hotel">
                  {t({ id: "Hotel", en: "Hotels" })}
                </SelectItem>
                <SelectItem value="restaurant">
                  {t({ id: "Restoran", en: "Restaurants" })}
                </SelectItem>
                <SelectItem value="education">
                  {t({ id: "Lembaga Pendidikan", en: "Education" })}
                </SelectItem>
                <SelectItem value="affiliate">
                  {t({ id: "Afiliasi", en: "Affiliates" })}
                </SelectItem>
              </SelectContent>
            </Select>
            <div className="flex gap-2">
              <Button
                variant={viewMode === "grid" ? "default" : "outline"}
                onClick={() => setViewMode("grid")}
                className={
                  viewMode === "grid"
                    ? "bg-emerald-600 hover:bg-emerald-700"
                    : ""
                }
              >
                <Building2 className="w-4 h-4" />
              </Button>
              <Button
                variant={viewMode === "map" ? "default" : "outline"}
                onClick={() => setViewMode("map")}
                className={
                  viewMode === "map"
                    ? "bg-emerald-600 hover:bg-emerald-700"
                    : ""
                }
              >
                <Map className="w-4 h-4" />
              </Button>
            </div>
          </div>
          <div className="mt-4 text-sm text-slate-600">
            {t({ id: "Menampilkan", en: "Showing" })} {filteredMembers.length}{" "}
            {t({ id: "dari", en: "of" })} {mockMembers.length}{" "}
            {t({ id: "anggota", en: "members" })}
          </div>
        </div>
      </section>

      {/* Members Grid */}
      {viewMode === "grid" && (
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {filteredMembers.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredMembers.map((member) => {
                  const Icon = getTypeIcon(member.type);
                  return (
                    <Card
                      key={member.id}
                      className="border-0 shadow-lg hover:shadow-xl transition-shadow"
                    >
                      {member.images.length > 0 && (
                        <img
                          src={member.images[0]}
                          alt={member.name}
                          className="w-full h-48 object-cover"
                        />
                      )}
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between mb-3">
                          <h3 className="text-xl text-slate-900">
                            {member.name}
                          </h3>
                          <Icon className="w-5 h-5 text-emerald-600 shrink-0" />
                        </div>
                        <Badge className="bg-emerald-100 text-emerald-700 mb-3">
                          {member.category}
                          {member.starRating && ` - ${member.starRating} ⭐`}
                        </Badge>
                        <p className="text-slate-700 text-sm mb-4 line-clamp-2">
                          {t(member.description)}
                        </p>
                        <div className="space-y-2 text-sm text-slate-600">
                          <div className="flex items-start gap-2">
                            <MapPin className="w-4 h-4 shrink-0 mt-0.5" />
                            <span>{t(member.address)}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Phone className="w-4 h-4 shrink-0" />
                            <span>{member.phone}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Mail className="w-4 h-4 shrink-0" />
                            <span className="truncate">{member.email}</span>
                          </div>
                          {member.website && (
                            <div className="flex items-center gap-2">
                              <Globe className="w-4 h-4 shrink-0" />
                              <a
                                href={`https://${member.website}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-emerald-600 hover:text-emerald-700 truncate"
                              >
                                {member.website}
                              </a>
                            </div>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            ) : (
              <Card className="border-0 shadow-md">
                <CardContent className="p-12 text-center">
                  <Search className="w-16 h-16 text-slate-300 mx-auto mb-4" />
                  <p className="text-slate-600">
                    {t({
                      id: "Tidak ada anggota yang cocok dengan kriteria pencarian",
                      en: "No members match your search criteria",
                    })}
                  </p>
                </CardContent>
              </Card>
            )}
          </div>
        </section>
      )}

      {/* Map View */}
      {viewMode === "map" && (
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <Map className="w-16 h-16 text-slate-300 mx-auto mb-4" />
                <h3 className="text-xl text-slate-900 mb-2">
                  {t({ id: "Tampilan Peta", en: "Map View" })}
                </h3>
                <p className="text-slate-600 mb-6">
                  {t({
                    id: "Tampilan peta interaktif akan menampilkan lokasi semua anggota di Bandung",
                    en: "Interactive map view would display all member locations across Bandung",
                  })}
                </p>
                <div className="bg-slate-100 rounded-lg h-96 flex items-center justify-center">
                  <p className="text-slate-500">
                    {t({ id: "[Peta Interaktif]", en: "[Interactive Map]" })}
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      )}
    </div>
  );
}
