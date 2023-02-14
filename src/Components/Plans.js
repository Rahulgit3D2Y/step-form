import { PlanMonthly } from "./PlanMonthly"
import { PlanYearly } from "./PlanYearly"

export const Plans=()=>{
    return(
        <>
        <h1>Select your plan</h1>
        <p>You have the option of monthly or yearly billing</p>
        <div className="plan-offers">
            {/*asdadsdad*/ }
            <PlanMonthly/>
            <PlanYearly/>
            <div className="switch">
                <h2>Monthly</h2>
                <label className="switch">
                    <input type="checkbox" checked/>
                    <span className="slider round"></span>
                </label>
                <h2>Yearly</h2>
            </div>
        </div>
        </>
    )
}