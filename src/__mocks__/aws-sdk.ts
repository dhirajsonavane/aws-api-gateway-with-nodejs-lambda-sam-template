export const awsSdkPromiseResponse = jest.fn().mockReturnValue(Promise.resolve(true));

const getFn = jest.fn().mockImplementation(() => ({ promise: awsSdkPromiseResponse }));
const putFn = jest.fn().mockImplementation(() => ({ promise: awsSdkPromiseResponse }));
const updateFn = jest.fn().mockImplementation(() => ({ promise: awsSdkPromiseResponse }));
const transactWriteFn = jest.fn().mockImplementation(() => ({ promise: awsSdkPromiseResponse }));


class DocumentClient {
  get = getFn;
  put = putFn;
  update = updateFn;
  transactWrite = transactWriteFn;
}

export const DynamoDB = {
  DocumentClient,
};