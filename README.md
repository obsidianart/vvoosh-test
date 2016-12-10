# Voosh test
- Please refer to other public projects for more complex applications (e.g. [https://github.com/obsidianart/react-course-2048](React course 2048))
- I had to download the movies images and update the JSON because imdb doesn't allow embedding (anymore?)

## Choices
- Not Using a generator for the skeleton. I normally wouldn't do that but it seems the spirit of the test.
- No unit testing (I tried to contact you to find out if testing was expected and which level of testing, I'm happy to add them or you can check them out on another project)
- No e2e tests (normally I would write e2e test, if possible in cucumber using a selenium webdriver)
- I understand react for this might be a little overkilled (I remove Redux and Routing to simplify a little)

## Requirements
- [https://nodejs.org/en/](Node installed) (tested on version 6.9.2, current stable, expected to work on version >=4.5)
- tested on Chrome/Firefox/ (No expect bug in other browsers)

## Develop
- ```npm install``` Install dependencies
- ```npm run start``` To start the webserver with hot reloader
- ```npm run build``` To build the distribuition (deploy public folder)