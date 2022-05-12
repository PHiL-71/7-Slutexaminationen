// Reducer - uppdaterar state i store
const initialState = {
    LandingLoaded: 0,
    CartContent: []
};

const airbeanReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'INCREMENT':
            return {
                ...state,
                LandingLoaded: state.LandingLoaded + action.payload
            }
        case 'ADD_TO_CART':
            const ifExist = state.CartContent.find(fromState => fromState.id === action.payload.id);

            if(ifExist === undefined) {
                return {
                    ...state,
                    CartContent: [...state.CartContent, action.payload]
                }
            }
            else {
                const itemIndex = state.CartContent.findIndex((item) => item.id === action.payload.id);
                const cartCopy = [...state.CartContent];
                const itemCopy = { ...cartCopy[itemIndex] }
                itemCopy.quantity++;
                cartCopy[itemIndex] = itemCopy;
                return {
                    ...state,
                    CartContent: cartCopy
                }
            }

        case 'EMPTY_CART':
            return {
                ...state,
                CartContent: [],
                LandingLoaded: 0
            }
        default:
        return state
    }
}

export default airbeanReducer;

/*

function (state, action) {
    const ifExist = state.CartContent.findIndex((item) => item.id === action.payload.id);
    if(ifExist >= 0) {
        console.log('Finns redan')
        //state.products[itemIndex].quantity += 1;
    }
    else {
        console.log('Lägg in ny')
        //state.products.push(action.payload);
    }
  }


  const ifExist = state.CartContent.findIndex((item) => item.id === action.payload.id);
  console.log('ifExist är ', ifExist); // Varför blir den -1? Svar: no elements passed the test
  console.log('hela payload är ', action.payload);
  console.log('payload.id är ', action.payload.id);
  console.log('payload.quantity är ', action.payload.quantity);

  


  if(ifExist === 1) {
      console.log('öka antalet');
      console.log('nuvarande quantity är ', state.CartContent[ifExist].quantity);
      return {
          //...state,
          //CartContent: state.CartContent[ifExist].quantity + 1
      }
  }
  else {
      console.log('lägg till ny');
      return {
          ...state,
          CartContent: [...state.CartContent, action.payload]
      }
    }

*/

