angular.module('starter.factories', [])

function localStorageFact($window) {
    return {
        set: function(key, value) {
            $window.localStorage[key] = value;
        },
        get: function(key, defaultValue) {
            return $window.localStorage[key] || defaultValue;
        },
        setObject: function(key, value) {
            $window.localStorage[key] = angular.toJson(value);
            // $window.localStorage[key] = JSON.stringify(value);
        },
        getObject: function(key) {
            // return JSON.parse($window.localStorage[key] || '{}');
            return angular.fromJson($window.localStorage[key] || '{}');
        },
        removeKey : function(key){
            $window.localStorage.removeItem(key);
        },
        getObjectArray : function(key) {
            // return JSON.parse($window.localStorage[key] || '[]');
            return angular.fromJson($window.localStorage[key] || '[]');
        },
    }
}