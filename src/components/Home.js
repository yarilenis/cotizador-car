import Header from '../layout/header.js';
import Footer from '../layout/footer.js';
import FormUser from './FormUser.js';
import background from "./../background.png";

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${background})` }}>
      <Header />
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-5 p-0 p-md-3">
            <div className="py-3 p-sm-4 p-lg-5 d-flex d-md-block">
              <div className="my-4 text-center order-1">
                <img src="static/images/car-girl.png" className="d-none d-md-block" alt="logo" />
                <img src="static/images/car-girl-mobile.png" className="d-md-none" alt="logo" />
              </div>
              <div className="order-0 mt-4 pl-4 p-md-0">
                <p>
                  <b>¡NUEVO!</b>
                </p>
                <h1>
                  Seguro
                  <span className="text-primary"> Vehicular Tracking</span>
                </h1>
                <p className="mt-3 text-dark">Cuentanos donde le haras seguimiento a tu seguro</p>
            </div>
            </div>
          </div>
          <div className="col-12 col-md-7">
            <div>
              <FormUser />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;