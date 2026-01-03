import { Mail } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Card, CardContent } from './ui/card';

export function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    alert('Thank you for your message! We will get back to you soon.');
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 text-accent-foreground mb-4">
            <Mail className="h-4 w-4" />
            <span className="text-sm">Get In Touch</span>
          </div>
          <h2 className="text-4xl sm:text-5xl mb-4">Let's Start a Conversation</h2>
          <p className="text-xl text-muted-foreground">
            Have a project in mind? We'd love to hear about it.
          </p>
        </div>

        <Card className="border-border">
          <CardContent className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="block">
                    Name
                  </label>
                  <Input
                    id="name"
                    placeholder="Your name"
                    required
                    className="bg-input-background"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="block">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    required
                    className="bg-input-background"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="subject" className="block">
                  Subject
                </label>
                <Input
                  id="subject"
                  placeholder="How can we help?"
                  required
                  className="bg-input-background"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="block">
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Tell us about your project..."
                  rows={6}
                  required
                  className="bg-input-background resize-none"
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-accent text-accent-foreground hover:bg-accent/90"
              >
                Send Message
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
