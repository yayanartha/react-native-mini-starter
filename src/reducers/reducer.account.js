import { types } from '../constants';
import initialState from './initialState';

export default function (state = initialState.account, action) {
	switch (action.type) {
		case types.SET_ACCOUNT:
			return {
				...state,
				isLoggedIn: action.isLoggedIn,
				active_sess: action.active_sess,
				profile: action.profile,
			};
		case types.REGISTER:
			return {
				...state,
				channels_to_assign: action.data.channels_to_assign,
				mobile_token: action.data.mobile_token,
				user: action.data.user,
				usersBusinessProfiles: action.data.usersBusinessProfiles,
			};
		case types.LOGIN_FACEBOOK:
			return {
				...state,
				channels_to_assign: action.data.channels_to_assign,
				is_verified: action.data.is_verified,
				mobile_token: action.data.mobile_token,
				user: action.data.user,
				usersBusinessProfiles: action.data.usersBusinessProfiles,
			};
		case types.LOGIN_GOOGLE:
			return {
				...state,

			};
		case types.LOGIN_EMAIL:
			return {
				...state,
				channels_to_assign: action.data.channels_to_assign,
				is_verified: action.data.is_verified,
				mobile_token: action.data.mobile_token,
				user: action.data.user,
				usersBusinessProfiles: action.data.usersBusinessProfiles,
			};
		default:
			return state;
	}
}
