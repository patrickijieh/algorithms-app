import Header from '../components/header';
import Footer from '../components/footer';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <Header />
      <div className="flex flex-col justify-center items-center space-x-1 space-y-1 pt-6">
        <h1 className="text-center font-semibold py-5">
          Data Structures And Algorithms App.
        </h1>
        <h3 className="text-center p-5">
          An app to help you learn important Computer Science data structures and algorithms.
        </h3>
        <h3 className="text-center p-5">
          <p>
          Learn about binary search trees, linked lists, stacks, Dijkstra&apos;s algorithm, sorting algorithms, and more!<br />
          This app is going to assume that you have a basic understanding of programming concepts, such as variables, functions, classes, etc., and
          that you know basic Python syntax.<br />
          It will also assume that you have a basic understanding of Big O notation, and how to calculate the time and space complexity of an algorithm.<br />
          If you need a refresher on any of these topics, check out the <text className="font-bold">Resources</text> tab for some helpful links.
          </p>
        </h3>
        <h3 className="text-center p-5">
          Click on the links above to get started.
        </h3>
      </div>
      <Footer />
    </main>
  )
}