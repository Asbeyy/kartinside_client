import './globals.css'

import Selector_card from '@/components/selectorCard/selector_card'

export default function Home() {
  return (
    <main className='landingpage'>

        <img src="./background.jpg" className='cinematic' alt="" />
        
      {/* <h1 className='title-landingpage'>KART <span>IN</span> SIDE</h1> */}
      
        <img src="./logo.png" className='logo-landing' alt="" />
     
      <div className='selector-landingpage'>
        <Selector_card category='Iscriviti'page='registrazione'/>
      </div>
    </main>
  )
}
