import { GET_FEATURES, ADD_FEATURE, DELETE_FEATURE, FEATURE_LOADNG } from '../actions/types';
import axios from 'axios';

export const getFeatures = () => dispatch => {
	dispatch(setFeatureLoading());
	axios
		.get('api/features')
		.then(res => {
			dispatch({
				type: GET_FEATURES,
				payload: res.data
			})
		})
};

export const deleteFeature = id => dispatch => {
	axios
		.delete(`api/features/${id}`)
		.then(res => {
			dispatch({
				type: DELETE_FEATURE,
				payload: id
			});
		});
};

export const addFeature = feature => dispatch => {
	axios
		.post('api/features', feature)
		.then(res => {
			dispatch({
				type: ADD_FEATURE,
				payload: res.data
			});
		});
};

export const setFeatureLoading = () => {
	return {
		type: FEATURE_LOADNG
	}
}