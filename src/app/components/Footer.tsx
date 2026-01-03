export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="space-y-4">
            <h3 className="text-accent">NexaCreate</h3>
            <p className="text-white/80 text-sm">
              Transforming bold ideas into exceptional digital experiences.
            </p>
          </div>
          <div>
            <h4 className="mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-white/80">
              <li><a href="#" className="hover:text-accent transition-colors">Brand Design</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Web Development</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">UI/UX Design</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Digital Strategy</a></li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-white/80">
              <li><a href="#" className="hover:text-accent transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Our Work</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Blog</a></li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4">Connect</h4>
            <ul className="space-y-2 text-sm text-white/80">
              <li><a href="#" className="hover:text-accent transition-colors">Twitter</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">LinkedIn</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Instagram</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Dribbble</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/20 pt-8 text-center text-sm text-white/60">
          <p>&copy; {currentYear} NexaCreate. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
