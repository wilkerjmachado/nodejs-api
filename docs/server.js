module.exports = {
    servers: [
        {
            url: "https://w-nodejs-api.herokuapp.com/api",
            description: "Heroku server",
        },
        {
            url: "http://localhost:8080/api", // url
            description: "Local server", // name
        }
    ],
};
