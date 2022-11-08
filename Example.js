import React from "react";
import "./styles.css";
//import card1
import Card from "./Card";
// import Card2 from './Card2'
// import cardData
import cardsData from "./cardData";
// cardsData = [{}, {img: '', title: '', text: '', url: ''}]
console.log("this is cardsData", cardsData);

export default function App(props) {
  // LOOP OVER THE ARRAY OF DATA AND CREATE A CARD FOR EACH OBJECT
  // ARRAY METHODS: .forEach, .filter, .reduce
  // .map( (element, indexPos))
  const cards = cardsData.map((ele, index) => {
    return (
      <Card
        // img={ele.img}
        // title={ele.title}
        // text={ele.text}
        // url={ele.url}
        {...ele}
        key={index}
      />
    );
  });

  console.log("this is cards", cards);

  return (
    <div className="App">
      <h1>Bootstrap Cards To Component Example</h1>
      <section className="cards">
        {cards}
        {/* <Card1 />
      <Card2 /> */}
      </section>
    </div>
  );
}
