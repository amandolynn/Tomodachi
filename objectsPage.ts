import {By, WebDriver} from 'selenium-webdriver'
import { BasePage } from './basePage'

export class objectsPage extends BasePage {
    //Log in test
    emailInput: By= By.xpath('//input[@id="email"]')
    pwdInput: By= By.xpath('//input[@id="pwd"]')
    loginSubmit: By= By.xpath('(//button[@type="submit"])[1]')
    
    

    //Sign up test
    go2signUp: By= By.xpath('//a[@href="/signup"]')
    userName: By= By.xpath('//input[@id="username"]')
    emailInput2: By= By.xpath('//input[@id="email"]')
    pwdInput2: By= By.xpath('//input[@id="pwd"]')
    Submit: By= By.xpath('(//button[@type="submit"])[1]')

    //Kill a planet
    namePlanetInput: By= By.xpath('//input[@name="planetName"]')
    //getElementsByText('Begin', 'button');
    //getElementsByText('Rainfall', 'button');
    deadPlanet: By= By.xpath('//div[@class="interaction-text"]')
    button: By= By.xpath('//div[@class="button-container"]')

    //Music function
    musicBtn: By= By.xpath('//button[@class="music"]')

    //Log out
    logoutButton: By= By.xpath('//button[@class="logout-button"]')

    //New Game          
    newGame: By= By.xpath('//button[@class="newgame-button"]')

    

    constructor() {
        super({url:'https://tomodachi-sadboitay.herokuapp.com/'})
    }

}
