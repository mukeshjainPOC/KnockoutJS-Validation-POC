/// <reference path="../../scripts/typings/jquery/jquery.d.ts" />
/// <reference path="../../scripts/typings/knockout/knockout.d.ts" />
/// <reference path="model.ts" />
/// <reference path="validation.ts" />

class ViewModel extends ViewModelBase{
    //#region Private members
    private _country: KnockoutObservableArray<List>;
    private _statusList: KnockoutObservableArray<List>;
     //#endregion

    //#region Properties
    public get Country(): KnockoutObservableArray<List> {
        return this._country;
    }
    public set Country(value: KnockoutObservableArray<List>) {
        this._country = value;
    }

    public get StatusList(): KnockoutObservableArray<List> {
        return this._statusList;
    }
    public set StatusList(value: KnockoutObservableArray<List>) {
        this._statusList = value;
    }
    //#endregion

    //#region constructor
    constructor() {
        super();
        this._country = ko.observableArray<List>([]);
        this._statusList = ko.observableArray<List>([]);
        this.LoadInitialData();
    }
    //#endregion

    //#region Public functions
    public SubmitEvent(data, event) {
        try {
            if (this.Customer.Errors().length == 0) {
                this.Customer.Id(1000);
                alert("Submit Sucessfull");
            }
            else {
                this.Customer.Errors.showAllMessages(true);
            }
        }
        catch (exception)
        {
            var errors = exception;
        }
    }

    public CancelEvent(data, event) {
        try {
            this.Customer.ResetModel();         
        } catch (exception) {
            var errors = exception;
        }
    }
    //#endregion
    //#region private functions
    private LoadInitialData() {
        this.LoadCountry();
        this.LoadStatus();
    }

    private LoadCountry() {
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
    }

    private LoadStatus() {
        this.StatusList.push(new List(1, "Active"));
        this.StatusList.push(new List(1, "InActive"));
    }
    //#endregion
}

try {
    var vm = new ViewModel();
    ko.applyBindings(vm);
    vm.Customer.Errors.showAllMessages(false);
}
catch (exception)
{
    var errors = exception;
}