 
# Community Page Frontend

A simple React application to simulate a community page with post creation and comment functionalities. This is a frontend-only application built with React and TypeScript.

## Features
- Create a new post.
- Add comments under posts.
- Support for nested comments (replies to comments).
- Display mock data for posts and comments.
  
## Technologies Used
- **React** - JavaScript library for building user interfaces.
- **TypeScript** - Typed superset of JavaScript for type safety.
- **Material-UI** - A popular React UI framework for building beautiful components.
- **SCSS** - For styling (optional if you want to use custom styles).
  
## Installation

To get started with this project, follow these steps:

### 1. Clone the repository
```bash
git clone https://github.com/yaredaddisu/community-page.git
```

### 2. Install dependencies
Navigate to the project directory and install the required packages:

```bash
cd community-page
npm install
```

or if you are using yarn:

```bash
yarn install
```

 
 
This will run the application in development mode. Open `http://localhost:5173/` to view it in the browser.

## Folder Structure
Here’s an overview of the folder structure:
 
/community-page
  ├── /src
  │    ├── /components
  │    │   ├── Post.tsx
  │    │   ├── Comment.tsx
  │    │    
  │    ├── /data
  │    │   └── mockData.ts
  │    ├── /styles
  │    │   └── main.scss (or styles.css)
  │    ├── App.tsx
  │    └── index.tsx
  ├── /public
  │    └── index.html
  ├── package.json
  ├── tsconfig.json
  └── README.md
```

### src/components
Contains React components for posts and comments, including `PostComponent.tsx` and `CommentComponent.tsx`.

### src/data
Holds mock data like posts and comments for the application.

### src/styles
Contains the CSS or SCSS files for styling your components.

### src/App.tsx
The main file for the root component that ties together the entire application.

### src/index.tsx
The entry point for the React application.

## How to Use

1. **Create a New Post:**
   - Type your content in the input field labeled "Create a new post..."
   - Click on the "Post" button to add it to the list.

2. **Add Comments:**
   - To comment under a post, type your comment in the input field below the post and click the "Comment" button.

3. **Reply to Comments (Nested Comments):**
   - You can add replies to any existing comment by typing in the nested input field and clicking the "Comment" button.

## Code Quality and Best Practices
- **Modular Components:** The codebase follows a modular structure by creating separate components for posts and comments.
- **TypeScript:** The application uses TypeScript for type safety, ensuring better maintainability and fewer errors.
- **Material-UI Components:** We use Material-UI for consistent styling and modern UI elements.
  
## Evaluation Criteria
This project will be evaluated on:
- Code readability, modularity, and maintainability.
- Proper usage of TypeScript for type safety.
- User interface and user experience.
- Best practices for organizing components, handling state, and managing the app structure.

 
## Contact
If you have any questions or suggestions, feel free to reach out at [yaredaddisu1997@gmail.com].

 