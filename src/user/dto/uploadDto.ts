import { ApiProperty } from '@nestjs/swagger';

// copy from document of Swagger nodejs
export class uploadDto {
  @ApiProperty({ type: 'string', format: 'binary' })
  avatar: any; // nhiều file thì thêm [] sau any
}
