import { v4 as uuid } from "uuid";

const ratingFilters = [
  {
    id: uuid(),
    rate: "4 star & above",
    forAndId: "four",
    ratingType: "ABOVE_FOUR",
  },
  {
    id: uuid(),
    rate: "3 star & above",
    forAndId: "three",
    ratingType: "ABOVE_THREE",
  },
  {
    id: uuid(),
    rate: "2 star & above",
    forAndId: "two",
    ratingType: "ABOVE_TWO",
  },
  {
    id: uuid(),
    rate: "1 star & above",
    forAndId: "one",
    ratingType: "ABOVE_ONE",
  },
];

export { ratingFilters };
