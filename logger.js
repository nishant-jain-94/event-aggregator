const bunyan = require('bunyan');
const bunyanLogstash = require('bunyan-logstash');

const logger = bunyan.createLogger({
  name: 'mlp-aggregator',
  streams: [
    {
      type: 'raw',
      stream: process.stdout
    },
    {
      type: 'raw',
      stream: bunyanLogstash.createStream({
        host: 'logstash',
        port: 5000,
      })
    }
  ]
});

module.exports = logger;