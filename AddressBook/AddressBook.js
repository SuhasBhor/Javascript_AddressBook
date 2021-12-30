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
console.log("\nWelcome To The Address Book\n")
console.log("Insert Contact Into Address Book")
let newCotact = new Contact("Suhas","Bhor","Pune","Maharashtra","Pune",411057,"suhas@gmail.com",1234567890) 
console.log(newCotact)
console.log("Contact Added Successfully")