import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { AccountService } from './account.service';
import { AccountValidator } from '@services/common/validation/account.validator';

@Controller()
export class AccountController {
  constructor(private readonly accountService: AccountService) {}

  @Get(':idConta')
  async balance(@Param('idConta') idConta: string) {
    return await this.accountService.balance(idConta);
  }

  @Post()
  async create(@Body() data: AccountValidator) {
    return await this.accountService.create(data);
  }

  @Put('deposit/:idConta')
  async deposit(
    @Param('idConta') idConta: string,
    @Body('value') value: number,
  ) {
    return await this.accountService.deposit(idConta, value);
  }

  @Put('withdraw/:idConta')
  async withdraw(
    @Param('idConta') idConta: string,
    @Body('value') value: number,
  ) {
    return await this.accountService.withdraw(idConta, value);
  }

  @Delete('block/:idConta')
  async block(@Param('idConta') idConta: string) {
    return await this.accountService.block(idConta);
  }
}
