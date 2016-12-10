# Voosh test
- The test can be seen live here [http://www.obsidianart.com/projects/vvoosh/](http://www.obsidianart.com/projects/vvoosh/)
- Please refer to other public projects for more complex applications (e.g. [https://github.com/obsidianart/react-course-2048](React course 2048))
- I had to download the movies images and update the JSON because imdb doesn't allow embedding (anymore?)
- The first 5 points of the test can be found in the folder jsfiddle

## Choices
- Not Using a generator for the skeleton. I normally wouldn't do that but it seems the spirit of the test.
- No unit testing (I tried to contact you to find out if testing was expected and which level of testing, I'm happy to add them or you can check them out on another project)
- I understand react for this might be a little overkilled (I remove Redux and Routing to simplify a little)

## Next steps
- Evaluate unit/integration tests
- Read movies from an API
- CSS?

## Requirements
- [https://nodejs.org/en/](Node installed) (tested on version 6.9.2, current stable, expected to work on version >=4.5)
- tested on Chrome/Firefox/ (No expect bug in other browsers)

## Develop
- ```npm install``` Install dependencies
- ```npm run start``` To start the webserver with hot reloader (served at http://127.0.0.1:8888/)
- ```npm run build``` To build the distribuition (deploy public folder)

## E2e tests
- ``` npm install -g nightwatch```
- To install Selenium please refer to http://nightwatchjs.org/getingstarted#installation or https://www.npmjs.com/package/webdriver-manager (I personally prefer the latter)
- run the project and selenium
- ```nightwatch``` to run the test