import burger from '../../assets/burger.png'
import fires from '../../assets/fires.png'
import cake from '../../assets/cake.png'
import hookah from '../../assets/hookah.png'
import discount from '../../assets/discount.png'
import hotdrink from '../../assets/hotdrink.png'
import colddrink from '../../assets/colddrink.png'
import toast from '../../assets/toast.png'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'



const ProductNavbar = () => {
  const { menuNameID } = useParams()

  const handleUrlChange = () => {
      if (menuNameID) {
        const linkElement = document.getElementById(menuNameID);
        console.log(linkElement)
        if (linkElement) {
          linkElement.style.borderColor = "#F1F1E6"; // Sınır rengini değiştir
          linkElement.scrollIntoView()
        }
      }
    }
    useEffect(() => {
      handleUrlChange();
    }, [menuNameID]);
  

  return (
    <>
    <div className="flex items-center  space-x-2 overflow-x-visible px-2 py-2 overflow-y-hidden sm:justify-center flex-nowrap bg-[#6e788862] text-gray-100 ">
        <a  id='sogukicecekler' rel="noopener noreferrer" href="/menu/sogukicecekler" className="flex items-center flex-shrink-0 px-6 py-2 border-b-4 border-gray-700 text-gray-400">
          <img className='w-10 ' src={colddrink} alt="Cold Drink" />
        </a>

        <a id='sicakicecekler'  rel="noopener noreferrer" href="/menu/sicakicecekler" className="flex items-center flex-shrink-0 px-6 py-2 border-b-4 border-gray-700 text-gray-400">
          <img className='w-10 ' src={hotdrink} alt="Hot Drink" />
        </a>

        <a id='burgerler' rel="noopener noreferrer" href="/menu/burgerler" className="flex items-center flex-shrink-0 px-6 py-[0.6rem] border-b-4 border-gray-700 text-gray-400">
          <img className='w-9 ' src={burger} alt="Burger" />
        </a>

        <a id='kahvaltiliklar' rel="noopener noreferrer" href="/menu/kahvaltiliklar" className="flex items-center flex-shrink-0 px-6 py-[0.6rem] border-b-4 border-gray-700 text-gray-400">
          <img className='w-9 ' src={toast} alt="Burger" />
        </a>

        <a id='aparatifler' rel="noopener noreferrer" href="/menu/aparatifler" className="flex items-center flex-shrink-0 px-6 py-2 border-b-4 border-gray-700 text-gray-400">
          <img className='w-10 ' src={fires} alt="Fires" />
        </a>

        <a id='tatlilar' rel="noopener noreferrer" href="/menu/tatlilar" className="flex items-center flex-shrink-0 px-6 py-2 border-b-4 border-gray-700 text-gray-400">
          <img className='w-10 ' src={cake} alt="Cake" />
        </a>

        <a id='nargileler' rel="noopener noreferrer" href="/menu/nargileler" className="flex items-center flex-shrink-0 px-6 py-2 border-b-4 border-gray-700 text-gray-400">
          <img className='w-10 ' src={hookah} alt="Hookah" />
        </a>

        <a id='kampanyalar' rel="noopener noreferrer" href="/menu/kampanyalar" className="flex items-center flex-shrink-0 px-6 py-2 border-b-4 border-gray-700 text-gray-400">
        <img className='w-10 ' src={discount} alt="Discount" />
        </a>

    </div>
    </>
  )
}

export default ProductNavbar