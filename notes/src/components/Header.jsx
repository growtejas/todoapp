export function Header({ filterText, onSearch, toggleTheme, theme }) {
  return (
    <div>
      <header className="header">
        <div>
          <h3 className="header h3">Smart Note</h3>
          <div className="filter-note">
            <input
              type="search"
              value={filterText}
              onChange={onSearch}
              placeholder="Search notes..."
            />
          </div>
        </div>
        <button onClick={toggleTheme}>
          {theme === 'light' ? 'Dark' : 'Light'}
        </button>
      </header>
    </div>
  );
}

export default Header;
