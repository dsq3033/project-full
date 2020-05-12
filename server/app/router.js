'use strict'

/**
 * @param {Egg.Application} app - egg application
 */
console.log('start');
module.exports = app => {
  const { router, controller } = app
  router.get('/', controller.home.index)
}
