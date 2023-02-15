import { Link, Route, Routes } from "react-router-dom"
import { FinishMonthly } from "./FinishMonthly"
import { FinishYearly } from "./FinishYearly"

export const Finish=()=>{
    return(
        <>
            <h2>Finishing up</h2>
            <p>Double-check everything looks OK before confirming.</p>
            <div className="cost">
                <Routes>
                    <Route path="/" element={<FinishMonthly/>}/>
                    <Route path="/FinishMonthly" element={<FinishMonthly/>}/>
                    <Route path="/FinishYearly" element={<FinishYearly/>}/>
                </Routes>
                <Link to="FinishMonthly">1</Link>
                <Link to="FinishYearly">2</Link>
            </div>
        </>
    )
}