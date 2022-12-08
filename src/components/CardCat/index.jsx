import { useEffect, useState } from "react";
import axios from "axios";

const CardCat = () => { 

  const [poke, setPoke] = useState(null)

  const URLPokeAPI = "https://pokeapi.co/api/v2/pokemon/151";

  useEffect(() => {
    const dataPoke = async () => {
      try {
        const request = await axios.get(URLPokeAPI);
        console.log(request.data);
        return request.data;
      } catch (error) {
        console.error(error);
      }
    }
    dataPoke().then(data => setPoke(data))
   }, [])

  return (
    <div className="card" style={{ width: 18 + "rem" }}>
      <img
        src={poke?.sprites?.front_default}
        className="card-img-top"
        alt=""
      />
      <div className="card-body">
        <h5 className="card-title">{ poke?.name.toUpperCase() }</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <a href="#" className="btn btn-primary">
          Go somewhere
        </a>
      </div>
    </div>
  );
}

export default CardCat;