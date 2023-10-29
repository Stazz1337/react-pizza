import { useState, useEffect, useContext } from 'react';

import Categories from '../components/Categories';
import Sort from '../components/Sort';
import PizzaBlock from '../components/PizzaBlock';
import Skeleton from '../components/PizzaBlock/Skeleton';
import Pagination from '../components/Pagination';

import { SearchContext } from '../App';

import { useSelector, useDispatch } from 'react-redux';
import { setCategoryId } from '../redux/slicers/filterSlice';

const Home = () => {
  const categoryId = useSelector((state) => state.filter.categoryId);
  const sortType = useSelector((state) => state.filter.sort);

  const dispatch = useDispatch();

  const { searchValue } = useContext(SearchContext);

  const [items, setItems] = useState([]);

  const [isLoading, setIsLoading] = useState(true);
  // const [categoryId, setCategoryId] = useState(0);
  // const [sortType, setSortType] = useState({ name: 'популярности', sort: 'rating' });

  const [sortOrder, setSortOrder] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);

  const onChangeCategory = (id) => {
    dispatch(setCategoryId(id));
  };

  useEffect(() => {
    setIsLoading(true);

    const sortBy = sortType.value;
    const order = sortOrder ? 'desc' : 'asc';
    const category = categoryId > 0 ? `category=${categoryId}` : '';
    const search = searchValue ? `search=${searchValue}` : '';

    fetch(
      `https://6536cb37bb226bb85dd2a117.mockapi.io/items?page=${currentPage}&limit=8&${category}&sortBy=${sortBy}&order=${order}&${search}`,
    )
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((data) => {
        setItems(data);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
    window.scrollTo(0, 0);
  }, [categoryId, sortType, sortOrder, searchValue, currentPage]);

  return (
    <div className='container'>
      <div className='content__top'>
        <Categories categoryId={categoryId} setCategoryId={onChangeCategory} />
        <Sort sortOrder={sortOrder} setSortOrder={setSortOrder} />
      </div>
      <h2 className='content__title'>Все пиццы</h2>
      <div className='content__items'>
        {isLoading
          ? [...new Array(items.length)].map((el, index) => <Skeleton key={index} />)
          : items
              // .filter((pizza) => pizza.title.toLowerCase().includes(searchValue.toLowerCase()))
              .map((pizza) => <PizzaBlock key={pizza.id} {...pizza} />)}
      </div>

      {/* пагинация работает не совсем корректно, с api не получить общее количество items */}
      <Pagination setCurrentPage={setCurrentPage} />
    </div>
  );
};

export default Home;
