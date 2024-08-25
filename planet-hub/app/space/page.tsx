import React from 'react'
// import { SpaceCard } from '@/components/space-component/SpaceCard'
import SpaceTitle from "@/components/space-component/SpaceTitle";
import SpaceImages from "@/components/space-component/SpaceImages";
import SpaceMoreInformation from "@/components/space-component/SpaceMoreInformation";


function Space() {
  return (
    <div>
      <SpaceTitle />
      <SpaceImages />
      <SpaceMoreInformation />

    </div>
  )
}

export default Space