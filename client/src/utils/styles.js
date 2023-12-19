import {
  asset17,
  asset18,
  asset19,
  asset20,
  asset21,
  asset22,
  asset23,
  asset24,
  asset25,
  item,
} from "../assets";

export const isActiveStyles =
  " text-2xl text-red-700 font-semibold hover:text-red-800 px-4 py-2 duration-100 transition-all ease-in-out  ";

export const isNotActivestyles =
  " text-xl text-textColor hover:text-red-700 duration-100 px-4 py-2 transition-all ease-in-out";

export const statuses = [
  {
    id: 1,
    title: "Top Offers",
    category: "topoffers",
    img: "https://firebasestorage.googleapis.com/v0/b/flipkart-clone-c4cd7.appspot.com/o/images%2Fasset%2016.png?alt=media&token=e8832cf7-dcf2-4650-9e81-eba01b756781",
  },
  {
    id: 2,
    title: "Mobile & Tablets",
    category: "mobile_tablets",
    img: "https://firebasestorage.googleapis.com/v0/b/flipkart-clone-c4cd7.appspot.com/o/images%2Fasset%2017.png?alt=media&token=ac7e4e40-f544-4dc4-8cef-87d7231962c7",
  },
  {
    id: 3,
    title: "Electronics",
    category: "electronics",
    img: "https://firebasestorage.googleapis.com/v0/b/flipkart-clone-c4cd7.appspot.com/o/images%2Fasset%2018.png?alt=media&token=44924793-253c-46e7-b652-290cf783a420",
  },
  {
    id: 4,
    title: "TV & Appliances",
    category: "tv_appliances",
    img: "https://firebasestorage.googleapis.com/v0/b/flipkart-clone-c4cd7.appspot.com/o/images%2Fasset%2019.png?alt=media&token=f14743e7-7080-4065-9092-e4fea7ed5e94",
  },
  {
    id: 5,
    title: "Fashion",
    category: "fashion",
    img: "https://firebasestorage.googleapis.com/v0/b/flipkart-clone-c4cd7.appspot.com/o/images%2Fasset%2020.jpeg?alt=media&token=ca432a44-311f-4527-a54c-dc7a17805b1e",
  },
  {
    id: 6,
    title: "Beauty",
    category: "beauty",
    img: "https://firebasestorage.googleapis.com/v0/b/flipkart-clone-c4cd7.appspot.com/o/images%2Fasset%2021.png?alt=media&token=6892cd52-6100-4799-87c5-f79bdc0f44c9",
  },
  {
    id: 7,
    title: "Home & Kitchen",
    category: "home_kitchen",
    img: "https://firebasestorage.googleapis.com/v0/b/flipkart-clone-c4cd7.appspot.com/o/images%2Fasset%2022.png?alt=media&token=786741d0-97c6-42e1-a219-f011a9f47c25 ",
  },
  {
    id: 8,
    title: "Furniture",
    category: "furniture",
    img: "https://firebasestorage.googleapis.com/v0/b/flipkart-clone-c4cd7.appspot.com/o/images%2Fasset%2023.png?alt=media&token=d121ebe0-a640-424d-b436-61908c2f815f ",
  },
  {
    id: 9,
    title: "Flights",
    category: "flights",
    img: " https://firebasestorage.googleapis.com/v0/b/flipkart-clone-c4cd7.appspot.com/o/images%2Fasset%2024.png?alt=media&token=85ad4668-6d04-4828-81ab-83fda894f800",
  },
  {
    id: 10,
    title: "Grocery",
    category: "grocery",
    img: "https://firebasestorage.googleapis.com/v0/b/flipkart-clone-c4cd7.appspot.com/o/images%2Fasset%2025.png?alt=media&token=ba7baecb-5fb5-4cc3-ba9d-6a872c11ed09",
  },
];

export const randomData = [
  {
    id: 1,
    imageURL:
      "https://firebasestorage.googleapis.com/v0/b/food-app-4cb65.appspot.com/o/images%2F1697122412584_f5.png?alt=media&token=55682822-9caf-49c5-a831-a379ecd0fe49 ",
    product_name: "strawberries",
    product_category: "fruits",
    product_price: "249",
  },
  {
    id: 2,
    imageURL:
      "https://firebasestorage.googleapis.com/v0/b/food-app-4cb65.appspot.com/o/images%2F1697177009213_d5.png?alt=media&token=60485306-1ccc-40dd-bc4d-86e4e5c8c1b3 ",
    product_name: "sprite",
    product_category: "drinks",
    product_price: "49",
  },
  {
    id: 3,
    imageURL:
      "https://firebasestorage.googleapis.com/v0/b/food-app-4cb65.appspot.com/o/images%2F1697123242088_fi3.png?alt=media&token=ae981839-204a-4ba0-b0b5-355ae9e9fda9",
    product_name: "fish fry",
    product_category: "chinese",
    product_price: "149",
  },
  {
    id: 4,
    imageURL:
      "https://firebasestorage.googleapis.com/v0/b/food-app-4cb65.appspot.com/o/images%2F1697121099595_cu4.png?alt=media&token=d127014f-ad23-4ef0-9a84-77132448f672",
    product_name: "chiken Curry",
    product_category: "curry",
    product_price: "249",
  },
  {
    id: 5,
    imageURL:
      "https://firebasestorage.googleapis.com/v0/b/food-app-4cb65.appspot.com/o/images%2F1697131748228_f4.png?alt=media&token=f041b9c4-9ba6-485b-90fc-c0c3045a54d0",
    product_name: "grave",
    product_category: "fruits",
    product_price: "150",
  },
  {
    id: 6,
    imageURL:
      "https://firebasestorage.googleapis.com/v0/b/food-app-4cb65.appspot.com/o/images%2F1697133614043_f10.png?alt=media&token=a1b3e75f-10f3-4c7f-9f28-534094dff351 ",
    product_name: "watermelon",
    product_category: "fruits",
    product_price: "50",
  },
];

export const hotelData = [
  {
    id: 1,
    imageURL:
      "https://firebasestorage.googleapis.com/v0/b/food-app-4cb65.appspot.com/o/images%2F1698090229408_mahadev.jpg?alt=media&token=7861977d-da95-42c6-8dc8-5e7ee090f26d ",
    hotel_name: "Mahadev",
    hotel_category: "opentop",
    hotel_price: "100000",
  },
  {
    id: 2,
    imageURL:
      "https://firebasestorage.googleapis.com/v0/b/food-app-4cb65.appspot.com/o/images%2F1698090427307_3b4.jpg?alt=media&token=f2547f92-145b-4945-8cd6-a6d895c82cf4",
    hotel_name: "TS",
    hotel_category: "3bedRoom",
    hotel_price: "5500",
  },
  {
    id: 3,
    imageURL:
      "https://firebasestorage.googleapis.com/v0/b/food-app-4cb65.appspot.com/o/images%2F1698090498074_2b1.jpg?alt=media&token=336ccb1b-08b9-4bba-8c34-55939fa5b2b1",
    hotel_name: "Royal",
    hotel_category: "2BedRoom",
    hotel_price: "4500",
  },
  {
    id: 4,
    imageURL:
      "https://firebasestorage.googleapis.com/v0/b/food-app-4cb65.appspot.com/o/images%2F1698091402388_ot3.jpg?alt=media&token=0c0ec9a1-9498-4557-b7dd-e51ff57d270a",
    hotel_name: "ATS",
    hotel_category: "opentop",
    hotel_price: "10000",
  },
  {
    id: 5,
    imageURL:
      "https://firebasestorage.googleapis.com/v0/b/food-app-4cb65.appspot.com/o/images%2F1698090818913_ss5.jpg?alt=media&token=dc6e57f5-a23a-4293-bdfe-87fe93e78156",
    hotel_name: "DEEPSEA",
    hotel_category: "seaside",
    hotel_price: "12000",
  },
  {
    id: 6,
    imageURL:
      "https://firebasestorage.googleapis.com/v0/b/food-app-4cb65.appspot.com/o/images%2F1698090892908_ss4.jpg?alt=media&token=acb53ead-a96b-4b36-8fc3-beea711d02cd ",
    hotel_name: "NTS",
    hotel_category: "seaside",
    hotel_price: "7500",
  },
];
