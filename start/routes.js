'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.0/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.group(() => {
  Route.post('match', 'ChatController.store')
  Route.get('match', 'ChatController.index')
  Route.get('match/:id', 'ChatController.show')
}).prefix('api')

Route.group(() => {
  Route.post('guest', 'GuestController.store')
  Route.get('guest', 'GuestController.index')
  Route.get('guest/:id', 'GuestController.show')
}).prefix('api')