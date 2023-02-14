import { AddOnMonthly } from "./AddOnMonthly"
import { AddOnYearly } from "./AddOnYearly"

export const AddOn=()=>{
    return(
        <>
            <h1>pick add-ons</h1>
            <p>Add-ons help enhance your gaming experience.</p>
            <div className="benefits">
                <AddOnMonthly/>
                <AddOnYearly/>
            </div>
        </>
    )
}