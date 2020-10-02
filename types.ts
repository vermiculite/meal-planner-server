import { gql } from "https://deno.land/x/oak_graphql/mod.ts";

export const types = gql`

enum DAY{
    MONDAY,
    TUESDAY,
    WEDNESDAY,
    THURSDAY,
    FRIDAY,
    SATURDAY,
    SUNDAY
}

enum MEAL {
    BREAKFAST,
    LUNCH,
    DINNER,
}

input MealInput {
    year: Int!,
    week: Int!,
    day: DAY!,
    meal: MEAL!,
    description: String!,
}

input WeekInput {
    year: Int!,
    week: Int!,
}

type Week {
    _id: ID!,
    user: User,
    week: Int!,
    year: Int!,
    monday: Day,
    tuesday: Day,
    wednesday: Day,
    thursday: Day,
    friday: Day,
    saturday: Day,
    sunday: Day,
}

type Day {
    breakfast: Meal,
    lunch: Meal,
    dinner: Meal,
}

type Meal {
    description: String,
}

type User {
  firstName: String
  lastName: String
}

input UserInput {
  firstName: String
  lastName: String
}

type ResolveType {
  done: Boolean
}

type Query {
  getUser(id: String): User,
  hello: String!,
  getWeek(input: WeekInput!): Week,
}

type Mutation {
  setUser(input: UserInput!): ResolveType!,
  setMeal(input: MealInput): ResolveType!,
}
`;

