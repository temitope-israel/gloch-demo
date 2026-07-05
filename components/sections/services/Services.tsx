// components/sections/services/Services.tsx
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ServiceRow } from './ServiceRow';
import { services } from '@/constants/services';

export function Services() {
  return (
    <Section id="services" className="bg-surface">
      <Container>
        <SectionHeading
          eyebrow="Our Services"
          title="What We Do"
          description="Two focused disciplines, one standard of excellence."
          align="center"
          className="mx-auto"
        />

        {/* space-y-24/32 creates generous separation between the two
            service rows — consistent with our Phase 3 "let it breathe"
            spacing principle, especially important here since each row
            is visually dense (image + heading + paragraph + button) */}
        <div className="mt-16 space-y-24 md:space-y-32">
          {services.map((service, index) => (
            <ServiceRow key={service.id} service={service} reversed={index % 2 === 1} />
          ))}
        </div>
      </Container>
    </Section>
  );
}
