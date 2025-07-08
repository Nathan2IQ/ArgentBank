import './home.css'
import Header from '../../components/Header/Header'
import Banner from '../../components/Banner/Banner'
import Features from '../../components/Features/Features'
import Footer from '../../components/Footer/Footer'

function Home() {

  return (
    <body>
      <Header />

      <main>
        <Banner />
        <Features />
      </main>

      <Footer />
    </body>
  )
}

export default Home