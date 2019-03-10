/* tslint:disable */
export class CreateContactInput {
    description: string;
    email: string;
    status: number;
}

export class UpdateContactInput {
    id: number;
    description: string;
    email: string;
    status: number;
}

export class Contact {
    id: number;
    description: string;
    email: string;
    status: number;
}

export abstract class IMutation {
    abstract create(createContactInput?: CreateContactInput): Contact | Promise<Contact>;

    abstract update(updateContactInput?: UpdateContactInput): Contact | Promise<Contact>;
}

export abstract class IQuery {
    abstract contact(id: string): Contact | Promise<Contact>;

    abstract contacts(): Contact[] | Promise<Contact[]>;

    abstract temp__(): boolean | Promise<boolean>;
}
