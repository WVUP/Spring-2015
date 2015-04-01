<<<<<<< HEAD
﻿/// <reference path="_references.js" />
/// <reference path="services.js" />

'use strict';

describe('service', function () {
    beforeEach(module('app.services'));

    describe('version', function () {
        it('should return current version', inject(function (version) {
            expect(version).toEqual('0.1');
        }));
    });
=======
﻿/// <reference path="_references.js" />
/// <reference path="services.js" />

'use strict';

describe('service', function () {
    beforeEach(module('app.services'));

    describe('version', function () {
        it('should return current version', inject(function (version) {
            expect(version).toEqual('0.1');
        }));
    });
>>>>>>> ce7c8ef5a7f2594ba4f515d10169d52b964d377f
});