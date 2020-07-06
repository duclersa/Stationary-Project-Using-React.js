import React from "react";

class Product extends React.Component {

    render(){
  return (
    <div class="products">
      
     <div class="img"> <img src={this.props.imgUrl} alt="image"  /> </div> 
     <div class="name"> {this.props.name}</div>
     <div class="desc"> {this.props.description}</div>
     <div class="price"> $ {this.props.price}</div>
      <br/>
      <br/> 
      <br/>
    </div>
  );
}
}
export default Product;
