# date-timely

<br>

### It Is The Package Which Can Be Used To Print The Date Format In A Prettier Format. It Allows Various Other Formats Such As To Display The Date In UTC Format Or In Local Date Format. Also It Allows To Show The Time Zone Or Also Show The Milliseconds In It.

<br>

### You Can Use The Package By Downloading The Package And Require It In Your File By Using The Below Given Command:

<br>

```js
npm i date-timely
```

<br>

### You Can Use Below Given Functions And You Will Get Your Required Values By Using Single Line Of Code. 

<br>

```js
let values = require ('date-timely');

console.log(values.getDateTime());

// 2021-05-06 14:07:19
```

<br>

### You Can Use Same Things With The Other Functions That Are Displayed Down By Importing The Function As Displayed Above:

<br>

```
=> getDateTime()

// It Prints The Date And Time In (year-month-date hours-minutes-seconds) Format.
```

<br>

```
=> getDateTimeInUTC()

// It Prints The Date And Time In UTC (year-month-date hours-minutes-seconds) Format.
```

<br>

```
=> getDateTimeWithMilliSeconds()

// It Prints The Date And Time In (year-month-date hours-minutes-seconds milliseconds) Format.
```
<br>

```
=> getLocalDateTimeWithMilliSeconds()

// It Prints The Local Date And Time In (year-month-date hours-minutes-seconds milliseconds) Format.
```
<br>

```
=> getDateTimeWithShowTimeZone()

// It Prints The Local Date And Time In (year-month-date hours-minutes-seconds milliseconds UTC Time_Zone) Format. This Will Depict The Local Time But Will Show The Difference Between Local Time And UTC Time In Number Of Hours And Minutes.
```
<br>

```
=> getDateTimeInUTCWithTimeZone()

// It Prints The UTC Date And Time In (year-month-date hours-minutes-seconds milliseconds UTC ) Format. This Will Depict The Time In UTC Format Having All The Figures In UTC Time Zone.
```
<br>

```
=> getDateTimeWithShowTimeZoneWithMilliSeconds()

// It Will Show The Date In Local Date Time (year-month-date hours:minutes:seconds milliseconds UTC Time_Zone). It Will Show The Difference In The Timezone Of Local Time With UTC Time.
```
<br>

```
=> getDateTimeInUTCWithTimeZoneWithMilliSeconds()

// It Will Print The Date In UTC Date And Time In (year-month-date hours-minutes-seconds milliseconds UTC). It Is Having All The Figures In UTC Time Zone.
```

<br>

### If You Want To Contribute More About This Package, You Can Contact Me At: 
## gargaryan82000@gmail.com