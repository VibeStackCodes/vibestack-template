# React + Vite + TypeScript SPA Template

A modern, production-ready app built with React, Vite, TypeScript, and Tailwind CSS.

## ✨ Features

- ⚡ **Vite 7** - Lightning fast build tool
- ⚛️ **React 19** - Latest React with TypeScript
- 🎨 **Tailwind CSS v4** - Modern utility-first CSS
- 🧩 **shadcn/ui** - Beautiful, accessible components
- 🔄 **React Router v7** - Client-side routing with code splitting
- 🗄️ **Zustand** - Lightweight state management
- 🔌 **TanStack React Query** - Powerful data fetching
- 🎯 **TypeScript** - Full type safety
- 🛠️ **ESLint + Prettier** - Code quality and formatting
- 🚨 **Error Boundary** - Graceful error handling
- 📦 **Lightweight API Client** - Native fetch wrapper (0KB overhead)

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📁 Project Structure

```
template-setup/
├── public/              # Static assets
├── src/
│   ├── components/      # React components
│   │   ├── ui/         # shadcn/ui components
│   │   └── ...         # Feature components
│   ├── hooks/          # Custom React hooks
│   ├── lib/            # Utilities and helpers
│   │   ├── api-client.ts    # HTTP client
│   │   ├── env.ts           # Environment variables
│   │   └── react-query.tsx  # React Query setup
│   ├── pages/          # Page components
│   ├── routes/         # Route definitions
│   ├── stores/         # Zustand stores
│   ├── App.tsx         # Main app component
│   └── main.tsx        # Entry point
├── .github/            # GitHub workflows and configs
├── scripts/            # Utility scripts
└── package.json
```

## 🛠️ Tech Stack

### Core
- **React 19.2.0** - UI library
- **Vite 7.2.2** - Build tool
- **TypeScript 5.9.3** - Type safety
- **Tailwind CSS 4.1.17** - Styling

### State & Data
- **Zustand 5.0.8** - Client state management
- **TanStack React Query 5.90.8** - Server state & data fetching
- **React Router 7.9.5** - Routing

### UI Components
- **shadcn/ui** - Component library (53+ components)
- **lucide-react** - Icon library
- **Radix UI** - Accessible primitives

### Development
- **ESLint 9.39.1** - Linting
- **Prettier 3.6.2** - Code formatting
- **TypeScript ESLint** - TypeScript linting

## 📝 Available Scripts

```bash
npm run dev          # Start dev server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint
npm run lint:fix     # Fix ESLint errors
npm run format       # Format code with Prettier
npm run format:check # Check code formatting
npm run check-updates # Check for dependency updates
npm run update-deps  # Update all dependencies
```

## 🎯 Key Features Explained

### Routing
Routes are defined in `src/routes/index.tsx` with automatic code splitting. See [routes/README.md](src/routes/README.md) for details.

### State Management
- **Zustand**: Client-side state (UI, filters, preferences)
- **React Query**: Server state (API data, caching, mutations)

See [stores/README.md](src/stores/README.md) and [hooks/README.md](src/hooks/README.md) for usage.

### API Client
Lightweight fetch wrapper with zero dependencies. See [lib/README.md](src/lib/README.md) for examples.

### Error Handling
Error Boundary component catches React errors gracefully. Configured in `src/components/error-boundary.tsx`.

## 🔧 Configuration

### Environment Variables
Create a `.env` file (see `.env.example`):

```env
VITE_API_BASE_URL=http://localhost:3000/api
VITE_APP_NAME=My App
```

Access via `src/lib/env.ts`:

```typescript
import { env } from '@/lib/env'
const apiUrl = env.apiBaseURL
```

### Path Aliases
TypeScript path aliases are configured:
- `@/` → `src/`

### Tailwind CSS
Configured with shadcn/ui theme. Customize in `src/index.css` using `@theme` directive.

## 📦 Dependency Updates

This template uses automated dependency updates via Dependabot. See [DEPENDENCY_UPDATES.md](DEPENDENCY_UPDATES.md) for details.

## 🏗️ Building for Production

```bash
npm run build
```

Outputs to `dist/` directory with:
- Code splitting (routes as separate chunks)
- Tree shaking
- Minification
- Asset optimization

## 📚 Documentation

- [Routing Guide](src/routes/README.md)
- [State Management](src/stores/README.md)
- [Data Fetching](src/hooks/README.md)
- [API Client](src/lib/README.md)
- [Dependency Updates](DEPENDENCY_UPDATES.md)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run `npm run lint` and `npm run format`
5. Submit a pull request

## 📄 License

MIT License - see [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Vite](https://vitejs.dev/)
- [React](https://react.dev/)
- [shadcn/ui](https://ui.shadcn.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Zustand](https://zustand-demo.pmnd.rs/)
- [TanStack Query](https://tanstack.com/query)

---

Built with ❤️ by VibeStack

