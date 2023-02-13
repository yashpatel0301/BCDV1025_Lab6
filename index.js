/*
 * Copyright IBM Corp. All Rights Reserved.
 *
 * SPDX-License-Identifier: Apache-2.0
 */

'use strict';

const fareTransfer = require('./lib/fareTransfer');

module.exports.fareTransfer = fareTransfer;
module.exports.contracts = [fareTransfer];
