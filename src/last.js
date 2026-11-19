'use strict';

module.exports = { last: a => (Array.isArray(a) ? a[a.length-1] : undefined) };
