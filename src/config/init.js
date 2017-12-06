import fs from 'fs'

const getModules = () =>
  fs.readdirSync(__dirname).filter(dir =>
    !(dir.endsWith('.js')))

const getRouters = modules =>
  modules.map(modulo =>
    require(`./${modulo}/index.js`))

const loaderRouters = (server, routers) =>
  routers.forEach(router =>
    router.default.map(route =>
      server[route.method](route.path, route.action)))

const bootstrap = server => {
  const modules = getModules()
  const routers = getRouters(modules)
  loaderRouters(server, routers)
}

export default bootstrap
