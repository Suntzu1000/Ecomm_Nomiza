import bcrypt from "bcryptjs"
import { User } from "./models/userModel";
import { Product } from "./models/productModel";

export const sampleProducts: Product[] = [
  {
    name: "Camiseta Nike Slim",
    slug: "camiseta-nike-slim",
    category: "Camisetas",
    image: "../images/p1.jpg",
    price: 120,
    countInStock: 10,
    brand: "Nike",
    rating: 4.5,
    numReviews: 10,
    description: "camiseta de alta qualidade",
  },
  {
    name: "Camiseta Nike Slim",
    slug: "camiseta-nik-slim",
    category: "Camisetas",
    image: "../images/p2.jpg",
    price: 120,
    countInStock: 0,
    brand: "Nike",
    rating: 4.5,
    numReviews: 10,
    description: "camiseta de alta qualidade",
  },
  {
    name: "Camiseta Nike Slim",
    slug: "camiseta-nke-slim",
    category: "Camisetas",
    image: "../images/p3.jpg",
    price: 120,
    countInStock: 10,
    brand: "Nike",
    rating: 4.5,
    numReviews: 10,
    description:
      "camiseta de alta qualidade loremf çfoadnfondaçnfdçofnaçdofn daçfdçoafçofjdço afçdof çaoj fdçoaf çofçdoaifjçodaifjçodjafçoijfçoidjaçofidjçofajdçofja faç dofjdaç ofidjçoaf odçfjaçofijdaçosifjçaojfçodj fçoajfçdofjçoafj dçso f afdçsoijfd çosjfçoadjfç oafjçod sfçodj façosdnçnrahgçoe fçoda çgojd açogçoad çojfçoidajfodiafjçaoijfoa jço oag çoajgçoadjgç ",
  },
  {
    name: "Camiseta Nike Slim",
    slug: "camista-nike-slim",
    category: "Camisetas",
    image: "../images/p4.jpg",
    price: 120,
    countInStock: 10,
    brand: "Nike",
    rating: 4.5,
    numReviews: 10,
    description: "camiseta de alta qualidade",
  },
];

export const sampleUsers: User[] = [
  {
    name: 'Gabriel',
    email: 'gabrielfootze@gmail.com',
    password: bcrypt.hashSync('93560857g'),
    isAdmin: true,
  },
  {
    name: 'Linguiçeta',
    email: 'linguiceta@example.com',
    password: bcrypt.hashSync('123456'),
    isAdmin: false,
  },
]
