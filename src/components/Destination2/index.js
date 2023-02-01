import {useEffect, useState} from 'react';
import { Link } from 'react-router-dom'
import Destinations from '../../api/destination'
import Imagen from '../../images/destination/2.jpg'



const Destination2 = (props) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [clients, setClients] = useState([]);// eslint-disable-next-line
  const [error, setError] = useState(null); 

  useEffect(() => {
    fetchClientes();
  }, [isLoaded]);

  const fetchClientes = async () => {
    if (!isLoaded) {
      const res = await fetch(
        "https://6jhukudl14.execute-api.us-west-2.amazonaws.com/client"
      );
      const Hotels = res.ok
        ? await res.json()
        : setError("Error en el servicio");
      console.log(Hotels.clients);
      setClients(Hotels.clients);
    }
    setIsLoaded(true);
  };

  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };
  if (!isLoaded) {
    return (
      <div className="wpo-destination-area pt-120">
        <div className="container">
          <div className="destination-wrap">
            <div className="row">
              {Destinations.slice(0, 6).map((destination, ditem) => (
                <div className="col-lg-4 col-md-6 col-12" key={ditem}>
                  <div className="destination-item">
                    <div className="destination-img">
                      <img src={destination.dimg1} alt="" />
                    </div>
                    <div className="destination-content">
                      <span className="sub">{destination.subTitle}</span>
                      <h2>
                        <Link
                          onClick={ClickHandler}
                          to={`/destination-single/${destination.id}`}
                        >
                          {destination.title}
                        </Link>
                      </h2>
                      <div className="destination-bottom">
                        <p>${destination.price} Per Night</p>
                        <div className="destination-bottom-right">
                          <ul>
                            <li>
                              <i className="fa fa-star" aria-hidden="true"></i>
                            </li>
                            <li>
                              <i className="fa fa-star" aria-hidden="true"></i>
                            </li>
                            <li>
                              <i className="fa fa-star" aria-hidden="true"></i>
                            </li>
                            <li>
                              <i className="fa fa-star" aria-hidden="true"></i>
                            </li>
                            <li>
                              <span>
                                <i
                                  className="fa fa-star"
                                  aria-hidden="true"
                                ></i>
                              </span>
                            </li>
                          </ul>
                          <small>4.5</small>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="wpo-destination-area pt-120">
        <div className="container">
          <div className="destination-wrap">
            <div className="row">
              {clients.map((destination, ditem) => (
                <div className="col-lg-4 col-md-6 col-12" key={ditem}>
                  <div className="destination-item">
                    <div className="destination-img">
                      <img src={Imagen} alt="" />
                    </div>
                    <div className="destination-content">
                      <span className="sub">{destination.description}</span>
                      <h2>
                        <Link
                          onClick={ClickHandler}
                          to={`/destination-single/${destination.id}`}
                        >
                          {destination.name}
                        </Link>
                      </h2>
                      <div className="destination-bottom">
                        <p>$2000 Per Night</p>
                        <div className="destination-bottom-right">
                          <ul>
                            <li>
                              <i className="fa fa-star" aria-hidden="true"></i>
                            </li>
                            <li>
                              <i className="fa fa-star" aria-hidden="true"></i>
                            </li>
                            <li>
                              <i className="fa fa-star" aria-hidden="true"></i>
                            </li>
                            <li>
                              <i className="fa fa-star" aria-hidden="true"></i>
                            </li>
                            <li>
                              <span>
                                <i
                                  className="fa fa-star"
                                  aria-hidden="true"
                                ></i>
                              </span>
                            </li>
                          </ul>
                          <small>4.5</small>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default Destination2;
