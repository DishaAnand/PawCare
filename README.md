Table of Contents
=================
1. [PawCare: Premium Dog Day Care Service](#pawcare-premium-dog-day-care-service)
   - [Overview](#overview)
   - [Problem](#problem)
   - [Solution](#solution)
   - [Features](#features)
2. [Pre-requisites](#pre-requisites)
3. [External Dependencies](#external-dependencies)
4. [Group Submission (Dynamic Developer)](#group-submission-dynamic-developer)
5. [Built With](#built-with)
6. [Authors](#authors)
7. [Installation](#installation)
   - [Node](#node)
     - [Node installation on Windows](#node-installation-on-windows)
     - [Node installation on Ubuntu](#node-installation-on-ubuntu)
   - [Spring Boot](#spring-boot)
8. [Install GitLab Project](#install-gitlab-project)
9. [Trello Board](#trello-board)
10. [Deployment](#deployment)


# PawCare: Premium Dog Day Care Service
## Overview
PawCare, developed by Dynamic Developers, is a premium day care service designed to ensure the happiness and well-being of dogs while their owners are away. PawCare is committed to providing a top-tier day care experience for dogs, ensuring they receive the care and attention they deserve while their owners are away. Our mission is to provide a safe, engaging, and enriching environment where dogs can socialize, exercise, and receive personalized care.

## Problem
Dog owners face several challenges, including:
- Lack of time to properly care for their dogs during the day.
- Concerns about their dogs being lonely or not getting enough exercise.
- Difficulty finding trustworthy and reliable dog care providers.

## Solution
PawCare addresses these problems by:
- Offering a secure and stimulating environment for dogs during the day.
- Providing regular exercise and socialization opportunities with other dogs.
- Ensuring that all staff are trained in pet care and behavior management.

# Group Submission (Dynamic Developer)

- _Date Created_: 28th May, 2024
- _Last Modification Date_: 07 August, 2024
- _GitLab URL_: [PawCare](https://git.cs.dal.ca/rachit/pawcare)
- _Deployed URL_: https://paw-care-amber.vercel.app/

## Features
**Log in/Sign up**: Users can create an account and log in to access the platform.
![Register](/images/Register.jpg)
![Login](/images/Login.jpg)
**Company Information**: Users can view information about the company.
![Contact](/images/ContactUs.jpg)
![About](/images/AboutUs.jpg)
**User Management**: Users can create an account, log in, and manage their profile.
**Dog Profile**: Users can create a profile for their dog(s) and manage their information.
![User Profile](/images/UserManagement.jpg)
**Booking**: Users can book day care services for their dog(s).
![Booking](/images/Booking.jpg)
**Brand Partners**: Users can view information about the company's brand partners.
![Brand Partners](/images/BrandPartners.jpg)
**Shopping**: Users can purchase products from the company's online store.
![Shopping](/images/Shopping.jpg)
**Analytics**: Users can view detailed analytics and reports for the user and their dogs behaviour at PawCare.
![Analytics](/images/analytics.png)

# Pre-requisites
For build and running the application locally the project requires:
- Java [21.0.2](https://www.oracle.com/java/technologies/javase/21-0-2-relnotes.html)
- Apache Maven [3.9.6](https://dlcdn.apache.org/maven/maven-3/3.9.6/binaries/apache-maven-3.9.6-bin.zip)
- MySQL [8.0.36](https://dev.mysql.com/downloads/installer/)
- Node.js [20.12.0](https://nodejs.org/en/blog/release/v20.12.2)
- npm [10.5.0](https://www.npmjs.com/package/npm/v/10.5.0)

# External Dependencies
| Dependency Name | Version | Description |
|---|---|---|
| Spring Boot Starter Web | 3.3.0 | Provides core web functionalities for Spring Boot applications |
| Lombok (Optional) | Any | Simplifies Java code with annotations (requires configuration) |
| Spring Boot Starter Data MongoDB | 3.3.0 | Enables data access with MongoDB in Spring Boot applications |
| Spring Boot Devtools (Optional) | 3.3.0 | Speeds up development by automatically reloading application changes |
| Spring Boot Starter Test | 3.3.0 | Provides tools for unit and integration testing |
| Vite | 5.2.11 | A lightning-fast development server for building modern web applications |
| React | 18.3.1 | A declarative library for building user interfaces |
| React DOM | 18.3.1 | Enables rendering React components in the browser |
| Firebase | 10.12.2 | Provides Google's mobile and web app development platform |
| React Icons | 5.2.1 | Offers a collection of SVG icons for React projects |
| Sass | 1.77.2 | A preprocessor for CSS that adds features like variables and mixins |
| ESLint | Not specified | JavaScript linter for enforcing coding standards (check documentation for compatible version) |
| ESLint JS | 9.3.0 | ESLint plugin for analyzing JavaScript code |
| Globals | 15.3.0 | Polyfill for browser globals (might not be required in modern browsers) |

# Built With
 
- [React](https://legacy.reactjs.org/docs/getting-started.html/) - Web Framework used
- [npm](https://docs.npmjs.com//) - Dependency Package Manager
- [Bootstrap](https://getbootstrap.com/docs/4.1/getting-started/introduction/) - Styling Framework used with React
- [Java Springboot](https://spring.io/projects/spring-boot) - Backend Framework used

# Authors
- [Disha Anand](ds442718@dal.ca) - Developer
- [Freya Jayant Vora](fr793929@dal.ca) - Developer
- [Gautam Mundada](gautam.mundada@dal.ca) - Developer
- [Pooja Chauhan](pj425390@dal.ca) - Developer
- [Priyatam Somagattu](pr889078@dal.ca) - Developer
- [Rachit Khanna](rc257785@dal.ca) - Developer

# Installation
## Node
### Node installation on Windows

  Just go on [official Node.js website](https://nodejs.org/) and download the installer.
Also, be sure to have `git` available in your PATH, `npm` will need it (You can find git [here](https://git-scm.com/)).

#### Node installation on Ubuntu

  You can install nodejs and npm easily with apt install, just run the following commands.

      $ sudo apt install nodejs
      $ sudo apt install npm

If the installation is successful, you should be able to run the following command.

    $ node --version
    v21.7.2

    $ npm --version
    10.5.0

To run nodejs run the below command

    $ npm install npm -g

## Spring Boot
Using your terminal change the present working directory to the project’s backend
```bash
    cd backend/
```
Check if correct version of Maven exists
```bash
    mvn -v
```
Installing Maven
```bash
    mvn clean install
```
Build the project using Maven
```bash
    mvn clean package
```
Run the application using Maven
```bash
    mvn spring:boot run
```

# Install GitLab Project

    $ git clone https://git.cs.dal.ca/rachit/pawcare.git 

# [Trello Board](https://trello.com/b/fRwMXPxB/dynamic-developers-pawcare)
![Trello Board](/images/Trello.png)
![Trello Board](/images/Trello1.png)

 
# Deployment
## [Frontend](https://https://paw-care.vercel.app/)
## [Backend](https://pawcarebackend.onrender.com)

<!-- ## Sources Used ### -->
