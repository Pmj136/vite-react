module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    roots: ["<rootDir>/tests/"],
    verbose: true,
    transform: {
        "^.+\\.(ts|tsx)$": "ts-jest",
        "^.+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2|svg)$": "jest-transform-stub"
    },
    moduleNameMapper: {
        "@/(.*)": "<rootDir>/src/$1"
    }
};