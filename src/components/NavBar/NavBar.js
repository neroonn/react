import cartWidget from "./cartWidget/cartWidget"

const NavBar = () => {
    return(
        <nav>
            <h3>Tienda</h3>
            <div>
                <button>Indumentaria</button>
                <button>Calzado</button>
            </div>
            <cartWidget/>
        </nav>
    )
}

export default NavBar   