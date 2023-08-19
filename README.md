# Server Codebase

## Motivation
Welcome to the Server Codebase! This project streamlines the setup and development of Node.js servers, eliminating the need to repeatedly configure frameworks. We've integrated several key frameworks to ensure a smooth development experience:

- Fastify
- GraphQL
- PrismaJS
- InversifyJS
- pnpm (package manager)
- Jest (test runner)

## Installation
Follow these steps to set up the project:

1. Configure environment variables by creating an `.env` file. Refer to the provided `.env.example` in this repository.
2. Configure the database driver used in the schema.prisma file.
3. Install project dependencies by running the command `pnpm install`.
4. Execute the `pnpm setup:project` script to automatically perform tasks like removing unused files, configuring PrismaJS, and setting up Husky.

## Development

### Database
Our project relies on the PrismaJS ORM. Be attentive to migrations and configuration commands. For detailed information, visit [PrismaJS](https://www.prisma.io/).

Whenever you introduce changes to the database schema—such as creating tables or altering columns—run a migration using this command:

```pnpm prisma migrate dev --name name-of-migration```

**Note**: If your environment variable points to a production database, migrations will affect that database. Exercise caution to prevent accidental migrations on the production database.

After migration, update Prisma Client to recognize your new entities. Execute either `pnpm prisma generate` or `pnpm setup:project` to achieve this.

### API
This codebase features a REST API powered by Fastify and a GraphQL API. Feel free to select the one that aligns with your project.

Our system modules rely on Inversify containers. Inversify was chosen for its support of design patterns like dependency injection and type resolution.

To introduce a new module (e.g., user, post, address), follow these steps:
1. Create a folder for the module.
2. Configure the controller, service interfaces, repositories, and use cases.
3. Export everything in an Inversify container with the module's name.
4. Import the module in the `src/container.ts` file.

### Testing and Linting
Our codebase has Husky configured to trigger tests and linting checks with every commit. Ensure you write tests for all your modules and pay attention to ESLint warnings by running the following commands:
- `pnpm test`
- `pnpm lint`
