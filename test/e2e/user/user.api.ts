import { GraphqlTestUtil } from '../../util/graphql.test-util';
import { userMutations } from './user.mutations';
import { upperFirst } from 'lodash';
import { UserRole } from '@shared/domain/enums/user-role.enum';

export class UserApi {
  static async loggedInAs(phoneNumber: string, role?: UserRole) {
    GraphqlTestUtil.user = await GraphqlTestUtil.executePostRequest({
      query: userMutations.login,
      variables: {
        input: {
          phoneNumber: phoneNumber,
          role: role,
        },
      },
      onResponse: (response) => {
        const user = response.generateAccessToken;
        const jwtToken = user.idToken;

        expect(jwtToken).toBeDefined();
        expect(typeof jwtToken).toBe('string');
        expect(jwtToken.length).toBeGreaterThan(1000);

        return user;
      },
    });

    await this.updateUser(role);
  }

  static async updateUser(role: UserRole): Promise<string> {
    return await GraphqlTestUtil.executePostRequest({
      query: userMutations.updateUser,
      variables: {
        updateOneUserInput: {
          roles: [upperFirst(role)],
        },
      },
      onResponse: (response) => {
        return response.updateOneUser;
      },
    });
  }

  static async createQrCode(): Promise<string> {
    return await GraphqlTestUtil.executePostRequest({
      query: userMutations.createWebIdentity,
      variables: null,
      onResponse: (response) => {
        return response.createWebIdentity.token;
      },
    });
  }

  // static async subscribeToWebAccessToken() {}

  static async scanQrCode(token: string): Promise<void> {
    await GraphqlTestUtil.executePostRequest({
      query: userMutations.validateWebIdentity,
      variables: {
        validateWebIdentityInput: {
          token: token,
        },
      },
      onResponse: (response) => {
        return response.validateWebIdentity.token;
      },
    });
  }
}
