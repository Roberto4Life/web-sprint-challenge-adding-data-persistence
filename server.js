const express = require('express');
const db = require('./data/dbConfig.js')
const server = express();
server.use(express.json());

server.get('/', (req, res) => {
  res.send(`<h1>Working API</h1>`);
});

server.get('/api/projects', (req, res) => {
  db('projects')
  .then(projects => {
    res.status(200).json(projects);
  })
  .catch(error => {
    res.status(500).json(error);
  });
});

server.get('/api/tasks', (req, res) => {
  db('tasks')
  .then(tasks => {
    res.status(200).json(tasks);
  })
  .catch(error => {
    res.status(500).json(error);
  });
});

server.get('/api/resources', (req, res) => {
  db('resources')
  .then(resources => {
    res.status(200).json(resources);
  })
  .catch(error => {
    res.status(500).json(error);
  });
});

server.post('/api/projects', (req, res) => {
  db('projects').insert(req.body)
  .then(ids => {
    const id = ids[0];

    db('projects')
      .where({ id })
      .first()
    .then(projects => {
      res.status(201).json(projects);
    });
  })
  .catch(error => {
    res.status(500).json(error);
  });
});

server.post('/api/tasks', (req, res) => {
  db('tasks').insert(req.body)
  .then(ids => {
    const id = ids[0];

    db('tasks')
      .where({ id })
      .first()
    .then(tasks => {
      res.status(201).json(tasks);
    });
  })
  .catch(error => {
    res.status(500).json(error);
  });
});

server.post('/api/resources', (req, res) => {
  db('resources').insert(req.body)
  .then(ids => {
    const id = ids[0];

    db('resources')
      .where({ id })
      .first()
    .then(resources => {
      res.status(201).json(resources);
    });
  })
  .catch(error => {
    res.status(500).json(error);
  });
});

module.exports = server;