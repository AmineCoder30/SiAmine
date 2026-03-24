import { useState } from "react";
import { X, MessageCircle, FileText, Loader2, CheckCircle2 } from "lucide-react";
import Button from "@/components/ui/Button";
import { supabase } from "@/lib/supabase";
import { useLanguage } from "@/context/LanguageContext";
import { isValidPhoneNumber } from "@/lib/validators";

type LeadModalProps = {
  isOpen: boolean;
  onClose: () => void;
  plan: any;
  onWhatsAppRedirect: () => void;
};

export default function LeadModal({ isOpen, onClose, plan, onWhatsAppRedirect }: LeadModalProps) {
  const [step, setStep] = useState<"choice" | "form" | "success">("choice");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { t } = useLanguage();

  // Form State
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
    budget: "",
  });
  const [phoneError, setPhoneError] = useState("");

  if (!isOpen) return null;

  const handleWhatsApp = async () => {
    setIsSubmitting(true);
    try {
      if (process.env.NEXT_PUBLIC_SUPABASE_URL) {
        const { error } = await supabase.from("leads").insert([
          {
            plan: plan.name,
            source: "whatsapp",
          },
        ]);
        if (error) throw error;
      }
    } catch (error: any) {
      console.error("Error saving lead:", error);
      alert("Error saving lead: " + (error?.message || "Unknown error"));
    } finally {
      setIsSubmitting(false);
      onWhatsAppRedirect();
      onClose();
    }
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setPhoneError("");

    if (!isValidPhoneNumber(formData.phone)) {
      setPhoneError(isAr ? "الرجاء إدخال رقم هاتف صحيح." : "Please enter a valid phone number.");
      return;
    }

    setIsSubmitting(true);
    try {
      if (process.env.NEXT_PUBLIC_SUPABASE_URL) {
        const { error } = await supabase.from("leads").insert([
          {
            plan: plan.name,
            name: formData.name,
            phone: formData.phone,
            message: formData.message,
            budget: formData.budget,
            source: "form",
          },
        ]);
        if (error) throw error;
      }
      setStep("success");
    } catch (error: any) {
      console.error("Error saving lead:", error);
      // fallback in case of error
      alert("Error saving lead: " + (error?.message || "Something went wrong. Please try again or use WhatsApp."));
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetAndClose = () => {
    setStep("choice");
    setFormData({ name: "", phone: "", message: "", budget: "" });
    setPhoneError("");
    onClose();
  };

  // Basic translations fallback 
  const isAr = document.documentElement.dir === 'rtl';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm">
      <div 
        className="relative w-full max-w-md bg-white rounded-2xl shadow-xl overflow-hidden animate-in fade-in zoom-in-95 duration-200"
        dir={isAr ? "rtl" : "ltr"}
      >
        <button
          onClick={resetAndClose}
          className={`absolute top-4 ${isAr ? 'left-4' : 'right-4'} p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-full transition-colors`}
        >
          <X size={20} />
        </button>

        <div className="p-6 md:p-8">
          <h3 className="text-2xl font-bold font-heading text-slate-900 mb-2">
            {isAr ? "تأكيد الطلب" : "Confirm Request"}
          </h3>
          <p className="text-slate-600 mb-6 text-sm">
            {isAr 
              ? `لقد اخترت خطة ${plan.name}. كيف تفضل المتابعة؟` 
              : `You selected the ${plan.name} plan. How would you like to proceed?`}
          </p>

          {step === "choice" && (
            <div className="space-y-4">
              <button
                onClick={handleWhatsApp}
                disabled={isSubmitting}
                className="w-full relative group flex items-center justify-between p-4 rounded-xl border-2 border-green-500 bg-green-50 hover:bg-green-100 transition-all text-left"
              >
                <div className="flex items-center gap-4">
                  <div className="flex max-h-12 max-w-12 h-12 w-12 shrink-0 items-center justify-center rounded-full bg-green-500 text-white">
                    {isSubmitting ? <Loader2 className="animate-spin" /> : <MessageCircle size={24} />}
                  </div>
                  <div>
                    <h4 className="font-semibold text-green-900">
                      {isAr ? "تواصل عبر واتساب" : "Contact via WhatsApp"}
                    </h4>
                    <p className="text-xs text-green-700 mt-0.5">
                      {isAr ? "أسرع طريقة للتواصل معنا" : "Fastest way to reach us"}
                    </p>
                  </div>
                </div>
              </button>

              <button
                onClick={() => setStep("form")}
                className="w-full relative group flex items-center justify-between p-4 rounded-xl border-2 border-indigo-100 bg-indigo-50/50 hover:bg-indigo-50 transition-all text-left"
              >
                <div className="flex items-center gap-4">
                  <div className="flex max-h-12 max-w-12 h-12 w-12 shrink-0 items-center justify-center rounded-full bg-indigo-100 text-indigo-600">
                    <FileText size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-indigo-900">
                      {isAr ? "إرسال طلب مفصل" : "Send Detailed Request"}
                    </h4>
                    <p className="text-xs text-indigo-700 mt-0.5">
                      {isAr ? "أرسل تفاصيل مشروعك عبر النموذج" : "Submit your project details via form"}
                    </p>
                  </div>
                </div>
              </button>
            </div>
          )}

          {step === "form" && (
            <form onSubmit={handleFormSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  {isAr ? "الاسم" : "Name"}
                </label>
                <input
                  required
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2 rounded-lg border border-slate-200 focus:ring-2 focus:ring-indigo-600 focus:border-transparent outline-none transition-all"
                  placeholder={isAr ? "الاسم الكامل" : "Full Name"}
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  {isAr ? "رقم الهاتف" : "Phone Number"}
                </label>
                <input
                  required
                  type="tel"
                  dir="ltr"
                  value={formData.phone}
                  onChange={(e) => {
                    setFormData({ ...formData, phone: e.target.value });
                    setPhoneError("");
                  }}
                  className={`w-full px-4 py-2 rounded-lg border ${phoneError ? 'border-red-500 focus:ring-red-500' : 'border-slate-200 focus:ring-indigo-600'} focus:ring-2 focus:border-transparent outline-none transition-all`}
                  placeholder="+212 600-000000"
                />
                {phoneError && (
                  <p className="mt-1 text-sm text-red-500">{phoneError}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  {isAr ? "تفاصيل المشروع" : "Project Details"}
                </label>
                <textarea
                  required
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-2 rounded-lg border border-slate-200 focus:ring-2 focus:ring-indigo-600 focus:border-transparent outline-none transition-all resize-none"
                  placeholder={isAr ? "أخبرنا المزيد عن مشروعك..." : "Tell us about your project..."}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  {isAr ? "الميزانية التقريبية (اختياري)" : "Estimated Budget (Optional)"}
                </label>
                <input
                  type="text"
                  value={formData.budget}
                  onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                  className="w-full px-4 py-2 rounded-lg border border-slate-200 focus:ring-2 focus:ring-indigo-600 focus:border-transparent outline-none transition-all"
                  placeholder="$1000 - $3000"
                />
              </div>

              <div className="flex gap-3 pt-2">
                <Button
                  type="button"
                  variant="secondary"
                  onClick={() => setStep("choice")}
                  className="w-full justify-center"
                >
                  {isAr ? "رجوع" : "Back"}
                </Button>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full justify-center"
                >
                  {isSubmitting ? <Loader2 className="animate-spin" size={20} /> : (isAr ? "إرسال" : "Submit")}
                </Button>
              </div>
            </form>
          )}

          {step === "success" && (
            <div className="text-center py-6">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 text-green-500 mb-4">
                <CheckCircle2 size={32} />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-2">
                {isAr ? "تم إرسال طلبك بنجاح!" : "Request Sent Successfully!"}
              </h4>
              <p className="text-slate-600 mb-6">
                {isAr 
                  ? "سنتواصل معك في أقرب وقت ممكن لمناقشة التفاصيل." 
                  : "We will get back to you as soon as possible to discuss the details."}
              </p>
              <Button onClick={resetAndClose} className="w-full justify-center">
                {isAr ? "إغلاق" : "Close"}
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
