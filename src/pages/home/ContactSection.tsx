
import ContactForm from '@/components/ContactForm';

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 md:py-32 px-4 bg-nova-darker relative">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-nova-purple/20 rounded-full blur-3xl opacity-70"></div>
      </div>
      
      <div className="container mx-auto relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white drop-shadow-md">
            Contact <span className="text-gradient">Us</span>
          </h2>
          
          <p className="text-xl text-white bg-black/30 p-4 rounded-lg shadow-md">
            Ready to start your cosmic journey? Get in touch with us today.
          </p>
        </div>
        
        <ContactForm />
      </div>
    </section>
  );
};

export default ContactSection;
