import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ArrowRight, CheckCircle, Code, Globe, Layers, Zap } from "lucide-react"
import Image from "next/image"

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="container mx-auto py-6 px-4 flex justify-between items-center relative z-10">
        <div className="flex items-center gap-2">
          <span className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text text-transparent">
            B.Digital
          </span>
        </div>
        <nav className="hidden md:flex gap-8 items-center">
          <a href="#features" className="hover:text-purple-400 transition-colors">
            Features
          </a>
          <a href="#showcase" className="hover:text-purple-400 transition-colors">
            Showcase
          </a>
          <a href="#pricing" className="hover:text-purple-400 transition-colors">
            Pricing
          </a>
          <a href="#contact" className="hover:text-purple-400 transition-colors">
            Contact
          </a>
        </nav>
        <Button className="bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 text-white">
          Get Started
        </Button>
      </header>

      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 z-0 opacity-30">
          <Image
            src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070&auto=format&fit=crop"
            alt="Digital technology background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/90 to-black"></div>
        </div>
        <div className="container mx-auto px-4 py-20 md:py-32 relative z-1">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-block px-3 py-1 rounded-full bg-purple-900/30 text-purple-400 text-sm font-medium">
                One-Pager Websites
              </div>
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Your entire business on{" "}
                <span className="bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text text-transparent">
                  one page
                </span>
              </h1>
              <p className="text-xl text-gray-400">
                Stunning one-page websites that convert visitors into customers. Fast, responsive, and designed to
                impress.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 text-white px-8 py-6 text-lg">
                  Get Your One-Pager
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button variant="outline" className="border-gray-700 text-white hover:bg-gray-800 px-8 py-6 text-lg">
                  View Examples
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-2xl blur opacity-75"></div>
              <div className="relative bg-black rounded-2xl overflow-hidden border border-gray-800">
                <Image
                  src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070&auto=format&fit=crop"
                  alt="Modern website design showcase"
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Everything you need on{" "}
            <span className="bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text text-transparent">one page</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Our one-pager websites are designed to showcase your business effectively without overwhelming your
            visitors.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: <Zap className="h-10 w-10 text-purple-500" />,
              title: "Lightning Fast",
              description: "Optimized for speed to keep visitors engaged and improve your search rankings.",
            },
            {
              icon: <Layers className="h-10 w-10 text-cyan-500" />,
              title: "Modern Design",
              description: "Clean, contemporary designs that make your business stand out from the competition.",
            },
            {
              icon: <Globe className="h-10 w-10 text-purple-500" />,
              title: "Mobile Responsive",
              description: "Looks perfect on every device, from smartphones to desktop computers.",
            },
            {
              icon: <Code className="h-10 w-10 text-cyan-500" />,
              title: "SEO Optimized",
              description: "Built with search engines in mind to help customers find you online.",
            },
            {
              icon: <CheckCircle className="h-10 w-10 text-purple-500" />,
              title: "Conversion Focused",
              description: "Strategic layouts designed to turn visitors into paying customers.",
            },
            {
              icon: <Zap className="h-10 w-10 text-cyan-500" />,
              title: "Quick Turnaround",
              description: "Get your professional website up and running in days, not weeks.",
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="bg-gray-900/50 p-8 rounded-2xl border border-gray-800 hover:border-purple-500/50 transition-all hover:shadow-lg hover:shadow-purple-500/10"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Showcase Section */}
      <section id="showcase" className="bg-gradient-to-b from-black to-purple-950/20 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Our{" "}
              <span className="bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text text-transparent">
                Showcase
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Check out some of our recent one-pager websites that have helped businesses grow.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                id: 1,
                title: "Tech Startup",
                description: "A stunning one-pager for a tech startup",
                image: "https://images.unsplash.com/macbook-pro-showing-vegetable-dish-JVSgcV8_vb4=2015&auto=format&fit=crop",
              },
              {
                id: 2,
                title: "Restaurant",
                description: "A stunning one-pager for a restaurant",
                image: "https://images.unsplash.com/photo-1517292987719-0369a794ec0f?q=80&w=1974&auto=format&fit=crop",
              },
              {
                id: 3,
                title: "Fitness Studio",
                description: "A stunning one-pager for a fitness studio",
                image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=1974&auto=format&fit=crop",
              },
              {
                id: 4,
                title: "Photography Business",
                description: "A stunning one-pager for a photography business",
                image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop",
              },
              {
                id: 5,
                title: "Consulting Firm",
                description: "A stunning one-pager for a consulting firm",
                image: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070&auto=format&fit=crop",
              },
              {
                id: 6,
                title: "E-commerce Brand",
                description: "A stunning one-pager for an e-commerce brand",
                image: "https://images.unsplash.com/photo-1556155092-490a1ba16284?q=80&w=2070&auto=format&fit=crop",
              },
            ].map((project) => (
              <div key={project.id} className="group relative overflow-hidden rounded-2xl">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-2xl blur opacity-0 group-hover:opacity-75 transition-opacity"></div>
                <div className="relative bg-gray-900 rounded-2xl overflow-hidden border border-gray-800 group-hover:border-transparent transition-all">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={600}
                    height={400}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                      <p className="text-gray-300 mb-4">{project.description}</p>
                      <Button size="sm" className="bg-white text-black hover:bg-gray-200">
                        View Project
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Simple{" "}
            <span className="bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text text-transparent">Pricing</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Affordable packages for businesses of all sizes. No hidden fees.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {[
            {
              name: "Starter",
              price: "$499",
              description: "Perfect for small businesses just getting started online.",
              features: [
                "One-page website",
                "Mobile responsive design",
                "3 content sections",
                "Contact form",
                "Basic SEO setup",
                "1 revision",
              ],
            },
            {
              name: "Professional",
              price: "$899",
              description: "Our most popular package for established businesses.",
              features: [
                "One-page website",
                "Premium design",
                "6 content sections",
                "Contact form & map",
                "Advanced SEO setup",
                "Social media integration",
                "3 revisions",
                "1 month support",
              ],
              highlighted: true,
            },
            {
              name: "Enterprise",
              price: "$1,499",
              description: "For businesses that need a comprehensive online presence.",
              features: [
                "One-page website",
                "Custom premium design",
                "Unlimited content sections",
                "Advanced contact forms",
                "Complete SEO optimization",
                "Social media integration",
                "Analytics setup",
                "Unlimited revisions",
                "3 months support",
              ],
            },
          ].map((plan, index) => (
            <div
              key={index}
              className={`rounded-2xl p-8 ${
                plan.highlighted
                  ? "bg-gradient-to-b from-purple-900/40 to-cyan-900/40 border-2 border-purple-500/50 relative overflow-hidden"
                  : "bg-gray-900/50 border border-gray-800"
              }`}
            >
              {plan.highlighted && (
                <div className="absolute top-0 right-0 bg-gradient-to-r from-purple-500 to-cyan-500 text-white text-xs font-bold px-4 py-1 transform translate-x-2 -translate-y-0 rotate-45 origin-bottom-left">
                  POPULAR
                </div>
              )}
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <div className="flex items-baseline mb-4">
                <span className="text-4xl font-bold">{plan.price}</span>
                <span className="text-gray-400 ml-2">one-time</span>
              </div>
              <p className="text-gray-400 mb-6">{plan.description}</p>
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-purple-500 mr-2 shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button
                className={`w-full ${
                  plan.highlighted
                    ? "bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 text-white"
                    : "bg-gray-800 hover:bg-gray-700 text-white"
                }`}
              >
                Choose Plan
              </Button>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-gradient-to-b from-purple-950/20 to-black py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              What Our{" "}
              <span className="bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text text-transparent">
                Clients Say
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what our clients have to say about their one-pager websites.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                company: "Fitness Studio Owner",
                quote:
                  "Our one-pager from B.Digital has completely transformed our online presence. We're getting more leads than ever before!",
                image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop",
              },
              {
                name: "Michael Chen",
                company: "Tech Startup Founder",
                quote:
                  "The team at B.Digital delivered exactly what we needed - a clean, professional website that showcases our product perfectly.",
                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop",
              },
              {
                name: "Jessica Williams",
                company: "Restaurant Owner",
                quote:
                  "Our new website has helped us attract more customers. The design is beautiful and it was delivered so quickly!",
                image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop",
              },
            ].map((testimonial, index) => (
              <div key={index} className="bg-gray-900/50 p-8 rounded-2xl border border-gray-800">
                <div className="flex items-center mb-4">
                  <Image
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    width={48}
                    height={48}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="ml-4">
                    <h4 className="font-bold">{testimonial.name}</h4>
                    <p className="text-gray-400 text-sm">{testimonial.company}</p>
                  </div>
                </div>
                <p className="text-gray-300 italic">"{testimonial.quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Meet Our{" "}
            <span className="bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text text-transparent">Team</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            The talented people behind our stunning one-pager websites.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {[
            {
              name: "Alex Morgan",
              role: "Founder & Designer",
              image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop",
            },
            {
              name: "Jamie Lee",
              role: "Lead Developer",
              image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop",
            },
            {
              name: "Taylor Smith",
              role: "UX Specialist",
              image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop",
            },
            {
              name: "Jordan Riley",
              role: "Marketing Director",
              image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1974&auto=format&fit=crop",
            },
          ].map((member, index) => (
            <div key={index} className="group relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-2xl blur opacity-0 group-hover:opacity-75 transition-opacity"></div>
              <div className="relative bg-gray-900/50 p-6 rounded-2xl border border-gray-800 text-center">
                <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                  <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                </div>
                <h3 className="text-xl font-bold">{member.name}</h3>
                <p className="text-gray-400">{member.role}</p>
                <div className="flex justify-center gap-3 mt-4">
                  <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                      <rect x="2" y="9" width="4" height="12"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="container mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Ready to{" "}
              <span className="bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text text-transparent">
                get started
              </span>
              ?
            </h2>
            <p className="text-xl text-gray-400 mb-6">
              Fill out the form and we'll get back to you within 24 hours to discuss your project.
            </p>
            <div className="space-y-4 mb-8">
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-purple-900/50 flex items-center justify-center mr-4">
                  <Globe className="h-5 w-5 text-purple-400" />
                </div>
                <span>www.bdigital.com</span>
              </div>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-purple-900/50 flex items-center justify-center mr-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-purple-400"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                </div>
                <span>(555) 123-4567</span>
              </div>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-purple-900/50 flex items-center justify-center mr-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-purple-400"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </div>
                <span>hello@bdigital.com</span>
              </div>
            </div>
          </div>
          <div className="bg-gray-900/50 p-8 rounded-2xl border border-gray-800">
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name
                  </label>
                  <Input id="name" placeholder="Your name" className="bg-gray-800 border-gray-700" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <Input id="email" type="email" placeholder="Your email" className="bg-gray-800 border-gray-700" />
                </div>
              </div>
              <div>
                <label htmlFor="company" className="block text-sm font-medium mb-2">
                  Company
                </label>
                <Input id="company" placeholder="Your company" className="bg-gray-800 border-gray-700" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Tell us about your project"
                  className="bg-gray-800 border-gray-700"
                  rows={4}
                />
              </div>
              <Button className="w-full bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 text-white">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-950 py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text text-transparent">
                B.Digital
              </span>
            </div>
            <div className="flex gap-8 mb-4 md:mb-0">
              <a href="#features" className="text-gray-400 hover:text-white transition-colors">
                Features
              </a>
              <a href="#showcase" className="text-gray-400 hover:text-white transition-colors">
                Showcase
              </a>
              <a href="#pricing" className="text-gray-400 hover:text-white transition-colors">
                Pricing
              </a>
              <a href="#contact" className="text-gray-400 hover:text-white transition-colors">
                Contact
              </a>
            </div>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-purple-500 hover:text-white transition-all"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-purple-500 hover:text-white transition-all"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                </svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-purple-500 hover:text-white transition-all"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-purple-500 hover:text-white transition-all"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500 text-sm">
            <p>© {new Date().getFullYear()} B.Digital. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
