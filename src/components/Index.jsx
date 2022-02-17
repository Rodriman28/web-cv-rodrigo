import { Fragment, React } from "react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <Fragment>
      <section class="hero is-info is-fullheight">
        <div class="hero-body">
          <div class="container has-text-centered">
            <div class="columns is-flex is-vcentered">
              <div class="column is-size-2">
                <p>Rodrigo Romero</p>
                <div class="mt-6">
                  <Link to="/about" class="button is-warning is-medium">
                    Acerca de mí
                  </Link>
                </div>
              </div>
              <div class="column">
                <img src="https://placekitten.com/640/360" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Index;
