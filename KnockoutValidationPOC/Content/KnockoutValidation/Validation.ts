/// <reference path="../../scripts/typings/jquery/jquery.d.ts" />
/// <reference path="../../scripts/typings/knockout/knockout.d.ts" />

class Validation {

    //Validation Options Method
    static MaxLength(Length) {
    return { maxLength: Length }
}

    static MinLength(Length) {
    return { minLength: Length }
}

    static Min(minvalue) {
     return { min: minvalue }
}

    public static Max(maxvalue) {
 return { max: maxvalue }
}

    public static RequiredSelect(constant) {
 return { required: { params: true, message: 'Please select ' + constant.value } }
}
    public static RemoveValidation(element) {
        element.extend({ validatable: false });
    }

    public static Required(constant) {
 return { required: { params: true, message: 'Please enter the ' + constant.value } }
}

   public static Email(constant) {
 return { email: { params: true, message: 'Please enter a valid ' + constant.value } }
}

    public static Phone(constant) {
 return { pattern: { message: 'Please enter a valid ' + constant.value, params: /^\D?(\d{3})\D?\D?(\d{3})\D?(\d{4})$/ } }
}

    public static MyRegex(constant) {
 return { pattern: { message: 'Please enter a valid ' + constant.value, params: '^[0-9a-zA-Z ._,-]+$' } }
}

    //Validation Method
    public static ValidateElement(element, ValidationOptions) {
        var options = {

        };
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
    }
}

class Constants {
    public static NAME = { value: "Customer Name", id: 1 };
    public static ADDRESS1 = { value: "Address ", id: 4 };
    public static ADDRESS2 = { value: "Address Line 2", id: 5 };
    public static ADDRESS3 = { value: "Aadress Line 3", id: 6 };
    public static CITY = { value: "City", id: 7 };
    public static STATE = { value: "State/Province", id: 8 };
    public static POSTAL_CODE = { value: "Postal Code", id: 9 };
    public static COUNTRY = { value: "Country", id: 10 };
    public static EMAIL = { value: "Customer Email", id: 11 };
    public static TELEPHONE = { value: "Telephone Number", id: 12 };
    public static FAX = { value: "Fax Number", id: 13 };
    public static STATUS = { value: "Status", id: 14 };
} 