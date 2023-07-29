import Header from '../components/header';
import Footer from '../components/footer';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Learn Algorithms.',
  description: 'App created to help students learn data structures and algorithms',
}

export default function AlgorithmsPage() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <Header />
      <div className="flex flex-col justify-center items-center space-x-1 space-y-1 pt-6">
        <h1 className="text-center font-semibold py-5">
          Algorithms.
        </h1>
      </div>
      <Footer />
    </main>
  ) 
}