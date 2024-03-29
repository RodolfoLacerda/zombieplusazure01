const chromedriver = require('chromedriver');

module.exports = {
    src_folders: ['tests'],

    webdriver: {
        start_process: true,
        server_path: chromedriver.path,
        host: "localhost",
        port: 9515
    },

    test_settings: {
        default: {
            desiredCapabilities: {
                browserName: "chrome"
            }
        }
    }
}

