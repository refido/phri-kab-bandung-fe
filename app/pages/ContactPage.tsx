import { useState } from "react";
import { useLanguage } from "../contexts/LanguageContext";
import { Card, CardContent } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Textarea } from "../../components/ui/textarea";
import { Label } from "../../components/ui/label";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { toast } from "sonner";

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
      <section className="bg-linear-to-br from-emerald-600 to-teal-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl mb-4">
            {t({ id: "Hubungi Kami", en: "Contact Us" })}
          </h1>
          <p className="text-xl text-emerald-50 max-w-3xl">
            {t({
              id: "Kami siap membantu Anda. Hubungi kami untuk pertanyaan atau informasi lebih lanjut",
              en: "We are here to help. Contact us for questions or more information",
            })}
          </p>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact Information */}
            <div className="lg:col-span-1 space-y-6">
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center shrink-0">
                      <MapPin className="w-6 h-6 text-emerald-600" />
                    </div>
                    <div>
                      <h3 className="text-lg text-slate-900 mb-1">
                        {t({ id: "Alamat", en: "Address" })}
                      </h3>
                      <p className="text-slate-600">
                        Jl. Asia Afrika No. 112
                        <br />
                        Bandung 40261
                        <br />
                        Jawa Barat, Indonesia
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center shrink-0">
                      <Phone className="w-6 h-6 text-emerald-600" />
                    </div>
                    <div>
                      <h3 className="text-lg text-slate-900 mb-1">
                        {t({ id: "Telepon", en: "Phone" })}
                      </h3>
                      <p className="text-slate-600">+62 22 4232244</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center shrink-0">
                      <Mail className="w-6 h-6 text-emerald-600" />
                    </div>
                    <div>
                      <h3 className="text-lg text-slate-900 mb-1">
                        {t({ id: "Email", en: "Email" })}
                      </h3>
                      <p className="text-slate-600">info@phribandung.or.id</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center shrink-0">
                      <Clock className="w-6 h-6 text-emerald-600" />
                    </div>
                    <div>
                      <h3 className="text-lg text-slate-900 mb-1">
                        {t({ id: "Jam Kerja", en: "Office Hours" })}
                      </h3>
                      <p className="text-slate-600">
                        {t({ id: "Senin - Jumat", en: "Monday - Friday" })}
                        <br />
                        09:00 - 17:00 WIB
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <h2 className="text-2xl text-slate-900 mb-6">
                    {t({ id: "Kirim Pesan", en: "Send Message" })}
                  </h2>
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
                          onChange={(e) =>
                            handleChange("email", e.target.value)
                          }
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
                          onChange={(e) =>
                            handleChange("phone", e.target.value)
                          }
                        />
                      </div>
                      <div>
                        <Label htmlFor="subject">
                          {t({ id: "Subjek", en: "Subject" })} *
                        </Label>
                        <Input
                          id="subject"
                          value={formData.subject}
                          onChange={(e) =>
                            handleChange("subject", e.target.value)
                          }
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
                        onChange={(e) =>
                          handleChange("message", e.target.value)
                        }
                        required
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-emerald-600 hover:bg-emerald-700"
                    >
                      <Send className="w-4 h-4 mr-2" />
                      {t({ id: "Kirim Pesan", en: "Send Message" })}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
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
