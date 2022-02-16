const config = {
  moduleNameMapper: {
    '^source/(.*)$': '<rootDir>/source/$1',
    '^modules/(.*)$': '<rootDir>/source/modules/$1',
    '^models/(.*)$': '<rootDir>/source/models/$1',
    '^core/(.*)$': '<rootDir>/source/core/$1',
  },
  moduleFileExtensions: ['web.js', 'js'],
};

module.exports = config;