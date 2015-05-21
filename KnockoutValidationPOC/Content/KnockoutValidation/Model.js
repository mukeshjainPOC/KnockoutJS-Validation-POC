/// <reference path="../../scripts/typings/jquery/jquery.d.ts" />
/// <reference path="../../scripts/typings/knockout/knockout.d.ts" />
/// <reference path="../../scripts/typings/knockout.validation/knockout.validation.d.ts" />
/// <reference path="validation.ts" />
var ViewModelBase = (function () {
    function ViewModelBase() {
        //#region Private members
        this._customer = new CustomerBase();
    }
    Object.defineProperty(ViewModelBase.prototype, "Customer", {
        //#endregion
        //#region Properties
        get: function () {
            return this._customer;
        },
        set: function (value) {
            this._customer = value;
        },
        enumerable: true,
        configurable: true
    });
    return ViewModelBase;
})();
//#region base Classes
var CustomerBase = (function () {
    //#endregion
    //#region constructor
    function CustomerBase() {
        //#region datamembers
        this._id = ko.observable(null);
        this._address1 = ko.observable(null);
        this._address2 = ko.observable(null);
        this._address3 = ko.observable(null);
        this._city = ko.observable(null);
        this._state = ko.observable(null);
        this._zip = ko.observable(null);
        this._countryCode = ko.observable(null);
        this._customerName = ko.observable(null);
        this._contactEmail = ko.observable(null);
        this._telephone = ko.observable(null);
        this._fax = ko.observable(null);
        this._status = ko.observable(null);
        this._comments = ko.observable(null);
        this.ApplyValidations();
    }
    Object.defineProperty(CustomerBase.prototype, "Id", {
        //#endregion
        //#region properties
        get: function () {
            return this._id;
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CustomerBase.prototype, "Address1", {
        get: function () {
            return this._address1;
        },
        set: function (value) {
            this._address1 = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CustomerBase.prototype, "Address2", {
        get: function () {
            return this._address2;
        },
        set: function (value) {
            this._address2 = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CustomerBase.prototype, "Address3", {
        get: function () {
            return this._address3;
        },
        set: function (value) {
            this._address3 = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CustomerBase.prototype, "City", {
        get: function () {
            return this._city;
        },
        set: function (value) {
            this._city = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CustomerBase.prototype, "State", {
        get: function () {
            return this._state;
        },
        set: function (value) {
            this._state = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CustomerBase.prototype, "Zip", {
        get: function () {
            return this._zip;
        },
        set: function (value) {
            this._zip = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CustomerBase.prototype, "CountryCode", {
        get: function () {
            return this._countryCode;
        },
        set: function (value) {
            this._countryCode = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CustomerBase.prototype, "CustomerName", {
        get: function () {
            return this._customerName;
        },
        set: function (value) {
            this._customerName = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CustomerBase.prototype, "ContactEmail", {
        get: function () {
            return this._contactEmail;
        },
        set: function (value) {
            this._contactEmail = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CustomerBase.prototype, "Telephone", {
        get: function () {
            return this._telephone;
        },
        set: function (value) {
            this._telephone = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CustomerBase.prototype, "Fax", {
        get: function () {
            return this._fax;
        },
        set: function (value) {
            this._fax = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CustomerBase.prototype, "Status", {
        get: function () {
            return this._status;
        },
        set: function (value) {
            this._status = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CustomerBase.prototype, "Comments", {
        get: function () {
            return this._comments;
        },
        set: function (value) {
            this._comments = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CustomerBase.prototype, "Errors", {
        get: function () {
            return this._errors;
        },
        set: function (value) {
            this._errors = value;
        },
        enumerable: true,
        configurable: true
    });
    //#endregion
    //#region member function
    CustomerBase.prototype.ApplyValidations = function () {
        Validation.ValidateElement(this.Address1, $.extend({}, Validation.Required(Constants.ADDRESS1), Validation.MaxLength(80), Validation.MyRegex(Constants.ADDRESS1)));
        Validation.ValidateElement(this.Address1, $.extend({}, Validation.Required(Constants.ADDRESS1), Validation.MaxLength(80), Validation.MyRegex(Constants.ADDRESS1)));
        Validation.ValidateElement(this.Address2, $.extend({}, Validation.MaxLength(80), Validation.MyRegex(Constants.ADDRESS2)));
        Validation.ValidateElement(this.Address3, $.extend({}, Validation.MaxLength(80), Validation.MyRegex(Constants.ADDRESS3)));
        Validation.ValidateElement(this.City, $.extend({}, Validation.Required(Constants.CITY), Validation.MaxLength(30), Validation.MyRegex(Constants.CITY)));
        Validation.ValidateElement(this.State, $.extend({}, Validation.Required(Constants.STATE), Validation.MaxLength(30), Validation.MyRegex(Constants.STATE)));
        Validation.ValidateElement(this.Zip, $.extend({}, Validation.Required(Constants.POSTAL_CODE), Validation.MaxLength(30), Validation.MyRegex(Constants.POSTAL_CODE)));
        Validation.ValidateElement(this.CountryCode, $.extend({}, Validation.RequiredSelect(Constants.COUNTRY)));
        Validation.ValidateElement(this.Status, $.extend({}, Validation.RequiredSelect(Constants.STATUS)));
        Validation.ValidateElement(this.CustomerName, $.extend({}, Validation.Required(Constants.NAME), Validation.MaxLength(80), Validation.MyRegex(Constants.NAME)));
        Validation.ValidateElement(this.ContactEmail, $.extend({}, Validation.Required(Constants.EMAIL), Validation.Email(Constants.EMAIL)));
        Validation.ValidateElement(this.Telephone, $.extend({}, Validation.Required(Constants.TELEPHONE), Validation.Phone(Constants.TELEPHONE)));
        Validation.ValidateElement(this.Fax, Validation.Phone(Constants.FAX));
        Validation.ValidateElement(this.Comments, $.extend({}, Validation.MaxLength(150)));
        this.Errors = ko.validation.group(this);
        this.Errors.showAllMessages(false);
    };
    CustomerBase.prototype.ResetModel = function () {
        this.Id(null);
        this.CustomerName(null);
        this.Address1(null);
        this.Address2(null);
        this.Address3(null);
        this.City(null);
        this.State(null);
        this.Zip(null);
        this.CountryCode(null);
        this.ContactEmail(null);
        this.Telephone(null);
        this.Fax(null);
        this.Status(null);
        this.Comments(null);
        this.Errors.showAllMessages(false);
    };
    return CustomerBase;
})();
var List = (function () {
    //#endregion
    //#region constructor
    function List(id, text) {
        this.Id = ko.observable(id);
        this.Text = ko.observable(text);
    }
    return List;
})();
//# sourceMappingURL=Model.js.map