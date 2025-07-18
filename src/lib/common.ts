
// export function getChangedTo<T extends Record<string, any>>(obj1: T, obj2: T): Partial<T> {
//   const result: Partial<T> = {};

//   for (const key in obj2) {
//     const val1 = obj1[key];
//     const val2 = obj2[key];

//     if (isObject(val1) && isObject(val2)) {
//       const nestedChanges = getChangedTo(val1, val2);
//       if (Object.keys(nestedChanges).length > 0) {
//         result[key] = nestedChanges;
//       }
//     } else if (!Object.is(val1, val2)) {
//       result[key] = val2;
//     }
//   }

//   return result;
// }

// function isObject(value: any): value is Record<string, any> {
//   return typeof value === 'object' && value !== null && !Array.isArray(value);
// }


