// List of HTTP error status.
// You can add more code here.
const httpErrorStatus = {
    400: 'Bad request',
    401: 'Unauthorized',
    403: 'Forbidden',
    404: 'Not found',
    408: 'Request timeout',
    500: 'Internal server error',
};

/**
 * GET method wrapper
 * @param  {String} url         url string
 * @param  {Array}  [params=[]] input params
 * @return fetch api
 */
export const get = (url, params = [], cache = true) => {
    params.forEach((val, index) => {
        url = url.replace(`{${index}}`, val);
    });
    
    const _config = {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
    };

    if (cache === false) {
        _config.headers['pragma'] = 'no-cache';
        _config.headers['cache-control'] = 'no-cache';
    }
    
    return fetch(url, _config).then(response => _returnResponse(response));
};

/**
 * POST method wrapper
 * @param  {String} url  url string
 * @param  {Object} body request body
 * @return fetch api
 */
export const post = (url, body = {}, params = []) => {
    params.forEach((val, index) => {
        url = url.replace(`{${index}}`, val);
    });
    
    const _config = {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
    };

    if (Object.keys(body).length > 0) {
        _config.body = JSON.stringify(body);
    }

    return fetch(url, _config).then(response => _returnResponse(response));
};

/**
 * PUT method wrapper
 * @param  {String} url  url string
 * @param  {Object} body request body
 * @return fetch api
 */
export const put = (url, body) => {
    const _config = {
        method: 'PUT',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
    };

    return fetch(url, _config).then(response => _returnResponse(response));
};

/**
 * DELETE method wrapper
 * @param {String} url 
 * @param {String} params 
 */
export const del = (url, body, params = []) => {
    params.forEach((val, index) => {
        url = url.replace(`{${index}}`, val);
    });

    const _config = {
        method: 'DELETE',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
    };
    
    return fetch(url, _config).then(response => _returnResponse(response));
};

/**
 * multipart (POST/PUT) method wrapper
 * @param  {String} method      method (POST/PUT)
 * @param  {String} url         url string
 * @param  {Object} body        formdata
 * @return fetch api
 */
export const multipart = (method, url, body) => {
    const _config = {
        method,
        headers: {
            'Content-Type': 'multipart/form-data',
        },
        body,
    };

    return fetch(url, _config).then(response => _returnResponse(response));
};

/**
 * Helper for returning the response
 * @param  {Object} response result of the fetch
 * @return response
 */
const _returnResponse = (response) => {
    const code = response.status.toString();

    if (Object.keys(httpErrorStatus).includes(code)) {
        throw Error(httpErrorStatus[code]);
    } else {
        return response.json();
    }
};
