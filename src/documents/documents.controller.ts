import {
  Controller,
  Get,
  Query,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { DocumentsService } from './documents.service';
import { ApiQuery, ApiResponse } from '@nestjs/swagger';
import { SearchDocumentDto } from './dto/search-document.dto';
import { DocumentDto } from './dto/document.dto';

@Controller('documents')
export class DocumentsController {
  constructor(private readonly documentsService: DocumentsService) {}

  @Get('search')
  @UsePipes(new ValidationPipe({ transform: true }))
  @ApiQuery({ name: 'name', type: String })
  @ApiResponse({
    status: 200,
    description: 'The document(s) has been successfully found.',
    type: DocumentDto,
    isArray: false,
  })
  async search(@Query() query: SearchDocumentDto) {
    return this.documentsService.findByName(query.name);
  }
}
