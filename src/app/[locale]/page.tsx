'use client';
import Hero from '@/components/Hero';
import ProjectsPage from './projects/page';
import ContactPage from './contact/page';
import Footer from '@/components/Footer';

export default function HomePage() {
  return (
    <>
      <Hero />
      <ProjectsPage />
      <ContactPage />
      <Footer />
    </>
  );
}
