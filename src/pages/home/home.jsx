import './home.css'
import Header from '../../components/Header/Header'
import Banner from '../../components/Banner/Banner'
import Features from '../../components/Features/Features'
import Footer from '../../components/Footer/Footer'
import Chat from '../../assets/img/icon-chat.webp'
import Money from '../../assets/img/icon-money.webp'
import Security from '../../assets/img/icon-security.webp'

function Home() {

  const featuresContent = [
    {
      img: Chat,
      title: 'You are our #1 priority',
      description: 'Need to talk to a representative ? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes.'
    },
    {
      img: Money,
      title: 'More savings means higher rates',
      description: 'The more you save with us, the higher your interest rate will be !'
    },
    {
      img: Security,
      title: 'Security you can trust',
      description: 'We use top of the line encryption to make sure your data and money is always safe.'
    }
  ]

  return (
    <body>
      <Header />

      <main>
        <Banner />
        
        <section className='features'>
          {featuresContent.map((content, i) => (
            <Features key={i} image={content.img} title={content.title} description={content.description} />
          ))}
        </section>

      </main>

      <Footer />
    </body>
  )
}

export default Home