const initState = {
    options: [
    ],
    variants: [
    ],
}

const rootReducer = (state = initState, action) => {
    // if (action.type === 'ADD_OPTION') {
    //     return {
    //         ...state,
    //         options: [...state.options, action.options],
    //     }
    // }

    if (action.type === 'ADD_VARIANT') {
        const newVariant = {
            ...state,
            variants: [
                ...state.variants,
                action.value
            ]
        };
        return newVariant;
    };

    if (action.type === 'UPDATE_VARIANT') {
        const variants = state.variants.map(variant => {
            if (variant.id === action.value.id) {
                return action.value;
            };
            return variant;
        });

        return {
            ...state,
            variants
        }

    };

    if (action.type === 'REMOVE_VARIANT') {
        const variantIndexToChange = state.variants.findIndex((variant) => {
            return variant.id === action.value
        });

        return {
            ...state,
            variants: [
                ...state.variants.slice(0, variantIndexToChange),
                ...state.variants.slice(variantIndexToChange + 1)
            ],
        }
    };

    if (action.type === 'ADD_OPTION') {
        const newOption = {
            ...state,
            options: [
                ...state.options,
                action.value
            ]
        };
        return newOption;
    };

    return state;

}

export default rootReducer;