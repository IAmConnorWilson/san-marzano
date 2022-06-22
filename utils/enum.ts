/**
 * Enum function to create type safe immutable object map with runtime presence
 *
 * @param args - Enum keys
 *
 * @example
 *
 * ```ts
 * // $ExpectType Readonly<{ No: "No"; Yes: "Yes"; }>
 * const AnswerResponse = Enum('No', 'Yes')
 *
 * // $ExpectType Readonly<{ RED: "RED"; GREEN: "GREEN"; BLUE: "BLUE"; }>
 * const Colors = Enum('RED', 'GREEN', 'BLUE')
 * ```
 */
export type UnionFromTuple<T> = T extends (infer U)[] ? U : never;
// TODO add in way to declare different key values than enum value
export const Enum = <T extends string[]>(...args: T) => {
  return Object.freeze(
    args.reduce((acc, next) => {
      return {
        ...acc,
        [next]: next,
      };
    }, Object.create(null)) as { [P in UnionFromTuple<typeof args>]: P },
  );
};
export type Enum<T extends object> = T[keyof T];
