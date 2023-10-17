import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import 'animate.css';

interface DataType{
	id: number;
	ProductMenuName: string;
	ProductTitle: string;
	ProductContent: string;
	ProductPrice:number;
  }


const ProductCard  = (props:{title:string}) => {
  const { menuNameID } = useParams();
	const fetchUrl ='https://backend.milamaestro.com/api/' + menuNameID + '/'

	  const [products, setProducts] = useState<DataType[]>([{
		id: 0,
		ProductMenuName: '',
		ProductTitle: '',
		ProductContent: '',
		ProductPrice:0,
	  }]);
	

	  const fetchData = () => {

		fetch(fetchUrl )
		.then(response => response.json())
		.then(data => {
		  setProducts(data)
		})
		.catch(err => {
		  console.error('An error occurred while fetching data:', err);
		});
	}
  useEffect(() => {
		fetchData();
	  }, [menuNameID]);

  return (
    <>
    <div className="flex items-center justify-center w-full h-full animate-[backInLeft_1s] ">
    <section className="flex flex-col  m-2 mb-24  p-6 space-y-4 w-full  sm:w-[42rem] sm:p-10 divide-gray-500 bg-[#696161de] text-gray-100  rounded-md ">
        <h2 className="text-2xl font-semibold">{props.title}</h2>
        <div className=" pt-4 w-full space-y-2">
        {products.map((product, index) => (
            <article key={index}>
                <div className="flex justify-between">
                    <span className="text-lg">{product.ProductTitle}</span>
                    <span className="text-lg">{product.ProductPrice} ₺</span>
                </div>
                <div className="flex items-center space-x-2 text-sm ml-2">
                    <span className="text-gray-400">{product.ProductContent}</span>
                </div>
            </article>
      ))}
        </div>

    </section>
    </div>
    </>
  )
}

export default ProductCard