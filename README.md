## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# load Artillery test
$ npm run test:artillery

# Generate Artillery HTML report
# HTML reports can be found in test/reports
$ npm run test:artillery:report
```
## Using

- run docker-compose file or add credetials of existing DB to .env
- start app
- go to http://localhost:3000/api and try POST /seed to add 10_000_000 random documents to DB
- you can search for document using GET documents/search
- run test:artillery and test:artillery:report to make load test WITHOUT index in DB
- add index to DB uncomment DataSchema.index({ name: 1 }) in src/documents/schemas/document.schema.ts and restart the app
- run test:artillery and test:artillery:report to make load test WITH index in DB