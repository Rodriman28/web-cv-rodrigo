import { Fragment, React } from "react";
import { Link } from "react-router-dom";


const About = () => {
  return (
    <Fragment>
      <section class="hero background-about is-fullheight">
        <div class="hero-body">
          <div class="tile is-ancestor is-vertical">
            <div className="tile is-parent">
              <div className="tile is-child is-parent">
                <div className="tile">
                  {" "}
                  {/* Bloque del boton */}
                  <div className="tile animation-5 invisible">
                    <Link to="/" class="button is-dark has-text-white is-normal">
                      Volver
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="tile is-parent is-12">
              <div className="tile is-child is-10">
                <div className="tile is-parent">
                  <div className="tile is-child box invisible animation-1">
                    {" "}
                    {/* Acerca de mi */}
                    <p className="title has-text-black">Acerca de mí</p>
                    <p className="has-text-black">
                      Si bien mi gusto por la informática comenzó desde niño, mi
                      interés por la programación se desarrolló durante el
                      bachillerato de informática, desde ahí me dediqué a crear
                      proyectos pequeños como calculadoras, aplicaciones de
                      gestión o simples interfaces para poner en practica cada
                      cosa nueva que aprendía.
                    </p>
                    <p className="has-text-black">
                      Soy una persona a la que le gusta proponerse desafíos con
                      cada nueva tecnología que adquiere, desde crear un
                      programa en varios lenguajes para comprobar cual es el mas
                      adecuado, hasta realizar web apps con distintas bases de
                      datos para comprender su implementación.
                    </p>
                    <p className="has-text-black"></p>
                  </div>
                </div>
                <div className="tile">
                  <div className="tile is-parent is-vertical">
                    {" "}
                    {/* Grupo de bloques de la izquierda*/}
                    <div className="tile is-child box invisible animation-2">
                      {" "}
                      {/* Cursos realizados */}
                      <p className="title has-text-black">Cursos realizados</p>
                      <div className="content has-text-black">
                        <ul>
                          <li>Javascript moderno guía definitiva (Udemy)</li>
                          <li>
                            Crea una aplicación implementando MERN stack (Udemy)
                          </li>
                          <li>Bootstrap 5 curso completo (Udemy)</li>
                          <li>Curso de HTML5 desde cero (Youtube/Soy Dalto)</li>
                          <li>Curso de CSS desde cero (Youtube/Soy Dalto)</li>
                          <li>
                            Curos de JavaScript desde cero (Youtube/Soy Dalto)
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="tile is-child box invisible animation-3">
                      {" "}
                      {/* Experiencias y proyectos */}
                      <p className="title has-text-black">
                        Experiencias y Proyectos
                      </p>
                      <div className="content has-text-black">
                        <ul>
                          <li>
                            Search Proyect -> Proyecto de fin de año del
                            Bachillerato de Informática, realizado en Visual
                            Basic
                          </li>
                          <li>
                            Zero service app -> Aplicación web de gestión de
                            servicios técnicos para Zero Informática, realizada
                            en stack MERN
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="tile is-parent is-3 is-vertical">
                    {" "}
                    {/* Bloque vertical */}
                    <div className="tile is-child box invisible animation-4">
                      <p className="title has-text-black">
                        Tecnologías conocidas
                      </p>
                      <div className="content has-text-black">
                        <ul>
                          <li>HTML</li>
                          <li>CSS</li>
                          <li>JavaScript</li>
                          <li>MongoDB</li>
                          <li>React</li>
                          <li>Bootstrap</li>
                          <li>Bulma</li>
                          <li>Electrón</li>
                          <li>Java</li>
                          <li>C#</li>
                          <li>MySQL</li>
                          <li>Express</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="tile is-child">
                <div className="tile is-parent">
                  <div className="tile is-child invisible animation-5 box">
                    <p className="title has-text-black has-text-centered">Mis redes sociales</p>
                      <ul>
                        <li className="has-text-centered"> <a href="https://www.linkedin.com/in/rodrigo-romero-sena/" target="_blank"> <img className="social-icons" src="/assets/linkedin.svg" alt="" /></a> </li>
                        <li className="has-text-centered"> <a href="https://www.facebook.com/rodri.rirs/" target="_blank"> <img className="social-icons" src="/assets/facebook.svg" alt="" /></a> </li>
                        <li className="has-text-centered"> <a href="https://www.instagram.com/rodrimagic/" target="_blank"><img className="social-icons" src="/assets/instagram.svg" alt="" /></a> </li>
                        <li className="has-text-centered"> <a href="https://twitter.com/RodriRo28" target="_blank"><img className="social-icons" src="/assets/twitter.svg" alt="" /></a> </li>
                      </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default About;
