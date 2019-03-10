import { ParseIntPipe } from '@nestjs/common';
import { Args, Query, Resolver, Mutation } from '@nestjs/graphql';

import { Contact } from '../graphql.schema';
import { ContactService } from './contact.service';
import { ContactCreateDto } from './dto/contact.create.dto';
import { ContactUpdateDto } from './dto/contact.update.dto';

@Resolver('Contact')
export class ContactResolver {
    constructor(private readonly contactService: ContactService) { }

    @Query('contacts')
    async contacts(): Promise<Contact[]> {
        return await this.contactService.list();
    }

    @Query('contact')
    async contact(@Args('id', ParseIntPipe) id: number): Promise<Contact> {
        return await this.contactService.detail(id);
    }

    @Mutation('create')
    async create(@Args('createContactInput') contactCreateDto: ContactCreateDto): Promise<Contact> {
        return await this.contactService.create(contactCreateDto);
    }

    @Mutation('update')
    async update(@Args('updateContactInput') contactUpdateDto: ContactUpdateDto): Promise<Contact> {
        return await this.contactService.update(contactUpdateDto);
    }
}
