[![GitHub License](https://img.shields.io/github/license/nicklima/nextjs-finance-dashboard?style=flat-square)](https://github.com/nicklima/nextjs-finance-dashboard/blob/main/LICENSE)
[![ISSUES](https://img.shields.io/github/issues/nicklima/nextjs-finance-dashboard?style=flat-square)](https://github.com/nicklima/nextjs-finance-dashboard/issues)

# React - Finance Dashboard App

React Fullstack Finance Dashboard App developed with Next.JS + Prisma

## Credits

- [Layout](#)
- [NextJs and Prisma inspiration](#)

## Preview

[Click here](#) to view the code runing or [click here to play with the code](#) in the sandbox.

## Run the code on your local machine

Clone the repo

```bash

git clone git@github.com:nicklima/nextjs-finance-dashboard.git

```

Install all dependencies

```bash

yarn

```

Create a dotenv file (.env) to define the database connection URL and sensitive info as environment variables

```bash

DATABASE_URL="mysql://USERNAME:PASSWORD@HOST_URL/DATABASE_NAME?schema=public"

```

Create the TABLES in your DATABASE based on your Prisma schema.

```bash

npx prisma db push

```

Generete Prisma Client

```bash

yarn client

```

Run in localhost

```bash

yarn dev

```

## TODO

Here are some features that i want to add. If you want to help, send me a PR

- [ ] TODO ITEM
- [ ] TODO ITEM
- [ ] TODO ITEM

## License

MIT © [Nick Lima](https://github.com/nicklima)
