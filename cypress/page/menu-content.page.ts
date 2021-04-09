class MenuContentPage {
    private tShirtMenu: string;
    private menuContentPageURL: string
    private dressMenu: string

    constructor() {
        this.tShirtMenu = '#block_top_menu > ul > li:nth-child(3) > a';
        this.menuContentPageURL = 'http://automationpractice.com/';
        this.dressMenu = '#block_top_menu > ul > li:nth-child(2) > a'
    }

    public visitMenuContentPage(): void {
        cy.visit(this.menuContentPageURL)
    }

    public goToTShirtMenu(): void {
        cy.get(this.tShirtMenu).click()
    }

    public goToDressesMenu(): void {
        cy.get(this.dressMenu).click()
    }

}
export { MenuContentPage }
