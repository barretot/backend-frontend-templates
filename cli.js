#!/usr/bin/env node

const { Command } = require('commander');
const fs = require('fs-extra');
const path = require('path');
const inquirer = require('inquirer');

const program = new Command();
const apiTemplateDir = path.resolve(__dirname, 'api-template-js');
const apiTemplateTsDir = path.resolve(__dirname, 'api-template-ts');
const lambdaTemplateDir = path.resolve(__dirname, 'lambda-template');
const lambdaTemplateTsDir = path.resolve(__dirname, 'lambda-template-ts');
const templateNest = path.resolve(__dirname, 'template-nest');
const reactTemplateDir = path.resolve(__dirname, 'react-template');


program
  .version('1.0.0')
  .description('CLI para gerar uma estrutura de projeto Node.js');

program
  .command('init')
  .description('Cria uma nova estrutura de projeto a partir do template')
  .action(async () => {
    console.log("*** NodeJS Project Template ***\n");

    const { templateType, projectName } = await inquirer.prompt([
      {
        type: 'list',
        name: 'templateType',
        message: 'Qual tipo de projeto você quer criar?',
        choices: [
          { name: 'API', value: 'api' },
          { name: 'Lambda', value: 'lambda' },
          { name: 'React Frontend', value: 'react' }, 
        ],
      },
      {
        type: 'input',
        name: 'projectName',
        message: 'Qual será o nome do seu projeto?',
        validate: (input) => input !== '' || 'O nome do projeto não pode ser vazio.',
      },
    ]);

    let templateDir;

    if (templateType === 'lambda') {
      const { useTs } = await inquirer.prompt([
        {
          type: 'confirm',
          name: 'useTs',
          message: 'Você quer a versão com TypeScript?',
          default: false,
        },
      ]);

      templateDir = useTs ? lambdaTemplateTsDir : lambdaTemplateDir;
    } else if (templateType === 'api') {
      const { useTs } = await inquirer.prompt([
        {
          type: 'confirm',
          name: 'useTs',
          message: 'Você quer a versão com TypeScript?',
          default: false,
        },
      ]);

      if (useTs) {
        const { useNest } = await inquirer.prompt([
          {
            type: 'confirm',
            name: 'useNest',
            message: 'Você quer usar NestJS?',
            default: false,
          },
        ]);

        templateDir = useNest ? templateNest : apiTemplateTsDir;
      } else {
        templateDir = apiTemplateDir;
      }
    } else if (templateType === 'react') {
      templateDir = reactTemplateDir; 
    }

    const basePath = path.resolve(process.cwd(), projectName);

    try {
      if (fs.existsSync(basePath)) {
        console.error(`O diretório ${projectName} já existe.`);
        process.exit(1);
      }

      await fs.copy(templateDir, basePath);

      const packageJsonPath = path.join(basePath, 'package.json');
      if (fs.existsSync(packageJsonPath)) {
        const packageJson = await fs.readJson(packageJsonPath);
        packageJson.name = projectName;
        await fs.writeJson(packageJsonPath, packageJson, { spaces: 2 });
      }

      console.log(`Estrutura do projeto ${projectName} criada com sucesso!`);
    } catch (error) {
      console.error(`Erro ao criar a estrutura do projeto: ${error.message}`);
    }
  });

program.parse(process.argv);