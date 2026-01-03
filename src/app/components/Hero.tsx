import { ImageWithFallback } from './figma/ImageWithFallback';
import { Button } from './ui/button';
import { Sparkles } from 'lucide-react';

export function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 text-accent-foreground">
              <Sparkles className="h-4 w-4" />
              <span className="text-sm">Creative Technology Studio</span>
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl">
              We Create Digital Experiences That Inspire
            </h1>
            <p className="text-xl text-muted-foreground max-w-xl">
              Transforming bold ideas into exceptional digital products through creative design and cutting-edge technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={scrollToContact}
                className="bg-accent text-accent-foreground hover:bg-accent/90"
              >
                Start Your Project
              </Button>
              <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                View Our Work
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1742440710193-3547e0b9d4db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMHdvcmtzcGFjZSUyMHRlYW18ZW58MXx8fHwxNzY3NDUxMzI3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Creative workspace"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent rounded-full blur-3xl opacity-50" />
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary rounded-full blur-3xl opacity-20" />
          </div>
        </div>
      </div>
    </section>
  );
}
