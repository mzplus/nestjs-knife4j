/*
 * @Author: zfplus 627349266@qq.com
 * @Date: 2023-01-13 16:31:54
 * @LastEditors: zfplus 627349266@qq.com
 * @LastEditTime: 2023-01-13 18:59:03
 * @FilePath: /nest-knife4j/examples/src/main.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger'
// import { knife4jSetup } from 'nest-knife4j'
//本地测试
import { knife4jSetup } from '../../knife4j/index.js'
// import { knife4jSetup } from '../../index'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  const options = new DocumentBuilder()
    .setTitle('Cats example')
    .setDescription('The cats API description')
    .setVersion('1.0')
    .addTag('cats')
    .build()
  const document = SwaggerModule.createDocument(app, options)
  SwaggerModule.setup('api', app, document)
  knife4jSetup(app, {
    urls: [
      {
        name: '2.X版本',
        url: `/api-json`,
        swaggerVersion: '3.0',
        location: `/api-json`,
      },
    ],
  })
  console.log('localhost: 3002')
  await app.listen(3002)
}
bootstrap()
