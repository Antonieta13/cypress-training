import { PersonalFormPage,PersonalInformation } from  "../page/index"

describe("Fill a form", () => {

    let personalFormPage: PersonalFormPage;

    before(() => {

        personalFormPage = new PersonalFormPage;
    })

    it("then the form must be fill", () => {



       const person = new PersonalInformation ("Holmes", "Salazar",
       "hibarras@email.com", "Male", "3656589156", ["Music", "Reading"],
       "Av siempreViva # 123")

       personalFormPage.visitFormPage()
       personalFormPage.FillForm(person)
       personalFormPage.validateModalFullName(person)
      // personalFormPage.validateModalEmail(person)



    })
})
