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
    // { name: 'Sliman Mounif Shammout', role: 'Project Manager', image: '/team/sliman-shammout.png' },
    { name: 'El Ammar Haidar Ali', role: 'Foreman', image: '/team/el-ammar-haidar-ali.png' },
    { name: 'Nnenna Nwoko', role: 'Marketing Manager', image: '/team/nnenna-nwoko.png' },
    { name: 'Ifeanyi Nmegwa', role: 'HR & Admin Manager', image: '/team/ifeanyi-nmegwa.png' },
    // { name: 'Blessing Okaro', role: 'Marketing Executive', image: '/team/blessing-okaro.png' },
    // { name: 'Arc. Folarin Oyediran', role: 'Architect', image: '/team/folarin-oyediran.png' },
    // { name: 'Engr. Alex Ikor', role: 'Structural Engineer', image: '/team/alex-ikor.png' },
    { name: 'Lorem Ipsum-1', role: 'Lorem Ipsum', image: '/team/team/a.png' },
    { name: 'Lorem Ipsum-2', role: 'Lorem Ipsum', image: '/team/team/b.png' },
    { name: 'Lorem Ipsum-3', role: 'Lorem Ipsum', image: '/team/team/c.png' },
    { name: 'Lorem Ipsum-4', role: 'Lorem Ipsum', image: '/team/team/d.png' },
    { name: 'Lorem Ipsum-5', role: 'Lorem Ipsum', image: '/team/team/e.png' },
  ] as TeamMember[],
}