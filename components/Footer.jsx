"use client";

import { FaGithub, FaLinkedin } from "react-icons/fa";
import Image from "next/image";

import { motion } from "framer-motion";

const socialLinks = [
  { icon: FaGithub, href: "https://github.com/Bassem-Fullstack", label: "GitHub" },
  { icon: FaLinkedin, href: "https://www.linkedin.com/in/bassem-ali-040b04356", label: "LinkedIn" },
];

export const Footer = () => {

  return (
    <footer className="py-3 border-t border-border">
      <div className="container mx-auto px-10">
        <motion.div className="flex flex-col  md:flex-row items-center justify-between"
        
            initial = {{ opacity : 0 , y:85 , filter :"blur(10px)"}}

whileInView={{ opacity : 1 , y:0 , filter : "blur(0px)"}}

transition={ { duration : 0.8}}

viewport={ { once : true}}
        
        
        >
          {/* Logo & Copyright */}
         
         <div className="flex flex-col w-full items-center md:flex-row justify-center">

     <motion.div

       animate={{ opacity: [1, 0.5, 1]  }}

     transition={{ duration: 2, repeat: Infinity }} >

     <Image src="/logo.png" alt="BA Logo" width={150} height={70}   className="w-[170px] md:w-[150px]" />

     </motion.div>

      <div className="text-center flex-1 mb-4 md:mb-0">

        © 2026 <span className="text-primary text-lg">Bassem Ali</span>. All rights reserved.

      </div>

         </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">

            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                target="blank"
                className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all"
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  );
};