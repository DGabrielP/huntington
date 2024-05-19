import { Injectable } from '@nestjs/common';
import { CreateCretureDto } from './dto/create-creture.dto';
import { UpdateCretureDto } from './dto/update-creture.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CreturesService {
  constructor(private prisma: PrismaService){}
  create(createCretureDto: CreateCretureDto) {
    return 'This action adds a new creture';
  }

  findAllAlive() {
    return this.prisma.creature.findMany({
      where: {extinct: false},
    });
  }
  findAllExtinc() {
    return this.prisma.creature.findMany({
      where: {extinct: true},
    })
  }

  findOne(id: number) {
    return this.prisma.creature.findUnique({
      where: {id},
    });
  }

  update(id: number, updateCretureDto: UpdateCretureDto) {
    return `This action updates a #${id} creture`;
  }

  remove(id: number) {
    return this.prisma.creature.delete({
      where: {id},
    });
  }
}
