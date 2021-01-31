'use strict'

const db = require('./')
const debug = require('debug')('platziverse:db:setup')
const inquirer = require('inquirer')
const chalk = require('chalk')

const prompt = inquirer.createPromptModule()

async function setup () {
  const answer = await await prompt([
    {
      type: 'confirm',
      name: 'setup',
      message: 'This will destro your database, are you sure?'
    }
  ])

  if (!answer.setup) return console.log(chalk.green('Nothins happened :)'))

  const config = {
    database: process.env.DB_NAME || 'platziverse',
    username: process.env.DB_USER || 'platzi',
    password: process.env.DB_PASSWORD || 'platzi',
    host: process.env.DB_HOST || 'db_postgres',
    dialect: process.env.DIALECT || 'postgres',
    setup: true,
    loggin: s => debug(s)
  }

  await db(config).catch(handleFatalError)
  console.log(chalk.green('Success'))
  process.exit(0)
}

function handleFatalError (err) {
  console.error(chalk.red('Faltal Error:'), err.messsage)
  console.error(chalk.red('Faltal Error:'), err.stack)
  process.exit(1)
}

setup()
