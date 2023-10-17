import MenuCard from "../components/MenuComp/MenuCard"
import coldDrinks from '../assets/menuImages/coldDrinks.webp'
import hotDrinks from '../assets/menuImages/hotDrinks.webp'
import burgers from '../assets/menuImages/burgers.webp'
import breakfeasts from '../assets/menuImages/breakfeasts.webp'
import fries from '../assets/menuImages/fries.webp'
import cake from '../assets/menuImages/cake.webp'
import hookah from '../assets/menuImages/hookah.webp'
import discount from '../assets/menuImages/discount.png'
import MenuWifi from "../components/MenuComp/MenuWifi"
import ProductNavbar from "../components/ProductsComp/ProductNavbar"
import 'animate.css';


function MenuPage() {
  return (
    <>
    <section className="flex justify-center items-center flex-col w-full bg-[#EDE9D0]  ">
      <a href="/menu">
        <div className="flex flex-col w-full sm:w-96 bg-gray-200 mb-5 shadow-2xl rounded-b-[100px] h-full items-center justify-center animate-[slideInDown_0.5s] ">
          <h1 className=" text-7xl px-11  text-stone-600 font-medium first-letter:text-red-600 first-letter:font-extrabold first-letter:font-serif">Maestro</h1>
          <h1 className=" text-7xl  text-stone-600 font-medium">Cafe</h1>
        </div>
      </a>
      <MenuWifi />
      <div className="animate-[slideInUp_1s] mb-24 ">
        <MenuCard imageUrl={coldDrinks} title="Soğuk İçecekler"  url="/menu/sogukicecekler"/>
        <MenuCard imageUrl={hotDrinks} title="Sıcak İçecekler" url="/menu/sicakicecekler" />
        <MenuCard imageUrl={burgers} title="Burgerler" url="/menu/burgerler" />
        <MenuCard imageUrl={breakfeasts} title="Kahvaltılıklar" url="/menu/kahvaltiliklar" />
        <MenuCard imageUrl={fries} title="Aparatifler" url="/menu/aparatifler" />
        <MenuCard imageUrl={cake} title="Tatlılar" url="/menu/tatlilar" />
        <MenuCard imageUrl={hookah} title="Nargileler" url="/menu/nargileler" />
        <MenuCard imageUrl={discount} title="Kampanyalar" url="/menu/kampanyalar" />
      </div>
    </section>
    </>
  )
}

export default MenuPage