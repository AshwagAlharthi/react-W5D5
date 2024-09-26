import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './comonents/Navbar'
import Slider from './comonents/Slider'
import Card from './comonents/Card'
import Footer from './comonents/Footer'

function App() {

  return (
    <div className='bg-white w-full h-[200vh] flex flex-col  items-center gap-4'>
      <Navbar />
      <div className='w-[90vw] h-[180vh] flex flex-col justify-between items-center gap-4'>
        <div className='flex justify-between items-center max-sm:w-screen max-sm:flex-col'>
          <div className='w-[60%] h-[50vh]'>
            <Slider />
          </div>
          <div className="card bg-[#f8f8f8] w-[40%] h-[50vh] border-2 rounded-none">
            <div className="card-body items-center text-center text-black">
              <h2 className="card-title font-bold">Giordano</h2>
              <p className='text-4xl'>PACK 5 T-SHIRTS FOR SUMMER</p>
              <h6>Starting at <span className=' text-[red]'>$99.99</span></h6>
            </div>
            <figure className="px-10 pt-10 ">
              <img
                src="https://m.media-amazon.com/images/I/615+BZaFBeL._AC_UF1000,1000_QL80_.jpg"
                alt="t-shirt"
                className="h-[20vh] w-[20vw]" />
            </figure>
          </div>
        </div>
        <div className='flex flex-col justify-start items-start w-full'>
          <h1 className='text-right text-2xl text-black'>Top Categories Of The Month</h1>
          <div className='w-full h-[0.4vh] bg-slate-300 my-4'></div>
        </div>
        <div className='flex justify-start items-start flex-wrap max-sm:flex-col'>
          <Card image={'https://images.samsung.com/is/image/samsung/p6pim/sa_en/ua43t5300auxum/gallery/sa-en-fhd-t5300-ua43t5300auxum-531622779?$650_519_PNG$'}
            name={'Electronics'}
            list={['TV Televisions', 'Air Conditioners', 'Washing Machines', 'Audio & Theaters', 'Office Electronics']} />

          <Card image={'https://static.vecteezy.com/system/resources/thumbnails/041/714/543/small_2x/ai-generated-black-blank-t-shirt-front-mockup-on-a-transparent-background-png.png'}
            name={'Clothings'}
            list={['Womens', 'Mens', 'Bags & Backpacks', 'Accessories']} />

          <Card image={'https://www.transparentpng.com/thumb/laptop/ZqXDam-laptops-png-images-notebook-png-image-laptop.png'}
            name={'Computers'}
            list={['Desktop PC', 'Laptop', 'PC Gaming', 'Storage & Memory', 'PC Components']} />

          <Card image={'https://i.pinimg.com/originals/f1/ed/29/f1ed29e7b70429e7d66e373c7fba7333.png'}
            name={'Home & Kitchen'}
            list={['Furnitures', 'Decor', 'Cookwares', 'Utensil & Gadgets', 'Garden Tools']} />

          <Card image={'https://png.pngtree.com/png-clipart/20230506/original/pngtree-skin-care-products-png-image_9145239.png'}
            name={'Healthy & Beauty'}
            list={['Makeup', 'Skin Care', 'Hair Care', 'Tools & Equipments', 'Perfumes']} />

          <Card image={'https://pngimg.com/d/watches_PNG101445.png'}
            name={'Jewelry & Watch'}
            list={['Pendant', 'Necklace', 'Watch', 'Bracelets', 'Accessories']} />
        </div>
        < Footer />
      </div>
    </div>
  )
}

export default App
