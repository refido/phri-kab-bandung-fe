import { Clock, Mail, MapPin, Phone, Send } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { Hero } from "../../components/Hero";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import { Textarea } from "../../components/ui/textarea";
import { useLanguage } from "../contexts/LanguageContext";

export function ContactPage() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success(
      t({
        id: "Pesan Anda telah terkirim! Kami akan segera menghubungi Anda.",
        en: "Your message has been sent! We will contact you soon.",
      })
    );
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div>
      {/* Hero */}
      <Hero
        variant="slateWithImage"
        size="large"
        backgroundImage="https://images.unsplash.com/photo-1587560699334-bea93391dcef?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        title={{ id: "Hubungi Kami", en: "Contact Us" }}
        description={{
          id: "Kami siap membantu Anda. Hubungi kami untuk pertanyaan atau informasi lebih lanjut",
          en: "We are here to help. Contact us for questions or more information",
        }}
      />

      {/* Contact Info Cards - Horizontal */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-lg text-slate-900 mb-2">
                  {t({ id: "Alamat", en: "Address" })}
                </h3>
                <p className="text-slate-600 text-sm">
                  Jl. Asia Afrika No. 112
                  <br />
                  Bandung 40261
                  <br />
                  Jawa Barat, Indonesia
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-lg text-slate-900 mb-2">
                  {t({ id: "Telepon", en: "Phone" })}
                </h3>
                <p className="text-slate-600">+62 22 4232244</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-lg text-slate-900 mb-2">
                  {t({ id: "Email", en: "Email" })}
                </h3>
                <p className="text-slate-600 text-sm">info@phribandung.or.id</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-lg text-slate-900 mb-2">
                  {t({ id: "Jam Kerja", en: "Office Hours" })}
                </h3>
                <p className="text-slate-600 text-sm">
                  {t({ id: "Senin - Jumat", en: "Monday - Friday" })}
                  <br />
                  09:00 - 17:00 WIB
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Form - Full Width */}
      <section className="py-16 bg-indigo-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="border-0 shadow-lg">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl text-slate-900 mb-3">
                  {t({ id: "Kirim Pesan", en: "Send Message" })}
                </h2>
                <p className="text-slate-600">
                  {t({
                    id: "Isi formulir di bawah ini dan kami akan menghubungi Anda sesegera mungkin",
                    en: "Fill out the form below and we will contact you as soon as possible",
                  })}
                </p>
              </div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="name">
                      {t({ id: "Nama Lengkap", en: "Full Name" })} *
                    </Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => handleChange("name", e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleChange("email", e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="phone">
                      {t({ id: "Nomor Telepon", en: "Phone Number" })}
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleChange("phone", e.target.value)}
                    />
                  </div>
                  <div>
                    <Label htmlFor="subject">
                      {t({ id: "Subjek", en: "Subject" })} *
                    </Label>
                    <Input
                      id="subject"
                      value={formData.subject}
                      onChange={(e) => handleChange("subject", e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="message">
                    {t({ id: "Pesan", en: "Message" })} *
                  </Label>
                  <Textarea
                    id="message"
                    rows={6}
                    value={formData.message}
                    onChange={(e) => handleChange("message", e.target.value)}
                    required
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-purple-600 hover:bg-purple-700"
                >
                  <Send className="w-4 h-4 mr-2" />
                  {t({ id: "Kirim Pesan", en: "Send Message" })}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Map */}
      <section className="pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="border-0 shadow-lg overflow-hidden">
            <div className="h-96 bg-slate-100 flex items-center justify-center relative">
              <div className="text-center">
                <MapPin className="w-16 h-16 text-slate-300 mx-auto mb-4" />
                <p className="text-slate-600">
                  {t({
                    id: "[Peta Interaktif Google Maps akan ditampilkan di sini]",
                    en: "[Interactive Google Maps would be displayed here]",
                  })}
                </p>
                <p className="text-sm text-slate-500 mt-2">
                  Jl. Asia Afrika No. 112, Bandung 40261
                </p>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
}
