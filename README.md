# pdf-download

Showcases that when there is a pdf embedded on a webpage, and Cypress is used with Electron to test that page, Electron opens
save dialog to save the pdf. This causes the test run to get stuck (until the dialog is dismissed)

## To run

```
npm install
```

```
npm run cypress:run
```

Or open cypress with the command below and select Electron as the browser

```
npm run cypress:open
``` .
