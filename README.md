# LeetCode Solutions

This is a repository where I collect my code solucions from LeetCode.

This README file contains description about how to work with this repository. If you are in search for how to use the final product (website/documentation), how easly navigate throw them, watch intro.

##
### Watch the project

https://leetcode-five.vercel.app/

### Local Development


```
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

Using SSH:

```
$ USE_SSH=true yarn deploy
```

Not using SSH:

```
$ GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
