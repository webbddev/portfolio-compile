import {
  About,
  Hero,
  Navbar,
  Pricing,
  ProjectShowcase,
  Services,
} from './components';

export default function App() {
  return (
    <div className='overflow-x-hidden bg-orange-50 text-emerald-950 antialiased'>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <ProjectShowcase />
      <Pricing />
    </div>
  );
}
