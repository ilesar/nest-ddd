import * as dotenv from 'dotenv';

dotenv.config();

export const s3MediaConfig: any = {
  bucketName: process.env.AWS_S3_MEDIA_BUCKET_NAME,
  region: process.env.AWS_REGION,
  accessKeyId: process.env.AWS_ACCESS_KEY,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
};
