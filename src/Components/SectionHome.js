import React from "react";
import Card from 'react-bootstrap/Card'
import 'bootstrap/dist/css/bootstrap.min.css';

function ImgOverlay() {
    return (
        <Card className="bg-dark text-white">
            <Card.Img src="https://i.ibb.co/vdqZkRm/np-file-55124-1.png" alt="Second Section Card" />
        <Card.ImgOverlay>
        <h3>ENTER INTERFACE</h3>
        <h5>CHEMICALS</h5>
        <Card.Text>Last updated 3 mins ago</Card.Text>
      </Card.ImgOverlay>
      </Card>

    );
}

export default ImgOverlay;