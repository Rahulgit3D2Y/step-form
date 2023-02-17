import { PlanMonthly } from "./PlanMonthly"
import { PlanYearly } from "./PlanYearly"
import { Routes,Route,Link } from "react-router-dom"
export const Plans=()=>{
    return(
        <div className="plans">
        <h1>Select your plan</h1>
        <p>You have the option of monthly or yearly billing</p>
        <div className="plan-offers">
            <Routes>
                <Route path="/" element={<PlanMonthly/>}/>
                <Route path="PlanMonthly" element={<PlanMonthly/>}/>
                <Route path="PlanYearly" element={<PlanYearly/>}/>
            </Routes>      
        </div>
        <div className="switch">
                <h2>Monthly</h2>
                <Link to="PlanMonthly">a</Link>
                <Link to="PlanYearly">b</Link>
                <h2>Yearly</h2>
            </div>
        </div>
    )
}