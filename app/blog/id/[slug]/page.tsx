import 'css/prism.css'
import 'katex/dist/katex.css'

import { allAuthors } from 'contentlayer/generated'
import siteMetadata from '@/data/siteMetadata'
import PageTitle from '@/components/PageTitle'
import Script from 'next/script'
import Pricing from '@/components/ui/pricing'
import { Metadata } from 'next'

const postDateTemplate: Intl.DateTimeFormatOptions = {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
}

const demoPlans = [
  {
    name: 'STANDARD',
    price: '50',
    yearlyPrice: '40',
    period: 'per month',
    features: [
      'Up to 10 projects',
      'Basic analytics',
      '48-hour support response time',
      'Limited API access',
      'Community support',
    ],
    description: 'Perfect for individuals and small projects',
    buttonText: 'Start Free Trial',
    href: '/sign-up',
    isPopular: false,
  },
  {
    name: 'BUSSINESS',
    price: '99',
    yearlyPrice: '79',
    period: 'per month',
    features: [
      'Unlimited projects',
      'Advanced analytics',
      '24-hour support response time',
      'Full API access',
      'Priority support',
      'Team collaboration',
      'Custom integrations',
    ],
    description: 'Ideal for growing teams and businesses',
    buttonText: 'Get Started',
    href: '/sign-up',
    isPopular: true,
  },
  {
    name: 'ENTERPRISE',
    price: '299',
    yearlyPrice: '239',
    period: 'per month',
    features: [
      'Everything in Professional',
      'Custom solutions',
      'Dedicated account manager',
      '1-hour support response time',
      'SSO Authentication',
      'Advanced security',
      'Custom contracts',
      'SLA agreement',
    ],
    description: 'For large organizations with specific needs',
    buttonText: 'Contact Sales',
    href: '/contact',
    isPopular: false,
  },
]

const slugToTitleMap = (slug: string) => {
  return slug
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
}

const cityName = (slug: string) => {
  const hasCity = slug.includes('di-')

  if (!hasCity) return ''

  return (
    slug
      .split('di-')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .find((_, i) => i === 1) || ''
  )
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const title = slugToTitleMap(slug)
  const city = cityName(slug)

  const pageTitle = `${title} - Jasa Pembuatan Website Murah${city ? ` di ${city}` : ''}`
  const description = `Riyan.id menjadi pilihan tepat bagi Anda yang mencari jasa pembuatan website murah${city ? ` di ${city}` : ''} dan sekitarnya. Website profesional dengan harga murah, full akses, full optimasi serta gratis maintenance selamanya.`
  const keywords = [
    'jasa pembuatan website',
    'website murah',
    'jasa website',
    'pembuatan website profesional',
    'website toko online',
    'website company profile',
    city && `website ${city}`,
    city && `jasa website ${city}`,
    'riyan.id',
  ].filter(Boolean)

  return {
    title: pageTitle,
    description: description,
    keywords: keywords.join(', '),
    authors: [{ name: 'Riyan.id' }],
    creator: 'Riyan.id',
    publisher: 'Riyan.id',
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    openGraph: {
      type: 'website',
      locale: 'id_ID',
      url: `${siteMetadata.siteUrl}/${slug}`,
      title: pageTitle,
      description: description,
      siteName: siteMetadata.title,
      images: [
        {
          url: `${siteMetadata.siteUrl}/static/images/og-image.jpg`,
          width: 1200,
          height: 630,
          alt: pageTitle,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: pageTitle,
      description: description,
      images: [`${siteMetadata.siteUrl}/static/images/twitter-image.jpg`],
      creator: '@riyanid',
    },
    alternates: {
      canonical: `${siteMetadata.siteUrl}/${slug}`,
    },
    other: {
      'geo.region': 'ID',
      'geo.country': 'Indonesia',
      ...(city && { 'geo.placename': city }),
    },
  }
}

export default async function Page(props: { params: Promise<{ slug: string }> }) {
  const { slug } = await props.params

  const title = slugToTitleMap(slug)
  const city = cityName(slug)
  const date = new Date().toISOString()
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: title,
    datePublished: date,
    dateModified: date,
    author: allAuthors.map((author) => {
      return {
        '@type': 'Person',
        name: author.name,
      }
    }),
  }

  return (
    <>
      <Script
        id="ld-json"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <article>
        <header className="pt-6 xl:pb-6">
          <div className="space-y-1 text-center">
            <dl className="space-y-10">
              <div>
                <dt className="sr-only">Published on</dt>
                <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                  <time dateTime={date}>
                    {new Date(date).toLocaleDateString('id-ID', postDateTemplate)}
                  </time>
                </dd>
              </div>
            </dl>
            <div>
              <PageTitle>{title}</PageTitle>
            </div>
          </div>
        </header>
        <p>
          {`Riyan.id menjadi pilihan tepat bagi Anda yang mencari jasa pembuatan website murah ${city ? `di ${city}` : ''}dan sekitarnya. Website yang kami design sangat user friendly dan friendly. Memiliki website profesional dengan harga murah, full akses, full optimasi serta gratis maintenance selamanya hanya bisa Anda dapatkan di Riyan.id. Buat para pengusaha ataupun perusahaan, pelaku UKM yang ada di Pekalongan yang ingin membuat website profile perusahaan, website toko online, website portal berita, website custom dan website Riyan.id adalah pilihan tepat.`}
        </p>
        <Pricing
          plans={demoPlans}
          title={`Harga ${title}`}
          description="Silakan pilih paket pembuatan website sesuai kebutuhan Anda. Jika bingung menentukan
            paket yang sesuai dengan kebuthuan, silakan chat Admin. Dengan senang hati kami
            membantu menentukan paket website terbaik."
        />
      </article>
    </>
  )
}
