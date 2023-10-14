module.exports = () => {
    const response = {
      Status: 200,
      items: [
        {
          id: 1,
          name: "Bible",
          card_img: " card.jpg",
          card_img_alt: "alt",
          price: "Priceless",
          description: "very short",
        },
        {
          id: 2,
          name: "airpods pro",
          card_img: " card.jpg",
          card_img_alt: "alt",
          price: "$299.99",
          description: "very short",
        },
        {
          id: 3,
          name: "Macbook air",
          card_img: "card.jpg",
          card_img_alt: "alt",
          price: "$2999.99",
          description: "very very short",
        },
        {
          id: 4,
          name: "Macbook pro",
          card_img: "card.jpg",
          card_img_alt: "alt",
          price: "$2499.99",
          description: "very very short",
        },
      ],
    };
    return response;
  };
  
  