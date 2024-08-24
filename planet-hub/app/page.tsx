import Image from "next/image";
import MainPagePhoto from "@/public/main_page_photo.jpg"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex items-center">
        <div className="p-1">
          <p><span className='text-textTitle text-5xl font-bold drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]'>Find your next destination!</span></p>
          <p className="text-textAll text-lg py-5">PlanetHub is a virtual platform designed for those who wish to explore the vast universe of planets, stars and galaxies. Offering an immersive and educational experience.</p>
          <p className="text-textAll italic text-xl">PlanetHub is more than just a travel platform,<br></br> it is a portal to the vastness of the cosmos.</p>
        </div>
        <div className="shadow-2xl bg-white rounded-xl p-3 shadow-palleteOrange hover:scale-105 duration-150 ease-in-out hover:shadow-white">
          <Image src={MainPagePhoto} width={550} height={550} alt='PlanetHub App Logo' />
        </div>
      </div>
    </div>
  );
}
