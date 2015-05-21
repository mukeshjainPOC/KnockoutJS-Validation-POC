/// <reference path="../../scripts/typings/jquery/jquery.d.ts" />
/// <reference path="../../scripts/typings/knockout/knockout.d.ts" />
/// <reference path="../../scripts/typings/knockout.validation/knockout.validation.d.ts" />
/// <reference path="validation.ts" />

class ViewModelBase {
    //#region Private members
    private _customer: CustomerBase = new CustomerBase();
   
    //#endregion

    //#region Properties
    public get Customer(): CustomerBase {
        return this._customer;
    }
    public set Customer(value: CustomerBase) {
        this._customer = value;
    }

    //#endregion
}

//#region base Classes
class CustomerBase {

    //#region datamembers
    private _id: KnockoutObservable<number> = ko.observable(null);
    private _address1: KnockoutObservable<string> = ko.observable(null);
    private _address2: KnockoutObservable<string> = ko.observable(null);
    private _address3: KnockoutObservable<string> = ko.observable(null);
    private _city: KnockoutObservable<string> = ko.observable(null);
    private _state: KnockoutObservable<string> = ko.observable(null);
    private _zip: KnockoutObservable<string> = ko.observable(null);
    private _countryCode: KnockoutObservable<string> = ko.observable(null);
    private _customerName: KnockoutObservable<string> = ko.observable(null);
    private _contactEmail: KnockoutObservable<string> = ko.observable(null);
    private _telephone: KnockoutObservable<string> = ko.observable(null);
    private _fax: KnockoutObservable<string> = ko.observable(null);
    private _status: KnockoutObservable<string> = ko.observable(null);
    private _comments: KnockoutObservable<string> = ko.observable(null);
    private _errors: KnockoutValidationErrors;
    
    //#endregion

    //#region properties
    public get Id(): KnockoutObservable<number> {
        return this._id;
    }
    public set Id(value: KnockoutObservable<number>) {
        this._id = value;
    }

    public get Address1(): KnockoutObservable<string> {
        return this._address1;
    }
    public set Address1(value: KnockoutObservable<string>) {
        this._address1 = value;
    }

    public get Address2(): KnockoutObservable<string> {
        return this._address2;
    }
    public set Address2(value: KnockoutObservable<string>) {
        this._address2 = value;
    }

    public get Address3(): KnockoutObservable<string> {
        return this._address3;
    }
    public set Address3(value: KnockoutObservable<string>) {
        this._address3 = value;
    }

    public get City(): KnockoutObservable<string> {
        return this._city;
    }
    public set City(value: KnockoutObservable<string>) {
        this._city = value;
    }

    public get State(): KnockoutObservable<string> {
        return this._state;
    }
    public set State(value: KnockoutObservable<string>) {
        this._state = value;
    }

    public get Zip(): KnockoutObservable<string> {
        return this._zip;
    }
    public set Zip(value: KnockoutObservable<string>) {
        this._zip = value;
    }

    public get CountryCode(): KnockoutObservable<string> {
        return this._countryCode;
    }
    public set CountryCode(value: KnockoutObservable<string>) {
        this._countryCode = value;
    }

    public get CustomerName(): KnockoutObservable<string> {
        return this._customerName;
    }
    public set CustomerName(value: KnockoutObservable<string>) {
        this._customerName = value;
    }

    public get ContactEmail(): KnockoutObservable<string> {
        return this._contactEmail;
    }
    public set ContactEmail(value: KnockoutObservable<string>) {
        this._contactEmail = value;
    }

    public get Telephone(): KnockoutObservable<string> {
        return this._telephone;
    }
    public set Telephone(value: KnockoutObservable<string>) {
        this._telephone = value;
    }

    public get Fax(): KnockoutObservable<string> {
        return this._fax;
    }
    public set Fax(value: KnockoutObservable<string>) {
        this._fax = value;
    }

    public get Status(): KnockoutObservable<string> {
        return this._status;
    }
    public set Status(value: KnockoutObservable<string>) {
        this._status = value;
    }

    public get Comments(): KnockoutObservable<string> {
        return this._comments;
    }
    public set Comments(value: KnockoutObservable<string>) {
        this._comments = value;
    }

    public get Errors(): KnockoutValidationErrors {
        return this._errors;
    }
    public set Errors(value: KnockoutValidationErrors) {
        this._errors = value;
    }
    //#endregion

    //#region constructor
    constructor() {
        this.ApplyValidations();
    }
    //#endregion

    //#region member function
   public ApplyValidations() {
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
    }

   public ResetModel() {
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
    }
    //#endregion
}
class List {

    //#region datamember
    Id: KnockoutObservable<number>;
    Text: KnockoutObservable<string>;
    //#endregion

    //#region constructor
    constructor(id: number, text: string) {
        this.Id = ko.observable(id);
        this.Text = ko.observable(text);
    }
    //#endregion
}


 