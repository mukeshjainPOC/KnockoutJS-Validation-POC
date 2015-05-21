/// <reference path="../../scripts/typings/jquery/jquery.d.ts" />
/// <reference path="../../scripts/typings/knockout/knockout.d.ts" />
/// <reference path="model.ts" />
/// <reference path="validation.ts" />
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var ViewModel = (function (_super) {
    __extends(ViewModel, _super);
    //#endregion
    //#region constructor
    function ViewModel() {
        _super.call(this);
        this._country = ko.observableArray([]);
        this._statusList = ko.observableArray([]);
        this.LoadInitialData();
    }
    Object.defineProperty(ViewModel.prototype, "Country", {
        //#endregion
        //#region Properties
        get: function () {
            return this._country;
        },
        set: function (value) {
            this._country = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ViewModel.prototype, "StatusList", {
        get: function () {
            return this._statusList;
        },
        set: function (value) {
            this._statusList = value;
        },
        enumerable: true,
        configurable: true
    });
    //#endregion
    //#region Public functions
    ViewModel.prototype.SubmitEvent = function (data, event) {
        try {
            if (this.Customer.Errors().length == 0) {
                this.Customer.Id(1000);
                alert("Submit Sucessfull");
            }
            else {
                this.Customer.Errors.showAllMessages(true);
            }
        }
        catch (exception) {
            var errors = exception;
        }
    };
    ViewModel.prototype.CancelEvent = function (data, event) {
        try {
            this.Customer.ResetModel();
        }
        catch (exception) {
            var errors = exception;
        }
    };
    //#endregion
    //#region private functions
    ViewModel.prototype.LoadInitialData = function () {
        this.LoadCountry();
        this.LoadStatus();
    };
    ViewModel.prototype.LoadCountry = function () {
        this.Country.push(new List(1, "USA"));
        this.Country.push(new List(2, "UK"));
        this.Country.push(new List(3, "France"));
        this.Country.push(new List(4, "Germany"));
        this.Country.push(new List(5, "Switzerland"));
        this.Country.push(new List(6, "Mexico"));
        this.Country.push(new List(7, "India"));
        this.Country.push(new List(8, "Russia"));
        this.Country.push(new List(9, "Japan"));
        this.Country.push(new List(10, "Thailand"));
        this.Country.push(new List(11, "China"));
        this.Country.push(new List(12, "Singapore"));
        this.Country.push(new List(13, "Brazil"));
        this.Country.push(new List(14, "South Africa"));
        this.Country.push(new List(15, "Bankok"));
    };
    ViewModel.prototype.LoadStatus = function () {
        this.StatusList.push(new List(1, "Active"));
        this.StatusList.push(new List(1, "InActive"));
    };
    return ViewModel;
})(ViewModelBase);
try {
    var vm = new ViewModel();
    ko.applyBindings(vm);
    vm.Customer.Errors.showAllMessages(false);
}
catch (exception) {
    var errors = exception;
}
//# sourceMappingURL=ViewModel.js.map