import resolvers from "./resolvers";
import { makeExecutableSchema } from "@graphql-tools/schema";


const typeDefs = `
   type Friend {
     id: ID
     firstName: String
     lastName: String
     gender: Gender
     language: String
     email: String
     age: Int,
     contacts: [Contact]
   }

   enum Gender {
     MALE
     FEMALE 
     OTHER
   }

   input FriendInput {
    id: ID
    firstName: String!
    lastName: String
    gender: Gender
    language: String
    email: String
    age: Int,
    contacts: [ContactInput]
   }

   type Alien {
     id: ID,
     firstName: String
     lastName: String
     planet: String
   }

   type Contact{
     firstName: String
     lastName: String
   }

   input ContactInput {
     firstName: String
     lastName: String
   }
  type Query {
    getFriend(id: ID): Friend 
  }

  type Mutation {
    createFriend(input: FriendInput): Friend
  }
`;
const schema = makeExecutableSchema({ typeDefs, resolvers })
export { schema }; 