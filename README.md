# schoolband-inventory-web
Simple app to store schoolband uniforms and instruments.


##Technology stack
This project is in the early idea phase and following technologies are considered
####Database
* noSQL - eg. MongoDB

####Web-api Server
* Express - node.js

####Front end
* Progressive Web-app (PWA) and VUE 


##Use cases

####Use case Uniform object registration
* Register a uniform object (jacket, pants, hat)
* Register specification uniform object
* Register status uniform object (in stock, in use, to repair, to cleaning, disposed)
* Register/update uniform object connection to a person (objectid, name, start-date, end-date)

####Use case Person registration
* Register a person (name, start-date, status(active))
* Update a person (name, end-date, status (active / non-active))


###Use case update uniform object
* Update specification
* Update status
* Update connection person

####Use case View uniform history
* View status uniform historically (status, start-end, person.name)
* View specification uniform historically ()