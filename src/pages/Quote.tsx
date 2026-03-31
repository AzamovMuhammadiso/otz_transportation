import { useState } from "react";
import {
  MapPin,
  Package,
  Scale,
  User,
  Phone,
  Mail,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import { supabase } from "../lib/supabase";
import truckImage from "../assets/images/truck.png";
import Reveal from "../components/Reveal";

export default function Quote() {
  const [formData, setFormData] = useState({
    pickup_location: "",
    delivery_location: "",
    load_type: "",
    weight: "",
    contact_name: "",
    contact_email: "",
    contact_phone: "",
    additional_info: "",
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
        .from("quote_requests")
        .insert([formData]);

      if (error) throw error;

      setSubmitStatus("success");
      setFormData({
        pickup_location: "",
        delivery_location: "",
        load_type: "",
        weight: "",
        contact_name: "",
        contact_email: "",
        contact_phone: "",
        additional_info: "",
      });
    } catch (error) {
      console.error("Error submitting quote request:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const benefits = [
    "Free, no-obligation quote",
    "Response within 2 hours",
    "Transparent pricing",
    "Dedicated account manager",
    "Flexible scheduling",
    "Real-time tracking",
  ];

  return (
    <div className="min-h-screen">
      <Reveal>
        <section className="relative h-[400px] bg-gradient-to-br from-blue-900 to-blue-700 text-white">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-20"
            style={{ backgroundImage: `url(${truckImage})` }}
          ></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
            <div className="max-w-3xl">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Get a Quote
              </h1>
              <p className="text-xl text-blue-100 leading-relaxed">
                Request a free shipping quote and let us handle your freight
                transportation needs
              </p>
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal>
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Why Choose OTZ Transportation?
                </h2>
                <p className="text-gray-700 mb-8 leading-relaxed">
                  With over 14 years of experience and a fleet of 250+ modern
                  trucks, we provide reliable, cost-effective freight solutions
                  tailored to your business needs. Our commitment to on-time
                  delivery and customer satisfaction sets us apart.
                </p>

                <div className="space-y-4 mb-8">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="flex-shrink-0">
                        <CheckCircle className="h-6 w-6 text-green-500" />
                      </div>
                      <span className="text-gray-700 font-medium">
                        {benefit}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-orange-50 p-8 rounded-2xl">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Need Help?
                  </h3>
                  <p className="text-gray-700 mb-6">
                    Our logistics experts are available 24/7 to assist with your
                    shipping needs and answer any questions.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Phone className="h-5 w-5 text-blue-900" />
                      <a
                        href="tel:+16147078499"
                        className="text-blue-900 font-semibold hover:text-blue-700"
                      >
                        1-614-707-8499
                      </a>
                    </div>
                    <div className="flex items-center gap-3">
                      <Mail className="h-5 w-5 text-blue-900" />
                      <a
                        href="mailto:info@otztransportation.com  "
                        className="text-blue-900 font-semibold hover:text-blue-700"
                      >
                        info@otztransportation.com  
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                {submitStatus === "success" && (
                  <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-green-900">
                        Quote Request Submitted!
                      </h3>
                      <p className="text-green-700 text-sm">
                        Thank you for your request. Our team will review your
                        information and send you a detailed quote within 2
                        hours.
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
                        There was an error submitting your request. Please try
                        again or call us directly.
                      </p>
                    </div>
                  </div>
                )}

                <form
                  onSubmit={handleSubmit}
                  className="bg-white p-8 rounded-2xl shadow-lg space-y-6"
                >
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    Request a Quote
                  </h3>

                  <div>
                    <label
                      htmlFor="pickup_location"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      <MapPin className="inline h-4 w-4 mr-1" />
                      Pickup Location *
                    </label>
                    <input
                      type="text"
                      id="pickup_location"
                      name="pickup_location"
                      required
                      value={formData.pickup_location}
                      onChange={handleChange}
                      placeholder="City, State or ZIP Code"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="delivery_location"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      <MapPin className="inline h-4 w-4 mr-1" />
                      Delivery Location *
                    </label>
                    <input
                      type="text"
                      id="delivery_location"
                      name="delivery_location"
                      required
                      value={formData.delivery_location}
                      onChange={handleChange}
                      placeholder="City, State or ZIP Code"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="load_type"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      <Package className="inline h-4 w-4 mr-1" />
                      Load Type *
                    </label>
                    <select
                      id="load_type"
                      name="load_type"
                      required
                      value={formData.load_type}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">Select Load Type</option>
                      <option value="Full Truckload (FTL)">
                        Full Truckload (FTL)
                      </option>
                      <option value="Less Than Truckload (LTL)">
                        Less Than Truckload (LTL)
                      </option>
                      <option value="Refrigerated">Refrigerated</option>
                      <option value="Dry Van">Dry Van</option>
                      <option value="Expedited">Expedited</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="weight"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      <Scale className="inline h-4 w-4 mr-1" />
                      Weight *
                    </label>
                    <input
                      type="text"
                      id="weight"
                      name="weight"
                      required
                      value={formData.weight}
                      onChange={handleChange}
                      placeholder="e.g., 10,000 lbs or 5 tons"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>

                  <div className="border-t border-gray-200 pt-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">
                      Contact Information
                    </h4>

                    <div className="space-y-4">
                      <div>
                        <label
                          htmlFor="contact_name"
                          className="block text-sm font-semibold text-gray-700 mb-2"
                        >
                          <User className="inline h-4 w-4 mr-1" />
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="contact_name"
                          name="contact_name"
                          required
                          value={formData.contact_name}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="contact_email"
                          className="block text-sm font-semibold text-gray-700 mb-2"
                        >
                          <Mail className="inline h-4 w-4 mr-1" />
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="contact_email"
                          name="contact_email"
                          required
                          value={formData.contact_email}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="contact_phone"
                          className="block text-sm font-semibold text-gray-700 mb-2"
                        >
                          <Phone className="inline h-4 w-4 mr-1" />
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          id="contact_phone"
                          name="contact_phone"
                          required
                          value={formData.contact_phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="additional_info"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      Additional Information (Optional)
                    </label>
                    <textarea
                      id="additional_info"
                      name="additional_info"
                      rows={4}
                      value={formData.additional_info}
                      onChange={handleChange}
                      placeholder="Special requirements, delivery dates, or any other details..."
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-orange-500 text-white font-semibold py-4 rounded-lg hover:bg-orange-600 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? "Submitting..." : "Get Free Quote"}
                  </button>

                  <p className="text-sm text-gray-600 text-center">
                    By submitting this form, you agree to receive communications
                    from OTZ Transportation.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </section>
      </Reveal>
    </div>
  );
}
