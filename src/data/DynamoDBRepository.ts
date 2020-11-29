import { DynamoDB } from 'aws-sdk';
import DBException from './DBException';

export default class DynamoDBRepository {

  dynamoDbClient = new DynamoDB.DocumentClient();

  async list(params: any) {
    try {
      const { Items } = await this.dynamoDbClient.scan(params).promise()
      return Items;
    } catch (err) {
      throw new DBException(err.message, err.statusCode);
    }
  }

  async query(params: any) {
    try {
      const { Items } = await this.dynamoDbClient.query(params).promise()
      return Items;
    } catch (err) {
      throw new DBException(err.message, err.statusCode);
    }
  }

  async get(params: any) {
    try {
      const { Item } = await this.dynamoDbClient.get(params).promise()
      return Item;
    } catch (err) {
      throw new DBException(err.message, err.statusCode);
    }
  }

  async update(params: any) {
    try {
      const { Attributes } = await this.dynamoDbClient.update(params).promise()
      return Attributes;
    } catch (err) {
      throw new DBException(err.message, err.statusCode);
    }
  }

  async put(params: any) {
    try {
      await this.dynamoDbClient.put(params).promise()
    } catch (err) {
      throw new DBException(err.message, err.statusCode);
    }
  }

  async transactWrite(params: any) {
    try {
      await this.dynamoDbClient.transactWrite(params).promise()
    } catch (err) {
      throw new DBException(err.message, err.statusCode);
    }
  }

  async transactGet(params: any) {
    try {
      const { Responses } = await this.dynamoDbClient.transactGet(params).promise();
      return Responses;
    } catch (err) {
      throw new DBException(err.message, err.statusCode);
    }
  }

}