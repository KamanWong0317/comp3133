const { emailRegex } = require('../constants');
const Employee = require('../models/Employee')


// This file will contain all GraphQL Resolvers
//Resolver performs  yhe operations to complete types defined in typedefs

exports.resolvers = {
    Query:{
        getEmployees: async(parent, args) => {
            console.log(`Fetching all employees...`);

            return await Employee.find({})

        },
        getEmployeeByCity: async(parent, args) => {
            console.log(`Fetching all employees from city : ${args.city}`);

            const emps = await Employee.find({city: new RegExp(args.city, 'i')})
            console.log(`matching employees : ${JSON.stringify(emps)}`);

            return emps
        },
        getEmployeeByFirstname: async(parent, args) => {
            console.log(`Fetching all employees with firstname : ${args.firstname}`);

            const emps = await Employee.find({firstname: new RegExp(args.firstname, 'i')})
            console.log(`matching employees : ${JSON.stringify(emps)}`);

            return emps
        },
        getEmployeeByID: async(parent, args) => {
            console.log(`Fetching employee with do ID: ${args.id}`);

            const emps = await Employee.findById({id: args.id})
            console.log(`matching employees : ${JSON.stringify(emps)}`);

            return emps
        },
    },
    Mutation: {
        addEmployee: async(parent, args) => {
            console.log(`Trying to insert employee with email ${args.email}`);

            let genderToAdd = args.gender
            if(args.gender !== '2SLGBTQQIA+'){
                genderToAdd = args.gender.toLowerCase()

            }

            let newEmployee = new Employee({
                firstname: args.firstname,
                lastname: args.lastname,
                email: args.email,
                gender: genderToAdd,
                city: args.city,
                designation : args.designation,
                salary : args.salary,  
            })

            return await newEmployee.save()

        },
        updateEmployee: async(parent, args) => {

            if (!args.id){
                console.log(`ID not provided`);
                return JSON.stringify({
                    status: false,
                    "message" : "Please provide employee ID to update"
                })

            }

            console.log(`Trying to update employee id ${args.id}`);

            let genderToAdd = args.gender

            if (args.gender !== '2SLGBTQQIA+'){
                genderToAdd = args.gender.toLowerCase()
            }
            return await Employee.findByIdAndUpdate(
                {_id: args.id },
                {
                    $set: {
                        firstname: args.firstname,
                        lastname: args.lastname,
                        gender: genderToAdd,
                        city: args.city,
                        designation : args.designation,
                        salary : args.salary, 

                    }

                },

                {new: false},
                (err, employee) => {
                    if (err){
                        console.log(`Could not update employee : ${JSON.stringify(err)}`);
                        return null
                    }else{
                        console.log(`Employee info updated : ${JSON.stringify(employee)}`);
                        return employee
                    }
                }
            )

        },
        deleteEmployee: async(parent, args) => {

            if (!args.id){
                console.log(`ID not provided`);
                return JSON.stringify({
                    status: false,
                    "message" : "Please provide employee ID to update"
                })

            }
            console.log(`Trying to delete employee id ${args.ig}`);

            return await Employee.findByIdAndDelete(args.id)

        }
    }
}
