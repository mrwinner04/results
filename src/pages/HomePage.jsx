import { testimonials } from '../testimonials.js';
import TestimonialCard from '../components/TestimonialCard.jsx';

export default function HomePage() {
  return (
    <div style={{ minHeight: '100vh', background: '#000' }}>
      <header style={{
        padding: '4rem 2rem 3.5rem',
        textAlign: 'center',
        borderBottom: '2px solid #222',
      }}>
        <p style={{
          fontFamily: 'Lato, Arial, sans-serif',
          fontSize: '0.75rem',
          fontWeight: '700',
          color: '#37ca37',
          letterSpacing: '0.18em',
          textTransform: 'uppercase',
          marginBottom: '1rem',
        }}>
          Реални Резултати
        </p>
        <h1 style={{
          fontFamily: 'Montserrat, Arial, sans-serif',
          fontSize: 'clamp(2rem, 5vw, 3rem)',
          fontWeight: '800',
          letterSpacing: '-0.02em',
          color: '#fff',
          lineHeight: 1.1,
        }}>
          Какво Казват Нашите Клиенти
        </h1>
        <p style={{
          fontFamily: 'Lato, Arial, sans-serif',
          fontSize: '1rem',
          color: '#9ca3af',
          marginTop: '1rem',
          maxWidth: '36rem',
          margin: '1rem auto 0',
        }}>
          Чуйте директно от хората, с които сме работили.
        </p>
      </header>

      <main style={{ maxWidth: '72rem', margin: '0 auto', padding: '3rem 1.5rem 5rem' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 22rem), 1fr))',
          gap: '1.5rem',
        }}>
          {testimonials.map((t) => (
            <TestimonialCard key={t.slug} {...t} />
          ))}
        </div>
      </main>
    </div>
  );
}
