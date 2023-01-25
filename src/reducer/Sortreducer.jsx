
const sortInitalstate = {
    sortby: null , 
    Categoryfilter: null,
    Discountfilter:null
};

const SortreducerFunc = (state, action) => {

    switch (action.type) {
        case "Sortby":
            return { ...state, sortby: action.payload };
        case "Category":
            return { ...state, Categoryfilter: action.payload }
        case "Discount":
            return{ ...state ,Discountfilter : action.payload }
        case "CLEAR-FILTER":
            return {
                ...state, filter: { ...state.filter,
                 sortby:  null , 
                 Categoryfilter:  null,
                 Discountfilter: null
                }
            }
        default:
            return state;
    }
    
}

export {SortreducerFunc , sortInitalstate}