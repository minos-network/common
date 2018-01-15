// Copyright 2017-2018 Jaco Greeff
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.
// @flow

const isNull = require('../is/null');
const isUndefined = require('../is/undefined');

/**
  @name arrayFilter
  @signature arrayFilter (array: Array<mixed>, allowNulls: boolean = true): Array<mixed>
  @summary Filters undefined and (optionally) null values from an array
  @description
    Returns a new array with all `undefined` values removed. Optionally, when `allowNulls = false`, it removes the `null` values as well
  @example
    import { arrayFilter } from '@polkadot/util';

    arrayFilter([0, void 0, true, null, false, '']); // [0, true, null, false, '']
    arrayFilter([0, void 0, true, null, false, ''], false); // [0, true, false, '']
*/
module.exports = function arrayFilter (array: Array<mixed>, allowNulls: boolean = true): Array<mixed> {
  return array.filter((value) => {
    return !isUndefined(value) && (allowNulls || !isNull(value));
  });
};
