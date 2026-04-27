"use client";

import { FormEvent, useState, type ChangeEvent } from "react";
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

      // Clear the form on success
      setForm(initialFormState);
    } catch (error) {
      console.error("Submission error:", error);

      // Show an error toast if something goes wrong
      toast.error("Failed to send message.", {
        description: "Please try again later or contact us directly.",
      });
    } finally {
      // Ensure the button is re-enabled whether it succeeds or fails
      setSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <div className="space-y-2">
          <Label htmlFor="firstName">First Name <span className="text-red-600">*</span></Label>
          <Input
            id="firstName"
            name="firstName"
            placeholder="John"
            required
            maxLength={100}
            value={form.firstName}
            onChange={handleChange}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="lastName">Last Name <span className="text-red-600">*</span></Label>
          <Input
            id="lastName"
            name="lastName"
            placeholder="Doe"
            required
            maxLength={100}
            value={form.lastName}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="email">Email <span className="text-red-600">*</span></Label>
        <Input
          id="email"
          name="email"
          type="email"
          placeholder="john@example.com"
          required
          maxLength={255}
          value={form.email}
          onChange={handleChange}
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="subject">Subject <span className="text-red-600">*</span></Label>
        <Input
          id="subject"
          name="subject"
          placeholder="How can we help?"
          required
          maxLength={200}
          value={form.subject}
          onChange={handleChange}
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="message">Message <span className="text-red-600">*</span></Label>
        <Textarea
          id="message"
          name="message"
          placeholder="Your message..."
          required
          maxLength={2000}
          rows={5}
          value={form.message}
          onChange={handleChange}
        />
      </div>
      <Button
        type="submit"
        className="w-full rounded-full"
        size="lg"
        disabled={submitting}
      >
        {submitting ? "Sending..." : "Send Message"}
      </Button>
    </form>
  );
};

export default ContactForm;