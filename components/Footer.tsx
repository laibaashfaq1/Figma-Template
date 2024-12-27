import Image from "next/image"
import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Facebook, Twitter, Instagram, Linkedin, Send } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="w-full max-w-[1170px] mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Exclusive Column */}
          <div className="space-y-4">
            <h2 className="text-[24px] font-bold">Exclusive</h2>
            <p className="font-medium">Subscribe</p>
            <p className="text-sm text-gray-300">Get 10% off your first order</p>
            <div className="flex gap-2">
              <Input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-transparent border-gray-800 focus:border-gray-700"
              />
              <Button size="icon" variant="ghost" className="border border-gray-800 hover:bg-gray-800">
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Support Column */}
          <div className="space-y-4">
            <h2 className="text-[20px] font-bold">Support</h2>
            <address className="not-italic text-sm text-gray-300">
              111 Bijoy sarani, Dhaka,<br />
              DH 1515, Bangladesh.
            </address>
            <p className="text-sm text-gray-300">exclusive@gmail.com</p>
            <p className="text-sm text-gray-300">+88015-88888-9999</p>
          </div>

          {/* Account Column */}
          <div className="space-y-4">
            <h2 className="text-[20px] font-bold">Account</h2>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><Link href="/account" className="hover:text-white transition-colors">My Account</Link></li>
              <li><Link href="/login" className="hover:text-white transition-colors">Login / Register</Link></li>
              <li><Link href="/cart" className="hover:text-white transition-colors">Cart</Link></li>
              <li><Link href="/wishlist" className="hover:text-white transition-colors">Wishlist</Link></li>
              <li><Link href="/shop" className="hover:text-white transition-colors">Shop</Link></li>
            </ul>
          </div>

          {/* Quick Link Column */}
          <div className="space-y-4">
            <h2 className="text-[20px] font-bold">Quick Link</h2>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-white transition-colors">Terms Of Use</Link></li>
              <li><Link href="/faq" className="hover:text-white transition-colors">FAQ</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Download App Column */}
          <div className="space-y-4">
            <h2 className="text-[20px] font-bold">Download App</h2>
            <p className="text-xs text-gray-300">Save $3 with App New User Only</p>
            <div className="grid grid-cols-2 gap-4">
              <div className="relative aspect-square">
                <Image 
                  src="/images/qr-code.png" 
                  alt="QR Code"
                  width={100}
                  height={100}
                  className="border border-gray-800 rounded-lg"
                />
              </div>
              <div className="space-y-2">
                <Image 
                  src="/images/play-store.png" 
                  alt="Download on Google Play"
                  width={120}
                  height={40}
                  className="rounded"
                />
                <Image 
                  src="/images/app-store.png" 
                  alt="Download on App Store"
                  width={120}
                  height={40}
                  className="rounded"
                />
              </div>
            </div>
            <div className="flex gap-6 pt-4">
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-6 w-6" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-6 w-6" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-6 w-6" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="h-6 w-6" />
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-16 pt-8 border-t border-gray-800 text-center text-sm text-gray-500">
          © Copyright Rimel 2022. All right reserved
        </div>
      </div>
    </footer>
  )
}

