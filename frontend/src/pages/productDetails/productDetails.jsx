import React, { useEffect } from 'react'
import ComponentProductDetails from '../../components/componentProductDetails/componentProductDetails';
import NavbarComponent from '../../components/navBar/navBar';

function ProductDetails(){

    useEffect(() => {
        document.body.style.backgroundColor = "#efefef"
      })

    return (
        <>
        <header>
            <NavbarComponent/>
        </header>
        <main>
            <ComponentProductDetails/>
        </main>
    </>
    )
}

export default ProductDetails;