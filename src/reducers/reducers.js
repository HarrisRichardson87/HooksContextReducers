// Country object so it appear well in our list
class Country{
    constructor(common){
        this.name = { common: common};
    }
}

// Country Reducer
export const countryContextReducer = (state, action) =>{
    switch(action.type){
        case "ADD":
            return [...state, new Country(action.name)];
        case "SET":
            return action.newList;
        default:
            return state
    }
}