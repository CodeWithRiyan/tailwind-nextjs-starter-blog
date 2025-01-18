'use client'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { Mail, Phone, MapPin } from 'lucide-react'
import NextImage from 'next/image'
import LogoBlack from '@/data/logo-black.png'
import LogoWhite from '@/data/logo-white.png'
import { useTheme } from 'next-themes'
import { Facebook, Linkedin, Instagram } from './social-icons/icons'

const Footer = () => {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const currentYear = new Date().getFullYear()

  const navigation = {
    main: [
      { name: 'Home', href: '/' },
      { name: 'Blog', href: '/blog' },
      { name: 'Projects', href: '/projects' },
      { name: 'Contact', href: '/contact' },
    ],
    services: [
      { name: 'Web Development', href: '/about' },
      { name: 'Mobile Development', href: 'about' },
      { name: 'UI/UX Design', href: '/about' },
      { name: 'API Development', href: '/about' },
    ],
    social: [
      {
        name: 'Facebook',
        icon: Facebook,
        href: 'https://www.facebook.com/pt.riyan.solusi.teknologi',
      },
      { name: 'LinkedIn', icon: Linkedin, href: 'https://www.linkedin.com/company/riyan-id' },
      {
        name: 'Instagram',
        icon: Instagram,
        href: 'https://www.instagram.com/ptriyansolusiteknologi',
      },
    ],
  }
  // Render a placeholder during SSR and initial render
  const logoElement = mounted ? (
    theme === 'dark' ? (
      <NextImage width={280} src={LogoWhite} alt="Logo White" priority />
    ) : (
      <NextImage width={280} src={LogoBlack} alt="Logo Black" priority />
    )
  ) : (
    // Render a transparent placeholder during SSR to maintain layout
    <div className="h-[50px] w-[280px]" /> // Adjust height based on your logo's aspect ratio
  )

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <footer className="bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="flex items-center space-x-2">
              {logoElement}
            </Link>
            <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
              Building digital solutions with modern technology and best practices.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-900 dark:text-white">
              Navigation
            </h3>
            <ul className="mt-4 space-y-2">
              {navigation.main.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-gray-600 transition-colors 
                      duration-300 hover:text-primary-500 dark:text-gray-400 dark:hover:text-primary-400"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="col-span-1">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-900 dark:text-white">
              Services
            </h3>
            <ul className="mt-4 space-y-2">
              {navigation.services.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-gray-600 transition-colors 
                      duration-300 hover:text-primary-500 dark:text-gray-400 dark:hover:text-primary-400"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-span-1">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-900 dark:text-white">
              Contact
            </h3>
            <ul className="mt-4 space-y-4">
              <li>
                <a
                  href="mailto:marketing@riyan.id"
                  className="flex items-center text-sm text-gray-600 transition-colors 
                    duration-300 hover:text-primary-500 dark:text-gray-400 dark:hover:text-primary-400"
                >
                  <Mail className="mr-2 h-4 w-4" />
                  marketing@riyan.id
                </a>
              </li>
              <li>
                <a
                  href="tel:+6285713082841"
                  className="flex items-center text-sm text-gray-600 transition-colors 
                    duration-300 hover:text-primary-500 dark:text-gray-400 dark:hover:text-primary-400"
                >
                  <Phone className="mr-2 h-4 w-4" />
                  +62 857-1308-2841
                </a>
              </li>
              <li className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                <MapPin className="mr-2 h-4 w-4" />
                KH. Wahid Hasyim, Gg. 01 No. 71 Kauman, Pekalongan. 51128
              </li>
            </ul>

            {/* Social Links */}
            <div className="mt-6">
              <div className="flex space-x-4">
                {navigation.social.map((item) => {
                  const Icon = item.icon
                  return (
                    <a
                      key={item.name}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 transition-colors duration-300 
                        hover:text-primary-500 dark:text-gray-400 dark:hover:text-primary-400"
                    >
                      <span className="sr-only">{item.name}</span>
                      <Icon className="h-5 w-5 fill-current" />
                    </a>
                  )
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-gray-200 pt-8 dark:border-gray-800">
          <div className="flex items-center justify-center">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              © {currentYear} Riyan.id. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
