import { Injectable } from "@nestjs/common";
import CreateUserDto from "../dtos/create-user.dto";
import { PrismaService } from "src/modules/global/prisma/prisma.service";

@Injectable()
export class UsersRepository {
    constructor(
        private readonly prismaService: PrismaService
    ) {

    }
    async create(user: CreateUserDto) {
        const createdUser = await this.prismaService.users.create({
                data: user
            });
        return createdUser;
    }
}