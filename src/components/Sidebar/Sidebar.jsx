import "./Sidebar.css";
export const SideBar = () => {
  return (
    <aside class="sidebar">
      <p class="filter-text">filters</p>
      <button class="filter-btn">clear</button>
      <div class="sidebar-sortby">
        <div class="sortby-heading">sort by</div>
        <label className="sortby-label" htmlFor="high-to-low">
          <input type="radio" id="high-to-low" name="sortBy" />
          Price : Hight to Low
        </label>
        <label className="sortby-label" htmlFor="low-to-high">
          <input type="radio" id="low-to-high" name="sortBy" />
          Price : Low to High
        </label>
      </div>
      <div class="sidebar-rating">
        <div class="rating-heading">rating</div>
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

      <div class="sidebar-category">
        <div class="category-heading">Category</div>
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
