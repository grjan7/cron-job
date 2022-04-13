'use strict';

//4. Create a cron job at the specified time in node.js to insert dummy data into DB

const schedule = require('node-schedule');
const cronJob = require('./cronJob');

const date = new Date(2022, 3, 14, 1, 4, 0);

const job = schedule.scheduleJob(date, cronJob);


