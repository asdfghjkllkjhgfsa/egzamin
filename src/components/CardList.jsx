import  './cardList.css'
import data from "../../public/data.js";
import Card from './Card.jsx';
function CardList() {
  return (
    <div className='ota'>
      {data.map((e,i)=>{
        return  <Card key={i} odam={e}/>
      })}
    </div>
  )
}

export default CardList
