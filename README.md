# EaseUI

**EaseUI** is a collection of beautifully designed, accessible, and customizable React components. Built with Tailwind CSS and Radix UI/Base UI, these components are distributed via a CLI, meaning you own the code. 

Just like Shadcn UI, this is **not a component library** that you install via npm as a dependency. Instead, you use the CLI to add the components you need directly into your project's source code, allowing you to customize them to your heart's content.

---

## 🚀 Getting Started

Follow these steps to set up EaseUI in a fresh React project. We will use Vite for this guide.

### 1. Create a new React project

Start by creating a new Vite project with React and TypeScript:

```bash
npm create vite@latest my-app -- --template react-ts
cd my-app
npm install
```

### 2. Install Tailwind CSS

EaseUI uses Tailwind CSS v4 with Vite. Do not run `npx tailwindcss init -p`: that command belongs to the Tailwind v3 workflow, so it does not create `tailwind.config.js` in Tailwind v4.

```bash
npm install tailwindcss @tailwindcss/vite
```

Add the Tailwind import to your global CSS file (e.g., `src/index.css`):

```css
@import "tailwindcss";

@custom-variant dark (&:where(.dark, .dark *));
```

### 3. Configure Path Aliases

EaseUI uses path aliases (like `@/components` and `@/libs`) to ensure imports never break regardless of where you place the components.

**First, update `tsconfig.app.json` (or `tsconfig.json`):**

```json
{
  "compilerOptions": {
    // ... other options
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"],
      "@/components/*": ["./src/components/*"],
      "@/libs/*": ["./src/libs/*"]
    }
  }
}
```
> **Note**: If you see a warning about `baseUrl` being deprecated in TypeScript 6.0/7.0, you can safely ignore it for now or use the `ignoreDeprecations` flag, as this is currently required by many bundlers for path resolution.

**Second, update `vite.config.ts`:**
You will need to install Node types first: `npm install -D @types/node`

```typescript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from "path"

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
```

---

## 🛠️ Initialization

Now that your project is ready, initialize EaseUI. This command will set up your `easeui.json` configuration file, inject required CSS variables, and install essential utilities (like `cn` for Tailwind class merging).

```bash
npx @prem_gaikwad/easeui@latest init
```

You will be asked a few questions to configure your project:

```txt
Where would you like to install components? (default: src/components/easeui)
Where would you like to put utility and animation files? (default: src/libs)
Where is your global CSS file? (default: src/index.css)
```

The CLI will automatically install dependencies like `clsx`, `tailwind-merge`, and `framer-motion`.

---

## 📦 Adding Components

You can now start adding components to your project!

### Adding a specific component

To add a specific component, run the `add` command followed by the component name. The CLI will automatically resolve the component and install any required third-party dependencies (like Radix UI primitives or Lucide icons).

```bash
npx @prem_gaikwad/easeui@latest add button
npx @prem_gaikwad/easeui@latest add modal
```

The CLI copies the source code into the component folder selected during initialization. With the default folder, import an added button like this (do not import it from `@prem_gaikwad/easeui`):

```tsx
import { Button } from "@/components/easeui/Button";

export function ButtonDemo() {
  return <Button variant="primary">Primary</Button>;
}
```

### Test your first component

The component preview in this documentation site is already running with Tailwind CSS and EaseUI's global styles. To see the same result in a new app, replace `src/App.tsx` after running `init` and `add button`:

```tsx
import { Button } from "@/components/easeui/Button";

export default function App() {
  return (
    <main className="p-8">
      <Button variant="primary">Click me</Button>
    </main>
  );
}
```

Then run `npm run dev`. If the button appears unstyled, restart the dev server after editing `vite.config.ts` or `src/index.css`, and make sure `src/main.tsx` still includes `import "./index.css"`.

### Adding all components

If you want to explore everything EaseUI has to offer, you can install the entire component library at once:

```bash
npx @prem_gaikwad/easeui@latest add all
```

This will recursively copy all components, adjust all internal import paths to match your `easeui.json` configuration, and install every necessary peer dependency.

---

## 🔍 Features & Architecture

EaseUI is built to be robust and developer-friendly:

- **Intelligent Dependency Management**: When you add a component, the CLI scans it and automatically installs necessary packages like `@radix-ui/react-tooltip`, `@base-ui/react`, or `lucide-react`.
- **Dynamic Import Resolution**: Whether you choose to put your utilities in `src/libs` or `src/lib`, the CLI dynamically rewrites component imports (e.g., `import { cn } from "@/libs/utils"`) during installation.
- **RTL & Localization Support**: Components like `Tooltip` and `Carousel` include built-in Right-To-Left (RTL) support utilizing the distributed `language-selector.tsx` utility.
- **Multi-file Components**: The CLI intelligently processes standalone files and full directories, ensuring complex components (like Inputs with multiple variants) are installed flawlessly with their `index.ts` files preserved.

Enjoy building beautiful interfaces with EaseUI!
