import { FinishMonthly } from "./FinishMonthly"
import { FinishYearly } from "./FinishYearly"

export const Finish=()=>{
    return(
        <>
            <h2>Finishing up</h2>
            <p>Double-check everything looks OK before confirming.</p>
            <div className="cost">
                <FinishMonthly/>
                <FinishYearly/>
            </div>
        </>
    )
}