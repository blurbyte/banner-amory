# Banner Armnory

GraphQL API & React front-end.

## Monorepo structure

* tools - contains base configs for jest, tslint, typescript and prettier
* api - GraphQL API server
* web - React frontend

### Important note

Install dev dependencies only in __tools__ directory (such as utility libraries as rimraf, linters, etc.).

In __api__ and __web__ add only _regular_ dependencies (like react or graphql).
