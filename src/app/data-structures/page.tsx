import Header from '../../components/header';
import Sidebar from './sidebar';
import Content from './content';
import Topic from './structuresTopics';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Learn Data Structures.',
  description: 'App created to help students learn data structures and algorithms',
}

export default function DataStructuresPage() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <Header />
      <div className="flex flex-row items-start min-w-full overflow-visible">
        <Sidebar />
        <Content />
      </div>
    </main>
  )
}