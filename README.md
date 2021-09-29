## Deere Project 4

This is the backend part of an applicaiton which will allow you to list your favorite baseball team(s) and player(s).  You can add or remove teams and players.  If a team has players, you will first need to remove all players before removing the team.

This is an Express application and serves JSON data only. There are no views. You can use Postman to test that the endpoints are working.  Each endpoint is prefaced with `/api`.

```js
// server.js  Note: the auth and user routes were not implemented at this time.
app.use("/api/auth", require("./controllers/authController.js"));
app.use("/api/users", require("./controllers/usersController.js"));
app.use("/api/teams", require("./controllers/teamsController.js"));
```

## Set Up

1. Fork and clone this repo
1. `cd` into the folder and run `npm install`

1. Check out your `config/config.json` file. You'll need to create a database called `favteam_devl` (or feel free to rename the database) in pgAdmin or from any directory in the Terminal:

   ```
   createdb favteam_devl
   ```

1. Sequelize is included in the app. You have `User`, `Team`, and `Player` models. The `User` model was not incorporated at this time.  Run `npx sequelize db:migrate` to create the tables in your database.

1. Run `nodemon`.
1. Open Postman to confirm that your app is working on `localhost:3000/`.

<br>

## USER STORIES

- As a sports fan I want a way to list my favorite teams.
- As a sports fan I want a way to add new teams to my favorites list.
- As a team fan I want a way to list players on the team.
- As a team fan I want a way to add players to the team.

## WIRE FRAMES:


## TECHNOLOGIES USED

- express:
- Sequelize
- Writing Code: Visual Studio Code
- Test Code: Postman
- Version Control: GitHub
- Deployment: Heroku


## To Deploy

- [Heroku Node Express Deployment](https://git.generalassemb.ly/jdr-0622/node-express-heroku-deployment)
- [Heroku React Deployment](https://blog.heroku.com/deploying-react-with-zero-configuration#create-and-deploy-a-react-app-in-two-minutes)
- [Project 4 Starter Code Heroku Deployment Link](https://deere-project4-express.herokuapp.com/)

  ![](https://i.imgur.com/hy2jymA.png)

<br>

## Additional Resources

- [Sequelize Docs](https://sequelize.org/master/)
- [Fruit App Solution](https://git.generalassemb.ly/jdr-0622/fruit-app-in-class)
- [Pokemon Express Solution](https://git.generalassemb.ly/jdr-0622/pokemon-express-sequelize6)
- [Google Routes Spreadsheet](https://docs.google.com/spreadsheets/d/14-LHKXLtEkp_vKEz3qSKjREnrmSyzQ9fimTlmrPsZsQ/edit#gid=0)
- [JSON Web Tokens](https://jwt.io/)
