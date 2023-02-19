export const AddOnYearly=()=>{
    return(
        <div className="ayearly">
            <div>
                <input type="checkbox" name="tick" id="tick" />
                <div>
                    <h4>Online service</h4>
                    <h5>Access to multiplayer games</h5>
                </div>
                <p>+$10/mo</p>
            </div>
            <div>
                <input type="checkbox" name="tick" id="tick" />
                <div>
                    <h4>Larger storage</h4>
                    <h5>Extra 1TB of cloud save</h5>
                </div>
                <p>+$20/mo</p>
            </div>
            <div>
                <input type="checkbox" name="tick" id="tick" />
                <div>
                    <h4>Customizable Profile</h4>
                    <h5>Custom theme on your profile</h5>
                </div>
                <p>+$20/mo</p>
            </div>
        </div>
    )
}