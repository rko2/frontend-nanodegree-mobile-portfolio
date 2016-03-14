## Website Performance Optimization portfolio project

## Build tools
* Install Node.js and NPM (in terminal run npm install)
* Install grunt (run npm install -g grunt-cli)

## Index.html optimization
* Async google analytics (analytics.js)
* Async webfont following documentation in readme of https://github.com/typekit/webfontloader, specifically in Get Started section
* Add print media query to print.css
* Use grunt-inline-css to inline css and output new index.html to dist folder
* Use grunt-contrib-uglify to minify perfmatters.js and output new file to dist folder

## Pizza optimization
* Remove determinedx function and use changepizzasizes function to determine pizza size instead
* In updatePositions function change from style.left to style.transform using translateX
* In event listener for pizza generation change basicLeft to style.left to set default position (basicLeft becomes useless with previous change)
* Move items outside of updatePositions function and change queryselectors to getElementbyClassName
* Create array of constant variables originally in updatePositions to eliminate need for continous recalculation in loop
* Change queryselector to getElementbyId where found
* Move getElementById out of for loop in event listener
* Save items.length in local variable to prevent continuous reacccessing in for loop in updatePositions function
* Move pizzasDiv outside of for loop, as it doesn't rely on the loop
* Declare phase outside of for loop so it isn't created every time the loop is executed
* Use window.screen.height to dynamically determine how many rows of sliding pizzas and the number of pizzas to generate

##Other
* Fix main.js according to jshint
* style.css was inlined because at the time I believed the goal was to get also achieve 90 pagespeed score with pizza.html.

## PageSpeed Insights
* Run PageSpeed Insights on http://rko2.github.io/frontend-nanodegree-mobile-portfolio/dist/

## Key References
* Udacity class discussion forum https://discussions.udacity.com/t/optimising-updatepositions-why-are-my-pizzas-clumped-together/40333
* And https://discussions.udacity.com/t/how-to-optimize-css-and-google-fonts/26997
