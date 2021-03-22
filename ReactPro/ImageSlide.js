import SimpleImageSlider from "react-simple-image-slider";
import {Carousel} from "react-bootstrap";
import src from "../src/image/final.jpg";
import img from "../src/image/final1.jpg";


export default function ImageSlide() {
  return (
    <div>
      <Carousel>
  <Carousel.Item>
    <img
      className="d-block"
      style={{width:'100%',height:"100vh"}}
img src={src} class="card-img-top" alt="..."/>     
      
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block"
      style={{width:'100%',height:"100vh"}}
      img src={img} class="card-img-top" alt="..."/> 
      

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block"
      style={{width:'100%',height:"100vh"}}
      src="https://i.picsum.photos/id/866/200/300.jpg?hmac=rcadCENKh4rD6MAp6V_ma-AyWv641M4iiOpe1RyFHeI"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    </div>
  );
}