import Header from './components/header';
import Footer from './components/footer';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-20">
      <Header />
      <div className="flex flex-col justify-center items-center space-x-1 space-y-1">
        <h1 className="text-center font-semibold">
          Data Structures And Algorithms App.
        </h1>
        <h3 className="text-center">
          An app to help you learn data structures and algorithms.
        </h3>
      </div>
      <Footer />
    </main>
  )
}