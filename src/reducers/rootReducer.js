const initState = {
    options: [
        {
            id: null,
            title: null,
            optionValues: ['option1', 'option2']

        },
    ],
    variants: [
    ],
}

const rootReducer = (state = initState, action) => {
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
        const variantId = action.value;
        return {
            ...state,
            variants: [
                ...state.variants.filter(variant => variant.id !== variantId)
            ]
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

    if (action.type === 'UPDATE_OPTION') {
        const options = state.options.map(option => {
            if (option.id === action.value.id) {
                return action.value;
            };
            return option;
        });
        return {
            ...state,
            options
        }

    };

    if (action.type === 'REMOVE_OPTION') {
        const optionIndexToChange = state.options.findIndex((option) => {
            return option.id !== action.value
        });
        return {
            ...state,
            options: [
                ...state.options.slice(0, optionIndexToChange),
                ...state.options.slice(optionIndexToChange + 1)
            ],
        }
    };

    if (action.type === 'ADD_OPTION_VALUE') {

        const options = state.options.filter(option => {

            if (option.id === action.value) {

                return action.value;
            };
            return option;
        });
    };

    return state;

}

export default rootReducer;