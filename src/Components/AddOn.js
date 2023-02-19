import { Link, Route, Routes } from "react-router-dom"
import { AddOnMonthly } from "./AddOnMonthly"
import { AddOnYearly } from "./AddOnYearly"

export const AddOn=()=>{
    return(
        <div className="addon">
            <h1>pick add-ons</h1>
            <p>Add-ons help enhance your gaming experience.</p>
            <div className="benefits">
                <Routes>
                    <Route path="/" element={<AddOnMonthly/>}/>
                    <Route path="/AddOnMonthly" element={<AddOnMonthly/>}/>
                    <Route path="/AddOnYearly" element={<AddOnYearly/>}/>
                </Routes>
                <Link to="AddOnMonthly">1</Link>
                <Link to="AddOnYearly">2</Link>
            </div>
        </div>
    )
}