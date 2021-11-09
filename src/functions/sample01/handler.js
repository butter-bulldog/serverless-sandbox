'use strict';

module.exports.sample01 = async event => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'testtest',
        input: event,
      },
      null,
      2
    ),
  };
};
