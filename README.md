# Countries

Demo application for searching information about countries. The following stack is used:
-   [Create React App](https://github.com/facebook/create-react-app)
-   [Spring Boot](https://start.spring.io/)
-   [REST Countries API](https://restcountries.com/)

## Installation

### Backend
0. Requires [Maven](https://spring.io/guides/gs/maven/) and [Java 11](https://www.oracle.com/java/technologies/downloads/)
1. `cd [countries]/countries-backend/`
1. `mvn spring-boot:run`

### Frontend
#### Producion mode

1. `cd [countries]/countries-frontend/`
1. `npm install`
1. `npm install -g serve`
1. `npm run build`
1. `serve -s build`
1. In browser go to http://localhost:3000

#### Development mode
1. `cd [countries]/countries-frontend/`
1. `npm install`
1. `npm run build`
1. In browser go to http://localhost:3000
