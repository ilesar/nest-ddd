export const userMutations = {
  login: `
        mutation GenerateAccessToken($input: GenerateAccessTokenInput!) {
  generateAccessToken(input: $input) {
    id
    idToken
  }
}
`,
  createWebIdentity: `mutation CreateWebIdentity {
  createWebIdentity {
    token
  }
}`,
  validateWebIdentity: `mutation ValidateWebIdentity($validateWebIdentityInput: ValidateWebIdentityInput!) {
  validateWebIdentity(input: $validateWebIdentityInput)
}`,
  updateUser: `mutation UpdateOneUser($updateOneUserInput: UpdateUserInput!) {
  updateOneUser(input: $updateOneUserInput) {
    id
  }
}`,
};
