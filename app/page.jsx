import Header from '@/components/layout/header';
import Hero from '@/components/sections/hero';
import FeaturedCourses from '@/components/sections/featured-courses';
import Stats from '@/components/sections/stats';
import Features from '@/components/sections/features';
import Testimonials from '@/components/sections/testimonials';
import Newsletter from '@/components/sections/newsletter';
import Footer from '@/components/layout/footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Stats />
        <FeaturedCourses />
        <Features />
        <Testimonials />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}