import { Link } from 'react-router-dom';
import { Truck, Package, ThermometerSnowflake, Box, Zap, CheckCircle, ArrowRight } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Truck,
      title: 'Full Truckload (FTL)',
      description: 'Dedicated transportation for large shipments that require an entire truck.',
      features: [
        'Exclusive use of the entire truck',
        'Direct delivery without stops',
        'Faster transit times',
        'Reduced handling and risk of damage',
        'Cost-effective for large shipments',
        'Flexible scheduling options',
      ],
      useCases: [
        'Large volume shipments (over 10,000 lbs)',
        'Time-sensitive deliveries',
        'High-value cargo requiring security',
        'Freight requiring special handling',
      ],
      image: 'https://images.pexels.com/photos/1427107/pexels-photo-1427107.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      icon: Package,
      title: 'Less Than Truckload (LTL)',
      description: 'Cost-effective solution for smaller freight shipments that don\'t require a full truck.',
      features: [
        'Pay only for the space you use',
        'Consolidated shipments for efficiency',
        'Regular scheduled routes',
        'Professional loading and unloading',
        'Tracking and visibility',
        'Flexible pickup and delivery',
      ],
      useCases: [
        'Smaller shipments (150-10,000 lbs)',
        'Regular, recurring shipments',
        'Budget-conscious shipping',
        'Multiple delivery points',
      ],
      image: 'https://images.pexels.com/photos/4481259/pexels-photo-4481259.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      icon: ThermometerSnowflake,
      title: 'Refrigerated Transport (Reefer)',
      description: 'Temperature-controlled transportation for perishable and temperature-sensitive goods.',
      features: [
        'Precise temperature control',
        'Real-time temperature monitoring',
        'Food-grade certified trailers',
        'Multi-temperature capabilities',
        'Backup power systems',
        'Compliance with FDA regulations',
      ],
      useCases: [
        'Fresh produce and frozen foods',
        'Pharmaceuticals and medical supplies',
        'Chemicals requiring temperature control',
        'Flowers and plants',
      ],
      image: 'https://images.pexels.com/photos/6169668/pexels-photo-6169668.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      icon: Box,
      title: 'Dry Van Shipping',
      description: 'Standard enclosed trailer transportation for general freight and non-perishable goods.',
      features: [
        'Weather and theft protection',
        'Standard 53-foot trailers',
        'Versatile cargo compatibility',
        'Secure loading docks',
        'Door-to-door service',
        'Competitive pricing',
      ],
      useCases: [
        'General merchandise',
        'Packaged goods',
        'Electronics and appliances',
        'Retail inventory',
      ],
      image: 'https://images.pexels.com/photos/1427541/pexels-photo-1427541.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      icon: Zap,
      title: 'Expedited Freight',
      description: 'Fast, time-critical shipping when every minute counts for your business.',
      features: [
        'Priority handling and routing',
        'Direct point-to-point delivery',
        'Team drivers for 24/7 transit',
        'Real-time GPS tracking',
        'Dedicated customer support',
        'Time-definite delivery options',
      ],
      useCases: [
        'Emergency shipments',
        'Just-in-time inventory',
        'Production line materials',
        'Event and trade show materials',
      ],
      image: 'https://images.pexels.com/photos/2449452/pexels-photo-2449452.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
  ];

  const additionalServices = [
    'Load and unload assistance',
    'Liftgate service',
    'Inside delivery',
    'Residential delivery',
    'Appointment scheduling',
    'Proof of delivery',
    'Freight insurance',
    'Hazmat shipping',
  ];

  return (
    <div className="min-h-screen">
      <section className="relative h-[400px] bg-gradient-to-br from-blue-900 to-blue-700 text-white">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/906982/pexels-photo-906982.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-blue-100 leading-relaxed">
              Comprehensive freight transportation solutions tailored to your business needs
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {services.map((service, index) => (
              <div
                key={index}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="bg-blue-900 p-3 rounded-xl">
                      <service.icon className="h-8 w-8 text-white" />
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900">{service.title}</h2>
                  </div>

                  <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="mb-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Key Features</h3>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Ideal For</h3>
                    <ul className="space-y-2">
                      {service.useCases.map((useCase, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-gray-700">
                          <span className="text-orange-500 font-bold">•</span>
                          <span>{useCase}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <img
                    src={service.image}
                    alt={service.title}
                    className="rounded-2xl shadow-2xl w-full h-[400px] object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Additional Services</h2>
            <p className="text-xl text-gray-600">
              We offer a range of value-added services to meet all your logistics needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {additionalServices.map((service, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow text-center"
              >
                <CheckCircle className="h-8 w-8 text-green-500 mx-auto mb-3" />
                <p className="text-gray-900 font-medium">{service}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-blue-900 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Contact us today to discuss your freight transportation needs and get a custom quote
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
