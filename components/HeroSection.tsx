"use client"
import React from 'react'
import Image from 'next/image'
import { Link } from 'react-scroll/modules'

const HeroSection = () => {
  return (
    <section id="home">
        <div className='flex flex-col text-center items-center justify-center my-10 py-16'>        
            <div>
                <Image className='rounded-full' src="/headshot.jpg" alt="" width={300} height={300}/>
            </div>
            <div>
                <h1 className='font-bold text-4xl mt-6'>Hi I&#39;m Dhez</h1>
                <p className="text-lg mt-4 mb-6 md:text-2xl">
            I&#39;m a{" "}
            <span className="font-semibold text-yellow-400">
              Home Baker{" "}
            </span>
            based in Aparri, Cagayan. Working towards baking goods that
            makes life happier.
          </p>

            <Link
            to="bakedGoods"
            className="text-neutral-100 font-semibold px-6 py-3 bg-yellow-500 rounded shadow hover:bg-yellow-400"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            Baked Goods
          </Link>
        </div>
      <div className="flex flex-row items-center text-center justify-center ">
        <Link
          to="about"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
{/*           <HiArrowDown size={35} className="animate-bounce" />
 */}        </Link>

            </div>
            </div>

    </section>
  )
}

export default HeroSection