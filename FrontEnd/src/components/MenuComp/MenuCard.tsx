type MenuProps = {
  imageUrl:string;
  title:string;
  url:string;
}
const MenuCard =({imageUrl, title, url}:MenuProps) => {
  return (
    <>
    <article className=" z-40">
        <a href={url} className="flex flex-col  justify-center items-center min-w-[16rem] w-80 rounded-2xl shadow-2xl bg-gray-900 text-gray-100 m-2 ">{/* w-64 en kucuk telefona gore baktim */}
            <img src={imageUrl} alt="Food" className=" object-cover object-center w-full rounded-t-md h-72 op bg-neutral-600 rounded-2xl" />
            <div className='w-full h-0 '>
                <div className='w-full  relative bottom-14 '>
                <h2 className='flex justify-center items-center text-3xl w-full text-neutral-200 bg-gray-500 bg-opacity-70 py-1'>{title}</h2>
                </div>
            </div>
        </a>
    </article>
    </>
  )
}

export default MenuCard