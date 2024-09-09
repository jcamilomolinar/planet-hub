'use client'

import Image from "next/image"
import MainPagePhoto from "@/public/main_page_photo.jpg"
import OfferIcon from "@/public/offer_icon.png"
import CustomerSupportIcon from "@/public/customersupport_icon.png"
import PlaceIcon from "@/public/place_icon.png"
import WebIcon from "@/public/web_icon.png"
import Ship1 from "@/public/ship1.png"
import Ship2 from "@/public/ship2.png"
import Ship3 from "@/public/ship3.png"
import Ship4 from "@/public/ship4.png"
import DeathStar from "@/public/death_star.png"
import { Separator } from "@/components/ui/separator"
import { MainPageSearchForm } from "@/components/MainPageSearchForm"
import { MainPageCarousel } from "@/components/MainPageCarousel"
import { ReactTyped } from "react-typed"
import { OpinionCard } from "@/components/OpinionCard"

export default function Home() {

  return (
    <div>
      <div className="relative w-full h-auto overflow-hidden">
        <div className="flex items-center z-10">
          <div className="p-1 text-center">
            <div className="flex flex-col items-center">
              <Image style={{ animationDelay: '0s' }} className="w-24 z-0 my-6 animate-bounce hover:cursor-pointer" src={DeathStar} width={100} height={100} alt="Ship1" />
              <p className="text-textTitle text-5xl font-bold drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]"><ReactTyped className="drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]" strings={["Find your next destination!"]} typeSpeed={100} />📍</p>
            </div>
            <p className="text-textAll text-lg p-5">PlanetHub is a virtual platform designed for those who wish to explore the vast universe of planets, stars and galaxies, offering an immersive and educational experience.</p>
            <p className="text-textAll italic text-xl"> <span className="text-textTitle font-bold drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.5)]">PlanetHub</span> is more than just a travel platform,<br></br> it is a portal to the vastness of the cosmos.</p>
          </div>
          <div className="drop-shadow-md bg-white rounded-xl p-3 m-4 shadow-palleteOrange hover:scale-105 duration-200 ease-in-out hover:shadow-white">
            <Image src={MainPagePhoto} width={564} height={564} alt='PlanetHub App Logo' />
          </div>
        </div>
        
        <Image style={{ animationDelay: '0.1s' }} className="absolute top-[30px] left-[-150px] w-24 animate-fly-ship1 z-0 hover:cursor-pointer" src={Ship1} width={100} height={100} alt="Ship1" />
        <Image style={{ animationDelay: '0.2s' }} className="absolute top-[120px] left-[-150px] w-24 animate-fly-ship2 z-0 hover:cursor-pointer" src={Ship2} width={100} height={100} alt="Ship2" />
        <Image style={{ animationDelay: '0.3s' }} className="absolute top-[300px] left-[-150px] w-24 animate-fly-ship3 z-0 hover:cursor-pointer" src={Ship3} width={100} height={100} alt="Ship3" />
        <Image style={{ animationDelay: '0.4' }} className="absolute top-[410px] left-[-150px] w-24 animate-fly-ship4 z-0 hover:cursor-pointer" src={Ship4} width={100} height={100} alt="Ship4" />
      </div>

      <div className="my-10">
        <MainPageSearchForm></MainPageSearchForm>
      </div>

      <Separator className="my-7" />

      <div>
        <p className="text-center"><span className='text-textTitle text-2xl font-bold drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] hover:text-4xl duration-200 ease-in-out'>Recommended planets 🪐</span></p>
        <MainPageCarousel></MainPageCarousel>
        <p className="text-textAll italic text-xl text-center underline">Join more than a million travelers from all galaxies!</p>
      </div>

      <Separator className="my-7" />

      <div className="flex justify-center items-center my-10">
        <div className="w-3/4 grid grid-cols-2 grid-rows-2 gap-6">
          <div className="flex justify-center items-center p-4">
            <Image className="shadow-2xl bg-white rounded-xl p-3 m-4 shadow-palleteOrangeVariant hover:scale-110 duration-200 ease-in-out" src={OfferIcon} width={64} height={64} alt='PlanetHub App Logo' />
            <div className="flex flex-col">
              <p className="text-textTitle text-xl font-bold">Constant offers</p>
              <p className="text-textAll">Special offers and discounts available for popular destinations within the universe.</p>
            </div>
          </div>

          <div className="flex justify-center items-center p-4">
            <Image className="shadow-2xl bg-white rounded-xl p-3 m-4 shadow-palleteOrangeVariant hover:scale-110 duration-200 ease-in-out" src={CustomerSupportIcon} width={64} height={64} alt='PlanetHub App Logo' />
            <div className="flex flex-col">
              <p className="text-textTitle text-xl font-bold">Customer Support</p>
              <p className="text-textAll">Consultations and assistance during the booking and the trip.</p>
            </div>
          </div>

          <div className="flex justify-center items-center p-4">
            <Image className="shadow-2xl bg-white rounded-xl p-3 m-4 shadow-palleteOrangeVariant hover:scale-110 duration-200 ease-in-out" src={WebIcon} width={64} height={64} alt='PlanetHub App Logo' />
            <div className="flex flex-col">
              <p className="text-textTitle text-xl font-bold">Information always available</p>
              <p className="text-textAll">Relevant news about the universe and our intergalactic travel agency.</p>
            </div>
          </div>

          <div className="flex justify-center items-center p-4">
            <Image className="shadow-2xl bg-white rounded-xl p-3 m-4 shadow-palleteOrangeVariant hover:scale-110 duration-200 ease-in-out" src={PlaceIcon} width={64} height={64} alt='PlanetHub App Logo' />
            <div className="flex flex-col">
              <p className="text-textTitle text-xl font-bold">Plan your trip</p>
              <p className="text-textAll">Enter the destination you wish to travel to and get information about flights and accommodations.</p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <p className="text-textTitle text-2xl font-bold drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.5)] text-center my-10">This is what some of our frequent travelers have to say...</p>
        <div className="flex justify-around">
          <OpinionCard name="C. M. Zapatus" user="requirements4life" date="8:21 PM / Dec 21, 2022">Great experience at Endor, definitely worth going to play with the lovable Ewoks.</OpinionCard>
          <OpinionCard name="Darth Vader" user="iamyourfather" date="4:21 PM / Oct 7, 2021">The hotel I stayed at in Mos Eisley is highly recommended, the food was fantastic and the service was excellent. There are also many activities to do in Tatooine.</OpinionCard>
          <OpinionCard name="Luke Skywalker" user="forceiswithme" date="6:55 AM / Jan 15, 2021">I had a great time during my stay in Naboo, I enjoyed the water world known for its beauty and its capital Theed.</OpinionCard>
        </div>
      </div>

    </div>
  );
}
