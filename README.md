# Dev's Car Dealership App

## Introduction

This app will help you to know a little bit more about cars: just choose a brand and a year and you will get all the models that brand introduced to the public during that time. 


## Installation

To run this application locally, follow these steps:

1. **Clone the repository**:

   `git clone https://github.com/your-username/your-repository.git`

2. **Navigate to the project directory and install dependencies**:

    `npm install`

3. **Run the app!**:

    `npm run dev`

The application will be available at http://localhost:3000.


## Usage

This application is very easy to use: 

On the Home Page, there are two dropdown menus, one with a list of car brands and the other with a list of years spaning from 2015 to the present.

![](car-dealer-app\src\app\assets\homepage.png)

Choose a value for each one and click the 'Next' button, and you will be redirected to the result page. 

![](car-dealer-app\src\app\assets\select-dropdown.png)

There, you will see a table with a list of car models from that brand released in the selected year and their corresponding identification number.

![](car-dealer-app\src\app\assets\resultpage.png)

If there isn't information about that particular brand and year an error message wil be shown.

![](car-dealer-app\src\app\assets\errorscreen.png)

## Features

- Dynamic Routing: When you choose a brand and year, these parameters are used to create a dynamic route with the router. After clicking the 'Next' button, you will be redirected to the results page,

- User Interface: The main components of out page are the header with the app's name and the form, which includes two dropdown menus and a button to submit the choosen values. These will be used to fetch information that will be displayed on the result page. There, you will also find a button that will take you back to the Home Page.

- API Integration:  All data used in this application comes from the National Highway Traffic Safety Administration (NHTSA) Product Information Catalog Vehicle Listing (vPIC) API.


## Architecture

### Project Structure

```
- /car-dealer-app/: root, configuration files.
    - src/app/ - Home page and layout files.
        - components/ - Reusable UI components.
        - fonts/ - Font files.
        - result/[makeId]/[year]/ - Result page component.
```

### Routing

#### Static routes:

`/` - Home page.

#### Dynamic Routes:

`/result/[makeId]/[year]` - Route to show results based on dynamic parameters.
