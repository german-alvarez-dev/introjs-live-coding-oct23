import { Link } from 'react-router-dom'

function IndexPage() {

    return (
        <div class="container">

            <h1>Binevenid@ a la MERN Coasters!</h1>

            <hr />

            <Link class="Button" to="/galeria">Ver galeria</Link>

        </div>
    )
}

export default IndexPage