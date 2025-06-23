import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';

export const metadata = {
  title: 'ক্যাটাগরি',
};

export default function Categories() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
            কোর্স ক্যাটাগরি
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            এখানে সব ক্যাটাগরি দেখানো হবে।
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}