import "./Sidebar.css";
import { useProduct } from "../../context/product-context";

const ratingFilters = [
  {
    rating: "4 star & above",
    forAndId: "four",
  },
  {
    rating: "3 star & above",
    forAndId: "three",
  },
  {
    rating: "2 star & above",
    forAndId: "two",
  },
  {
    rating: "1 star & above",
    forAndId: "one",
  },
];

export const SideBar = () => {
  const { selfhelp, business, biography, sortBy, spirtual, productsDispatch } =
    useProduct();

  return (
    <aside className="sidebar">
      <p className="filter-text">filters</p>
      <button className="filter-btn">clear</button>
      <div className="sidebar-sortby">
        <div className="sortby-heading">sort by</div>
        <label className="sortby-label" htmlFor="high-to-low">
          <input
            type="radio"
            id="high-to-low"
            name="sortBy"
            checked={sortBy === "HIGH_TO_LOW"}
            onChange={() => productsDispatch({ type: "HIGH_TO_LOW" })}
          />
          Price : Hight to Low
        </label>
        <label className="sortby-label" htmlFor="low-to-high">
          <input
            type="radio"
            id="low-to-high"
            name="sortBy"
            checked={sortBy === "LOW_TO_HIGH"}
            onChange={() => productsDispatch({ type: "LOW_TO_HIGH" })}
          />
          Price : Low to High
        </label>
      </div>
      <div className="sidebar-rating">
        <div className="rating-heading">rating</div>

        {ratingFilters.map((ratings) => {
          const { rating, forAndId } = ratings;
          return (
            <label className="rating-label" htmlFor={forAndId}>
              <input type="radio" id={forAndId} name="rating" />
              {rating}
            </label>
          );
        })}
      </div>

      <div className="sidebar-category">
        <div className="category-heading">Category</div>
        <label className="category-label" htmlFor="business">
          <input
            type="checkbox"
            id="business"
            name="business"
            checked={business}
            onChange={() => productsDispatch({ type: "BUSINSESS" })}
          />
          business
        </label>
        <label className="category-label" htmlFor="selfhelp">
          <input
            type="checkbox"
            id="selfhelp"
            name="selfhelp"
            checked={selfhelp}
            onChange={() => productsDispatch({ type: "SELF_HELP" })}
          />
          self help
        </label>
        <label className="category-label" htmlFor="biography">
          <input
            type="checkbox"
            id="biography"
            name="biography"
            checked={biography}
            onChange={() => productsDispatch({ type: "BIOGRAPHY" })}
          />
          biography
        </label>
        <label className="category-label" htmlFor="spirtual">
          <input
            type="checkbox"
            id="spirtual"
            name="spirtual"
            checked={spirtual}
            onChange={() => productsDispatch({ type: "SPIRTUAL" })}
          />
          spirtual
        </label>
      </div>
    </aside>
  );
};
