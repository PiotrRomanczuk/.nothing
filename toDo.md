<!--

Back-End:

All routes for SQL for notes && users + test for all the routes

Logger:
    config the error logs

Rest API:
    POST /signup: Registering a new user
    GET /user: Retrieving a user’s profile (restricted to the user themselves)
    PATCH /users/:userId: Updating a user’s profile (restricted to the user themselves)
    GET /users/all: Retrieving all users (available to all users)
    PATCH /user/change-role/:userId: Updating a user’s role (restricted to admins)
    DELETE /user/:userId: Deleting a user (restricted to admins) 

    POST /login: Logging in

Create relationship between all of the above

Front-End:

    Clerk.com - authentication and authorization

Caching the token

Chat:
    audio/video and messenger

-->