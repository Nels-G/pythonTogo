import Hero from '../../../components/vitrine/hero/hero'
import News from '../../../components/vitrine/news/News'
import Partners from '../../../components/vitrine/partners/partners'
import './HomePage.css'

function HomePage() {
  return (
    <div className="homePage-container">
      <Hero/>
      <News/>
      <Partners/>
    </div>
  )
}

export default HomePage
