# ESLint + Prettier + Airbnb Style Guide Setup for VS Code

## ESLint and Prettier plugins for VS Code

ESLint uses the ESLint library **installed in the opened workspace folder**. If the folder doesn't provide one the extension looks for a global install version.

1. Install ESLint plugin.

   `ext install dbaeumer.vscode-eslint`

2. It is recommended to install ESLint locally in the project folder. Run the following command in the workspace folder:

   `npm install eslint`

   or

   `npm install eslint --save-dev`

Prettier is an opinionated code formatter. It enforces a consistent style by parsing your code and re-printing it with its own rules that take the maximum line length into account, wrapping code when necessary.

1.  Install Prettier plugin.
    `ext install esbenp.prettier-vscode`

2.  Configure Prettier global settings. Open File -> Preferences -> Settings (hotkey - `Ctrl + ,`).

    - search for default formatter and set it to esbenp.prettier-vscode
    - enable 'Format on save'
    - set other settings if needed

## Install packages

1. Create a package.json.

   `npm init`

2. Install dev dependencies. **esling-plugin-prettier** - runs Prettier as an ESLint rule and reports differences as individual ESLint issues. **esling-config-prettier** - turns off all rules that are unnecessary or might conflict with Prettier.

   `npm i -D eslint prettier eslint-plugin-prettier eslint-config-prettier`

3. Install package for Airbnb Style Guide.

   `npx install-peerdeps --dev eslint-config-airbnb`

## Configuration files

### Prettier

There's no need to set up a configuration file for Prettier. If present, it will be used instead of global settings.

1. Create a .prettierrc file.

2. Set the rules you want as follows:

   ```
   {
     "singleQuote": true
   }
   ```

   All possible rules can be looked up [here](https://prettier.io/docs/en/options.html).

### ESLint

1. Press Ctrl + Shift + P to open Command Palette and find 'ESLint: Create ESLint configuration'. Run the command.

2. There will a bunch prompt questions. Answer as required for the project.

### Set up ESLint to use Airbnb Style Guide.

Might want to create a .prettierignore file and add .eslintrc.js (json/yaml) file to it, so it doesn't remove quotes from the keys.

1. If there's no "node": true set in "env", set it and restart VS Code. Otherwise ESLint generates a non-undef error due to undefined module.

   ```
   "env": {
      "browser": true,
      "es2020": true,
      "node": true,
   },
   ```

2. Edit 'extends':

   `"extends": ["airbnb", "prettier"],`

3. Add plugins:

   `"plugins": ["prettier"],`

4. To enable Prettier rules for ESLint, add this to the rules. Possible values: "error", "warn", "off".

   `"prettier/prettier": "error",`

5. Add additional rules if needed. List of available rules [here](https://eslint.org/docs/rules/).

## References

- [VSCode ESLint, Prettier & Airbnb Style Guide Setup, Tutorial by Traversey Media](https://www.youtube.com/watch?v=SydnKbGc7W8)
- [ESLint plugin page](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Prettier plugin page](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [ESLint Getting Started](https://eslint.org/docs/user-guide/getting-started)
- [eslint-config-airbnb package](https://www.npmjs.com/package/eslint-config-airbnb)
- [ESLint rules](https://eslint.org/docs/rules/)
- [Prettier rules](https://prettier.io/docs/en/options.html)
