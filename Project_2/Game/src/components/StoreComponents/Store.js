import Header from './Header';
import Main from './Main';
import Basket from './Basket';
import data from './Data';
import {} from './StoreStyles';
import { useState } from 'react';
function Store() {
  const { products } = data;
  const [cartItems, setCartItems] = useState([]);
  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };
  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };
  return (
    <div className="App">
      <Header countCartItems={cartItems.length}></Header>
      <div className="row">
        <Main products={products} onAdd={onAdd}></Main>
        <Basket
          cartItems={cartItems}
          onAdd={onAdd}
          onRemove={onRemove}
        ></Basket>
      </div>
    </div>
  );

  /* <BoxTwo>
            <RowTwo>
            <ColumnTwo>
            <br></br>
            <h3>New Features</h3><img
      src='./img/door.png'
      className='img-thumbnail img-fluid shadow-2-strong'
      alt='...'
      style={{ maxWidth: '24rem'}}
    />
           <p>Looking for the perfect gift? Something Special by ZoA, we offer a wide selection of beautiful clothes, stickers, collectables, and much more. You never know what darling items you’ll discover tucked away when you visit our shop. We’ll help you find the ideal gift!</p> 
<p>Something Special for Everyone!</p>

<p>Stepping into our online store is like being pampered. From our Zombie Food section, you’ll enjoy savory seasoned nuts and healthy Juices. Quaint knickknacks and holiday Items can be found in our seasonal section. We have something special for everyone.</p> 
<p className="text-end">Just click the link below to visit our Store</p>
            <div className="text-end"><Link to="/Store" type="submit" >Store</Link></div>
            </ColumnTwo>
        </RowTwo>
        </BoxTwo>
      </Container> */
}

export default Store;
