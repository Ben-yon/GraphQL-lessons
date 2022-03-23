import { reject } from 'lodash';
import mongoose from 'mongoose';
import { Friends, Aliens } from './dbConnectors';

const friendDatabase = {};

// resolver map
export const resolvers = {
  Query: {
    getOneFriend: async (_, { id }) => {
      console.log(mongoose.Types.ObjectId.isValid(id));
      return new Promise((resolve, object) => {
        Friends.findById(id, (err, data)=>{
          if(err) reject(err);
          else resolve(data);
        })
      })
    },
    getAliens: async ()=> {
      return Aliens.findAll()
    }
  },
  Mutation: {
    createFriend: async (root, { input }) => {
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

      return new Promise((resolve, object) => {
        newFriend.save((err) => {
          if (err) reject(err)
          else resolve(newFriend)
        });
      })
    },
    updateFriend: async (root, { input }) => {
      return new Promise((resolve, object) => {
         Friends.findOneAndUpdate({_id: input.id}, input, {new: true}, (err, friend) => {
          if(err) reject(err)
          else resolve(friend)
        })
      })
    },
    deleteFriend: async (root, { id }) => {
      return new Promise((resolve, object)=> {
        Friends.remove({_id: id}, (err)=>{
          if(err) reject(err);
          else resolve("Friend has been delted successfully");
        })
      })
    }

  },
};

