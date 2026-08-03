import { testimonials } from '@/data/testimonials';
import TestimonialCard from '@/components/TestimonialCard/TestimonialCard';
import SectionHeading from '@/components/SectionHeading/SectionHeading';
import './Home.css';

/**
 * Testimonials section.
 */
function TestimonialSection() {
  return (
    <section className="section container">
      <SectionHeading
        eyebrow="Testimonials"
        title="What Our Customers Say"
        description="Trusted by homeowners, designers, and businesses worldwide."
        align="center"
      />
      <div className="testimonial-grid">
        {testimonials.map((testimonial) => (
          <TestimonialCard key={testimonial.id} testimonial={testimonial} />
        ))}
      </div>
    </section>
  );
}

export default TestimonialSection;
