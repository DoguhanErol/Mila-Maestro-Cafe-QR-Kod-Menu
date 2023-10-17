import React, { useState } from 'react'

function MenuWifi() {
    const [numberToolTipText, setNumberToolTipText] = useState('Kopyalamak İçin Tıkla');

    function copyWifiPassword() {
        const Wifi = '16253400aDa'; // Wifi Sifresini buraya yazın veya istediğiniz şekilde alın
        navigator.clipboard.writeText(Wifi) // Wifi Sifresini panoya kopyalar
          .then(() => {
            console.log('Wifi Sifresi kopyalandı:', Wifi);
            setNumberToolTipText('Kopyalandı!');
            setTimeout(() => {
              setNumberToolTipText('Kopyalamak İçin Tıkla'); // 2 saniye sonra eski metni geri getirir
            }, 1000);
    
          })
          .catch((error) => {
            console.error('Telefon numarası kopyalanırken hata oluştu:', error);
          });
    }
  return (
    <>
            <div className=' inline-flex flex-col justify-center items-center w-52 h-7 bg-gray-700 rounded-md mb-3'>
            <p className="text-white text-sm">{numberToolTipText}</p>
            <div className='relative h-0 bottom-5'>
              <svg className='text-gray-700' xmlns="http://www.w3.org/2000/svg" fill="currentColor" height="52" width="52" viewBox="0 -960 960 960"><path d="M480-360 280-559h400L480-360Z"/></svg>
            </div>
        </div>
    <article className="  z-40 text-neutral-800 bg-gray-100 p-2 shadow-2xl rounded-3xl animate-pulse ">

        <button className='w-full ' onClick={copyWifiPassword}>
            <h2 className='flex justify-center items-center text-2xl w-full  py-1'><span className='text-stone-600 text-xl'>Wifi:</span>16253400aDa</h2>
        </button>
    </article>
    </>
  )
}

export default MenuWifi