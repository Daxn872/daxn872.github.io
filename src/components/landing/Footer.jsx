
import React from 'react';
import { motion } from 'framer-motion';
import { Zap } from 'lucide-react';

const Footer = ({ companyName }) => {
  return (
    <footer className="border-t border-border/50 py-8 px-4">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-center"
        >
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <Zap className="h-6 w-6 text-primary" />
            <span className="text-lg font-bold crypto-gradient">{companyName}</span>
          </div>
          
          <div className="text-sm text-muted-foreground text-center md:text-right">
            <p>&copy; {new Date().getFullYear()} {companyName}. All rights reserved.</p>
            <p className="mt-1">Elevating Crypto Trading Through Expert Analysis</p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
