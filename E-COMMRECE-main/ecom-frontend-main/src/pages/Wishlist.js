// import React, { useState } from 'react';

// function Wishlist() {
//   // Initialize an empty array to store wishlist items
//   const [wishlist, setWishlist] = useState([]);
//   const [newItem, setNewItem] = useState('');

//   // Function to add a new item to the wishlist
//   const addItem = () => {
//     setWishlist([...wishlist, newItem]);
//     setNewItem('');
//   };

//   // Function to remove an item from the wishlist
//   const removeItem = (index) => {
//     setWishlist(wishlist.filter((item, i) => i !== index));
//   };

//   return (
//     <div>
//       <h1>Wishlist</h1>
//       <input
//         type="text"
//         value={newItem}
//         onChange={(e) => setNewItem(e.target.value)}
//         placeholder="Add new item"
//       />
//       <button onClick={addItem}>Add</button>
//       <ul>
//         {wishlist.map((item, index) => (
//           <li key={index}>
//             {item}
//             <button onClick={() => removeItem(index)}>Remove</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default Wishlist;
import React, { useState } from 'react';
import './Wishlist.css';

function Wishlist() {
  // Initialize an empty array to store wishlist items
  const [wishlist, setWishlist] = useState([]);
  const [newItem, setNewItem] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  // Function to add a new item to the wishlist
  const addItem = () => {
    setWishlist([...wishlist, newItem]);
    setNewItem('');
  };

  // Function to remove an item from the wishlist
  const removeItem = (index) => {
    setWishlist(wishlist.filter((item, i) => i !== index));
  };

  // Function to search for items in the wishlist
  const searchItems = (e) => {
    setSearchTerm(e.target.value);
  };

  // Filtered wishlist items based on search term
  const filteredWishlist = wishlist.filter((item) =>
    item.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="wishlist-container">
      <h1>Wishlist</h1>
      <input
        type="text"
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
        placeholder="Add new item"
        className="new-item-input"
      />
      <button onClick={addItem} className="add-button">
        Add
      </button>
      <input
        type="search"
        value={searchTerm}
        onChange={searchItems}
        placeholder="Search wishlist"
        className="search-input"
      />
      <ul className="wishlist-list">
        {filteredWishlist.map((item, index) => (
          <li key={index} className="wishlist-item">
            {item}
            <button onClick={() => removeItem(index)} className="remove-button">
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Wishlist;