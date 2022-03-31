import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    name: "My Life in Full",
    image:
      "https://images-eu.ssl-images-amazon.com/images/I/41Vyss0-f1L._SY264_BO1,204,203,200_QL40_FMwebp_.jpg",
    price: 450,
    star: 3.5,
    category: "biography",
    discount : 100
  },
  {
    _id: uuid(),
    name: "Steve Jobs",
    image:
      "https://images-eu.ssl-images-amazon.com/images/I/41ZlN7iry-L._SY264_BO1,204,203,200_QL40_FMwebp_.jpg",
    price: 403,
    star: 4.9,
    category: "biography",
    discount : 99
  },
  {
    _id: uuid(),
    name: "The Personal MBA",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/411AhoeewjL._SX324_BO1,204,203,200_.jpg",
    price: 469,
    star: 2.5,
    category: "business",
    discount : 200
  },
  {
    _id: uuid(),
    name: "Before You Start Up",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/51cnUtjC5lS._SX460_BO1,204,203,200_.jpg",
    price: 173,
    star: 1.5,
    category: "business",
    discount : 50
  },
  {
    _id: uuid(),
    name: "A Complete Biography Of Abraham Lincoln Lord Charnwood",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/41k8MUF7ViL._SX307_BO1,204,203,200_.jpg",
    price: 165,
    star: 3.5,
    category: "biography",
    discount : 80
  },
  {
    _id: uuid(),
    name: "The Subtle Art of Not Giving a F*ck",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/516pmXNNmCL._SX324_BO1,204,203,200_.jpg",
    price: 243,
    star: 4.5,
    category: "self-help",
    discount : 100
  },
  {
    _id: uuid(),
    name: "Ikigai",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/51T8OXMiB5L._SX356_BO1,204,203,200_.jpg",
    price: 356,
    star: 2.5,
    category: "self-help",
    discount : 120
  },
  {
    _id: uuid(),
    name: "Funding Your Startup",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/51dX3GkN-UL._SX310_BO1,204,203,200_.jpg",
    price: 252,
    star: 4.5,
    category: "business",
    discount : 130
  },
  {
    _id: uuid(),
    name: "Zero To One",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/51z7mZZKRgL._SX317_BO1,204,203,200_.jpg",
    price: 369,
    star: 4.5,
    category: "business",
    discount : 200
  },
  {
    _id: uuid(),
    name: "The Lean Startup",
    image:
      "https://images-eu.ssl-images-amazon.com/images/I/51aEhyjQGrL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg",
    price: 252,
    star: 4.5,
    category: "business",
    discount : 60
  },
  {
    _id: uuid(),
    name: "Who Will Cry When You Die?",
    image:
      "https://images-eu.ssl-images-amazon.com/images/I/41wKll7ITyL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg",
    price: 148,
    star: 4.5,
    category: "self-help",
    discount : 90
  },
  {
    _id: uuid(),
    name: "As a Man Thinketh",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/51tiopcLhuS._SX460_BO1,204,203,200_.jpg",
    price: 243,
    star: 4.5,
    category: "self-help",
    discount : 80
  },
  {
    _id: uuid(),
    name: "The Power of Your Subconscious Mind",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/41+CqNWoutS._SX460_BO1,204,203,200_.jpg",
    price: 95,
    star: 4.5,
    category: "self-help",
    discount : 50
  },
  {
    _id: uuid(),
    name: "Attitude Is Everything",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/41F8ATXoMOL._SX317_BO1,204,203,200_.jpg",
    price: 165,
    star: 4.5,
    category: "self-help",
    discount : 30
  },
  {
    _id: uuid(),
    name: "Autobiography of a Yogi",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/41sEB1SxefL._SX307_BO1,204,203,200_.jpg",
    price: 98,
    star: 4.5,
    category: "spirtual",
    discount : 20
  },
  {
    _id: uuid(),
    name: "The Shiva Sutras",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/415r6DgsIZL._SX258_BO1,204,203,200_.jpg",
    price: 139,
    star: 4.5,
    category: "spirtual",
    discount : 39
  },
  {
    _id: uuid(),
    name: "Kundalini: An untold story",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/51uJ+LtvUvL._SX322_BO1,204,203,200_.jpg",
    price: 254,
    star: 4.5,
    category: "spirtual",
    discount : 100
  },
  {
    _id: uuid(),
    name: "Bhagavad Gita as It is",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/518aPMbn8uL._SX292_BO1,204,203,200_.jpg",
    price: 285,
    star: 4.5,
    category: "spirtual",
    discount : 100
  },
];
