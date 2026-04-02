export function Header({ filterText, onSearch, toggleTheme }) {
  return (
    <div>
      <header className="header">
        <h3 className="header h3">Smart Note</h3>

        <div className="filter-note">
          <input
            type="search"
            value={filterText}
            onChange={onSearch}
            placeholder="Search notes..."
          />
          
        </div>
        <button onClick={toggleTheme}>Toggle Theme</button>
      </header>
    </div>
  );
}

export default Header;
