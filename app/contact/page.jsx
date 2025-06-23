import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';

export const metadata = {
  title: 'যোগাযোগ',
};

export default function Contact() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
            যোগাযোগ
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            এখানে যোগাযোগের তথ্য দেখানো হবে।
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}