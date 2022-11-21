export default class NavigationPage {

    constructor(){
        this.postsLocator = "li a[href='#/posts/']";
        this.tagsLocator = "li a[href='#/tags/']"
        this.settingsOptionLocator = "a[href='#/settings/']" ;
        this.staffOptionLocator = "a[href='#/staff/']";
    }

    clickStaffOption=()=>{
        cy.get(this.staffOptionLocator).first().click();
    }

    clickPosts = () => {
        cy.get(this.postsLocator).click();
    }

    clickTags = () => {
        cy.get(this.tagsLocator).click();
    }
        
    clickSettingsOption=()=>{
        cy.get(this.settingsOptionLocator).first().click();
    }

}