'use client'

import Image from "next/image";
import MainPagePhoto from "@/public/main_page_photo.jpg";
import OfferIcon from "@/public/offer_icon.png";
import CustomerSupportIcon from "@/public/customersupport_icon.png";
import PlaceIcon from "@/public/place_icon.png";
import WebIcon from "@/public/web_icon.png";
import { Separator } from "@/components/ui/separator"
import { MainPageSearchForm } from "@/components/MainPageSearchForm";
import { MainPageCarousel } from "@/components/MainPageCarousel";
import { ReactTyped } from "react-typed";

export default function Home() {

  return (
    <div>

      <div className="flex items-center">
        <div className="p-1 text-center">
          <p className="text-textTitle text-5xl font-bold drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]"><ReactTyped className="text-textTitle text-5xl font-bold drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]" strings={["Find your next destination!"]} typeSpeed={100} />📍</p>
          <p className="text-textAll text-lg p-5">PlanetHub is a virtual platform designed for those who wish to explore the vast universe of planets, stars and galaxies, offering an immersive and educational experience.</p>
          <p className="text-textAll italic text-xl">PlanetHub is more than just a travel platform,<br></br> it is a portal to the vastness of the cosmos.</p>
        </div>
        <div className="shadow-2xl bg-white rounded-xl p-3 m-4 shadow-palleteOrange hover:scale-105 duration-164 ease-in-out hover:shadow-white">
          <Image src={MainPagePhoto} width={564} height={564} alt='PlanetHub App Logo' />
        </div>
      </div>

      <div className="my-10">
        <MainPageSearchForm></MainPageSearchForm>
      </div>

      <Separator className="my-7" />

      <div>
        <p className="text-center"><span className='text-textTitle text-2xl font-bold drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] hover:text-4xl'>Recommended planets 🪐</span></p>
        <MainPageCarousel></MainPageCarousel>
        <p className="text-textAll italic text-xl text-center underline">Join more than a million travelers from all galaxies!</p>
      </div>

      <Separator className="my-7" />

      <div className="flex justify-center items-center">
        <div className="w-3/4 grid grid-cols-2 grid-rows-2 gap-6">
          <div className="flex justify-center items-center p-4">
            <Image className="shadow-2xl bg-white rounded-xl p-3 m-4 shadow-palleteOrange hover:scale-105 duration-164 ease-in-out hover:shadow-white" src={OfferIcon} width={64} height={64} alt='PlanetHub App Logo' />
            <div className="flex flex-col">
              <p className="text-textTitle text-xl font-bold">Constant offers</p>
              <p className="text-textAll">Special offers and discounts available for popular destinations within the universe.</p>
            </div>
          </div>

          <div className="flex justify-center items-center p-4">
            <Image className="shadow-2xl bg-white rounded-xl p-3 m-4 shadow-palleteOrange hover:scale-105 duration-164 ease-in-out hover:shadow-white" src={CustomerSupportIcon} width={64} height={64} alt='PlanetHub App Logo' />
            <div className="flex flex-col">
              <p className="text-textTitle text-xl font-bold">Customer Support</p>
              <p className="text-textAll">Consultations and assistance during the booking and the trip.</p>
            </div>
          </div>

          <div className="flex justify-center items-center p-4">
            <Image className="shadow-2xl bg-white rounded-xl p-3 m-4 shadow-palleteOrange hover:scale-105 duration-164 ease-in-out hover:shadow-white" src={WebIcon} width={64} height={64} alt='PlanetHub App Logo' />
            <div className="flex flex-col">
              <p className="text-textTitle text-xl font-bold">Information always available</p>
              <p className="text-textAll">Relevant news about the universe and our intergalactic travel agency.</p>
            </div>
          </div>

          <div className="flex justify-center items-center p-4">
            <Image className="shadow-2xl bg-white rounded-xl p-3 m-4 shadow-palleteOrange hover:scale-105 duration-164 ease-in-out hover:shadow-white" src={PlaceIcon} width={64} height={64} alt='PlanetHub App Logo' />
            <div className="flex flex-col">
              <p className="text-textTitle text-xl font-bold">Plan your trip</p>
              <p className="text-textAll">Enter the destination you wish to travel to and get information about flights and accommodations.</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
