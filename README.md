# Career Starter

Career Starter is a web application that provides users with career study paths based on their chosen profession or career. It helps users understand the educational requirements, skills, and steps needed to pursue a specific career.

## Features

- Career search: Users can search for a specific career or profession to get detailed information about it.
- Study path recommendation: Based on the selected career, the application provides a recommended study path, including educational programs, courses, certifications, and relevant resources.
- User authentication: Users can create accounts, log in, and save their favorite careers and study paths for future reference.
- User interactions: Users can rate and review study paths, share them on social media, and provide feedback on the application.

## Technologies Used

- **Frontend:** React.js, Next.js, TypeScript, Tailwind CSS
- **Backend:** Spring Boot (Java), MySQL
- **API Documentation:** Swagger

## Installation

1. Clone the repository: `git clone <repository-url>`
2. Navigate to the project directory: `cd career-starter`
3. Set up the backend:
   - Navigate to the `backend` directory: `cd backend`
   - Install dependencies: `mvn install`
   - Configure the database connection in `application.properties`
   - Run the backend server: `mvn spring-boot:run`
4. Set up the frontend:
   - Navigate to the `frontend` directory: `cd frontend`
   - Install dependencies: `npm install`
   - Configure the API endpoint in `.env.local` file
   - Run the frontend server: `npm run dev`
5. Access the application: Open your browser and visit `http://localhost:3000`

## API Documentation

The API documentation for the backend services can be accessed at `/api-docs` endpoint once the application is running. It provides detailed information about the available endpoints, request/response structures, and authentication requirements.

## Contributing

Contributions are welcome! If you find any bugs or have suggestions for improvements, please open an issue or submit a pull request. Make sure to follow the existing code style and guidelines.

## License

This project is licensed under the [MIT License](LICENSE).

## Acknowledgements

- [Alx Africa](https://www.alxafrica.com/software-engineering/) for the opportunity to be learn new stack, understand old stack and where exactly do I fit in as a Software Engineer? how good can I become? What is the future of the Industry as a Software Engineer?
- [OpenAI](https://openai.com/) for providing the GPT-3.5 language model used in the chatbot feature.
- [React](https://reactjs.org/), [Spring Boot](https://spring.io/projects/spring-boot), and other open-source libraries and frameworks used in this project.
- Special thanks to all the contributors and testers who helped make Career Starter a reality.

