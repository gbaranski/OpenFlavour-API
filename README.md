# Flavors API

API Server for e-cig flavors

# Info

- Supports searching by only part of name, for e.g searching string 'cucum' will find 'cucumber'
- Scrapers can be found there https://github.com/gbaranski/OpenFlavour-Scraper
# Guide
Install MongoDB
Start it, for MacOS it will be 
```
brew services start mongodb-community
```
Then do
```
git clone https://github.com/gbaranski/OpenFlavour-API.git
cd OpenFlavour-API/
npm install
```
And when thats done, start server using
```
npm start
```
Now use scrapers here from here https://github.com/gbaranski/OpenFlavour-Scraper to add flavours into database.


# Get data by manufacturer

```
GET /byManufacturer
```

Query params:

- key: String

Respone

```
Array
  - _id: ObjectId
  - manufacturer: String
  - name: String
  - __v: number
```

Example

```
GET /api/byManufacturer?key=TPA

[
  {
    "_id": "5ede18bab6b166195109b2a6",
    "manufacturer": "TPA",
    "name": "cucumber",
    "__v": 0
  },
  {
    "_id": "5ede2eefb6b166195109b2a7",
    "manufacturer": "TPA",
    "name": "strawberry",
    "__v": 0
  },
]
```

# Get data by name

```
GET /api/byName
```

Query params:

- key: String

Respone

```
Array
  - _id: ObjectId
  - manufacturer: String
  - name: String
  - __v: number
```

Example

```
GET /api/byName?key=cucumber

[
  {
    "_id": "5ede18bab6b166195109b2a6",
    "manufacturer": "TPA",
    "name": "cucumber",
    "__v": 0
  },
]
```
# Get all data
```
GET /api/findAll
```
Example

```
GET /api/findAll

[
  {
    "_id": "5ede18bab6b166195109b2a6",
    "manufacturer": "TPA",
    "name": "cucumber",
    "__v": 0
  },
  {
    "_id": "5ede2eefb6b166195109b2a7",
    "manufacturer": "TPA",
    "name": "strawberry",
    "__v": 0
  },
]
```

Response 
```
Array
  - _id: ObjectId
  - manufacturer: String
  - name: String
  - __v: number
```

# Post data
```
POST /api/addFlavour
```
Example

```
POST /api/addFlavour

Headers
Content-Type: application/json
token: YOUR TOKEN IN src/database/private/tokens.ts

Body:
[
  {
    "manufacturer": "TPA",
    "name": "cucumber",
  },
  {
    "manufacturer": "TPA",
    "name": "strawberry",
  },
]
```

Response 

```
Array
  - _id: ObjectId
  - manufacturer: String
  - name: String
  - __v: number
```

# Database structure

```
  - MongoDB
    - openFlavours DB
      - flavours Collection
        - Array[_id, manufacturer, name, __v]
```
