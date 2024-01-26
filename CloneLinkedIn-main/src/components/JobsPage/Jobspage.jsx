import MyHeader from "../MyHeader/MyHeader";
import "./Jobspage.css"
import MyOfferte from "./MyOfferte/MyOfferte";
import SelezioneInCorso from "./SelezioneInCorso/SelezioneInCorso";
import RicercheSuggerite from "./RicercheSuggerite/RicercheSuggerite";
import ReccommendedForYou from "./RecommendedForYou/RecommendedForYou";
import { useState } from "react";
import Minifooter from "../Homepage/MiniFooter/MiniFooter";
import BigFooter from "../Homepage/BigFooter/BigFooter";


const Jobspage = () => {
    const [isFooterOn, setIsFooterOn] = useState(false)
    
    const handleBigFooter = () => {
        if(isFooterOn) {
            setIsFooterOn(false)
        } else {
            setIsFooterOn(true)
        }     
    }

    return (
        <>
      <MyHeader />
      {isFooterOn ? (<BigFooter close={handleBigFooter} />) : ""} 
        <div className='jobspage'>
            <div className='jobspageLeft'>               
                <MyOfferte />
            </div>
            <div className='jobspageCenterAndRight'>
                <div className='jobspageCenter'>
                <RicercheSuggerite />
                <ReccommendedForYou />
                <SelezioneInCorso />              
                    {/* CENTER */}
                   
                </div>
                    <div className='jobspageRight'>
                        <Minifooter open={handleBigFooter}/> 
                        {/* RIGHT */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Jobspage;