// components/sections/stats/Stats.tsx
import { Container } from '@/components/ui/Container';
import { StatCounter } from './StatCounter';
import { stats } from '@/constants/stats';

export function Stats() {
  return (
    <section className="bg-ink py-16 md:py-24">
      <Container>
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-12">
          {stats.map((stat, index) => (
            <StatCounter
              key={stat.id}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
              delay={index * 0.1}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
