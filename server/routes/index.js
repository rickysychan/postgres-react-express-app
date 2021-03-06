const todosController = require('../controllers').todos;
const todosItemsController = require('../controllers').todoItems;

module.exports = (app) => {
  app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to the Todos API!',
  }));

  app.post('/api/todos/:todoId/items', todosItemsController.create);
  app.put('/api/todos/:todoId/items', todosItemsController.update);
  app.delete('/api/todos/:todoId/items', todosItemsController.destroy);

  app.post('/api/todos', todosController.create);
  app.get('/api/todos', todosController.list);
  app.get('/api/todos/:todoId', todosController.retrieve);
  app.put('/api/todos/:todoId', todosController.update);
};