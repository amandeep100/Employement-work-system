localStorage.clear()

const employees = [
  {
    "id": 1,
    "firstName": "Aman",
    "email": "employee1@example.com",
    "password": "123",
    "taskNumber": {
      "active": 2,
      "newTask": 1,
      "completed": 1,
      "failed": 1
    },
    "tasks": [
      {
        "title": "UI Design",
        "description": "Design login page UI",
        "date": "2026-03-20",
        "category": "Design",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "title": "Bug Fix",
        "description": "Fix navbar issue",
        "date": "2026-03-18",
        "category": "Development",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      },
      {
        "title": "API Integration",
        "description": "Integrate login API",
        "date": "2026-03-22",
        "category": "Backend",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": true
      }
    ]
  },
  {
    "id": 2,
    "firstName": "Rahul",
    "email": "employee2@example.com",
    "password": "123",
    "taskNumber": {
      "active": 2,
      "newTask": 1,
      "completed": 1,
      "failed": 1
    },
    "tasks": [
      {
        "title": "Dashboard UI",
        "description": "Create dashboard layout",
        "date": "2026-03-21",
        "category": "Design",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "title": "Auth System",
        "description": "Implement authentication",
        "date": "2026-03-19",
        "category": "Backend",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      },
      {
        "title": "Testing",
        "description": "Write unit tests",
        "date": "2026-03-17",
        "category": "QA",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      },
      {
        "title": "Bug Fix",
        "description": "Resolve login error",
        "date": "2026-03-16",
        "category": "Development",
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true
      }
    ]
  },
  {
    "id": 3,
    "firstName": "Priya",
    "email": "employee3@example.com",
    "password": "123",
    "taskNumber": {
      "active": 3,
      "newTask": 1,
      "completed": 2,
      "failed": 1
    },
    "tasks": [/* same as before */]
  },
  {
    "id": 4,
    "firstName": "Neha",
    "email": "employee4@example.com",
    "password": "123",
    "taskNumber": {
      "active": 2,
      "newTask": 1,
      "completed": 1,
      "failed": 1
    },
    "tasks": [/* same as before */]
  },
  {
    "id": 5,
    "firstName": "Vikram",
    "email": "employee5@example.com",
    "password": "123",
    "taskNumber": {
      "active": 3,
      "newTask": 1,
      "completed": 1,
      "failed": 1
    },
    "tasks": [/* same as before */]
  }
];

const admin = [{
  "id": 1,
  "email": "admin@example.com",
  "password": "123"
}];


export const setLocalStorage= () =>{
 localStorage.setItem('employees', JSON.stringify(employees))
localStorage.setItem('admin',JSON.stringify(admin))
}
 
export const getLocalStorage = ()=> {
const employees = JSON.parse(localStorage.getItem('employees'))
const admin = JSON.parse(localStorage.getItem('admin'))
  return {employees,admin}
}

// export default localStorage;