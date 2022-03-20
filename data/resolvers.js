import mongoose from 'mongoose';
import { Friends } from './dbConnectors';

const friendDatabase = {};

// resolver map
export const resolvers = {
  Query: {
    getFriend: ({ id }) => {
      return new Friends(id, friendDatabase[id]);
    },
  },
  Mutation: {
    createFriend: async (_, { input }) => {
      const newFriend = new Friends({
        firstName: input.firstName,
        lastName: input.lastName,
        gender: input.gender, 
        language: input.language,
        email: input.email,
        age: input.age,
        contacts: input.contacts

      });
      newFriend.id = newFriend._id;

      await newFriend.save();
      return newFriend;
    }
  },
};

