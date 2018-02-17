# PrimoCSS Website

*NEW* PrimoCSS website, this is currently a holding page while all documentation is ported over to our new setup 👍

---

## Local development

Development requires the latest version of [Node.js](https://nodejs.org/en/). To setup, here is a list of commands to help you get started:

``` bash
npm install
gulp build
```

Once complete open the folder at public/assets/css to see the newly created CSS. You can override any of the global settings for PrimoCSS by creating your own variables SCSS file and a new build. Any new SCSS created can be tested by running the gulp linter and keeps all styles in check.

```bash
gulp test
```

To view the style guide locally run the express server which has been setup by running:

```bash
npm start
```

View site at http://localhost:8080.

### Browser support

Using the latest technologies, PrimoCSS is aimed at new browsers and will attempt to degrade gracefully to previous versions.

- Chrome latest
- Firefox latest
- Opera latest
- Safari latest
- IE Latest

---

## License

Code licensed [MIT](https://github.com/primocss/primocss-dot-com/blob/develop/LICENSE.md) by [Richard McCartney](http://www.github/richmccartney/)
