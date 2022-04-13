"use strict";

const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

const cronJob = () => {

  const url = 'mongodb://localhost:27017';
  const client = new MongoClient(url);

  client.connect(async (err) => {
    assert.equal(null, err);
    try {
      const dbName = 'cron';
      const colName = 'log';
      const document = { info: "executed cron job", status: "success" };
      const cron = await client.db(dbName);
      const log = await cron.collection(colName);
      const result = await log.insertOne(document);
      console.log(result);

      const findResult = await log.find().toArray();
      console.log(findResult);

    } catch (e) {
      console.error(e)
    } finally {
      client.close();
    }
  });
}

module.exports = cronJob;