// components/sections/services/Services.tsx
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ServiceRow } from './ServiceRow';
import { services } from '@/constants/services';

export function Services() {
  return (
    <Section
      id="services"
      className="bg-surface text-foreground relative overflow-hidden py-28 transition-colors duration-300"
    >
      {/* Background Soft Glow */}
      <div className="pointer-events-none absolute top-1/3 left-1/2 -z-10 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-amber-500/5 blur-3xl" />

      <Container>
        <SectionHeading
          eyebrow="Our Services"
          title="What We Do"
          description="Two focused disciplines, one standard of excellence."
          align="center"
          className="mx-auto"
        />

        <div className="mt-20 space-y-28 md:space-y-36">
          {services.map((service, index) => (
            <ServiceRow
              key={service.id}
              service={service}
              index={index}
              reversed={index % 2 === 1}
            />
          ))}
        </div>

      
      </Container>
    </Section>
  );
}
