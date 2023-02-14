export const Personal=()=>{
    return(
        <>
            <h1>Personal info</h1>
            <p>Please provide your name, email address, and phone number.</p>
            <form action="">
                <label htmlFor="name">Name</label>
                <input type="text" name="name" id="name" placeholder="e.g. Stephen King"/>
                <label htmlFor="email">Email Address</label>
                <input type="email" name="email" id="email" placeholder="e.g. stephenking@lorem.com" />
                <label htmlFor="phone">Phone Number</label>
                <input type="tel" name="phone" id="phone" placeholder="e.g. +1 234 567 890" />
            </form>
        </>
    )
}