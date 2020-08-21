CRUD Operations
---------------

1) download and install MongoDB

    - MongoDB is the NoSQL DataBase.

    - MongoDB Supports JSON.

    - MongoDB is the light weight DataBase.

    - As a "MongoDB" Developer we can perform CRUD Operations on JSON.

    - MongoDB follows the "mongodb" protocol.

    - by default MongoDB running on port no.27017

    - MongoDB follows the "client server" architecture.

    website : https://www.mongodb.com/dr/fastdl.mongodb.org/windows/mongodb-windows-x86_64-4.4.0-signed.msi/download


2) create the following directory structure

        c:/data/db

        - above directory structure used to maintain the "data backup".

3) set the path environmental variable

    path = C:\Program Files\MongoDB\Server\4.2\bin


4) create the DataBase in MongoDB


Queries
-------
> mongod
    - mongod is used to start the server.

> mongo
    - it is used to connect to server.

> use online;
    - automatically "online" DataBase will be created and switches also.

> db.createCollection("employees");
    - automatically we are able to create employees collection.

> db.employees.insert({"firstName":"naresh",
                       "lastName":"IT",
                       "email":"hr@gmail.com",
                       "phone":12345});
        - automatically record will be inserted into DataBase.

> db.employees.find();
        - automatically we can fetch the data from employees collection

*******************************************
host  : localhost

protocol  : mongodb

port   : 27017

database  : online

collection : employees
*******************************************


5) create the directory (folder)

    Ex.
            server

6) switch to server directory

    > cd server

7) download the node modules

    => express

    => mongodb@2.2.32

    => body-parser

    => cors

    - express module used to develop the rest apis

            GET
            POST
            PUT
            DELETE

    - "mongodb@2.2.32" module used to interact with the "mongodb" database.

    - "body-parser" module used to read the "client data".
    
    - "cors" module used to enable the ports communication.


    > yarn add express mongodb@2.2.32 body-parser cors --save

8) develop the rest apis by using NodeJS


*******************************
server
    fetch
        fetch.js
    insert
        insert.js
    update
        update.js
    delete
        delete.js
    server.js
********************************

    - "fetch.js" file ued to create the GET Request (get the data from employees collection)

    - "insert.js" file used to create the POST Request  (insert the data into employees collection)

    - "update.js" file used to create the PUT Request  (update the data present in "employees" collection)

    - "delete.js" file used to create the DELETE Request  (delete the data from "employees" collection)

    - "server.js" file used to collabrate the above modules.













