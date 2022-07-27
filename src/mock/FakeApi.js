const products = [
  {
    id: 1,
    img: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/21d38052-598b-44f6-a857-123c9f72b015/air-force-1-07-mens-shoes-5QFp5Z.png",
    title: "Nike Air Force 1 '07",
    description: "The radiance lives on in the Nike Air Force 1 ’07, the b-ball OG that puts a fresh spin on what you know best: durably stitched overlays, clean finishes and the perfect amount of flash to make you shine.",
    price: 110,
    stock: 5
  },
  {
    id: 2,
    img: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/3a63ad36-e753-4b34-a17e-3f7c45b0fcb5/air-vapormax-2021-fk-mens-shoes-NpTfFz.png",
    title: "Nike Air VaporMax 2021 FK",
    description: "Made from at least 20% recycled materials by weight, this Nike Air VaporMax 2021 FK draws inspiration from hemp, a strong and durable natural textile fiber, to bring you a striking shoe packed with breathable support and responsive cushioning. Super stretchy, high-strength fibers in Nike Flyknit create a lightweight, sock-like upper, while heel-to-toe VaporMax Air helps put a bounce in your step.",
    price: 210,
    stock: 10
  },
  {
    id: 3,
    img: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/85de7048-456c-4158-bb2b-ee84bcf921a5/air-vapormax-plus-mens-shoes-nC0dzF.png",
    title: "Nike Air Vapormax Plus",
    description: "Ready, set, go! These kicks look to the past while propeling you into the future. You'll recognize elements of the 1998 original in the signature design, world-class cushioning and iconic heel logo—but our revolutionary VaporMax Air tech transforms it into a modern must-have.",
    price: 210,
    stock: 7
  },
  {
    id: 4,
    img: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/bc3ed1ed-a64c-476d-ad9b-e9bdd7f51e37/air-max-270-mens-shoes-KkLcGR.png",
    title: "Nike Air Max 270",
    description: "Nike’s 1st lifestyle Air Max brings you style, comfort and 270 degrees of Air to showcase one of our greatest innovations yet. Add a lightweight, airy upper and low-cut collar and you’ve got the perfect go-to kicks for everyday fun.",
    price: 160,
    stock: 1
  },
  {
    id: 5,
    img: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/1492bfe1-0bd0-4697-b20b-cb41ec5b4f6b/air-max-flyknit-racer-mens-shoes-PsrWR7.png",
    title: "Nike Air Max Flyknit Racer",
    description: "Paying homage to both heritage and innovation, we've blended 2 icons (old and new) to go beyond what's expected in the Nike Air Max Flyknit Racer. Incredibly light and airy Flyknit pairs with oh-so-comfy Air Max cushioning. Lace up and let your feet do the talking.",
    price: 160,
    stock: 20
  },
  {
    id: 6,
    img: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/go9ejlsilpz2hq0eophu/air-max-plus-mens-shoes-x9G2xF.png",
    title: "Nike Air Max Plus",
    description: "Let your attitude have the edge in your Nike Air Max Plus, a Tuned Air experience that offers premium stability and unbelievable cushioning. Featuring the OG's wavy design lines, TPU accents and airy mesh on the upper, it celebrates defiant style.",
    price: 175,
    stock: 37
  }
];

export const data = new Promise((resolve, reject) => {
  let condition = true;
  setTimeout(() => {
    if (condition) {
      resolve(products);
    } else {
      reject("Something isn't working...");
    }
  }, 3000);
});