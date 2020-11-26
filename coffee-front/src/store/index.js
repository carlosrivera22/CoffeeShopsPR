import generate from "../helpers/data";
const initialState = {
    appliedFilters: []
};

const SORT_BY_ALPHABET = "SORT_BY_ALPHABET";
const LOAD_DATA = "LOAD_DATA";

const FILTER_BY_VALUE = "FILTER_BY_VALUE";

export const sortByAlphabet = payload => ({
    type: SORT_BY_ALPHABET,
    payload
});

export const loadData = (payload) => ({
    type: LOAD_DATA,
    payload
});

export const filterByValue = payload => ({
    type: FILTER_BY_VALUE,
    payload
});


const filterStore = (state = initialState, action) => {
    switch (action.type) {
        case SORT_BY_ALPHABET:
            const sortByAlphabetState = Object.assign({}, state);
            let sortedAlphabetArr = action.payload.direction === "asc" ?
                sortAsc(state.filteredProducts, 'name') :
                sortDesc(state.filteredProducts, 'name');

            sortByAlphabetState.filteredProducts = sortedAlphabetArr;
            sortByAlphabetState.appliedFilters = addFilterIfNotExists(SORT_BY_ALPHABET, sortByAlphabetState.appliedFilters);
            sortByAlphabetState.appliedFilters = removeFilter(SORT_BY_ALPHABET, sortByAlphabetState.appliedFilters);

            return sortByAlphabetState;
        
    
        case FILTER_BY_VALUE:
            //clone the state
            let newState = Object.assign({}, state);
            //the value received from our presentational component
            let value = action.payload.value;
            let filteredValues = state.products.filter(product => {
                //look for objects with the received value in their ‘name’ or ‘designer’ fields
                return product.name.toLowerCase().includes(value) ||
                    product.designer.toLowerCase().includes(value);
            });
            
            let appliedFilters = state.appliedFilters;
            //if the value from the input box is not empty
            if (value) {
                //check if the filter already exists in the tracking array
                let index = appliedFilters.indexOf(FILTER_BY_VALUE);
                if (index===-1)
                    //if it doesn’t, add it.
                    appliedFilters.push(FILTER_BY_VALUE);
                //change the filtered products to reflect the change
                newState.filteredProducts = filteredValues;
            } else {
                //if the value is empty, we can assume everything has been erased 
                let index = appliedFilters.indexOf(FILTER_BY_VALUE);
                //in that case, remove the current filter
                appliedFilters.splice(index, 1);
                if (appliedFilters.length === 0) {
                    //if there are no filters applied, reset the products to normal.
                    newState.filteredProducts = newState.products;
                }
            }
            return newState;
        case LOAD_DATA:
            let count = action.payload.count;
            let countPerPage = action.payload.countPerPage || 20;

            //round up
            let totalPages = Math.ceil(count / countPerPage);

            let products = generate(count);
            return {
                ...state,
                products,
                filteredProducts: products.slice(0, countPerPage),
                currentCount: countPerPage,
                countPerPage,
                totalCount: count,
                currentPage: 1,
                totalPages: totalPages,
                filteredPages: totalPages
            };
        
        default:
            return state;

    }
};

export default filterStore;

function sortAsc(arr, field) {
    return arr.sort(function (a, b) {
        if (a[field] > b[field]) return 1;

        if (b[field]> a[field]) return -1;

        return 0;
    })
}

function sortDesc(arr, field) {
    return arr.sort(function (a, b) {
        if (a[field] > b[field]) return -1;

        if (b[field]> a[field]) return 1;

        return 0;
    })
}

function addFilterIfNotExists(filter, appliedFilters) {
    let index = appliedFilters.indexOf(filter);
    if (index===-1) appliedFilters.push(filter);

    return appliedFilters;
}

function removeFilter(filter, appliedFilters) {
    let index = appliedFilters.indexOf(filter);
    appliedFilters.splice(index, 1);
    return appliedFilters;
}