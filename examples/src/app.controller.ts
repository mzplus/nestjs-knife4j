/*
 * @Author: zfplus 627349266@qq.com
 * @Date: 2023-01-13 18:55:44
 * @LastEditors: zfplus 627349266@qq.com
 * @LastEditTime: 2023-01-13 19:22:51
 * @FilePath: /nestjs-knife4j/examples/src/app.controller.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { Controller, Get,Post,Body } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiExtension, ApiOperation, ApiTags } from '@nestjs/swagger';
import {CreateDto} from "./dto/create.app.dto"
@ApiTags('模块名称')
@Controller('cat')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @ApiExtension('x-author', 'DoveAz')
  @ApiOperation({
    summary: 'API 名称',
    description: 'API 描述',
  })
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @ApiOperation({
    summary: '新增',
    description: '新增XX',
  })
  @Post()
  create(@Body() createDto:CreateDto): string {
    return this.appService.getHello();
  }
}
