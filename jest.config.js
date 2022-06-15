module.exports = {
  preset: 'ts-jest',
  //   testEnvironment: 'jsdom',
  moduleNameMapper: {
    '~/(.*)$': '<rootDir>/src/$1',
    '\\.(sass|scss|css|less)$': '<rootDir>/jest/styleMock.js'
  },
  globals: {
    'ts-jest': {
      isolatedModules: true
    }
  }
};
