/* eslist-disable @typescript-eslint/no-unused-vars */

/** TypeScriptの基本の型 */

// boolean
let bool: boolean = true;

// number 数値
let num: number = 0;

// String 文字
let str: string = "A";

// Array 配列
let arr1: Array<number> = [0, 1, 2];
let arr2: number[] = [0, 1, 2];

// tuple(あまり使わない)
let tuple: [number, string] = [0, "A"];

// any なんでも屋さん（あまり使わない方が良い）
let any1: any = false;

// void
const funcA = (): void => {
  const test = "TEST";
};

// null
let null1: null = null;

// undefined
let undefined1: undefined = undefined;

// object（あまり使わない?）
let obj1: object = {};
let obj2: { id: number; name: string } = { id: 0, name: "A" };
