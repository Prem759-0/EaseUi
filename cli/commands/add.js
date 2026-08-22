import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import pc from 'picocolors';
import { execSync } from 'child_process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function copyAndReplaceAliases(src, dest, relativeLibsPath, relativeComponentsPath) {
  const stat = await fs.stat(src);
  if (stat.isDirectory()) {
    await fs.mkdir(dest, { recursive: true });
    const items = await fs.readdir(src);
    for (const item of items) {
      await copyAndReplaceAliases(path.join(src, item), path.join(dest, item), relativeLibsPath, relativeComponentsPath);
    }
  } else if (stat.isFile() && (src.endsWith('.tsx') || src.endsWith('.ts'))) {
    await fs.mkdir(path.dirname(dest), { recursive: true });
    let componentCode = await fs.readFile(src, 'utf-8');
    componentCode = componentCode.replace(/@\/libs?[\/]/g, `@/${relativeLibsPath}/`);
    componentCode = componentCode.replace(/@\/components[\/]/g, `@/${relativeComponentsPath}/`);
    await fs.writeFile(dest, componentCode);
  } else if (stat.isFile()) {
    await fs.mkdir(path.dirname(dest), { recursive: true });
    await fs.copyFile(src, dest);
  }
}

export async function addCommand(componentName) {
  if (!componentName) {
    console.log(pc.red('Please specify a component name. Example: npx easeui add button'));
    process.exit(1);
  }

  // Capitalize component name for the file structure (e.g., button -> Button)
  const nameCapitalized = componentName.charAt(0).toUpperCase() + componentName.slice(1);

  const cwd = process.cwd();
  const easeuiConfigPath = path.join(cwd, 'easeui.json');

  let config;
  try {
    const configData = await fs.readFile(easeuiConfigPath, 'utf-8');
    config = JSON.parse(configData);
  } catch (error) {
    console.log(pc.red(`Could not find easeui.json. Please run ${pc.cyan('npx @prem_gaikwad/easeui init')} first.`));
    process.exit(1);
  }

  const sourceComponentsDir = path.resolve(__dirname, `../../src/components`);
  
  if (componentName.toLowerCase() === 'all') {
    console.log(pc.cyan(`\n→ Installing all components...`));
    try {
      const items = await fs.readdir(sourceComponentsDir, { withFileTypes: true });
      let installedCount = 0;
      
      for (const item of items) {
        if (item.isDirectory() && item.name !== 'Personal') {
          // Recursive copy with alias replacement
          const srcPath = path.join(sourceComponentsDir, item.name);
          const destPath = path.join(cwd, config.components, item.name);
          
          const relativeLibsPath = config.libs.startsWith('src/') ? config.libs.slice(4) : config.libs;
          const relativeComponentsPath = config.components.startsWith('src/') ? config.components.slice(4) : config.components;
          await copyAndReplaceAliases(srcPath, destPath, relativeLibsPath, relativeComponentsPath);
          installedCount++;
          console.log(pc.green(`✔ Added ${pc.bold(item.name)}`));
        } else if (item.isFile() && (item.name.endsWith('.tsx') || item.name.endsWith('.ts'))) {
          const srcPath = path.join(sourceComponentsDir, item.name);
          const destPath = path.join(cwd, config.components, item.name);
          
          const relativeLibsPath = config.libs.startsWith('src/') ? config.libs.slice(4) : config.libs;
          const relativeComponentsPath = config.components.startsWith('src/') ? config.components.slice(4) : config.components;
          await copyAndReplaceAliases(srcPath, destPath, relativeLibsPath, relativeComponentsPath);
          installedCount++;
          console.log(pc.green(`✔ Added ${pc.bold(item.name)}`));
        }
      }
      
      console.log(pc.cyan(`→ Installing required dependencies...`));
      execSync(`npm install @radix-ui/react-slot @radix-ui/react-dropdown-menu @radix-ui/react-label @radix-ui/react-toggle @radix-ui/react-toggle-group @base-ui/react react-aria-components lucide-react embla-carousel-react embla-carousel-autoplay`, { stdio: 'inherit' });
      
      console.log(pc.green(`\n✨ Successfully installed ${installedCount} components!`));
      return;
    } catch (error) {
      console.log(pc.red(`✖ Components were copied, but installing one or more dependencies failed.`));
      console.log(pc.yellow(`Run the dependency command again after restoring network access, then restart your dev server.`));
      console.log(error.message);
      return;
    }
  }

  // Single component installation
  const targetComponentsDir = path.join(cwd, config.components, nameCapitalized);
  await fs.mkdir(targetComponentsDir, { recursive: true });

  const sourceComponentDir = path.resolve(__dirname, `../../src/components/${nameCapitalized}`);

  try {
    const relativeLibsPath = config.libs.startsWith('src/') ? config.libs.slice(4) : config.libs;
    const relativeComponentsPath = config.components.startsWith('src/') ? config.components.slice(4) : config.components;
    await copyAndReplaceAliases(sourceComponentDir, targetComponentsDir, relativeLibsPath, relativeComponentsPath);
    console.log(pc.green(`✔ Added ${pc.bold(nameCapitalized)} component to ${config.components}/${nameCapitalized}`));

    // Helper map for component dependencies
    const componentDependencies = {
      'button': ['@radix-ui/react-slot', 'react-aria-components'],
      'tooltip': ['@base-ui/react'],
      'dropdown-menu': ['@radix-ui/react-dropdown-menu'],
      'label': ['@radix-ui/react-label'],
      'toggle': ['@radix-ui/react-toggle'],
      'toggle-group': ['@radix-ui/react-toggle-group'],
      'card': ['@radix-ui/react-slot'],
      'modal': ['@radix-ui/react-slot'],
      'navbar': ['@radix-ui/react-slot'],
      'input': ['lucide-react']
    };

    const deps = componentDependencies[componentName.toLowerCase()];
    if (deps && deps.length > 0) {
      console.log(pc.cyan(`→ Installing dependencies for ${nameCapitalized}: ${deps.join(', ')}...`));
      execSync(`npm install ${deps.join(' ')}`, { stdio: 'inherit' });
    }

  } catch (error) {
    console.log(pc.red(`✖ Failed to copy component ${nameCapitalized}. Make sure it exists in EaseUI.`));
    console.log(error.message);
  }
}
