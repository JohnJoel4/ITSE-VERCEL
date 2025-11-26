import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ContactForm } from "@/components/contact-form";

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-violet-600 via-purple-600 to-fuchsia-600 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/50 z-10"></div>
          <img 
            src="/images/contact.jpg" 
            alt="Contact" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 relative z-20">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
              Contact Us
            </h1>
            <p className="text-lg md:text-xl text-violet-50">
              Have questions or need assistance? We're here to help. Reach out to us and we'll respond as soon as possible.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <main className="flex-1 py-16">
        <div className="container mx-auto px-4">
          <ContactForm />
        </div>
      </main>

      <Footer />
    </div>
  );
}
