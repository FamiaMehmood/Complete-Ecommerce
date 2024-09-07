
// import React, { useState } from 'react';

// // Sample cart items. In a real application, these would come from a global state or API.
// const initialCartItems = [
//   { id: 1, name: 'Product 1', price: 10.00, quantity: 1 },
//   { id: 2, name: 'Product 2', price: 20.00, quantity: 2 },
//   // Add more items as needed
// ];

// const Cart = () => {
//   const [cartItems, setCartItems] = useState(initialCartItems);

//   const handleQuantityChange = (id, newQuantity) => {
//     if (newQuantity < 1) return; // Prevent quantity from going below 1

//     setCartItems((prevItems) =>
//       prevItems.map((item) =>
//         item.id === id ? { ...item, quantity: newQuantity } : item
//       )
//     );
//   };

//   const handleRemoveItem = (id) => {
//     setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
//   };

//   const calculateTotal = () => {
//     return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
//   };

//   return (
//     <div className="cart-container">
//       <h1>Your Cart</h1>
//       {cartItems.length === 0 ? (
//         <p>Your cart is empty.</p>
//       ) : (
//         <ul>
//           {cartItems.map((item) => (
//             <li key={item.id} className="cart-item">
//               <span>{item.name}</span>
//               <span>${item.price.toFixed(2)}</span>
//               <input
//                 type="number"
//                 value={item.quantity}
//                 onChange={(e) => handleQuantityChange(item.id, Number(e.target.value))}
//                 min="1"
//               />
//               <button onClick={() => handleRemoveItem(item.id)}>Remove</button>
//             </li>
//           ))}
//         </ul>
//       )}
//       {cartItems.length > 0 && (
//         <div className="cart-total">
//           <h2>Total: ${calculateTotal().toFixed(2)}</h2>
//           <button>Proceed to Checkout</button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Cart;
import React, { useState } from 'react';
import './Cart.css'; // Make sure this path is correct

const initialCartItems = [
  { id: 1, name: 'Product 1', price: 10.00, quantity: 1 },
  { id: 2, name: 'Product 2', price: 20.00, quantity: 2 },
  // Add more items as needed
];

const Cart = () => {
  const [cartItems, setCartItems] = useState(initialCartItems);

  const handleQuantityChange = (id, newQuantity) => {
    if (newQuantity < 1) return; // Prevent quantity from going below 1

    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const handleRemoveItem = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div className="cart-container">
      <h1>Your Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <li key={item.id} className="cart-item">
              <span>{item.name}</span>
              <span>${item.price.toFixed(2)}</span>
              <input
                type="number"
                value={item.quantity}
                onChange={(e) => handleQuantityChange(item.id, Number(e.target.value))}
                min="1"
              />
              <button onClick={() => handleRemoveItem(item.id)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
      {cartItems.length > 0 && (
        <div className="cart-total">
          <h2>Total: ${calculateTotal().toFixed(2)}</h2>
          <button>Proceed to Checkout</button>
        </div>
      )}
    </div>
  );
};

export default Cart;





