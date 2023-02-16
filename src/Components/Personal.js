export const Personal=()=>{
    return(
        <div className="personal">
            <h2>Personal info</h2>
            <p>Please provide your name, email address, and phone number.</p>
            <form action="">
                <label htmlFor="name">Name<input type="text" name="name" id="name" placeholder="e.g. Stephen King" required/></label>
                
                <label htmlFor="email">Email Address<input type="email" name="email" id="email" placeholder="e.g. stephenking@lorem.com"required /></label>
                
                <label htmlFor="phone">Phone Number
                <input type="tel" name="phone" id="phone" placeholder="e.g. +1 234 567 890"required /></label>
               
            </form>
        </div>
    )
}