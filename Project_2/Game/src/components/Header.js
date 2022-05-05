import React from 'react';

export default function Header(props) {
  return (
    <header className="block row center">
      <div>
        <a>
          <h1>Zombie Store</h1>
        </a>
      </div>
      <div>
        <a>
          Cart{' '}
          {props.countCartItems ? (
            <button className="badge">{props.countCartItems}</button>
          ) : (
            ''
          )}
        </a>{' '}
       
      </div>
    </header>
  );
}
