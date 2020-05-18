require('babel-register');
require('../config/config');

// http://nightwatchjs.org/guide#settings-file
module.exports = {
  "src_folders" : ["end-to-end-tests/nightwatch"],
  "output_folder" : "reports",
  "custom_commands_path" : "",
  "custom_assertions_path" : "",
  "page_objects_path" : ["end-to-end-tests/page-objects"],
  "globals_path" : "",

  "selenium" : {
    "start_process" : true,
    "host": "127.0.0.1",
    "server_path" : "node_modules/selenium-server/lib/runner/selenium-server-standalone-3.4.0.jar",
    "log_path" : "",
    "port" : 4444,
    "cli_args" : {
      "webdriver.chrome.driver" : require('chromedriver').path
    }
  },

  "test_settings" : {
    "default" : {
      "selenium_port": 4444,
      "selenium_host": "localhost",
      "silent": true,
      "screenshots" : {
        "enabled" : false,
        "path" : ""
      },
      "launch_url": "https://localhost:3000",
      "globals": {
        "devServerURL": "https://localhost:" + (process.env.PORT)
      }
    },

    "chrome" : {
      "desiredCapabilities": {
        "browserName": "chrome",
        "javascriptEnabled" : true,
        "acceptSslCerts" : true,
        "chromeOptions" : {
            "args" : ["start-fullscreen"]
        }
      }
    }
  }
}
