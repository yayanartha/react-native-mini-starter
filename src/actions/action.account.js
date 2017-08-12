import { Navigation } from 'react-native-navigation';
import Config from 'react-native-config';
import { Toast, fw } from '../utils';
import { types } from '../constants';
import * as LoadingIndicator from './/LoadingIndicator';
import realm from '../realm';

/**
 * To check if there's an account that has logged in previously
 * @param  {Object} navigator navigator
 * @return goto Dashboard or Main screen
 */
export const checkAuth = (navigator) => {
    return (dispatch) => {
        const Account = realm.objects('Account').filtered('isLoggedIn = true');

        // A user has logged in already
        if (!!Account && Account.length > 0) {
            // Set this account to redux store
            dispatch({ type: types.SET_ACCOUNT, account: Account[0] });
            // Start app with side drawer & Dashboard as starting screen
            Navigation.startSingleScreenApp({
                screen: { screen: 'sejasa.Dashboard' },
                drawer: { left: { screen: 'sejasa.Drawer' }}
            });
        }
        // No user has logged in
        else {
            // Goto main screen
            navigator.resetTo({
                screen: 'sejasa.Main',
            });
        }
    };
};

/**
 * Post login action (save user's data and navigate to next screen)
 * @param  {Object} response object returned after login
 * @return Navigate to next screen
 */
const _saveUserAndNavigate = (response) => {
    // Realm
    const Account = realm.objects('Account').filtered('email = $0', response.user.email);
    // If user already stored in realm db, then update it's data
    if (!!Account && Account.length > 0) {
        realm.write(() => {
            Account[0].isLoggedIn = true;
            Account[0].user_id = response.user.id;
            Account[0].email = response.user.email;
            Account[0].mobile_token = response.mobile_token.mobile_token;
            Account[0].business_profile_count = response.user.business_profile_count;
        });
    }
    // Else, then create a new realm object
    else {
        realm.write(() => {
            realm.create('Account', {
                isLoggedIn: true,
                user_id: response.user.id,
                email: response.user.email,
                mobile_token: response.mobile_token.mobile_token,
                business_profile_count: response.user.business_profile_count,
            });
        });
    }

    // Finally, if user has a business profile > goto dashboard
    if (response.user.business_profile_count > 0) {
        Navigation.startSingleScreenApp({
            screen: { screen: 'sejasa.Dashboard' },
            drawer: { left: { screen: 'sejasa.Drawer' }}
        });
    }
    // Else, goto create-business-profile
    else {
        Navigation.startSingleScreenApp({
            screen: { screen: 'sejasa.CreateBusinessProfile' },
            drawer: { left: { screen: 'sejasa.Drawer' }}
        });
    }
};

/**
 * To login user from facebook's data
 * @param  {Object} navigator   navigator
 * @param  {Object} credentials access token returned from fb sdk
 * @param  {Object} graph       user's profile from graph fb
 * @return save to realm -> goto dashboard or business profile
 */
export const loginFacebook = (navigator, { credentials, graph }) => {
    return (dispatch) => {
        LoadingIndicator.show(navigator);

        fw(`${Config.API_URL}/user_sessions`, {
            auth_hash: {
                credentials: {
                    expires: false,
                    expires_at: credentials.expirationTime,
                    token: credentials.accessToken,
                },
                extra: {
                    raw_info: {
                        email: graph.email,
                        first_name: graph.first_name,
                        gender: graph.gender,
                        id: graph.id,
                        last_name: graph.last_name,
                        link: graph.link,
                        locale: graph.locale,
                        name: graph.name,
                        timezone: graph.timezone,
                        updated_time: graph.updated_time,
                        verified: graph.verified,
                    },
                },
                info: {
                    email: graph.email,
                    first_name: graph.first_name,
                    image: graph.picture.data.url,
                    last_name: graph.last_name,
                    name: graph.name,
                    verified: graph.verified,
                },
                provider: 'facebook',
                uid: credentials.userID,
            },
            installation_id: null,
            provider: 'facebook',

        }).then(response => {
            LoadingIndicator.dismiss(navigator);

            if (!!response.user) {
                dispatch({ type: types.LOGIN_FACEBOOK, data: response });

                // Save user data to realm & navigate to next screen
                _saveUserAndNavigate(response);

            } else if (!!response.error) {
                Toast(response.error, 'Login Failed');
            }

        }).catch(error => {
            LoadingIndicator.dismiss(navigator);
            Toast(error, 'Error', true);
        });
    };
};

/**
 * Get userinfo from googleapis, then login via API_URL
 * @param  {Object} navigator navigator
 * @param  {Object} data      access token data
 * @return save to realm -> goto dashboard or business profile
 */
export const loginGoogle = (navigator, data) => {
    return (dispatch) => {
        LoadingIndicator.show(navigator);

        // Get userinfo via googleapi
        fw(`${Config.GOOGLEAPI_URL}?access_token=${data.accessToken}`, undefined, 'GET').then((userinfo) => {

            // Do login via API
            fw(`${Config.API_URL}/user_sessions`, {
                auth_hash: {
                    credentials: {
                        expires: '',
                        expires_at: '',
                        token: data.accessToken,
                    },
                    extra: {
                        raw_info: {
                            email: userinfo.email,
                            first_name: userinfo.given_name,
                            gender: userinfo.gender,
                            id: data.id,
                            last_name: '',
                            link: userinfo.profile,
                            locale: userinfo.locale,
                            name: userinfo.name,
                            timezone: '',
                            updated_time: '',
                            verified: userinfo.email_verified,
                        },
                    },
                    info: {
                        email: userinfo.email,
                        first_name: userinfo.given_name,
                        image: userinfo.picture,
                        last_name: '',
                        name: userinfo.name,
                        verified: userinfo.email_verified,
                    },
                    provider: 'google',
                    uid: data.id,
                },
                installation_id: null,
                provider: 'google',

            }).then(response => {
                LoadingIndicator.dismiss(navigator);

                if (!!response.user) {
                    dispatch({ type: types.LOGIN_GOOGLE, data: response });

                    // Save user data to realm & navigate to next screen
                    _saveUserAndNavigate(response);

                } else if (!!response.error) {
                    Toast(response.error, 'Login Failed');
                }

            }).catch(error => {
                LoadingIndicator.dismiss(navigator);
                Toast(error, 'Error', true);
            });

        }).catch(error => {
            LoadingIndicator.dismiss(navigator);
            Toast(error, 'Error', true);
        });
    };
};

/**
 * To login user using email
 * @param  {Object} navigator navigator
 * @param  {string} email     email
 * @param  {string} password  password
 * @return save to realm -> goto dashboard or business profile
 */
export const loginEmail = (navigator, email, password) => {
    return (dispatch) => {
        LoadingIndicator.show(navigator);

        fw(`${Config.API_URL}/user_sessions`, {
            email,
            installation_id: null,
            password,
            provider: 'email',
        }).then(response => {
            LoadingIndicator.dismiss(navigator);

            if (!!response.user) {
                dispatch({ type: types.LOGIN_EMAIL, data: response });

                // Save user data to realm & navigate to next screen
                _saveUserAndNavigate(response);

            } else if (!!response.error) {
                Toast(response.error, 'Login Failed');
            }

        }).catch(error => {
            LoadingIndicator.dismiss(navigator);
            Toast(error, 'Error', true);
        });
    };
};

/**
 * To create a new user account
 * @param  {Object} navigator             navigator
 * @param  {string} email                 email
 * @param  {string} password              password
 * @param  {string} password_confirmation re-type password
 * @param  {string} username              username
 * @return save to realm -> goto create-business-profile
 */
export const register = (navigator, email, password, password_confirmation, username) => {
    return (dispatch) => {
        LoadingIndicator.show(navigator);

        fw(`${Config.API_URL}/account`, {
            user: {
                email,
                password,
                password_confirmation,
                quote_request_id: null,
                username,
            },
        }).then(response => {
            LoadingIndicator.dismiss(navigator);

            if (!!response.user) {
                dispatch({ type: types.REGISTER, data: response });

                // Save user data to realm
                realm.write(() => {
                    realm.create('Account', {
                        isLoggedIn: true,
                        user_id: response.user.id,
                        email: response.user.email,
                        mobile_token: response.mobile_token.mobile_token,
                        business_profile_count: response.user.business_profile_count,
                    });
                });

                // Start new app with create-business-profile screen
                Navigation.startSingleScreenApp({
                    screen: { screen: 'sejasa.CreateBusinessProfile' },
                    drawer: { left: { screen: 'sejasa.Drawer' }}
                });

            } else if (!!response.error) {
                Toast(response.error, 'Login Failed');
            }

        }).catch(error => {
            LoadingIndicator.dismiss(navigator);
            Toast(error, 'Error', true);
        });
    };
};

/**
 * Log out user
 * @param  {Object} navigator navigator
 * @return log out user to the Main screen
 */
export const logout = (navigator) => {
    return (dispatch) => {
        // Realm: Get the logged in user
        const Account = realm.objects('Account').filtered('isLoggedIn = true');
        // Realm: Set log in status to false
        realm.write(() => {
            Account[0].isLoggedIn = false;
        });

        Toast('Anda berhasil keluar', 'Sampai Jumpa');

        // Start new app on Main screen & without drawer
        Navigation.startSingleScreenApp({
            screen: { screen: 'sejasa.Main' },
        });
    };
};
