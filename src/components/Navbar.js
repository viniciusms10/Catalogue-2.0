import { Link } from "react-router-dom"


function NavBar() {
    return(
        <nav>
            <div className="title">
              <div className="left">
                  <Link to="/">
                    <img src=" images/WhatsApp Image 2024-04-19 at 16.58.59.png" alt="logo"/>
                  </Link>
                  <h1>Your Home is Priceless</h1>
              </div>
              
              <div className='right'>
               
                <label><Link to="/">Home</Link></label>
                <label><Link to="/Contact">Contact</Link></label>
                <label><Link to="/About">About us</Link></label>
                <label><Link to="/Visit">Visit</Link></label>
                
              </div>
              
            </div>
            
            
        </nav>
        
    )
}

export default NavBar