import './globals.css'

import Selector_card from '@/components/selectorCard/selector_card'

export default function Home() {
  return (
    <main className='landingpage'>
      <video className='cinematic' autoPlay muted loop id="video-background">
            <source src="./cinematic.mp4" type="video/mp4" />
            Your browser does not support the video tag.
        </video>
        
      <h1 className='title-landingpage'>KART <span>IN</span> SIDE</h1>
     
      <div className='selector-landingpage'>
        <Selector_card category='Iscriviti'page='registrazione'/>
        <Selector_card category='Check-In' page='checkin'/>
      </div>
    </main>
  )
}
