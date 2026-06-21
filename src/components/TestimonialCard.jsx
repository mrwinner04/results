import { Link } from 'react-router-dom';

export default function TestimonialCard({ slug, videoId, name, company }) {
  return (
    <div
      style={{
        background: '#0a0a0a',
        border: '2px solid #222',
        borderRadius: '0.5rem',
        overflow: 'hidden',
        transition: 'border-color 0.2s',
        display: 'flex',
        flexDirection: 'column',
      }}
      onMouseEnter={e => { e.currentTarget.style.borderColor = '#37ca37'; }}
      onMouseLeave={e => { e.currentTarget.style.borderColor = '#222'; }}
    >
      {/* 16:9 YouTube embed */}
      <div style={{ position: 'relative', paddingTop: '56.25%', background: '#111' }}>
        <iframe
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', border: 'none' }}
          src={`https://www.youtube.com/embed/${videoId}`}
          title={`${name} testimonial`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>

      {/* Info + button */}
      <div style={{
        padding: '1rem 1.25rem 1.25rem',
        borderTop: '2px solid #222',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '1rem',
      }}>
        <div>
          <p style={{
            fontFamily: 'Montserrat, Arial, sans-serif',
            fontWeight: '700',
            fontSize: '0.95rem',
            color: '#fff',
          }}>
            {name}
          </p>
          <p style={{
            fontFamily: 'Lato, Arial, sans-serif',
            fontSize: '0.8rem',
            color: '#37ca37',
            marginTop: '0.2rem',
          }}>
            {company}
          </p>
        </div>

        <Link
          to={`/testimonial/${slug}`}
          style={{
            flexShrink: 0,
            fontFamily: 'Montserrat, Arial, sans-serif',
            fontWeight: '700',
            fontSize: '0.75rem',
            textTransform: 'uppercase',
            letterSpacing: '0.06em',
            color: '#000',
            background: '#37ca37',
            border: '2px solid #37ca37',
            borderRadius: '0.35rem',
            padding: '0.45rem 0.9rem',
            textDecoration: 'none',
            transition: 'background 0.15s, color 0.15s',
            whiteSpace: 'nowrap',
          }}
          onMouseEnter={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#37ca37'; }}
          onMouseLeave={e => { e.currentTarget.style.background = '#37ca37'; e.currentTarget.style.color = '#000'; }}
        >
          Пълната История →
        </Link>
      </div>
    </div>
  );
}
