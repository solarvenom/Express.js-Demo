## Running the app
You are welcome to edit `.env` in the root of the project to assign whatever ports are available on your machine for app's docker containers.

The just spin up the containers:
```bash
$  docker-compose up -d
```
After you verify both app and db containers are running, you are welcome to visit `${host}:${port}/api-docs` to play around with the endpoints with swagger.

But first populate the db with a set of guests, properties and reservations by sending a `Get` request to the `${host}:${port}/seed` endpoint directly from swagger.

After this you are free to play with the api however you like.  
