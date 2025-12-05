<b>APIs to Implement</b>
<br>

<b>1.Register API</b><br>
    
    register.js
    User.js
    db.js

<b>2.Login API</b><br>

    login.js

<b>3.Get User Details API</b><br>

    get.js
    middleware.js


🛠️<b>API Setup Instructions & Assumptions</b>
This document provides setup requirements, assumptions, and usage guidelines for the Authentication API defined in the API Contract. The API supports user registration, login, and JWT-based authentication, with optional role-based access.


🚀 <b>Overview</b>
This API handles:
    .User registration
    .User login with JWT issuance
    .Retrieving authenticated user details
    .Optional role-based access control


<b>Live API Base URL:</b>


📦 <b>Prerequisites & Assumptions</b>
Before running or integrating with this API, the following assumptions apply:

<b>Environment Assumptions</b>
    .You have a backend environment capable of issuing and validating JWT tokens.
    .Environment variables (e.g., JWT_SECRET, database URLs) are correctly configured.
    .HTTPS is enabled in production to protect token-based authentication.

<b>User & Role Assumptions</b>
    .User passwords are hashed before storage.
    .Roles (e.g., Admin, User) may be added later; default behavior assumes all users      share the same permission level unless role-based logic is implemented.

<b>Token Assumptions</b>
    .JWT tokens expire after 1 hour, unless otherwise configured.
    .Requests to protected endpoints must include a Bearer token in the Authorization      header.


🔧 <b>Setup Instructions</b>
1. Clone the Repository
   ```git clone https://github.com/your-org/your-api-repo.git```
   ```cd your-api-repo```

2. Install Dependencies
   ```npm install```

3.Start the Server
    ```node filename.js```




