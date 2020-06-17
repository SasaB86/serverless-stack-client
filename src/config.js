export default {
    MAX_ATTACHMENT_SIZE: 5000000,
    s3: {
      REGION: "eu-central-1",
      BUCKET: "notes-app-api-prod-serverlessdeploymentbucket-1fh4peetmc1my"
    },
    apiGateway: {
      REGION: "eu-central-1",
      URL: "https://gd1mlvcz33.execute-api.eu-central-1.amazonaws.com/prod"
    },
    cognito: {
      REGION: "eu-central-1",
      USER_POOL_ID: "eu-central-1_BHIaHtQ9f",
      APP_CLIENT_ID: "6p2e112j0vb5mihjaeaevk6b22",
      IDENTITY_POOL_ID: "eu-central-1:775d0137-deeb-4583-8a3b-1b7c38e16e65"
    }
  };