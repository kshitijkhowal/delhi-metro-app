#!/usr/bin/env node

import { execSync } from 'child_process';
import inquirer from 'inquirer';
import {
  BUILD_TYPES,
  PLATFORMS,
  buildCommand,
  getBuildTypeName,
  getPlatformName
} from './buildScripts.Types.js';

async function main() {
  console.log('🚇 Delhi Metro App - Interactive Build Script');
  console.log('=============================================\n');

  try {
    // Select build type
    const { buildType } = await inquirer.prompt([
      {
        type: 'list',
        name: 'buildType',
        message: 'Select Build Type:',
        choices: BUILD_TYPES
      }
    ]);

    // Select platform
    const { platform } = await inquirer.prompt([
      {
        type: 'list',
        name: 'platform',
        message: 'Select Platform:',
        choices: PLATFORMS
      }
    ]);

    // Build the command
    const command = buildCommand(buildType, platform);

    // Display summary and confirm
    console.log('\n📋 Build Summary:');
    console.log(`Build Type: ${getBuildTypeName(buildType)}`);
    console.log(`Platform: ${getPlatformName(platform)}`);
    console.log(`Command: ${command}`);

    const { confirm } = await inquirer.prompt([
      {
        type: 'confirm',
        name: 'confirm',
        message: 'Do you want to proceed?',
        default: false
      }
    ]);

    if (confirm) {
      console.log('\n🚀 Executing build...\n');
      try {
        execSync(command, { stdio: 'inherit' });
        console.log('\n✅ Build completed successfully!');
      } catch (error) {
        console.log('\n❌ Build failed!');
        console.error(error.message);
        process.exit(1);
      }
    } else {
      console.log('\n❌ Build cancelled');
    }

  } catch (error) {
    if (error.isTtyError) {
      console.log('❌ This terminal does not support interactive prompts');
    } else {
      console.error('❌ An error occurred:', error.message);
    }
    process.exit(1);
  }
}

// Handle script termination
process.on('SIGINT', () => {
  console.log('\n\n❌ Build cancelled by user');
  process.exit(0);
});

main(); 