import NewsletterForm from 'pliny/ui/NewsletterForm'
import { useEffect, useState } from 'react'
import siteMetadata from '@/data/siteMetadata'

// Generate points based on viewport size
const generateNetworkPoints = (isMobile) => {
  if (isMobile) {
    return [
      // Mobile layout - fewer points with better spacing
      // Top section
      { x: 10, y: 5 },
      { x: 50, y: 5 },
      { x: 90, y: 5 },
      // Upper middle
      // Bottom
      { x: 10, y: 95 },
      { x: 50, y: 95 },
      { x: 90, y: 95 },
    ]
  }

  // Desktop layout - full grid
  return [
    // Corner points
    { x: 5, y: 5 }, // Top left
    { x: 95, y: 5 }, // Top right
    { x: 5, y: 95 }, // Bottom left
    { x: 95, y: 95 }, // Bottom right
    // Top row
    { x: 15, y: 10 },
    { x: 35, y: 10 },
    { x: 50, y: 10 },
    { x: 65, y: 10 },
    { x: 85, y: 10 },
    // Upper middle row
    { x: 25, y: 25 },
    { x: 50, y: 25 },
    { x: 75, y: 25 },
    // Center row
    { x: 15, y: 50 },
    { x: 35, y: 50 },
    { x: 50, y: 50 },
    { x: 65, y: 50 },
    { x: 85, y: 50 },
    // Lower middle row
    { x: 25, y: 75 },
    { x: 50, y: 75 },
    { x: 75, y: 75 },
    // Bottom row
    { x: 15, y: 90 },
    { x: 35, y: 90 },
    { x: 50, y: 90 },
    { x: 65, y: 90 },
    { x: 85, y: 90 },
  ]
}

const BackgroundDecorations = ({ isVisible }) => {
  const [mounted, setMounted] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    setMounted(true)
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768) // 768px is typical md breakpoint
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  if (!mounted) return null

  const networkPoints = generateNetworkPoints(isMobile)

  return (
    <>
      {/* Grid background */}
      <div className="absolute inset-0 -z-10">
        <div
          className={`absolute inset-0 bg-[linear-gradient(to_right,#4444441a_1px,transparent_1px),linear-gradient(to_bottom,#4444441a_1px,transparent_1px)] bg-[size:24px_24px] dark:bg-[linear-gradient(to_right,#ffffff1a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff1a_1px,transparent_1px)]
            ${isVisible ? 'opacity-40' : 'opacity-0'} transition-opacity duration-1000`}
        />
      </div>

      {/* Network visualization */}
      <div className="absolute inset-0 -z-10">
        {networkPoints.map((point, i) => (
          <div key={i}>
            {/* Persistent dot with gentle pulse */}
            <div
              className={`absolute h-2 w-2 rounded-full bg-blue-400/70 dark:bg-blue-400/70
                  ${isVisible ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}
                  transition-all duration-500`}
              style={{
                top: `${point.y}%`,
                left: `${point.x}%`,
                transitionDelay: `${i * 100}ms`,
              }}
            >
              {/* Continuous gentle pulse effect */}
              <div
                className="animate-gentle-pulse absolute inset-0 rounded-full 
                  bg-blue-300/50 dark:bg-blue-300/50"
              />
            </div>

            {/* Repeating connection lines */}
            {networkPoints.slice(i + 1).map((endpoint, j) => {
              const distance = Math.hypot(endpoint.x - point.x, endpoint.y - point.y)
              // Adjust connection distance threshold for mobile
              const maxDistance = isMobile ? 35 : 45
              if (distance < maxDistance) {
                const angle =
                  (Math.atan2(endpoint.y - point.y, endpoint.x - point.x) * 180) / Math.PI
                return (
                  <div
                    key={`${i}-${j}`}
                    className="absolute h-px"
                    style={{
                      top: `${point.y}%`,
                      left: `${point.x}%`,
                      width: `${distance}%`,
                      transform: `rotate(${angle}deg)`,
                      transformOrigin: '0 0',
                    }}
                  >
                    <div className="h-full w-full">
                      <div
                        className="animate-connection-flow absolute inset-0 
                          bg-gradient-to-r from-blue-400/30
                          to-blue-400/30 dark:from-blue-400/30
                          dark:to-blue-400/30"
                        style={{
                          animationDelay: `${(i + j) * 50}ms`,
                        }}
                      />
                    </div>
                  </div>
                )
              }
              return null
            })}
          </div>
        ))}
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 -z-10">
        <div
          className={`absolute inset-0 bg-gradient-to-b from-purple-900/10 via-transparent to-purple-900/10
            ${isVisible ? 'opacity-60' : 'opacity-0'} transition-opacity duration-1000`}
        />
      </div>
    </>
  )
}
const ClientSideContent = ({ isVisible }) => {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <>
      <style jsx global>{`
        @keyframes gentle-pulse {
          0%,
          100% {
            transform: scale(1);
            opacity: 0.5;
          }
          50% {
            transform: scale(1.5);
            opacity: 0.2;
          }
        }

        @keyframes connection-flow {
          0% {
            clip-path: polygon(0% 0%, 0% 100%, 0% 100%, 0% 0%);
            opacity: 0;
          }
          5% {
            clip-path: polygon(0% 0%, 0% 100%, 5% 100%, 5% 0%);
            opacity: 0.4;
          }
          95% {
            clip-path: polygon(0% 0%, 0% 100%, 100% 100%, 100% 0%);
            opacity: 0.4;
          }
          100% {
            clip-path: polygon(0% 0%, 0% 100%, 100% 100%, 100% 0%);
            opacity: 0;
          }
        }

        .animate-gentle-pulse {
          animation: gentle-pulse 3s infinite ease-in-out;
        }

        .animate-connection-flow {
          animation: connection-flow 6s infinite ease-in-out;
        }
      `}</style>
      <BackgroundDecorations isVisible={isVisible} />

      {/* Newsletter Form */}
      {siteMetadata.newsletter?.provider && (
        <div
          className={`flex items-center justify-center pt-4
            transition-all duration-1000
            ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
          style={{ transitionDelay: '1400ms' }}
        >
          <NewsletterForm />
        </div>
      )}
    </>
  )
}

export default ClientSideContent
