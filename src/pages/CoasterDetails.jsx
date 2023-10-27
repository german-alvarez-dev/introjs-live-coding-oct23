import { useState } from "react"
import { useParams } from "react-router-dom"

function CoasterDetails() {

    const { coaster_id } = useParams()


    const loadCoasterDetails = () => {

        fetch(`https://multiapi-app.fly.dev/coasters/coastersSelection/${coaster_id}`)
            .then(res => res.json())
            .then(coasterData => setCoasterData(coasterData))
    }

    loadCoasterDetails()

    const [coasterData, setCoasterData] = useState({})

    const [showDescription, setShowDescription] = useState(false)

    const toggleAccordion = () => {
        setShowDescription(!showDescription)
    }


    return (

        <div class="container">

            <main class="CoasterDetails">

                <h1>Detalles de {coasterData.title}</h1>

                <hr />

                <img src={coasterData.imageUrl} />

                <article>

                    <h3>Especificaciones</h3>

                    <ul>
                        <li>Longitud: {coasterData.length} metros</li>
                        <li>Inversiones: {coasterData.inversions}</li>
                    </ul>

                    <hr />

                    <p onClick={toggleAccordion}>Ver descripción ⇩</p>

                    <p style={{ height: showDescription === true ? 'auto' : 0 }}>{coasterData.description}</p>

                    <hr />

                </article>

            </main>

        </div>
    )
}

export default CoasterDetails