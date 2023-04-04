import React from 'react'
import Image from 'next/image'

const HeroSection = () => {
  return (
    <section id="home">
        <div>        
            <div>
                <Image src="/headshot.jpg" alt="" width={300} height={300}/>
            </div>
            <div>
            
            </div>
        </div>
    </section>
  )
}

export default HeroSection