 'use client' 
  import React, { useState } from 'react';
import { 
  Menu, 
  X, 
  ChevronRight, 
  Users, 
  FileText, 
  Calendar, 
  Shield,
  Zap,
  Clock,
  CheckCircle,
  Star,
  ArrowRight,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram
} from 'lucide-react';

const BarangayLanding = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const features = [
    {
      icon: Users,
      title: 'Resident Management',
      description: 'Efficiently manage resident records, demographics, and household information in one centralized system.',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: FileText,
      title: 'Document Issuance',
      description: 'Streamline the process of issuing barangay clearances, certificates, and permits digitally.',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: Calendar,
      title: 'Event Scheduling',
      description: 'Organize community events, meetings, and programs with automated notifications and reminders.',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Shield,
      title: 'Secure & Reliable',
      description: 'Bank-level security ensures your data is protected with encryption and regular backups.',
      color: 'from-red-500 to-red-600'
    },
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Experience blazing-fast performance with instant search and real-time updates.',
      color: 'from-yellow-500 to-yellow-600'
    },
    {
      icon: Clock,
      title: '24/7 Accessibility',
      description: 'Access your barangay system anytime, anywhere from any device with internet connection.',
      color: 'from-indigo-500 to-indigo-600'
    }
  ];

  const benefits = [
    'Reduce paperwork by 90%',
    'Save 15+ hours per week',
    'Improve resident satisfaction',
    'Real-time data insights',
    'Mobile-friendly interface',
    'Cloud-based storage'
  ];

  const testimonials = [
    {
      name: 'Maria Santos',
      position: 'Barangay Captain',
      location: 'Barangay San Jose',
      image: 'MS',
      rating: 5,
      text: 'This system transformed how we manage our barangay. Everything is organized and accessible in just a few clicks!'
    },
    {
      name: 'Juan Dela Cruz',
      position: 'Barangay Secretary',
      location: 'Barangay Poblacion',
      image: 'JD',
      rating: 5,
      text: 'The document issuance feature alone saved us countless hours. Highly recommended for all barangays!'
    },
    {
      name: 'Ana Reyes',
      position: 'Barangay Treasurer',
      location: 'Barangay Riverside',
      image: 'AR',
      rating: 5,
      text: 'User-friendly and efficient. Our residents love how fast they can now get their documents!'
    }
  ];

  return (
    <div className="bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold text-slate-900">BarangayPro</span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#features" className="text-slate-700 hover:text-blue-600 transition-colors font-medium">Features</a>
              <a href="#benefits" className="text-slate-700 hover:text-blue-600 transition-colors font-medium">Benefits</a>
              <a href="#testimonials" className="text-slate-700 hover:text-blue-600 transition-colors font-medium">Testimonials</a>
              <a href="#contact" className="text-slate-700 hover:text-blue-600 transition-colors font-medium">Contact</a>
              <button className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-2 rounded-lg hover:shadow-lg transition-all">
                Get Started
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 border-t">
              <div className="flex flex-col gap-4">
                <a href="#features" className="text-slate-700 hover:text-blue-600 transition-colors">Features</a>
                <a href="#benefits" className="text-slate-700 hover:text-blue-600 transition-colors">Benefits</a>
                <a href="#testimonials" className="text-slate-700 hover:text-blue-600 transition-colors">Testimonials</a>
                <a href="#contact" className="text-slate-700 hover:text-blue-600 transition-colors">Contact</a>
                <button className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-2 rounded-lg">
                  Get Started
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full mb-6">
                <Zap className="w-4 h-4" />
                <span className="text-sm font-medium">Modern Barangay Management</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
                Transform Your
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Barangay </span>
                Management
              </h1>
              <p className="text-xl text-slate-600 mb-8">
                The all-in-one digital platform designed to streamline barangay operations, improve efficiency, and enhance community service delivery.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 font-medium">
                  Start Free Trial
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button className="border-2 border-slate-300 text-slate-700 px-8 py-4 rounded-lg hover:border-blue-600 hover:text-blue-600 transition-all font-medium">
                  Watch Demo
                </button>
              </div>
              <div className="mt-8 flex items-center gap-6 text-sm text-slate-600">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>No credit card required</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>Free 30-day trial</span>
                </div>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-8 shadow-2xl">
                <div className="bg-white rounded-lg p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="h-3 w-3 rounded-full bg-red-500"></div>
                    <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                    <div className="h-3 w-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="space-y-3">
                    <div className="h-12 bg-gradient-to-r from-blue-100 to-blue-50 rounded-lg"></div>
                    <div className="grid grid-cols-3 gap-3">
                      <div className="h-20 bg-purple-100 rounded-lg"></div>
                      <div className="h-20 bg-blue-100 rounded-lg"></div>
                      <div className="h-20 bg-green-100 rounded-lg"></div>
                    </div>
                    <div className="h-32 bg-gradient-to-br from-slate-100 to-slate-50 rounded-lg"></div>
                  </div>
                </div>
              </div>
              {/* Floating Cards */}
              <div className="absolute -top-6 -left-6 bg-white rounded-lg shadow-xl p-4 animate-bounce">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white rounded-lg shadow-xl p-4 animate-bounce" style={{animationDelay: '0.5s'}}>
                <FileText className="w-8 h-8 text-purple-600" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Powerful Features</h2>
            <p className="text-xl text-slate-600">Everything you need to manage your barangay efficiently</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="group bg-white border border-slate-200 rounded-xl p-6 hover:shadow-xl transition-all hover:-translate-y-1">
                  <div className={`w-14 h-14 bg-gradient-to-br ${feature.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">{feature.title}</h3>
                  <p className="text-slate-600">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-20 px-4 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-slate-900 mb-6">Why Choose BarangayPro?</h2>
              <p className="text-lg text-slate-600 mb-8">
                Join hundreds of barangays already using our platform to deliver better services to their communities.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                    <span className="text-slate-700 font-medium">{benefit}</span>
                  </div>
                ))}
              </div>
              <button className="mt-8 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-lg hover:shadow-xl transition-all flex items-center gap-2">
                Learn More
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
                <div className="text-slate-600">Barangays Served</div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg mt-8">
                <div className="text-4xl font-bold text-purple-600 mb-2">1M+</div>
                <div className="text-slate-600">Documents Issued</div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="text-4xl font-bold text-green-600 mb-2">99.9%</div>
                <div className="text-slate-600">Uptime</div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg mt-8">
                <div className="text-4xl font-bold text-red-600 mb-2">24/7</div>
                <div className="text-slate-600">Support</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">What Our Users Say</h2>
            <p className="text-xl text-slate-600">Trusted by barangay officials across the Philippines</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gradient-to-br from-slate-50 to-white border border-slate-200 rounded-xl p-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-slate-700 mb-6 italic">&quot;{testimonial.text}&quot;</p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                    {testimonial.image}
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900">{testimonial.name}</div>
                    <div className="text-sm text-slate-600">{testimonial.position}</div>
                    <div className="text-xs text-slate-500">{testimonial.location}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Ready to Transform Your Barangay?</h2>
          <p className="text-xl text-blue-100 mb-8">Start your free 30-day trial today. No credit card required.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-lg hover:shadow-xl transition-all font-semibold">
              Start Free Trial
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-blue-600 transition-all font-semibold">
              Schedule Demo
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-slate-900 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <span className="text-xl font-bold">BarangayPro</span>
              </div>
              <p className="text-slate-400">Modern barangay management made simple.</p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Security</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Updates</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Contact Us</h3>
              <ul className="space-y-3 text-slate-400">
                <li className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <span>info@barangaypro.ph</span>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  <span>+63 123 456 7890</span>
                </li>
                <li className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>Manila, Philippines</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-400 text-sm">© 2024 BarangayPro. All rights reserved.</p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default BarangayLanding;