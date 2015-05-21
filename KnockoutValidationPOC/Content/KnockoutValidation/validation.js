/// <reference path="../../scripts/typings/jquery/jquery.d.ts" />
/// <reference path="../../scripts/typings/knockout/knockout.d.ts" />
var Validation = (function () {
    function Validation() {
    }
    //Validation Options Method
    Validation.MaxLength = function (Length) {
        return { maxLength: Length };
    };
    Validation.MinLength = function (Length) {
        return { minLength: Length };
    };
    Validation.Min = function (minvalue) {
        return { min: minvalue };
    };
    Validation.Max = function (maxvalue) {
        return { max: maxvalue };
    };
    Validation.RequiredSelect = function (constant) {
        return { required: { params: true, message: 'Please select ' + constant.value } };
    };
    Validation.RemoveValidation = function (element) {
        element.extend({ validatable: false });
    };
    Validation.Required = function (constant) {
        return { required: { params: true, message: 'Please enter the ' + constant.value } };
    };
    Validation.Email = function (constant) {
        return { email: { params: true, message: 'Please enter a valid ' + constant.value } };
    };
    Validation.Phone = function (constant) {
        return { pattern: { message: 'Please enter a valid ' + constant.value, params: /^\D?(\d{3})\D?\D?(\d{3})\D?(\d{4})$/ } };
    };
    Validation.MyRegex = function (constant) {
        return { pattern: { message: 'Please enter a valid ' + constant.value, params: '^[0-9a-zA-Z ._,-]+$' } };
    };
    //Validation Method
    Validation.ValidateElement = function (element, ValidationOptions) {
        var options = {};
        if (typeof ValidationOptions === 'boolean') {
            options = $.extend({}, { required: ValidationOptions });
        }
        else if (typeof ValidationOptions === 'string') {
            options = ValidationOptions;
        }
        else if (typeof ValidationOptions === 'object') {
            options = $.extend({}, options, ValidationOptions);
        }
        element.extend(options);
    };
    return Validation;
})();
var Constants = (function () {
    function Constants() {
    }
    Constants.NAME = { value: "Customer Name", id: 1 };
    Constants.ADDRESS1 = { value: "Address ", id: 4 };
    Constants.ADDRESS2 = { value: "Address Line 2", id: 5 };
    Constants.ADDRESS3 = { value: "Aadress Line 3", id: 6 };
    Constants.CITY = { value: "City", id: 7 };
    Constants.STATE = { value: "State/Province", id: 8 };
    Constants.POSTAL_CODE = { value: "Postal Code", id: 9 };
    Constants.COUNTRY = { value: "Country", id: 10 };
    Constants.EMAIL = { value: "Customer Email", id: 11 };
    Constants.TELEPHONE = { value: "Telephone Number", id: 12 };
    Constants.FAX = { value: "Fax Number", id: 13 };
    Constants.STATUS = { value: "Status", id: 14 };
    return Constants;
})();
//# sourceMappingURL=validation.js.map