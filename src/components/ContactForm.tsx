
import { useState } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "We'll get back to you as soon as possible.",
      });
      setIsSubmitting(false);
      setFormData({
        name: '',
        email: '',
        message: ''
      });
    }, 1000);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 w-full max-w-md mx-auto">
      <div className="space-y-2">
        <label htmlFor="name" className="block text-sm font-medium text-gray-300">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          value={formData.name}
          onChange={handleChange}
          className={cn(
            "w-full px-4 py-3 bg-nova-darker border border-gray-700 rounded-lg",
            "focus:ring-2 focus:ring-nova-purple focus:outline-none transition-all",
            "text-gray-200 placeholder:text-gray-500"
          )}
          placeholder="Your name"
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="email" className="block text-sm font-medium text-gray-300">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          value={formData.email}
          onChange={handleChange}
          className={cn(
            "w-full px-4 py-3 bg-nova-darker border border-gray-700 rounded-lg",
            "focus:ring-2 focus:ring-nova-purple focus:outline-none transition-all",
            "text-gray-200 placeholder:text-gray-500"
          )}
          placeholder="your.email@example.com"
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="message" className="block text-sm font-medium text-gray-300">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          value={formData.message}
          onChange={handleChange}
          className={cn(
            "w-full px-4 py-3 bg-nova-darker border border-gray-700 rounded-lg",
            "focus:ring-2 focus:ring-nova-purple focus:outline-none transition-all",
            "text-gray-200 placeholder:text-gray-500"
          )}
          placeholder="Your message..."
        />
      </div>

      <Button
        type="submit"
        disabled={isSubmitting}
        className={cn(
          "w-full py-3 rounded-lg font-medium relative overflow-hidden",
          "bg-gradient-to-r from-nova-purple to-nova-magenta hover:opacity-90 transition-all",
          "text-white"
        )}
      >
        {isSubmitting ? (
          <>
            <span className="inline-block animate-pulse">Sending...</span>
          </>
        ) : (
          "Send Message"
        )}
      </Button>
    </form>
  );
};

export default ContactForm;
