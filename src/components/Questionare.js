const Query = (props)=>{
    //  const {question} = props;
  
  
  
  
  // ================= Display Section =================
    return(
    <div>
          
        <h1>Category {props.question}:</h1>
        <h2>Points :</h2>
        <h2>Answer :</h2>

    </div> 
    )
}






export default Query;


// import React from 'react';
// import CardBody from './CardBody';
// import CardImage from './CardImage';
// //create the component
// const Card = (props) => {
//   console.log('Card1 - props', props);
//   // {img: '', title: '', text: '', url: ''}
//   return (
//     <div className="card" style={{ width: '18rem' }}>
//       <CardImage img={props.img}/>
//       {/* title here is a prop */}
//       <CardBody
//          {...props}
//         // title={props.title}
//         // text={props.text}
//         // url={props.url}
//         />
//     </div>
//   );
// };

// //export the component
// export default Card;
