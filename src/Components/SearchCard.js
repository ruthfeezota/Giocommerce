import Card from 'react-bootstrap/Card';
import '../index.css';






function SearchCard() {
 const cardInfo = [
   {image: "https://i.ibb.co/3C2Shvs/home-Page-Cover-1.png", title: "South African Cotton Waste Manufacturing Co", text: "Poha. Light, filling and easy to make, poha is one famous breakfast that is eaten almost everywhere in the country. And the best part is- it can be made in a number of ways. Kanda poha, soya poha, Indori poha, Nagpur Tari Poha are a few examples"},
   {image: "https://i.ibb.co/3C2Shvs/home-Page-Cover-1.png", title: "Blommer Chocolate CIV", text: "Poha. Light, filling and easy to make, poha is one famous breakfast that is eaten almost everywhere in the country. And the best part is- it can be made in a number of ways. Kanda poha, soya poha, Indori poha, Nagpur Tari Poha are a few examples"},
   {image: "https://i.ibb.co/3C2Shvs/home-Page-Cover-1.png", title: "Kipkebe Tea Estate ", text: "Poha. Light, filling and easy to make, poha is one famous breakfast that is eaten almost everywhere in the country. And the best part is- it can be made in a number of ways. Kanda poha, soya poha, Indori poha, Nagpur Tari Poha are a few examples"},
   {image: "https://i.ibb.co/3C2Shvs/home-Page-Cover-1.png", title: "PRILLA", text: "Poha. Light, filling and easy to make, poha is one famous breakfast that is eaten almost everywhere in the country. And the best part is- it can be made in a number of ways. Kanda poha, soya poha, Indori poha, Nagpur Tari Poha are a few examples"}
 ];
 


 const renderCard = (card, index) => {
   return (
     <Card style={{ width: "18rem" }} key={index} className="box">
       <Card.Img variant="top" src={card.image} />
       <Card.Body>
         <Card.Title>{card.title}</Card.Title>
         <Card.Text>{card.text}</Card.Text>
       </Card.Body>
     </Card>
   );
 };


 return <div className="grid">{cardInfo.map(renderCard)}</div>;
};


export default SearchCard;
