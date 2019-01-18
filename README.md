# Simple API of One Piece with Express, Sequelize, and mySQL

## How to Use

Install dependencies:

```sh
yarn
```

Start server with `node`:

```sh
node app.js
```

Start with `nodemon`:

```sh
nodemon app.js
```

Access the endpoints via browser, httpie, or Postman.

## API Endpoints

Characters:

| Route                           | HTTP Verb | Description                       |
| ------------------------------- | --------- | --------------------------------- |
| `/characters`                   | `GET`     | Get all the characters            |
| `/characters/:id`               | `GET`     | Get a single character            |
| `/characters`                   | `POST`    | Save a new character              |
| `/characters/search?name=:name` | `GET`     | Search character by name          |
| `/characters`                   | `DELETE`  | Clear all the characters          |
| `/characters/:id`               | `DELETE`  | Remove a character                |
| `/characters/:id`               | `PUT`     | Update an character with new info |
