import React from 'react';
import Image from 'next/image';
import { Quote } from 'lucide-react';

const TestimonialsSection = () => {
  const listTestimonials = [
    {
      image: "/static/images/logo/boskasir.png",
      alt: "bos kasir",
      detail: "Working with them has been a game-changer for our business. Their technical expertise and dedication to quality helped us create a robust point-of-sale system that perfectly meets our needs.",
      name: "Kukuh Setiawan,S.Kom",
      role: "Founder",
      company: "Bos Kasir",
    },
    {
      image: "/static/images/logo/bnv.png",
      alt: "bni corporate university",
      detail: "The examination platform they developed has significantly improved our training assessment process. Their attention to detail and understanding of our requirements was exceptional.",
      name: "Surya Radhitya,S.Psi",
      role: "Behavior data analyst",
      company: "PT Bank Negara Indonesia",
    },
    {
      image: "/static/images/logo/australia.png",
      alt: "Performance Vehicle Australia",
      detail: "Their ability to deliver complex solutions while maintaining user-friendliness is impressive. The system they built has streamlined our operations considerably.",
      name: "Guy Shelton",
      role: "Vendor",
      company: "Performance Vehicle Australia",
    },
    {
      image: "/static/images/logo/onekick.svg",
      alt: "One Kick Production",
      detail: "Outstanding collaboration and technical prowess. They transformed our vision into reality with a solution that exceeded our expectations.",
      name: "Andre Dibiago",
      role: "Founder",
      company: "One Kick Production",
    },
  ];

  return (
    <div className="w-full py-16 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            Client Testimonials
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Hear what our clients have to say about their experiences working with us
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {listTestimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="group bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg 
                hover:shadow-xl transition-all duration-300 opacity-0 animate-slide-in"
              style={{
                animationDelay: `${index * 150}ms`,
                animationFillMode: 'forwards'
              }}
            >
              <div className="flex items-center space-x-4 mb-6">
                <div className="relative w-16 h-16 flex-shrink-0">
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
                <Quote className="absolute -top-2 -left-2 w-8 h-8 text-primary-500/20 dark:text-primary-400/20" />
                <p className="text-gray-600 dark:text-gray-400 italic pl-6">
                  {testimonial.detail}
                </p>
              </div>

              <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
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
  );
};

export default TestimonialsSection;