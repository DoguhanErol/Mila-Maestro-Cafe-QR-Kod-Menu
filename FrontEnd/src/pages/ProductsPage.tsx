import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../components/ProductsComp/ProductCard";
import ProductNavbar from "../components/ProductsComp/ProductNavbar"
import 'animate.css';


interface DataType{
	id: number;
	ProductMenuName: string;
	ProductTitle: string;
	ProductContent: string;
	ProductPrice:number;
  }

  
const ProductsPage = () => {
	const { menuNameID } = useParams();//routerID sogukicecekler gibi bilgileri ceker
	const [menuTitle, setMenuTitle] = useState('');
	
	useEffect(() => {		
		switch (menuNameID) {
			case 'sogukicecekler':
				setMenuTitle('Soğuk İçecekler')
				break;
			case 'sicakicecekler':
				setMenuTitle('Sıcak İçecekler')
				break;
			case 'kahvaltiliklar':
				setMenuTitle('Kahvaltılıklar')
				break;
			case 'burgerler':
				setMenuTitle('Burgerler')
				break;
			case 'aparatifler':
				setMenuTitle('Aparatifler')
				break;
			case 'tatlilar':
				setMenuTitle('Tatlılar')
				break;
			case 'nargileler':
				setMenuTitle('Nargileler')
				break;
			case 'kampanyalar':
				setMenuTitle('Kampanyalar')
				break;

			default:
				break;
		}
	  }, [menuNameID]);
	
  return (
    <>
	<div className=" w-full  min-h-screen bg-[url('./assets/bgimage3.jpg')] bg-no-repeat bg-center bg-fixed bg-cover  ">
    	<nav>
    		<ProductNavbar />
    	</nav>

    	<div className="flex flex-col  items-center justify-center w-full h-full ">
			<div className="flex flex-row w-full h-full items-start justify-start sm:justify-center sm:mr-96 ">
				<a href="/menu" type="button" className="flex mt-1 px-4 py-3 font-semibold rounded-full text-sm bg-gray-200 text-gray-800">			<svg className="mr-1" xmlns="http://www.w3.org/2000/svg" height="21" viewBox="0 -960 960 960" width="21"><path d="m480-320 56-56-64-64h168v-80H472l64-64-56-56-160 160 160 160Zm0 240q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg>Menu</a>
			</div>
			<ProductCard title={menuTitle} />
    	</div>
	</div>

    </>
  )
}

export default ProductsPage