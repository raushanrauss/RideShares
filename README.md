# RideShares

## Folder structure
```bash
Rideshare/ 
Backend   
│  
├── src/ 
│   ├── controllers/
│   │   ├── userController.js
│   │   ├── driverController.js
│   │   ├── rideController.js
│   │   └── paymentController.js
│   │
│   ├── models/
│   │   ├── userModel.js
│   │   ├── driverModel.js
│   │   ├── rideModel.js
│   │   └── paymentModel.js
│   │
│   ├── routes/
│   │   ├── userRoutes.js
│   │   ├── driverRoutes.js
│   │   ├── rideRoutes.js
│   │   └── paymentRoutes.js
│   │
│   ├── services/
│   │   ├── userService.js
│   │   ├── driverService.js
│   │   ├── rideService.js
│   │   └── paymentService.js
│   │
│   ├── middleware/
│   │   ├── authMiddleware.js
│   │   └── errorMiddleware.js
│   │
│   └── index.js
│
├── config/
│   ├── dbConfig.js
│   └── loggerConfig.js
│
├── .eslintrc.json
├── .gitignore
├── package.json
└── README.md
```

## Linting Setup

- Install ESLint: npm install eslint --save-dev
- Initialize ESLint Config: npx eslint --init
- Choose ESLint Config: Select a popular style guide (e.g., Airbnb, Standard).
- Install Required Packages: Install any additional plugins or packages required by the chosen style guide.
- Configure .eslintrc.json: Adjust rules and settings in the ESLint configuration file as needed.

## Logging Setup
- Choose a Logging Library: Select a logging library like Winston or Bunyan.
- Install the Logging Library: npm install winston --save
- Create a Logging Configuration File: Define log levels, transports, and formats in a loggerConfig.js file.
- Use Logging in Your Application: Import the logging library and use it to log messages throughout your application.
