import React, { useEffect, useState } from 'react'
import axios from 'axios';

import { Link } from 'react-router-dom';
import "./styleGameCatalog.scss"

function GameCatalog() {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8081").then((res) => {
            setPosts(res.data)
            console.log(res);
        }).catch((err) => {
            console.log(err.response)
        })

    }, [])

    function renderCard() {
        return posts.map((post, key) => {
            return (
                <div className="product-card" key={key}>
                    <div className="img-card">
                        <img src={post.link_imagem} alt="product"></img>
                    </div>

                    <div className="card-content">
                        <h1>{post.nome_jogo}</h1>
                        <h3>{new Intl.NumberFormat("pt-BR", { style: 'currency', currency: 'BRL' }).format(post.preco)}</h3>
                        <button className="btn-comprar">Comprar</button>
                        <Link to={{ pathname: `/detalhes-do-produto/${post.id}` }}>
                            <button className="btn-detalhes">Detalhes</button>
                        </Link>
                    </div>
                </div>
            )
        })
    }

    return (
        <main className='game-catalog'>
            <section>
                {renderCard()}
            </section>
        </main>
    )
}

export default GameCatalog;