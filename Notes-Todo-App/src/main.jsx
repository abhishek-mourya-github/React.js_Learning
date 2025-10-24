import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Layout from './Layout';
import NotesPage from './features/notes/NotesPage';
import TodoPage from './features/todos/TodoPage';
import { NotesProvider } from './contexts/NotesContext';
import { TodosProvider } from './contexts/TodosContext';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<NotesPage />}/>
      <Route path='todos' element={<TodoPage />}/>
    </Route>
  )
)


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <NotesProvider>
      <TodosProvider>
        <RouterProvider router={router} />
      </TodosProvider>
    </NotesProvider>
  </StrictMode>,
)
