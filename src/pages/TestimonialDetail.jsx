import { useParams, Link } from 'react-router-dom';
import { testimonials } from '../testimonials.js';

const CHECK = '✓';

export default function TestimonialDetail() {
  const { slug } = useParams();
  const t = testimonials.find((t) => t.slug === slug);

  if (!t) {
    return (
      <div style={{ minHeight: '100vh', background: '#000', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ textAlign: 'center' }}>
          <p style={{ color: '#4b5563', fontFamily: 'Lato, Arial, sans-serif' }}>Отзивът не е намерен.</p>
          <Link to="/" style={{ color: '#37ca37', fontFamily: 'Lato, Arial, sans-serif', fontSize: '0.875rem', marginTop: '1rem', display: 'inline-block' }}>
            ← Назад
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div style={{ minHeight: '100vh', background: '#000' }}>
      {/* Nav */}
      <div style={{ borderBottom: '2px solid #222', padding: '1.25rem 2rem' }}>
        <div style={{ maxWidth: '56rem', margin: '0 auto' }}>
          <Link
            to="/"
            style={{
              fontFamily: 'Lato, Arial, sans-serif',
              fontSize: '0.85rem',
              color: '#9ca3af',
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.35rem',
              transition: 'color 0.15s',
            }}
            onMouseEnter={e => { e.currentTarget.style.color = '#37ca37'; }}
            onMouseLeave={e => { e.currentTarget.style.color = '#9ca3af'; }}
          >
            ← Всички отзиви
          </Link>
        </div>
      </div>

      <main style={{ maxWidth: '56rem', margin: '0 auto', padding: '3rem 1.5rem 5rem' }}>
        {/* Video */}
        <div style={{
          position: 'relative', paddingTop: '56.25%',
          background: '#111', border: '2px solid #222', borderRadius: '0.5rem', overflow: 'hidden',
          marginBottom: '2.5rem',
        }}>
          <iframe
            style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', border: 'none' }}
            src={`https://www.youtube.com/embed/${t.videoId}`}
            title={`Отзив от ${t.name}`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>

        {/* Client info */}
        <div style={{ marginBottom: '2.5rem', paddingBottom: '2rem', borderBottom: '2px solid #222' }}>
          <h1 style={{
            fontFamily: 'Montserrat, Arial, sans-serif',
            fontWeight: '800',
            fontSize: 'clamp(1.5rem, 4vw, 2rem)',
            color: '#fff',
            letterSpacing: '-0.02em',
          }}>
            {t.name}
          </h1>
          <p style={{
            fontFamily: 'Lato, Arial, sans-serif',
            fontSize: '0.9rem',
            color: '#37ca37',
            marginTop: '0.3rem',
          }}>
            {t.role} · {t.company}
          </p>
          <p style={{
            fontFamily: 'Lato, Arial, sans-serif',
            fontSize: '1rem',
            color: '#9ca3af',
            lineHeight: '1.7',
            marginTop: '1.25rem',
          }}>
            {t.description}
          </p>
        </div>

        {/* Two column: what we did + results */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 18rem), 1fr))',
          gap: '1.5rem',
        }}>
          {/* What we did */}
          <div style={{
            background: '#0a0a0a',
            border: '2px solid #222',
            borderRadius: '0.5rem',
            padding: '1.5rem',
          }}>
            <h2 style={{
              fontFamily: 'Montserrat, Arial, sans-serif',
              fontWeight: '700',
              fontSize: '0.85rem',
              color: '#fff',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              marginBottom: '1rem',
            }}>
              Какво Направихме
            </h2>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              {t.whatWeDid.map((item, i) => (
                <li key={i} style={{ display: 'flex', gap: '0.6rem', alignItems: 'flex-start' }}>
                  <span style={{ color: '#37ca37', fontWeight: '700', flexShrink: 0, marginTop: '0.1rem' }}>{CHECK}</span>
                  <span style={{ fontFamily: 'Lato, Arial, sans-serif', fontSize: '0.9rem', color: '#d1d5db', lineHeight: '1.5' }}>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Results */}
          <div style={{
            background: '#0a0a0a',
            border: '2px solid #37ca37',
            borderRadius: '0.5rem',
            padding: '1.5rem',
          }}>
            <h2 style={{
              fontFamily: 'Montserrat, Arial, sans-serif',
              fontWeight: '700',
              fontSize: '0.85rem',
              color: '#37ca37',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              marginBottom: '1rem',
            }}>
              Резултати
            </h2>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              {t.results.map((item, i) => (
                <li key={i} style={{ display: 'flex', gap: '0.6rem', alignItems: 'flex-start' }}>
                  <span style={{ color: '#37ca37', fontWeight: '700', flexShrink: 0, marginTop: '0.1rem' }}>{CHECK}</span>
                  <span style={{ fontFamily: 'Lato, Arial, sans-serif', fontSize: '0.9rem', color: '#d1d5db', lineHeight: '1.5' }}>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}
