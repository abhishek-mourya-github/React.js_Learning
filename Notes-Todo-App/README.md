# Notes & Todo App

A modern React application for managing notes and todo lists with persistent storage using localStorage.

## Features

### 📝 Notes Management
- Create, edit, and delete notes
- Persistent storage using localStorage
- Clean, intuitive interface
- Timestamp tracking for each note

### ✅ Todo List Management
- Add, edit, and delete tasks
- Mark tasks as complete/incomplete
- Separate sections for pending and completed tasks
- Task counter and progress tracking
- Persistent storage using localStorage

### 🎨 Modern UI
- Responsive design with Tailwind CSS
- Clean and modern interface
- Smooth transitions and hover effects
- Mobile-friendly layout

## Getting Started

### Prerequisites
- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd Notes-Todo-App
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## Usage

### Notes Page
- Navigate to the Notes page using the navigation menu
- Use the form on the left to add new notes
- View all your notes in the main area
- Click "Edit" to modify existing notes
- Click "Delete" to remove notes
- All notes are automatically saved to localStorage

### Todo Page
- Navigate to the Todo page using the navigation menu
- Use the form on the left to add new tasks
- Check the checkbox to mark tasks as complete
- Edit tasks by clicking the edit button
- Delete tasks using the delete button
- View task statistics (total, pending, completed)
- All todos are automatically saved to localStorage

## Technology Stack

- **React 19** - Frontend framework
- **React Router DOM** - Client-side routing
- **Tailwind CSS** - Styling and responsive design
- **localStorage** - Data persistence
- **Vite** - Build tool and development server

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Header.jsx      # Navigation header
│   └── Footer.jsx      # Footer component
├── contexts/           # React Context providers
│   ├── NotesContext.jsx # Notes state management
│   └── TodosContext.jsx # Todos state management
├── features/           # Feature-specific components
│   ├── notes/          # Notes feature components
│   │   ├── NotesPage.jsx
│   │   ├── NotesForm.jsx
│   │   ├── NotesList.jsx
│   │   └── NoteItem.jsx
│   └── todos/          # Todos feature components
│       ├── TodoPage.jsx
│       ├── TodoForm.jsx
│       ├── TodoList.jsx
│       └── TodoItem.jsx
├── Layout.jsx          # Main layout component
├── App.jsx            # Root component
└── main.jsx           # Application entry point
```

## Data Storage

The application uses browser localStorage to persist data:
- Notes are stored under the key `'notes'`
- Todos are stored under the key `'todos'`
- Data is automatically saved when changes are made
- Data persists across browser sessions

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).