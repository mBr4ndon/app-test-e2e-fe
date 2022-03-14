const cucumberJunitConvert = require('cucumber-junit-convert');

const options = {
    inputJsonFile: 'cypress/cucumber-json/google.cucumber.json',
    outputXmlFile: 'reports/xml/google.cucumber.xml',
    featureNameAsClassName: true // default: false
}

cucumberJunitConvert.convert(options);
