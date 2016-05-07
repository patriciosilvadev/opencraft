// OpenCraft -- tools to aid developing and hosting free software projects
// Copyright (C) 2015-2016 OpenCraft <contact@opencraft.com>
//
// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU Affero General Public License as
// published by the Free Software Foundation, either version 3 of the
// License, or (at your option) any later version.
//
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU Affero General Public License for more details.
//
// You should have received a copy of the GNU Affero General Public License
// along with this program.  If not, see <http://www.gnu.org/licenses/>.

(function(){
"use strict";

// App configuration //////////////////////////////////////////////////////////

var app = angular.module('InstanceApp'); // Load the existing app so we can add to it.

app.config(function($stateProvider) {

    $stateProvider
        .state('instances.details.openedx_appserver_details', {
            url: 'edx-appserver/{appserverId:[0-9]+}/',
            templateUrl: "/static/html/instance/appserver.html",
            controller: "OpenEdXAppServerDetails",
        });
});

app.controller("OpenEdXAppServerDetails", ['$scope', '$state', '$stateParams', 'OpenCraftAPI',
    function ($scope, $state, $stateParams, OpenCraftAPI) {

        $scope.init = function() {
            $scope.appserver = null;
            $scope.refresh();
        };

        $scope.refresh = function() {
            return OpenCraftAPI.one("openedx_appserver", $stateParams.appserverId).get().then(function(appserver) {
                if (appserver.instance.id != $stateParams.instanceId) {
                    throw "This appserver is associated with another instance.";
                }
                $scope.appserver = appserver;
                $scope.is_active = appserver.id == $scope.instance.active_appserver.id;
            });
        }

        $scope.make_appserver_active = function() {
            $scope.is_active = true; // Disable the button optimistically
            OpenCraftAPI.one("openedx_appserver", $stateParams.appserverId).post('make_active').then(function() {
                // Refresh the list of app servers in the instance scope, then refresh this appserver
                $scope.$parent.refresh().then(function() {
                    $scope.refresh();
                });
                $scope.notify($scope.appserver.name + ' is now active. The DNS changes may take a while to propagate.');
            }, function() {
                $scope.refresh();
                $scope.notify('An error occurred. ' + $scope.appserver.name + ' could not be made active.');
            });
        }

        $scope.init();
    }
]);


})();
