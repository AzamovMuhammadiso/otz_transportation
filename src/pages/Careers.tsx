import { useState } from "react";
import {
  DollarSign,
  Home,
  Shield,
  TrendingUp,
  Calendar,
  Heart,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import { supabase } from "../lib/supabase";

export default function Careers() {
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    phone: "",
    cdl_type: "",
    years_experience: "",
    current_employer: "",
    preferred_route: "",
    additional_info: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const benefits = [
    {
      icon: DollarSign,
      title: "Competitive Pay",
      description: "Earn $60,000-$85,000+ annually with performance bonuses",
    },
    {
      icon: Home,
      title: "Home Time",
      description: "Flexible schedules with regular home time options",
    },
    {
      icon: Shield,
      title: "Full Benefits",
      description: "Medical, dental, vision, and life insurance",
    },
    {
      icon: TrendingUp,
      title: "Career Growth",
      description: "Advancement opportunities and continuous training",
    },
    {
      icon: Calendar,
      title: "Paid Time Off",
      description: "Generous PTO and holiday pay",
    },
    {
      icon: Heart,
      title: "Retirement",
      description: "401(k) with company match",
    },
  ];

  const requirements = [
    "Valid Class A CDL license",
    "Minimum 2 years of verifiable driving experience",
    "Clean driving record (no major violations)",
    "Pass DOT physical and drug screening",
    "Good communication skills",
    "21 years of age or older",
  ];

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
      const { error } = await supabase.from("driver_applications").insert([
        {
          ...formData,
          years_experience: parseInt(formData.years_experience) || 0,
        },
      ]);

      if (error) throw error;

      setSubmitStatus("success");
      setFormData({
        full_name: "",
        email: "",
        phone: "",
        cdl_type: "",
        years_experience: "",
        current_employer: "",
        preferred_route: "",
        additional_info: "",
      });
    } catch (error) {
      console.error("Error submitting application:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen page-animate">
      <section className="relative h-[400px] bg-gradient-to-br from-blue-900 to-blue-700 text-white">
        <div
          className="absolute inset-0 
bg-[url('https://images.pexels.com/photos/93398/pexels-photo-93398.jpeg')] 
bg-cover 
bg-[position:50%_90%] 
opacity-20"
        ></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Join Our Team
            </h1>
            <p className="text-xl text-blue-100 leading-relaxed">
              Drive with OTZ Transportation and enjoy competitive pay, great
              benefits, and respect on the road
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Drive for OTZ?
            </h2>
            <p className="text-xl text-gray-600">
              We value our drivers and invest in their success
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-xl border-2 border-gray-100 hover:border-blue-300 transition-all hover:shadow-lg"
              >
                <div className="bg-blue-900 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                  <benefit.icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white p-10 rounded-2xl shadow-lg">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Driver Requirements
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {requirements.map((requirement, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{requirement}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Apply Now</h2>
            <p className="text-xl text-gray-600">
              Fill out the form below and we'll get back to you within 24 hours
            </p>
          </div>

          {submitStatus === "success" && (
            <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-start gap-3">
              <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-green-900">
                  Application Submitted!
                </h3>
                <p className="text-green-700 text-sm">
                  Thank you for your interest. Our recruitment team will review
                  your application and contact you soon.
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
                  There was an error submitting your application. Please try
                  again.
                </p>
              </div>
            </div>
          )}

          <form
            onSubmit={handleSubmit}
            className="bg-white p-8 rounded-xl shadow-lg space-y-6"
          >
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="full_name"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Full Name *
                </label>
                <input
                  type="text"
                  id="full_name"
                  name="full_name"
                  required
                  value={formData.full_name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

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
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label
                  htmlFor="cdl_type"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  CDL Type *
                </label>
                <select
                  id="cdl_type"
                  name="cdl_type"
                  required
                  value={formData.cdl_type}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Select CDL Type</option>
                  <option value="Class A">Class A</option>
                  <option value="Class B">Class B</option>
                  <option value="Class C">Class C</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="years_experience"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Years of Experience *
                </label>
                <input
                  type="number"
                  id="years_experience"
                  name="years_experience"
                  required
                  min="0"
                  value={formData.years_experience}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label
                  htmlFor="current_employer"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Current Employer (Optional)
                </label>
                <input
                  type="text"
                  id="current_employer"
                  name="current_employer"
                  value={formData.current_employer}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="preferred_route"
                className="block text-sm font-semibold text-gray-700 mb-2"
              >
                Preferred Route Type (Optional)
              </label>
              <select
                id="preferred_route"
                name="preferred_route"
                value={formData.preferred_route}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">Select Route Type</option>
                <option value="Regional">Regional</option>
                <option value="Long Haul">Long Haul</option>
                <option value="Local">Local</option>
                <option value="Dedicated">Dedicated</option>
              </select>
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
                placeholder="Tell us more about your experience, certifications, or anything else we should know..."
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-orange-500 text-white font-semibold py-4 rounded-lg hover:bg-orange-600 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Submitting..." : "Submit Application"}
            </button>

            <p className="text-sm text-gray-600 text-center">
              By submitting this form, you agree to our privacy policy.
            </p>
          </form>
        </div>
      </section>
    </div>
  );
}
