# server-codebase

## Motivation
This codebase was created to be used in the development of any nodeJS server in an easy way without having to configure the frameworks every time.

#### The main frameworks used are:
- Fastfy
- Graphql
- PrismaJS
- InversifyJS
- pnpm (package manager)
- Jest (test runner)

  
## Instalation
- First you need to configure the environment variables by creating an .env file following the example of the .env.evample file in this repository.
- Then you must run the `pnpm install` command to install the project's dependencies.
- Then you can run the `pnpm setup:project` script and the project will automatically delete unused files, configure prismaJS and husky.

## Development

#### Database:
This project was created using the prismaJS ORM, so we must pay attention to the framework's migrations and configuration commands. For more information visit [PrismaJS](https://https://www.prisma.io/).

Whenever you create a new table, change a column or make any changes to the database schema, you must run a migration with the following command:

``pnpm prisma migrate dev --name name-of-migration``

ATTENTION: if your environment variable is set to point to a production database, the migration will run on that database, so be careful not to run a migration on the production database by accident.

After running the migration, you must update prismaClient so that it recognizes your new entities. To do this, you can type the command `pnpm prisma generate` or the command `pnpm setup:project`

#### API:
This codebase has a rest api configured with fastify and also a graphql api. Feel free to use the one that best fits your project.

The system modules are created with inversify containers.
Inversify was chosen for some design pattern reasons such as dependency injections and type resolution.

To create a new module such as user, post, address, or any other, simply create the folder, configure the controller, the interfaces for services, repositories and use cases, and export everything in an `inversify container` with the name of the module. then simply go to the `src/container.ts` file and import the module there.

#### Test and Lint:
This codebase has been configured to run test and lint checks with husky whenever a commit is sent, so write tests for all your modules and watch out for eslint warnings by running the `pnpm test` and `pnpm lint` commands.

