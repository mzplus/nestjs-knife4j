/*
 * @Author: zfplus 627349266@qq.com
 * @Date: 2023-01-13 19:16:22
 * @LastEditors: zfplus 627349266@qq.com
 * @LastEditTime: 2023-01-13 19:24:41
 * @FilePath: /nestjs-knife4j/examples/src/dto/create.app.dto.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

import { ApiPropertyOptional } from '@nestjs/swagger';
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional ,IsString} from 'class-validator';
export  class CreateDto{
    @IsString()
    @IsNotEmpty({message: 'Name is required'})
    @ApiProperty({description: '名称', example: 'name'})
    name: string;
    @IsString()
    @IsNotEmpty({message: 'Name is required'})
    @ApiPropertyOptional({description: '编码', example: 'code'})
    code: string;
}