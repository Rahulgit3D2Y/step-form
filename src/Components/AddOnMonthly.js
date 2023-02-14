export const AddOnMonthly=()=>{
    return(
        <>
            <div>
                <input type="checkbox" name="tick" id="tick" />
                <div>
                    <h2>Online service</h2>
                    <p>Access to multiplayer games</p>
                </div>
                <h3>+$1/mo</h3>
            </div>
            <div>
                <input type="checkbox" name="tick" id="tick" />
                <div>
                    <h2>Larger storage</h2>
                    <p>Extra 1TB of cloud save</p>
                </div>
                <h3>+$2/mo</h3>
            </div>
            <div>
                <input type="checkbox" name="tick" id="tick" />
                <div>
                    <h2>Customizable Profile</h2>
                    <p>Custom theme on your profile</p>
                </div>
                <h3>+$2/mo</h3>
            </div>
        </>
    )
}