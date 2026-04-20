export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-indigo-600 to-purple-700 text-white">
        <div className="max-w-6xl mx-auto px-6 py-24 lg:py-32">
          <h1 className="text-4xl lg:text-6xl font-bold leading-tight">Inspire Dental Gulshan Branch</h1>
          <p className="mt-4 text-lg lg:text-xl text-white/80 max-w-2xl">Inspire Dental Gulshan Branch is a highly acclaimed dental clinic known for its exceptional patient care and comprehensive services. Despite a strong reputation, the clinic lacks a digital presence, w</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#contact" className="inline-flex items-center px-6 py-3 bg-white text-indigo-700 font-semibold rounded-xl hover:bg-gray-100 transition-colors">
              Book an Appointment placed prominently on every page
            </a>
            <a href="tel:345 4677878" className="inline-flex items-center px-6 py-3 border-2 border-white/30 text-white font-semibold rounded-xl hover:bg-white/10 transition-colors">Call 345 4677878</a>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 text-center">Our Services</h2>
          <p className="mt-2 text-gray-500 text-center">What we offer</p>
          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div key="General Dentistry" className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <h3 className="text-lg font-semibold text-gray-900">General Dentistry</h3>
          </div>
          <div key="Cosmetic Dentistry" className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <h3 className="text-lg font-semibold text-gray-900">Cosmetic Dentistry</h3>
          </div>
          <div key="Orthodontics" className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <h3 className="text-lg font-semibold text-gray-900">Orthodontics</h3>
          </div>
          <div key="Pediatric Dentistry" className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <h3 className="text-lg font-semibold text-gray-900">Pediatric Dentistry</h3>
          </div>
          </div>
        </div>
      </section>

      {/* Trust */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-10">Why Choose Us</h2>
          <div className="grid sm:grid-cols-2 gap-4">
          <div className="flex items-center gap-2 text-gray-600">
            <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
            <span>Patient Testimonials</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600">
            <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
            <span>Certifications</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600">
            <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
            <span>Gulshan community awards</span>
          </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-900">Get in Touch</h2>
          <p className="mt-2 text-gray-500">We'd love to hear from you</p>
          <div className="mt-8 space-y-3">
            <p className="text-lg"><strong>Phone:</strong> <a href="tel:345 4677878" className="text-indigo-600 hover:underline">345 4677878</a></p>
            <p className="text-lg"><strong>Address:</strong> 4.9(249) · Dental clinic</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-8">
        <div className="max-w-6xl mx-auto px-6 text-center text-sm">
          <p>&copy; 2026 Inspire Dental Gulshan Branch. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
