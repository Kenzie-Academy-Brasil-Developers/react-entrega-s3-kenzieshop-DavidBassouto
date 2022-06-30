const productsAPI = [
  {
    name: "Funko Pop - Naruto Uzumaki Noodles ",
    price: 128.0,
    image: "https://m.media-amazon.com/images/I/619onW6u61L._AC_SY679_.jpg",
  },
  {
    name: "Funko Pop - Animation: Naruto Shippuden Kakashi (Raikiri)",
    price: 138.0,
    image:
      "https://http2.mlstatic.com/D_NQ_NP_865263-MLB49651190361_042022-O.webp",
  },
  {
    name: "Funko Pop - Sasuke Vs. Naruto Anime Moments",
    price: 438.0,
    image:
      "https://http2.mlstatic.com/D_NQ_NP_963471-MLB49853464392_052022-O.webp",
  },
  {
    name: "Funko Pop - Rides: Jiraiya on Toad",
    price: 296.0,
    image:
      "https://http2.mlstatic.com/D_NQ_NP_777526-MLB43989990776_112020-O.webp",
  },
  {
    name: "Funko Pop - Naruto (Six Path Sage) Naruto Shippuden - ",
    price: 138.0,
    image:
      "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQaapRrCK4anFuhP3PGN03sWN4PAC27rJ7GS_-G8Amc1vh4uE0F-Q5p1QmKcR3EaFodSVhCwWDIDIsUhFEbGEK5NGZkDIpyrRGtMQycLXKJpnOV5MEl6AaL&usqp=CAE",
  },
  {
    name: "Funko Pop Kurama Flocked - Naruto Shippuden",
    price: 162.0,
    image:
      "https://http2.mlstatic.com/D_NQ_NP_862867-MLB46555873465_062021-O.webp",
  },
  {
    name: "Funko Pop - Minato Namikaze",
    price: 98.0,
    image:
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQElKhN4wjoDg5lUFoUY-Aqaz8XA2HKHPDxwfFl1uei5dDckVy-Ei8s59_qHSsOoFw0B2EAIkg31vQuPYbd7z8HA_Ps1vAAkKaSJ5Zmk3HXiYgdZqgkv7wQ",
  },
  {
    name: "Funko Pop - Orochimaru Naruto Shippuden",
    price: 214.0,
    image:
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRnd7UWAFQmiRs-jallTkanUJIiMtDaE2Bg36zivWsYhORiJoVyK_I2YCRt0yghFIAUrrAnHjqo6J3pwaYMxluNDOZOMfj4-6MwhjXYTCs",
  },
  {
    name: "Funko Pop Naruto Sshippuden - Itachi Special",
    price: 338.0,
    image:
      "https://http2.mlstatic.com/D_NQ_NP_600280-CBT47404137260_092021-O.webp",
  },
  {
    name: "Funko Pop Naruto Sshippuden - Gaara",
    price: 152.0,
    image:
      "https://http2.mlstatic.com/D_NQ_NP_884684-MLB41919562658_052020-O.webp",
  },
];

export const ProductsReducer = (state = productsAPI, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
