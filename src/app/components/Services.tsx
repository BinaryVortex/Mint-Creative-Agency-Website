import { Code, Palette, Rocket, Sparkles } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';

const services = [
  {
    icon: Palette,
    title: 'Brand Design',
    description: 'Crafting unique visual identities that resonate with your audience and elevate your brand presence.',
  },
  {
    icon: Code,
    title: 'Web Development',
    description: 'Building responsive, scalable websites and web applications with modern technologies and best practices.',
  },
  {
    icon: Sparkles,
    title: 'UI/UX Design',
    description: 'Creating intuitive and delightful user experiences through research-driven design solutions.',
  },
  {
    icon: Rocket,
    title: 'Digital Strategy',
    description: 'Developing comprehensive digital strategies to help your business thrive in the online landscape.',
  },
];

export function Services() {
  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl sm:text-5xl mb-4">Our Services</h2>
          <p className="text-xl text-muted-foreground">
            We offer a comprehensive suite of creative and technical services to bring your vision to life
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <Card key={service.title} className="border-border hover:border-accent transition-all duration-300 hover:shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center mb-4">
                  <service.icon className="h-6 w-6 text-accent-foreground" />
                </div>
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
