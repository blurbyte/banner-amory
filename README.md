# Banner Armory

The Banner Sagas' armory.

Check [interactive Invision prototype](https://invis.io/8TL5GIH5SC4)

## Monorepo structure

* _tools_ - contains base configs for jest, tslint, typescript and prettier
* _api_ - GraphQL API server
* _web_ - React frontend

### Important note

Install dev dependencies (such as utility libraries, linters, bundlers, etc.) and types definitions (@types) only in __tools__ directory. In __api__ and __web__ add only _regular_ dependencies (like react or graphql).
