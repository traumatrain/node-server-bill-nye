# Bill Nye API
> Let's learn about creating a simple REST API using node!
> Bonus that "Bill Nye API" has a nice ring to it 😄

This is a very basic API server that is intended to be consumed locally. Intially, it will only support GET requests, but we could also add POST or other fun stuff.

## Development setup

1. Clone the repo to your machine with GitHub Desktop
2. In the CLI, `cd` to the cloned folder
3. Run `npm i` to install the required dependencies
3. Run `npm start` to start the server in watch (live reload) mode

## To-do

The following tasks can be completed in pretty much any way you'd like.

- [ ] Create the GET route
- [ ] Create a module/file to contain facts about Bill Nye
- [ ] Create a module/file to parse a random fact
- [ ] Send a response containing a fact when the GET route is queried

## Code organization and structure

For folder structure, I would generally expect to see something like the following after our work is underway:

```bash
├── node_modules
├── src
│   ├── api-routes
│   ├── config
│   ├── data
│   └── utils
├── .env
├── .eslintrc.json
├── .gitignore
├── .prettierrc
├── index.js
├── package-lock.json
├── package.json
└── README.md
```

Keep in mind that the `src` folder structure above is just a proposal. Feel free to change it around as you see fit, but it's good practice to enforce "separation of concerns" so files/modules are easy to find in a codebase.

## Contributing

1. Create your feature branch in the CLI (`git checkout -b feature/fooBar`)
2. Commit your changes in VSCode or the CLI (`git commit -m 'Add some fooBar'`)
3. Push to the branch with GitHub Desktop or the CLI (`git push origin feature/fooBar`)
4. Create a new Pull Request
