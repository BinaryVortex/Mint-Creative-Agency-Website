import { Users } from 'lucide-react';

const stats = [
  { value: '100+', label: 'Projects Completed' },
  { value: '50+', label: 'Happy Clients' },
  { value: '15+', label: 'Team Members' },
  { value: '5+', label: 'Years Experience' },
];

export function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-primary text-white">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 text-accent">
              <Users className="h-4 w-4" />
              <span className="text-sm">About Us</span>
            </div>
            <h2 className="text-4xl sm:text-5xl">
              We're a Team of Creative Innovators
            </h2>
            <p className="text-lg text-white/80">
              Founded with a passion for design and technology, NexaCreate has been helping businesses transform their digital presence. Our multidisciplinary team brings together designers, developers, and strategists who are committed to delivering excellence.
            </p>
            <p className="text-lg text-white/80">
              We believe in the power of collaboration and innovation. Every project is an opportunity to push boundaries and create something extraordinary that drives real business results.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-center border border-white/20"
              >
                <div className="text-4xl sm:text-5xl text-accent mb-2">{stat.value}</div>
                <div className="text-white/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
