import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Heart, Code2 } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold gradient-text">
              Hamza Yar Khan
            </h3>
            <p className="text-muted-foreground">
              Full Stack Developer & AI Enthusiast crafting innovative solutions 
              for the modern web.
            </p>
            <div className="flex gap-2">
              <Badge variant="secondary" className="bg-primary/10 text-primary">
                Available for Work
              </Badge>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold">Quick Links</h4>
            <nav className="space-y-2">
              {['About', 'Skills', 'Experience', 'Projects', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => {
                    const element = document.querySelector(`#${item.toLowerCase()}`);
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="block text-muted-foreground hover:text-primary transition-colors"
                >
                  {item}
                </button>
              ))}
            </nav>
          </div>

          {/* Connect Section */}
          <div className="space-y-4">
            <h4 className="font-semibold">Let's Connect</h4>
            <p className="text-muted-foreground text-sm">
              Ready to discuss your next project or explore opportunities? 
              I'm always excited to work on innovative solutions.
            </p>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>📧 hamza@example.com</p>
              <p>🌐 Available Worldwide (Remote)</p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-border/50">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © {currentYear} Hamza Yar Khan | Full Stack Developer & AI Enthusiast
            </p>
            
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>Built with</span>
              <Heart className="w-4 h-4 text-red-500 animate-pulse" />
              <span>using</span>
              <Code2 className="w-4 h-4 text-primary" />
              <span>React & .NET</span>
            </div>
          </div>
          
          <div className="mt-4 text-center">
            <p className="text-xs text-muted-foreground">
              Designed and developed with attention to detail, accessibility, and performance
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;