import React from 'react'
import {
BlackBar, 
Head,
} from "../components/SupportPageComponents/SupportSyles";
    import TopSection from './SupportPageComponents/TopSection';
    import BottomSection from './SupportPageComponents/BottomSection';

export default function Support() {
  return (
    <form  className="flex justify-content max-w-xs mx-auto mt-5 "  >

    <h1 className="pt-5 font-link col text-center">
      Zombie Apocalypse
    </h1>
    <div>
      <TopSection/>
      </div>
    <div>
    <BlackBar>

    <Head>
    <b>
    FOLLOW US!
    </b>

    </Head>
    </BlackBar>

    </div>

      <div>
      <BottomSection/>
      </div>

  </form>
  )
}
