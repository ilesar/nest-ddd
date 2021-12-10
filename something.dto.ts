import { TemplateDto } from '@core/templates/_template.dto';
import { Dto } from '@core/decorators/dto.decorator';

@Dto(SomethingDto)
export class SomethingDto extends TemplateDto {
}
