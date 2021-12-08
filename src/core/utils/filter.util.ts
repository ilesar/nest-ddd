import * as _ from 'lodash';

export class FilterUtil {
  public static updateModel<T>(
    model: T,
    propertyMap: { [key: string]: any },
  ): T {
    const filteredPropertyMap = _.omitBy(
      propertyMap,
      _.isUndefined || _.isNull,
    );

    return _.pickBy(
      {
        ...model,
        ...filteredPropertyMap,
      },
      _.identity(),
    ) as T;
  }
}
