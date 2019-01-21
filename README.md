# typescript_node_api
This is a repository that includes a service which responds with the list of users in GitHub corresponding to a given name and language they use. The GitHub API can be found: https://developer.github.com/v3/

## Techstack

* [TypeScript](http://www.typescriptlang.org/)
* [Express](https://expressjs.com)
* [Docker](https://www.docker.com/) + [Docker Compose](https://docs.docker.com/compose/)
* [mocha](https://mochajs.org/) + [chai](http://chaijs.com/)

### Setup

In development mode the application port is configured to `3000`. 

* Make sure you have installed [docker-compose](https://docs.docker.com/compose/install/)
* `npm install`

### Build the Application
* `docker build .`

### Run the Application

At first start or if only code changes were made:

* `docker run adizdari/typescript_node_api` to start service in docker container
* Server will run on `http://localhost:3000`

## Tests
