import product_01_image_01 from "../images/product_01_image_01.jpg";
import product_01_image_02 from "../images/product_01_image_02.jpg";
import product_01_image_03 from "../images/product_01_image_03.jpg";
import product_02_image_01 from "../images/product_02_image_01.jpg";
import product_03_image_02 from "../images/product_03_image_02.jpg";
import product_03_image_01 from "../images/product_03_image_01.jpg";
import product_06_image_01 from "../images/product_06_image_01.jpg";
import product_06_image_02 from "../images/product_06_image_02.jpg";
import product_06_image_03 from "../images/product_06_image_03.jpg";
import product_07_image_01 from "../images/product_07_image_01.jpg";
import product_08_image_01 from "../images/product_08_image_01.jpg";
import product_09_image_01 from "../images/product_09_image_01.jpg";
import product_10_image_01 from "../images/product_10_image_01.jpg";



const products = [
    {
        id: "01",
        title: "Bon Appetit Cat Adult Gourmand",
        price: 24.0,
        image01: product_01_image_01,
        image02: product_01_image_02,
        image03: product_01_image_03,
        category: "Корм",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque. ",
    },

    {
        id: "02",
        title: "Canvit Chondro Maxi",
        price: 115.0,
        image01: product_02_image_01,
        category: "Витамины",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
    },

    {
        id: "03",
        title: "VetExpert RenalVet",
        price: 110.0,
        image01: product_03_image_01,
        image02: product_03_image_02,
        category: "Витамины",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
    },

    {
        id: "04",
        title: "8in1 Calcium",
        price: 110.0,
        image01: product_04_image_01,
        category: "Витамины",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
    },

    {
        id: "05",
        title: "Royal Canin Neutered Adult Medium Dog",
        price: 24.0,
        image01: product_05_image_01,
        image02: product_05_image_02,
        image03: product_05_image_03,
        category: "Корм",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
    },
    {
        id: "06",
        title: "Royal Cheese Burger",
        price: 24.0,
        image01: product_01_image_01,
        image02: product_01_image_02,
        image03: product_01_image_03,
        category: "Корм",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
    },

    {
        id: "07",
        title: "Seafood Pizza",
        price: 115.0,
        image01: product_02_image_02,
        image02: product_02_image_01,
        image03: product_02_image_03,
        category: "Витамины",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
    },

    {
        id: "08",
        title: "Canvit Аміносол",
        price: 110.0,
        image01: product_06_image_01,
        image02: product_06_image_02,
        image03: product_06_image_03,
        category: "Витамины",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
    },

    {
        id: "10",
        title: "CooKing Puppy",
        price: 24.0,
        image01: product_07_image_01,
        category: "Корм",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
    },

    {
        id: "11",
        title: "VetExpert Beauty & Care Shampoo ",
        price: 35.0,
        image01: product_08_image_01,
        image02: product_08_image_01,
        image03: product_08_image_01,
        category: "Шампунь",

        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
    },

    {
        id: "12",
        title: "Trixie Shampoo ",
        price: 35.0,
        image01: product_09_image_01,
        image02: product_09_image_01,
        image03: product_09_image_01,
        category: "Шампунь",

        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
    },

    {
        id: "13",
        title: "Trixie Oil ",
        price: 35.0,
        image01: product_10_image_01,
        image02: product_10_image_01,
        image03: product_10_image_01,
        category: "Шампунь",

        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
    },
];

export default products;