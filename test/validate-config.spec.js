var eslint = require('eslint')
var test = require('tape')
var fs = require('fs')
var path = require('path')

test('load config in eslint to validate all rule syntax is correct', function(t) {
  var CLIEngine = eslint.CLIEngine

  var cli = new CLIEngine({
    useEslintrc: false,
    configFile: '.eslintrc.json'
  })

  fs.readFile(path.resolve(__dirname, 'codeExample.js'), function(err, data) {
    var code = data.toString();


    t.equal(cli.executeOnText(code).errorCount, 0)
    t.end()
  })
})