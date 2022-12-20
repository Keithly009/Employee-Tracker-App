
const { prompt } = require("inquirer");
const db = require("./db/connection");

// Use the async function to skip .then functions 
const start = async () => {
    console.log("Welcome to the Employee Manager!");
    prompt([
        {
            type: "list", 
            name: "Choice",
            message: "What would you like to do?",  
            choices: [
                'View all departments', 
                'View all roles', 
                'View all employees', 
                'Add a department', 
                'Add a role', 
                'Add an employee', 
                'Update an employee role', 
                'Exit'
            ]
        }
    ])
    switch (choice) { 
        case 'View all departments': 
    }
}

start();
