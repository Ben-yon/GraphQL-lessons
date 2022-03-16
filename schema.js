import { buildSchema } from 'graphql';

const schema = buildSchema(`
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
`);

export default schema; 