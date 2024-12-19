import React from 'react';
import { Facebook, Twitter, Instagram } from "lucide-react";

const footerSections = [
  {
    title: "Shop",
    links: [
      { name: "Categories", to: "#" },
      { name: "New Arrivals", to: "#" },
      { name: "Featured", to: "#" },
      { name: "Deals", to: "#" },
    ],
  },
  {
    title: "Support",
    links: [
      { name: "Contact Us", to: "#" },
      { name: "FAQ", to: "#" },
      { name: "Shipping", to: "#" },
      { name: "Returns", to: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { name: "About Us", to: "#" },
      { name: "Blog", to: "#" },
      { name: "Careers", to: "#" },
      { name: "Press", to: "#" },
    ],
  },
  {
    title: "Follow Us",
    socialLinks: [
      { icon: Instagram, to: "#" },
      { icon: Twitter, to: "#" },
      { icon: Facebook, to: "#" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-blue text-white mt-24 py-16">
      <div className="max-w-screen-xl mx-auto px-5">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {footerSections.map((section, index) => (
            <div key={index}>
              <h3 className="text-xl font-bold mb-4">{section.title}</h3>
              {section.links && (
                <ul className="space-y-2">
                  {section.links.map((link, idx) => (
                    <li key={idx}>
                      <a href={link.to} className="hover:text-purple-400">
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
              {section.socialLinks && (
                <div className="flex space-x-4">
                  {section.socialLinks.map((social, idx) => (
                    <a key={idx} href={social.to} className="hover:text-purple-400">
                      <social.icon size={24} />
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p>&copy; 2024 Your E-commerce Store. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
