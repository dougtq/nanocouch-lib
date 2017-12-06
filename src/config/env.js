import envDeploy from 'env-deploy'

envDeploy()

export default { vars: Object.assign({}, process.env) }
