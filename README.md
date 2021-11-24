#  ASK REDDIT

[https://nickglu86.github.io/ask-reddit/](https://nickglu86.github.io/ask-reddit/)

## Overview
React-App -  Fetching and Displaying posts from Reddit by Search Word

### Execution instructions
```sh
npm install
```
```sh
npm start
```

### Packages Used
1. Axios - Fetching posts from Reddit API
2. Bootstrap - Styling and Design
3. GitHub Pages - Live Version


### Solution thought process
The app fetching posts from reddit. Some data that been requested to display is not avalible in the JSON from Reddit API:
- thumbnail - all of the post have empty value for the thumbnail.
- date - the year of created post date have an issue with a year that in the most posts is 1970.

React Hook useEffect has a missing dependency: 'fetchPosts' - warning that should be fixed, used fetchPosts function also on click for search this why its outside useEffect scope.
Styling - Basic responsive styling using Boostrap/bootsrap classes.
Added some costum static styling.


### Parts not handled/not handled optimally - Things TO DO Differently
* useEffect should be implemented in different way to prevent warning about fetchPosts  dependency
* Styling - based on bootstrap + custom styling that can be improved by using dynamic units like rm and rem also should be extended for better view and behavior.
