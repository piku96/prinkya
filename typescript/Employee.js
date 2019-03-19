"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var Employee = /** @class */ (function () {
    function Employee(fname, age, lname) {
        this.age = age;
        this.fname = fname;
        this.lname = lname;
    }
    Employee.prototype.displayName = function () {
        console.log(this.fname + " " + this.lname);
    };
    return Employee;
}());
exports.Employee = Employee;
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(fname, age, noOfTeam, lname) {
        var _this = _super.call(this, fname, age, lname) || this;
        _this.noOfTeams = noOfTeam;
        return _this;
    }
    Manager.prototype.getNoOfTeams = function () {
        return this.noOfTeams;
    };
    return Manager;
}(Employee));
var emp = new Employee("iiht", "dfg", 10);
emp.displayName();
var mgr = new Manager("iiht", 10, 20, "sdfgh");
mgr.displayName();
console.log(mgr.getNoOfTeams());
