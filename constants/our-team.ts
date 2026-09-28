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
    { name: 'Mr. Chinedu Odiaka', role: 'CEO', image: '/team/chinedu-odiaka.jpg' },
    { name: 'Mary Nnaji', role: 'Chief Operating Officer', image: '/team/mary-nnaji.jpg' },
    { name: 'Sliman Mounif Shammout', role: 'Project Manager', image: '/team/sliman-shammout.jpg' },
    { name: 'El Ammar Haidar Ali', role: 'Foreman', image: '/team/el-ammar-haidar-ali.jpg' },
    { name: 'Nnenna Nwoko', role: 'Marketing Manager', image: '/team/nnenna-nwoko.jpg' },
    { name: 'Ifeanyi Nmegwa', role: 'HR & Admin Manager', image: '/team/ifeanyi-nmegwa.jpg' },
    { name: 'Blessing Okaro', role: 'Marketing Executive', image: '/team/blessing-okaro.jpg' },
    { name: 'Arc. Folarin Oyediran', role: 'Architect', image: '/team/folarin-oyediran.jpg' },
    { name: 'Engr. Alex Ikor', role: 'Structural Engineer', image: '/team/alex-ikor.jpg' },
    { name: 'Mr. Sylvester Okpe', role: 'Health and Safety Officer', image: '/team/sylvester-okpe.jpg' },
  ] as TeamMember[],
}