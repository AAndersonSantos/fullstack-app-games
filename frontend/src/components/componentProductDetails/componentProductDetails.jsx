import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios';
import ComponentModal from '../modal/modal';
import './styleComponentProductDetails.scss'

function ComponentProductDetails() {

    const { id } = useParams()

    const [state, setState] = useState({
        nome_jogo: "",
        link_imagem: "",
        descricao: "",
        plataformas: "",
        preco: "",
        lojas: ""
    });

    const [valor, setNum] = useState(1)

    function add() {
        setNum(valor + 1)
    }

    function remove() {
        setNum(valor - 1)
    }


    useEffect(() => {
        axios.get(`http://localhost:8081/${id}`)
            .then((res) => {

                setState({
                    nome_jogo: res.data.nome_jogo,
                    link_imagem: res.data.link_imagem,
                    descricao: res.data.descricao,
                    preco: res.data.preco,
                    plataformas: res.data.plataformas,
                    lojas: res.data.lojas
                })

            }).catch((err) => {
                console.log(err.response)
            })

    }, [id])


    return (
        <>
            <div className='card-details'>
                <section>
                    <div className="img-card-details">
                        <img src={state.link_imagem} alt="product"></img>
                    </div>
                    <aside>
                        <h1>{state.nome_jogo}</h1>
                        <ul>
                            <li>
                                <p>{state.descricao}</p>
                            </li>
                            <li>
                                <span>{state.plataformas}</span>
                            </li>
                        </ul>

                        <label>Quantidade</label>
                        <div className='quatity'>
                            {valor === 0 ? <button className="counter-button">-</button> :
                                <button className="counter-button" onClick={remove}>-</button>}
                            <input type="text" value={valor} readOnly />
                            <button className="counter-button" onClick={add}>+</button>
                        </div>

                        <h2>{new Intl.NumberFormat("pt-BR", { style: 'currency', currency: 'BRL' }).format(state.preco)}</h2>
                        <button className='btn-comprar'>Comprar</button>
                        <br />
                        <Link to={{ pathname: `/` }}>
                            <button className='btn-voltar'>Voltar</button>
                        </Link>
                        <div className='container-localization' >
                            <ComponentModal lojas={state.lojas} />
                        </div>
                    </aside>
                </section>

            </div>
        </>
    )
}

export default ComponentProductDetails;