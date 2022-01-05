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
           
            let newContact = new Contact(firstName,lastName,address,state,city,zipCode,email,phoneNumber);
            console.log("Contact Added Successfully");
            
            addressBook.push(newContact);

        }else{
            throw 'Contact Details Are Invalid';
        }
}

//Edit Contact
function editContact(findName,editedVariable,variableNewValue){
    if(addressBook.length == null){
        console.log("Add Contact In Address Book");
    }else{
        addressBook.forEach(newContact => {
            if(newContact.firstName == findName){
                switch(editedVariable){
                    case "firstName":
                        newContact.firstName = variableNewValue;
                        break;
                    case "lastName":
                        newContact.lastName = variableNewValue;
                        break;
                    case "address":
                        newContact.address = variableNewValue;
                        break;
                    case "state":
                        newContact.state = variableNewValue;
                        break;
                    case "city":
                        newContact.city = variableNewValue;
                        break;
                    case "zipCode":
                        newContact.zipCode = variableNewValue;
                        break;  
                    case "firstName":
                        newContact.firstName = variableNewValue;
                        break;
                    case "lastName":
                        newContact.lastName = variableNewValue;
                        break;      
                }
            }
        })
    }
}

function deleteContact(first_Name){
    if(addressBook.length == null){
        console.log("Add Contact In Address Book");
    }else{
        for(let i = 0; i <addressBook.length ; i++){
            if(addressBook[i].firstName == first_Name){
                addressBook.splice(i,1);
                console.log("Contact Deleted Successfully");
            }
        }
    }
}

function selectFunction(select){
    switch(select){
        case "contactDetails":
                //Calling Contact Details Fucntion
                contactDetails("Suhas","Bhor","Pune","Maharashtra","Pune","411 057","suhas@gmail.com","91 1234567891");
                contactDetails("Adinath","Bhor","Pune","Maharashtra","Pune","411 057","adinath@gmail.com","91 1098765432");
                console.log(addressBook);
                break;
        case "editContact":
                //Calling Edit Contact Function
                editContact("Suhas","city","Hinjewadi");
                console.log(addressBook);
                break;
        case "deleteContact":
                //Calling Delete Contact Function
                deleteContact("Adinath");
                console.log(addressBook);
                break;
    }
}

selectFunction("contactDetails");
selectFunction("editContact");
selectFunction("deleteContact");




