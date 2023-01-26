import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const PokemonCard = ({ url }) => {
  const [detail, setDetail] = useState({});
  const navigate = useNavigate ();

  useEffect(() => {
    axios.get(url).then((resp) => setDetail(resp.data));
  }, [url]);

  return (

    

 <div className="card">
  <Link className="name-poke" to={`/dashboard/${detail?.name}`}>
  <li  className="pokemon-card">
      <img  src={detail.sprites?.front_default} alt="Pokemon" />
      <h4 className="pkn" >{detail?.name}</h4>
      <h4 >{detail?.type}</h4>
    
      
    </li>
  </Link>

  </div>
    
  
   
  );
};

export default PokemonCard;
