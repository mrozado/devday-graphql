const graphQl = require("graphql");
const model = require("../models");
const resolver = require("graphql-sequelize").resolver;
const attributeFields = require("graphql-sequelize").attributeFields;

const userType = new graphQl.GraphQLObjectType({
  name: "User",
  description: "...",
  fields: attributeFields(model.User)
});

const reviewType = new graphQl.GraphQLObjectType({
  name: "Review",
  description: "A review",
  fields: {
    ...attributeFields(model.Review),
    user: {
      type: userType,
      resolve: resolver(model.Review.User)
    }
  }
});

const barType = new graphQl.GraphQLObjectType({
  name: "Bar",
  description: "...",
  fields: {
    ...attributeFields(model.Bar),
    reviews: {
      type: graphQl.GraphQLList(reviewType),
      resolve: resolver(model.Bar.Reviews)
    }
  }
});

module.exports = new graphQl.GraphQLSchema({
  query: new graphQl.GraphQLObjectType({
    name: "RootQueryType",
    fields: {
      users: {
        type: graphQl.GraphQLList(userType),
        resolve: resolver(model.User)
      },
      bars: {
        type: graphQl.GraphQLList(barType),
        resolve: resolver(model.Bar)
      },
      reviews: {
        type: graphQl.GraphQLList(reviewType),
        resolve: resolver(model.Review)
      }
    }
  })
});
