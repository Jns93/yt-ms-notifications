import { Injectable } from "@nestjs/common";
import CreateUserDto from "./dtos/create-user.dto";
import { UsersRepository } from "./repositories/users.repository";

@Injectable()
export class UsersExtenalService{
    constructor(
        private readonly repository: UsersRepository
    ) {

    }
    async create(user: CreateUserDto) {
        return await this.repository.create(user);
    }
}