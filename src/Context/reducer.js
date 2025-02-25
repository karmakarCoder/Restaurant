export const reducer = (state, action) => {
  // get data start
  if (action.type == "data") {
    const featureProduct = action.payload.filter((el) => {
      return el.feature == true;
    });
    return {
      ...state,
      FoodBank: action.payload,
      filtterFood: action.payload,
      featureFood: featureProduct,
    };
  }
  // get data end

  //   add to wish
  if (action.type == "addToWish") {
    const loveArray = state.love.find((el) => el == action.payload);

    const wishRemove = state.favouriteFood.find(
      (el) => el.id == action.payload
    );

    if (wishRemove || loveArray) {
      return {
        ...state,
        love: state.love.filter((el) => el !== action.payload),
        favouriteFood: state.favouriteFood.filter(
          (el) => el.id !== action.payload
        ),
      };
    } else {
      const fv = state.filtterFood.filter((el) => {
        if (el.id == action.payload) {
          return el;
        }
      });

      return {
        ...state,
        favouriteFood: [...state.favouriteFood, fv[0]],
        love: [...state.love, action.payload],
      };
    }
  }

  if (action.type == "category") {
    // category start
    return {
      ...state,
      FoodBank: state.filtterFood.filter((el) => {
        if (action.payload.toLowerCase() === "All".toLowerCase()) {
          return el;
        }
        if (el.category.toLowerCase() === action.payload.toLowerCase()) {
          return el;
        }
      }),
    };
  }

  // category end

  // popUp start
  if (action.type == "popUp") {
    return {
      ...state,
      popUp: true,
      popUpCart: state.filtterFood.filter((el) => {
        if (el.id === action.payload) {
          return el;
        }
      }),
    };
  }
  // popUp end

  // addToCart start
  if (action.type == "addToCart") {
    const { id, quantity } = action.payload;

    const add = state.filtterFood.filter((el) => {
      if (el.id === id) {
        return el;
      }
    });

    let obj = {
      id: add[0].id,
      name: add[0].name,
      description: add[0].description,
      price: add[0].price,
      image: add[0].image,
      category: add[0].category,
      feature: add[0].feature,
      quantity: quantity,
    };

    const match = state.cart.find((elm) => elm.id == id);

    if (match) {
      let updateQuntity = state.cart.map((el) => {
        if (el.id == id) {
          const nweQuantity = el.quantity + quantity;
          return {
            ...el,
            quantity: nweQuantity,
          };
        } else {
          return el;
        }
      });

      return {
        ...state,
        cart: updateQuntity,
        popUp: false,
      };
    } else {
      return {
        ...state,
        popUp: false,
        cart: [...state.cart, obj],
      };
    }
  }

  // addToCart end

  // Close start
  if (action.type == "Close") {
    return {
      ...state,
      popUp: false,
    };
  }
  // Close end

  // removeCart start
  if (action.type == "removeCart") {
    return {
      ...state,
      cart: state.cart.filter((el) => el.id !== action.payload),
      // heart: state.heart.filter((el) => action.payload !== el)
    };
  }
  // removeCart end

  if (action.type == "removeWish") {
    return {
      ...state,
      favouriteFood: state.favouriteFood.filter(
        (el) => el.id !== action.payload
      ),
    };
  }
  // increment start
  if (action.type == "increment") {
    let inc = state.cart.map((el) => {
      if (el.id == action.payload) {
        let IncQun = el.quantity + 1;
        return {
          ...el,
          quantity: IncQun,
        };
      }
      return el;
    });

    return {
      ...state,
      cart: inc,
    };
  }
  // increment end

  // decrement start
  if (action.type == "decrement") {
    let dec = state.cart.map((el) => {
      if (el.id == action.payload) {
        let DecQun = el.quantity - 1;

        if (el.quantity <= 1) {
          DecQun = 1;
        }

        return {
          ...el,
          quantity: DecQun,
        };
      }
      return el;
    });

    return {
      ...state,
      cart: dec,
    };
  }
  // decrement end

  return state;
};
