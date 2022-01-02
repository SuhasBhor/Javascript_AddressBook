//Initialize variable
class Contact{
    firstName
    lastName
    address
    state
    city
    zipCode
    email
    phoneNumber

    constructor(firstName,lastName,address,state,city,zipCode,email,phoneNumber){
        this.firstName = firstName
        this.lastName = lastName
        this.address = address
        this.state = state
        this.city = city
        this.zipCode = zipCode
        this.email = email
        this.phoneNumber = phoneNumber
    }
}

//AddressBook Array
var addressBook = new Array();

//Initializing Function 
function contactDetails(firstName,lastName,address,state,city,zipCode,email,phoneNumber){
    const firstNamePattern = /^[A-Z][a-zA-Z]{3,}/;
    let firstName_Check = firstNamePattern.test(firstName);

    const lastNamePattern = /^[A-Z][a-zA-Z]{3,}/;
    let lastName_Check = lastNamePattern.test(lastName);

    const addressPattern = /^[A-Z][a-zA-Z0-9]{3,}/;
    let address_Check = addressPattern.test(address);

    const statePattern = /^[A-Z][a-zA-Z]{3,}/;
    let state_Check = statePattern.test(state);

    const cityPattern = /^[A-Z][a-zA-Z]{3,}/;
    let city_Check = cityPattern.test(city);

    const zipCodePattern = /^[0-9]{3}[\s]{1}[0-9]{3}/;
    let zipCode_Check = zipCodePattern.test(zipCode) ;

    const emailPattern = /^[A-Za-z0-9]+(.[A-Za-z0-9]+)*@[^_\\W]+(.[^_\\W]+)?(?=(.[^_\\W]{3,}$|.[a-zA-Z]{2}$)).*$/;
    let email_Check = emailPattern.test(email);

    const phoneNumberPattern = /^[0-9]{2}[\s]{1}[0-9]{10}/;
    let phoneNumber_Check = phoneNumberPattern.test(phoneNumber);

        if(firstName_Check == true && lastName_Check == true && address_Check == true && state_Check == true && city_Check == true
                        && zipCode_Check == true && email_Check == true && phoneNumber_Check == true){
           
            let newCotact = new Contact(firstName,lastName,address,state,city,zipCode,email,phoneNumber);
            console.log("Contact Added Successfully");
            
            addressBook.push(newCotact);

        }else{
            throw 'Contact Details Are Invalid';
        }
}
//Calling Fucntion
contactDetails("Suhas","Bhor","Pune","Maharashtra","Pune","411 057","suhas@gmail.com","91 1234567891");

//Displaying Contact In Address Book
for(let i = 0 ; i < addressBook.length ; i++){
    console.log(addressBook[i]);
}
