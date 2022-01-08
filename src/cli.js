#!/usr/bin/env node

const {mdLinks} = require('./mdLinks');
const {totalLinks, uniqueLinks, brokenOfLinksStats} = require('./stats');
const {userHelp} = require('./help');

const arguments = process.argv.slice(2);

