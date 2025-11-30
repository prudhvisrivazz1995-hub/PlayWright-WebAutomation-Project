module.exports = {
  default: {
    require: ["features/steps/*.js"],
    format: ["html:reports/cucumber-report.html"],
    paths: ["features/*.feature"]
  }
};