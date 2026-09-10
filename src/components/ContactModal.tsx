import React, { useState } from 'react';
import { 
  X, 
  Mail, 
  Send, 
  CheckCircle2, 
  Droplets, 
  Sparkles,
  Building,
  User,
  Phone,
  MessageSquare
} from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultProduct?: string;
}

export const ContactModal: React.FC<ContactModalProps> = ({ 
  isOpen, 
  onClose,
  defaultProduct = 'The Nabaa Tankers (Flagship)'
}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [product, setProduct] = useState(defaultProduct);
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setName('');
    setEmail('');
    setPhone('');
    setMessage('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 dark:bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="w-full max-w-lg rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700/80 shadow-2xl p-6 sm:p-8 relative text-slate-800 dark:text-slate-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-500 dark:text-slate-300 flex items-center justify-center transition-colors"
        >
          <X className="w-4 h-4" />
        </button>

        {!submitted ? (
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-cyan-700 dark:text-cyan-400 uppercase font-bold mb-2">
              <Mail className="w-4 h-4" /> Contact & Demo Inquiry
            </div>

            <h3 className="text-2xl font-bold text-slate-900 dark:text-white font-display">
              Connect with Neo Tech Era
            </h3>

            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-1 mb-6">
              Schedule a product walkthrough or discuss enterprise licensing for your fleet or business.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              <div>
                <label className="text-slate-700 dark:text-slate-300 font-semibold block mb-1">
                  Full Name
                </label>
                <div className="relative">
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Faisal Al-Harbi"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:border-cyan-500 focus:outline-none focus:bg-white dark:focus:bg-slate-950"
                  />
                  <User className="w-4 h-4 text-slate-400 dark:text-slate-500 absolute right-3 top-2.5" />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-slate-700 dark:text-slate-300 font-semibold block mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="faisal@example.com"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:border-cyan-500 focus:outline-none focus:bg-white dark:focus:bg-slate-950"
                  />
                </div>
                <div>
                  <label className="text-slate-700 dark:text-slate-300 font-semibold block mb-1">
                    Phone / WhatsApp
                  </label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+966 5X XXX XXXX"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:border-cyan-500 focus:outline-none focus:bg-white dark:focus:bg-slate-950"
                  />
                </div>
              </div>

              <div>
                <label className="text-slate-700 dark:text-slate-300 font-semibold block mb-1">
                  Product of Interest
                </label>
                <select
                  value={product}
                  onChange={(e) => setProduct(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:border-cyan-500 focus:outline-none focus:bg-white dark:focus:bg-slate-950"
                >
                  <option value="The Nabaa Tankers (Flagship)">The Nabaa Tankers (Flagship Water Delivery Platform)</option>
                  <option value="Pix Shield">Pix Shield (Image Watermarking & Protection)</option>
                  <option value="Price Post Pulser">Price Post Pulser (Dynamic Price Post Creator)</option>
                  <option value="E-Commerce Post Builder">E-Commerce Post Builder (Online Store Visuals)</option>
                  <option value="General Enterprise Software Solutions">General Enterprise Software Solutions</option>
                </select>
              </div>

              <div>
                <label className="text-slate-700 dark:text-slate-300 font-semibold block mb-1">
                  Message / Requirements
                </label>
                <textarea
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell us about your fleet size, commercial needs, or launch timeline..."
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:border-cyan-500 focus:outline-none focus:bg-white dark:focus:bg-slate-950"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/25 transition-all active:scale-98"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Inquiry to Neo Tech Era</span>
                </button>
              </div>

              <div className="text-center text-[11px] text-slate-500 dark:text-slate-400 pt-1">
                Direct contact: <a href="mailto:techeraneo@gmail.com" className="text-cyan-600 dark:text-cyan-400 underline">techeraneo@gmail.com</a>
              </div>
            </form>
          </div>
        ) : (
          <div className="text-center py-6 space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 border-2 border-emerald-500 mx-auto flex items-center justify-center text-emerald-600 dark:text-emerald-300">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
              Inquiry Received!
            </h3>

            <p className="text-sm text-slate-600 dark:text-slate-300 max-w-sm mx-auto">
              Thank you, <span className="font-semibold text-slate-900 dark:text-white">{name}</span>. The Neo Tech Era team has logged your request regarding <span className="text-cyan-600 dark:text-cyan-300 font-semibold">{product}</span>. We will follow up via email at <span className="text-slate-900 dark:text-white font-mono">{email}</span> within 24 business hours.
            </p>

            <div className="pt-4">
              <button
                onClick={handleReset}
                className="px-6 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 font-bold text-xs"
              >
                Close Window
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
