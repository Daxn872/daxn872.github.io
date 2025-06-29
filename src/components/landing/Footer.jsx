import React from 'react';
import { motion } from 'framer-motion';
import { Layers } from 'lucide-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiscord, faXTwitter } from '@fortawesome/free-brands-svg-icons';

const Footer = ({ companyName }) => {
  const socialLinks = [
    { name: 'X (Twitter)', icon: faXTwitter, url: 'https://x.com/GoNoneLimits' },
    { name: 'Discord', icon: faDiscord, url: 'https://discord.gg/nFt4vJACSE' },
  ];

  return (
    <footer className="border-t border-border/50 dark:border-border py-8 px-4 bg-secondary/30 dark:bg-secondary/30">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-center gap-6"
        >
          <div className="flex items-center gap-2">
            <Layers className="h-5 w-5 text-muted-foreground" />
            <span className="text-md font-semibold text-muted-foreground">{companyName}</span>
          </div>
          
          <div className="text-sm text-muted-foreground text-center">
            <p>&copy; {new Date().getFullYear()} {companyName}. Invest with clarity and confidence.</p>
          </div>

          <div className="flex items-center gap-4">
            {socialLinks.map(link => (
              <a 
                key={link.name} 
                href={link.url} 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label={link.name}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <FontAwesomeIcon icon={link.icon} className="h-5 w-5" />
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;