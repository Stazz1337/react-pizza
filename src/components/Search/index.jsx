import styles from './Search.module.scss';

const Search = ({ setSearchValue, searchValue }) => {
  return (
    <div className={styles.root}>
      <input
        className={styles.input}
        type='text'
        placeholder='Поиск пиццы...'
        onChange={(e) => setSearchValue(e.target.value)}
        value={searchValue}
      />
      {searchValue && (
        <svg
          className={styles.close}
          onClick={() => setSearchValue('')}
          width='20px'
          height='20px'
          viewBox='0 0 24 24'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'>
          <path
            d='M5 5L19 19M5 19L19 5'
            stroke='#000000'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </svg>
      )}
    </div>
  );
};

export default Search;
