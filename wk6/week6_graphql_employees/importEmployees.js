const mongoose = require('mongoose');
const fs = require('fs');
const dotenv = require('dotenv');
const Employee = require('./models/Employee'); // Importa el modelo

dotenv.config(); // Cargar variables de entorno

const importEmployees = async () => {
    try {
        console.log("Connecting to MongoDB...");
        await mongoose.connect(process.env.Mongo_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("MongoDB connected...");

        const existingEmployees = await Employee.countDocuments();
        console.log(`Found ${existingEmployees} existing employees.`);

        if (existingEmployees > 0) {
            console.log("Employees already exist in the database. Skipping import.");
            mongoose.connection.close();
            return;
        }

        console.log("Reading JSON file...");
        let employees = JSON.parse(fs.readFileSync('Sample_Employee_Records.json', 'utf-8'));

        // 🔹 Convertir "Male" a "male" y "Female" a "female"
        employees = employees.map(emp => ({
            ...emp,
            gender: emp.gender.toLowerCase() // Convierte a minúsculas
        }));

        console.log(`${employees.length} employees found in JSON file.`);
        console.log("Inserting employees into MongoDB...");

        await Employee.insertMany(employees);
        console.log("Employees imported successfully!");

    } catch (error) {
        console.error("Error importing employees:", error);
    } finally {
        console.log("Closing MongoDB connection...");
        mongoose.connection.close();
    }
};

// Ejecutar solo si este archivo es ejecutado directamente
if (require.main === module) {
    console.log("Starting employee import script...");
    importEmployees();
}
