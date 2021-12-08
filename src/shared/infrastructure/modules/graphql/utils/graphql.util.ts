export class GraphqlUtil {
  static generateDtoNameForSchema(dto: any) {
    return dto.name.replace('Dto', '');
  }
}
