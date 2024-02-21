// Layout component is used to display the fixed or constant content of the screen.
// Navbar and Footer content are fixed for every screen , only children content will be changed ...
import Navbar from '../navbar/Navbar'
import Footer from '../footer/Footer'

import React from 'react'

function Layout({children}) {
    return (
        <div>
            <Navbar/>
            <div className='content'>      
                {children}
            </div>
            <Footer/>
        </div>
    )
}

export default Layout
