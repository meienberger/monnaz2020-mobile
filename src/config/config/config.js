import env from '../../../.env.json'

const { NODE_ENV = 'development', APP_NAME = 'monnaz2020' } = env

export { NODE_ENV, APP_NAME }
