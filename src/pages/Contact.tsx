import { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import Reveal from "../components/Reveal";
import { supabase } from "../lib/supabase";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const { error } = await supabase
        .from("contact_submissions")
        .insert([formData]);

      if (error) throw error;

      setSubmitStatus("success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("Error submitting contact form:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: "1-614-707-8499",
      subdetails: "Available 24/7",
      link: "tel:+16147078499",
    },
    {
      icon: Mail,
      title: "Email",
      details: "info@otztransportation.com",
      subdetails: "We reply within 24 hours",
      link: "mailto:info@otztransportation.com  ",
    },
    {
      icon: MapPin,
      title: "Address",
      details: "2962 Wildflower Trl Dublin, OH 43017",
      subdetails: "Ohio, OH 43017",
      link: "https://maps.app.goo.gl/WaaNugU7bUnVq3yY9",
    },
    {
      icon: Clock,
      title: "Office Hours",
      details: "Mon-Fri: 8:00 AM - 6:00 PM",
      subdetails: "Sat: 9:00 AM - 2:00 PM",
      link: null,
    },
  ];

  return (
    <div className="min-h-screen">
      <Reveal>
        <section className="relative h-[400px] bg-gradient-to-br from-blue-900 to-blue-700 text-white">
          <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/11087837/pexels-photo-11087837.jpeg')] bg-cover bg-center opacity-20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
            <div className="max-w-3xl">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Contact Us
              </h1>
              <p className="text-xl text-blue-100 leading-relaxed">
                Get in touch with our team for any questions or inquiries
              </p>
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal>
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-xl border-2 border-gray-100 hover:border-blue-300 transition-all hover:shadow-lg"
                >
                  <div className="bg-blue-900 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <info.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {info.title}
                  </h3>
                  {info.link ? (
                    <a
                      href={info.link}
                      className="text-blue-900 font-medium hover:text-blue-700 transition-colors"
                      target={
                        info.link.startsWith("http") ? "_blank" : undefined
                      }
                      rel={
                        info.link.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
                    >
                      {info.details}
                    </a>
                  ) : (
                    <p className="text-gray-900 font-medium">{info.details}</p>
                  )}
                  <p className="text-sm text-gray-600 mt-1">
                    {info.subdetails}
                  </p>
                </div>
              ))}
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Send Us a Message
                </h2>
                <p className="text-gray-700 mb-8 leading-relaxed">
                  Have a question about our services? Need assistance with an
                  existing shipment? Fill out the form and our team will get
                  back to you as soon as possible.
                </p>

                {submitStatus === "success" && (
                  <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-green-900">
                        Message Sent!
                      </h3>
                      <p className="text-green-700 text-sm">
                        Thank you for contacting us. We'll respond to your
                        inquiry shortly.
                      </p>
                    </div>
                  </div>
                )}

                {submitStatus === "error" && (
                  <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-start gap-3">
                    <AlertCircle className="h-6 w-6 text-red-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-red-900">
                        Submission Failed
                      </h3>
                      <p className="text-red-700 text-sm">
                        There was an error sending your message. Please try
                        again or call us directly.
                      </p>
                    </div>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-semibold text-gray-700 mb-2"
                      >
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-semibold text-gray-700 mb-2"
                      >
                        Phone Number (Optional)
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">Select a subject</option>
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Quote Request">Quote Request</option>
                      <option value="Shipment Tracking">
                        Shipment Tracking
                      </option>
                      <option value="Customer Service">Customer Service</option>
                      <option value="Driver Recruitment">
                        Driver Recruitment
                      </option>
                      <option value="Partnership Opportunities">
                        Partnership Opportunities
                      </option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us how we can help you..."
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-orange-500 text-white font-semibold py-4 rounded-lg hover:bg-orange-600 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </button>
                </form>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Our Location
                </h2>
                <div className="bg-gray-200 rounded-2xl overflow-hidden h-[500px]">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2992.7304656373367!2d-81.4646079240767!3d41.40165949510991!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88311c579ed07621%3A0xfc648ded0332ad02!2s30505%20Bainbridge%20Rd%2C%20Solon%2C%20OH%2044139%2C%20USA!5e0!3m2!1sen!2s!4v1774200462279!5m2!1sen!2s"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    title="OTZ Transportation Location"
                  ></iframe>
                </div>

                <div className="mt-8 bg-gradient-to-br from-blue-50 to-orange-50 p-8 rounded-2xl">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    Quick Response Guarantee
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    We understand the importance of timely communication in
                    logistics. Our dedicated support team monitors all inquiries
                    and aims to respond within 2 hours during business hours and
                    within 24 hours on weekends.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Reveal>
    </div>
  );
}
