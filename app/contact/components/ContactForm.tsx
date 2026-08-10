"use client";

import { useState, type ChangeEvent } from "react";
import { toast } from "sonner";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { submitContactMessage } from "@/lib/strapi";

interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  subject: string;
  message: string;
}

const initialFormState: ContactFormData = {
  firstName: "",
  lastName: "",
  email: "",
  subject: "",
  message: "",
};

const ContactForm = () => {
  const [form, setForm] = useState<ContactFormData>(initialFormState);
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      await submitContactMessage(form);
      toast.success("Message sent successfully!", {
        description: "We'll get back to you shortly.",
      });
      setForm(initialFormState);
    } catch (error) {
      console.error("Submission error:", error);
      toast.error("Failed to send message.", {
        description: "Please try again later or contact us directly.",
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid sm:grid-cols-2 gap-6">
        <div className="space-y-2.5">
          <Label htmlFor="firstName" className="font-semibold text-foreground">
            First Name <span className="text-red-500">*</span>
          </Label>
          <Input
            id="firstName"
            name="firstName"
            required
            maxLength={100}
            value={form.firstName}
            onChange={handleChange}
            className="bg-white rounded-xl border-gray-200 focus-visible:ring-[#3B73AC]"
          />
        </div>
        <div className="space-y-2.5">
          <Label htmlFor="lastName" className="font-semibold text-foreground">
            Last Name <span className="text-red-500">*</span>
          </Label>
          <Input
            id="lastName"
            name="lastName"
            required
            maxLength={100}
            value={form.lastName}
            onChange={handleChange}
            className="bg-white rounded-xl border-gray-200 focus-visible:ring-[#3B73AC]"
          />
        </div>
      </div>
      
      <div className="space-y-2.5">
        <Label htmlFor="email" className="font-semibold text-foreground">
          Email <span className="text-red-500">*</span>
        </Label>
        <Input
          id="email"
          name="email"
          type="email"
          required
          maxLength={255}
          value={form.email}
          onChange={handleChange}
          className="bg-white rounded-xl border-gray-200 focus-visible:ring-[#3B73AC]"
        />
      </div>
      
      <div className="space-y-2.5">
        <Label htmlFor="subject" className="font-semibold text-foreground">
          Subject <span className="text-red-500">*</span>
        </Label>
        <Input
          id="subject"
          name="subject"
          required
          maxLength={200}
          value={form.subject}
          onChange={handleChange}
          className="bg-white rounded-xl border-gray-200 focus-visible:ring-[#3B73AC]"
        />
      </div>
      
      <div className="space-y-2.5">
        <Label htmlFor="message" className="font-semibold text-foreground">
          Message <span className="text-red-500">*</span>
        </Label>
        <Textarea
          id="message"
          name="message"
          required
          maxLength={2000}
          rows={5}
          value={form.message}
          onChange={handleChange}
          className="bg-white rounded-xl border-gray-200 focus-visible:ring-[#3B73AC] resize-y"
        />
      </div>
      
      <Button
        type="submit"
        className="w-full rounded-full bg-[#3B73AC] hover:bg-[#294e74] text-white py-6 mt-4"
        size="lg"
        disabled={submitting}
      >
        {submitting ? "Sending..." : "Send Message"}
      </Button>
    </form>
  );
};

export default ContactForm;