const dev = {
  STRIPE_KEY: "pk_test_51GuydWIgdYZhRGwdrLmjhwMLqmEM8ow1T3HjkEVzjKxI84GfLGm7MkE7T1xD0kkkAZ4AzX3Kd8kIWGpSVmRXTCZi00h8oDPdn1",
  s3: {
    REGION: "eu-central-1",
    BUCKET: "notes-app-2-api-dev-attachmentsbucket-1m6vsut72i735"
  },
  apiGateway: {
    REGION: "eu-central-1",
    URL: "https://rovzn6ibxd.execute-api.eu-central-1.amazonaws.com/dev"
  },
  cognito: {
    REGION: "eu-central-1",
    USER_POOL_ID: "eu-central-1_RyYLp74Pg",
    APP_CLIENT_ID: "6m3iacuj53u8krt5qdlrfsruct",
    IDENTITY_POOL_ID: "eu-central-1:5737a5a3-802a-4385-b9dd-f6921b10110d"
  }
};

const prod = {
  STRIPE_KEY: "pk_test_51GuydWIgdYZhRGwdrLmjhwMLqmEM8ow1T3HjkEVzjKxI84GfLGm7MkE7T1xD0kkkAZ4AzX3Kd8kIWGpSVmRXTCZi00h8oDPdn1",
  s3: {
    REGION: "eu-central-1",
    BUCKET: "notes-app-2-api-prod-attachmentsbucket-1gtckm67ygfxb"
  },
  apiGateway: {
    REGION: "eu-central-1",
    URL: "https://tkzlizuin1.execute-api.eu-central-1.amazonaws.com/prod"
  },
  cognito: {
    REGION: "eu-central-1",
    USER_POOL_ID: "eu-central-1_sRUdx32OQ",
    APP_CLIENT_ID: "56rle8e3p3e96e5c4843sq7q54",
    IDENTITY_POOL_ID: "eu-central-1:9ff96873-eca3-49f6-8ccd-bb3556cf87bc"
  }
};

// Default to dev if not set
const config = process.env.REACT_APP_STAGE === 'prod'
  ? prod
  : dev;

export default {
  // Add common config values here
  MAX_ATTACHMENT_SIZE: 5000000,
  ...config
};