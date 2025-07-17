import { Facebook, Instagram, Twitter, Youtube, Phone, Mail, MapPin } from "lucide-react";
// Assuming 'logo' is available at this path or replace with a placeholder URL
// import logo from "/images/Logo.png";

export default function Footer() {
  return (
    <footer className="bg-white text-black px-6 py-8 font-inter antialiased">

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-8">
        {/* Left Section: Logo and Socials */}
        <div className="flex flex-col items-start text-start">
          {/* Replaced local logo import with a placeholder image for direct rendering */}
          <img src="https://placehold.co/100x32/FFFFFF/000000?text=AS Enterprises" alt="Logo" className="h-16 mb-4" />
          <div className="flex space-x-4">
            <a href="#" aria-label="Facebook">
              <Facebook className="w-6 h-6 text-black hover:text-gray-600 transition-colors duration-200" />
            </a>
            <a href="#" aria-label="Instagram">
              <Instagram className="w-6 h-6 text-black hover:text-gray-600 transition-colors duration-200" />
            </a>
            <a href="#" aria-label="Twitter">
              <Twitter className="w-6 h-6 text-black hover:text-gray-600 transition-colors duration-200" />
            </a>
            <a href="#" aria-label="Youtube">
              <Youtube className="w-6 h-6 text-black hover:text-gray-600 transition-colors duration-200" />
            </a>
          </div>
        </div>

        <div className="col-span-2 grid grid-cols-1 sm:grid-cols-3 gap-6">
          {/* Build a PC Links */}
          <div>
            <h3 className="font-semibold text-lg text-black mb-3">Visit our companies</h3>
            <div className="h-[1px] bg-gray-300 mb-3 w-20" /> {/* Adjusted line color */}
            <ul className="space-y-2 text-sm text-gray-700">
              <li><a href="#" className="hover:text-black transition-colors duration-200">Empress.in</a></li>
              <li><a href="#" className="hover:text-black transition-colors duration-200">SpinfluenceMedia.in</a></li>
              <li><a href="#" className="hover:text-black transition-colors duration-200">Company3.com</a></li>
              <li><a href="#" className="hover:text-black transition-colors duration-200">Company4.com</a></li>
            </ul>
          </div>

          {/* Useful Links */}
          <div>
            <h3 className="font-semibold text-lg text-black mb-3">Useful Links</h3>
            <div className="h-[1px] bg-gray-300 mb-3 w-20" /> {/* Adjusted line color */}
            <ul className="space-y-2 text-sm text-gray-700">
              <li><a href="#" className="hover:text-black transition-colors duration-200">About Us</a></li>
              <li><a href="#" className="hover:text-black transition-colors duration-200">Something 1</a></li>
              <li><a href="#" className="hover:text-black transition-colors duration-200">Something 2</a></li>
              <li><a href="#" className="hover:text-black transition-colors duration-200">Something 3</a></li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="font-semibold text-lg text-black mb-1">Contact Us</h3>
            <div className="h-[1px] bg-gray-300 mb-3 w-20" /> {/* Adjusted line color */}
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-gray-700" /> +91 98765 43210
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-gray-700" /> customerhelp@asenterprises.com
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-1 text-gray-700" />
                MS-101, Sector D, Aliganj
                Lucknow, Uttar Pradesh 226024
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="pt-6 border-t border-gray-200"> {/* Adjusted border color */}
        <div className="flex justify-center items-center">
          <a href="/" className="text-gray-600 hover:text-black transition-colors duration-200 text-sm">www.asenterprises.in</a>
        </div>
        <div className="text-center text-gray-600 text-xs mt-1">
          &copy; {new Date().getFullYear()} Your Company Name. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
