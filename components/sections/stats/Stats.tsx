// components/sections/stats/Stats.tsx
import { Container } from '@/components/ui/Container';
import { StatCounter } from './StatCounter';
import { stats } from '@/constants/stats';

export function Stats() {
  return (
    // UPGRADE: Integrated system background color token and explicit section spacing variable
    <section className="bg-ink border-y border-white/[0.04] py-16 lg:py-[--spacing-section-y]">
      <Container>
        {/* UPGRADE: Left-aligned for a modern, architectural magazine feel, split cleanly by faint dividers */}
        <div className="grid grid-cols-2 gap-x-8 gap-y-12 md:grid-cols-4 md:gap-x-0 md:divide-x md:divide-white/[0.06]">
          {stats.map((stat, index) => (
            <StatCounter
              key={stat.id}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
              delay={index * 0.15} // Slightly broader stagger for a premium reveal pace
            />
          ))}
        </div>
      </Container>
    </section>
  );
}

// // components/sections/stats/Stats.tsx
// import { Container } from '@/components/ui/Container';
// import { StatCounter } from './StatCounter';
// import { stats } from '@/constants/stats';

// export function Stats() {
//   return (
//     <section className="bg-ink py-16 md:py-24">
//       <Container>
//         <div className="grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-12">
//           {stats.map((stat, index) => (
//             <StatCounter
//               key={stat.id}
//               value={stat.value}
//               suffix={stat.suffix}
//               label={stat.label}
//               delay={index * 0.1}
//             />
//           ))}
//         </div>
//       </Container>
//     </section>
//   );
// }
