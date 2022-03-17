import React from 'react'
import Logo from '../../img/logo.svg'

const Nav = () => {
    return ( 
        <div className='nav'>
            <figure>
                <img src={Logo} alt="logo"/>
            </figure>
        </div>
     );
}
 
export default Nav;