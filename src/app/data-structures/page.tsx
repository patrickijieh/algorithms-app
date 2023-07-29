import Header from '../components/header';
import Footer from '../components/footer';
import Sidebar from './sidebar';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Learn Data Structures.',
  description: 'App created to help students learn data structures and algorithms',
}

export default function DataStructuresPage() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <Header />
      <div className="flex flex-row items-start min-w-full">
        <Sidebar />
        <div className="flex ml-5 space-x-1 space-y-1 w-3/4 place-self-stretch justify-center pt-6">
          <div className="flex flex-col">
            <h1 className="text-center font-semibold py-5">
              Data Structures.
            </h1>
            <h3 className="text-left p-5">
              Data structures are a way to store data so its easy to access and manipulate. They are the main building blocks of computer science.
              Things such as arrays, linked lists, and trees are all examples of data structures that are used on a daily basis in
              software development. For example, arrays are used to store data in a list format:<br /><br />C code<br /><br />
              <p className="border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto
                              lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
                <code>
                  int array[5];<br />
                  array[0] = 1;<br />
                  array[1] = 2;<br />
                  array[2] = 3;<br />
                  array[3] = 4;<br />
                  array[4] = 5;<br />
                  for (int i = 0; i {'<'} 5; i++) {'{'} <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;printf("%d ", array[i]);<br />
                  {'}'}<br /> // prints to the console: "1 2 3 4 5 "<br />
                </code>
              </p> <br />
              Data structures are very important to understand because they are used in many different ways.
            </h3>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}