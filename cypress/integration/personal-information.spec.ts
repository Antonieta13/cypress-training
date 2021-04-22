import { PersonalInformation } from  "../page/index"

describe("Fill a form", () => {

    let personalInformation: PersonalInformation;

    before(() => {

        personalInformation = new PersonalInformation;
    })

    it("then the form must be fill", () => {

        const hobbiesList = ["Sports","Reading", "Music"];

        personalInformation.visitFormPage()
        personalInformation.InsertName("Holmes")
        personalInformation.InsertLastName("Salazar")
        personalInformation.InsertEmail("hibarras@email.com")
        personalInformation.SelectGender("Male")
        personalInformation.InsertMobile("3656589156")
        personalInformation.InsertHobbies(["Reading", "Music"])
        personalInformation.InsertAddress("Av siempreViva # 123")
        personalInformation.Submit()

    })
})
