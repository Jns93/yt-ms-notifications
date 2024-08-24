import { Module } from "@nestjs/common";
import { UsersExtenalService } from "./users.external.service";
import UsersExternalController from "./users.external.controller";
import { UsersRepository } from "./repositories/users.repository";

@Module({
    imports: [],
    providers: [
        UsersExtenalService,
        UsersRepository
    ],
    controllers: [
        UsersExternalController

    ]
})
export class UsersModule {}