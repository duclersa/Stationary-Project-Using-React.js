import React from 'react';
import StationaryProduct from './Component/StationaryProduct';
import Product from './Product';

class App extends React.Component {

  render() {
    const productComponent = StationaryProduct.map(product => (
      <Product
        key={product.id}
        imgUrl={product.imgUrl}
        name={product.name}
        price={product.price}
        description={product.description}
      />
    ));
    return ( 
    <div className="App">
    <h1>These are our current products</h1>
    {productComponent}
    </div>
    );
  }
  
  }


export default App;
