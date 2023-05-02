# IDT Code Challenge

#### This is a Ruby on Rails application with a React frontend. The purpose of this project is to create an web application that allows users to submit reviews.

### Dependencies
In order to run this project you will need to have the following on your machine:
- Node.js and npm installed on your development machine.
- The Yarn package manager installed on your development machine.
- Installation of the Ruby on Rails framework, this project used the ruby version 3.2.0 and rails version 7.0.4.3.

### Installation

- Clone the repository `git clone git@github.com:felipedf/idt.git`
- Navigate to the project directory in your terminal `cd idt`
- Run `bundle install` to install Ruby dependencies
- Run `yarn install` to install dependencies
- Run `rails db:create` to create the database
- Run `rails db:migrate` to create the database schema
- Run `rails db:seed` to seed the database with sample data
- The easiest way to run the application is to run it with Foreman using the command `bin/dev`
- Navigate to http://localhost:3000 in your browser

### Testing
This Project uses RSpec as a testing framework. To run the tests, run `bundle rspec` in the project directory.

### Contact
felipe.diogenes13@gmail.com