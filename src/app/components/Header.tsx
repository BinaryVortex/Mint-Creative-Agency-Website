import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <span className="text-primary">NexaCreate</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('services')}
              className="text-foreground hover:text-accent transition-colors"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('work')}
              className="text-foreground hover:text-accent transition-colors"
            >
              Our Work
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-foreground hover:text-accent transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-foreground hover:text-accent transition-colors"
            >
              Contact
            </button>
            <Button className="bg-accent text-accent-foreground hover:bg-accent/90">
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-2">
            <button
              onClick={() => scrollToSection('services')}
              className="block w-full text-left px-4 py-2 text-foreground hover:bg-muted transition-colors"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('work')}
              className="block w-full text-left px-4 py-2 text-foreground hover:bg-muted transition-colors"
            >
              Our Work
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="block w-full text-left px-4 py-2 text-foreground hover:bg-muted transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="block w-full text-left px-4 py-2 text-foreground hover:bg-muted transition-colors"
            >
              Contact
            </button>
            <div className="px-4 pt-2">
              <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                Get Started
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
