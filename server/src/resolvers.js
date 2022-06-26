const resolvers = {
  Query: {
    // get all tracks, will be used to populate the homepage grid of our web client
    tracksForHome: (_, __, { dataSources }) => {
      return dataSources.trackAPI.getTracksForHome();
    }
  },
  Track: {
    author: (parent, args, context, info) => {}
  }
};

module.exports = resolvers;
