# What Do We Need?
A simple webapp built using Angular, Node.js, and MongoDB to keep track of things you need to pick up from various stores. 

## API Routes

| METHODS | URLS | ACTIONS |
| ------- | ------- | -------|
| GET | api/items | Get all Items |
| GET | api/items/:id | Get Item by `id` |
| POST | api/items | Add new Item |
| PUT | api/items/:id | Update Item by `id` |
| DELETE | api/items/:id | Delete Item by `id` |
| DELETE | api/items | Delete all Items |

## Steps for testing app on Linux

- Ensure `mongod` process is running
    - To start: `sudo systemctl start mongod`
    - To check status: `sudo systemctl status mongod`
- In the `server` directory, run `nodemon server.js`
- In the `client` directory, run `ng serve --port 8081`
- The app should now be accessible at [http://localhost:8081/](http://localhost:8081/)

## To-do

- Update `item-details` component to function as a modal
- Update `items-list` component to sort by store
- Add way to mark item as purchased from within `items-list` component
- Add auto-complete functionality when adding new items and stores that have previously been used