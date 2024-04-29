# Portfolio Project - Next.js 🚀

This is the repository for my portfolio project developed in Next.js. The project uses TypeScript, Styled Components, React Hook Form, Zod for validation, consumes the GitHub API to list users and repositories, and utilizes Next.js API Routes to simulate authentication and communicate with a MongoDB database. Deployment is done in a Docker container.

## Environment Configurations 🛠️

Make sure to set the following environment variables before running the project:

### MongoDB Database 📊

- `MONGODB_URI`: MongoDB connection URL in the format `mongodb://user:password@host:port/?maxPoolSize=20&w=majority`
- `MONGODB_HOST`: MongoDB host
- `MONGODB_PORT`: MongoDB port
- `MONGODB_USER`: MongoDB user
- `MONGODB_PASSWORD`: MongoDB password
- `MONGODB_DB`: MongoDB database name

### GitHub 🌐

- `GITHUB_FINE_TOKEN`: Access token for GitHub API authentication

### Admin Credentials 👤

- `ADMIN_USERNAME`: Administrator's username
- `ADMIN_AVATAR_URL`: Administrator's avatar URL
- `ADMIN_EMAIL`: Administrator's email
- `ADMIN_PASSW`: Administrator's password

## Key Features 🚀

- **User and Repository Listing**: The project consumes the GitHub API to list users and repositories.

- **Simulated Authentication and Database Communication**: Next.js API Routes are used to simulate authentication and interaction with MongoDB.

## Technologies Used 🛠️

- **Next.js**: React framework for server-side rendering and static page generation.
- **TypeScript**: Adds static typing to JavaScript, providing a more secure codebase.
- **Styled Components**: Freedom in styling with the ability to use JavaScript to define styles.
- **React Hook Form**: Facilitates form creation in React.
- **Zod**: Library for data validation in TypeScript.
- **MongoDB**: NoSQL database used for data storage.

## Illustration 🎨

### Apresentation
![Apresentation](./public/image1.png)

### About me!
![About me!](./public/image2.png)

### Github API Consume
![GitHub API Consume](./public/github-api-consume.png)

### Contact Me!
![Contact me modal](./public/contact-me-example.png)

### Admin login page
![Admin login page](./public/admin-login-page.png)

### MongoDB find query
![Mongodb find query](./public/mongodb-find.png)

## Docker Deployment 🐳

The project has been built and deployed in a Docker container.

Access the project at [http://localhost:3000](http://localhost:3000).

If you have any questions or suggestions, feel free to contribute or get in touch. 📬
