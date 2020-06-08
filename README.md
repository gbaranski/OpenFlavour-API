# Flavors API
API Server for e-cig flavors
# Info
- Supports searching by only part of name, for e.g searching string 'cucum' will find 'cucumber'
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
```

Example
```
GET /byManufacturer?key=TPA

[
  {
    "_id": "5ede18bab6b166195109b2a6",
    "manufacturer": "TPA",
    "name": "cucumber"
  },
  {
    "_id": "5ede2eefb6b166195109b2a7",
    "manufacturer": "TPA",
    "name": "strawberry"
  },
]
```

# Get data by name
```
GET /byName
```
Query params: 
- key: String

Respone
```
Array 
  - _id: ObjectId
  - manufacturer: String
  - name: String
```

Example
```
GET /byName?key=cucumber

[
  {
    "_id": "5ede18bab6b166195109b2a6",
    "manufacturer": "TPA",
    "name": "cucumber"
  },
]
```

# Database structure
```
  - MongoDB
    - Database flavors
      - Collection test
        - Array[_id, manufacturer, name]
```
