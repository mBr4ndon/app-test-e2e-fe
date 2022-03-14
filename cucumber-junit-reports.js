const cucumberJunitConvert = require('cucumber-junit-convert');

const options = {
    inputJsonFile: 'cypress/cucumber-json/create-post.cucumber.json',
    outputXmlFile: 'reports/xml/create-post.cucumber.xml',
    featureNameAsClassName: true // default: false
}

cucumberJunitConvert.convert(options);
