module.exports = {
  'demo test google': (client) => {
    client
      .url('http://google.com')
      .waitForElementPresent('body', 1000)
      .end();
  }
}
