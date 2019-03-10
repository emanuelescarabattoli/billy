import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ContactService } from './contact.service';
import { Contact } from './contact.entity';
import { ContactResolver } from './contact.resolver';

@Module({
    imports: [TypeOrmModule.forFeature([Contact])],
    providers: [ContactService, ContactResolver],
})
export class ContactModule { }
