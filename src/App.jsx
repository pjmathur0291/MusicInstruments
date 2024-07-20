import React, { useState } from 'react'
import './App.css'
import Card from './Card'
import Home from './Home'
import Login from './Login'
import Footer from './Footer'
import Signup from './Signup'
import Display from './Display'
import Moreinfo from './Moreinfo'
import ImageSlider from './ImageSlider'
import About from './About'
import DetailProduct from './DetailProduct'
import AllProducts from './AllProducts'
import Accessories from './Accessories'
import Cart from './Cart'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  // { id, Name, categories, image, song, productId, productName, productImage, productDetails, Compnay, price, previousPrice, accessoriesId, accessoriesName, accessoriesImage, accessoriesDetails }
  const [cart, setCart] = useState([])
  function addToCart(product) {
    setCart([...cart, product])
  }
  const artist = [
    {
      id: 1,
      Name: "Arijit Singh",
      categories: ["Romantic", "Hip-Hop"],
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQN-nPt6gJoHxFGlM5l1ucWM3YFbBwZKwn86w&s',
      song: '/public/song.mp3',
      about: 'Arijit Singh is one of the most loved and famous singers from India. In 2005, he was among the top six contestants on the reality singing show Fame Gurukul, and later, he went on to work as an assistant to music director Pritam. Arijit Singh, known for his deep voice that resounds with love tunes, is breaking new ground in the music industry by conjuring unforgettable notes for youthful hearts. On April 25, 1987, Arijit was born in Murshidabad, Jiaganj, West Bengal, India.'
    },
    {
      id: 2,
      Name: "Honey Singh",
      categories: ["Rap", "Hip-Hop"],
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ36rw-ZUah_HnibZ1fTn8zEuGWFgk_QeUjoA&s',
      about: 'Hirdesh Singh known by his stage name Yo Yo Honey Singh or simply Honey Singh is a rapper, composer, pop vocalist, and actor. Honey Singh has an era of his songs where youth and children were extremely fond of him. His very song became a huge success in those years when no other singer could stand a chance in front of Honey Singh.',
      song: '/public/song2.mp3'
    },
    {
      id: 3,
      Name: "Shankar Mahadevan",
      categories: ["Romantic", "Fast Songs"],
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwFtIJ3RcWVWCyvvvQCKuy27x5M9AzElHQIQ&s',
      about: 'Shankar Mahadevan is an award-winning musical composer, playback singer and part of the Shankarâ€“Ehsaanâ€“Loy composing trio team. He is also the founder of the Shankar Mahadevan Academy, which teaches Indian Music online to students worldwide. He can speak fluently in Marathi, Malayalam, Tamil, Urdu, Hindi and English. Some of his popular songs include Urvashi Take It Easy from Humse Hai Muqabla (1995), I Love You from Auzaar (1997) and Kay Sera Sera from Pukar (2000).',
      song: '/public/song3.mp3'
    },
    {
      id: 4,
      Name: "Shaan",
      categories: ["Romantic", "Slow Track"],
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRd5sOgcNedgLzn39sJxT--6qB3B8Oq-Bl64A&s',
      song: '/public/song1.mp3',
      about: 'From Pop to Hip Hop to Ballads, Shaan is a singer in many genres. With an ability to sing in Bengali, Kannada, Telugu and Tamil, he has done numerous hit songs for movies. Shaan has provided the vocals for many hit Kannada, Bengali, Telugu, Tamil and Urdu film songs. He is also a talented music composer, lyricist, music director and television presenter. He also helps the music directors on music and lyrics for whom he sings.'
    }

  ]

  const products = [
    {
      id: 1,
      productName: 'Accostic Guitar',
      productImage: 'https://yamaha.ndcdn.in/media/catalog/product/cache/263be203fdb4831fcff24348c255c941/f/g/fgc_ta_bs_3.jpg',
      productDetails: 'Yamaha FGC -TA TransAcoustic cutaway guitars transport you to new creative spaces via immersive built-in reverb and chorus effects that actually resonate within the body of the instrument itself. Combining classic craftsmanship with revolutionary technology, the FGC-TA cutaway guitar will enable you to play and sound your best no matter where you are, and its cutaway design provides easy access to every note on the fretboard.',
      Company: 'Yamaha',
      price: 88000,
      previousPrice: 95000
    },
    {
      id: 2,
      productName: 'Electric Guitar',
      productImage: 'https://yamaha.ndcdn.in/media/catalog/product/cache/9e0f31af0cdc06df956748b13dabad87/p/a/pacs_12_black_front_0001.jpg',
      productDetails: 'The PACS+12 delivers exceptional sound and playability, and features a newly designed alder body, a slim C-shape maple neck with a rosewood fingerboard, Reflectone pickups co-developed with Rupert Neve Designs, and a choice of four vibrant finishes.',
      Company: 'Yamaha',
      price: 165000,
      previousPrice: 185000
    },
    {
      id: 3,
      productName: 'Yamaha PSR-SX700 Digital Workstation',
      productImage: 'https://yamaha.ndcdn.in/media/catalog/product/cache/9e0f31af0cdc06df956748b13dabad87/p/s/psr_sx700_-_4.png',
      productDetails: 'Take your performance to a whole new dimension with the PSR-SX. Replacing the hugely successful PSR-S series, the PSR-SX700 is the new generation in Digital Workstation sound, design and user experience. These instruments will inspire and intensify your musical performance and enjoyment.',
      Company: 'Yamaha',
      price: 102990,
      previousPrice: 120990
    },
    {
      id: 4,
      productName: 'Yamaha DTX-402K Electronic Drum',
      productImage: 'https://yamaha.ndcdn.in/media/catalog/product/cache/9e0f31af0cdc06df956748b13dabad87/d/t/dtx402k-1.jpg',
      productDetails: '  Yamaha DTX-402K Electronic Drum. Newly developed drum pads incorporating Yamahas unique floating system. KU100 kick unit reduces noise when playing the bass drum. Choke-able crash cymbal pad.',
      Company: 'Yamaha',
      price: 102990,
      previousPrice: 120990
    },
    {
      id: 5,
      productName: 'Yamaha DM-305 Microphone',
      productImage: 'https://yamaha.ndcdn.in/media/catalog/product/cache/9e0f31af0cdc06df956748b13dabad87/d/m/dm-305-1-10jan23.jpg',
      productDetails: 'Yamaha genuine microphone. The best directional characteristic for vocal (cardioid). Higher sound quality to highlight vocal sound. Yamaha original body design.',
      Company: 'Yamaha',
      price: 5400,
      previousPrice: 6500
    },
    {
      id: 6,
      productName: 'Yamaha HS4 (White) Powered Studio Monitors',
      productImage: 'https://yamaha.ndcdn.in/media/catalog/product/cache/9e0f31af0cdc06df956748b13dabad87/h/s/hs4-white-1.jpg',
      productDetails: 'HS4 Powered Studio Monitors High-quality compact studio monitors for the uncompromising creator. 2-way bass-reflex powered speaker with 4.5" cone woofer and 1" dome tweeter. 60 Hz - 22 kHz frequency response (-10 dB). 26 W + 26 W output power (Dynamic, RL=6 Ω). ROOM CONTROL and HIGH TRIM response controls',
      Company: 'Yamaha',
      price: 27200,
      previousPrice: 28000
    },
    {
      id: 7,
      productName: 'Yamaha AG08 (Black) Live Streaming Mixer',
      productImage: 'https://yamaha.ndcdn.in/media/catalog/product/cache/9e0f31af0cdc06df956748b13dabad87/a/g/ag08-black-1.jpg',
      productDetails: 'AG08 Live Streaming Mixer An 8-channel live streaming mixer featuring two phantom power inputs for condenser mics, an integrated USB audio interface, voice changer and sampler.',
      Company: 'Yamaha',
      price: 61900,
      previousPrice: 63000
    },
    {
      id: 8,
      productName: 'Hummingbird Ultima, Exclusive, Autumnburst',
      productImage: 'https://images.ctfassets.net/m8onsx4mm13s/5HXW07OllonLAtHAcDOomA/4ad0dce5fb608cd9fd58b94153d58479/SSHUABPSL0807_front.png?w=1200&h=1200',
      productDetails: 'Select flame maple top, quilt maple back and sides, mahogany neck, ebony fretboard, ornate abalone binding and vine neck and headstock inlays, matching Hummingbird pickguard graphics',
      Company: 'Gibson',
      price: 90000,
      previousPrice: 95000
    },
    {
      id: 9,
      productName: '1969 ES-330TDW, Walnut',
      productImage: 'https://images.ctfassets.net/m8onsx4mm13s/3umHXZi8entpwznKJbjsGy/5b6962efae5c75d6bdda32faa7113dd8/GCVP0034_front.png?w=1200&h=1200',
      productDetails: 'Boasting the same dimensions as the ES-335, the ES-330 was its hollowbody cousin that debuted in 1959. Although the trend toward heavier guitar sounds at the time and its predisposition to feed back at high volume made it take a back seat to the ES-335, today, it’s appreciated as a versatile instrument for many styles of music.',
      Company: 'Gibson',
      price: 595000,
      previousPrice: 650000
    },
    {
      id: 10,
      productName: '70s Flying V, Antique Natural',
      productImage: 'https://images.ctfassets.net/m8onsx4mm13s/24KThJws0bZLWcUTYtYsuN/28f672413a67a6b828443e181f25fae1/DSVS00ANCH1_front.png?w=1200&h=1200',
      productDetails: 'The iconic 70s classic is ready to take flight again. With its bound rosewood fingerboard, SlimTaper™ neck, and a pair of uncovered 70s Tribute humbuckers™ hand-wired with Orange Drop® capacitors, this Flying V™ is set to nail all of the classic tones of the era.',
      Company: 'Gibson',
      price: 187425,
      previousPrice: 190000
    },
    {
      id: 11,
      productName: "SG Standard '61 Sideways Vibrola, Vintage Cherry",
      productImage: 'https://images.ctfassets.net/m8onsx4mm13s/24KThJws0bZLWcUTYtYsuN/28f672413a67a6b828443e181f25fae1/DSVS00ANCH1_front.png?w=1200&h=1200',
      productDetails: 'The SG™ Standard ‘61 Sideways Vibrola™ returns to the classic design that made it relevant, played, and loved -- shaping sound across generations and genres of music.',
      Company: 'Gibson',
      price: 179925,
      previousPrice: 200000
    }

  ]

  const accessories = [
    {
      accessoriesId: 1,
      accessoriesName: 'Gibson Signature Series Calton Case, Hummingbird / J-45',
      accessoriesImage: 'https://images.ctfassets.net/m8onsx4mm13s/5Yi7RnBY0fV2sckLT8JLvu/d2b70c2f472832cef3577f5266604a19/__static.gibson.com_product-images_Gibson_ASCLTCASE-DN_ASCLTCASE-DN_Calton2.png?w=1200&h=1200',
      accessoriesDetails: 'Gibson Signature Series Calton Cases provide the ultimate protection for your treasured Gibson instrument. Made in Austin, Texas, and featuring designs that pay stylistic tribute to vintage Gibson cases, they perfectly fit the Gibson instruments they’re built to protect. Crush resistant, they can withstand up to 1,100 lb of pressure and are designed to keep your instrument safe from drops of up to 9 feet while also providing temperature and humidity regulation.',
      Company: 'Gibson',
      price: 112500
    },
    {
      accessoriesId: 2,
      accessoriesName: 'Flying V Modern Hardshell Case',
      accessoriesImage: 'https://images.ctfassets.net/m8onsx4mm13s/3Rndc0N9WYlIBPYvgEakUG/a2ebb0b6f6c4660cac0a31a53b544794/ASFVCASE-MDR_front.png?w=1200&h=1200',
      accessoriesDetails: "Gibson Signature Series Calton Cases provide the ultimate protection for your treasured Gibson instrument. Made in Austin, Texas, and featuring designs that pay stylistic tribute to vintage Gibson cases, they perfectly fit the Gibson instruments they’re built to protect. Crush resistant, they can withstand up to 1,100 lb of pressure and are designed to keep your instrument safe from drops of up to 9 feet while also providing temperature and humidity regulation.",
      Company: 'Gibson',
      price: 61425
    },
    {
      accessoriesId: 3,
      accessoriesName: 'Dave Mustaine Electric Guitar String Set, Signature Gauge',
      accessoriesImage: 'https://images.ctfassets.net/m8onsx4mm13s/4o2iShfEG8IMZyQJYTqPpk/5a627d20f56598284c2ef5a263cda453/SEG-DM10__front.png?w=1200&h=1200',
      accessoriesDetails: "Dave Mustaine is the legendary guitarist, vocalist, songwriter, and founder of the multi-platinum-selling and Grammy® Award-winning band, MEGADETH. Dave worked closely with Gibson to create a string set with the features and specifications that bring out the best in his signature Gibson electric guitars.",
      Company: 'Gibson',
      price: 1125
    },
    {
      accessoriesId: 4,
      accessoriesName: 'Gibson Headstock Tuner',
      accessoriesImage: 'https://images.ctfassets.net/m8onsx4mm13s/2mw2WXR8e4wkYiW84HNp2s/eb5c60ac6fb9592d12d2e56754890362/GA-TUNER_display.png?w=1200&h=1200',
      accessoriesDetails: "The Gibson Headstock Tuner precisely tunes guitars, basses, and other stringed instruments by analyzing string vibration instead of sound. The precise piezo sensor and vivid, multi-color display make tuning your instrument in noisy and dimly lit spaces simple.",
      Company: 'Gibson',
      price: 1500
    },
  ]
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/Card' element={<Card />}></Route>
          <Route path='/Login' element={<Login />}></Route>
          <Route path='/Footer' element={<Footer />}></Route>
          <Route path='/Signup' element={<Signup />}></Route>
          <Route path='/Display' element={<Display data={artist} />}></Route>
          <Route path='/Moreinfo/:id' element={<Moreinfo artist={artist} />}></Route>
          <Route path='/ImageSlider' element={<ImageSlider />}></Route>
          <Route path='/About' element={<About product={products} />}></Route>
          <Route path='/DetailProduct/:id' element={<DetailProduct productDetail={products} accessories={accessories} addToCart={addToCart}/>}></Route>
          <Route path='/AllProducts' element={<AllProducts product={products} />}></Route>
          <Route path='/Accessories' element={<Accessories accessories={accessories} />}></Route>
          <Route path='/Cart' element={<Cart cart={cart} />}></Route>
        </Routes>
      </Router>
    </>
  )
}
export default App