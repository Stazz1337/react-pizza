import './scss/app.scss';

import Header from './components/Header';

import Categories from './components/Categories';

import Sort from './components/Sort';

import PizzaBlock from './components/PizzaBlock';

import { useEffect, useState } from 'react';

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch('https://6536cb37bb226bb85dd2a117.mockapi.io/items')
      .then((res) => res.json())
      .then((data) => setItems(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className='wrapper'>
      <Header />
      <div className='content'>
        <div className='container'>
          <div className='content__top'>
            <Categories />

            <Sort />
          </div>
          <h2 className='content__title'>Все пиццы</h2>
          <div className='content__items'>
            {items.map((pizza) => (
              <PizzaBlock
                key={pizza.id}
                {...pizza}
                // title={pizza.title}
                // price={pizza.price}
                // imageUrl={pizza.imageUrl}
                // sizes={pizza.sizes}
                // types={pizza.types}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
