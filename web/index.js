import { hello } from "../apis/hello.js"
  ;
(async () => alert(await hello('world')))()