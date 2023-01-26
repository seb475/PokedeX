import { useState, useEffect } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

const PokemonDetail = () => {

    const [ data, setData ] = useState({})
    const { name } = useParams()
    const navigate = useNavigate()

    useEffect(() => {

        axios
        .get(`https://pokeapi.co/api/v2/pokemon/${name}`)
        .then(resp => setData(resp.data))

    }, [name])

    return(
        <div className="pokemon-detail-view">
            <Link className='go-home' to="/">Go Home</Link>
            <button className='back' onClick={ () => navigate(-1) }>Back</button>
            
            <h1 className='poke-name'>{data?.name}</h1>
           
            <img className='img-detail' src={data.sprites?.other["official-artwork"].front_default} alt="" />
        </div>
    )
}

export default PokemonDetail