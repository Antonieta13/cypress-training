import { MenuContentPage } from "../page/index"
import { DressesListPage } from "../page/index"

const menuContentPage = new MenuContentPage();
const dressesListPage = new DressesListPage();

describe("the user navigates to the dresses page should", () => {

    let menuContentPage: MenuContentPage;
    let dressesListPage: DressesListPage;

    before(() => {
        menuContentPage = new MenuContentPage();
        dressesListPage = new DressesListPage();
    })

    it("show the available dresses", () => {
        const DressesNames = ["Printed Dress", "Printed Dress", "Printed Summer Dress", "Printed Summer Dress", "Printed Chiffon Dress"];

        menuContentPage.visitMenuContentPage()
        menuContentPage.goToDressesMenu()

        dressesListPage.validateItemsNumber(5)
        dressesListPage.validateItemsNames(DressesNames)

    })
})
