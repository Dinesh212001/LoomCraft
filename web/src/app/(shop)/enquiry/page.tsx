"use client";

import { useState, type FormEvent, type ChangeEvent } from "react";
import {
  ArrowRight,
  Mail,
  Phone,
  MessageCircle,
  MapPin,
  Clock,
  CheckCircle2,
  Send,
} from "lucide-react";

const BUSINESS_PHONE = "+917865034567";
const DISPLAY_PHONE = "+91 78650 34567";
const BUSINESS_EMAIL = "hello@aaranya.com";

type EnquiryForm = {
  fullName: string;
  email: string;
  phone: string;
  enquiryType: string;
  category: string;
  productName: string;
  quantity: string;
  budget: string;
  contactMethod: string;
  message: string;
  consent: boolean;
};

const initialForm: EnquiryForm = {
  fullName: "",
  email: "",
  phone: "",
  enquiryType: "",
  category: "",
  productName: "",
  quantity: "1",
  budget: "",
  contactMethod: "WhatsApp",
  message: "",
  consent: false,
};

export default function EnquiryPage() {
  const [form, setForm] = useState<EnquiryForm>(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const target = event.target;
    const { name, value } = target;

    setForm((current) => ({
      ...current,
      [name]:
        target instanceof HTMLInputElement && target.type === "checkbox"
          ? target.checked
          : value,
    }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");

    if (!/^[0-9]{10}$/.test(form.phone)) {
      setError("Enter a valid 10-digit mobile number.");
      return;
    }

    if (!form.consent) {
      setError("Please agree to the privacy consent before submitting.");
      return;
    }

    const enquiryText = [
      "AARANYA CUSTOMER ENQUIRY",
      "-----------------------",
      `Name: ${form.fullName}`,
      `Email: ${form.email}`,
      `Mobile: ${form.phone}`,
      `Enquiry type: ${form.enquiryType}`,
      `Category: ${form.category || "Not specified"}`,
      `Product: ${form.productName || "Not specified"}`,
      `Quantity: ${form.quantity || "Not specified"}`,
      `Budget: ${form.budget || "Not specified"}`,
      `Preferred contact: ${form.contactMethod}`,
      "",
      "Message:",
      form.message,
    ].join("\n");

    const subject = encodeURIComponent(`AARANYA Enquiry - ${form.enquiryType}`);
    const body = encodeURIComponent(enquiryText);

    if (form.contactMethod === "WhatsApp") {
      const whatsappUrl = `https://wa.me/${BUSINESS_PHONE.replace("+", "")}?text=${body}`;
      window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    } else if (form.contactMethod === "Phone") {
      const phoneUrl = `tel:${BUSINESS_PHONE}`;
      window.location.href = phoneUrl;
    } else {
      window.location.href = `mailto:${BUSINESS_EMAIL}?subject=${subject}&body=${body}`;
    }

    setSubmitted(true);
  };

  const inputClass =
    "w-full rounded-sm border-0 border-b border-[#cbb9a7] bg-transparent px-0 py-3 text-sm text-[#351e23] outline-none transition placeholder:italic placeholder:text-[#a18c7d] focus:border-[#632d35] focus:ring-0";

  const labelClass =
    "mb-2 block text-[11px] font-semibold uppercase tracking-[0.2em] text-[#632d35]";

  return (
    <main className="min-h-screen bg-[#f5eedf] text-[#351e23]">
      <section className="mx-auto max-w-[1200px] px-5 py-14 sm:px-8 md:py-20 lg:px-14">
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
          {/* Introduction and contact details */}
          <div className="flex flex-col">
            <div className="flex items-center gap-3 text-[#a47748]">
              <span className="text-2xl">✿</span>
              <span className="font-serif text-xl italic">say hello</span>
            </div>

            <h1 className="mt-5 font-serif text-5xl font-normal leading-[1.08] tracking-tight sm:text-6xl">
              Send Us a <span className="italic text-[#b66c76]">Note</span>
            </h1>

            <p className="mt-7 max-w-lg font-serif text-lg italic leading-8 text-[#62464a] sm:text-xl">
              Have a question about our handloom collections, a special request,
              or need help choosing the perfect piece? We would love to hear from you.
            </p>

            <div className="my-10 flex max-w-xs items-center gap-3 text-[#a47748]" aria-hidden="true">
              <span className="h-px flex-1 bg-[#cbb9a7]" />
              <span className="text-xl">✧</span>
              <span className="h-px flex-1 bg-[#cbb9a7]" />
            </div>

            <div className="space-y-7 border-t border-[#d9cbb8] pt-8">
              <div className="flex gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#eadfce] text-[#632d35]">
                  <Phone size={17} />
                </span>
                <div>
                  <h2 className="font-serif text-lg italic">Call Us</h2>
                  <a
                    href={`tel:${BUSINESS_PHONE}`}
                    className="mt-1 inline-block text-sm text-[#806a5e] underline-offset-4 hover:text-[#632d35] hover:underline"
                  >
                    {DISPLAY_PHONE}
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#eadfce] text-[#632d35]">
                  <Mail size={17} />
                </span>
                <div>
                  <h2 className="font-serif text-lg italic">Email Us</h2>
                  <a
                    href={`mailto:${BUSINESS_EMAIL}`}
                    className="mt-1 inline-block text-sm text-[#806a5e] underline-offset-4 hover:text-[#632d35] hover:underline"
                  >
                    {BUSINESS_EMAIL}
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#eadfce] text-[#632d35]">
                  <MessageCircle size={17} />
                </span>
                <div>
                  <h2 className="font-serif text-lg italic">WhatsApp</h2>
                  <a
                    href={`https://wa.me/${BUSINESS_PHONE.replace("+", "")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 inline-block text-sm text-[#806a5e] underline-offset-4 hover:text-[#632d35] hover:underline"
                  >
                    Chat with our team
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#eadfce] text-[#632d35]">
                  <Clock size={17} />
                </span>
                <div>
                  <h2 className="font-serif text-lg italic">Business Hours</h2>
                  <p className="mt-1 text-sm text-[#806a5e]">
                    Monday – Saturday, 9:00 AM – 6:00 PM
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#eadfce] text-[#632d35]">
                  <MapPin size={17} />
                </span>
                <div>
                  <h2 className="font-serif text-lg italic">AARANYA</h2>
                  <p className="mt-1 text-sm text-[#806a5e]">
                    The Art of Handloom
                  </p>
                </div>
              </div>
            </div>

            <p className="mt-10 font-serif text-sm italic text-[#a18c7d]">
              Crafted with tradition, woven with love.
            </p>
          </div>

          {/* Enquiry form */}
          <div className="bg-[#fffdf9]/70 p-6 shadow-[0_12px_45px_rgba(75,45,38,0.06)] sm:p-9 md:p-11">
            {submitted ? (
              <div className="flex min-h-[560px] flex-col items-center justify-center text-center">
                <span className="flex h-16 w-16 items-center justify-center rounded-full bg-[#eadfce] text-[#632d35]">
                  <CheckCircle2 size={34} />
                </span>
                <h2 className="mt-7 font-serif text-4xl italic">Thank You!</h2>
                <p className="mt-4 max-w-md text-sm leading-7 text-[#806a5e]">
                  Your enquiry details have been prepared for your selected contact
                  method. If your email or WhatsApp app did not open, please contact
                  us directly using the details on this page.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setForm(initialForm);
                    setSubmitted(false);
                    setError("");
                  }}
                  className="mt-8 border border-[#632d35] bg-[#632d35] px-8 py-3 text-sm text-white transition hover:bg-transparent hover:text-[#632d35]"
                >
                  Send Another Enquiry
                </button>
              </div>
            ) : (
              <>
                <div className="mb-9">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#a47748]">
                    Customer Enquiry
                  </p>
                  <h2 className="mt-3 font-serif text-3xl sm:text-4xl">
                    How can we help?
                  </h2>
                  <p className="mt-3 text-sm leading-6 text-[#806a5e]">
                    Complete the details below. Fields marked * are required.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-7">
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div>
                      <label htmlFor="fullName" className={labelClass}>Full Name *</label>
                      <input
                        id="fullName"
                        name="fullName"
                        value={form.fullName}
                        onChange={handleChange}
                        className={inputClass}
                        placeholder="Your full name"
                        autoComplete="name"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className={labelClass}>Email Address *</label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                        className={inputClass}
                        placeholder="you@example.com"
                        autoComplete="email"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className={labelClass}>Mobile Number *</label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        inputMode="numeric"
                        pattern="[0-9]{10}"
                        maxLength={10}
                        value={form.phone}
                        onChange={handleChange}
                        className={inputClass}
                        placeholder="10-digit mobile number"
                        autoComplete="tel-national"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="contactMethod" className={labelClass}>Preferred Contact *</label>
                      <select
                        id="contactMethod"
                        name="contactMethod"
                        value={form.contactMethod}
                        onChange={handleChange}
                        className={inputClass}
                        required
                      >
                        <option value="WhatsApp">WhatsApp</option>
                        <option value="Email">Email</option>
                        <option value="Phone">Phone call</option>
                      </select>
                    </div>
                  </div>

                  <div className="border-t border-[#e8ded2] pt-7">
                    <h3 className="mb-6 font-serif text-xl italic text-[#632d35]">
                      Enquiry Details
                    </h3>

                    <div className="grid gap-6 sm:grid-cols-2">
                      <div>
                        <label htmlFor="enquiryType" className={labelClass}>Enquiry Type *</label>
                        <select
                          id="enquiryType"
                          name="enquiryType"
                          value={form.enquiryType}
                          onChange={handleChange}
                          className={inputClass}
                          required
                        >
                          <option value="">Choose enquiry type</option>
                          <option value="Product enquiry">Product enquiry</option>
                          <option value="Bulk order">Bulk order</option>
                          <option value="Customisation">Customisation</option>
                          <option value="Order support">Order support</option>
                          <option value="Shipping and delivery">Shipping and delivery</option>
                          <option value="Return or exchange">Return or exchange</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>

                      <div>
                        <label htmlFor="category" className={labelClass}>Product Category</label>
                        <select
                          id="category"
                          name="category"
                          value={form.category}
                          onChange={handleChange}
                          className={inputClass}
                        >
                          <option value="">Select category</option>
                          <option value="Silk Sarees">Silk Sarees</option>
                          <option value="Cotton Sarees">Cotton Sarees</option>
                          <option value="Linen Sarees">Linen Sarees</option>
                          <option value="Dupattas">Dupattas</option>
                          <option value="Blouse Materials">Blouse Materials</option>
                          <option value="Men's Veshti">Men's Veshti</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>

                      <div>
                        <label htmlFor="productName" className={labelClass}>Product Name</label>
                        <input
                          id="productName"
                          name="productName"
                          value={form.productName}
                          onChange={handleChange}
                          className={inputClass}
                          placeholder="Product name (if known)"
                        />
                      </div>

                      <div>
                        <label htmlFor="quantity" className={labelClass}>Quantity</label>
                        <input
                          id="quantity"
                          name="quantity"
                          type="number"
                          min="1"
                          max="10000"
                          value={form.quantity}
                          onChange={handleChange}
                          className={inputClass}
                          required
                        />
                      </div>

                      <div className="sm:col-span-2">
                        <label htmlFor="budget" className={labelClass}>Approximate Budget</label>
                        <select
                          id="budget"
                          name="budget"
                          value={form.budget}
                          onChange={handleChange}
                          className={inputClass}
                        >
                          <option value="">Choose budget range</option>
                          <option value="Below ₹2,000">Below ₹2,000</option>
                          <option value="₹2,000 – ₹5,000">₹2,000 – ₹5,000</option>
                          <option value="₹5,000 – ₹10,000">₹5,000 – ₹10,000</option>
                          <option value="₹10,000 – ₹25,000">₹10,000 – ₹25,000</option>
                          <option value="₹25,000 – ₹50,000">₹25,000 – ₹50,000</option>
                          <option value="Above ₹50,000">Above ₹50,000</option>
                          <option value="Flexible">Flexible</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className={labelClass}>Your Message *</label>
                    <textarea
                      id="message"
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={5}
                      maxLength={1000}
                      className={`${inputClass} resize-y`}
                      placeholder="Tell us about your requirements..."
                      required
                    />
                    <p className="mt-2 text-right text-[11px] text-[#a18c7d]">
                      {form.message.length}/1000 characters
                    </p>
                  </div>

                  <label className="flex cursor-pointer items-start gap-3 text-xs leading-6 text-[#806a5e]">
                    <input
                      type="checkbox"
                      name="consent"
                      checked={form.consent}
                      onChange={handleChange}
                      className="mt-1 h-4 w-4 accent-[#632d35]"
                      required
                    />
                    <span>
                      I agree that AARANYA may use these details to respond to my
                      enquiry. I have not included passwords or payment information.
                    </span>
                  </label>

                  {error && (
                    <p role="alert" className="rounded bg-red-50 px-4 py-3 text-sm text-red-700">
                      {error}
                    </p>
                  )}

                  <button
                    type="submit"
                    className="group inline-flex items-center gap-4 bg-[#783b4b] px-8 py-4 font-serif text-sm italic tracking-wide text-white transition hover:bg-[#632d35]"
                  >
                    Send Enquiry
                    <ArrowRight size={17} className="transition-transform group-hover:translate-x-1" />
                  </button>

                  <p className="text-[11px] leading-5 text-[#a18c7d]">
                    Selecting WhatsApp or Email opens the relevant app with your
                    enquiry pre-filled. Phone preference starts a call to AARANYA.
                  </p>
                </form>
              </>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
