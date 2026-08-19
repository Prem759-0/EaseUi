import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import prompts from 'prompts';
import pc from 'picocolors';
import { execSync } from 'child_process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export async function initCommand() {
  console.log(pc.cyan('\nWelcome to EaseUI! Let\'s get your project set up.\n'));

  const response = await prompts([
    {
      type: 'text',
      name: 'componentsPath',
      message: 'Where would you like to install components?',
      initial: 'src/components/easeui'
    },
    {
      type: 'text',
      name: 'libsPath',
      message: 'Where would you like to put utility and animation files?',
      initial: 'src/libs'
    },
    {
      type: 'text',
      name: 'cssPath',
      message: 'Where is your global CSS file?',
      initial: 'src/index.css'
    }
  ]);

  if (!response.componentsPath || !response.libsPath) {
    console.log(pc.red('Initialization cancelled.'));
    process.exit(1);
  }

  const cwd = process.cwd();
  const easeuiConfigPath = path.join(cwd, 'easeui.json');

  // 2. Save configuration
  const config = {
    components: response.componentsPath,
    libs: response.libsPath,
  };

  await fs.writeFile(easeuiConfigPath, JSON.stringify(config, null, 2));
  console.log(pc.green(`\n✔ Wrote configuration to ${pc.bold('easeui.json')}`));

  // 3. Create target directories
  const targetComponentsDir = path.join(cwd, response.componentsPath);
  const targetLibsDir = path.join(cwd, response.libsPath);
  const targetAnimationsDir = path.join(targetLibsDir, 'animations');

  await fs.mkdir(targetComponentsDir, { recursive: true });
  await fs.mkdir(targetLibsDir, { recursive: true });
  await fs.mkdir(targetAnimationsDir, { recursive: true });

  // 4. Copy utility and animation files
  // The source files are relative to this script: ../../src/libs
  const sourceLibsDir = path.resolve(__dirname, '../../src/libs');
  
  try {
    // Copy utils.ts
    const utilsSrc = path.join(sourceLibsDir, 'utils.ts');
    const utilsDest = path.join(targetLibsDir, 'utils.ts');
    await fs.copyFile(utilsSrc, utilsDest);
    console.log(pc.green(`✔ Copied utils.ts to ${pc.bold(response.libsPath)}`));

    // Copy entranceAnimation.tsx
    const entranceSrc = path.join(sourceLibsDir, 'animations/entranceAnimation.tsx');
    const entranceDest = path.join(targetAnimationsDir, 'entranceAnimation.tsx');
    await fs.copyFile(entranceSrc, entranceDest);
    
    // Copy hoverAnimation.tsx
    const hoverSrc = path.join(sourceLibsDir, 'animations/hoverAnimation.tsx');
    const hoverDest = path.join(targetAnimationsDir, 'hoverAnimation.tsx');
    await fs.copyFile(hoverSrc, hoverDest);

    // Copy focusAnimation.tsx
    const focusSrc = path.join(sourceLibsDir, 'animations/focusAnimation.tsx');
    const focusDest = path.join(targetAnimationsDir, 'focusAnimation.tsx');
    await fs.copyFile(focusSrc, focusDest);
    
    console.log(pc.green(`✔ Copied animation files to ${pc.bold(path.join(response.libsPath, 'animations'))}`));

  } catch (error) {
    console.log(pc.yellow(`\n⚠ Note: Could not copy some utility files. Are you running this directly from the EaseUI project folder instead of via npx? Error: ${error.message}`));
  }

  // 4.5 Inject CSS variables
  console.log(pc.cyan('\n→ Injecting CSS variables...'));
  try {
    const userCssPath = path.join(cwd, response.cssPath);
    const easeuiCssPath = path.resolve(__dirname, '../../src/index.css');
    
    const easeuiCssContent = await fs.readFile(easeuiCssPath, 'utf-8');
    
    // Extract everything except the first 2 lines (tailwind imports)
    const lines = easeuiCssContent.split('\n');
    const cssToInject = lines.slice(2).join('\n');

    let userCss = '';
    try {
      userCss = await fs.readFile(userCssPath, 'utf-8');
    } catch (e) {
      // File doesn't exist, we will create it
    }

    if (!userCss.includes('--neo-shadow')) {
      await fs.writeFile(userCssPath, userCss + '\n\n/* EaseUI Neo-Brutalist Variables */\n' + cssToInject);
      console.log(pc.green(`✔ Injected CSS variables into ${pc.bold(response.cssPath)}`));
    } else {
      console.log(pc.green(`✔ CSS variables already exist in ${pc.bold(response.cssPath)}`));
    }
  } catch (error) {
    console.log(pc.yellow(`\n⚠ Note: Could not automatically inject CSS variables into your stylesheet.`));
  }

  // 5. Install dependencies
  console.log(pc.cyan('\n→ Installing required dependencies...'));
  try {
    const deps = [
      'clsx',
      'tailwind-merge',
      'class-variance-authority',
      'gsap',
      'lucide-react'
    ];
    
    execSync(`npm install ${deps.join(' ')}`, { stdio: 'inherit' });
    console.log(pc.green('✔ Dependencies installed successfully.'));
  } catch (error) {
    console.log(pc.red(`\n✖ Failed to install dependencies. You may need to install them manually: npm i clsx tailwind-merge class-variance-authority gsap lucide-react`));
  }

  console.log(pc.green('\n✨ EaseUI is now initialized!'));
  console.log(`Run ${pc.cyan('npx easeui add button')} to add your first component.\n`);
}
