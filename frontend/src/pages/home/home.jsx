import React, { useEffect } from 'react'
import GameCatalog from '../../components/gameCatalog/gameCatalog';
import NavbarComponent from '../../components/navBar/navBar';

function Home(){

    useEffect(() => {
        document.body.style.backgroundColor = "#efefef"
      })

    return(
        <>
            <header>
                <NavbarComponent/>
            </header>
            <main>
                <GameCatalog/>
            </main>
        </>
    )
}

export default Home;