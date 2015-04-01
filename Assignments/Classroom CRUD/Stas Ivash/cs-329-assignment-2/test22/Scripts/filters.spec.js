<<<<<<< HEAD
﻿/// <reference path="_references.js" />
/// <reference path="filters.js" />

'use strict';

describe('Filter', function () {
    beforeEach(module('app.filters'));

    describe('interpolate', function () {
        beforeEach(module(function ($provide) {
            $provide.value('version', 'TEST_VER');
        }));

        it('should replace VERSION', inject(function (interpolateFilter) {
            expect(interpolateFilter('before %VERSION% after')).toEqual('before TEST_VER after');
        }));
    });
=======
﻿/// <reference path="_references.js" />
/// <reference path="filters.js" />

'use strict';

describe('Filter', function () {
    beforeEach(module('app.filters'));

    describe('interpolate', function () {
        beforeEach(module(function ($provide) {
            $provide.value('version', 'TEST_VER');
        }));

        it('should replace VERSION', inject(function (interpolateFilter) {
            expect(interpolateFilter('before %VERSION% after')).toEqual('before TEST_VER after');
        }));
    });
>>>>>>> ce7c8ef5a7f2594ba4f515d10169d52b964d377f
});