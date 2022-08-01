

const Header = ({setSearchValue,searchValue}) => {
  

  return (
    <>
      <div className="header">
        <div className="search__container">
          <input
            type="text"
            className="serch__input"
            value={searchValue}
            onChange={(e) => {
              setSearchValue(e.target.value);
            }}
          />
          <i className="bi bi-search"></i>
        </div>
      </div>
    </>
  );
};

export default Header;
