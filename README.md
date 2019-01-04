# pdf-download

Showcases that when there is a pdf embedded on a webpage,
and Cypress is used with Electron to test that page, Electron opens
save dialog to save the pdf. This causes the test run to get stuck (until the dialog is dismissed)


Example project is done in ClojureScript. Leiningen is needed to run it.
Start the project with "lein figwheel"

Install cypress with "npm install" and run the tests with electron headlessly with "npm run cypress:run".
Or open cypress with "npm run cypress:open" and select Electron as the browser.
