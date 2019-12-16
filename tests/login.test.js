

module.exports = {
    'login com sucesso': function (browser) {
        browser
            .resizeWindow(1920, 1080)
            .url('https://globoesporte.globo.com/')
            .waitForElementVisible('#busca-campo')

    }
}