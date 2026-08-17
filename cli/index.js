#!/usr/bin/env node

import { Command } from 'commander';
import { initCommand } from './commands/init.js';
import { addCommand } from './commands/add.js';

const program = new Command();

program
  .name('easeui')
  .description('CLI to add EaseUI neo-brutalist components to your project')
  .version('1.0.6');

program
  .command('init')
  .description('Initialize your project and install core dependencies')
  .action(() => {
    initCommand();
  });

program
  .command('add')
  .description('Add a component to your project')
  .argument('<component>', 'Name of the component to add')
  .action((component) => {
    addCommand(component);
  });

program.parse();
