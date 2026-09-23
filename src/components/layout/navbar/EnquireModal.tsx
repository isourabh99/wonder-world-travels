"use client";

import React, { useState, useEffect } from "react";
import { X, Send, User, Phone, Mail, MapPin, Calendar, CheckCircle2, Sparkles, MessageSquare } from "lucide-react";
import { ShimmerButton } from "@/components/ui/button";

interface EnquireModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const EnquireModal: React.FC<EnquireModalProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    destination: "Char Dham Yatra Packages 2026",
    travelDate: "",
    message: "",
  });

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 500);
  };

  const handleResetAndClose = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden flex justify-end">
      {/* Dimmed Backdrop */}
      <div
        className="fixed inset-0 bg-slate-950/60 backdrop-blur-xs transition-opacity duration-300"
        onClick={onClose}
      />

      {/* 100vh Non-Scrollable Right Side Panel */}
      <div className="relative w-full max-w-md bg-white h-screen h-[100vh] max-h-screen shadow-2xl z-10 flex flex-col justify-between overflow-hidden animate-slide-left border-l border-border">
        {/* Header (Shrink-0) */}
        <div className="bg-slate-900 text-white px-4 sm:px-5 py-3.5 flex items-center justify-between flex-nowrap shrink-0 border-b border-white/10">
          <div className="space-y-0.5 min-w-0 pr-2">
            <div className="flex items-center gap-2">
              <h3 className="font-serif text-lg font-bold tracking-tight text-white">
                Enquire Now
              </h3>
              <span className="text-[10px] bg-sky-500/20 text-sky-300 font-semibold px-2 py-0.5 rounded-full border border-sky-400/30 flex items-center gap-1 shrink-0">
                <Sparkles className="w-2.5 h-2.5" /> 30 Min Response
              </span>
            </div>
            <p className="text-[11px] text-slate-300 truncate">
              Get custom itineraries & lowest price estimate
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-xl bg-white/15 hover:bg-white/25 text-white transition-colors focus:outline-none shrink-0 cursor-pointer border border-white/20 shadow-xs"
            aria-label="Close modal"
          >
            <X className="w-5 h-5 stroke-[2.5] text-white" />
          </button>
        </div>

        {/* 1-Column Non-Scrollable Form Content */}
        <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between bg-gradient-to-b from-slate-50/50 to-white overflow-hidden">
          {submitted ? (
            <div className="my-auto text-center space-y-4 py-8">
              <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner animate-bounce-short">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="font-serif text-xl font-bold text-foreground">
                Enquiry Received!
              </h4>
              <p className="text-xs text-muted max-w-xs mx-auto leading-relaxed">
                Thank you, <strong className="text-foreground">{formData.name || "Guest"}</strong>! Our senior travel expert will call you on <strong className="text-foreground">{formData.phone || "your phone"}</strong> shortly with exclusive quotes.
              </p>
              <div className="pt-4">
                <ShimmerButton
                  fullWidth
                  size="md"
                  onClick={handleResetAndClose}
                >
                  Close Window
                </ShimmerButton>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="h-full flex flex-col justify-between space-y-2.5">
              {/* Field 1: Full Name */}
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-600 mb-1">
                  Full Name <span className="text-rose-500">*</span>
                </label>
                <div className="relative">
                  <User className="w-3.5 h-3.5 text-muted absolute left-3 top-2.5" />
                  <input
                    type="text"
                    required
                    placeholder="Rahul Sharma"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full pl-8 pr-3 py-2 text-xs bg-white border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                  />
                </div>
              </div>

              {/* Field 2: Phone / WhatsApp */}
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-600 mb-1">
                  Phone / WhatsApp Number <span className="text-rose-500">*</span>
                </label>
                <div className="relative">
                  <Phone className="w-3.5 h-3.5 text-muted absolute left-3 top-2.5" />
                  <input
                    type="tel"
                    required
                    placeholder="+91 85888-24351"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full pl-8 pr-3 py-2 text-xs bg-white border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                  />
                </div>
              </div>

              {/* Field 3: Email Address */}
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-600 mb-1">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="w-3.5 h-3.5 text-muted absolute left-3 top-2.5" />
                  <input
                    type="email"
                    placeholder="name@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full pl-8 pr-3 py-2 text-xs bg-white border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                  />
                </div>
              </div>

              {/* Field 4: Package / Destination */}
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-600 mb-1">
                  Package / Destination
                </label>
                <div className="relative">
                  <MapPin className="w-3.5 h-3.5 text-muted absolute left-3 top-2.5 pointer-events-none" />
                  <select
                    value={formData.destination}
                    onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                    className="w-full pl-8 pr-3 py-2 text-xs bg-white border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all appearance-none text-slate-900 truncate"
                  >
                    <optgroup label="Pilgrimage Yatra">
                      <option value="Amarnath Yatra Packages 2026">Amarnath Yatra 2026</option>
                      <option value="Vaishnodevi Yatra 2026">Vaishnodevi Yatra 2026</option>
                      <option value="Kailash Mansarovar Yatra 2026">Kailash Mansarovar 2026</option>
                      <option value="Char Dham Yatra Packages 2026">Char Dham Yatra 2026</option>
                    </optgroup>
                    <optgroup label="India Packages">
                      <option value="North East India Tour Packages">North East India Packages</option>
                      <option value="West India Packages">West India Packages</option>
                      <option value="South India Packages">South India Packages</option>
                      <option value="North India Packages">North India Packages</option>
                      <option value="Kashmir Special">Kashmir Special</option>
                      <option value="Shimla - Manali Tour Packages">Shimla - Manali Packages</option>
                    </optgroup>
                    <optgroup label="International">
                      <option value="Bali Holidays - 4 Nights">Bali Holidays - 4 Nights</option>
                      <option value="Dubai Honeymoon Tour">Dubai Honeymoon Tour</option>
                      <option value="Europe Tour Packages">Europe Tour Packages</option>
                      <option value="Thailand">Thailand Tour Packages</option>
                      <option value="Phuket - Krabi">Phuket - Krabi</option>
                      <option value="Bhutan Ex-Paro">Bhutan Ex-Paro</option>
                      <option value="Sri Lanka - 5 Days Holiday">Sri Lanka - 5 Days Holiday</option>
                      <option value="Singapore">Singapore</option>
                      <option value="Malaysia">Malaysia</option>
                      <option value="Nepal">Nepal</option>
                      <option value="Mauritius">Mauritius</option>
                    </optgroup>
                  </select>
                </div>
              </div>

              {/* Field 5: Travel Month / Date */}
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-600 mb-1">
                  Travel Month / Date
                </label>
                <div className="relative">
                  <Calendar className="w-3.5 h-3.5 text-muted absolute left-3 top-2.5" />
                  <input
                    type="text"
                    placeholder="e.g. Oct 2026"
                    value={formData.travelDate}
                    onChange={(e) => setFormData({ ...formData, travelDate: e.target.value })}
                    className="w-full pl-8 pr-3 py-2 text-xs bg-white border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                  />
                </div>
              </div>

              {/* Field 6: Custom Requirements / Message */}
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-600 mb-1">
                  Custom Requirements / Message
                </label>
                <div className="relative">
                  <MessageSquare className="w-3.5 h-3.5 text-muted absolute left-3 top-2.5" />
                  <textarea
                    rows={2}
                    placeholder="Tell us your preferences, hotel category..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full pl-8 pr-3 py-2 text-xs bg-white border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all resize-none"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-1">
                <ShimmerButton
                  type="submit"
                  fullWidth
                  size="md"
                  disabled={loading}
                  icon={<Send className="w-3.5 h-3.5 text-sky-300 shrink-0" />}
                >
                  {loading ? "Submitting..." : "Submit Enquiry"}
                </ShimmerButton>
              </div>
            </form>
          )}
        </div>

        {/* Footer Guarantee (Shrink-0) */}
        <div className="px-4 py-2.5 bg-slate-100 border-t border-border text-center text-[11px] text-muted shrink-0">
          🔒 Your details are 100% confidential & protected.
        </div>
      </div>
    </div>
  );
};
