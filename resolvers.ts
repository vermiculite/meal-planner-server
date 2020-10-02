import { GQLError } from "https://deno.land/x/oak_graphql/mod.ts"

type Day = 'MONDAY' | 'TUESDAY' | 'WEDNESDAY' | 'THURSDAY' | 'FRIDAY' | 'SATURDAY' | 'SUNDAY'

type Meal = 'BREAKFAST' | 'LUNCH' | 'DINNER'

type MealInput = {
    year: number,
    week: number,
    day: Day,
    meal: Meal,
}

export const resolvers = {
    Query: {
      getUser: (parent: any, { id }: any, context: any, info: any) => {
        console.log("id", id, context);
        if(context.user === "Aaron") {
          throw new GQLError({ type: "auth error in context" })
        }
        return {
          firstName: "wooseok",
          lastName: "lee",
        };
      },
      hello() {
        return 'Hi there!'
      }
    },
    Mutation: {
      setUser: (parent: any, { input: { firstName, lastName } }: any, context: any, info: any) => {
        console.log("input:", firstName, lastName);
        return {
          done: true,
        };
      },
      setMeal: (parent: any, { input }: any, context: any, info: any) => {
          console.log({input})
          return {
              done: true,
          }

      },
    },
  };
  
  