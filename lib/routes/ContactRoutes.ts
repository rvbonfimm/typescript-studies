import { Request, Response } from "express";
import { ContactController } from "../controllers/ContactController";

export class Routes {
  public contactController: ContactController = new ContactController(); 

  public routes(app): void {
    app.route('/contacts')
    .get(this.contactController.getContacts)

    app.route('/contact')
    .post(this.contactController.addContact)
    
    app.route('/contacts/:contactId')
    .get(this.contactController.getContact)
    .put(this.contactController.updateContact)
    .delete(this.contactController.deleteContact)
  }
};
