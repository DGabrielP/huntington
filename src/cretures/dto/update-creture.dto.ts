import { PartialType } from '@nestjs/mapped-types';
import { CreateCretureDto } from './create-creture.dto';

export class UpdateCretureDto extends PartialType(CreateCretureDto) {}
