export class User {
  firstName: string;
  lastName: string;
  email: string;
  birthDate: number;
  street: string;
  zipCode: number;
  city: string;

  constructor(obj?: any) { //means any Object is useable

    this.firstName = obj ? obj.firstName : ''; //if obj excist? else empty string
    this.lastName = obj ? obj.lastName : ''; //if obj excist? else empty string
    this.email = obj ? obj.email : ''; //if obj excist? else empty string
    this.birthDate = obj ? obj.birthDate : ''; //if obj excist? else empty string
    this.street = obj ? obj.street : ''; //if obj excist? else empty string
    this.zipCode = obj ? obj.zipCode : ''; //if obj excist? else empty string
    this.city = obj ? obj.city : ''; //if obj excist? else empty string
  }

  public toJSON() {
    return {
     firstName: this.firstName,
     lastName: this.lastName,
     email: this.email,
     birthDate: this.birthDate,
     street: this.street,
     zipCode: this.zipCode,
     city: this.city
    };
  }
}