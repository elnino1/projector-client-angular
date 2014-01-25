'use strict';

var services = angular.module('projectorServices', ['ngResource']);

var baseUrl = 'http://localhost\\:8080';


var reqListTest = [
        { id:1, name:'name1', description:'description'},
    ];

services.factory('requirementsFactory', ['$resource', function ($resource) {
    
    /*
    return $resource(baseUrl + '/projector/rest/requirements', {}, {
        query: { method: 'GET', isArray: true },
        create: { method: 'POST' }
    })
    */
    return {
        query: function() {return reqListTest}
        ,
        show: function(reqId) {
            console.log('details for ' + reqId + " " + reqListTest.length);
            if(reqId > 0 && reqId <= reqListTest.length) {
                return reqListTest[reqId - 1];
            }
            return null;
            
        }
        ,
        create: function(requirement) {
            requirement.id = reqListTest.length + 1;
            reqListTest.push(requirement);
        }

        ,
        update: function(reqId) {

        }
        ,
        delete: function(reqId) {

        }
    }



}]);







/*services.factory('UserFactory', function ($resource) {
    return $resource(baseUrl + '/ngdemo/web/users/:id', {}, {
        show: { method: 'GET' },
        update: { method: 'PUT', params: {id: '@id'} },
        delete: { method: 'DELETE', params: {id: '@id'} }
    })
});*/