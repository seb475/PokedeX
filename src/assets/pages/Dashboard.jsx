
import { useState, useEffect } from 'react'
import axios from 'axios'
import PokemonCard from '../components/PokemonCard'
import { Link } from "react-router-dom";

const Dashboard = () => {

    const [ types, setTypes ] = useState( [] )
    const [ pokemons, setPokemons ] = useState( [] )

    useEffect(() => {

        axios
        .get( "https://pokeapi.co/api/v2/type" )
        .then( (resp) => setTypes( resp.data.results ))
        .catch( error => console.error(error) )

        axios
        .get( "https://pokeapi.co/api/v2/pokemon?offset=0&limit=1279" )
        .then( resp => setPokemons( resp?.data?.results ) )
        .catch( error => console.error(error) )
    }, [])


    const selectedType = (e) => {
        const url = e.target.value

        axios
        .get( url )
        .then( resp =>{ setPokemons(resp.data.pokemon)
        setPage(1) })
        .catch( error => console.error(error) )
    }


const [page, setPage ] = useState(1)
const pokemonsPerPage = 30
const lastindex = page * pokemonsPerPage
const firstIndex= lastindex - pokemonsPerPage


const pokemonsPaginated = pokemons?.slice( firstIndex, lastindex )

const totalPages = Math.ceil( pokemons.length / pokemonsPerPage )

const pagesNumbers = []

for (let i = 1; i <=  totalPages; i ++){
 pagesNumbers.push(i)
}


    return (
        <div>



                <div>
                    
                    
            <button className='ant'
            disabled={ page === 1}
            onClick={() => setPage(page - 1) }>Previo</button>

           
                {
                    pagesNumbers.map(num =>(
                        <button className='pag' key={num}
                        onClick={() => setPage(num)}>
                            {num}
                        </button>
                    ))
                }
                
            
            <button className='sig' onClick={() => setPage(page + 1) }
            disabled={page === totalPages}
            >Siguiente</button>
            </div>

            <p className='ptype'>Pokemon Type</p>
            <select className='type' onChange={selectedType}>
                
                {
                    
                    types?.map( type => (
                        <option  value={type.url} key={type.name}>{type.name}</option>
                    ) )
                }
            </select>
            
            <ul>
                {
                    pokemonsPaginated.map( (item, index) => (
                        <PokemonCard 
                        key={index}
                        url={ item.pokemon ? item.pokemon.url : item.url }
                        />
                    ))
                }
            </ul>
            
           
        </div>
    )
}

export default Dashboard