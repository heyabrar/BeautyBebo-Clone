import { Route, Routes } from "react-router-dom";
import Home from '../Pages/Home'
import HairPage from '../Pages/HairPage'
import MomAndBabyCarePage from '../Pages/MomAndBabyCarePage'
import FragrancePage from '../Pages/FragrancePage'

export default function AllRoutes ( ) {
    return (
        <>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/skin" element={<h1>SKIN</h1>}/>
            <Route path="/hair" element={<HairPage/>}/>
            <Route path="/personalcare" element={<h1>Personak Care</h1>}/>
            <Route path="/mombabycare" element={<MomAndBabyCarePage/>}/>
            <Route path="/ayurveda" element={<h1>AYURVEDA</h1>}/>
            <Route path="/fragrance" element={<FragrancePage/>}/>
            <Route path="/brands" element={<h1>BRands</h1>}/>
        </Routes>
        </>
    )
}