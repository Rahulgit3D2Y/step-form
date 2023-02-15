import { Link } from "react-router-dom"

export const Header =()=>{
    return(
        <>
        
        <header>
            <Link to='/'><button>1</button></Link>
            <Link to='/Plans'><button>2</button></Link>
            <Link to='/AddOn'><button>3</button></Link>
            <Link to='/Finish'><button>4</button></Link>
        </header>
        </>
    )
}