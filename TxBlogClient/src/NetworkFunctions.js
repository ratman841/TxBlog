const NetworkFunctions = {

    async sendGETRequest(url) {
        return new Promise((resolve, reject) => {
            fetch(url, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(function (response) {
                let responseJson = response.json();
                resolve(responseJson);
            }).catch(function (response) {
                reject(response);
            });
        })
    }
}

export default NetworkFunctions;