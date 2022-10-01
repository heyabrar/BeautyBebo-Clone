import { Route, Routes } from "react-router-dom";
import Home from '../Pages/Home'
import HairPage from '../Pages/HairPage'
import MomAndBabyCarePage from '../Pages/MomAndBabyCarePage'
import FragrancePage from '../Pages/FragrancePage'
import SinglePageDisplaySlider from "../Components/SinglePageSlider";
import SinglePageMakeUp from "../Components/SinglePageMakeUpTab";
import SPHairTab from "../Components/SinglePageHairTab";
import SPFragrance from "../Components/SinglePageFragrancePage";
import SPBestSellers from "../Components/SinglePageBestSeller";
import SPLatestProducts from "../Components/SinglePageLatestProduct";
import SPMostViewed from "../Components/SinglePageMostViewed";
import SingleHairPage from "../Components/SingleHairPage";
import SPMomAndBabyCareTab from "../Components/SinglePageMomAndBabyTab";
import SingleMBCPage from "../Components/SingleMBCPage";
import SingleFragrancePage from "../Components/SingleFragrancePage";
import CartPage from "../Pages/CartPage";
import CheckoutPage from "../Pages/CheckoutPage";
import PaymentPage from "../Pages/PaymentPage";
import NotFoundPage from "../Pages/NotFoundPage";

export default function AllRoutes ( ) {
    return (
        <>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/hair" element={<HairPage/>}/>
            <Route path="/mombabycare" element={<MomAndBabyCarePage/>}/>
            <Route path="/fragrance" element={<FragrancePage/>}/>
            <Route path="/cart" element={<CartPage/>}/>
            <Route path="/checkout" element={<CheckoutPage/>}/>
            <Route path="/payment" element={<PaymentPage/>}/>
            <Route path="*" element={<NotFoundPage/>}/>
            <Route path="/homeSliderData1/:id" element={<SinglePageDisplaySlider/>}/>
            <Route path="/MakeUpTab/:id" element={<SinglePageMakeUp/>}/>
            <Route path="/HairTab/:id" element={<SPHairTab/>}/>
            <Route path="/MomAndBabyCareTab/:id" element={<SPMomAndBabyCareTab/>}/>
            <Route path="/FragranceTab/:id" element={<SPFragrance/>}/>
            <Route path="/BestSellers/:id" element={<SPBestSellers/>}/>
            <Route path="/LatestProducts/:id" element={<SPLatestProducts/>}/>
            <Route path="/MostViewed/:id" element={<SPMostViewed/>}/>
            <Route path="/Hair/:id" element={<SingleHairPage/>}/>
            <Route path="/MomAndBabyCare/:id" element={<SingleMBCPage/>}/>
            <Route path="/Fragrance/:id" element={<SingleFragrancePage/>}/>
        </Routes>
        </>
    )
}