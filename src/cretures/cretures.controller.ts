import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CreturesService } from './cretures.service';
import { CreateCretureDto } from './dto/create-creture.dto';
import { UpdateCretureDto } from './dto/update-creture.dto';

@Controller('cretures')
export class CreturesController {
  constructor(private readonly creturesService: CreturesService) {}

  @Post()
  create(@Body() createCretureDto: CreateCretureDto) {
    return this.creturesService.create(createCretureDto);
  }

  @Get()
  findAllAlive() {
    return this.creturesService.findAllAlive();
  }

  @Get('extinct') //localhodt:300/cretures/estinct
  findExtinc() {
    return this.creturesService.findAllExtinc();
  }

  @Get(':id') //localhost:3000/cretures/1
  findOne(@Param('id') id: string) {
    return this.creturesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCretureDto: UpdateCretureDto) {
    return this.creturesService.update(+id, updateCretureDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.creturesService.remove(+id);
  }
}
