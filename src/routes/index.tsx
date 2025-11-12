import { createBrowserRouter } from 'react-router-dom'
import App from '@/App'

/**
 * Application routes
 * Add new routes here for code splitting
 */
export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: (
          <div className="flex min-h-screen items-center justify-center">
            <p className="text-muted-foreground">Start building your app</p>
          </div>
        ),
      },
    ],
  },
])
