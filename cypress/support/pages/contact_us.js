export class ContactsPage {
   
    goToContact(){
        cy.get("a[href='/contact_us']").click()
        cy.get("[class^='title text-center']")
    }
    
    contactName(name) {
        cy.get("input[placeholder='Name']").type(name)
    }

    contactEmail(email){
        cy.get("input[placeholder='Email']").type(email)
    }

    contactSubject(subject){
        cy.get("input[placeholder='Subject']").type(subject)
    }

    contactMessage(message){
        cy.get("textarea[placeholder='Your Message Here']").type(message)
    }
   
    contactFillForm(name, email, subject, message){
        contact.contactName(name)
        contact.contactEmail(email)
        contact.contactSubject(subject)
        contact.contactMessage(message)
    }

    contactUpload(file){
        cy.get("input[name='upload_file']").selectFile(file, {
            action: "drag-drop"
        })
    }

    contactSubmit(){
        cy.get("input[name='submit']").click()
        cy.get(".alert-success").contains("Success! Your details have been submitted successfully.")

    }

}
export const contact = new ContactsPage()