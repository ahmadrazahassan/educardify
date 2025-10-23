import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MessageCircle, Send, MapPin, Clock, Languages, CheckCircle2, Twitter, Github, Linkedin, MessageSquare } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  const contactMethods = [
    {
      icon: Mail,
      title: "Email Us",
      description: "support@educardify.com",
      color: "bg-blue-500"
    },
    {
      icon: MessageCircle,
      title: "Live Chat",
      description: "Available 24/7",
      color: "bg-emerald-500"
    },
    {
      icon: MessageSquare,
      title: "Community",
      description: "Join our Discord",
      color: "bg-violet-500"
    }
  ];

  const faqs = [
    {
      question: "Is EduCardify really free?",
      answer: "Yes! 100% free forever. No hidden costs, no premium plans, no watermarks."
    },
    {
      question: "Do I need to create an account?",
      answer: "No account needed! Start creating immediately without any registration."
    },
    {
      question: "Is my data safe?",
      answer: "Absolutely! Everything happens in your browser. We don't store any of your data."
    },
    {
      question: "Can I use this for commercial purposes?",
      answer: "Yes! Feel free to use EduCardify for personal, educational, or commercial projects."
    },
    {
      question: "How can I report a bug?",
      answer: "Use the contact form below or email us directly. We appreciate your feedback!"
    },
    {
      question: "Will you add more features?",
      answer: "Yes! We're constantly improving based on user feedback. Stay tuned for updates!"
    }
  ];

  const socialLinks = [
    { name: "Twitter", icon: Twitter, color: "bg-slate-900", link: "#" },
    { name: "GitHub", icon: Github, color: "bg-slate-800", link: "#" },
    { name: "LinkedIn", icon: Linkedin, color: "bg-blue-600", link: "#" },
    { name: "Discord", icon: MessageSquare, color: "bg-indigo-600", link: "#" }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-20 left-10 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70"
            animate={{
              x: [0, 100, 0],
              y: [0, 50, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
          />
          <motion.div
            className="absolute bottom-20 right-10 w-72 h-72 bg-violet-100 rounded-full mix-blend-multiply filter blur-xl opacity-70"
            animate={{
              x: [0, -50, 0],
              y: [0, 100, 0],
            }}
            transition={{
              duration: 22,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-slate-100 text-slate-700 text-sm font-medium mb-6">
              <MessageCircle className="w-4 h-4 mr-2" />
              Get In Touch
            </div>
          </motion.div>

          <motion.h1
            className="text-6xl md:text-7xl font-bold text-slate-900 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Contact Us
          </motion.h1>

          <motion.p
            className="text-xl text-slate-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </motion.p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 px-4">
        <motion.div
          className="max-w-7xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="grid md:grid-cols-3 gap-6">
            {contactMethods.map((method, index) => {
              const Icon = method.icon;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -8, transition: { duration: 0.3 } }}
                  className="bg-white rounded-3xl p-8 border border-slate-200 hover:border-slate-300 hover:shadow-xl transition-all duration-300 cursor-pointer"
                >
                  <div className={`inline-flex p-4 rounded-2xl ${method.color} text-white mb-4`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{method.title}</h3>
                  <p className="text-slate-600">{method.description}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-lg">
                <h2 className="text-3xl font-bold text-slate-900 mb-6">Send us a Message</h2>
                
                {submitted ? (
                  <motion.div
                    className="bg-emerald-50 border border-emerald-200 text-emerald-900 rounded-2xl p-8 text-center"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <CheckCircle2 className="w-16 h-16 mx-auto mb-4 text-emerald-500" />
                    <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
                    <p>We'll get back to you as soon as possible.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">Your Name</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-2xl border-2 border-slate-200 focus:border-slate-900 focus:outline-none transition-colors"
                        placeholder="John Doe"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">Email Address</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-2xl border-2 border-slate-200 focus:border-slate-900 focus:outline-none transition-colors"
                        placeholder="john@example.com"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">Subject</label>
                      <input
                        type="text"
                        required
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full px-4 py-3 rounded-2xl border-2 border-slate-200 focus:border-slate-900 focus:outline-none transition-colors"
                        placeholder="How can we help?"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">Message</label>
                      <textarea
                        required
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        rows={6}
                        className="w-full px-4 py-3 rounded-2xl border-2 border-slate-200 focus:border-slate-900 focus:outline-none transition-colors resize-none"
                        placeholder="Tell us more..."
                      />
                    </div>

                    <motion.button
                      type="submit"
                      className="w-full py-4 rounded-2xl bg-slate-900 text-white font-semibold text-lg hover:bg-slate-800 transition-colors flex items-center justify-center"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Send Message
                      <Send className="w-5 h-5 ml-2" />
                    </motion.button>
                  </form>
                )}
              </div>
            </motion.div>

            {/* Social & Info */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {/* Social Links */}
              <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-lg">
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Connect With Us</h3>
                <div className="grid grid-cols-2 gap-4">
                  {socialLinks.map((social, index) => {
                    const Icon = social.icon;
                    return (
                      <motion.a
                        key={index}
                        href={social.link}
                        className="rounded-2xl p-6 bg-slate-50 hover:bg-slate-100 border border-slate-200 hover:border-slate-300 transition-all duration-300"
                        whileHover={{ y: -4 }}
                      >
                        <div className={`inline-flex p-3 rounded-xl ${social.color} text-white mb-2`}>
                          <Icon className="w-5 h-5" />
                        </div>
                        <div className="text-sm font-semibold text-slate-700">{social.name}</div>
                      </motion.a>
                    );
                  })}
                </div>
              </div>

              {/* Quick Info */}
              <div className="bg-slate-900 rounded-3xl p-8 text-white shadow-lg">
                <h3 className="text-2xl font-bold mb-6">Quick Info</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="p-2 rounded-lg bg-white/10 mr-3">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-semibold">Response Time</div>
                      <div className="text-slate-400 text-sm">Usually within 24 hours</div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="p-2 rounded-lg bg-white/10 mr-3">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-semibold">Global Support</div>
                      <div className="text-slate-400 text-sm">Available worldwide</div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="p-2 rounded-lg bg-white/10 mr-3">
                      <Languages className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-semibold">Languages</div>
                      <div className="text-slate-400 text-sm">English, Urdu, Hindi</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-slate-600">Quick answers to common questions</p>
          </motion.div>

          <motion.div
            className="space-y-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white rounded-2xl p-6 border border-slate-200 hover:border-slate-300 hover:shadow-lg transition-all duration-300"
              >
                <h3 className="text-lg font-bold text-slate-900 mb-2">{faq.question}</h3>
                <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-slate-50">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="bg-white rounded-3xl p-12 border border-slate-200 shadow-lg">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Still Have Questions?</h2>
            <p className="text-xl text-slate-600 mb-8">
              Don't hesitate to reach out. We're here to help!
            </p>
            <motion.a
              href="mailto:support@educardify.com"
              className="inline-flex items-center px-8 py-4 rounded-full bg-slate-900 text-white font-semibold text-lg hover:bg-slate-800 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Email Us Directly
              <Mail className="w-5 h-5 ml-2" />
            </motion.a>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
