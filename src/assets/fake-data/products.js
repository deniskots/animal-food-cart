
const products = [
    {
        id: "01",
        title: "Bon Appetit Cat Adult",
        price: 24.0,
        image01: `https://content.e-zoo.com.ua/files/Prods/prod_15992_75129332.jpg`,
        category: "Корм",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque. ",
    },

    {
        id: "02",
        title: "Canvit Chondro Maxi",
        price: 115.0,
        image01: `https://content.e-zoo.com.ua/files/Prods/prod_69547_25543088.jpeg`,
        image02: `https://content.e-zoo.com.ua/files/Prods/prod_7524_80610269.jpg`,
        category: "Корм",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
    },

    {
        id: "03",
        title: "VetExpert RenalVet",
        price: 110.0,
        image01: `https://content.e-zoo.com.ua/files/Prods/prod_17751_41647006.jpg`,
        category: "Витамины",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
    },

    {
        id: "04",
        title: "8in1 Calcium",
        price: 110.0,
        image01: `https://content.e-zoo.com.ua/files/Prods/prod_17749_18859109.jpg`,
        category: "Витамины",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
    },

    {
        id: "05",
        title: "Royal Canin Neutered ",
        price: 24.0,
        image01: `https://content.e-zoo.com.ua/files/Prods/prod_95_60726587.jpg`,
        image02: `https://content.e-zoo.com.ua/files/Prods/prod_95_56440013.jpg`,
        image03: `https://content.e-zoo.com.ua/files/Prods/prod_95_56442363.jpg`,
        category: "Корм",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
    },
    {
        id: "06",
        title: "Royal Cheese Burger",
        price: 24.0,
        image01: `https://content.e-zoo.com.ua/files/Prods/prod_124_61976117.jpg`,
        image02: `https://content.e-zoo.com.ua/files/Prods/prod_124_47982207.jpg`,
        category: "Корм",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
    },

    {
        id: "07",
        title: "Seafood Vitamins",
        price: 115.0,
        image01: `https://content.e-zoo.com.ua/files/Prods/prod_4631_14063766.jpg`,
        image02: `https://content.e-zoo.com.ua/files/Prods/prod_4631_99258548.jpg`,
        category: "Витамины",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
    },

    {
        id: "08",
        title: "Canvit AAa",
        price: 110.0,
        image01: `https://content.e-zoo.com.ua/files/Prods/prod_15634_84492546.jpg`,
        image02: `https://content.e-zoo.com.ua/files/Prods/prod_15634_46311509.jpg`,
        category: "Витамины",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
    },

    {
        id: "10",
        title: "CooKing Puppy",
        price: 24.0,
        image01: `https://content.e-zoo.com.ua/files/Prods/prod_15704_69540483.jpg`,
        category: "Корм",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
    },

    {
        id: "11",
        title: "VetExpert Beauty  ",
        price: 35.0,
        image01: `https://content.e-zoo.com.ua/files/Prods/prod_16817_4322444.jpg`,
        category: "Шампунь",

        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
    },

    {
        id: "12",
        title: "Trixie Shampoo ",
        price: 35.0,
        image01: `https://content.e-zoo.com.ua/files/Prods/prod_16978_28524766.jpg`,
        image02: `https://content.e-zoo.com.ua/files/Prods/prod_16978_28523713.jpg`,
        image03: `https://content.e-zoo.com.ua/files/Prods/prod_16978_28525739.jpg`,
        category: "Шампунь",

        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
    },

    {
        id: "13",
        title: "Trixie Oil ",
        price: 35.0,
        image01: `https://content.e-zoo.com.ua/files/Prods/prod_16979_98446825.jpg`,
        image02: `https://content.e-zoo.com.ua/files/Prods/prod_16979_98447866.jpg`,
        category: "Шампунь",

        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
    },
    {
        id: "14",
        title: "Canin Royal Maxi",
        price: 24.0,
        image01: `https://content.e-zoo.com.ua/files/Prods/prod_125_66866925.jpg`,
        image02: `https://content.e-zoo.com.ua/files/Prods/prod_125_68362571.jpg`,
        image03: `https://content.e-zoo.com.ua/files/Prods/prod_125_68363432.jpg`,
        category: "Корм",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque. ",
    },
    {
        id: "15",
        title: "French Bulldog",
        price: 12.0,
        image01: `https://content.e-zoo.com.ua/files/Prods/prod_55438_20114035.jpeg`,
        image02: `https://content.e-zoo.com.ua/files/Prods/prod_155_24522928.jpg`,
        image03: `https://content.e-zoo.com.ua/files/Prods/prod_155_2452536.jpg`,
        category: "Корм",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque. ",
    },
    {
        id: "16",
        title: "Beef Adult Dog",
        price: 4.0,
        image01: `https://content.e-zoo.com.ua/files/Prods/prod_17282_32268084.jpg`,
        image02: `https://content.e-zoo.com.ua/files/Prods/prod_17282_32441853.jpg`,
        image03: `https://content.e-zoo.com.ua/files/Prods/prod_17282_32441853.jpg`,
        category: "Корм",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque. ",
    },
    {
        id: "17",
        title: "Nutra Gold",
        price: 44.0,
        image01: `https://content.e-zoo.com.ua/files/Prods/prod_57190_21949804.jpeg`,
        image02: `https://content.e-zoo.com.ua/files/Prods/prod_57190_21949804.jpeg`,
        image03: `https://content.e-zoo.com.ua/files/Prods/prod_57190_21949804.jpeg`,
        category: "Корм",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque. ",
    },
    {
        id: "18",
        title: "Farmina",
        price: 11.0,
        image01: `https://content.e-zoo.com.ua/files/Prods/prod_15718_89307658.jpg`,
        image02: `https://content.e-zoo.com.ua/files/Prods/prod_15718_89193742.jpg`,
        category: "Корм",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque. ",
    },
    {
        id: "19",
        title: "Shed-X",
        price: 110.0,
        image01: `https://content.e-zoo.com.ua/files/Prods/prod_6283_91430455.jpg`,
        category: "Витамины",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
    },
];

export default products;