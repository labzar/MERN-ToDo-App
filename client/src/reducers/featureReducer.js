import uuid from "uuid";
import { GET_FEATURES, ADD_FEATURE, DELETE_FEATURE, FEATURE_LOADNG } from '../actions/types';

const initialeState = {
    features: [],
    loading: false
};

export default function (state = initialeState, action) {
    switch (action.type) {
        case GET_FEATURES:
            return {
                ...state,
                features: action.payload,
                loading: false
            }
        case ADD_FEATURE:
            return {
                ...state,
                features: [action.payload, ...state.features]
            }
        case DELETE_FEATURE:
            return {
                ...state,
                features: state.features.filter(feature => feature._id !== action.payload)
            }
        case FEATURE_LOADNG:
            return {
                ...state,
                loading: true
            }
        default:
            return state;
    }
}
