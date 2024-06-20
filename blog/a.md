---
title: פונקציה בנאית, קלאס, ירושות וכו
tags: ['javaScript']
---

<script setup>
  import PostHeader from './../components/PostHeader.vue'
</script>
<PostHeader :frontmatter="$frontmatter" />


## פונקציה בנאית (constructor function)

באמצעות פונקציה בנאית ניתן ליצור אובייקטים חדשים עם אותו מפתחות עם ערכים שונים בקלות [מקובל שהאות הראשונה גדולה]

```js
function Myobject(firstName, lastName) {
  this.firstName = firstName
  this.lastName = lastName
}
const myName = new Myobject('משה', 'כהן')
```

בתוך הפונקציה, המילה this מתייחסת לאובייקט החדש שנוצר, והערכים שהועברו לפונקציה בעת קריאתה (הערכים של firstName ו-lastName) מוקצים לתכונות firstName ו-lastName של האובייקט.

כאשר קוראים לפונקציה הבנאית עם מילת המפתח `new` (כמו `new Myobject('משה', 'כהן')`),
קורים הדברים הבאים:
נוצר אובייקט חדש וריק.
המילה `this` בתוך הפונקציה מפנה לאובייקט החדש הזה.
הפונקציה מבצעת את הקוד שבה ומוסיפה תכונות לאובייקט החדש.
בסוף, האובייקט החדש מוחזר.

זה כמו שנכתוב

```js
function Myobject(firstName, lastName) {
  return { firstName, lastName }
}
```

#### prototype

כידוע אובייקט יכול לרשת ערכים ומתודות מאובייקט אחר
אם הערך או המתודה לא נמצא באובייקט עצמו javeScript ילך לאובייקט האב וכן הלאה

אחד מהדרכים לקבל ולערוך את הפרטוטייפ זה ע"י `__proto__`

בפונקציה בנאית ניתן לגשת למאפיין `prototype` כדי להוסיף מתודות וערכים ללפרוטוטייפ של האוביקט המוחזר
(כברירת מחדל הפרוטוטייפ מכיל רק `{ constructor: ThisFunction }` כלומר דרך לקרוא לעצמו)

הפונצקיה הבנאית מגדירה את
`obj.__proto__ = Myobject.prototype`

```js
const myName = new Myobject('משה', 'כהן')
const myName2 = new myName.constructor('יהודה', 'לוי')
console.log(myName.firstName) //'משה'
console.log(myName.firstName) //'יהודה'
```

כך שנוכל להוסיף

```js
MyObject.prototype.getFullName = function () {
  return this.firstName + ' ' + this.lastName
}
```

זה יגרום שכל האוביקטים שנוצרים מהפונקציה הבנאית יקבלו בירושה את המתודה `getFullName`

<!-- אובייקט יכול לרשת מאובייקט אחר -->

<!-- לכל אובייקט יש [[prototype]] ממנו הוא יורש את הדברים מעבר לאובייקט עצמו
בברירת מחדל הוא יורש מ Object.prototype שזה בעצם כל השיטות המובנות של j.s עצמה.
לדוגמה ()obj.toString השיטה toString למרות שלא כתובה בפועל באובייקט הנוכחי הוא מגיע לprototype שלו שזה בעצם Object.prototype ושם הוא נמצא
וכך בעצם כל הסוגי מידע כמו מחרוזת או מספר וכדו' יש להם את prototype שלהם שמגיעים מהשפה. לדוגמה למערך יש את השיטה join שהיא מגיעה מ Array.prototype.
ניתן להגדיר שהאובייקט יורש מאובייקט אחר (והוא גם יורש מObject.prototype) כמובן שאפשר שזה יהיה גם שרשור שלם.
ולכן אם אין באובייקט הנוכחי את המאפיין או השיטה הוא יחפש לראות אם יש במוריש ואם הוא לא מוצא הוא ילך עוד אחורה עד Object.prototype עצמו
חשוב להדגיש שכל אובייקט יכול לרשת רק ממקום אחד בלבד. -->

<!-- השיטה הפשוטה והישנה היא להגיע לזה הוא ע"י המאפיין __proto__ של האובייקט, לדוגמה obj1.__proto__ = obj2  שזה אומר שobj1 יורש מobj2 ולכן אם ניגש ל obj1 כדי לקבל מאפיין או שיטה מסוימת אם אין בנוכחי הוא יקח מobj2
__proto__ ה prototype חייב להיות דווקא אובייקט או null
בפונקציה בנאית אפשר להגדיר מבחוץ מאפיין prototype שבו לכתוב ממי הוא יורש
שיטה עדכנית יותר הוא ע"י Object.create הוא מכיל שתי פרמטרים הראשון זה האובייקט והשני (לא חובה) הוא המאפיינים ושיטות של האובייקט הנוכחי לדוגמה:
 let obj2 = Object.create(obj1,{...})
ובשיטה  (Object.getPrototypeOf(obj ניתן לקבל מאיפה הוא יורש, בפרמטר נכתוב את האובייקט עצמו שאנו רוצים לבדוק מאיפה הוא יורש
ובשיטה (Object.setPrototypeOf(obj, proto ניתן לערוך מאיפה הוא יורש
 - השיטה Object.keys וכדו' תמיד מתייחס לאובייקט עצמו ורק ב for.. in הוא לוקח גם את מפתחות המוריש (ניתן לסנן זאת ע"י (obj.hasOwnProperty(key )
- הפונקציות תמיד מגדירים את האובייקט הנוכחי ולא את האבות כי הפונקציה מגדיר את this וthis הוא מתייחס לאוביקט עצמו
- תמיד כתיבה מחדש לערכים מגדיר את הערך באוביקט הנוכחי .המורישים הם לקריאה בלבד -->

## קלאס (Class)

דרך מתקדמת יותר זה התחביר של קלאס
הנה דוגמה בסיסית

```js
class User {
  constructor(name) {
    this.name = name
  }
  sayHi() {
    alert(this.name)
  }
}

// Usage:
const user = new User('John')
user.sayHi()
```

מה שיש ב constructor רץ מיד כשהאובייקט מופעל ע"י new ושאר המתודות בשעת הקריאה אליהם.

מאחורי הקלעים זה עובד כמו פונקציה בנאית ה`constructor` הוא פונקציה והשאר מתווסף ל`prototype`

```js
console.log(User === User.prototype.constructor) // true
console.log(User.prototype.sayHi) // 'alert(this.name)'
```

### ירושה (Class inheritance)

קלאס יכול לרשת מקלאס אחר

```js
class Admin extends Animal {
  edit() {...}
  }

  const admin = new Admin('bob')
  console.log(admin.name) // 'bob'
  admin.edit() //...
```

מאחורי הקלעים הוא מגדיר את הפרוטוטייפ של `Admin` שירש מ`User` כך שכל ערך או מתודה שלא מוגדר ישירות ב`Admin` הוא נלקח מהפרוטוטייפ
אם נרצה להוסיף ערכים ל`constructor` אבל עם גישה ל`constructor` של האב צריך לכתוב כך:

```js
class Admin extends Animal {
  constructor(name, role) {
    super(name);
    this.role = role;
  }
  edit() {...}
}
```

`super` מציין שזה פרפטר שהוגדר באב
