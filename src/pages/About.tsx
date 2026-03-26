import { Target, Eye, Award, TrendingUp, Shield, Users } from 'lucide-react';

export default function About() {
  const values = [
    {
      icon: Shield,
      title: 'Safety & Compliance',
      description: 'We prioritize the safety of our drivers, cargo, and the public. Our fleet meets all DOT regulations and undergoes regular maintenance.',
    },
    {
      icon: Award,
      title: 'Excellence in Service',
      description: 'We strive for excellence in every delivery, maintaining the highest standards of professionalism and reliability.',
    },
    {
      icon: Users,
      title: 'Customer Focus',
      description: 'Our customers are at the heart of everything we do. We build lasting partnerships through exceptional service.',
    },
    {
      icon: TrendingUp,
      title: 'Continuous Innovation',
      description: 'We invest in technology and training to stay ahead in the ever-evolving logistics industry.',
    },
  ];

  const milestones = [
    { year: '2010', event: 'OTZ Transportation founded with 10 trucks' },
    { year: '2013', event: 'Expanded fleet to 50 trucks, opened second facility' },
    { year: '2016', event: 'Reached 100,000 successful deliveries milestone' },
    { year: '2019', event: 'Introduced refrigerated transport services' },
    { year: '2021', event: 'Fleet expansion to 200+ trucks across the US' },
    { year: '2024', event: 'Celebrating 14 years of excellence with 250+ trucks' },
  ];

  const whyChooseUs = [
    {
      title: 'Modern Fleet',
      description: 'Our trucks are equipped with the latest GPS tracking, safety features, and maintained to the highest standards.',
    },
    {
      title: 'Experienced Team',
      description: 'Our drivers average 10+ years of experience and undergo continuous training for safety and efficiency.',
    },
    {
      title: 'Real-Time Tracking',
      description: 'Track your shipments in real-time with our advanced logistics platform and receive instant updates.',
    },
    {
      title: 'Competitive Rates',
      description: 'We offer transparent, competitive pricing with no hidden fees, ensuring the best value for your logistics needs.',
    },
    {
      title: 'Nationwide Coverage',
      description: 'With facilities across the US, we can pick up and deliver anywhere in the continental United States.',
    },
    {
      title: '24/7 Support',
      description: 'Our dispatch and customer service teams are available around the clock to assist with any questions or concerns.',
    },
  ];

  return (
    <div className="min-h-screen">
      <section className="relative h-[400px] bg-gradient-to-br from-blue-900 to-blue-700 text-white">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/2199293/pexels-photo-2199293.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">About Us</h1>
            <p className="text-xl text-blue-100 leading-relaxed">
              Delivering excellence in freight transportation since 2010
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Founded in 2010, OTZ Transportation began with a simple mission: to provide reliable,
                  professional freight transportation services that businesses could depend on. What started
                  with just 10 trucks and a dedicated team has grown into one of the most trusted names in
                  logistics.
                </p>
                <p>
                  Over the past 14 years, we've expanded our fleet to over 250 trucks and completed more than
                  50,000 successful deliveries. Our growth is a testament to our unwavering commitment to
                  quality service, safety, and customer satisfaction.
                </p>
                <p>
                  Today, we serve clients across the United States, offering a full range of freight
                  transportation services including FTL, LTL, refrigerated transport, and expedited shipping.
                  Our modern fleet, experienced drivers, and advanced logistics technology ensure that your
                  cargo arrives safely, on time, every time.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/1427107/pexels-photo-1427107.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="OTZ Transportation Fleet"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-orange-500 text-white p-8 rounded-xl shadow-xl">
                <div className="text-4xl font-bold">14+</div>
                <div className="text-sm">Years of Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="bg-white p-10 rounded-2xl shadow-lg">
              <Target className="h-12 w-12 text-blue-900 mb-6" />
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-700 leading-relaxed">
                To provide exceptional freight transportation services that exceed our customers' expectations
                through reliability, innovation, and unwavering commitment to safety. We aim to be the most
                trusted logistics partner for businesses across America.
              </p>
            </div>

            <div className="bg-white p-10 rounded-2xl shadow-lg">
              <Eye className="h-12 w-12 text-orange-500 mb-6" />
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-700 leading-relaxed">
                To be the leading freight transportation company in the United States, recognized for our
                commitment to excellence, innovation in logistics, and the positive impact we make on our
                customers, employees, and communities.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600">The principles that guide everything we do</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-xl border-2 border-gray-100 hover:border-blue-300 transition-all hover:shadow-lg"
              >
                <div className="bg-blue-900 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                  <value.icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-blue-900 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Our Journey</h2>
            <p className="text-xl text-blue-100">Key milestones in our growth</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex gap-6 group">
                  <div className="flex-shrink-0">
                    <div className="bg-orange-500 text-white font-bold px-4 py-2 rounded-lg group-hover:scale-110 transition-transform">
                      {milestone.year}
                    </div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl flex-1 group-hover:bg-white/20 transition-colors">
                    <p className="text-blue-50">{milestone.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose OTZ Transportation</h2>
            <p className="text-xl text-gray-600">What sets us apart from the competition</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold">
                    {index + 1}
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
