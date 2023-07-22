//import Image from 'next/image'
import Header from './components/header';
import Footer from './components/footer';
import LoadingIcon from './components/loading-icon';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-20">
      <Header />
      <div className="flex flex-row">
        <h1 className="text-center">
          Data Structures And Algorithms
        </h1>
      </div>
      <Footer />
    </main>
  )
}
