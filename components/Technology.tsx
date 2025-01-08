import React from 'react'
import { Database, Globe, Code2, Server, Smartphone } from 'lucide-react'

const TechnologyStack = () => {
  const technologies = [
    {
      icon: <Code2 className="h-8 w-8" />,
      name: 'Frontend',
      items: ['React.js', 'Vue.js', 'Angular'],
    },
    {
      icon: <Server className="h-8 w-8" />,
      name: 'Backend',
      items: ['Node.js', 'Express', 'GraphQL'],
    },
    {
      icon: <Database className="h-8 w-8" />,
      name: 'Database',
      items: ['PostgreSQL', 'MongoDB', 'MySQL'],
    },
    {
      icon: <Globe className="h-8 w-8" />,
      name: 'DevOps',
      items: ['Docker', 'AWS', 'CI/CD'],
    },
    {
      icon: <Code2 className="h-8 w-8" />,
      name: 'CSS Frameworks',
      items: ['Bootstrap', 'Tailwind', 'Styled Components'],
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      name: 'Mobile Development',
      items: ['Android', 'iOS', 'Flutter'],
    },
  ]

  return (
    <>
      <style jsx global>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes pulse-ring {
          0% {
            transform: scale(0.8);
            opacity: 0.5;
          }
          50% {
            transform: scale(1);
            opacity: 0.3;
          }
          100% {
            transform: scale(0.8);
            opacity: 0.5;
          }
        }

        @keyframes slide-in {
          0% {
            transform: translateX(-100%);
            opacity: 0;
          }
          100% {
            transform: translateX(0);
            opacity: 1;
          }
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-pulse-ring {
          animation: pulse-ring 3s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }

        .animate-slide-in {
          animation: slide-in 0.6s ease-out forwards;
        }
      `}</style>

      <div className="mx-auto w-full max-w-6xl px-4 py-16 transition-all duration-1000">
        <div className="relative mb-12 text-center">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="animate-pulse-ring h-32 w-32 rounded-full bg-primary-500/10" />
          </div>
          <h2 className="animate-float relative text-3xl font-bold text-gray-900 dark:text-gray-100">
            Technologies We Use
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {technologies.map((tech, index) => (
            <div
              key={tech.name}
              className="animate-slide-in group rounded-lg bg-white p-6 opacity-0 shadow-lg transition-all duration-300 hover:shadow-xl dark:bg-gray-800"
              style={{
                animationDelay: `${index * 150}ms`,
                animationFillMode: 'forwards',
              }}
            >
              <div className="mb-4 flex items-center space-x-4">
                <div className="text-primary-500 transition-all duration-300 group-hover:rotate-12 group-hover:scale-110 dark:text-primary-400">
                  {tech.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 transition-all duration-300 group-hover:translate-x-2 dark:text-gray-100">
                  {tech.name}
                </h3>
              </div>

              <ul className="space-y-2">
                {tech.items.map((item, itemIndex) => (
                  <li
                    key={item}
                    className="flex transform items-center text-gray-600 transition-all duration-300 hover:translate-x-2 dark:text-gray-400"
                    style={{
                      transitionDelay: `${itemIndex * 100}ms`,
                    }}
                  >
                    <span className="mr-2 h-2 w-2 rounded-full bg-primary-500 opacity-75 transition-all duration-300 group-hover:w-3 group-hover:opacity-100 dark:bg-primary-400" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default TechnologyStack
