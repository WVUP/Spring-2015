<<<<<<< HEAD
﻿/// <reference path="_references.js" />
/// <reference path="directives.js" />

'use strict';

describe('Directives', function () {
    beforeEach(module('app.directives'));

    describe('app-version', function () {
        it('should print current version', function () {
            module(function ($provide) {
                $provide.value('version', 'TEST_VER');
            });
            inject(function ($compile, $rootScope) {
                var element = $compile('<span app-version></span>')($rootScope);
                expect(element.text()).toEqual('TEST_VER');
            });
        });
    });
=======
﻿/// <reference path="_references.js" />
/// <reference path="directives.js" />

'use strict';

describe('Directives', function () {
    beforeEach(module('app.directives'));

    describe('app-version', function () {
        it('should print current version', function () {
            module(function ($provide) {
                $provide.value('version', 'TEST_VER');
            });
            inject(function ($compile, $rootScope) {
                var element = $compile('<span app-version></span>')($rootScope);
                expect(element.text()).toEqual('TEST_VER');
            });
        });
    });
>>>>>>> ce7c8ef5a7f2594ba4f515d10169d52b964d377f
});