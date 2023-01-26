
import { useSelector, useDispatch } from 'react-redux' 
import { changeName } from '../../store/slices/username.slice'
import { useNavigate } from 'react-router-dom'

const Home = () => {

  const name = useSelector( state => state.username )

  const dispatch = useDispatch() 
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch( changeName( e.target[0].value ) )

    navigate( "/dashboard" )
  }


    return (
        <div  > 
          
            <img className='inicio' src="public\dex.png" alt="" />
            <p className='p'>Welcome pokemon master enter your name</p>
            
            <h1 className='txt'>{name}</h1>
            <form className='home ' action="" onSubmit={ (e) => handleSubmit(e) }>
            <input className='hm' type="text" />
            <button className='mh'>Enter</button>
            </form>
            
        </div>
    )
}

export default Home