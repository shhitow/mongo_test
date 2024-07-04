import { IsString, Length, Matches } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class SearchDocumentDto {
  @ApiProperty({
    description: 'The name to search for',
    example: 'Country',
    minLength: 2,
    maxLength: 20,
  })
  @IsString()
  @Length(2, 20)
  @Matches(/^[a-zA-Z]+$/, {
    message:
      'name can only contain letters without digits or special characters',
  })
  name: string;
}
