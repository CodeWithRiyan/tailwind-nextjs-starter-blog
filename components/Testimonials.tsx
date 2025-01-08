import React from 'react'
import Image from 'next/image'
import { Quote } from 'lucide-react'

const TestimonialsSection = () => {
  const listTestimonials = [
    {
      image: '/static/images/logo/boskasir.png',
      alt: 'bos kasir',
      detail:
        'Working with them has been a game-changer for our business. Their technical expertise and dedication to quality helped us create a robust point-of-sale system that perfectly meets our needs.',
      name: 'Kukuh Setiawan,S.Kom',
      role: 'Founder',
      company: 'Bos Kasir',
    },
    {
      image: '/static/images/logo/bnv.png',
      alt: 'bni corporate university',
      detail:
        'The examination platform they developed has significantly improved our training assessment process. Their attention to detail and understanding of our requirements was exceptional.',
      name: 'Surya Radhitya,S.Psi',
      role: 'Behavior data analyst',
      company: 'PT Bank Negara Indonesia',
    },
    {
      image: '/static/images/logo/australia.png',
      alt: 'Performance Vehicle Australia',
      detail:
        'Their ability to deliver complex solutions while maintaining user-friendliness is impressive. The system they built has streamlined our operations considerably.',
      name: 'Guy Shelton',
      role: 'Vendor',
      company: 'Performance Vehicle Australia',
    },
    {
      image: '/static/images/logo/onekick.svg',
      alt: 'One Kick Production',
      detail:
        'Outstanding collaboration and technical prowess. They transformed our vision into reality with a solution that exceeded our expectations.',
      name: 'Andre Dibiago',
      role: 'Founder',
      company: 'One Kick Production',
    },
  ]

  return (
    <div className="w-full bg-gray-50 py-16 dark:bg-gray-900">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-gray-100">
            Client Testimonials
          </h2>
          <p className="mx-auto max-w-2xl text-gray-600 dark:text-gray-400">
            Hear what our clients have to say about their experiences working with us
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {listTestimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="animate-slide-in group rounded-lg bg-white p-6 opacity-0 
                shadow-lg transition-all duration-300 hover:shadow-xl dark:bg-gray-800"
              style={{
                animationDelay: `${index * 150}ms`,
                animationFillMode: 'forwards',
              }}
            >
              <div className="mb-6 flex items-center space-x-4">
                <div className="relative h-16 w-16 flex-shrink-0">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.alt}
                    fill
                    className="object-contain"
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-gray-100">
                    {testimonial.company}
                  </h3>
                </div>
              </div>

              <div className="relative mb-6">
                <Quote className="absolute -left-2 -top-2 h-8 w-8 text-primary-500/20 dark:text-primary-400/20" />
                <p className="pl-6 italic text-gray-600 dark:text-gray-400">{testimonial.detail}</p>
              </div>

              <div className="border-t border-gray-200 pt-4 dark:border-gray-700">
                <div className="flex flex-col">
                  <span className="font-medium text-gray-900 dark:text-gray-100">
                    {testimonial.name}
                  </span>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {testimonial.role}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default TestimonialsSection
