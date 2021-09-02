// Utilities

var Vector3 = {};

var Matrix44 = {};

Vector3.create = function(x, y, z) {

    return {'x':x, 'y':y, 'z':z};

};

Vector3.dot = function (v0, v1) {

    return v0.x * v1.x + v0.y * v1.y + v0.z * v1.z;

};

Vector3.cross = function (v, v0, v1) {

    v.x = v0.y * v1.z - v0.z * v1.y;

    v.y = v0.z * v1.x - v0.x * v1.z;

    v.z = v0.x * v1.y - v0.y * v1.x;

};

Vector3.normalize = function (v) {

    var l = v.x * v.x + v.y * v.y + v.z * v.z;

    if(l > 0.00001) {

        l = 1.0 / Math.sqrt(l);

        v.x *= l;

        v.y *= l;

        v.z *= l;

    }

};

Vector3.arrayForm = function(v) {

    if(v.array) {

        v.array[0] = v.x;
