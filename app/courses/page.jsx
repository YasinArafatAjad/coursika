import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';

export const metadata = {
  title: 'কোর্স',
};

export default function Courses() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
            সব কোর্স
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            এখানে সব কোর্স দেখানো হবে।
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}