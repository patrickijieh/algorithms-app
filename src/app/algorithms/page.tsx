import Header from '../../components/header';
import Content from './content';

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
        <Content />
      </div>
    </main>
  ) 
}