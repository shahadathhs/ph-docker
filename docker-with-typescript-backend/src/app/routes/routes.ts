import { Router } from 'express'
import { LogsRoutes } from '../modules/logs/logs.routes'
import { UserRoutes } from '../modules/user/user.route'

type TModuleRoutes = {
  path: string
  route: Router
}

const router = Router()

const moduleRoutes: TModuleRoutes[] = [
  {
    path: '/logs',
    route: LogsRoutes,
  },
  {
    path: '/users',
    route: UserRoutes,
  },
]

moduleRoutes.forEach((route) => router.use(route.path, route.route))

const appRoutes = router

export default appRoutes
