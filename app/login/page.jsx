import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';

export const metadata = {
  title: 'লগইন',
};

export default function Login() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
            লগইন
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            এখানে লগইন ফর্ম দেখানো হবে।
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}