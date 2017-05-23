## Festicket technical CSS test


### Getting started

This project requires node & npm. You can install node via brew or [nvm](https://github.com/creationix/nvm)

- Step 1:

Fork the repo and clone it locally.

- Step 2:

```
npm install
```

- Step 3:

```
npm run start
```

This should get your server running.

### Assesment

The server is setup to retrieve repo data from Github.
Be sure to [create a Github access token](https://github.com/blog/1509-personal-api-tokens).
Install dependencies and start the server.
Open 'http://localhost:3000?token={your-token-here}', you should see a list of repo names.

Your task is to create a function repository viewer.
The brief is intentionally loose and good give you good scope to get creative.
Currently only repo names are displayed, add any data you feel is required.
All the data repo data from github is passed to the template context, you can see this in `views/index.hbs`.

The aim of the task is to asses you ability to prioritise data and display it in both a visually appealing and functional way.
We want to see clean semantic markup. We expect clean efficient css, without the use of a pre-processor.
Spend no more than 3 hours on the project.
Once you are finished please issue a pull request to the original festicket repo.
If there are features you didn't have time to complete the PR would be a good opportunity to express your intentions and your vision for the completed application.
A member of the festicket front end team will review your PR, this should give us a lot to talk about in the face to face interviews.

### Assets

Styles should be placed in `public/css`. Javascript can go into `public/main.js`.
