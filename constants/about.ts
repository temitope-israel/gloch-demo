// constants/about.ts

export const aboutPage = {
  whoWeAre: {
    eyebrow: 'About Gloch Stylistic',
    title: 'A Foundation Built on Integrity',
    intro:
      'At Gloch Stylistic Limited, we build beautiful, secure, and affordable homes across Lagos and Abuja without compromising on quality or craftsmanship.',
    pillars: [
      {
        title: 'Smart Design',
        description: 'Built with energy-efficient materials and high durability to ensure lower maintenance costs.',
      },
      {
        title: 'Responsible Building',
        description:
          'Driven by integrity and sustainability, ensuring we deliver lasting value to our clients, partners, and the environment.',
      },
      {
        title: 'Strong Returns',
        description: 'Crafted to offer families long-term stability and investors exceptional capital appreciation.',
      },
    ],
    closing:
      'Secure your tomorrow. Whether you are looking for a place to call home or a high-yield investment, partner with Gloch Stylistic Limited today.',
    mission:
      'We develop premium yet affordable homes through innovative construction, disciplined cost management, and ethical business practices — ensuring our clients enjoy superior living, long-term value, and peace of mind.',
    vision:
      'To become Nigeria\u2019s most trusted and forward-thinking real estate developer — transforming urban living through sustainable design, exceptional quality, and thoughtfully priced homes that build lasting generational wealth for families.',
  },

  ceo: {
    eyebrow: 'Leadership',
    // Matches the spelling used on the homepage teaser. The old site's
    // footer/nav used "Chinedu Odiaka" elsewhere — inconsistent across
    // pages, still needs confirming with the client.
    name: 'Mr. Odiaka-Chinedu',
    role: 'Chief Executive Officer',
    image: '/about/ceo.jpg',
    quote: 'Every property tells a story. We make sure yours is one of trust.',
    welcomeMessage: [
      'Thank you for visiting our website and taking the time to learn about Gloch Stylistic Limited. At Gloch Stylistic Limited, we are committed to redefining modern living in Nigeria — homes that combine high craftsmanship, smart design, and affordability, never one at the expense of the other.',
      'From Lagos to Abuja, we design with efficiency, durability, energy-conscious materials, and community well-being in mind, so our clients enjoy lasting value, lower maintenance costs, and meaningful capital appreciation.',
      'Whether you are searching for a home that provides your family with stability, or an investor seeking exceptional returns backed by tangible asset value, we invite you to partner with us. At Gloch Stylistic Limited, you are not just buying property — you are securing tomorrow.',
    ],
  },

  ourTeam: {
    eyebrow: 'Our Team',
    title: 'The People Behind Gloch',
    intro:
      'Every project we deliver is backed by a team of dedicated professionals across development, sales, and property management — committed to the same standard of integrity that defines Gloch Stylistic.',
    members: [] as { name: string; role: string; image: string }[],
  },
}

// constants/about.ts
// Minimal homepage teaser only. Full CEO narrative lives at /about/ceo.

export const aboutTeaser = {
  eyebrow: 'About Gloch Stylistic',
  ceo: {
    name: 'Mr. Odiaka-Chinedu',
    role: 'Chief Executive Officer',
    image: '/about/ceo.jpg',
    quote: 'Every property tells a story. We make sure yours is one of trust.',
  },
  readMoreHref: '/about/ceo',
}