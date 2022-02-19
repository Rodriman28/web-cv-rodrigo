import { Fragment, React } from "react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <Fragment>
      <section class="hero image-rodri is-fullheight">
          <div class="hero-body">
          <div class="container has-text-centered">
            <div class="columns is-flex is-vcentered">
              <div class="column is-size-2">
                <div className="block"></div>
                <p class="is-size-4 has-text-black animation-1 invisible">Mi nombre es Rodrigo Romero, soy programador en entrenamiento, me gusta aprender nuevas tecnologías y aplicarlas en proyectos personales a modo de práctica.</p>
                <div className="block"></div>
                <p class="is-size-4 has-text-black animation-1 invisible">Para conocer más sobre mis experiencias y conocimientos en programación presiona en "Más información".</p>
                <div class="mt-6">
                  <Link to="/about" class="button is-dark is-medium has-text-white invisible animation-3">
                    Mas información
                  </Link>
                </div>
              </div>
              <div class="column">
                
              </div>
            </div>
          </div>
        </div>
        
      </section>
    </Fragment>
  );
};

export default Index;
