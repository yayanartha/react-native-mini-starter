export default (url, body = undefined, method = 'POST') => {
    let config = {
        method,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
    };

    if (!!body) {
        config.body = JSON.stringify(body);
    }

    return fetch(url, config).then((response) => {
        console.log(response);
        switch(response.status) {
        // case 404:
        //     throw Error('Data not found');
        default:
            return response.json();
        }
    });
};
