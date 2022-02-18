const config = {
  moduleNameMapper: {
    '^source/(.*)$': '<rootDir>/source/$1',
    '^modules/(.*)$': '<rootDir>/source/modules/$1',
    '^models/(.*)$': '<rootDir>/source/models/$1',
    '^core/(.*)$': '<rootDir>/source/core/$1',
    '^helpers/(.*)$': '<rootDir>/source/helpers/$1',
  },
  moduleFileExtensions: ['web.js', 'js'],
  globals: {
    ENV: 'development',
  },
};

module.exports = config;
