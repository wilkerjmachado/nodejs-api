#### Backend - Node.js + Express + Typescript + Mongo 

## Requirements
* Node v14.17.0
* NPM
* Mongo

## Install dependencies
```bash
npm i
```

## Starting with docker compose
```bash
docker-compose -up -d
```

## Running in dev mode
```bash
npm run dev
```

## Run test
```bash
npm test
```

## Access swagger
[http://localhost:8080/swagger](http://localhost:8080/swagger)

## Postman collection
[Collection](https://gitlab.com/codelittinc/node-rest-interview-project-wilker-machado/-/blob/nodejs-api/nodejs_api.postman_collection.json)

## API Routes

The route prefix is `/api` by default

| Route             | Description |
| ------------------| ----------- |
| **/swagger**      | This is the Swagger UI with our API documentation |
| **/api/tag**      | Example entity endpoint |
| **/api/function** | Example entity endpoint |
| **/api/member**   | Example entity endpoint |

 ## Project Directory Structure
 ```
¦   .dockerignore
¦   .env
¦   .env.test
¦   .gitignore
¦   docker-compose.yml
¦   Dockerfile
¦   jest.config.js
¦   nodejs_api.postman_collection.json
¦   package.json
¦   README.md
¦   tsconfig.json
¦   tslint.json
¦                    
+---docs
¦   ¦   index.js
¦   ¦   info.js
¦   ¦   path.js
¦   ¦   schemas.js
¦   ¦   server.js
¦   ¦   
¦   +---function
¦   ¦       delete-function.js
¦   ¦       get-all-function.js
¦   ¦       get-function.js
¦   ¦       patch-function.js
¦   ¦       post-function.js
¦   ¦       
¦   +---member
¦   ¦       add-tag-member.js
¦   ¦       delete-member.js
¦   ¦       delete-tag-member.js
¦   ¦       get-all-member.js
¦   ¦       get-by-function-member.js
¦   ¦       get-by-tag-member.js
¦   ¦       get-member.js
¦   ¦       patch-member.js
¦   ¦       post-member.js
¦   ¦       
¦   +---tag
¦           delete-tag.js
¦           get-all-tag.js
¦           get-tag.js
¦           patch-tag.js
¦           post-tag.js
¦                   
+---src
¦   ¦   index.ts
¦   ¦   
¦   +---api
¦   ¦   +---base
¦   ¦   ¦       controller.interface.ts
¦   ¦   ¦       controller.ts
¦   ¦   ¦       entity.ts
¦   ¦   ¦       service.ts
¦   ¦   ¦       
¦   ¦   +---function
¦   ¦   ¦       function.controller.ts
¦   ¦   ¦       function.dto.ts
¦   ¦   ¦       function.interface.ts
¦   ¦   ¦       function.model.ts
¦   ¦   ¦       function.service.ts
¦   ¦   ¦       
¦   ¦   +---member
¦   ¦   ¦       member.controller.ts
¦   ¦   ¦       member.dto.ts
¦   ¦   ¦       member.interface.ts
¦   ¦   ¦       member.model.ts
¦   ¦   ¦       member.service.ts
¦   ¦   ¦       type.member.enum.ts
¦   ¦   ¦       
¦   ¦   +---tag
¦   ¦           tag.controller.ts
¦   ¦           tag.dto.ts
¦   ¦           tag.interface.ts
¦   ¦           tag.model.ts
¦   ¦           tag.service.ts
¦   ¦           
¦   +---errors
¦   ¦       generic-database-error.ts
¦   ¦       http-error.ts
¦   ¦       invalid-id-error.ts
¦   ¦       not-found-error.ts
¦   ¦       
¦   +---server
¦           app.ts
¦           error.handler.ts
¦           
+---test
    +---api
    ¦   +---function
    ¦   ¦       function-controller.test.ts
    ¦   ¦       
    ¦   +---member
    ¦   ¦       member-controller.test.ts
    ¦   ¦       
    ¦   +---tag
    ¦           tag-controller.test.ts
    ¦           
    +---server
            startup.test.ts
            

 ```


## Author
Wilker de Jesus Machado

Email: <wilkerjmachado@gmail.com>
