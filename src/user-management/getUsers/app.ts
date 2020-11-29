import { APIGatewayEvent } from 'aws-lambda';
import DynamoDBRepository from '../../data/DynamoDBRepository';
import ApiResponse, { errorResposnse } from '../../utility/response';

export const handler = async (event: APIGatewayEvent) => {
  try {
    const environment = event?.stageVariables?.Environment;
    const tableName = `${environment}-Users`;
    const repository = new DynamoDBRepository();

    const params = {
      TableName: tableName as string,
    };

    const items = await repository.list(params);
    return new ApiResponse(200, JSON.stringify(items));
  } catch (err) {
    return errorResposnse(err);
  }
};