import {Builder,By, Capabilities, until, WebDriver, } from "selenium-webdriver";
import { objectsPage } from "./objectsPage";

const myTest = new objectsPage

test("sign up function", async () => {
    await myTest.navigate()
    await myTest.click(myTest.go2signUp)
    await myTest.click(myTest.userName)
    await myTest.setInput(myTest.userName, "usernameee")
    await myTest.click(myTest.emailInput)
    await myTest.setInput(myTest.emailInput, "ti872n66@test.com")
    await myTest.click(myTest.pwdInput)
    await myTest.sendKeys(myTest.pwdInput, `password1\n`)
    let response = await myTest.getText(myTest.namePlanetInput)
    expect (response).toContain("")
   

})

test("log out function", async () => {
    await myTest.click(myTest.logoutButton)
    let response = await myTest.getText(myTest.emailInput)
    expect (response).toContain("")


})
test("log in function", async () => {
    await myTest.click(myTest.emailInput)
    await myTest.setInput(myTest.emailInput, "testing@test.com")
    await myTest.click(myTest.pwdInput)
    await myTest.sendKeys(myTest.pwdInput, `password1\n`)
    let response = await myTest.getText(myTest.namePlanetInput)
    expect (response).toContain("")

})
test("new game", async () =>{
    await myTest.click(myTest.newGame)
    let response = await myTest.getText(myTest.namePlanetInput)
    expect (response).toContain("")  

})



test("music function", async () =>{
    await myTest.click(myTest.musicBtn)
    await myTest.click(myTest.musicBtn)
    let response = await myTest.getText(myTest.musicBtn)
    expect (response).toContain("Music")

await myTest.driver.quit()
})
