import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import pc from 'picocolors';
import { execSync } from 'child_process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

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
          // Recursive copy
          const srcPath = path.join(sourceComponentsDir, item.name);
          const destPath = path.join(cwd, config.components, item.name);
          
          await fs.cp(srcPath, destPath, { recursive: true });
          installedCount++;
          console.log(pc.green(`✔ Added ${pc.bold(item.name)}`));
        }
      }
      
      console.log(pc.cyan(`→ Installing @radix-ui/react-slot...`));
      execSync(`npm install @radix-ui/react-slot`, { stdio: 'inherit' });
      
      console.log(pc.green(`\n✨ Successfully installed ${installedCount} components!`));
      return;
    } catch (error) {
      console.log(pc.red(`✖ Failed to copy all components.`));
      console.log(error.message);
      return;
    }
  }

  // Single component installation
  const targetComponentsDir = path.join(cwd, config.components, nameCapitalized);
  await fs.mkdir(targetComponentsDir, { recursive: true });

  const sourceComponentFile = path.resolve(__dirname, `../../src/components/${nameCapitalized}/${nameCapitalized}.tsx`);
  const destComponentFile = path.join(targetComponentsDir, `${nameCapitalized}.tsx`);

  try {
    let componentCode = await fs.readFile(sourceComponentFile, 'utf-8');
    
    const relativeLibsPath = config.libs.startsWith('src/') ? config.libs.slice(4) : config.libs;
    componentCode = componentCode.replace(/@\/libs\//g, `@/${relativeLibsPath}/`);

    await fs.writeFile(destComponentFile, componentCode);
    console.log(pc.green(`✔ Added ${pc.bold(nameCapitalized)} component to ${config.components}/${nameCapitalized}`));

    if (componentName.toLowerCase() === 'button') {
      console.log(pc.cyan(`→ Installing @radix-ui/react-slot for Button...`));
      execSync(`npm install @radix-ui/react-slot`, { stdio: 'inherit' });
    }

  } catch (error) {
    console.log(pc.red(`✖ Failed to copy component ${nameCapitalized}. Make sure it exists in EaseUI.`));
    console.log(error.message);
  }
}
