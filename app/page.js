'use client';

import Hero from '@/components/Hero';
import Services from '@/components/Services';
import AboutHome from '@/components/AboutHome';
import ProjectsPreview from '@/components/ProjectsPreview';

export default function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <AboutHome />
      <ProjectsPreview />
    </>
  );
}
