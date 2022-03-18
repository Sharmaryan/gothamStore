import "./Sidebar.css";
export const SideBar = () => {
  return (
    <aside className="sidebar">
      <p className="filter-text">filters</p>
      <button className="filter-btn">clear</button>
      <div className="sidebar-sortby">
        <div className="sortby-heading">sort by</div>
        <label className="sortby-label" htmlFor="high-to-low">
          <input type="radio" id="high-to-low" name="sortBy" />
          Price : Hight to Low
        </label>
        <label className="sortby-label" htmlFor="low-to-high">
          <input type="radio" id="low-to-high" name="sortBy" />
          Price : Low to High
        </label>
      </div>
      <div className="sidebar-rating">
        <div className="rating-heading">rating</div>
        <label className="rating-label" htmlFor="four">
          <input type="radio" id="four" name="rating" />4 star & above
        </label>
        <label className="rating-label" htmlFor="three">
          <input type="radio" id="three" name="rating" />3 star & above
        </label>
        <label className="rating-label" htmlFor="two">
          <input type="radio" id="two" name="rating" />2 star & above
        </label>
        <label className="rating-label" htmlFor="one">
          <input type="radio" id="one" name="rating" />1 star & above
        </label>
      </div>

      <div className="sidebar-category">
        <div className="category-heading">Category</div>
        <label className="category-label" htmlFor="business">
          <input type="checkbox" id="business" name="business" />
          business
        </label>
        <label className="category-label" htmlFor="selfhelp">
          <input type="checkbox" id="selfhelp" name="selfhelp" />
          self help
        </label>
        <label className="category-label" htmlFor="biography">
          <input type="checkbox" id="biography" name="biography" />
          biography
        </label>
        <label className="category-label" htmlFor="spirtual">
          <input type="checkbox" id="spirtual" name="spirtual" />
          spirtual
        </label>
      </div>
    </aside>
  );
};
