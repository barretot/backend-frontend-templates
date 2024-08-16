#!/usr/bin/env node

const { Command } = require('commander');
const fs = require('fs-extra');
const path = require('path');
const inquirer = require('inquirer'); // Certifique-se de importar o inquirer corretamente

const program = new Command();
const apiTemplateDir = path.resolve(__dirname, 'api-template');
const lambdaTemplateDir = path.resolve(__dirname, 'lambda-template');

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
        ],
      },
      {
        type: 'input',
        name: 'projectName',
        message: 'Qual será o nome do seu projeto?',
        validate: (input) => input !== '' || 'O nome do projeto não pode ser vazio.',
      },
    ]);

    const basePath = path.resolve(process.cwd(), projectName);
    const templateDir = templateType === 'api' ? apiTemplateDir : lambdaTemplateDir;

    try {
      // Verifica se o diretório do projeto já existe
      if (fs.existsSync(basePath)) {
        console.error(`O diretório ${projectName} já existe.`);
        process.exit(1);
      }

      // Copia o template para o novo diretório
      await fs.copy(templateDir, basePath);

      // Atualiza o package.json com o nome do projeto
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
