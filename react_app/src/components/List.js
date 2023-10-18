import React from 'react';

function List() {
  //
  const items = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'];

  const liItem = items.map((item, index) => {
    return <div key={index}>{item}</div>;
  });

  return (
    <div>
      <h1>List</h1>
      {liItem}
    </div>
  );
}

export default List;
