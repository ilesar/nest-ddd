import * as request from 'supertest';

interface UserInterface {
  id: string;
  idToken: string;
}

export class GraphqlTestUtil {
  public static server;

  public static user: UserInterface;

  private static readonly BASE_ENDPOINT = '/graphql';

  public static async executeGetRequest(requestDescriptor: {
    query: string;
    variables?: any;
    onResponse?: (response) => void;
  }) {
    const response = await this.executeRequest(
      'get',
      requestDescriptor.query,
      requestDescriptor.variables,
    );
    return this.processResponse(response, requestDescriptor.onResponse);
  }

  public static async executePostRequest(requestDescriptor: {
    query: string;
    variables?: any;
    onResponse?: (response) => void;
  }) {
    const response = await this.executeRequest(
      'post',
      requestDescriptor.query,
      requestDescriptor.variables,
    );

    return this.processResponse(response, requestDescriptor.onResponse);
  }

  private static executeRequest(type: string, query: string, variables: any) {
    if (!this.server) {
      throw new Error('Provide server to graphql testing util');
    }

    const requestBuilder: any = request(this.server);
    let requestInstance;

    switch (type) {
      case 'get':
        requestInstance = requestBuilder.get(this.BASE_ENDPOINT);
        break;
      case 'post':
        requestInstance = requestBuilder.post(this.BASE_ENDPOINT);
        break;
      default:
        throw new Error('Unsupported request method');
    }

    if (this.user) {
      requestInstance = requestInstance.set(
        'Authorization',
        `Bearer ${this.user.idToken}`,
      );
    }

    return requestInstance
      .send({
        variables,
        query,
      })
      .then(({ body }) => {
        if (body.errors) {
          throw new Error(body.errors[0]);
        }

        expect(body.data).toBeDefined();

        return body.data;
      })
      .catch((err) => {
        throw err;
      });
  }

  private static processResponse<T>(
    response: any,
    onResponse?: (response) => T,
  ) {
    if (onResponse) {
      return onResponse(response);
    }

    return response;
  }
}
