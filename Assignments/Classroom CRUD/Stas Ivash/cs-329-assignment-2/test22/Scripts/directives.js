<<<<<<< HEAD
﻿'use strict';

angular.module('app.directives', [])

    .directive('appVersion', ['version', function (version) {
        return function (scope, elm, attrs) {
            elm.text(version);
        };
=======
﻿'use strict';

angular.module('app.directives', [])

    .directive('appVersion', ['version', function (version) {
        return function (scope, elm, attrs) {
            elm.text(version);
        };
>>>>>>> ce7c8ef5a7f2594ba4f515d10169d52b964d377f
    }]);