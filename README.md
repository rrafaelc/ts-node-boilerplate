# Typescript Node Boilerplate

This is a boilerplate project to quickly get started with TypeScript, ESLint, Prettier, Jest, Husky, Lint-Staged, and Conventional Commits.

## Features

- TypeScript for type checking and modern JavaScript features

- ESLint and Prettier for code linting and formatting

- Jest for unit testing

- Husky for pre-commit and pre-push Git hooks

- Lint-Staged for running ESLint, Prettier and jest only on changed files

- Conventional Commits for a standardized commit message format

## Getting Started

To use this boilerplate, you'll need to have Node.js and Git installed on your computer. You'll also need to have Yarn installed.

1. Clone this repository:

```bash
git clone https://github.com/rrafaelc/ts-node-boilerplate.git
```

2. Install the dependencies:

```bash
cd ts-node-boilerplate
yarn
```

3. Start the development server:

```bash
yarn start:dev
```

4. Run the tests:

```bash
yarn test
```

## Known Bugs

- When using Git on Windows, you may encounter line ending issues with files checked out from the repository. This can cause issues with ESLint and Prettier. To fix this, you can configure Git to disable `autocrlf` by running the following command:

```bash
# https://stackoverflow.com/a/17628353
git config --global core.autocrlf false
```

## License

This project is licensed under the MIT License. See the [LICENSE](https://raw.githubusercontent.com/rrafaelc/ts-node-boilerplate/main/LICENSE) file for details.
