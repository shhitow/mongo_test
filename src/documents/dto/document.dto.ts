import { ApiProperty } from '@nestjs/swagger';

export class DocumentDto {
  @ApiProperty({
    example: '66858550574836c59640e8a3',
  })
  _id: string;

  @ApiProperty({
    example: 'Country',
  })
  name: string;

  @ApiProperty({
    example: 0,
  })
  __v: number;
}
