export const MAX_REVIEWS_ON_PAGE = 10;

export const dropdownOptions = [
  `Popular`,
  `Price: low to high`,
  `Price: high to low`,
  `Top rated first`
];

export const request = {
  path: {
    root() {
      return `/`;
    },
    favorites() {
      return `/favorites`;
    },
    login() {
      return `/login`;
    },
    offer() {
      return `/hotels/:hotel_id`;
    },
    nearby() {
      return `/hotels/:hotel_id/nearby`;
    },
    comments() {
      return `/comments/:hotel_id/`;
    },
  },
  get: {
    login() {
      return `/login`;
    },
    logout() {
      return `/logout`;
    },
    hotels() {
      return `/hotels`;
    },
    offer(hotelId) {
      return `/hotels/${hotelId}`;
    },
    favorites() {
      return `/favorite`;
    },
    comments(hotelId) {
      return `/comments/${hotelId}`;
    },
    nearby(hotelId) {
      return `/hotels/${hotelId}/nearby`;
    },
  },
  post: {
    login() {
      return `/login`;
    },
    favorite(hotelId, status) {
      return `/favorite/${hotelId}/${status}`;
    },
    comments(hotelId) {
      return `/comments/${hotelId}`;
    }
  }
};

export const AuthorizationStatus = {
  AUTH: `AUTH`,
  NO_AUTH: `NO_AUTH`,
};

export const textLimit = {
  MIN_SYMBOLS: 50,
  MAX_SYMBOLS: 300
};

export const DEFAULT_CITY = {
  id: 1,
  location: {
    latitude: 48.864716,
    longitude: 2.349014,
    zoom: 12
  },
  name: `Paris`
};

export const DEFAULT_FILTER_ID = 0;

export const cities = [
  {
    id: 1,
    location: {
      latitude: 48.864716,
      longitude: 2.349014,
      zoom: 12
    },
    name: `Paris`
  },
  {
    id: 2,
    location: {
      latitude: 50.937531,
      longitude: 6.960279,
      zoom: 12
    },
    name: `Cologne`
  },
  {
    id: 3,
    location: {
      latitude: 50.850346,
      longitude: 4.351721,
      zoom: 12
    },
    name: `Brussels`
  },
  {
    id: 4,
    location: {
      latitude: 52.370216,
      longitude: 4.895168,
      zoom: 12
    },
    name: `Amsterdam`
  },
  {
    id: 5,
    location: {
      latitude: 53.551086,
      longitude: 9.993682,
      zoom: 12
    },
    name: `Hamburg`
  },
  {
    id: 6,
    location: {
      latitude: 51.224960,
      longitude: 6.775670,
      zoom: 12
    },
    name: `Dusseldorf`
  },
];

export const DATA_STRUCTURE = {
  hotels: [
    {
      bedrooms: 3,
      city: {
        location: {
          latitude: 52.370216,
          longitude: 4.895168,
          zoom: 10
        },
        name: `Amsterdam`
      },
      description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
      goods: [`Heating`, `Kitchen`, `Cable TV`, `Washing machine`, `Coffee machine`, `Dishwasher`],
      host: {
        avatarUrl: `img/1.png`,
        id: 6,
        isPro: true,
        name: `Angelina`
      },
      id: 8,
      images: [`img/1.png`, `img/2.png`],
      isFavorite: false,
      isPremium: false,
      location: {
        latitude: 56.35514938496378,
        longitude: 3.673877537499948,
        zoom: 8
      },
      maxAdults: 4,
      previewImage: `img/1.png`,
      price: 100,
      rating: 3,
      title: `Beautiful & luxurious studio at great location`,
      type: `apartment`
    },
    {
      bedrooms: 3,
      city: {
        location: {
          latitude: 52.370216,
          longitude: 4.895168,
          zoom: 10
        },
        name: `Amsterdam`
      },
      description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
      goods: [`Heating`, `Kitchen`, `Cable TV`, `Washing machine`, `Coffee machine`, `Dishwasher`],
      host: {
        avatarUrl: `img/1.png`,
        id: 3,
        isPro: true,
        name: `Angelina`
      },
      id: 1,
      images: [`img/1.png`, `img/2.png`],
      isFavorite: false,
      isPremium: false,
      location: {
        latitude: 51.35514938496378,
        longitude: 3.673877537499948,
        zoom: 8
      },
      maxAdults: 4,
      previewImage: `img/1.png`,
      price: 120,
      rating: 4.8,
      title: `Beautiful & luxurious studio at great location`,
      type: `apartment`
    }],

  hotelsRaw: [
    {
      bedrooms: 3,
      city: {
        location: {
          latitude: 56.370216,
          longitude: 3.895168,
          zoom: 10
        },
        name: `Paris`
      },
      description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
      goods: [`Heating`, `Kitchen`, `Cable TV`, `Washing machine`, `Coffee machine`, `Dishwasher`],
      host: {
        avatar_url: `img/1.png`,
        id: 6,
        is_pro: true,
        name: `Angelina`
      },
      id: 8,
      images: [`img/1.png`, `img/2.png`],
      is_favorite: false,
      is_premium: false,
      location: {
        latitude: 56.35514938496378,
        longitude: 3.673877537499948,
        zoom: 8
      },
      max_adults: 4,
      preview_image: `img/1.png`,
      price: 100,
      rating: 3.8,
      title: `Beautiful & luxurious studio at great location`,
      type: `apartment`
    },
    {
      bedrooms: 3,
      city: {
        location: {
          latitude: 52.370216,
          longitude: 4.895168,
          zoom: 10
        },
        name: `Amsterdam`
      },
      description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
      goods: [`Heating`, `Kitchen`, `Cable TV`, `Washing machine`, `Coffee machine`, `Dishwasher`],
      host: {
        avatar_url: `img/1.png`,
        id: 3,
        is_pro: true,
        name: `Angelina`
      },
      id: 1,
      images: [`img/1.png`, `img/2.png`],
      is_favorite: false,
      is_premium: false,
      location: {
        latitude: 51.35514938496378,
        longitude: 3.673877537499948,
        zoom: 8
      },
      max_adults: 4,
      preview_image: `img/1.png`,
      price: 120,
      rating: 4.8,
      title: `Beautiful & luxurious studio at great location`,
      type: `apartment`
    }],

  commentsRaw: [
    { comment: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
      date: `2019-05-08T14:13:56.569Z`,
      id: 1,
      rating: 4,
      user: {
        avatar_url: `img/1.png`,
        id: 4,
        is_pro: false,
        name: `Max`
      }
    },
    { comment: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
      date: `2019-05-08T14:13:56.569Z`,
      id: 1,
      rating: 4,
      user: {
        avatar_url: `img/1.png`,
        id: 4,
        is_pro: false,
        name: `Max`
      }
    }
  ],

  comments: [
    { comment: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
      date: `2019-05-08T14:13:56.569Z`,
      id: 1,
      rating: 4,
      user: {
        avatarUrl: `img/1.png`,
        id: 4,
        isPro: false,
        name: `Max`
      }
    },
    { comment: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
      date: `2019-05-08T14:13:56.569Z`,
      id: 1,
      rating: 4,
      user: {
        avatarUrl: `img/1.png`,
        id: 4,
        isPro: false,
        name: `Max`
      }
    }
  ],

  commentPost: {
    comment: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
    rating: 4
  },

  user: {
    email: `Oliver.conner@gmail.com`,
    password: `12345678`
  },

  authInfoRaw: {
    avatar_url: `img/1.png`,
    email: `Oliver.conner@gmail.com`,
    id: 1,
    is_pro: false,
    name: `Oliver.conner`
  },

  authInfo: {
    avatarUrl: `img/1.png`,
    email: `Oliver.conner@gmail.com`,
    id: 1,
    isPro: false,
    name: `Oliver.conner`
  },

  city: {
    bedrooms: 3,
    city: {
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 10
      },
      name: `Amsterdam`
    }
  },
};
