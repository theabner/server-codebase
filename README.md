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

ATTENTION: if your environment variable is set pointing to a production database the migration will be run on it.

After running the migration, you must update prismaClient so that it recognizes your new entities. To do this, you can type the command `pnpm prisma generate` or the command `pnpm setup:project`
