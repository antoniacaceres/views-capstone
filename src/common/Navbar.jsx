import '../assets/styles/Navbar.css';
import { useState } from "react";

export default function Navbar(){

    const [country, setCountry] = useState("Chile")


    function handleCountry(e) {
        setCountry(e.target.value)
    }

    return(
        <header>
           <nav>
               <div className="logo item-3"></div>
               <a href="" className="item-1">Explora</a>
               <a href="" className="item-1">Ayuda</a>
               <a href="" id="texto-claro" className="item-1">Entrar</a>
               <button id="crear-cuenta" className="item-2">Crear cuenta</button>
                <div className="seleccion-pais">
                    <select className="seleccion" onChange={handleCountry}>
                            <option value="Chile" className = "país">Chile</option>
                            <option value="Colombia" className = "país">Colombia</option>
                            <option value="México" className = "país">México</option>
                            <option value="Perú" className = "país">Perú</option>
                    </select>
                </div>
           </nav>
        </header>
    )
}