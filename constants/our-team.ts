// constants/our-team.ts

export interface TeamMember {
  name: string
  role: string
  image: string
}

export const ourTeamPage = {
  eyebrow: 'Our Team',
  title: 'Meet The Team',
  intro:
    'Every project we deliver is backed by a team of dedicated professionals across development, sales, and property management \u2014 committed to the same standard of integrity that defines Gloch Stylistic.',
  members: [
    { name: 'Mr. Chinedu Odiaka', role: 'CEO', image: '/team/chinedu-odiaka.png' },
    { name: 'Mary Nnaji', role: 'Chief Operating Officer', image: '/team/mary-nnaji.png' },
    { name: 'Jude Momoh', role: 'Accounting Manager', image: '/team/jude-momoh.png' },
    { name: 'Nnenna Nwoko', role: 'Sales & Marketing Manager', image: '/team/Nnenna-Nwoko.png' },
    { name: 'Ifeanyi Nmegwa', role: 'HR & Admin Manager', image: '/team/ifeanyi-nmegwa.png' },
    { name: 'Chuka Okafor', role: 'Procurement Manager', image: '/team/chuka-okafor.png' },
    { name: 'Bilal Awkal', role: 'Construction Manager', image: '/team/bilal-awkal.png' },
    { name: 'Chidozie Ndubuaku', role: 'Store Keeper Supervisor', image: '/team/Chidozie-Ndubuaku.jpeg' },
    { name: 'Arthur Usman', role: 'Chief Surveyor', image: '/team/Arthur-Usman.jpeg' },
    { name: 'Slyvester Idoko', role: 'Health & Safety Officer', image: '/team/Slyvester-Idoko.jpeg' },
    // { name: 'El Ammar Haidar Ali', role: 'Foreman', image: '/team/team/El-Ammar-Haidar-Ali.png' },
  ] as TeamMember[],
}