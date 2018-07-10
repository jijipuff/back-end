// Uncomment these imports to begin using these cool features!

// import {inject} from '@loopback/context';

import { repository } from "@loopback/repository";
import { UserRepository } from "../repositories/user.repository";
import { param, post, get, requestBody } from "@loopback/rest";
import { User } from "../models/user.model";

export class LoginController {
  constructor(
    @repository(UserRepository.name) private userRepo: UserRepository
  ) { }

  @get('/users')
  async getAllUsers(
    @param.query.string("email") email:string
  ): Promise<Array<any>> {

    return await this.userRepo.find({
      where: {
        email
      }
    });
  }
}
