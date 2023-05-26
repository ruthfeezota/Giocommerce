import Card from 'react-bootstrap/Card';
import '../index.css';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { CardGroup } from 'react-bootstrap';






function SearchCard() {
 const cardInfo = [
   {image: "https://i.ibb.co/vxhr3ff/main-qimg-ffb5bffb812a4f3c096465b760dfc29e-pjlq.jpg", title: "South African Cotton Waste Manufacturing Co", text: "Poha. Light, filling and easy to make, poha is one famous breakfast that is eaten almost everywhere in the country. And the best part is- it can be made in a number of ways.", part: "South Africa"},
   {image: "https://i.ibb.co/fqwHQ35/istockphoto-533961779-612x612.jpg", title: "Blommer Chocolate CIV", text: "Poha. Light, filling and easy to make, poha is one famous breakfast that is eaten almost everywhere in the country. And the best part is- it can be made in a number of ways.", part: "North Africa"},
   {image: "https://i.ibb.co/1LTrLkb/temp-Image-MRQvwo.jpg", title: "Kipkebe Tea Estate ", text: "Poha. Light, filling and easy to make, poha is one famous breakfast that is eaten almost everywhere in the country. And the best part is- it can be made in a number of ways.", part: "West Africa"},
   {image: "https://i.ibb.co/7kxxmQt/i-Stock-1153775690.jpg", title: "PRILLA", text: "Poha. Light, filling and easy to make, poha is one famous breakfast that is eaten almost everywhere in the country. And the best part is- it can be made in a number of ways.", part: "East Africa"}
 ];
 

 const renderCard = (card, index) => {
   return (
     <Card key={index} className="box">
       <Card.Img variant="top" src={card.image} />
       <Card.Body>
         <Card.Title>{card.title}</Card.Title>
         <Card.Text>{card.text}</Card.Text>
         <a href="#" className="btn btn-warning">Learn More</a>
       </Card.Body>
     </Card>

   );
 };

 return <div className="grid">{cardInfo.map(renderCard)}</div>;
};







export default SearchCard;
