const initState = {
    options: [
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

    if (action.type === 'UPDATE_OPTION') {
        const options = state.options.map(option => {
            console.log('action value id ', action.value)
            console.log('option id ', option.id)
            if (option.id === action.value.id) {
                console.log('here ', action.value)
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
            console.log('option.id ', option.id)
            console.log('action.value ', action.value)
            return option.id !== action.value
        });

        // const optionIndexToChange = state.options.filter((option) => {
        //     console.log('option.id', option.id)
        //     console.log('action.value', action.value)
        //     return option.id !== action.value
        // })

        return {
            ...state,
            options: [
                ...state.options.slice(0, optionIndexToChange),
                ...state.options.slice(optionIndexToChange + 1)
            ],
        }
    };

    if (action.type === 'ADD_OPTION_VALUE') {
        const newOptionValue = {
            ...state,
            options: [
                ...state.options,
                action.value
            ]
        };
        return newOptionValue;
    };

    return state;

}

export default rootReducer;