
# nestjs-knife4j
解决nest-knife4j的body参数无法显示的问题



```shell
pnpm i swagger-ui-express @nestjs/swagger nest-knife4j
```


in main.ts

```typescript
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger'
import { knife4jSetup } from 'nestjs-knife4j'


async function bootstrap(){
  ...
    
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
  await app.listen(3000)
  ...
}


