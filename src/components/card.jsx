import './card.css'


function Card(props) {
    console.log(props);
    
  return (
     <div className="ota container">
        <div className='card'>
      <div className="card-img">
        <img src={props.odam.img} alt="logo" />
        <button className='btn'><h3>Add To Cart</h3></button>
      </div>
      <div className="card-text">
        <h3>{props.odam.name}</h3> <br />
      <h2>{props.odam.price} $</h2>
      </div>
    </div>
     </div>
  )
}

export default Card
