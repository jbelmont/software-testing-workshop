## Integration Tests

To view lecture notes for this course, please consult the [github-pages](https://code-craftsmanship-saturdays.github.io/software-testing).

## Starting instructions
* Open 2 terminal prompts
* run the command `couchdb` 
* `cd integration-tests`
### II. Using text editor of your choice open program.test.js and complete each TODO block.

### 1. Finish Integration test for the /api/v1/users/badMofos route:

#### Inspect the payload with the following curl command
```sh
curl -X GET -H "Accept: application/json" -H "Cache-Control: no-cache" "http://localhost:3000/api/v1/users/badMofos"
```
#### Use the telnet command and paste in the following commands to your terminal and hit enter.
```sh
telnet localhost 3000
```

Paste this GET request into terminal that is expecting request and line feed and hit enter twice
```sh
GET /api/v1/users/badMofos HTTP/1.1
Host: localhost:3000
Accept: application/json
Cache-Control: no-cache
Postman-Token: f3413251-c0de-69ac-99dd-992bcaaca3bd
```

#### Use a REST client such as Postman Chrome App or anything else.

##### Whichever way you use choose you get the following JSON payload
```json
{
  "_id": "users",
  "_rev": "1-c9d988323eed080b054d6eb467abe4f9",
  "names": [
    "John J Rambo",
    "Conan The Barbarian",
    "Billy Jack"
  ],
  "ranks": [
    "One Bad Mofo",
    "Too Big of a dude",
    "Kicks too high for my taste"
  ]
}
```


* Add assertion to expect function call in line 16 using the payload information.

### 2. 