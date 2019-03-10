import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { GraphQLModule } from '@nestjs/graphql';
import { ContactModule } from './contact/contact.module';
import { join } from 'path';

@Module({
  imports: [
    ContactModule,
    TypeOrmModule.forRoot(),
    GraphQLModule.forRoot({
      typePaths: ['./**/*.graphql'],
      definitions: {
        path: join(process.cwd(), 'src/graphql.schema.ts'),
        outputAs: 'class',
      },
    }),
  ],
})
export class AppModule {
  constructor(private readonly connection: Connection) { }
}
