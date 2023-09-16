import '../assets/styles/LandingPage.css'

export default function LandingPage() {
   return (
      <>
         <div>
            <div className="background">
               <div className="box">
                  <h1 className="title">Encuentra atención de salud a la medida de tu cobertura</h1>
                  <h3>Te ayudamos a encontrar un dentista o doctor que esté cubierto por tus beneficios de salud  y en los tiempos que necesitas.</h3>
                  <div>
                     <div className="texto-1">Busca tu hora médica</div>
                  </div>
               </div>   
               <div className="busqueda">
                  <div className="buscador">
                        <div className="caja">
                           <h4>Especialidad</h4>
                           <select className="especialidad">
                              <option >Todas</option>
                              <option >Colombia</option>
                              <option >México</option>
                              <option >Perú</option>
                           </select>
                        </div>

                        <div className="caja">
                           <h4>Ciudad</h4>
                           <select className="ciudad" >
                              <option >Todas</option>
                              <option >Colombia</option>
                              <option >México</option>
                              <option >Perú</option>
                           </select>
                        </div>

                        <div className="caja">
                           <h4>Centro de salud</h4>
                           <select className="centro-salud">
                              <option >Todas</option>
                              <option >Colombia</option>
                              <option >México</option>
                              <option >Perú</option>
                           </select>
                        </div>
                        <div>
                           <button id="boton-buscar">Buscar</button>
                        </div>
                     </div>
                  </div>
               </div>
         </div>
      </>
   )
}