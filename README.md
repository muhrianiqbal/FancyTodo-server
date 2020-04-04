# FancyTodo-server
  _Hacktiv8 Phase 2 Project (Fancy Todo)_

  https://documenter.getpostman.com/view/10918255/SzYbxceF

**Dotenv**
```
PORT
KEY
ClientSecret
ClientID
YOUR_API_KEY
```

**Create Todo**

----
* **URL**

  localhost:3000/todos

* **Method:**
  
  `POST`

* **Request body:**
  ```javascript
  {
    "title": "Wake me up",
    "description": "When September ends",
    "status": false
  }
  ```

* **Success Response:**
  
  * **Code:** 201 <br />
    **Content:** 
    ```javascript
    {
      "id": 1,
      "title": "Wake me up",
      "description": "When September ends",
      "status": false,
      "due_date": "2020-10-01",
      "createdAt": "2020-03-30T09:42:02.872Z",
      "updatedAt": "2020-03-30T09:42:02.872Z"
    }
    ```
    
* **Error Response:**

  * **Code:** 400 Bad Request <br />
    **Content:** 
    ```javascript
    {
      "name": "SequelizeValidationError",
      "errors": [
          {
          "message": "Forget the Past",
          "type": "Validation error",
          "path": "due_date",
          "value": "2020-01-01",
          "origin": "FUNCTION",
          "instance": {
              "id": null,
              "title": "Remember",
              "description": "My ex",
              "status": true,
              "due_date": "2020-01-01",
              "updatedAt": "2020-03-30T16:24:20.318Z",
              "createdAt": "2020-03-30T16:24:20.318Z"
          },
          "validatorKey": "isAfter",
          "validatorName": "isAfter",
          "validatorArgs": [
              "Mon Mar 30 2020 23:20:28 GMT+0700 (GMT+07:00)"
          ],
          "original": {
              "validatorName": "isAfter",
              "validatorArgs": [
              "Mon Mar 30 2020 23:20:28 GMT+0700 (GMT+07:00)"
              ]
          }
          }
      ]
    }
    ```

  OR

  * **Code:** 500 Internal Server Error <br />
    **Content:** 
    ```javascript
    { error : "Internal Server Error" }
    ```




**Read Todo**

----
* **URL**

  localhost:3000/todos

* **Method:**
  
  `GET`
  
* **Success Response:**
  
  * **Code:** 200 <br />
    **Content:** 
    ```javascript
    [
      {
        "id": 1,
        "title": "Wake me up",
        "description": "When September ends",
        "status": false,
        "due_date": "2020-10-01",
        "createdAt": "2020-03-30T09:42:02.872Z",
        "updatedAt": "2020-03-30T09:42:02.872Z"
      }
    ]
    ```
    
* **Error Response:**

  * **Code:** 500 Internal Server Error <br />
    **Content:** 
    ```javascript
    { "error" : "Internal Server Error" }
    ```


**Get Todo by ID**

----
* **URL**

  localhost:3000/todos/:id

* **Method:**
  
  `GET`

*  **URL Params**

   **Required:**
 
   `id=[integer]`
  
* **Success Response:**
  
  * **Code:** 200 <br />
    **Content:** 
    ```javascript
    {
      "id": 1,
      "title": "Wake me up",
      "description": "When September ends",
      "status": false,
      "due_date": "2020-10-01",
      "createdAt": "2020-03-30T09:42:02.872Z",
      "updatedAt": "2020-03-30T09:42:02.872Z"
    }
    ```
    
* **Error Response:**

  * **Code:** 404 Not Found <br />
    **Content:** 
    ```javascript
    { "error": "Data not found" }
    ```

  OR

  * **Code:** 500 Internal Server Error <br />
    **Content:** 
    ```javascript
    { "error" : "Internal Server Error" }
    ```


**Update Todo**

----
* **URL**

  localhost:3000/todos/:id

* **Method:**
  
  `GET`

*  **URL Params**

   **Required:**
 
   `id=[integer]`

* **Request body:**
  ```javascript
  {
    "title": "Wake me up",
    "description": "When September ends",
    "status": true
  }
  ```

* **Success Response:**
  
  * **Code:** 200 <br />
    **Content:** 
    ```javascript
    {
      "id": 1,
      "title": "Wake me up",
      "description": "When September ends",
      "status": true,
      "due_date": "2020-10-01",
      "createdAt": "2020-03-30T09:42:02.872Z",
      "updatedAt": "2020-03-30T09:42:02.872Z"
    }
    ```
    
* **Error Response:**

  * **Code:** 400 Bad Request <br />
    **Content:** 
    ```javascript
    {
      "name": "SequelizeValidationError",
      "errors": [
          {
          "message": "Forget the Past",
          "type": "Validation error",
          "path": "due_date",
          "value": "2020-01-01",
          "origin": "FUNCTION",
          "instance": {
              "id": null,
              "title": "Remember",
              "description": "My ex",
              "status": true,
              "due_date": "2020-01-01",
              "updatedAt": "2020-03-30T16:24:20.318Z",
              "createdAt": "2020-03-30T16:24:20.318Z"
          },
          "validatorKey": "isAfter",
          "validatorName": "isAfter",
          "validatorArgs": [
              "Mon Mar 30 2020 23:20:28 GMT+0700 (GMT+07:00)"
          ],
          "original": {
              "validatorName": "isAfter",
              "validatorArgs": [
              "Mon Mar 30 2020 23:20:28 GMT+0700 (GMT+07:00)"
              ]
          }
          }
      ]
    }
    ```

  OR

  * **Code:** 404 Not Found <br />
    **Content:** 
    ```javascript
    { "error": "Data not found" }
    ```

  OR

  * **Code:** 500 Internal Server Error <br />
    **Content:** 
    ```javascript
    { error : "Internal Server Error" }
    ```


**Delete Todo**

----
* **URL**

  localhost:3000/todos/:id

* **Method:**
  
  `DELETE`

*  **URL Params**

   **Required:**
 
   `id=[integer]`
  
* **Success Response:**
  
  * **Code:** 200 <br />
    **Content:** 
    ```javascript
    {
        "id": 1,
        "title": "Wake me up",
        "description": "When September ends",
        "status": false,
        "due_date": "2020-10-01",
        "createdAt": "2020-03-30T09:42:02.872Z",
        "updatedAt": "2020-03-30T09:42:02.872Z"
      }
    ```
    
* **Error Response:**

  * **Code:** 404 Not Found <br />
    **Content:** 
    ```javascript
    { "error": "Data not found" }
    ```

  OR

  * **Code:** 500 Internal Server Error <br />
    **Content:** 
    ```javascript
    { "error" : "Internal Server Error" }
    ```