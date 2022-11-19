import NavigationPage from "../pages/navigation_page.js";

class NavigationUI {
    
    constructor(){
        this.navigationPage = new NavigationPage();
    }

    goToPosts = () => {
        this.navigationPage.clickPosts();
    }

    goToTags = () => {
        this.navigationPage.clickTags();
    }
    
    goToSettings=()=>{
        this.navigationPage.clickSettingsOption();
    }
}
export default new NavigationUI();