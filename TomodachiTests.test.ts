import {Builder,By, Capabilities, until, WebDriver, } from "selenium-webdriver";
import { objectsPage } from "./objectsPage";

const myTest = new objectsPage

test("sign up function", async () => {
    //testing to make sure that a user is able to sign up for a new account

    await myTest.navigate()
    //lands you on the login page
    await myTest.click(myTest.go2signUp)
    //takes you to the sign up page
    await myTest.click(myTest.userName)
    //click username field
    await myTest.setInput(myTest.userName, "user1meee")
    //enters in username
    await myTest.click(myTest.emailInput)
    //clicks on email field
    await myTest.setInput(myTest.emailInput, "ti9412n66@test.com")
    //enters in email
    await myTest.click(myTest.pwdInput)
    //clicks on password field
    await myTest.sendKeys(myTest.pwdInput, `password1\n`)
    //enters in password and then presses enter
    let response = await myTest.getText(myTest.namePlanetInput)
    expect (response).toContain("")
    //if sign up is successful, user is redirected to the "name your planet" page
   

})

test("log out function", async () => {
    //tests to make sure that a user can log out of account when logged into an existing account
    await myTest.click(myTest.logoutButton)
    //clicks the log out button
    let response = await myTest.getText(myTest.emailInput)
    expect (response).toContain("")
    //if log out is successful, user will be redirected to the login page


})
test("log in function", async () => {
    //testing to make sure a user can log into an existing account
    await myTest.click(myTest.emailInput)
    //clicks into email field
    await myTest.setInput(myTest.emailInput, "testing@test.com")
    //enters in email
    await myTest.click(myTest.pwdInput)
    //clicks into password field
    await myTest.sendKeys(myTest.pwdInput, `password1\n`)
    //enters in password and then presses enter
    let response = await myTest.getText(myTest.namePlanetInput)
    expect (response).toContain("")
    //if log in successful, user will be redirected to the "name your planet" page

})

test("new game", async () =>{
    //testing to make sure that a user can create a new game 
    await myTest.click(myTest.newGame)
    //clicks the "new game" button
    let response = await myTest.getText(myTest.namePlanetInput)
    expect (response).toContain("")  
    //if new game function is successful, user will be redirected to the "name your planet" page

})



test("music function", async () =>{
    //testing to make sure that the music button on/off button works
    await myTest.click(myTest.musicBtn)
    //clicks music button to turn it on
    await myTest.click(myTest.musicBtn)
    //clicks music button to turn it off
    let response = await myTest.getText(myTest.musicBtn)
    expect (response).toContain("Music")
    //if the music if turned back off, the button will say "Music"
    

await myTest.driver.quit()
})
