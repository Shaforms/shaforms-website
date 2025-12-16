import Link from 'next/link';
import {
  Facebook,
  Instagram,
  Linkedin,
  MapPin,
  Mail,
} from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">

        {/* TOP GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">

          {/* BRAND */}
          <div>
            <h2 className="text-xl font-semibold text-primary mb-4">
              Shaforms
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-sm">
              Our foundation is excellence — delivering what we promise.
              We build with precision, quality craftsmanship, and
              forward-thinking design.
            </p>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="text-sm font-semibold text-primary mb-4 uppercase tracking-wide">
              Contact
            </h3>

            <div className="space-y-4 text-sm text-muted-foreground">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-accent mt-0.5" />
                <div>
                  <p className="font-medium text-foreground">
                    Head Office
                  </p>
                  <p>Perinthalmanna</p>
                  <p>Malappuram, Kerala, India</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-accent" />
                <a
                  href="mailto:info@shaforms.com"
                  className="hover:text-accent transition-colors"
                >
                  info@shaforms.com
                </a>
              </div>
            </div>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h3 className="text-sm font-semibold text-primary mb-4 uppercase tracking-wide">
              Quick Links
            </h3>

            <div className="grid grid-cols-2 gap-y-2 text-sm">
              {[
                { name: 'About Us', href: '/about' },
                { name: 'Projects', href: '/projects' },
                { name: 'Services', href: '/services' },
                { name: 'Careers', href: '/careers' },
                { name: 'Contact', href: '/contact' },
              ].map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-muted-foreground hover:text-accent transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="border-t border-border pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Shaforms Constructions.
            All rights reserved.
          </p>

          <div className="flex items-center gap-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-accent transition-colors"
            >
              <Facebook size={18} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-accent transition-colors"
            >
              <Instagram size={18} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-accent transition-colors"
            >
              <Linkedin size={18} />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
