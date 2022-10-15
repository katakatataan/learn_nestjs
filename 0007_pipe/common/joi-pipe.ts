import { PipeTransform, Injectable, ArgumentMetadata, BadRequestException } from '@nestjs/common';
import { ObjectSchema } from 'joi';

@Injectable()
export class JoiValidationPipe implements PipeTransform {
  constructor(private schema: ObjectSchema) {
    console.log("schema")
    console.log(schema)
  }

  transform(value: any, metadata: ArgumentMetadata) {
    console.log(value)
    const { error } = this.schema.validate(value);
    console.log(error)
    console.log(value)
    if (error) {
      throw new BadRequestException('Validation failed');
    }
    return value;
  }
}
