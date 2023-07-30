import Header from '../components/header';
import Sidebar from './sidebar';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Learn Algorithms.',
  description: 'App created to help students learn data structures and algorithms',
}

export default function AlgorithmsPage() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <Header />
      <div className="flex flex-row items-start min-w-full overflow-visible">
        <Sidebar />
        <div className="flex ml-5 space-x-1 space-y-1 w-5/6 place-self-stretch justify-center pt-6">
          <div className="flex flex-col">
            <h1 className="text-center font-semibold py-5">
              Algorithms.
            </h1>
          </div>
        </div>
      </div>
    </main>
  ) 
}