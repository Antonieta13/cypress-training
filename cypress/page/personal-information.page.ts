class PersonalInformation {

    private fillingFormPageURL: string;
    private name: string;
    private lastName: string;
    private emailInput: string;
    private gender: string;
    private mobileNumber: string;
    private hobbiesSports: string;
    private hobbiesReading: string;
    private hobbiesMusic: string;
    private currentAddress: string;
    private clickSubmit: string;

    constructor(){

    this.fillingFormPageURL = "https://demoqa.com/automation-practice-form"
    this.name = "#firstName"
    this.lastName = "#lastName"
    this.emailInput = "#userEmail-wrapper"
    this.gender = "#genterWrapper > div.col-md-9.col-sm-12 > div:nth-child(1) > label"
    this.mobileNumber = "#userNumber"
    this.hobbiesSports = "#hobbiesWrapper > div.col-md-9.col-sm-12 > div:nth-child(1) > label"
    this.hobbiesReading = "#hobbiesWrapper > div.col-md-9.col-sm-12 > div:nth-child(2) > label"
    this.hobbiesMusic = "#hobbiesWrapper > div.col-md-9.col-sm-12 > div:nth-child(3) > label"
    this.currentAddress = "#currentAddress"
    this.clickSubmit = "#submit"
    }

    public visitFormPage(): void {
    cy.visit(this.fillingFormPageURL)
    }

    public InsertName(name:string): void {
         cy.get(this.name).type(name)
    }

    public InsertLastName(lastName:string): void {
         cy.get(this.lastName).type(lastName)
    }

    public InsertEmail(email:string): void {
       cy.get(this.emailInput).type(email)
    }

    public SelectGender(gender:string): void {
        cy.get(this.gender).type(gender)
    }

    public InsertMobile(mobileNumber:string): void {
      cy.get(this.mobileNumber).type(mobileNumber)
    }


    public InsertHobbies(names:string[]) {
        names.forEach( name =>  {
                switch (name) {
                    case "Sports":
                        cy.get(this.hobbiesSports).click()
                        break;
                    case "Music":
                        cy.get(this.hobbiesReading).click()
                        break;
                    case "Reading":
                        cy.get(this.hobbiesMusic).click()
                        break;
                    default:
                        break;
                }
            }
        )
    }

    public InsertAddress(currentAddress:Selection): void {
            cy.get(this.currentAddress).type(currentAddress)
        }

     public Submit(): void {
            cy.get(this.clickSubmit).click()
        }
    }

    export {PersonalInformation}