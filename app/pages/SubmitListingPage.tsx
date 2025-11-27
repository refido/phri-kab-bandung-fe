import {
  AlertCircle,
  CheckCircle,
  Edit2,
  FileText,
  Send,
  Upload,
  X,
} from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { Hero } from "../../components/Hero";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { Checkbox } from "../../components/ui/checkbox";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../components/ui/select";
import { Textarea } from "../../components/ui/textarea";
import { useLanguage } from "../contexts/LanguageContext";

export function SubmitListingPage() {
  const { t } = useLanguage();
  const [step, setStep] = useState(1);
  const [files, setFiles] = useState<File[]>([]);
  const [termsAgreed, setTermsAgreed] = useState(false);
  const [formData, setFormData] = useState({
    businessName: "",
    category: "",
    address: "",
    phone: "",
    email: "",
    website: "",
    description: "",
    contactPerson: "",
    contactPhone: "",
    contactEmail: "",
  });

  // Category mapping for display
  const getCategoryLabel = (value: string) => {
    const categories: Record<string, { id: string; en: string }> = {
      "hotel-5": { id: "Hotel Bintang 5", en: "5-Star Hotel" },
      "hotel-4": { id: "Hotel Bintang 4", en: "4-Star Hotel" },
      "hotel-3": { id: "Hotel Bintang 3", en: "3-Star Hotel" },
      "restaurant-high": { id: "Restoran - Tinggi", en: "Restaurant - High" },
      "restaurant-mid": { id: "Restoran - Menengah", en: "Restaurant - Mid" },
      education: { id: "Lembaga Pendidikan", en: "Education Institution" },
    };
    return categories[value] ? t(categories[value]) : value;
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  // File upload handler
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = e.target.files;
    if (selectedFiles) {
      const newFiles = Array.from(selectedFiles);
      const validFiles = newFiles.filter(
        (file) => file.size <= 10 * 1024 * 1024
      );

      if (validFiles.length !== newFiles.length) {
        toast.error(
          t({
            id: "Beberapa file melebihi batas 10MB",
            en: "Some files exceed the 10MB limit",
          })
        );
      }

      setFiles((prev) => [...prev, ...validFiles]);
    }
  };

  // Remove file handler
  const handleRemoveFile = (index: number) => {
    setFiles((prev) => prev.filter((_, i) => i !== index));
  };

  // Edit specific step handler
  const handleEditStep = (targetStep: number) => {
    setStep(targetStep);
  };

  // Validation function
  const validateStep = () => {
    if (step === 1) {
      if (
        !formData.businessName ||
        !formData.category ||
        !formData.address ||
        !formData.phone ||
        !formData.email
      ) {
        toast.error(
          t({
            id: "Mohon lengkapi semua field yang wajib diisi",
            en: "Please fill in all required fields",
          })
        );
        return false;
      }
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        toast.error(
          t({
            id: "Format email tidak valid",
            en: "Invalid email format",
          })
        );
        return false;
      }
    }

    if (step === 2) {
      if (
        !formData.description ||
        !formData.contactPerson ||
        !formData.contactPhone ||
        !formData.contactEmail
      ) {
        toast.error(
          t({
            id: "Mohon lengkapi semua field yang wajib diisi",
            en: "Please fill in all required fields",
          })
        );
        return false;
      }
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.contactEmail)) {
        toast.error(
          t({
            id: "Format email tidak valid",
            en: "Invalid email format",
          })
        );
        return false;
      }
    }

    // Step 3 validation
    if (step === 3) {
      if (!termsAgreed) {
        toast.error(
          t({
            id: "Anda harus menyetujui syarat dan ketentuan",
            en: "You must agree to the terms and conditions",
          })
        );
        return false;
      }

      // Re-validate all required fields
      if (
        !formData.businessName ||
        !formData.category ||
        !formData.address ||
        !formData.phone ||
        !formData.email ||
        !formData.description ||
        !formData.contactPerson ||
        !formData.contactPhone ||
        !formData.contactEmail
      ) {
        toast.error(
          t({
            id: "Terdapat informasi yang tidak lengkap. Mohon periksa kembali.",
            en: "Some information is incomplete. Please review again.",
          })
        );
        return false;
      }
    }

    return true;
  };

  const handleNext = () => {
    if (validateStep() && step < 3) {
      setStep(step + 1);
    }
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Final validation
    if (!validateStep()) {
      return;
    }

    // Create FormData for file upload
    const submitData = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      submitData.append(key, value);
    });
    files.forEach((file) => {
      submitData.append("documents", file);
    });

    // Here you would send submitData to your API
    console.log("Form data:", formData);
    console.log("Files:", files);

    toast.success(
      t({
        id: "Permohonan Anda telah dikirim! Kami akan menghubungi Anda dalam 3-5 hari kerja.",
        en: "Your application has been submitted! We will contact you within 3-5 business days.",
      })
    );

    // Reset form
    setFormData({
      businessName: "",
      category: "",
      address: "",
      phone: "",
      email: "",
      website: "",
      description: "",
      contactPerson: "",
      contactPhone: "",
      contactEmail: "",
    });
    setFiles([]);
    setTermsAgreed(false);
    setStep(1);
  };

  return (
    <div>
      {/* Hero */}
      <Hero
        variant="slate"
        title={{
          id: "Ajukan Listing Perusahaan",
          en: "Submit Company Listing",
        }}
        description={{
          id: "Lengkapi formulir di bawah ini untuk mengajukan keanggotaan PHRI Bandung",
          en: "Complete the form below to apply for PHRI Bandung membership",
        }}
      />

      {/* Progress Steps */}
      <section className="bg-white border-b py-6">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            <div
              className="absolute top-5 left-0 right-0 h-1 bg-slate-200"
              style={{ marginLeft: "5%", marginRight: "5%" }}
            >
              <div
                className="h-full bg-purple-600 transition-all duration-300"
                style={{ width: `${((step - 1) / 2) * 100}%` }}
              />
            </div>

            <div className="relative flex justify-between">
              {[
                {
                  num: 1,
                  label: { id: "Informasi Bisnis", en: "Business Info" },
                },
                {
                  num: 2,
                  label: { id: "Detail Kontak", en: "Contact Details" },
                },
                { num: 3, label: { id: "Tinjauan", en: "Review" } },
              ].map((s) => (
                <div
                  key={s.num}
                  className="flex flex-col items-center"
                  style={{ width: "33.33%" }}
                >
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center z-10 transition-all duration-300 ${
                      step >= s.num
                        ? "bg-purple-600 text-white"
                        : "bg-slate-200 text-slate-400"
                    }`}
                  >
                    {step > s.num ? <CheckCircle className="w-5 h-5" /> : s.num}
                  </div>
                  <span
                    className={`text-sm mt-2 transition-all duration-300 ${
                      step === s.num
                        ? "text-purple-600 font-semibold"
                        : "text-slate-600"
                    }`}
                  >
                    {t(s.label)}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="border-0 shadow-lg">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit}>
                {/* Step 1: Business Information */}
                {step === 1 && (
                  <div className="space-y-6">
                    <h2 className="text-2xl text-slate-900 mb-6">
                      {t({
                        id: "Informasi Bisnis",
                        en: "Business Information",
                      })}
                    </h2>

                    <div>
                      <Label htmlFor="businessName">
                        {t({ id: "Nama Bisnis", en: "Business Name" })}{" "}
                        <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="businessName"
                        value={formData.businessName}
                        onChange={(e) =>
                          handleChange("businessName", e.target.value)
                        }
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="category">
                        {t({ id: "Kategori", en: "Category" })}{" "}
                        <span className="text-red-500">*</span>
                      </Label>
                      <Select
                        value={formData.category}
                        onValueChange={(v) => handleChange("category", v)}
                      >
                        <SelectTrigger>
                          <SelectValue
                            placeholder={t({
                              id: "Pilih kategori",
                              en: "Select category",
                            })}
                          />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="hotel-5">
                            {t({ id: "Hotel Bintang 5", en: "5-Star Hotel" })}
                          </SelectItem>
                          <SelectItem value="hotel-4">
                            {t({ id: "Hotel Bintang 4", en: "4-Star Hotel" })}
                          </SelectItem>
                          <SelectItem value="hotel-3">
                            {t({ id: "Hotel Bintang 3", en: "3-Star Hotel" })}
                          </SelectItem>
                          <SelectItem value="restaurant-high">
                            {t({
                              id: "Restoran - Tinggi",
                              en: "Restaurant - High",
                            })}
                          </SelectItem>
                          <SelectItem value="restaurant-mid">
                            {t({
                              id: "Restoran - Menengah",
                              en: "Restaurant - Mid",
                            })}
                          </SelectItem>
                          <SelectItem value="education">
                            {t({
                              id: "Lembaga Pendidikan",
                              en: "Education Institution",
                            })}
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="address">
                        {t({ id: "Alamat Lengkap", en: "Full Address" })}{" "}
                        <span className="text-red-500">*</span>
                      </Label>
                      <Textarea
                        id="address"
                        rows={3}
                        value={formData.address}
                        onChange={(e) =>
                          handleChange("address", e.target.value)
                        }
                        required
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="phone">
                          {t({ id: "Telepon Bisnis", en: "Business Phone" })}{" "}
                          <span className="text-red-500">*</span>
                        </Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) =>
                            handleChange("phone", e.target.value)
                          }
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">
                          {t({ id: "Email Bisnis", en: "Business Email" })}{" "}
                          <span className="text-red-500">*</span>
                        </Label>
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

                    <div>
                      <Label htmlFor="website">
                        {t({
                          id: "Website (opsional)",
                          en: "Website (optional)",
                        })}
                      </Label>
                      <Input
                        id="website"
                        type="url"
                        value={formData.website}
                        onChange={(e) =>
                          handleChange("website", e.target.value)
                        }
                      />
                    </div>
                  </div>
                )}

                {/* Step 2: Contact Details */}
                {step === 2 && (
                  <div className="space-y-6">
                    <h2 className="text-2xl text-slate-900 mb-6">
                      {t({ id: "Detail Kontak", en: "Contact Details" })}
                    </h2>

                    <div>
                      <Label htmlFor="description">
                        {t({
                          id: "Deskripsi Bisnis",
                          en: "Business Description",
                        })}{" "}
                        <span className="text-red-500">*</span>
                      </Label>
                      <Textarea
                        id="description"
                        rows={5}
                        value={formData.description}
                        onChange={(e) =>
                          handleChange("description", e.target.value)
                        }
                        placeholder={t({
                          id: "Jelaskan bisnis Anda, fasilitas, dan layanan yang ditawarkan...",
                          en: "Describe your business, facilities, and services offered...",
                        })}
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="contactPerson">
                        {t({
                          id: "Nama Kontak Person",
                          en: "Contact Person Name",
                        })}{" "}
                        <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="contactPerson"
                        value={formData.contactPerson}
                        onChange={(e) =>
                          handleChange("contactPerson", e.target.value)
                        }
                        required
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="contactPhone">
                          {t({
                            id: "Telepon Kontak Person",
                            en: "Contact Phone",
                          })}{" "}
                          <span className="text-red-500">*</span>
                        </Label>
                        <Input
                          id="contactPhone"
                          type="tel"
                          value={formData.contactPhone}
                          onChange={(e) =>
                            handleChange("contactPhone", e.target.value)
                          }
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="contactEmail">
                          {t({
                            id: "Email Kontak Person",
                            en: "Contact Email",
                          })}{" "}
                          <span className="text-red-500">*</span>
                        </Label>
                        <Input
                          id="contactEmail"
                          type="email"
                          value={formData.contactEmail}
                          onChange={(e) =>
                            handleChange("contactEmail", e.target.value)
                          }
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="documents">
                        {t({
                          id: "Dokumen Pendukung",
                          en: "Supporting Documents",
                        })}
                      </Label>
                      <div className="border-2 border-dashed border-slate-300 rounded-lg p-8 text-center hover:border-purple-500 transition-colors">
                        <Upload className="w-12 h-12 text-slate-400 mx-auto mb-4" />
                        <p className="text-slate-600 mb-2">
                          {t({
                            id: "Unggah dokumen pendukung",
                            en: "Upload supporting documents",
                          })}
                        </p>
                        <p className="text-sm text-slate-500 mb-4">
                          {t({
                            id: "Izin usaha, NPWP, dan dokumen lainnya (maks. 10MB)",
                            en: "Business license, tax ID, and other documents (max. 10MB)",
                          })}
                        </p>
                        <Input
                          id="documents"
                          type="file"
                          multiple
                          accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                          onChange={handleFileChange}
                          className="max-w-xs mx-auto"
                        />
                      </div>

                      {files.length > 0 && (
                        <div className="mt-4 space-y-2">
                          {files.map((file, index) => (
                            <div
                              key={index}
                              className="flex items-center justify-between p-3 bg-slate-50 rounded-lg"
                            >
                              <div className="flex items-center gap-2">
                                <FileText className="w-4 h-4 text-slate-500" />
                                <span className="text-sm text-slate-700">
                                  {file.name}
                                </span>
                                <span className="text-xs text-slate-500">
                                  ({(file.size / 1024).toFixed(1)} KB)
                                </span>
                              </div>
                              <Button
                                type="button"
                                variant="ghost"
                                size="sm"
                                onClick={() => handleRemoveFile(index)}
                              >
                                <X className="w-4 h-4" />
                              </Button>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {/* Step 3: Review & Validation */}
                {step === 3 && (
                  <div className="space-y-6">
                    <div className="flex items-center justify-between mb-6">
                      <h2 className="text-2xl text-slate-900">
                        {t({ id: "Tinjauan & Kirim", en: "Review & Submit" })}
                      </h2>
                      <div className="flex items-center gap-2 text-sm text-slate-600">
                        <AlertCircle className="w-4 h-4" />
                        {t({
                          id: "Periksa kembali data Anda",
                          en: "Review your data carefully",
                        })}
                      </div>
                    </div>

                    {/* Business Information Section */}
                    <Card className="border-purple-200">
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between mb-4">
                          <h3 className="text-lg font-semibold text-slate-900">
                            {t({
                              id: "Informasi Bisnis",
                              en: "Business Information",
                            })}
                          </h3>
                          <Button
                            type="button"
                            variant="outline"
                            size="sm"
                            onClick={() => handleEditStep(1)}
                            className="text-indigo-600 hover:text-indigo-700 hover:bg-indigo-50"
                          >
                            <Edit2 className="w-4 h-4 mr-1" />
                            {t({ id: "Edit", en: "Edit" })}
                          </Button>
                        </div>
                        <div className="space-y-3">
                          <div className="grid md:grid-cols-2 gap-4">
                            <div>
                              <p className="text-xs text-slate-500 uppercase tracking-wide">
                                {t({ id: "Nama Bisnis", en: "Business Name" })}
                              </p>
                              <p className="text-slate-900 font-medium mt-1">
                                {formData.businessName || (
                                  <span className="text-red-500 italic">
                                    {t({
                                      id: "Belum diisi",
                                      en: "Not filled",
                                    })}
                                  </span>
                                )}
                              </p>
                            </div>
                            <div>
                              <p className="text-xs text-slate-500 uppercase tracking-wide">
                                {t({ id: "Kategori", en: "Category" })}
                              </p>
                              <p className="text-slate-900 font-medium mt-1">
                                {formData.category ? (
                                  getCategoryLabel(formData.category)
                                ) : (
                                  <span className="text-red-500 italic">
                                    {t({
                                      id: "Belum diisi",
                                      en: "Not filled",
                                    })}
                                  </span>
                                )}
                              </p>
                            </div>
                          </div>
                          <div>
                            <p className="text-xs text-slate-500 uppercase tracking-wide">
                              {t({ id: "Alamat", en: "Address" })}
                            </p>
                            <p className="text-slate-900 mt-1">
                              {formData.address || (
                                <span className="text-red-500 italic">
                                  {t({ id: "Belum diisi", en: "Not filled" })}
                                </span>
                              )}
                            </p>
                          </div>
                          <div className="grid md:grid-cols-2 gap-4">
                            <div>
                              <p className="text-xs text-slate-500 uppercase tracking-wide">
                                {t({ id: "Telepon", en: "Phone" })}
                              </p>
                              <p className="text-slate-900 mt-1">
                                {formData.phone || (
                                  <span className="text-red-500 italic">
                                    {t({
                                      id: "Belum diisi",
                                      en: "Not filled",
                                    })}
                                  </span>
                                )}
                              </p>
                            </div>
                            <div>
                              <p className="text-xs text-slate-500 uppercase tracking-wide">
                                Email
                              </p>
                              <p className="text-slate-900 mt-1">
                                {formData.email || (
                                  <span className="text-red-500 italic">
                                    {t({
                                      id: "Belum diisi",
                                      en: "Not filled",
                                    })}
                                  </span>
                                )}
                              </p>
                            </div>
                          </div>
                          {formData.website && (
                            <div>
                              <p className="text-xs text-slate-500 uppercase tracking-wide">
                                Website
                              </p>
                              <p className="text-slate-900 mt-1">
                                {formData.website}
                              </p>
                            </div>
                          )}
                        </div>
                      </CardContent>
                    </Card>

                    {/* Contact Details Section */}
                    <Card className="border-purple-200">
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between mb-4">
                          <h3 className="text-lg font-semibold text-slate-900">
                            {t({ id: "Detail Kontak", en: "Contact Details" })}
                          </h3>
                          <Button
                            type="button"
                            variant="outline"
                            size="sm"
                            onClick={() => handleEditStep(2)}
                            className="text-purple-600 hover:text-purple-700 hover:bg-purple-50"
                          >
                            <Edit2 className="w-4 h-4 mr-1" />
                            {t({ id: "Edit", en: "Edit" })}
                          </Button>
                        </div>
                        <div className="space-y-3">
                          <div>
                            <p className="text-xs text-slate-500 uppercase tracking-wide">
                              {t({ id: "Deskripsi", en: "Description" })}
                            </p>
                            <p className="text-slate-900 mt-1 whitespace-pre-line">
                              {formData.description || (
                                <span className="text-red-500 italic">
                                  {t({ id: "Belum diisi", en: "Not filled" })}
                                </span>
                              )}
                            </p>
                          </div>
                          <div>
                            <p className="text-xs text-slate-500 uppercase tracking-wide">
                              {t({ id: "Kontak Person", en: "Contact Person" })}
                            </p>
                            <p className="text-slate-900 font-medium mt-1">
                              {formData.contactPerson || (
                                <span className="text-red-500 italic">
                                  {t({ id: "Belum diisi", en: "Not filled" })}
                                </span>
                              )}
                            </p>
                          </div>
                          <div className="grid md:grid-cols-2 gap-4">
                            <div>
                              <p className="text-xs text-slate-500 uppercase tracking-wide">
                                {t({
                                  id: "Telepon Kontak",
                                  en: "Contact Phone",
                                })}
                              </p>
                              <p className="text-slate-900 mt-1">
                                {formData.contactPhone || (
                                  <span className="text-red-500 italic">
                                    {t({
                                      id: "Belum diisi",
                                      en: "Not filled",
                                    })}
                                  </span>
                                )}
                              </p>
                            </div>
                            <div>
                              <p className="text-xs text-slate-500 uppercase tracking-wide">
                                {t({
                                  id: "Email Kontak",
                                  en: "Contact Email",
                                })}
                              </p>
                              <p className="text-slate-900 mt-1">
                                {formData.contactEmail || (
                                  <span className="text-red-500 italic">
                                    {t({
                                      id: "Belum diisi",
                                      en: "Not filled",
                                    })}
                                  </span>
                                )}
                              </p>
                            </div>
                          </div>
                          {files.length > 0 && (
                            <div>
                              <p className="text-xs text-slate-500 uppercase tracking-wide mb-2">
                                {t({ id: "Dokumen", en: "Documents" })}
                              </p>
                              <div className="space-y-2">
                                {files.map((file, index) => (
                                  <div
                                    key={index}
                                    className="flex items-center gap-2 text-sm"
                                  >
                                    <FileText className="w-4 h-4 text-purple-600" />
                                    <span className="text-slate-900">
                                      {file.name}
                                    </span>
                                    <span className="text-slate-500">
                                      ({(file.size / 1024).toFixed(1)} KB)
                                    </span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      </CardContent>
                    </Card>

                    {/* Terms and Conditions */}
                    <Card className="border-indigo-200 bg-indigo-50">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-3">
                          <Checkbox
                            id="terms"
                            checked={termsAgreed}
                            onCheckedChange={(checked) =>
                              setTermsAgreed(checked as boolean)
                            }
                            className="mt-1"
                          />
                          <div className="flex-1">
                            <Label
                              htmlFor="terms"
                              className="text-sm text-indigo-900 cursor-pointer"
                            >
                              {t({
                                id: "Saya menyatakan bahwa semua informasi yang diberikan adalah benar, akurat, dan lengkap. Saya memahami bahwa informasi palsu dapat mengakibatkan penolakan atau pembatalan keanggotaan.",
                                en: "I declare that all information provided is true, accurate, and complete. I understand that false information may result in rejection or cancellation of membership.",
                              })}
                            </Label>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    {/* Validation Warning */}
                    {(!formData.businessName ||
                      !formData.category ||
                      !formData.address ||
                      !formData.phone ||
                      !formData.email ||
                      !formData.description ||
                      !formData.contactPerson ||
                      !formData.contactPhone ||
                      !formData.contactEmail) && (
                      <div className="bg-red-50 border border-red-200 rounded-lg p-4 flex items-start gap-3">
                        <AlertCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                        <p className="text-sm text-red-800">
                          {t({
                            id: "Terdapat informasi yang belum lengkap. Silakan klik tombol Edit untuk melengkapi data yang diperlukan.",
                            en: "Some information is incomplete. Please click the Edit button to complete the required data.",
                          })}
                        </p>
                      </div>
                    )}
                  </div>
                )}

                {/* Navigation Buttons */}
                <div className="flex justify-between mt-8">
                  {step > 1 && (
                    <Button
                      type="button"
                      variant="outline"
                      onClick={handleBack}
                    >
                      {t({ id: "Kembali", en: "Back" })}
                    </Button>
                  )}
                  <div className={step === 1 ? "ml-auto" : ""}>
                    {step < 3 ? (
                      <Button
                        type="button"
                        className="bg-purple-600 hover:bg-purple-700"
                        onClick={handleNext}
                      >
                        {t({ id: "Lanjut", en: "Next" })}
                      </Button>
                    ) : (
                      <Button
                        type="submit"
                        className="bg-purple-600 hover:bg-purple-700"
                        disabled={!termsAgreed}
                      >
                        <Send className="w-4 h-4 mr-2" />
                        {t({
                          id: "Kirim Permohonan",
                          en: "Submit Application",
                        })}
                      </Button>
                    )}
                  </div>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
