# React Hooks Learning Project

This project is a comprehensive learning resource for understanding and mastering React Hooks, built with Vite for fast development and optimized builds. It provides practical, interactive examples covering multiple essential React hooks including useState, useEffect, and useRef.

## 🎯 What This Project Covers

The project demonstrates various React hooks through practical, interactive examples:

### useState Hook Examples
- **Counter Component**: Shows state management with numbers and increment/decrement functionality
- **Toggle Component**: Demonstrates boolean state handling for switch-like behavior
- **TextInput Component**: Illustrates controlled inputs with string state management

### useEffect Hook Examples
- **Example Component**: Basic useEffect implementation showing side effects
- **UseEffectExample Component**: Advanced useEffect patterns including cleanup and dependencies

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd my-app
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

## 📁 Project Structure

```
src/
├── App.jsx                    # Main application component
├── main.jsx                  # Application entry point
├── index.css                 # Global styles
├── App.css                   # Application-specific styles
├── assets/                   # Static assets
│   └── react.svg            # React logo
├── Use State Hooks/         # useState hook examples
│   ├── Counter.jsx          # Counter with increment/decrement
│   ├── TextInput.jsx        # Text input state management
│   └── Toggle.jsx           # Boolean toggle functionality
├── Use Effect Hooks/        # useEffect hook examples
│   ├── Example.jsx          # Basic useEffect implementation
│   └── UseEffectExample.jsx # Advanced useEffect patterns
└── Use Ref Hooks/           # Directory for useRef examples (empty)
```

## 🛠️ Available Scripts

- `npm run dev` - Start development server with hot module replacement
- `npm run build` - Build the project for production
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint for code quality checks

## 📚 Learning Objectives

This project helps you understand and master:

### useState Hook
- State management with `useState`
- Different data types (numbers, strings, booleans)
- Controlled vs uncontrolled components
- Event handling in React

### useEffect Hook
- Side effects in functional components
- Component lifecycle management
- Cleanup functions
- Dependency arrays and their impact
- Common useEffect patterns

### General React Concepts
- React component lifecycle
- Functional component patterns
- Best practices for React hooks
- Component composition and organization
- Performance considerations with hooks

## 🔧 Tech Stack

- **React 19** - Latest React version with concurrent features
- **Vite** - Fast build tool and dev server
- **ESLint** - Code linting and formatting
- **Modern JavaScript (ES6+)** - Using latest JS features

## 📖 Hook Examples Details

### useState Examples
- **Counter**: Demonstrates numeric state management with increment and decrement operations
- **TextInput**: Shows controlled input handling with real-time state updates
- **Toggle**: Illustrates boolean state management for on/off functionality

### useEffect Examples
- **Example**: Basic implementation showing component mounting and side effects
- **UseEffectExample**: Advanced patterns including cleanup, dependency management, and API calls

### Future Additions
The project is designed to be extensible. The `Use Ref Hooks/` directory is ready for useRef examples, which could include:
- DOM element references
- Mutable value storage
- Form handling
- Animation control

## 🤝 Contributing

Feel free to contribute by:
- Adding more hook examples (useRef, useMemo, useCallback, custom hooks)
- Improving existing components with better error handling
- Adding comprehensive tests for all hook examples
- Enhancing documentation with more detailed explanations
- Creating interactive demos or visualizations
- Reporting bugs or suggesting new features
- Adding TypeScript support for better type safety

## 🚧 Current Development Status

- ✅ **useState Hook**: Fully implemented with 3 working examples
- ✅ **useEffect Hook**: Implemented with 2 examples demonstrating various patterns
- 🔄 **useRef Hook**: Directory structure ready, examples pending
- 🔄 **useMemo/useCallback**: Planned for future implementation
- 🔄 **Custom Hooks**: Planned for advanced patterns

The project is actively maintained and welcomes contributions to expand the hook examples and improve the learning experience.
