import { Controller } from "@nestjs/common";
import { MessagePattern } from "@nestjs/microservices";
import { UsersExtenalService } from "./users.external.service";

@Controller()
export default class UsersExternalController {
    constructor(
        private readonly service: UsersExtenalService
    ) {

    }
    //CONTROLLER FICA OUVINDO O CANAL/TOPICO USER-CREATED
    @MessagePattern('users-user-created')
    async createUser(data: { id: string, email: string, name: string}) {
        console.warn('usuario criado:' + data.id);
        return await this.service.create(data);
    }
}