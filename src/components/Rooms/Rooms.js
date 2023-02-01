import {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import SectionTitleS2 from '../SectionTitleS2'
import { connect } from "react-redux";
import api from "../../api";
import imagen from "../../images/room/1.jpg"

const Rooms = () => {
  const [ isLoaded, setIsLoaded ] = useState(false)
  const [ habitacion, setHabitacion ]= useState([])
  const [ tipoHab, setTipoHab ]= useState([])// eslint-disable-next-line
  const [ error, setError ]  = useState(null) // eslint-disable-next-line
  const [ rooms , setRooms ] = useState([])

  
  useEffect(() => {
    
    fetchHabitaciones();

    
  }, [isLoaded]);

  const fetchHabitaciones = async () => {
    if (!isLoaded) {
      
        const res = await fetch("https://6jhukudl14.execute-api.us-west-2.amazonaws.com/room")
        const rooms = res.ok ? await res.json() : null
        //console.log(rooms);
        setHabitacion(rooms.rooms)

        const res2 = await fetch("https://6jhukudl14.execute-api.us-west-2.amazonaws.com/room-type")
        const roomtype = res2.ok ? await res2.json() : null
        //console.log(roomtype);
        setTipoHab(roomtype.roomTypes);
      }
      setIsLoaded(true)
      let habitaciones = []

      for (const comodity of tipoHab){
        habitacion.map(room =>{
          if (room.roomTypeId === comodity.id) {
            room.comodity = comodity;
            habitaciones.push(room);
            //console.log(habitaciones);
          }
          return setRooms(habitaciones);
        });
      };
    }   
    
    
  //console.log(habitacion, tipoHab);
  
  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };


  const productsArray = api();

  const products = productsArray

 //console.log(rooms);
 
if(!isLoaded){
  return (
    <div className="wpo-room-area section-padding">
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-xl-6 col-md-8">
            <SectionTitleS2 MainTitle={'Our Most Populer Room'} />
          </div>
        </div>
        <div className="room-wrap">
          <div className="row">
            {products.length > 0 &&
              products.slice(0, 3).map((product, pitem) => (
                <div className="col-lg-4 col-md-6 col-12" key={pitem}>
                  <div className="room-item">
                    <div className="room-img">
                      <img src={product.proImg} alt="" />
                    </div>
                    <div className="room-content">
                      <h2><Link onClick={ClickHandler} to={`/room-single/${product.id}`}>{product.title}</Link></h2>
                      <ul>
                        <li><i className="fi flaticon-expand-arrows"></i>{product.sqm} sqm</li>
                        <li><i className="fi flaticon-bed"></i>{product.bedroom} Bed</li>
                        <li><i className="fi flaticon-bathtub"></i>{product.bathroom} Bathroom</li>
                      </ul>
                      <h3>${product.price} <span>/ Night</span></h3>
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
    <div className="wpo-room-area section-padding">
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-xl-6 col-md-8">
            <SectionTitleS2 MainTitle={'Our Most Populer Room'} />
          </div>
        </div>
        <div className="room-wrap">
          <div className="row">
            {rooms.map((room, pitem) =>(
                <div className="col-lg-4 col-md-6 col-12" key={pitem} >
                  <div className="room-item">
                    <div className="room-img">
                      <img src={imagen} alt="" />
                    </div>
                    <div className="room-content">
                      <h2><Link onClick={ClickHandler} to={`/room-single/${room.id}`}>{room.name}</Link></h2>
                      <ul>
                        <li><i className="fi flaticon-expand-arrows"></i>{room.comodity.capacity} sqm</li>
                        <li><i className="fi flaticon-bed"></i>{room.comodity.beds.length} Bed</li>
                        <li><i className="fi flaticon-bathtub"></i>{room.comodity.rooms} Bathroom</li>
                      </ul>
                      <h3>${room.price} <span>/ Night</span></h3>
                    </div>
                  </div>
                </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
}


export default connect(null)(Rooms);
