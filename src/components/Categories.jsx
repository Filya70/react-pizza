import React, { useState } from 'react';

const Categories = React.memo(function Categories({ items, onClick }) {
  const [activeItem, setActiveItem] = useState(null);

  const onSelectItem = (index) => {
    setActiveItem(index);
    onClick(index);
  };

  return (
    <div className="categories">
      <ul>
        <li className={activeItem === null ? 'active' : ''} onClick={() => onSelectItem(null)}>
          Все
        </li>
        {items &&
          items.map((name, index) => (
            <li
              key={`${name}_${index}`}
              onClick={() => onSelectItem(index)}
              className={activeItem === index ? 'active' : ''}>
              {name}
            </li>
          ))}
      </ul>
    </div>
  );
});

export default Categories;
