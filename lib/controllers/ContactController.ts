import * as mongoose from "mongoose";
import { ContactSchema } from "../models/Contact";
import { Request, Response } from "express";

const Contact = mongoose.model('Contact', ContactSchema);

export class ContactController {
  public addContact (req: Request, res: Response) {
    let contact = new Contact(req.body)

    contact.save((err, contact) => {
      if (err) {
        res.send(err);
      }

      res.json(contact);
    });
  }

  public getContacts (req: Request, res: Response) {
    Contact.find({}, (err, contact) => {
      if (err) {
        res.send(err);
      }

      res.json(contact);
    });
  }

  public getContact (req: Request, res: Response) {
    Contact.findById(req.params.contactId, (err, contact) => {
      if (err) {
        res.send(err);
      }

      if (!contact) {
        res.send({ message: 'Contact not found' });
      } 

      res.json(contact);
    });
  }

  public updateContact(req: Request, res: Response) {
    Contact.findByIdAndUpdate(
      { 
        _id: req.params.contactId
      }, 
      req.body, 
      { 
        new: true 
      }, 
      (err, contact) => {
        if (err) {
          res.send(err);
        }

      res.json(contact);
    })
  }

  public deleteContact(req: Request, res: Response) {
    Contact.deleteOne({ _id: req.params.contactId }, err => {
      if (err) {
        res.send(err);
      }

      res.json({ message: "Contact successfully deleted" });
    });
  }
}
