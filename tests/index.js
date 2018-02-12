module.exports = {
  'User Login ' : function (client) {
    client
      .url('http://localhost/fikrlaps/login/fn/ui')
      .waitForElementVisible('body', 8000)
      .assert.visible('input[type=text]')
      .setValue('input[name=email]', 'test@mail.com')
      .setValue('input[name=pass]', 'test')
      .waitForElementVisible('button[name=sbtn]', 5000)
      .click('button[name=sbtn]')
      .pause(1000)
      .assert.containsText('#res',
        'successfull')
      .end()
  }
}