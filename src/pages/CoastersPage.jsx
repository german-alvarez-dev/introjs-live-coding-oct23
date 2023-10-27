import { useState } from "react"
import { Link } from "react-router-dom"

function CoastersPage() {


    const loadCoasters = () => {
        fetch('https://multiapi-app.fly.dev/coasters/coastersSelection')
            .then(res => res.json())
            .then(coastersData => setCoasters(coastersData))
    }

    loadCoasters()

    const [coasters, setCoasters] = useState([])


    return (

        <div class="container">

            <h1>Listado de montañas rusas</h1>

            <hr />

            {
                coasters.map(eachCoaster => {

                    return (
                        <Link to={`/detalles/${eachCoaster._id.$oid}`}>
                            <article class="CoasterCard">
                                <img src={eachCoaster.imageUrl}></img>
                                <h3>{eachCoaster.title}</h3>
                            </article>
                        </Link>
                    )
                })
            }


        </div>
    )
}

export default CoastersPage