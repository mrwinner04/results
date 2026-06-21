import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage.jsx';
import TestimonialDetail from './pages/TestimonialDetail.jsx';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/testimonial/:slug" element={<TestimonialDetail />} />
    </Routes>
  );
}
