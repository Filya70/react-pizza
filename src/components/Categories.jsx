import React from 'react';

const Categories = React.memo(function Categories({ activeCategory, items, onClick }) {
  return (
    <div className="categories">
      <ul>
        <li className={activeCategory === null ? 'active' : ''} onClick={() => onClick(null)}>
          Все
        </li>
        {items &&
          items.map((name, index) => (
            <li
              className={activeCategory === index ? 'active' : ''}
              onClick={() => onClick(index)}
              key={`${name}_${index}`}>
              {name}
            </li>
          ))}
      </ul>
    </div>
  );
});

export default Categories;
