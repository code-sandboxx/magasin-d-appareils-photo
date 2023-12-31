# Pro-Photo: A React-based Camera Shop Simulation with Live and Static Data Options

This project, Pro-Photo, is a camera shop simulation developed using React. It serves as a tool for understanding the operations of an online store and exploring how to manipulate data within the application. 

*Pro-Photo comes in two versions: Static Data Version and Live Data Version (JSON Server).*

 **This is the live Data Version (CRUD Operations):** 
 
 In this variant, the application holds product data in a local variable and showcases six products on the catalogue page. Users can add, delete, and modify existing product entries using dedicated buttons and a form. However, these changes do not persist across page reloads.

---

## Getting Started

To get a copy of this project on your local machine, clone the repository:

    git clone https://github.com/code-sandboxx/magasin-d-appareils-photo.git

Switch to the correct branch: 

      git checkout json-server-version

Once you are in the root folder, install dependencies:

      npm install

Run the backend server:

      npm run server


Run the frontend server:

      npm start

Build the optimized version of the project (optional):

      npm run build

To launch the build version:

To run the build version of the application, make sure the backend server is running, and then use the following command:

    npx serve -s build -p 8000

### Prerequisites

+ Node.js
+ npm
+ Code editor
