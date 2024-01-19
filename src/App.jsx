import React from 'react';

const wishes = [
  { id: 0, text: 'viajar a la luna', completed: false },
  { id: 1, text: 'viajar a marte', completed: true },
];
export default function App() {
  return (
    <div>
      <h1>My WishList</h1>
      <fieldset>
        <legend>New Wish:</legend>
        <input placeholder="My new wish" type="text" name="" id="" />
      </fieldset>
      <ul>
        {wishes.map((wish) => (
          <li key={wish.id}>
            <input type="checkbox" checked={wish.completed} id={wish.id} />
            <label htmlFor={wish.id}>{wish.text}</label>
          </li>
        ))}
      </ul>
    </div>
  );
}
