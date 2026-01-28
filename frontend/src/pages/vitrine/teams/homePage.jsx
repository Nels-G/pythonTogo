import Hero from '../../../components/vitrine/hero/hero'
import News from '../../../components/vitrine/news/news'
import Partners from '../../../components/vitrine/partners/partners'
import './homePage.css'

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


