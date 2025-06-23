import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';

export const metadata = {
  title: 'ইনস্ট্রাক্টর',
};

export default function Instructors() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
            আমাদের ইনস্ট্রাক্টর
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            এখানে সব ইনস্ট্রাক্টর দেখানো হবে।
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}