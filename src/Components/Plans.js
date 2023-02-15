import { PlanMonthly } from "./PlanMonthly"
import { PlanYearly } from "./PlanYearly"
import { Routes,Route,Link } from "react-router-dom"
export const Plans=()=>{
    return(
        <>
        <h1>Select your plan</h1>
        <p>You have the option of monthly or yearly billing</p>
        <div className="plan-offers">
            <Routes>
                <Route path="/" element={<PlanMonthly/>}/>
                <Route path="PlanMonthly" element={<PlanMonthly/>}/>
                <Route path="PlanYearly" element={<PlanYearly/>}/>
            </Routes>
            <div className="switch">
                <h2>Monthly</h2>
                
                <Link to="PlanYearly">
                    <label className="switch">
                    <input type="checkbox" checked/>
                    <span className="slider round"></span>
                    </label>
                </Link>
                <Link to="PlanMonthly">
                <label className="switch">
                    <input type="checkbox" checked/>
                    <span className="slider round"></span>
                    </label></Link>
                <h2>Yearly</h2>
            </div>
        </div>
        </>
    )
}