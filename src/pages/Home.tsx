import { Link } from 'react-router-dom';
import { ArrowRight, Truck, Shield, Clock, Users, Package, ThermometerSnowflake, Zap, Star } from 'lucide-react';

export default function Home() {
  const stats = [
    { value: '14+', label: 'Years of Experience' },
    { value: '250+', label: 'Fleet Size' },
    { value: '50K+', label: 'Deliveries Completed' },
    { value: '98%', label: 'On-Time Delivery' },
  ];

  const services = [
    {
      icon: Truck,
      title: 'Full Truckload (FTL)',
      description: 'Dedicated truck for your large shipments across the country.',
    },
    {
      icon: Package,
      title: 'Less Than Truckload (LTL)',
      description: 'Cost-effective solution for smaller freight shipments.',
    },
    {
      icon: ThermometerSnowflake,
      title: 'Refrigerated Transport',
      description: 'Temperature-controlled shipping for sensitive goods.',
    },
    {
      icon: Zap,
      title: 'Expedited Freight',
      description: 'Fast delivery when time is critical for your business.',
    },
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'Midwest Manufacturing',
      text: 'OTZ Transportation has been our go-to partner for 5 years. Their reliability and professionalism are unmatched.',
      rating: 5,
    },
    {
      name: 'Michael Chen',
      company: 'FreshFood Distributors',
      text: 'The refrigerated transport service is exceptional. Our products always arrive in perfect condition.',
      rating: 5,
    },
    {
      name: 'David Rodriguez',
      company: 'BuildCo Supply',
      text: 'Fast, efficient, and cost-effective. They handle our materials with care and deliver on time, every time.',
      rating: 5,
    },
  ];

  const partners = [
    'Amazon Freight',
    'CH Robinson',
    'UPS Freight',
    'XPO Logistics',
    'J.B. Hunt',
  ];

  return (
    <div className="min-h-screen">
      <section className="relative h-[600px] bg-gradient-to-br from-blue-900 via-blue-800 to-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/1427107/pexels-photo-1427107.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-20"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="max-w-3xl space-y-6 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Reliable Freight Solutions
              <span className="block text-orange-400">Across the Nation</span>
            </h1>
            <p className="text-xl text-blue-100 leading-relaxed">
              Trusted logistics partner delivering excellence in freight transportation for over 14 years.
              Your cargo, our commitment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link
                to="/quote"
                className="inline-flex items-center justify-center px-8 py-4 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition-all transform hover:scale-105 shadow-lg"
              >
                Get a Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/careers"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-900 font-semibold rounded-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg"
              >
                Apply as a Driver
                <Users className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-blue-900 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">About OTZ Transportation</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We are a leading freight transportation company committed to delivering excellence
              through innovative logistics solutions and unwavering reliability.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow">
              <div className="bg-blue-100 w-16 h-16 rounded-lg flex items-center justify-center mb-4">
                <Shield className="h-8 w-8 text-blue-900" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Safety First</h3>
              <p className="text-gray-600 leading-relaxed">
                Our fleet is maintained to the highest standards, and our drivers are extensively trained
                for safe, secure transportation.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow">
              <div className="bg-orange-100 w-16 h-16 rounded-lg flex items-center justify-center mb-4">
                <Clock className="h-8 w-8 text-orange-500" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">On-Time Delivery</h3>
              <p className="text-gray-600 leading-relaxed">
                We understand time is money. Our 98% on-time delivery rate speaks to our commitment
                to meeting your deadlines.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow">
              <div className="bg-green-100 w-16 h-16 rounded-lg flex items-center justify-center mb-4">
                <Users className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Dedicated Support</h3>
              <p className="text-gray-600 leading-relaxed">
                Our experienced team provides 24/7 support to ensure your logistics run smoothly
                from pickup to delivery.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600">
              Comprehensive freight solutions tailored to your business needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-xl border-2 border-gray-100 hover:border-blue-300 transition-all hover:shadow-lg group"
              >
                <div className="bg-blue-900 w-14 h-14 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <service.icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm">{service.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              to="/services"
              className="inline-flex items-center px-6 py-3 bg-blue-900 text-white font-semibold rounded-lg hover:bg-blue-800 transition-colors"
            >
              View All Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
            <p className="text-xl text-gray-600">
              Don't just take our word for it
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-orange-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed italic">"{testimonial.text}"</p>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white border-t border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Trusted By Industry Leaders</h3>
            <p className="text-gray-600">Working with the best in logistics</p>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="text-gray-400 font-semibold text-lg hover:text-gray-600 transition-colors"
              >
                {partner}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-blue-900 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Ship With Us?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Get a free quote today and experience the OTZ Transportation difference
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/quote"
              className="inline-flex items-center justify-center px-8 py-4 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition-all transform hover:scale-105"
            >
              Request a Quote
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-900 font-semibold rounded-lg hover:bg-gray-100 transition-all transform hover:scale-105"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
