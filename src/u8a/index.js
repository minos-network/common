// Copyright 2017-2018 Jaco Greeff
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.
// @flow

const u8aFromBuffer = require('./fromBuffer');
const u8aFromUtf8 = require('./fromUtf8');
const u8aToBuffer = require('./toBuffer');
const u8aToUtf8 = require('./toUtf8');

/**
  @summary Utility methods to convert to and from `Uint8Array` objects
*/
module.exports = {
  u8aFromBuffer,
  u8aFromUtf8,
  u8aToBuffer,
  u8aToUtf8
};
