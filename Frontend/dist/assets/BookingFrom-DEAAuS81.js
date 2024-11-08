import { C as _class_private_field_init, $ as $cc38e7bd3fc7b213$export$2bb74740c4e19def, r as reactExports, D as $18f2051aff69b9bf$export$43bb16f9c6d9e3f7, E as tv, G as dataFocusVisibleClasses, j as jsxRuntimeExports, I as LazyMotion$1, J as domAnimation$1, K as m$1, M as mapPropsVariants, N as useProviderContext, O as useDOMRef, P as $458b0a5536c1a7cf$export$40bfa8c7b0832715, Q as objectToDeps, S as clamp$1, T as dataAttr, U as $3ef42575df84b30b$export$9d1611c77c2fe928, V as $fca6afa0e843324b$export$f12b703ca79dfbb1, W as $65484d02dcb7eb3e$export$457c3d6518dd4c6f, X as $bdb11010cef70236$export$b4cc09c592e8fdb8, Y as $313b98861ee5dd6c$export$d6875122194c7b44, Z as $ef06256079686ba0$export$f8aeda7b10753fa1, a0 as $f6c31cce2adf654f$export$45712eceda6fad21, a1 as $7215afc6de606d6b$export$de79e2c695e052f3, a2 as $507fabe10e71c6fb$export$630ff653c5ada6a9, a3 as $2f04cbc44ee30ce0$export$c826860796309d1b, a4 as clsx, a5 as $ff5963eb1fccf552$export$e08e3b67e392101e, a6 as filterDOMProps, a7 as createContext2, a8 as button_default, a9 as $f7dceffc5ad7768b$export$4e328f61c538687f, aa as $6179b936705e76d3$export$ae780daf29e6d456, ab as areRectsIntersecting, ac as t, ad as useAriaButton, ae as $5c3e21d68f1c4674$export$439d29a4e110a164, af as forwardRef, c as createLucideIcon, a as useDispatch, u as useSelector, i as useParams, ag as useNavigate, ah as ReactLoading, s as setLoading, w as getSingleWorkspace, x as getAvailableSeats, y as _t, A as AnimatedPage, H as Header, F as Footer } from "./index-DhlojAJa.js";
import { $ as $4f58c5f72bcf79f7$export$496315a1608d9602, a as $319e236875307eab$export$a9b970dcc4ae71a9 } from "./LiveAnnouncer-DOgq-u9y.js";
import { d as debounce } from "./index-CihS4_to.js";
function getGregorianYearOffset(identifier) {
  switch (identifier) {
    case "buddhist":
      return 543;
    case "ethiopic":
    case "ethioaa":
      return -8;
    case "coptic":
      return -284;
    case "hebrew":
      return 3760;
    case "indian":
      return -78;
    case "islamic-civil":
    case "islamic-tbla":
    case "islamic-umalqura":
      return -579;
    case "persian":
      return 622;
    case "roc":
    case "japanese":
    case "gregory":
    default:
      return 0;
  }
}
function $2b4dce13dd5a17fa$export$842a2cf37af977e1(amount, numerator) {
  return amount - numerator * Math.floor(amount / numerator);
}
const $3b62074eb05584b2$var$EPOCH = 1721426;
function $3b62074eb05584b2$export$f297eb839006d339(era, year, month, day) {
  year = $3b62074eb05584b2$export$c36e0ecb2d4fa69d(era, year);
  let y1 = year - 1;
  let monthOffset = -2;
  if (month <= 2) monthOffset = 0;
  else if ($3b62074eb05584b2$export$553d7fa8e3805fc0(year)) monthOffset = -1;
  return $3b62074eb05584b2$var$EPOCH - 1 + 365 * y1 + Math.floor(y1 / 4) - Math.floor(y1 / 100) + Math.floor(y1 / 400) + Math.floor((367 * month - 362) / 12 + monthOffset + day);
}
function $3b62074eb05584b2$export$553d7fa8e3805fc0(year) {
  return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
}
function $3b62074eb05584b2$export$c36e0ecb2d4fa69d(era, year) {
  return era === "BC" ? 1 - year : year;
}
function $3b62074eb05584b2$export$4475b7e617eb123c(year) {
  let era = "AD";
  if (year <= 0) {
    era = "BC";
    year = 1 - year;
  }
  return [
    era,
    year
  ];
}
const $3b62074eb05584b2$var$daysInMonth = {
  standard: [
    31,
    28,
    31,
    30,
    31,
    30,
    31,
    31,
    30,
    31,
    30,
    31
  ],
  leapyear: [
    31,
    29,
    31,
    30,
    31,
    30,
    31,
    31,
    30,
    31,
    30,
    31
  ]
};
class $3b62074eb05584b2$export$80ee6245ec4f29ec {
  fromJulianDay(jd) {
    let jd0 = jd;
    let depoch = jd0 - $3b62074eb05584b2$var$EPOCH;
    let quadricent = Math.floor(depoch / 146097);
    let dqc = $2b4dce13dd5a17fa$export$842a2cf37af977e1(depoch, 146097);
    let cent = Math.floor(dqc / 36524);
    let dcent = $2b4dce13dd5a17fa$export$842a2cf37af977e1(dqc, 36524);
    let quad = Math.floor(dcent / 1461);
    let dquad = $2b4dce13dd5a17fa$export$842a2cf37af977e1(dcent, 1461);
    let yindex = Math.floor(dquad / 365);
    let extendedYear = quadricent * 400 + cent * 100 + quad * 4 + yindex + (cent !== 4 && yindex !== 4 ? 1 : 0);
    let [era, year] = $3b62074eb05584b2$export$4475b7e617eb123c(extendedYear);
    let yearDay = jd0 - $3b62074eb05584b2$export$f297eb839006d339(era, year, 1, 1);
    let leapAdj = 2;
    if (jd0 < $3b62074eb05584b2$export$f297eb839006d339(era, year, 3, 1)) leapAdj = 0;
    else if ($3b62074eb05584b2$export$553d7fa8e3805fc0(year)) leapAdj = 1;
    let month = Math.floor(((yearDay + leapAdj) * 12 + 373) / 367);
    let day = jd0 - $3b62074eb05584b2$export$f297eb839006d339(era, year, month, 1) + 1;
    return new $35ea8db9cb2ccb90$export$99faa760c7908e4f(era, year, month, day);
  }
  toJulianDay(date) {
    return $3b62074eb05584b2$export$f297eb839006d339(date.era, date.year, date.month, date.day);
  }
  getDaysInMonth(date) {
    return $3b62074eb05584b2$var$daysInMonth[$3b62074eb05584b2$export$553d7fa8e3805fc0(date.year) ? "leapyear" : "standard"][date.month - 1];
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  getMonthsInYear(date) {
    return 12;
  }
  getDaysInYear(date) {
    return $3b62074eb05584b2$export$553d7fa8e3805fc0(date.year) ? 366 : 365;
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  getYearsInEra(date) {
    return 9999;
  }
  getEras() {
    return [
      "BC",
      "AD"
    ];
  }
  isInverseEra(date) {
    return date.era === "BC";
  }
  balanceDate(date) {
    if (date.year <= 0) {
      date.era = date.era === "BC" ? "AD" : "BC";
      date.year = 1 - date.year;
    }
  }
  constructor() {
    this.identifier = "gregory";
  }
}
const $2fe286d2fb449abb$export$7a5acbd77d414bd9 = {
  "001": 1,
  AD: 1,
  AE: 6,
  AF: 6,
  AI: 1,
  AL: 1,
  AM: 1,
  AN: 1,
  AR: 1,
  AT: 1,
  AU: 1,
  AX: 1,
  AZ: 1,
  BA: 1,
  BE: 1,
  BG: 1,
  BH: 6,
  BM: 1,
  BN: 1,
  BY: 1,
  CH: 1,
  CL: 1,
  CM: 1,
  CN: 1,
  CR: 1,
  CY: 1,
  CZ: 1,
  DE: 1,
  DJ: 6,
  DK: 1,
  DZ: 6,
  EC: 1,
  EE: 1,
  EG: 6,
  ES: 1,
  FI: 1,
  FJ: 1,
  FO: 1,
  FR: 1,
  GB: 1,
  GE: 1,
  GF: 1,
  GP: 1,
  GR: 1,
  HR: 1,
  HU: 1,
  IE: 1,
  IQ: 6,
  IR: 6,
  IS: 1,
  IT: 1,
  JO: 6,
  KG: 1,
  KW: 6,
  KZ: 1,
  LB: 1,
  LI: 1,
  LK: 1,
  LT: 1,
  LU: 1,
  LV: 1,
  LY: 6,
  MC: 1,
  MD: 1,
  ME: 1,
  MK: 1,
  MN: 1,
  MQ: 1,
  MV: 5,
  MY: 1,
  NL: 1,
  NO: 1,
  NZ: 1,
  OM: 6,
  PL: 1,
  QA: 6,
  RE: 1,
  RO: 1,
  RS: 1,
  RU: 1,
  SD: 6,
  SE: 1,
  SI: 1,
  SK: 1,
  SM: 1,
  SY: 6,
  TJ: 1,
  TM: 1,
  TR: 1,
  UA: 1,
  UY: 1,
  UZ: 1,
  VA: 1,
  VN: 1,
  XK: 1
};
function $14e0f24ef4ac5c92$export$ea39ec197993aef0(a, b) {
  b = $11d87f3f76e88657$export$b4a036af3fc0b032(b, a.calendar);
  return a.era === b.era && a.year === b.year && a.month === b.month && a.day === b.day;
}
function $14e0f24ef4ac5c92$export$a18c89cbd24170ff(a, b) {
  b = $11d87f3f76e88657$export$b4a036af3fc0b032(b, a.calendar);
  a = $14e0f24ef4ac5c92$export$a5a3b454ada2268e(a);
  b = $14e0f24ef4ac5c92$export$a5a3b454ada2268e(b);
  return a.era === b.era && a.year === b.year && a.month === b.month;
}
function $14e0f24ef4ac5c92$export$91b62ebf2ba703ee(a, b) {
  return a.calendar.identifier === b.calendar.identifier && a.era === b.era && a.year === b.year && a.month === b.month && a.day === b.day;
}
function $14e0f24ef4ac5c92$export$629b0a497aa65267(date, timeZone) {
  return $14e0f24ef4ac5c92$export$ea39ec197993aef0(date, $14e0f24ef4ac5c92$export$d0bdf45af03a6ea3(timeZone));
}
function $14e0f24ef4ac5c92$export$2061056d06d7cdf7(date, locale) {
  let julian = date.calendar.toJulianDay(date);
  let dayOfWeek = Math.ceil(julian + 1 - $14e0f24ef4ac5c92$var$getWeekStart(locale)) % 7;
  if (dayOfWeek < 0) dayOfWeek += 7;
  return dayOfWeek;
}
function $14e0f24ef4ac5c92$export$461939dd4422153(timeZone) {
  return $11d87f3f76e88657$export$1b96692a1ba042ac(Date.now(), timeZone);
}
function $14e0f24ef4ac5c92$export$d0bdf45af03a6ea3(timeZone) {
  return $11d87f3f76e88657$export$93522d1a439f3617($14e0f24ef4ac5c92$export$461939dd4422153(timeZone));
}
function $14e0f24ef4ac5c92$export$68781ddf31c0090f(a, b) {
  return a.calendar.toJulianDay(a) - b.calendar.toJulianDay(b);
}
function $14e0f24ef4ac5c92$export$c19a80a9721b80f6(a, b) {
  return $14e0f24ef4ac5c92$var$timeToMs(a) - $14e0f24ef4ac5c92$var$timeToMs(b);
}
function $14e0f24ef4ac5c92$var$timeToMs(a) {
  return a.hour * 36e5 + a.minute * 6e4 + a.second * 1e3 + a.millisecond;
}
let $14e0f24ef4ac5c92$var$localTimeZone = null;
function $14e0f24ef4ac5c92$export$aa8b41735afcabd2() {
  if ($14e0f24ef4ac5c92$var$localTimeZone == null) $14e0f24ef4ac5c92$var$localTimeZone = new Intl.DateTimeFormat().resolvedOptions().timeZone;
  return $14e0f24ef4ac5c92$var$localTimeZone;
}
function $14e0f24ef4ac5c92$export$a5a3b454ada2268e(date) {
  return date.subtract({
    days: date.day - 1
  });
}
function $14e0f24ef4ac5c92$export$a2258d9c4118825c(date) {
  return date.add({
    days: date.calendar.getDaysInMonth(date) - date.day
  });
}
function $14e0f24ef4ac5c92$export$f91e89d3d0406102(date) {
  return $14e0f24ef4ac5c92$export$a5a3b454ada2268e(date.subtract({
    months: date.month - 1
  }));
}
function $14e0f24ef4ac5c92$export$42c81a444fbfb5d4(date, locale) {
  let dayOfWeek = $14e0f24ef4ac5c92$export$2061056d06d7cdf7(date, locale);
  return date.subtract({
    days: dayOfWeek
  });
}
function $14e0f24ef4ac5c92$export$ef8b6d9133084f4e(date, locale) {
  return $14e0f24ef4ac5c92$export$42c81a444fbfb5d4(date, locale).add({
    days: 6
  });
}
const $14e0f24ef4ac5c92$var$cachedRegions = /* @__PURE__ */ new Map();
function $14e0f24ef4ac5c92$var$getRegion(locale) {
  if (Intl.Locale) {
    let region = $14e0f24ef4ac5c92$var$cachedRegions.get(locale);
    if (!region) {
      region = new Intl.Locale(locale).maximize().region;
      if (region) $14e0f24ef4ac5c92$var$cachedRegions.set(locale, region);
    }
    return region;
  }
  let part = locale.split("-")[1];
  return part === "u" ? void 0 : part;
}
function $14e0f24ef4ac5c92$var$getWeekStart(locale) {
  let region = $14e0f24ef4ac5c92$var$getRegion(locale);
  return region ? $2fe286d2fb449abb$export$7a5acbd77d414bd9[region] || 0 : 0;
}
function $14e0f24ef4ac5c92$export$ccc1b2479e7dd654(date, locale) {
  let days = date.calendar.getDaysInMonth(date);
  return Math.ceil(($14e0f24ef4ac5c92$export$2061056d06d7cdf7($14e0f24ef4ac5c92$export$a5a3b454ada2268e(date), locale) + days) / 7);
}
function $14e0f24ef4ac5c92$export$5c333a116e949cdd(a, b) {
  if (a && b) return a.compare(b) <= 0 ? a : b;
  return a || b;
}
function $14e0f24ef4ac5c92$export$a75f2bff57811055(a, b) {
  if (a && b) return a.compare(b) >= 0 ? a : b;
  return a || b;
}
const $14e0f24ef4ac5c92$var$WEEKEND_DATA = {
  AF: [
    4,
    5
  ],
  AE: [
    5,
    6
  ],
  BH: [
    5,
    6
  ],
  DZ: [
    5,
    6
  ],
  EG: [
    5,
    6
  ],
  IL: [
    5,
    6
  ],
  IQ: [
    5,
    6
  ],
  IR: [
    5,
    5
  ],
  JO: [
    5,
    6
  ],
  KW: [
    5,
    6
  ],
  LY: [
    5,
    6
  ],
  OM: [
    5,
    6
  ],
  QA: [
    5,
    6
  ],
  SA: [
    5,
    6
  ],
  SD: [
    5,
    6
  ],
  SY: [
    5,
    6
  ],
  YE: [
    5,
    6
  ]
};
function $14e0f24ef4ac5c92$export$618d60ea299da42(date, locale) {
  let julian = date.calendar.toJulianDay(date);
  let dayOfWeek = Math.ceil(julian + 1) % 7;
  if (dayOfWeek < 0) dayOfWeek += 7;
  let region = $14e0f24ef4ac5c92$var$getRegion(locale);
  let [start, end] = $14e0f24ef4ac5c92$var$WEEKEND_DATA[region] || [
    6,
    0
  ];
  return dayOfWeek === start || dayOfWeek === end;
}
function $11d87f3f76e88657$export$bd4fb2bc8bb06fb(date) {
  date = $11d87f3f76e88657$export$b4a036af3fc0b032(date, new $3b62074eb05584b2$export$80ee6245ec4f29ec());
  let year = $3b62074eb05584b2$export$c36e0ecb2d4fa69d(date.era, date.year);
  return $11d87f3f76e88657$var$epochFromParts(year, date.month, date.day, date.hour, date.minute, date.second, date.millisecond);
}
function $11d87f3f76e88657$var$epochFromParts(year, month, day, hour, minute, second, millisecond) {
  let date = /* @__PURE__ */ new Date();
  date.setUTCHours(hour, minute, second, millisecond);
  date.setUTCFullYear(year, month - 1, day);
  return date.getTime();
}
function $11d87f3f76e88657$export$59c99f3515d3493f(ms, timeZone) {
  if (timeZone === "UTC") return 0;
  if (ms > 0 && timeZone === $14e0f24ef4ac5c92$export$aa8b41735afcabd2()) return new Date(ms).getTimezoneOffset() * -6e4;
  let { year, month, day, hour, minute, second } = $11d87f3f76e88657$var$getTimeZoneParts(ms, timeZone);
  let utc = $11d87f3f76e88657$var$epochFromParts(year, month, day, hour, minute, second, 0);
  return utc - Math.floor(ms / 1e3) * 1e3;
}
const $11d87f3f76e88657$var$formattersByTimeZone = /* @__PURE__ */ new Map();
function $11d87f3f76e88657$var$getTimeZoneParts(ms, timeZone) {
  let formatter = $11d87f3f76e88657$var$formattersByTimeZone.get(timeZone);
  if (!formatter) {
    formatter = new Intl.DateTimeFormat("en-US", {
      timeZone,
      hour12: false,
      era: "short",
      year: "numeric",
      month: "numeric",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric"
    });
    $11d87f3f76e88657$var$formattersByTimeZone.set(timeZone, formatter);
  }
  let parts = formatter.formatToParts(new Date(ms));
  let namedParts = {};
  for (let part of parts) if (part.type !== "literal") namedParts[part.type] = part.value;
  return {
    // Firefox returns B instead of BC... https://bugzilla.mozilla.org/show_bug.cgi?id=1752253
    year: namedParts.era === "BC" || namedParts.era === "B" ? -namedParts.year + 1 : +namedParts.year,
    month: +namedParts.month,
    day: +namedParts.day,
    hour: namedParts.hour === "24" ? 0 : +namedParts.hour,
    minute: +namedParts.minute,
    second: +namedParts.second
  };
}
const $11d87f3f76e88657$var$DAYMILLIS = 864e5;
function $11d87f3f76e88657$var$getValidWallTimes(date, timeZone, earlier, later) {
  let found = earlier === later ? [
    earlier
  ] : [
    earlier,
    later
  ];
  return found.filter((absolute) => $11d87f3f76e88657$var$isValidWallTime(date, timeZone, absolute));
}
function $11d87f3f76e88657$var$isValidWallTime(date, timeZone, absolute) {
  let parts = $11d87f3f76e88657$var$getTimeZoneParts(absolute, timeZone);
  return date.year === parts.year && date.month === parts.month && date.day === parts.day && date.hour === parts.hour && date.minute === parts.minute && date.second === parts.second;
}
function $11d87f3f76e88657$export$5107c82f94518f5c(date, timeZone, disambiguation = "compatible") {
  let dateTime = $11d87f3f76e88657$export$b21e0b124e224484(date);
  if (timeZone === "UTC") return $11d87f3f76e88657$export$bd4fb2bc8bb06fb(dateTime);
  if (timeZone === $14e0f24ef4ac5c92$export$aa8b41735afcabd2() && disambiguation === "compatible") {
    dateTime = $11d87f3f76e88657$export$b4a036af3fc0b032(dateTime, new $3b62074eb05584b2$export$80ee6245ec4f29ec());
    let date2 = /* @__PURE__ */ new Date();
    let year = $3b62074eb05584b2$export$c36e0ecb2d4fa69d(dateTime.era, dateTime.year);
    date2.setFullYear(year, dateTime.month - 1, dateTime.day);
    date2.setHours(dateTime.hour, dateTime.minute, dateTime.second, dateTime.millisecond);
    return date2.getTime();
  }
  let ms = $11d87f3f76e88657$export$bd4fb2bc8bb06fb(dateTime);
  let offsetBefore = $11d87f3f76e88657$export$59c99f3515d3493f(ms - $11d87f3f76e88657$var$DAYMILLIS, timeZone);
  let offsetAfter = $11d87f3f76e88657$export$59c99f3515d3493f(ms + $11d87f3f76e88657$var$DAYMILLIS, timeZone);
  let valid = $11d87f3f76e88657$var$getValidWallTimes(dateTime, timeZone, ms - offsetBefore, ms - offsetAfter);
  if (valid.length === 1) return valid[0];
  if (valid.length > 1) switch (disambiguation) {
    case "compatible":
    case "earlier":
      return valid[0];
    case "later":
      return valid[valid.length - 1];
    case "reject":
      throw new RangeError("Multiple possible absolute times found");
  }
  switch (disambiguation) {
    case "earlier":
      return Math.min(ms - offsetBefore, ms - offsetAfter);
    case "compatible":
    case "later":
      return Math.max(ms - offsetBefore, ms - offsetAfter);
    case "reject":
      throw new RangeError("No such absolute time found");
  }
}
function $11d87f3f76e88657$export$e67a095c620b86fe(dateTime, timeZone, disambiguation = "compatible") {
  return new Date($11d87f3f76e88657$export$5107c82f94518f5c(dateTime, timeZone, disambiguation));
}
function $11d87f3f76e88657$export$1b96692a1ba042ac(ms, timeZone) {
  let offset = $11d87f3f76e88657$export$59c99f3515d3493f(ms, timeZone);
  let date = new Date(ms + offset);
  let year = date.getUTCFullYear();
  let month = date.getUTCMonth() + 1;
  let day = date.getUTCDate();
  let hour = date.getUTCHours();
  let minute = date.getUTCMinutes();
  let second = date.getUTCSeconds();
  let millisecond = date.getUTCMilliseconds();
  return new $35ea8db9cb2ccb90$export$d3b7288e7994edea(year, month, day, timeZone, offset, hour, minute, second, millisecond);
}
function $11d87f3f76e88657$export$93522d1a439f3617(dateTime) {
  return new $35ea8db9cb2ccb90$export$99faa760c7908e4f(dateTime.calendar, dateTime.era, dateTime.year, dateTime.month, dateTime.day);
}
function $11d87f3f76e88657$export$b21e0b124e224484(date, time) {
  let hour = 0, minute = 0, second = 0, millisecond = 0;
  if ("timeZone" in date) ({ hour, minute, second, millisecond } = date);
  else if ("hour" in date && !time) return date;
  if (time) ({ hour, minute, second, millisecond } = time);
  return new $35ea8db9cb2ccb90$export$ca871e8dbb80966f(date.calendar, date.era, date.year, date.month, date.day, hour, minute, second, millisecond);
}
function $11d87f3f76e88657$export$b4a036af3fc0b032(date, calendar2) {
  if (date.calendar.identifier === calendar2.identifier) return date;
  let calendarDate = calendar2.fromJulianDay(date.calendar.toJulianDay(date));
  let copy = date.copy();
  copy.calendar = calendar2;
  copy.era = calendarDate.era;
  copy.year = calendarDate.year;
  copy.month = calendarDate.month;
  copy.day = calendarDate.day;
  $735220c2d4774dd3$export$c4e2ecac49351ef2(copy);
  return copy;
}
function $11d87f3f76e88657$export$84c95a83c799e074(date, timeZone, disambiguation) {
  if (date instanceof $35ea8db9cb2ccb90$export$d3b7288e7994edea) {
    if (date.timeZone === timeZone) return date;
    return $11d87f3f76e88657$export$538b00033cc11c75(date, timeZone);
  }
  let ms = $11d87f3f76e88657$export$5107c82f94518f5c(date, timeZone, disambiguation);
  return $11d87f3f76e88657$export$1b96692a1ba042ac(ms, timeZone);
}
function $11d87f3f76e88657$export$83aac07b4c37b25(date) {
  let ms = $11d87f3f76e88657$export$bd4fb2bc8bb06fb(date) - date.offset;
  return new Date(ms);
}
function $11d87f3f76e88657$export$538b00033cc11c75(date, timeZone) {
  let ms = $11d87f3f76e88657$export$bd4fb2bc8bb06fb(date) - date.offset;
  return $11d87f3f76e88657$export$b4a036af3fc0b032($11d87f3f76e88657$export$1b96692a1ba042ac(ms, timeZone), date.calendar);
}
const $735220c2d4774dd3$var$ONE_HOUR = 36e5;
function $735220c2d4774dd3$export$e16d8520af44a096(date, duration) {
  let mutableDate = date.copy();
  let days = "hour" in mutableDate ? $735220c2d4774dd3$var$addTimeFields(mutableDate, duration) : 0;
  $735220c2d4774dd3$var$addYears(mutableDate, duration.years || 0);
  if (mutableDate.calendar.balanceYearMonth) mutableDate.calendar.balanceYearMonth(mutableDate, date);
  mutableDate.month += duration.months || 0;
  $735220c2d4774dd3$var$balanceYearMonth(mutableDate);
  $735220c2d4774dd3$var$constrainMonthDay(mutableDate);
  mutableDate.day += (duration.weeks || 0) * 7;
  mutableDate.day += duration.days || 0;
  mutableDate.day += days;
  $735220c2d4774dd3$var$balanceDay(mutableDate);
  if (mutableDate.calendar.balanceDate) mutableDate.calendar.balanceDate(mutableDate);
  if (mutableDate.year < 1) {
    mutableDate.year = 1;
    mutableDate.month = 1;
    mutableDate.day = 1;
  }
  let maxYear = mutableDate.calendar.getYearsInEra(mutableDate);
  if (mutableDate.year > maxYear) {
    var _mutableDate_calendar_isInverseEra, _mutableDate_calendar;
    let isInverseEra = (_mutableDate_calendar_isInverseEra = (_mutableDate_calendar = mutableDate.calendar).isInverseEra) === null || _mutableDate_calendar_isInverseEra === void 0 ? void 0 : _mutableDate_calendar_isInverseEra.call(_mutableDate_calendar, mutableDate);
    mutableDate.year = maxYear;
    mutableDate.month = isInverseEra ? 1 : mutableDate.calendar.getMonthsInYear(mutableDate);
    mutableDate.day = isInverseEra ? 1 : mutableDate.calendar.getDaysInMonth(mutableDate);
  }
  if (mutableDate.month < 1) {
    mutableDate.month = 1;
    mutableDate.day = 1;
  }
  let maxMonth = mutableDate.calendar.getMonthsInYear(mutableDate);
  if (mutableDate.month > maxMonth) {
    mutableDate.month = maxMonth;
    mutableDate.day = mutableDate.calendar.getDaysInMonth(mutableDate);
  }
  mutableDate.day = Math.max(1, Math.min(mutableDate.calendar.getDaysInMonth(mutableDate), mutableDate.day));
  return mutableDate;
}
function $735220c2d4774dd3$var$addYears(date, years) {
  var _date_calendar_isInverseEra, _date_calendar;
  if ((_date_calendar_isInverseEra = (_date_calendar = date.calendar).isInverseEra) === null || _date_calendar_isInverseEra === void 0 ? void 0 : _date_calendar_isInverseEra.call(_date_calendar, date)) years = -years;
  date.year += years;
}
function $735220c2d4774dd3$var$balanceYearMonth(date) {
  while (date.month < 1) {
    $735220c2d4774dd3$var$addYears(date, -1);
    date.month += date.calendar.getMonthsInYear(date);
  }
  let monthsInYear = 0;
  while (date.month > (monthsInYear = date.calendar.getMonthsInYear(date))) {
    date.month -= monthsInYear;
    $735220c2d4774dd3$var$addYears(date, 1);
  }
}
function $735220c2d4774dd3$var$balanceDay(date) {
  while (date.day < 1) {
    date.month--;
    $735220c2d4774dd3$var$balanceYearMonth(date);
    date.day += date.calendar.getDaysInMonth(date);
  }
  while (date.day > date.calendar.getDaysInMonth(date)) {
    date.day -= date.calendar.getDaysInMonth(date);
    date.month++;
    $735220c2d4774dd3$var$balanceYearMonth(date);
  }
}
function $735220c2d4774dd3$var$constrainMonthDay(date) {
  date.month = Math.max(1, Math.min(date.calendar.getMonthsInYear(date), date.month));
  date.day = Math.max(1, Math.min(date.calendar.getDaysInMonth(date), date.day));
}
function $735220c2d4774dd3$export$c4e2ecac49351ef2(date) {
  if (date.calendar.constrainDate) date.calendar.constrainDate(date);
  date.year = Math.max(1, Math.min(date.calendar.getYearsInEra(date), date.year));
  $735220c2d4774dd3$var$constrainMonthDay(date);
}
function $735220c2d4774dd3$export$3e2544e88a25bff8(duration) {
  let inverseDuration = {};
  for (let key in duration) if (typeof duration[key] === "number") inverseDuration[key] = -duration[key];
  return inverseDuration;
}
function $735220c2d4774dd3$export$4e2d2ead65e5f7e3(date, duration) {
  return $735220c2d4774dd3$export$e16d8520af44a096(date, $735220c2d4774dd3$export$3e2544e88a25bff8(duration));
}
function $735220c2d4774dd3$export$adaa4cf7ef1b65be(date, fields) {
  let mutableDate = date.copy();
  if (fields.era != null) mutableDate.era = fields.era;
  if (fields.year != null) mutableDate.year = fields.year;
  if (fields.month != null) mutableDate.month = fields.month;
  if (fields.day != null) mutableDate.day = fields.day;
  $735220c2d4774dd3$export$c4e2ecac49351ef2(mutableDate);
  return mutableDate;
}
function $735220c2d4774dd3$export$e5d5e1c1822b6e56(value, fields) {
  let mutableValue = value.copy();
  if (fields.hour != null) mutableValue.hour = fields.hour;
  if (fields.minute != null) mutableValue.minute = fields.minute;
  if (fields.second != null) mutableValue.second = fields.second;
  if (fields.millisecond != null) mutableValue.millisecond = fields.millisecond;
  $735220c2d4774dd3$export$7555de1e070510cb(mutableValue);
  return mutableValue;
}
function $735220c2d4774dd3$var$balanceTime(time) {
  time.second += Math.floor(time.millisecond / 1e3);
  time.millisecond = $735220c2d4774dd3$var$nonNegativeMod(time.millisecond, 1e3);
  time.minute += Math.floor(time.second / 60);
  time.second = $735220c2d4774dd3$var$nonNegativeMod(time.second, 60);
  time.hour += Math.floor(time.minute / 60);
  time.minute = $735220c2d4774dd3$var$nonNegativeMod(time.minute, 60);
  let days = Math.floor(time.hour / 24);
  time.hour = $735220c2d4774dd3$var$nonNegativeMod(time.hour, 24);
  return days;
}
function $735220c2d4774dd3$export$7555de1e070510cb(time) {
  time.millisecond = Math.max(0, Math.min(time.millisecond, 1e3));
  time.second = Math.max(0, Math.min(time.second, 59));
  time.minute = Math.max(0, Math.min(time.minute, 59));
  time.hour = Math.max(0, Math.min(time.hour, 23));
}
function $735220c2d4774dd3$var$nonNegativeMod(a, b) {
  let result = a % b;
  if (result < 0) result += b;
  return result;
}
function $735220c2d4774dd3$var$addTimeFields(time, duration) {
  time.hour += duration.hours || 0;
  time.minute += duration.minutes || 0;
  time.second += duration.seconds || 0;
  time.millisecond += duration.milliseconds || 0;
  return $735220c2d4774dd3$var$balanceTime(time);
}
function $735220c2d4774dd3$export$d52ced6badfb9a4c(value, field, amount, options) {
  let mutable = value.copy();
  switch (field) {
    case "era": {
      let eras = value.calendar.getEras();
      let eraIndex = eras.indexOf(value.era);
      if (eraIndex < 0) throw new Error("Invalid era: " + value.era);
      eraIndex = $735220c2d4774dd3$var$cycleValue(eraIndex, amount, 0, eras.length - 1, options === null || options === void 0 ? void 0 : options.round);
      mutable.era = eras[eraIndex];
      $735220c2d4774dd3$export$c4e2ecac49351ef2(mutable);
      break;
    }
    case "year":
      var _mutable_calendar_isInverseEra, _mutable_calendar;
      if ((_mutable_calendar_isInverseEra = (_mutable_calendar = mutable.calendar).isInverseEra) === null || _mutable_calendar_isInverseEra === void 0 ? void 0 : _mutable_calendar_isInverseEra.call(_mutable_calendar, mutable)) amount = -amount;
      mutable.year = $735220c2d4774dd3$var$cycleValue(value.year, amount, -Infinity, 9999, options === null || options === void 0 ? void 0 : options.round);
      if (mutable.year === -Infinity) mutable.year = 1;
      if (mutable.calendar.balanceYearMonth) mutable.calendar.balanceYearMonth(mutable, value);
      break;
    case "month":
      mutable.month = $735220c2d4774dd3$var$cycleValue(value.month, amount, 1, value.calendar.getMonthsInYear(value), options === null || options === void 0 ? void 0 : options.round);
      break;
    case "day":
      mutable.day = $735220c2d4774dd3$var$cycleValue(value.day, amount, 1, value.calendar.getDaysInMonth(value), options === null || options === void 0 ? void 0 : options.round);
      break;
    default:
      throw new Error("Unsupported field " + field);
  }
  if (value.calendar.balanceDate) value.calendar.balanceDate(mutable);
  $735220c2d4774dd3$export$c4e2ecac49351ef2(mutable);
  return mutable;
}
function $735220c2d4774dd3$export$dd02b3e0007dfe28(value, field, amount, options) {
  let mutable = value.copy();
  switch (field) {
    case "hour": {
      let hours = value.hour;
      let min = 0;
      let max = 23;
      if ((options === null || options === void 0 ? void 0 : options.hourCycle) === 12) {
        let isPM = hours >= 12;
        min = isPM ? 12 : 0;
        max = isPM ? 23 : 11;
      }
      mutable.hour = $735220c2d4774dd3$var$cycleValue(hours, amount, min, max, options === null || options === void 0 ? void 0 : options.round);
      break;
    }
    case "minute":
      mutable.minute = $735220c2d4774dd3$var$cycleValue(value.minute, amount, 0, 59, options === null || options === void 0 ? void 0 : options.round);
      break;
    case "second":
      mutable.second = $735220c2d4774dd3$var$cycleValue(value.second, amount, 0, 59, options === null || options === void 0 ? void 0 : options.round);
      break;
    case "millisecond":
      mutable.millisecond = $735220c2d4774dd3$var$cycleValue(value.millisecond, amount, 0, 999, options === null || options === void 0 ? void 0 : options.round);
      break;
    default:
      throw new Error("Unsupported field " + field);
  }
  return mutable;
}
function $735220c2d4774dd3$var$cycleValue(value, amount, min, max, round = false) {
  if (round) {
    value += Math.sign(amount);
    if (value < min) value = max;
    let div = Math.abs(amount);
    if (amount > 0) value = Math.ceil(value / div) * div;
    else value = Math.floor(value / div) * div;
    if (value > max) value = min;
  } else {
    value += amount;
    if (value < min) value = max - (min - value - 1);
    else if (value > max) value = min + (value - max - 1);
  }
  return value;
}
function $735220c2d4774dd3$export$96b1d28349274637(dateTime, duration) {
  let ms;
  if (duration.years != null && duration.years !== 0 || duration.months != null && duration.months !== 0 || duration.weeks != null && duration.weeks !== 0 || duration.days != null && duration.days !== 0) {
    let res2 = $735220c2d4774dd3$export$e16d8520af44a096($11d87f3f76e88657$export$b21e0b124e224484(dateTime), {
      years: duration.years,
      months: duration.months,
      weeks: duration.weeks,
      days: duration.days
    });
    ms = $11d87f3f76e88657$export$5107c82f94518f5c(res2, dateTime.timeZone);
  } else
    ms = $11d87f3f76e88657$export$bd4fb2bc8bb06fb(dateTime) - dateTime.offset;
  ms += duration.milliseconds || 0;
  ms += (duration.seconds || 0) * 1e3;
  ms += (duration.minutes || 0) * 6e4;
  ms += (duration.hours || 0) * 36e5;
  let res = $11d87f3f76e88657$export$1b96692a1ba042ac(ms, dateTime.timeZone);
  return $11d87f3f76e88657$export$b4a036af3fc0b032(res, dateTime.calendar);
}
function $735220c2d4774dd3$export$6814caac34ca03c7(dateTime, duration) {
  return $735220c2d4774dd3$export$96b1d28349274637(dateTime, $735220c2d4774dd3$export$3e2544e88a25bff8(duration));
}
function $735220c2d4774dd3$export$9a297d111fc86b79(dateTime, field, amount, options) {
  switch (field) {
    case "hour": {
      let min = 0;
      let max = 23;
      if ((options === null || options === void 0 ? void 0 : options.hourCycle) === 12) {
        let isPM = dateTime.hour >= 12;
        min = isPM ? 12 : 0;
        max = isPM ? 23 : 11;
      }
      let plainDateTime = $11d87f3f76e88657$export$b21e0b124e224484(dateTime);
      let minDate = $11d87f3f76e88657$export$b4a036af3fc0b032($735220c2d4774dd3$export$e5d5e1c1822b6e56(plainDateTime, {
        hour: min
      }), new $3b62074eb05584b2$export$80ee6245ec4f29ec());
      let minAbsolute = [
        $11d87f3f76e88657$export$5107c82f94518f5c(minDate, dateTime.timeZone, "earlier"),
        $11d87f3f76e88657$export$5107c82f94518f5c(minDate, dateTime.timeZone, "later")
      ].filter((ms2) => $11d87f3f76e88657$export$1b96692a1ba042ac(ms2, dateTime.timeZone).day === minDate.day)[0];
      let maxDate = $11d87f3f76e88657$export$b4a036af3fc0b032($735220c2d4774dd3$export$e5d5e1c1822b6e56(plainDateTime, {
        hour: max
      }), new $3b62074eb05584b2$export$80ee6245ec4f29ec());
      let maxAbsolute = [
        $11d87f3f76e88657$export$5107c82f94518f5c(maxDate, dateTime.timeZone, "earlier"),
        $11d87f3f76e88657$export$5107c82f94518f5c(maxDate, dateTime.timeZone, "later")
      ].filter((ms2) => $11d87f3f76e88657$export$1b96692a1ba042ac(ms2, dateTime.timeZone).day === maxDate.day).pop();
      let ms = $11d87f3f76e88657$export$bd4fb2bc8bb06fb(dateTime) - dateTime.offset;
      let hours = Math.floor(ms / $735220c2d4774dd3$var$ONE_HOUR);
      let remainder = ms % $735220c2d4774dd3$var$ONE_HOUR;
      ms = $735220c2d4774dd3$var$cycleValue(hours, amount, Math.floor(minAbsolute / $735220c2d4774dd3$var$ONE_HOUR), Math.floor(maxAbsolute / $735220c2d4774dd3$var$ONE_HOUR), options === null || options === void 0 ? void 0 : options.round) * $735220c2d4774dd3$var$ONE_HOUR + remainder;
      return $11d87f3f76e88657$export$b4a036af3fc0b032($11d87f3f76e88657$export$1b96692a1ba042ac(ms, dateTime.timeZone), dateTime.calendar);
    }
    case "minute":
    case "second":
    case "millisecond":
      return $735220c2d4774dd3$export$dd02b3e0007dfe28(dateTime, field, amount, options);
    case "era":
    case "year":
    case "month":
    case "day": {
      let res = $735220c2d4774dd3$export$d52ced6badfb9a4c($11d87f3f76e88657$export$b21e0b124e224484(dateTime), field, amount, options);
      let ms = $11d87f3f76e88657$export$5107c82f94518f5c(res, dateTime.timeZone);
      return $11d87f3f76e88657$export$b4a036af3fc0b032($11d87f3f76e88657$export$1b96692a1ba042ac(ms, dateTime.timeZone), dateTime.calendar);
    }
    default:
      throw new Error("Unsupported field " + field);
  }
}
function $735220c2d4774dd3$export$31b5430eb18be4f8(dateTime, fields, disambiguation) {
  let plainDateTime = $11d87f3f76e88657$export$b21e0b124e224484(dateTime);
  let res = $735220c2d4774dd3$export$e5d5e1c1822b6e56($735220c2d4774dd3$export$adaa4cf7ef1b65be(plainDateTime, fields), fields);
  if (res.compare(plainDateTime) === 0) return dateTime;
  let ms = $11d87f3f76e88657$export$5107c82f94518f5c(res, dateTime.timeZone, disambiguation);
  return $11d87f3f76e88657$export$b4a036af3fc0b032($11d87f3f76e88657$export$1b96692a1ba042ac(ms, dateTime.timeZone), dateTime.calendar);
}
function $fae977aafc393c5c$export$f59dee82248f5ad4(time) {
  return `${String(time.hour).padStart(2, "0")}:${String(time.minute).padStart(2, "0")}:${String(time.second).padStart(2, "0")}${time.millisecond ? String(time.millisecond / 1e3).slice(1) : ""}`;
}
function $fae977aafc393c5c$export$60dfd74aa96791bd(date) {
  let gregorianDate = $11d87f3f76e88657$export$b4a036af3fc0b032(date, new $3b62074eb05584b2$export$80ee6245ec4f29ec());
  return `${String(gregorianDate.year).padStart(4, "0")}-${String(gregorianDate.month).padStart(2, "0")}-${String(gregorianDate.day).padStart(2, "0")}`;
}
function $fae977aafc393c5c$export$4223de14708adc63(date) {
  return `${$fae977aafc393c5c$export$60dfd74aa96791bd(date)}T${$fae977aafc393c5c$export$f59dee82248f5ad4(date)}`;
}
function $fae977aafc393c5c$var$offsetToString(offset) {
  let sign = Math.sign(offset) < 0 ? "-" : "+";
  offset = Math.abs(offset);
  let offsetHours = Math.floor(offset / 36e5);
  let offsetMinutes = offset % 36e5 / 6e4;
  return `${sign}${String(offsetHours).padStart(2, "0")}:${String(offsetMinutes).padStart(2, "0")}`;
}
function $fae977aafc393c5c$export$bf79f1ebf4b18792(date) {
  return `${$fae977aafc393c5c$export$4223de14708adc63(date)}${$fae977aafc393c5c$var$offsetToString(date.offset)}[${date.timeZone}]`;
}
function $35ea8db9cb2ccb90$var$shiftArgs(args) {
  let calendar2 = typeof args[0] === "object" ? args.shift() : new $3b62074eb05584b2$export$80ee6245ec4f29ec();
  let era;
  if (typeof args[0] === "string") era = args.shift();
  else {
    let eras = calendar2.getEras();
    era = eras[eras.length - 1];
  }
  let year = args.shift();
  let month = args.shift();
  let day = args.shift();
  return [
    calendar2,
    era,
    year,
    month,
    day
  ];
}
var $35ea8db9cb2ccb90$var$_type = /* @__PURE__ */ new WeakMap();
class $35ea8db9cb2ccb90$export$99faa760c7908e4f {
  /** Returns a copy of this date. */
  copy() {
    if (this.era) return new $35ea8db9cb2ccb90$export$99faa760c7908e4f(this.calendar, this.era, this.year, this.month, this.day);
    else return new $35ea8db9cb2ccb90$export$99faa760c7908e4f(this.calendar, this.year, this.month, this.day);
  }
  /** Returns a new `CalendarDate` with the given duration added to it. */
  add(duration) {
    return $735220c2d4774dd3$export$e16d8520af44a096(this, duration);
  }
  /** Returns a new `CalendarDate` with the given duration subtracted from it. */
  subtract(duration) {
    return $735220c2d4774dd3$export$4e2d2ead65e5f7e3(this, duration);
  }
  /** Returns a new `CalendarDate` with the given fields set to the provided values. Other fields will be constrained accordingly. */
  set(fields) {
    return $735220c2d4774dd3$export$adaa4cf7ef1b65be(this, fields);
  }
  /**
  * Returns a new `CalendarDate` with the given field adjusted by a specified amount.
  * When the resulting value reaches the limits of the field, it wraps around.
  */
  cycle(field, amount, options) {
    return $735220c2d4774dd3$export$d52ced6badfb9a4c(this, field, amount, options);
  }
  /** Converts the date to a native JavaScript Date object, with the time set to midnight in the given time zone. */
  toDate(timeZone) {
    return $11d87f3f76e88657$export$e67a095c620b86fe(this, timeZone);
  }
  /** Converts the date to an ISO 8601 formatted string. */
  toString() {
    return $fae977aafc393c5c$export$60dfd74aa96791bd(this);
  }
  /** Compares this date with another. A negative result indicates that this date is before the given one, and a positive date indicates that it is after. */
  compare(b) {
    return $14e0f24ef4ac5c92$export$68781ddf31c0090f(this, b);
  }
  constructor(...args) {
    _class_private_field_init(this, $35ea8db9cb2ccb90$var$_type, {
      writable: true,
      value: void 0
    });
    let [calendar2, era, year, month, day] = $35ea8db9cb2ccb90$var$shiftArgs(args);
    this.calendar = calendar2;
    this.era = era;
    this.year = year;
    this.month = month;
    this.day = day;
    $735220c2d4774dd3$export$c4e2ecac49351ef2(this);
  }
}
var $35ea8db9cb2ccb90$var$_type2 = /* @__PURE__ */ new WeakMap();
class $35ea8db9cb2ccb90$export$ca871e8dbb80966f {
  /** Returns a copy of this date. */
  copy() {
    if (this.era) return new $35ea8db9cb2ccb90$export$ca871e8dbb80966f(this.calendar, this.era, this.year, this.month, this.day, this.hour, this.minute, this.second, this.millisecond);
    else return new $35ea8db9cb2ccb90$export$ca871e8dbb80966f(this.calendar, this.year, this.month, this.day, this.hour, this.minute, this.second, this.millisecond);
  }
  /** Returns a new `CalendarDateTime` with the given duration added to it. */
  add(duration) {
    return $735220c2d4774dd3$export$e16d8520af44a096(this, duration);
  }
  /** Returns a new `CalendarDateTime` with the given duration subtracted from it. */
  subtract(duration) {
    return $735220c2d4774dd3$export$4e2d2ead65e5f7e3(this, duration);
  }
  /** Returns a new `CalendarDateTime` with the given fields set to the provided values. Other fields will be constrained accordingly. */
  set(fields) {
    return $735220c2d4774dd3$export$adaa4cf7ef1b65be($735220c2d4774dd3$export$e5d5e1c1822b6e56(this, fields), fields);
  }
  /**
  * Returns a new `CalendarDateTime` with the given field adjusted by a specified amount.
  * When the resulting value reaches the limits of the field, it wraps around.
  */
  cycle(field, amount, options) {
    switch (field) {
      case "era":
      case "year":
      case "month":
      case "day":
        return $735220c2d4774dd3$export$d52ced6badfb9a4c(this, field, amount, options);
      default:
        return $735220c2d4774dd3$export$dd02b3e0007dfe28(this, field, amount, options);
    }
  }
  /** Converts the date to a native JavaScript Date object in the given time zone. */
  toDate(timeZone, disambiguation) {
    return $11d87f3f76e88657$export$e67a095c620b86fe(this, timeZone, disambiguation);
  }
  /** Converts the date to an ISO 8601 formatted string. */
  toString() {
    return $fae977aafc393c5c$export$4223de14708adc63(this);
  }
  /** Compares this date with another. A negative result indicates that this date is before the given one, and a positive date indicates that it is after. */
  compare(b) {
    let res = $14e0f24ef4ac5c92$export$68781ddf31c0090f(this, b);
    if (res === 0) return $14e0f24ef4ac5c92$export$c19a80a9721b80f6(this, $11d87f3f76e88657$export$b21e0b124e224484(b));
    return res;
  }
  constructor(...args) {
    _class_private_field_init(this, $35ea8db9cb2ccb90$var$_type2, {
      writable: true,
      value: void 0
    });
    let [calendar2, era, year, month, day] = $35ea8db9cb2ccb90$var$shiftArgs(args);
    this.calendar = calendar2;
    this.era = era;
    this.year = year;
    this.month = month;
    this.day = day;
    this.hour = args.shift() || 0;
    this.minute = args.shift() || 0;
    this.second = args.shift() || 0;
    this.millisecond = args.shift() || 0;
    $735220c2d4774dd3$export$c4e2ecac49351ef2(this);
  }
}
var $35ea8db9cb2ccb90$var$_type3 = /* @__PURE__ */ new WeakMap();
class $35ea8db9cb2ccb90$export$d3b7288e7994edea {
  /** Returns a copy of this date. */
  copy() {
    if (this.era) return new $35ea8db9cb2ccb90$export$d3b7288e7994edea(this.calendar, this.era, this.year, this.month, this.day, this.timeZone, this.offset, this.hour, this.minute, this.second, this.millisecond);
    else return new $35ea8db9cb2ccb90$export$d3b7288e7994edea(this.calendar, this.year, this.month, this.day, this.timeZone, this.offset, this.hour, this.minute, this.second, this.millisecond);
  }
  /** Returns a new `ZonedDateTime` with the given duration added to it. */
  add(duration) {
    return $735220c2d4774dd3$export$96b1d28349274637(this, duration);
  }
  /** Returns a new `ZonedDateTime` with the given duration subtracted from it. */
  subtract(duration) {
    return $735220c2d4774dd3$export$6814caac34ca03c7(this, duration);
  }
  /** Returns a new `ZonedDateTime` with the given fields set to the provided values. Other fields will be constrained accordingly. */
  set(fields, disambiguation) {
    return $735220c2d4774dd3$export$31b5430eb18be4f8(this, fields, disambiguation);
  }
  /**
  * Returns a new `ZonedDateTime` with the given field adjusted by a specified amount.
  * When the resulting value reaches the limits of the field, it wraps around.
  */
  cycle(field, amount, options) {
    return $735220c2d4774dd3$export$9a297d111fc86b79(this, field, amount, options);
  }
  /** Converts the date to a native JavaScript Date object. */
  toDate() {
    return $11d87f3f76e88657$export$83aac07b4c37b25(this);
  }
  /** Converts the date to an ISO 8601 formatted string, including the UTC offset and time zone identifier. */
  toString() {
    return $fae977aafc393c5c$export$bf79f1ebf4b18792(this);
  }
  /** Converts the date to an ISO 8601 formatted string in UTC. */
  toAbsoluteString() {
    return this.toDate().toISOString();
  }
  /** Compares this date with another. A negative result indicates that this date is before the given one, and a positive date indicates that it is after. */
  compare(b) {
    return this.toDate().getTime() - $11d87f3f76e88657$export$84c95a83c799e074(b, this.timeZone).toDate().getTime();
  }
  constructor(...args) {
    _class_private_field_init(this, $35ea8db9cb2ccb90$var$_type3, {
      writable: true,
      value: void 0
    });
    let [calendar2, era, year, month, day] = $35ea8db9cb2ccb90$var$shiftArgs(args);
    let timeZone = args.shift();
    let offset = args.shift();
    this.calendar = calendar2;
    this.era = era;
    this.year = year;
    this.month = month;
    this.day = day;
    this.timeZone = timeZone;
    this.offset = offset;
    this.hour = args.shift() || 0;
    this.minute = args.shift() || 0;
    this.second = args.shift() || 0;
    this.millisecond = args.shift() || 0;
    $735220c2d4774dd3$export$c4e2ecac49351ef2(this);
  }
}
const $62225008020f0a13$var$ERA_START_DATES = [
  [
    1868,
    9,
    8
  ],
  [
    1912,
    7,
    30
  ],
  [
    1926,
    12,
    25
  ],
  [
    1989,
    1,
    8
  ],
  [
    2019,
    5,
    1
  ]
];
const $62225008020f0a13$var$ERA_END_DATES = [
  [
    1912,
    7,
    29
  ],
  [
    1926,
    12,
    24
  ],
  [
    1989,
    1,
    7
  ],
  [
    2019,
    4,
    30
  ]
];
const $62225008020f0a13$var$ERA_ADDENDS = [
  1867,
  1911,
  1925,
  1988,
  2018
];
const $62225008020f0a13$var$ERA_NAMES = [
  "meiji",
  "taisho",
  "showa",
  "heisei",
  "reiwa"
];
function $62225008020f0a13$var$findEraFromGregorianDate(date) {
  const idx = $62225008020f0a13$var$ERA_START_DATES.findIndex(([year, month, day]) => {
    if (date.year < year) return true;
    if (date.year === year && date.month < month) return true;
    if (date.year === year && date.month === month && date.day < day) return true;
    return false;
  });
  if (idx === -1) return $62225008020f0a13$var$ERA_START_DATES.length - 1;
  if (idx === 0) return 0;
  return idx - 1;
}
function $62225008020f0a13$var$toGregorian(date) {
  let eraAddend = $62225008020f0a13$var$ERA_ADDENDS[$62225008020f0a13$var$ERA_NAMES.indexOf(date.era)];
  if (!eraAddend) throw new Error("Unknown era: " + date.era);
  return new $35ea8db9cb2ccb90$export$99faa760c7908e4f(date.year + eraAddend, date.month, date.day);
}
class $62225008020f0a13$export$b746ab2b60cdffbf extends $3b62074eb05584b2$export$80ee6245ec4f29ec {
  fromJulianDay(jd) {
    let date = super.fromJulianDay(jd);
    let era = $62225008020f0a13$var$findEraFromGregorianDate(date);
    return new $35ea8db9cb2ccb90$export$99faa760c7908e4f(this, $62225008020f0a13$var$ERA_NAMES[era], date.year - $62225008020f0a13$var$ERA_ADDENDS[era], date.month, date.day);
  }
  toJulianDay(date) {
    return super.toJulianDay($62225008020f0a13$var$toGregorian(date));
  }
  balanceDate(date) {
    let gregorianDate = $62225008020f0a13$var$toGregorian(date);
    let era = $62225008020f0a13$var$findEraFromGregorianDate(gregorianDate);
    if ($62225008020f0a13$var$ERA_NAMES[era] !== date.era) {
      date.era = $62225008020f0a13$var$ERA_NAMES[era];
      date.year = gregorianDate.year - $62225008020f0a13$var$ERA_ADDENDS[era];
    }
    this.constrainDate(date);
  }
  constrainDate(date) {
    let idx = $62225008020f0a13$var$ERA_NAMES.indexOf(date.era);
    let end = $62225008020f0a13$var$ERA_END_DATES[idx];
    if (end != null) {
      let [endYear, endMonth, endDay] = end;
      let maxYear = endYear - $62225008020f0a13$var$ERA_ADDENDS[idx];
      date.year = Math.max(1, Math.min(maxYear, date.year));
      if (date.year === maxYear) {
        date.month = Math.min(endMonth, date.month);
        if (date.month === endMonth) date.day = Math.min(endDay, date.day);
      }
    }
    if (date.year === 1 && idx >= 0) {
      let [, startMonth, startDay] = $62225008020f0a13$var$ERA_START_DATES[idx];
      date.month = Math.max(startMonth, date.month);
      if (date.month === startMonth) date.day = Math.max(startDay, date.day);
    }
  }
  getEras() {
    return $62225008020f0a13$var$ERA_NAMES;
  }
  getYearsInEra(date) {
    let era = $62225008020f0a13$var$ERA_NAMES.indexOf(date.era);
    let cur = $62225008020f0a13$var$ERA_START_DATES[era];
    let next = $62225008020f0a13$var$ERA_START_DATES[era + 1];
    if (next == null)
      return 9999 - cur[0] + 1;
    let years = next[0] - cur[0];
    if (date.month < next[1] || date.month === next[1] && date.day < next[2]) years++;
    return years;
  }
  getDaysInMonth(date) {
    return super.getDaysInMonth($62225008020f0a13$var$toGregorian(date));
  }
  getMinimumMonthInYear(date) {
    let start = $62225008020f0a13$var$getMinimums(date);
    return start ? start[1] : 1;
  }
  getMinimumDayInMonth(date) {
    let start = $62225008020f0a13$var$getMinimums(date);
    return start && date.month === start[1] ? start[2] : 1;
  }
  constructor(...args) {
    super(...args);
    this.identifier = "japanese";
  }
}
function $62225008020f0a13$var$getMinimums(date) {
  if (date.year === 1) {
    let idx = $62225008020f0a13$var$ERA_NAMES.indexOf(date.era);
    return $62225008020f0a13$var$ERA_START_DATES[idx];
  }
}
const $8d73d47422ca7302$var$BUDDHIST_ERA_START = -543;
class $8d73d47422ca7302$export$42d20a78301dee44 extends $3b62074eb05584b2$export$80ee6245ec4f29ec {
  fromJulianDay(jd) {
    let gregorianDate = super.fromJulianDay(jd);
    let year = $3b62074eb05584b2$export$c36e0ecb2d4fa69d(gregorianDate.era, gregorianDate.year);
    return new $35ea8db9cb2ccb90$export$99faa760c7908e4f(this, year - $8d73d47422ca7302$var$BUDDHIST_ERA_START, gregorianDate.month, gregorianDate.day);
  }
  toJulianDay(date) {
    return super.toJulianDay($8d73d47422ca7302$var$toGregorian(date));
  }
  getEras() {
    return [
      "BE"
    ];
  }
  getDaysInMonth(date) {
    return super.getDaysInMonth($8d73d47422ca7302$var$toGregorian(date));
  }
  balanceDate() {
  }
  constructor(...args) {
    super(...args);
    this.identifier = "buddhist";
  }
}
function $8d73d47422ca7302$var$toGregorian(date) {
  let [era, year] = $3b62074eb05584b2$export$4475b7e617eb123c(date.year + $8d73d47422ca7302$var$BUDDHIST_ERA_START);
  return new $35ea8db9cb2ccb90$export$99faa760c7908e4f(era, year, date.month, date.day);
}
const $5f31bd6f0c8940b2$var$TAIWAN_ERA_START = 1911;
function $5f31bd6f0c8940b2$var$gregorianYear(date) {
  return date.era === "minguo" ? date.year + $5f31bd6f0c8940b2$var$TAIWAN_ERA_START : 1 - date.year + $5f31bd6f0c8940b2$var$TAIWAN_ERA_START;
}
function $5f31bd6f0c8940b2$var$gregorianToTaiwan(year) {
  let y = year - $5f31bd6f0c8940b2$var$TAIWAN_ERA_START;
  if (y > 0) return [
    "minguo",
    y
  ];
  else return [
    "before_minguo",
    1 - y
  ];
}
class $5f31bd6f0c8940b2$export$65e01080afcb0799 extends $3b62074eb05584b2$export$80ee6245ec4f29ec {
  fromJulianDay(jd) {
    let date = super.fromJulianDay(jd);
    let extendedYear = $3b62074eb05584b2$export$c36e0ecb2d4fa69d(date.era, date.year);
    let [era, year] = $5f31bd6f0c8940b2$var$gregorianToTaiwan(extendedYear);
    return new $35ea8db9cb2ccb90$export$99faa760c7908e4f(this, era, year, date.month, date.day);
  }
  toJulianDay(date) {
    return super.toJulianDay($5f31bd6f0c8940b2$var$toGregorian(date));
  }
  getEras() {
    return [
      "before_minguo",
      "minguo"
    ];
  }
  balanceDate(date) {
    let [era, year] = $5f31bd6f0c8940b2$var$gregorianToTaiwan($5f31bd6f0c8940b2$var$gregorianYear(date));
    date.era = era;
    date.year = year;
  }
  isInverseEra(date) {
    return date.era === "before_minguo";
  }
  getDaysInMonth(date) {
    return super.getDaysInMonth($5f31bd6f0c8940b2$var$toGregorian(date));
  }
  getYearsInEra(date) {
    return date.era === "before_minguo" ? 9999 : 9999 - $5f31bd6f0c8940b2$var$TAIWAN_ERA_START;
  }
  constructor(...args) {
    super(...args);
    this.identifier = "roc";
  }
}
function $5f31bd6f0c8940b2$var$toGregorian(date) {
  let [era, year] = $3b62074eb05584b2$export$4475b7e617eb123c($5f31bd6f0c8940b2$var$gregorianYear(date));
  return new $35ea8db9cb2ccb90$export$99faa760c7908e4f(era, year, date.month, date.day);
}
const $f3ed2e4472ae7e25$var$PERSIAN_EPOCH = 1948320;
const $f3ed2e4472ae7e25$var$MONTH_START = [
  0,
  31,
  62,
  93,
  124,
  155,
  186,
  216,
  246,
  276,
  306,
  336
  // Esfand
];
class $f3ed2e4472ae7e25$export$37fccdbfd14c5939 {
  fromJulianDay(jd) {
    let daysSinceEpoch = jd - $f3ed2e4472ae7e25$var$PERSIAN_EPOCH;
    let year = 1 + Math.floor((33 * daysSinceEpoch + 3) / 12053);
    let farvardin1 = 365 * (year - 1) + Math.floor((8 * year + 21) / 33);
    let dayOfYear = daysSinceEpoch - farvardin1;
    let month = dayOfYear < 216 ? Math.floor(dayOfYear / 31) : Math.floor((dayOfYear - 6) / 30);
    let day = dayOfYear - $f3ed2e4472ae7e25$var$MONTH_START[month] + 1;
    return new $35ea8db9cb2ccb90$export$99faa760c7908e4f(this, year, month + 1, day);
  }
  toJulianDay(date) {
    let jd = $f3ed2e4472ae7e25$var$PERSIAN_EPOCH - 1 + 365 * (date.year - 1) + Math.floor((8 * date.year + 21) / 33);
    jd += $f3ed2e4472ae7e25$var$MONTH_START[date.month - 1];
    jd += date.day;
    return jd;
  }
  getMonthsInYear() {
    return 12;
  }
  getDaysInMonth(date) {
    if (date.month <= 6) return 31;
    if (date.month <= 11) return 30;
    let isLeapYear = $2b4dce13dd5a17fa$export$842a2cf37af977e1(25 * date.year + 11, 33) < 8;
    return isLeapYear ? 30 : 29;
  }
  getEras() {
    return [
      "AP"
    ];
  }
  getYearsInEra() {
    return 9377;
  }
  constructor() {
    this.identifier = "persian";
  }
}
const $82c358003bdda0a8$var$INDIAN_ERA_START = 78;
const $82c358003bdda0a8$var$INDIAN_YEAR_START = 80;
class $82c358003bdda0a8$export$39f31c639fa15726 extends $3b62074eb05584b2$export$80ee6245ec4f29ec {
  fromJulianDay(jd) {
    let date = super.fromJulianDay(jd);
    let indianYear = date.year - $82c358003bdda0a8$var$INDIAN_ERA_START;
    let yDay = jd - $3b62074eb05584b2$export$f297eb839006d339(date.era, date.year, 1, 1);
    let leapMonth;
    if (yDay < $82c358003bdda0a8$var$INDIAN_YEAR_START) {
      indianYear--;
      leapMonth = $3b62074eb05584b2$export$553d7fa8e3805fc0(date.year - 1) ? 31 : 30;
      yDay += leapMonth + 155 + 90 + 10;
    } else {
      leapMonth = $3b62074eb05584b2$export$553d7fa8e3805fc0(date.year) ? 31 : 30;
      yDay -= $82c358003bdda0a8$var$INDIAN_YEAR_START;
    }
    let indianMonth;
    let indianDay;
    if (yDay < leapMonth) {
      indianMonth = 1;
      indianDay = yDay + 1;
    } else {
      let mDay = yDay - leapMonth;
      if (mDay < 155) {
        indianMonth = Math.floor(mDay / 31) + 2;
        indianDay = mDay % 31 + 1;
      } else {
        mDay -= 155;
        indianMonth = Math.floor(mDay / 30) + 7;
        indianDay = mDay % 30 + 1;
      }
    }
    return new $35ea8db9cb2ccb90$export$99faa760c7908e4f(this, indianYear, indianMonth, indianDay);
  }
  toJulianDay(date) {
    let extendedYear = date.year + $82c358003bdda0a8$var$INDIAN_ERA_START;
    let [era, year] = $3b62074eb05584b2$export$4475b7e617eb123c(extendedYear);
    let leapMonth;
    let jd;
    if ($3b62074eb05584b2$export$553d7fa8e3805fc0(year)) {
      leapMonth = 31;
      jd = $3b62074eb05584b2$export$f297eb839006d339(era, year, 3, 21);
    } else {
      leapMonth = 30;
      jd = $3b62074eb05584b2$export$f297eb839006d339(era, year, 3, 22);
    }
    if (date.month === 1) return jd + date.day - 1;
    jd += leapMonth + Math.min(date.month - 2, 5) * 31;
    if (date.month >= 8) jd += (date.month - 7) * 30;
    jd += date.day - 1;
    return jd;
  }
  getDaysInMonth(date) {
    if (date.month === 1 && $3b62074eb05584b2$export$553d7fa8e3805fc0(date.year + $82c358003bdda0a8$var$INDIAN_ERA_START)) return 31;
    if (date.month >= 2 && date.month <= 6) return 31;
    return 30;
  }
  getYearsInEra() {
    return 9919;
  }
  getEras() {
    return [
      "saka"
    ];
  }
  balanceDate() {
  }
  constructor(...args) {
    super(...args);
    this.identifier = "indian";
  }
}
const $f2f3e0e3a817edbd$var$CIVIL_EPOC = 1948440;
const $f2f3e0e3a817edbd$var$ASTRONOMICAL_EPOC = 1948439;
const $f2f3e0e3a817edbd$var$UMALQURA_YEAR_START = 1300;
const $f2f3e0e3a817edbd$var$UMALQURA_YEAR_END = 1600;
const $f2f3e0e3a817edbd$var$UMALQURA_START_DAYS = 460322;
function $f2f3e0e3a817edbd$var$islamicToJulianDay(epoch, year, month, day) {
  return day + Math.ceil(29.5 * (month - 1)) + (year - 1) * 354 + Math.floor((3 + 11 * year) / 30) + epoch - 1;
}
function $f2f3e0e3a817edbd$var$julianDayToIslamic(calendar2, epoch, jd) {
  let year = Math.floor((30 * (jd - epoch) + 10646) / 10631);
  let month = Math.min(12, Math.ceil((jd - (29 + $f2f3e0e3a817edbd$var$islamicToJulianDay(epoch, year, 1, 1))) / 29.5) + 1);
  let day = jd - $f2f3e0e3a817edbd$var$islamicToJulianDay(epoch, year, month, 1) + 1;
  return new $35ea8db9cb2ccb90$export$99faa760c7908e4f(calendar2, year, month, day);
}
function $f2f3e0e3a817edbd$var$isLeapYear(year) {
  return (14 + 11 * year) % 30 < 11;
}
class $f2f3e0e3a817edbd$export$2066795aadd37bfc {
  fromJulianDay(jd) {
    return $f2f3e0e3a817edbd$var$julianDayToIslamic(this, $f2f3e0e3a817edbd$var$CIVIL_EPOC, jd);
  }
  toJulianDay(date) {
    return $f2f3e0e3a817edbd$var$islamicToJulianDay($f2f3e0e3a817edbd$var$CIVIL_EPOC, date.year, date.month, date.day);
  }
  getDaysInMonth(date) {
    let length = 29 + date.month % 2;
    if (date.month === 12 && $f2f3e0e3a817edbd$var$isLeapYear(date.year)) length++;
    return length;
  }
  getMonthsInYear() {
    return 12;
  }
  getDaysInYear(date) {
    return $f2f3e0e3a817edbd$var$isLeapYear(date.year) ? 355 : 354;
  }
  getYearsInEra() {
    return 9665;
  }
  getEras() {
    return [
      "AH"
    ];
  }
  constructor() {
    this.identifier = "islamic-civil";
  }
}
class $f2f3e0e3a817edbd$export$37f0887f2f9d22f7 extends $f2f3e0e3a817edbd$export$2066795aadd37bfc {
  fromJulianDay(jd) {
    return $f2f3e0e3a817edbd$var$julianDayToIslamic(this, $f2f3e0e3a817edbd$var$ASTRONOMICAL_EPOC, jd);
  }
  toJulianDay(date) {
    return $f2f3e0e3a817edbd$var$islamicToJulianDay($f2f3e0e3a817edbd$var$ASTRONOMICAL_EPOC, date.year, date.month, date.day);
  }
  constructor(...args) {
    super(...args);
    this.identifier = "islamic-tbla";
  }
}
const $f2f3e0e3a817edbd$var$UMALQURA_DATA = "qgpUDckO1AbqBmwDrQpVBakGkgepC9QF2gpcBS0NlQZKB1QLagutBa4ETwoXBYsGpQbVCtYCWwmdBE0KJg2VDawFtgm6AlsKKwWVCsoG6Qr0AnYJtgJWCcoKpAvSC9kF3AJtCU0FpQpSC6ULtAW2CVcFlwJLBaMGUgdlC2oFqworBZUMSg2lDcoF1gpXCasESwmlClILagt1BXYCtwhbBFUFqQW0BdoJ3QRuAjYJqgpUDbIN1QXaAlsJqwRVCkkLZAtxC7QFtQpVCiUNkg7JDtQG6QprCasEkwpJDaQNsg25CroEWworBZUKKgtVC1wFvQQ9Ah0JlQpKC1oLbQW2AjsJmwRVBqkGVAdqC2wFrQpVBSkLkgupC9QF2gpaBasKlQVJB2QHqgu1BbYCVgpNDiULUgtqC60FrgIvCZcESwalBqwG1gpdBZ0ETQoWDZUNqgW1BdoCWwmtBJUFygbkBuoK9QS2AlYJqgpUC9IL2QXqAm0JrQSVCkoLpQuyBbUJ1gSXCkcFkwZJB1ULagVrCisFiwpGDaMNygXWCtsEawJLCaUKUgtpC3UFdgG3CFsCKwVlBbQF2gntBG0BtgimClINqQ3UBdoKWwmrBFMGKQdiB6kLsgW1ClUFJQuSDckO0gbpCmsFqwRVCikNVA2qDbUJugQ7CpsETQqqCtUK2gJdCV4ELgqaDFUNsga5BroEXQotBZUKUguoC7QLuQXaAloJSgukDdEO6AZqC20FNQWVBkoNqA3UDdoGWwWdAisGFQtKC5ULqgWuCi4JjwwnBZUGqgbWCl0FnQI=";
let $f2f3e0e3a817edbd$var$UMALQURA_MONTHLENGTH;
let $f2f3e0e3a817edbd$var$UMALQURA_YEAR_START_TABLE;
function $f2f3e0e3a817edbd$var$umalquraYearStart(year) {
  return $f2f3e0e3a817edbd$var$UMALQURA_START_DAYS + $f2f3e0e3a817edbd$var$UMALQURA_YEAR_START_TABLE[year - $f2f3e0e3a817edbd$var$UMALQURA_YEAR_START];
}
function $f2f3e0e3a817edbd$var$umalquraMonthLength(year, month) {
  let idx = year - $f2f3e0e3a817edbd$var$UMALQURA_YEAR_START;
  let mask = 1 << 11 - (month - 1);
  if (($f2f3e0e3a817edbd$var$UMALQURA_MONTHLENGTH[idx] & mask) === 0) return 29;
  else return 30;
}
function $f2f3e0e3a817edbd$var$umalquraMonthStart(year, month) {
  let day = $f2f3e0e3a817edbd$var$umalquraYearStart(year);
  for (let i = 1; i < month; i++) day += $f2f3e0e3a817edbd$var$umalquraMonthLength(year, i);
  return day;
}
function $f2f3e0e3a817edbd$var$umalquraYearLength(year) {
  return $f2f3e0e3a817edbd$var$UMALQURA_YEAR_START_TABLE[year + 1 - $f2f3e0e3a817edbd$var$UMALQURA_YEAR_START] - $f2f3e0e3a817edbd$var$UMALQURA_YEAR_START_TABLE[year - $f2f3e0e3a817edbd$var$UMALQURA_YEAR_START];
}
class $f2f3e0e3a817edbd$export$5baab4758c231076 extends $f2f3e0e3a817edbd$export$2066795aadd37bfc {
  fromJulianDay(jd) {
    let days = jd - $f2f3e0e3a817edbd$var$CIVIL_EPOC;
    let startDays = $f2f3e0e3a817edbd$var$umalquraYearStart($f2f3e0e3a817edbd$var$UMALQURA_YEAR_START);
    let endDays = $f2f3e0e3a817edbd$var$umalquraYearStart($f2f3e0e3a817edbd$var$UMALQURA_YEAR_END);
    if (days < startDays || days > endDays) return super.fromJulianDay(jd);
    else {
      let y = $f2f3e0e3a817edbd$var$UMALQURA_YEAR_START - 1;
      let m2 = 1;
      let d = 1;
      while (d > 0) {
        y++;
        d = days - $f2f3e0e3a817edbd$var$umalquraYearStart(y) + 1;
        let yearLength = $f2f3e0e3a817edbd$var$umalquraYearLength(y);
        if (d === yearLength) {
          m2 = 12;
          break;
        } else if (d < yearLength) {
          let monthLength = $f2f3e0e3a817edbd$var$umalquraMonthLength(y, m2);
          m2 = 1;
          while (d > monthLength) {
            d -= monthLength;
            m2++;
            monthLength = $f2f3e0e3a817edbd$var$umalquraMonthLength(y, m2);
          }
          break;
        }
      }
      return new $35ea8db9cb2ccb90$export$99faa760c7908e4f(this, y, m2, days - $f2f3e0e3a817edbd$var$umalquraMonthStart(y, m2) + 1);
    }
  }
  toJulianDay(date) {
    if (date.year < $f2f3e0e3a817edbd$var$UMALQURA_YEAR_START || date.year > $f2f3e0e3a817edbd$var$UMALQURA_YEAR_END) return super.toJulianDay(date);
    return $f2f3e0e3a817edbd$var$CIVIL_EPOC + $f2f3e0e3a817edbd$var$umalquraMonthStart(date.year, date.month) + (date.day - 1);
  }
  getDaysInMonth(date) {
    if (date.year < $f2f3e0e3a817edbd$var$UMALQURA_YEAR_START || date.year > $f2f3e0e3a817edbd$var$UMALQURA_YEAR_END) return super.getDaysInMonth(date);
    return $f2f3e0e3a817edbd$var$umalquraMonthLength(date.year, date.month);
  }
  getDaysInYear(date) {
    if (date.year < $f2f3e0e3a817edbd$var$UMALQURA_YEAR_START || date.year > $f2f3e0e3a817edbd$var$UMALQURA_YEAR_END) return super.getDaysInYear(date);
    return $f2f3e0e3a817edbd$var$umalquraYearLength(date.year);
  }
  constructor() {
    super();
    this.identifier = "islamic-umalqura";
    if (!$f2f3e0e3a817edbd$var$UMALQURA_MONTHLENGTH) $f2f3e0e3a817edbd$var$UMALQURA_MONTHLENGTH = new Uint16Array(Uint8Array.from(atob($f2f3e0e3a817edbd$var$UMALQURA_DATA), (c) => c.charCodeAt(0)).buffer);
    if (!$f2f3e0e3a817edbd$var$UMALQURA_YEAR_START_TABLE) {
      $f2f3e0e3a817edbd$var$UMALQURA_YEAR_START_TABLE = new Uint32Array($f2f3e0e3a817edbd$var$UMALQURA_YEAR_END - $f2f3e0e3a817edbd$var$UMALQURA_YEAR_START + 1);
      let yearStart = 0;
      for (let year = $f2f3e0e3a817edbd$var$UMALQURA_YEAR_START; year <= $f2f3e0e3a817edbd$var$UMALQURA_YEAR_END; year++) {
        $f2f3e0e3a817edbd$var$UMALQURA_YEAR_START_TABLE[year - $f2f3e0e3a817edbd$var$UMALQURA_YEAR_START] = yearStart;
        for (let i = 1; i <= 12; i++) yearStart += $f2f3e0e3a817edbd$var$umalquraMonthLength(year, i);
      }
    }
  }
}
const $7c5f6fbf42389787$var$HEBREW_EPOCH = 347997;
const $7c5f6fbf42389787$var$HOUR_PARTS = 1080;
const $7c5f6fbf42389787$var$DAY_PARTS = 24 * $7c5f6fbf42389787$var$HOUR_PARTS;
const $7c5f6fbf42389787$var$MONTH_DAYS = 29;
const $7c5f6fbf42389787$var$MONTH_FRACT = 12 * $7c5f6fbf42389787$var$HOUR_PARTS + 793;
const $7c5f6fbf42389787$var$MONTH_PARTS = $7c5f6fbf42389787$var$MONTH_DAYS * $7c5f6fbf42389787$var$DAY_PARTS + $7c5f6fbf42389787$var$MONTH_FRACT;
function $7c5f6fbf42389787$var$isLeapYear(year) {
  return $2b4dce13dd5a17fa$export$842a2cf37af977e1(year * 7 + 1, 19) < 7;
}
function $7c5f6fbf42389787$var$hebrewDelay1(year) {
  let months = Math.floor((235 * year - 234) / 19);
  let parts = 12084 + 13753 * months;
  let day = months * 29 + Math.floor(parts / 25920);
  if ($2b4dce13dd5a17fa$export$842a2cf37af977e1(3 * (day + 1), 7) < 3) day += 1;
  return day;
}
function $7c5f6fbf42389787$var$hebrewDelay2(year) {
  let last = $7c5f6fbf42389787$var$hebrewDelay1(year - 1);
  let present = $7c5f6fbf42389787$var$hebrewDelay1(year);
  let next = $7c5f6fbf42389787$var$hebrewDelay1(year + 1);
  if (next - present === 356) return 2;
  if (present - last === 382) return 1;
  return 0;
}
function $7c5f6fbf42389787$var$startOfYear(year) {
  return $7c5f6fbf42389787$var$hebrewDelay1(year) + $7c5f6fbf42389787$var$hebrewDelay2(year);
}
function $7c5f6fbf42389787$var$getDaysInYear(year) {
  return $7c5f6fbf42389787$var$startOfYear(year + 1) - $7c5f6fbf42389787$var$startOfYear(year);
}
function $7c5f6fbf42389787$var$getYearType(year) {
  let yearLength = $7c5f6fbf42389787$var$getDaysInYear(year);
  if (yearLength > 380) yearLength -= 30;
  switch (yearLength) {
    case 353:
      return 0;
    case 354:
      return 1;
    case 355:
      return 2;
  }
}
function $7c5f6fbf42389787$var$getDaysInMonth(year, month) {
  if (month >= 6 && !$7c5f6fbf42389787$var$isLeapYear(year)) month++;
  if (month === 4 || month === 7 || month === 9 || month === 11 || month === 13) return 29;
  let yearType = $7c5f6fbf42389787$var$getYearType(year);
  if (month === 2) return yearType === 2 ? 30 : 29;
  if (month === 3) return yearType === 0 ? 29 : 30;
  if (month === 6) return $7c5f6fbf42389787$var$isLeapYear(year) ? 30 : 0;
  return 30;
}
class $7c5f6fbf42389787$export$ca405048b8fb5af {
  fromJulianDay(jd) {
    let d = jd - $7c5f6fbf42389787$var$HEBREW_EPOCH;
    let m2 = d * $7c5f6fbf42389787$var$DAY_PARTS / $7c5f6fbf42389787$var$MONTH_PARTS;
    let year = Math.floor((19 * m2 + 234) / 235) + 1;
    let ys = $7c5f6fbf42389787$var$startOfYear(year);
    let dayOfYear = Math.floor(d - ys);
    while (dayOfYear < 1) {
      year--;
      ys = $7c5f6fbf42389787$var$startOfYear(year);
      dayOfYear = Math.floor(d - ys);
    }
    let month = 1;
    let monthStart = 0;
    while (monthStart < dayOfYear) {
      monthStart += $7c5f6fbf42389787$var$getDaysInMonth(year, month);
      month++;
    }
    month--;
    monthStart -= $7c5f6fbf42389787$var$getDaysInMonth(year, month);
    let day = dayOfYear - monthStart;
    return new $35ea8db9cb2ccb90$export$99faa760c7908e4f(this, year, month, day);
  }
  toJulianDay(date) {
    let jd = $7c5f6fbf42389787$var$startOfYear(date.year);
    for (let month = 1; month < date.month; month++) jd += $7c5f6fbf42389787$var$getDaysInMonth(date.year, month);
    return jd + date.day + $7c5f6fbf42389787$var$HEBREW_EPOCH;
  }
  getDaysInMonth(date) {
    return $7c5f6fbf42389787$var$getDaysInMonth(date.year, date.month);
  }
  getMonthsInYear(date) {
    return $7c5f6fbf42389787$var$isLeapYear(date.year) ? 13 : 12;
  }
  getDaysInYear(date) {
    return $7c5f6fbf42389787$var$getDaysInYear(date.year);
  }
  getYearsInEra() {
    return 9999;
  }
  getEras() {
    return [
      "AM"
    ];
  }
  balanceYearMonth(date, previousDate) {
    if (previousDate.year !== date.year) {
      if ($7c5f6fbf42389787$var$isLeapYear(previousDate.year) && !$7c5f6fbf42389787$var$isLeapYear(date.year) && previousDate.month > 6) date.month--;
      else if (!$7c5f6fbf42389787$var$isLeapYear(previousDate.year) && $7c5f6fbf42389787$var$isLeapYear(date.year) && previousDate.month > 6) date.month++;
    }
  }
  constructor() {
    this.identifier = "hebrew";
  }
}
const $b956b2d7a6cf451f$var$ETHIOPIC_EPOCH = 1723856;
const $b956b2d7a6cf451f$var$COPTIC_EPOCH = 1824665;
const $b956b2d7a6cf451f$var$AMETE_MIHRET_DELTA = 5500;
function $b956b2d7a6cf451f$var$ceToJulianDay(epoch, year, month, day) {
  return epoch + 365 * year + Math.floor(year / 4) + 30 * (month - 1) + day - 1;
}
function $b956b2d7a6cf451f$var$julianDayToCE(epoch, jd) {
  let year = Math.floor(4 * (jd - epoch) / 1461);
  let month = 1 + Math.floor((jd - $b956b2d7a6cf451f$var$ceToJulianDay(epoch, year, 1, 1)) / 30);
  let day = jd + 1 - $b956b2d7a6cf451f$var$ceToJulianDay(epoch, year, month, 1);
  return [
    year,
    month,
    day
  ];
}
function $b956b2d7a6cf451f$var$getLeapDay(year) {
  return Math.floor(year % 4 / 3);
}
function $b956b2d7a6cf451f$var$getDaysInMonth(year, month) {
  if (month % 13 !== 0)
    return 30;
  else
    return $b956b2d7a6cf451f$var$getLeapDay(year) + 5;
}
class $b956b2d7a6cf451f$export$26ba6eab5e20cd7d {
  fromJulianDay(jd) {
    let [year, month, day] = $b956b2d7a6cf451f$var$julianDayToCE($b956b2d7a6cf451f$var$ETHIOPIC_EPOCH, jd);
    let era = "AM";
    if (year <= 0) {
      era = "AA";
      year += $b956b2d7a6cf451f$var$AMETE_MIHRET_DELTA;
    }
    return new $35ea8db9cb2ccb90$export$99faa760c7908e4f(this, era, year, month, day);
  }
  toJulianDay(date) {
    let year = date.year;
    if (date.era === "AA") year -= $b956b2d7a6cf451f$var$AMETE_MIHRET_DELTA;
    return $b956b2d7a6cf451f$var$ceToJulianDay($b956b2d7a6cf451f$var$ETHIOPIC_EPOCH, year, date.month, date.day);
  }
  getDaysInMonth(date) {
    return $b956b2d7a6cf451f$var$getDaysInMonth(date.year, date.month);
  }
  getMonthsInYear() {
    return 13;
  }
  getDaysInYear(date) {
    return 365 + $b956b2d7a6cf451f$var$getLeapDay(date.year);
  }
  getYearsInEra(date) {
    return date.era === "AA" ? 9999 : 9991;
  }
  getEras() {
    return [
      "AA",
      "AM"
    ];
  }
  constructor() {
    this.identifier = "ethiopic";
  }
}
class $b956b2d7a6cf451f$export$d72e0c37005a4914 extends $b956b2d7a6cf451f$export$26ba6eab5e20cd7d {
  fromJulianDay(jd) {
    let [year, month, day] = $b956b2d7a6cf451f$var$julianDayToCE($b956b2d7a6cf451f$var$ETHIOPIC_EPOCH, jd);
    year += $b956b2d7a6cf451f$var$AMETE_MIHRET_DELTA;
    return new $35ea8db9cb2ccb90$export$99faa760c7908e4f(this, "AA", year, month, day);
  }
  getEras() {
    return [
      "AA"
    ];
  }
  getYearsInEra() {
    return 9999;
  }
  constructor(...args) {
    super(...args);
    this.identifier = "ethioaa";
  }
}
class $b956b2d7a6cf451f$export$fe6243cbe1a4b7c1 extends $b956b2d7a6cf451f$export$26ba6eab5e20cd7d {
  fromJulianDay(jd) {
    let [year, month, day] = $b956b2d7a6cf451f$var$julianDayToCE($b956b2d7a6cf451f$var$COPTIC_EPOCH, jd);
    let era = "CE";
    if (year <= 0) {
      era = "BCE";
      year = 1 - year;
    }
    return new $35ea8db9cb2ccb90$export$99faa760c7908e4f(this, era, year, month, day);
  }
  toJulianDay(date) {
    let year = date.year;
    if (date.era === "BCE") year = 1 - year;
    return $b956b2d7a6cf451f$var$ceToJulianDay($b956b2d7a6cf451f$var$COPTIC_EPOCH, year, date.month, date.day);
  }
  getDaysInMonth(date) {
    let year = date.year;
    if (date.era === "BCE") year = 1 - year;
    return $b956b2d7a6cf451f$var$getDaysInMonth(year, date.month);
  }
  isInverseEra(date) {
    return date.era === "BCE";
  }
  balanceDate(date) {
    if (date.year <= 0) {
      date.era = date.era === "BCE" ? "CE" : "BCE";
      date.year = 1 - date.year;
    }
  }
  getEras() {
    return [
      "BCE",
      "CE"
    ];
  }
  getYearsInEra(date) {
    return date.era === "BCE" ? 9999 : 9715;
  }
  constructor(...args) {
    super(...args);
    this.identifier = "coptic";
  }
}
function $64244302c3013299$export$dd0bbc9b26defe37(name) {
  switch (name) {
    case "buddhist":
      return new $8d73d47422ca7302$export$42d20a78301dee44();
    case "ethiopic":
      return new $b956b2d7a6cf451f$export$26ba6eab5e20cd7d();
    case "ethioaa":
      return new $b956b2d7a6cf451f$export$d72e0c37005a4914();
    case "coptic":
      return new $b956b2d7a6cf451f$export$fe6243cbe1a4b7c1();
    case "hebrew":
      return new $7c5f6fbf42389787$export$ca405048b8fb5af();
    case "indian":
      return new $82c358003bdda0a8$export$39f31c639fa15726();
    case "islamic-civil":
      return new $f2f3e0e3a817edbd$export$2066795aadd37bfc();
    case "islamic-tbla":
      return new $f2f3e0e3a817edbd$export$37f0887f2f9d22f7();
    case "islamic-umalqura":
      return new $f2f3e0e3a817edbd$export$5baab4758c231076();
    case "japanese":
      return new $62225008020f0a13$export$b746ab2b60cdffbf();
    case "persian":
      return new $f3ed2e4472ae7e25$export$37fccdbfd14c5939();
    case "roc":
      return new $5f31bd6f0c8940b2$export$65e01080afcb0799();
    case "gregory":
    default:
      return new $3b62074eb05584b2$export$80ee6245ec4f29ec();
  }
}
let $fb18d541ea1ad717$var$formatterCache = /* @__PURE__ */ new Map();
class $fb18d541ea1ad717$export$ad991b66133851cf {
  /** Formats a date as a string according to the locale and format options passed to the constructor. */
  format(value) {
    return this.formatter.format(value);
  }
  /** Formats a date to an array of parts such as separators, numbers, punctuation, and more. */
  formatToParts(value) {
    return this.formatter.formatToParts(value);
  }
  /** Formats a date range as a string. */
  formatRange(start, end) {
    if (typeof this.formatter.formatRange === "function")
      return this.formatter.formatRange(start, end);
    if (end < start) throw new RangeError("End date must be >= start date");
    return `${this.formatter.format(start)} – ${this.formatter.format(end)}`;
  }
  /** Formats a date range as an array of parts. */
  formatRangeToParts(start, end) {
    if (typeof this.formatter.formatRangeToParts === "function")
      return this.formatter.formatRangeToParts(start, end);
    if (end < start) throw new RangeError("End date must be >= start date");
    let startParts = this.formatter.formatToParts(start);
    let endParts = this.formatter.formatToParts(end);
    return [
      ...startParts.map((p) => ({
        ...p,
        source: "startRange"
      })),
      {
        type: "literal",
        value: " – ",
        source: "shared"
      },
      ...endParts.map((p) => ({
        ...p,
        source: "endRange"
      }))
    ];
  }
  /** Returns the resolved formatting options based on the values passed to the constructor. */
  resolvedOptions() {
    let resolvedOptions = this.formatter.resolvedOptions();
    if ($fb18d541ea1ad717$var$hasBuggyResolvedHourCycle()) {
      if (!this.resolvedHourCycle) this.resolvedHourCycle = $fb18d541ea1ad717$var$getResolvedHourCycle(resolvedOptions.locale, this.options);
      resolvedOptions.hourCycle = this.resolvedHourCycle;
      resolvedOptions.hour12 = this.resolvedHourCycle === "h11" || this.resolvedHourCycle === "h12";
    }
    if (resolvedOptions.calendar === "ethiopic-amete-alem") resolvedOptions.calendar = "ethioaa";
    return resolvedOptions;
  }
  constructor(locale, options = {}) {
    this.formatter = $fb18d541ea1ad717$var$getCachedDateFormatter(locale, options);
    this.options = options;
  }
}
const $fb18d541ea1ad717$var$hour12Preferences = {
  true: {
    // Only Japanese uses the h11 style for 12 hour time. All others use h12.
    ja: "h11"
  },
  false: {}
};
function $fb18d541ea1ad717$var$getCachedDateFormatter(locale, options = {}) {
  if (typeof options.hour12 === "boolean" && $fb18d541ea1ad717$var$hasBuggyHour12Behavior()) {
    options = {
      ...options
    };
    let pref = $fb18d541ea1ad717$var$hour12Preferences[String(options.hour12)][locale.split("-")[0]];
    let defaultHourCycle = options.hour12 ? "h12" : "h23";
    options.hourCycle = pref !== null && pref !== void 0 ? pref : defaultHourCycle;
    delete options.hour12;
  }
  let cacheKey = locale + (options ? Object.entries(options).sort((a, b) => a[0] < b[0] ? -1 : 1).join() : "");
  if ($fb18d541ea1ad717$var$formatterCache.has(cacheKey)) return $fb18d541ea1ad717$var$formatterCache.get(cacheKey);
  let numberFormatter = new Intl.DateTimeFormat(locale, options);
  $fb18d541ea1ad717$var$formatterCache.set(cacheKey, numberFormatter);
  return numberFormatter;
}
let $fb18d541ea1ad717$var$_hasBuggyHour12Behavior = null;
function $fb18d541ea1ad717$var$hasBuggyHour12Behavior() {
  if ($fb18d541ea1ad717$var$_hasBuggyHour12Behavior == null) $fb18d541ea1ad717$var$_hasBuggyHour12Behavior = new Intl.DateTimeFormat("en-US", {
    hour: "numeric",
    hour12: false
  }).format(new Date(2020, 2, 3, 0)) === "24";
  return $fb18d541ea1ad717$var$_hasBuggyHour12Behavior;
}
let $fb18d541ea1ad717$var$_hasBuggyResolvedHourCycle = null;
function $fb18d541ea1ad717$var$hasBuggyResolvedHourCycle() {
  if ($fb18d541ea1ad717$var$_hasBuggyResolvedHourCycle == null) $fb18d541ea1ad717$var$_hasBuggyResolvedHourCycle = new Intl.DateTimeFormat("fr", {
    hour: "numeric",
    hour12: false
  }).resolvedOptions().hourCycle === "h12";
  return $fb18d541ea1ad717$var$_hasBuggyResolvedHourCycle;
}
function $fb18d541ea1ad717$var$getResolvedHourCycle(locale, options) {
  if (!options.timeStyle && !options.hour) return void 0;
  locale = locale.replace(/(-u-)?-nu-[a-zA-Z0-9]+/, "");
  locale += (locale.includes("-u-") ? "" : "-u") + "-nu-latn";
  let formatter = $fb18d541ea1ad717$var$getCachedDateFormatter(locale, {
    ...options,
    timeZone: void 0
    // use local timezone
  });
  let min = parseInt(formatter.formatToParts(new Date(2020, 2, 3, 0)).find((p) => p.type === "hour").value, 10);
  let max = parseInt(formatter.formatToParts(new Date(2020, 2, 3, 23)).find((p) => p.type === "hour").value, 10);
  if (min === 0 && max === 23) return "h23";
  if (min === 24 && max === 23) return "h24";
  if (min === 0 && max === 11) return "h11";
  if (min === 12 && max === 11) return "h12";
  throw new Error("Unexpected hour cycle result");
}
function $62d8ded9296f3872$export$cfa2225e87938781(node, checkForOverflow) {
  let scrollableNode = node;
  if ($cc38e7bd3fc7b213$export$2bb74740c4e19def(scrollableNode, checkForOverflow)) scrollableNode = scrollableNode.parentElement;
  while (scrollableNode && !$cc38e7bd3fc7b213$export$2bb74740c4e19def(scrollableNode, checkForOverflow)) scrollableNode = scrollableNode.parentElement;
  return scrollableNode || document.scrollingElement || document.documentElement;
}
function $5a387cc49350e6db$export$722debc0e56fea39(value, isEqual) {
  let lastValue = reactExports.useRef(null);
  if (value && lastValue.current && isEqual(value, lastValue.current)) value = lastValue.current;
  lastValue.current = value;
  return value;
}
function $896ba0a80a8f4d36$export$85fd5fdf27bacc79(options) {
  options = $5a387cc49350e6db$export$722debc0e56fea39(options !== null && options !== void 0 ? options : {}, $896ba0a80a8f4d36$var$isEqual);
  let { locale } = $18f2051aff69b9bf$export$43bb16f9c6d9e3f7();
  return reactExports.useMemo(() => new $fb18d541ea1ad717$export$ad991b66133851cf(locale, options), [
    locale,
    options
  ]);
}
function $896ba0a80a8f4d36$var$isEqual(a, b) {
  if (a === b) return true;
  let aKeys = Object.keys(a);
  let bKeys = Object.keys(b);
  if (aKeys.length !== bKeys.length) return false;
  for (let key of aKeys) {
    if (b[key] !== a[key]) return false;
  }
  return true;
}
var calendar = tv({
  slots: {
    base: [
      "relative w-fit max-w-full shadow-small inline-block overflow-y-hidden",
      "rounded-large overflow-x-auto bg-default-50 dark:bg-background",
      "w-[calc(var(--visible-months)_*_var(--calendar-width))]"
    ],
    prevButton: [],
    nextButton: [],
    headerWrapper: [
      "px-4 py-2 flex items-center justify-between gap-2 bg-content1 overflow-hidden",
      "[&_.chevron-icon]:flex-none",
      "after:content-['']",
      "after:bg-content1 origin-top",
      "after:w-full after:h-0",
      "after:absolute after:top-0 after:left-0"
    ],
    header: "flex w-full items-center justify-center gap-2 z-10",
    title: "text-default-500 text-small font-medium",
    content: "w-[calc(var(--visible-months)_*_var(--calendar-width))]",
    gridWrapper: "flex max-w-full overflow-hidden pb-2 h-auto relative",
    grid: "w-full border-collapse z-0",
    gridHeader: "bg-content1 shadow-[0px_20px_20px_0px_rgb(0_0_0/0.05)]",
    gridHeaderRow: "px-4 pb-2 flex justify-center text-default-400",
    gridHeaderCell: "flex w-8 justify-center items-center font-medium text-small",
    gridBody: "",
    gridBodyRow: "flex justify-center items-center first:mt-2",
    cell: "py-0.5 px-0",
    cellButton: [
      "w-8 h-8 flex items-center text-foreground justify-center rounded-full",
      "box-border appearance-none select-none whitespace-nowrap font-normal",
      "subpixel-antialiased overflow-hidden tap-highlight-transparent",
      "data-[disabled=true]:text-default-300",
      "data-[disabled=true]:cursor-default",
      "data-[readonly=true]:cursor-default",
      "data-[disabled=true]:transition-none",
      "data-[unavailable=true]:text-default-300",
      "data-[unavailable=true]:cursor-default",
      "data-[unavailable=true]:line-through",
      ...dataFocusVisibleClasses
    ],
    pickerWrapper: "absolute inset-x-0 top-0 flex w-full h-[var(--picker-height)] justify-center opacity-0 pointer-events-none",
    pickerMonthList: "items-start",
    pickerYearList: "items-center",
    pickerHighlight: "h-8 bg-default-200 absolute w-[calc(100%_-_16px)] rounded-medium z-0 top-1/2 -translate-y-1/2 pointer-events-none",
    pickerItem: [
      "w-full flex text-foreground items-center h-8 leading-[32px] min-h-[32px] snap-center text-large z-20",
      "data-[pressed=true]:opacity-50",
      ...dataFocusVisibleClasses
    ],
    helperWrapper: "px-4 pb-2 max-w-[270px] flex justify-start flex-wrap items-center",
    errorMessage: "text-small text-danger break-words max-w-full"
  },
  variants: {
    color: {
      foreground: {},
      primary: {},
      secondary: {},
      success: {},
      warning: {},
      danger: {}
    },
    isRange: {
      true: {
        cellButton: [
          "relative",
          "overflow-visible",
          "before:content-[''] before:absolute before:inset-0 before:z-[-1] before:rounded-none",
          "data-[outside-month=true]:before:hidden",
          "data-[selected=true]:data-[range-selection=true]:data-[outside-month=true]:bg-transparent",
          "data-[selected=true]:data-[range-selection=true]:data-[outside-month=true]:text-default-300",
          "data-[range-start=true]:before:rounded-l-full",
          "data-[selection-start=true]:before:rounded-l-full",
          "data-[range-end=true]:before:rounded-r-full",
          "data-[selection-end=true]:before:rounded-r-full",
          "data-[selected=true]:data-[selection-start=true]:data-[range-selection=true]:rounded-full",
          "data-[selected=true]:data-[selection-end=true]:data-[range-selection=true]:rounded-full"
        ]
      },
      false: {}
    },
    hideDisabledDates: {
      true: {
        cellButton: "data-[disabled=true]:data-[outside-month=true]:opacity-0"
      },
      false: {}
    },
    isHeaderWrapperExpanded: {
      true: {
        headerWrapper: ["[&_.chevron-icon]:rotate-180", "after:h-full", "after:z-0"],
        pickerWrapper: "opacity-100 pointer-events-auto z-10",
        gridWrapper: "h-[var(--picker-height)] overflow-y-hidden",
        grid: "opacity-0 pointer-events-none",
        nextButton: "opacity-0 pointer-events-none",
        prevButton: "opacity-0 pointer-events-none"
      },
      false: {}
    },
    showMonthAndYearPickers: {
      true: {
        base: "[--picker-height:224px]",
        header: "h-8 bg-default-100 rounded-full"
      },
      false: {}
    },
    showShadow: {
      true: {
        cellButton: "data-[selected=true]:shadow-md"
      },
      false: {
        cellButton: "shadow-none data-[selected=true]:shadow-none"
      }
    },
    disableAnimation: {
      true: {
        cellButton: "transition-none"
      },
      false: {
        headerWrapper: ["[&_.chevron-icon]:transition-transform", "after:transition-height"],
        grid: "transition-opacity",
        cellButton: ["origin-center transition-[transform,background-color,color] !duration-150"],
        pickerWrapper: "transition-opacity !duration-250",
        pickerItem: "transition-opacity"
      }
    }
  },
  defaultVariants: {
    color: "primary",
    showShadow: false,
    hideDisabledDates: false,
    showMonthAndYearPickers: false
  },
  compoundVariants: [
    {
      isRange: false,
      color: "foreground",
      class: {
        cellButton: [
          "data-[hover=true]:bg-default-200",
          "data-[selected=true]:bg-foreground",
          "data-[selected=true]:text-background",
          "data-[hover=true]:bg-foreground-200",
          "data-[hover=true]:text-foreground-600",
          "data-[selected=true]:data-[hover=true]:bg-foreground",
          "data-[selected=true]:data-[hover=true]:text-background"
        ]
      }
    },
    {
      isRange: false,
      color: "primary",
      class: {
        cellButton: [
          "data-[selected=true]:bg-primary",
          "data-[selected=true]:text-primary-foreground",
          "data-[hover=true]:bg-primary-50",
          "data-[hover=true]:text-primary-400",
          "data-[selected=true]:data-[hover=true]:bg-primary",
          "data-[selected=true]:data-[hover=true]:text-primary-foreground"
        ]
      }
    },
    {
      isRange: false,
      color: "secondary",
      class: {
        cellButton: [
          "data-[selected=true]:bg-secondary",
          "data-[selected=true]:text-secondary-foreground",
          "data-[hover=true]:bg-secondary-50",
          "data-[hover=true]:text-secondary-400",
          "data-[selected=true]:data-[hover=true]:bg-secondary",
          "data-[selected=true]:data-[hover=true]:text-secondary-foreground"
        ]
      }
    },
    {
      isRange: false,
      color: "success",
      class: {
        cellButton: [
          "data-[selected=true]:bg-success",
          "data-[selected=true]:text-success-foreground",
          "data-[hover=true]:bg-success-100",
          "data-[hover=true]:text-success-600",
          "dark:data-[hover=true]:bg-success-50",
          "dark:data-[hover=true]:text-success-500",
          "data-[selected=true]:data-[hover=true]:bg-success",
          "dark:data-[selected=true]:data-[hover=true]:bg-success",
          "dark:data-[selected=true]:data-[hover=true]:text-success-foreground",
          "data-[selected=true]:data-[hover=true]:text-success-foreground"
        ]
      }
    },
    {
      isRange: false,
      color: "warning",
      class: {
        cellButton: [
          "data-[selected=true]:bg-warning",
          "data-[selected=true]:text-warning-foreground",
          "data-[hover=true]:bg-warning-100",
          "data-[hover=true]:text-warning-600",
          "dark:data-[hover=true]:bg-warning-50",
          "dark:data-[hover=true]:text-warning-500",
          "data-[selected=true]:data-[hover=true]:bg-warning",
          "dark:data-[selected=true]:data-[hover=true]:bg-warning",
          "dark:data-[selected=true]:data-[hover=true]:text-warning-foreground",
          "data-[selected=true]:data-[hover=true]:text-warning-foreground"
        ]
      }
    },
    {
      isRange: false,
      color: "danger",
      class: {
        cellButton: [
          "data-[selected=true]:bg-danger",
          "data-[selected=true]:text-danger-foreground",
          "data-[hover=true]:bg-danger-100",
          "data-[hover=true]:text-danger-500",
          "dark:data-[hover=true]:bg-danger-50",
          "dark:data-[hover=true]:text-danger-500",
          "data-[selected=true]:data-[hover=true]:bg-danger",
          "dark:data-[selected=true]:data-[hover=true]:bg-danger",
          "dark:data-[selected=true]:data-[hover=true]:text-danger-foreground",
          "data-[selected=true]:data-[hover=true]:text-danger-foreground"
        ]
      }
    },
    {
      isRange: true,
      color: "foreground",
      class: {
        cellButton: [
          "data-[selected=true]:data-[range-selection=true]:before:bg-foreground/10",
          "data-[selected=true]:data-[range-selection=true]:text-foreground",
          "data-[selected=true]:data-[selection-start=true]:data-[range-selection=true]:bg-foreground",
          "data-[selected=true]:data-[selection-start=true]:data-[range-selection=true]:text-background",
          "data-[selected=true]:data-[selection-end=true]:data-[range-selection=true]:bg-foreground",
          "data-[selected=true]:data-[selection-end=true]:data-[range-selection=true]:text-background"
        ]
      }
    },
    {
      isRange: true,
      color: "primary",
      class: {
        cellButton: [
          "data-[selected=true]:data-[range-selection=true]:before:bg-primary-50",
          "data-[selected=true]:data-[range-selection=true]:text-primary",
          "data-[selected=true]:data-[selection-start=true]:data-[range-selection=true]:bg-primary",
          "data-[selected=true]:data-[selection-start=true]:data-[range-selection=true]:text-primary-foreground",
          "data-[selected=true]:data-[selection-end=true]:data-[range-selection=true]:bg-primary",
          "data-[selected=true]:data-[selection-end=true]:data-[range-selection=true]:text-primary-foreground"
        ]
      }
    },
    {
      isRange: true,
      color: "secondary",
      class: {
        cellButton: [
          "data-[selected=true]:data-[range-selection=true]:before:bg-secondary-50",
          "data-[selected=true]:data-[range-selection=true]:text-secondary",
          "data-[selected=true]:data-[selection-start=true]:data-[range-selection=true]:bg-secondary",
          "data-[selected=true]:data-[selection-start=true]:data-[range-selection=true]:text-secondary-foreground",
          "data-[selected=true]:data-[selection-end=true]:data-[range-selection=true]:bg-secondary",
          "data-[selected=true]:data-[selection-end=true]:data-[range-selection=true]:text-secondary-foreground"
        ]
      }
    },
    {
      isRange: true,
      color: "success",
      class: {
        cellButton: [
          "data-[selected=true]:data-[range-selection=true]:before:bg-success-100",
          "data-[selected=true]:data-[range-selection=true]:text-success-600",
          "dark:data-[selected=true]:data-[range-selection=true]:before:bg-success-50",
          "dark:data-[selected=true]:data-[range-selection=true]:text-success-500",
          "data-[selected=true]:data-[selection-start=true]:data-[range-selection=true]:bg-success",
          "data-[selected=true]:data-[selection-start=true]:data-[range-selection=true]:text-success-foreground",
          "dark:data-[selected=true]:data-[selection-start=true]:data-[range-selection=true]:text-success-foreground",
          "data-[selected=true]:data-[selection-end=true]:data-[range-selection=true]:bg-success",
          "data-[selected=true]:data-[selection-end=true]:data-[range-selection=true]:text-success-foreground",
          "dark:data-[selected=true]:data-[selection-end=true]:data-[range-selection=true]:text-success-foreground"
        ]
      }
    },
    {
      isRange: true,
      color: "warning",
      class: {
        cellButton: [
          "data-[selected=true]:data-[range-selection=true]:before:bg-warning-100",
          "dark:data-[selected=true]:data-[range-selection=true]:before:bg-warning-50",
          "data-[selected=true]:data-[range-selection=true]:text-warning-500",
          "data-[selected=true]:data-[selection-start=true]:data-[range-selection=true]:bg-warning",
          "data-[selected=true]:data-[selection-start=true]:data-[range-selection=true]:text-warning-foreground",
          "data-[selected=true]:data-[selection-end=true]:data-[range-selection=true]:bg-warning",
          "data-[selected=true]:data-[selection-end=true]:data-[range-selection=true]:text-warning-foreground"
        ]
      }
    },
    {
      isRange: true,
      color: "danger",
      class: {
        cellButton: [
          "data-[selected=true]:data-[range-selection=true]:before:bg-danger-50",
          "data-[selected=true]:data-[range-selection=true]:text-danger-500",
          "data-[selected=true]:data-[selection-start=true]:data-[range-selection=true]:bg-danger",
          "data-[selected=true]:data-[selection-start=true]:data-[range-selection=true]:text-danger-foreground",
          "data-[selected=true]:data-[selection-end=true]:data-[range-selection=true]:bg-danger",
          "data-[selected=true]:data-[selection-end=true]:data-[range-selection=true]:text-danger-foreground"
        ]
      }
    },
    {
      showShadow: true,
      color: "foreground",
      class: {
        cellButton: "data-[selected=true]:shadow-foreground/40"
      }
    },
    {
      showShadow: true,
      color: "primary",
      class: {
        cellButton: "data-[selected=true]:shadow-primary/40"
      }
    },
    {
      showShadow: true,
      color: "secondary",
      class: {
        cellButton: "data-[selected=true]:shadow-secondary/40"
      }
    },
    {
      showShadow: true,
      color: "success",
      class: {
        cellButton: "data-[selected=true]:shadow-success/40"
      }
    },
    {
      showShadow: true,
      color: "warning",
      class: {
        cellButton: "data-[selected=true]:shadow-warning/40"
      }
    },
    {
      showShadow: true,
      color: "danger",
      class: {
        cellButton: "data-[selected=true]:shadow-danger/40"
      }
    },
    {
      showShadow: true,
      isRange: true,
      class: {
        cellButton: [
          "data-[selected=true]:shadow-none",
          "data-[selected=true]:data-[selection-start=true]:shadow-md",
          "data-[selected=true]:data-[selection-end=true]:shadow-md"
        ]
      }
    }
  ],
  compoundSlots: [
    {
      slots: ["prevButton", "nextButton"],
      class: ["text-medium", "text-default-400"]
    },
    {
      slots: ["pickerMonthList", "pickerYearList"],
      class: [
        "flex flex-col px-4 overflow-y-scroll scrollbar-hide snap-y snap-mandatory",
        "[--scroll-shadow-size:100px]",
        "[mask-image:linear-gradient(#000,#000,transparent_0,#000_var(--scroll-shadow-size),#000_calc(100%_-_var(--scroll-shadow-size)),transparent)]"
      ]
    }
  ]
});
function useMeasure() {
  const [dimensions, setDimensions] = reactExports.useState({
    width: null,
    height: null
  });
  const previousObserver = reactExports.useRef(null);
  const customRef = reactExports.useCallback((node) => {
    if (previousObserver.current) {
      previousObserver.current.disconnect();
      previousObserver.current = null;
    }
    if ((node == null ? void 0 : node.nodeType) === Node.ELEMENT_NODE) {
      const observer = new ResizeObserver(([entry]) => {
        if (entry && entry.borderBoxSize) {
          const { inlineSize: width, blockSize: height } = entry.borderBoxSize[0];
          setDimensions({ width, height });
        }
      });
      observer.observe(node);
      previousObserver.current = observer;
    }
  }, []);
  return [customRef, dimensions];
}
var ResizablePanel = reactExports.forwardRef(
  (originalProps, ref) => {
    const { children, ...props } = originalProps;
    let [measureRef, bounds] = useMeasure();
    return /* @__PURE__ */ jsxRuntimeExports.jsx(LazyMotion$1, { features: domAnimation$1, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      m$1.div,
      {
        ref,
        animate: {
          width: bounds.width && (bounds == null ? void 0 : bounds.width) > 0 ? bounds.width : "auto",
          height: bounds.height && bounds.height > 0 ? bounds.height : "auto"
        },
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref: measureRef, ...props, children })
      }
    ) });
  }
);
ResizablePanel.displayName = "NextUI - ResizablePanel";
function useCalendarBase(originalProps) {
  var _a, _b, _c, _d, _e, _f, _g;
  const [props, variantProps2] = mapPropsVariants(originalProps, calendar.variantKeys);
  const globalContext = useProviderContext();
  const { locale } = $18f2051aff69b9bf$export$43bb16f9c6d9e3f7();
  const calendarProp = $64244302c3013299$export$dd0bbc9b26defe37(new $fb18d541ea1ad717$export$ad991b66133851cf(locale).resolvedOptions().calendar);
  const gregorianYearOffset = getGregorianYearOffset(calendarProp.identifier);
  const {
    ref,
    as,
    children,
    className,
    topContent,
    bottomContent,
    showHelper = true,
    calendarWidth = 256,
    visibleMonths: visibleMonthsProp = 1,
    weekdayStyle = "narrow",
    navButtonProps = {},
    isHeaderExpanded: isHeaderExpandedProp,
    isHeaderDefaultExpanded,
    onHeaderExpandedChange = () => {
    },
    createCalendar: createCalendarProp = (_a = globalContext == null ? void 0 : globalContext.createCalendar) != null ? _a : null,
    minValue = (_c = (_b = globalContext == null ? void 0 : globalContext.defaultDates) == null ? void 0 : _b.minDate) != null ? _c : new $35ea8db9cb2ccb90$export$99faa760c7908e4f(calendarProp, 1900 + gregorianYearOffset, 1, 1),
    maxValue = (_e = (_d = globalContext == null ? void 0 : globalContext.defaultDates) == null ? void 0 : _d.maxDate) != null ? _e : new $35ea8db9cb2ccb90$export$99faa760c7908e4f(calendarProp, 2099 + gregorianYearOffset, 12, 31),
    prevButtonProps: prevButtonPropsProp,
    nextButtonProps: nextButtonPropsProp,
    errorMessage,
    classNames,
    ...otherProps
  } = props;
  const Component = as || "div";
  const visibleMonths = clamp$1(visibleMonthsProp, 1, 3);
  const showMonthAndYearPickers = originalProps.showMonthAndYearPickers && visibleMonths === 1 && !(originalProps == null ? void 0 : originalProps.isRange);
  const domRef = useDOMRef(ref);
  const handleHeaderExpandedChange = reactExports.useCallback(
    (isExpanded) => {
      onHeaderExpandedChange(isExpanded || false);
    },
    [onHeaderExpandedChange]
  );
  const [isHeaderExpanded, setIsHeaderExpanded] = $458b0a5536c1a7cf$export$40bfa8c7b0832715(
    isHeaderExpandedProp,
    isHeaderDefaultExpanded != null ? isHeaderDefaultExpanded : false,
    handleHeaderExpandedChange
  );
  const visibleDuration = reactExports.useMemo(() => ({ months: visibleMonths }), [visibleMonths]);
  const hasMultipleMonths = visibleMonths > 1;
  const shouldFilterDOMProps = typeof Component === "string";
  const slots = reactExports.useMemo(
    () => calendar({
      ...variantProps2,
      showMonthAndYearPickers,
      isRange: !!originalProps.isRange,
      isHeaderWrapperExpanded: isHeaderExpanded,
      className
    }),
    [objectToDeps(variantProps2), showMonthAndYearPickers, isHeaderExpanded, className]
  );
  const disableAnimation = (_g = (_f = originalProps.disableAnimation) != null ? _f : globalContext == null ? void 0 : globalContext.disableAnimation) != null ? _g : false;
  const commonButtonProps = {
    size: "sm",
    variant: "light",
    radius: "full",
    isIconOnly: true,
    disableAnimation,
    ...navButtonProps
  };
  const baseProps = {
    "data-slot": "base",
    "data-has-multiple-months": dataAttr(hasMultipleMonths),
    style: {
      "--visible-months": typeof visibleMonths === "number" ? `${visibleMonths}` : visibleMonths,
      "--calendar-width": typeof calendarWidth === "number" ? `${calendarWidth}px` : calendarWidth
    }
  };
  const getPrevButtonProps = (props2 = {}) => {
    return {
      "data-slot": "prev-button",
      tabIndex: isHeaderExpanded ? -1 : 0,
      className: slots.prevButton({ class: classNames == null ? void 0 : classNames.prevButton }),
      ...$3ef42575df84b30b$export$9d1611c77c2fe928(commonButtonProps, prevButtonPropsProp, props2)
    };
  };
  const getNextButtonProps = (props2 = {}) => {
    return {
      "data-slot": "next-button",
      tabIndex: isHeaderExpanded ? -1 : 0,
      className: slots.nextButton({ class: classNames == null ? void 0 : classNames.nextButton }),
      ...$3ef42575df84b30b$export$9d1611c77c2fe928(commonButtonProps, nextButtonPropsProp, props2)
    };
  };
  const getErrorMessageProps = (props2 = {}) => {
    return {
      "data-slot": "error-message",
      className: slots.errorMessage({ class: classNames == null ? void 0 : classNames.errorMessage }),
      ...props2
    };
  };
  return {
    Component,
    children,
    domRef,
    slots,
    locale,
    minValue,
    maxValue,
    baseProps,
    showHelper,
    weekdayStyle,
    visibleMonths,
    visibleDuration,
    shouldFilterDOMProps,
    isHeaderExpanded,
    showMonthAndYearPickers,
    disableAnimation,
    createCalendar: createCalendarProp,
    getPrevButtonProps,
    getNextButtonProps,
    getErrorMessageProps,
    setIsHeaderExpanded,
    topContent,
    bottomContent,
    errorMessage,
    classNames,
    otherProps
  };
}
var $39324ace0d945f59$exports = {};
$39324ace0d945f59$exports = {
  "dateRange": (args) => `${args.startDate} إلى ${args.endDate}`,
  "dateSelected": (args) => `${args.date} المحدد`,
  "finishRangeSelectionPrompt": `انقر لإنهاء عملية تحديد نطاق التاريخ`,
  "maximumDate": `آخر تاريخ متاح`,
  "minimumDate": `أول تاريخ متاح`,
  "next": `التالي`,
  "previous": `السابق`,
  "selectedDateDescription": (args) => `تاريخ محدد: ${args.date}`,
  "selectedRangeDescription": (args) => `المدى الزمني المحدد: ${args.dateRange}`,
  "startRangeSelectionPrompt": `انقر لبدء عملية تحديد نطاق التاريخ`,
  "todayDate": (args) => `اليوم، ${args.date}`,
  "todayDateSelected": (args) => `اليوم، ${args.date} محدد`
};
var $1830a539e98c7baf$exports = {};
$1830a539e98c7baf$exports = {
  "dateRange": (args) => `${args.startDate} до ${args.endDate}`,
  "dateSelected": (args) => `Избрано е ${args.date}`,
  "finishRangeSelectionPrompt": `Натиснете, за да довършите избора на времеви интервал`,
  "maximumDate": `Последна налична дата`,
  "minimumDate": `Първа налична дата`,
  "next": `Напред`,
  "previous": `Назад`,
  "selectedDateDescription": (args) => `Избрана дата: ${args.date}`,
  "selectedRangeDescription": (args) => `Избран диапазон: ${args.dateRange}`,
  "startRangeSelectionPrompt": `Натиснете, за да пристъпите към избора на времеви интервал`,
  "todayDate": (args) => `Днес, ${args.date}`,
  "todayDateSelected": (args) => `Днес, ${args.date} са избрани`
};
var $f4b92528965aab97$exports = {};
$f4b92528965aab97$exports = {
  "dateRange": (args) => `${args.startDate} až ${args.endDate}`,
  "dateSelected": (args) => `Vybráno ${args.date}`,
  "finishRangeSelectionPrompt": `Kliknutím dokončíte výběr rozsahu dat`,
  "maximumDate": `Poslední dostupné datum`,
  "minimumDate": `První dostupné datum`,
  "next": `Další`,
  "previous": `Předchozí`,
  "selectedDateDescription": (args) => `Vybrané datum: ${args.date}`,
  "selectedRangeDescription": (args) => `Vybrané období: ${args.dateRange}`,
  "startRangeSelectionPrompt": `Kliknutím zahájíte výběr rozsahu dat`,
  "todayDate": (args) => `Dnes, ${args.date}`,
  "todayDateSelected": (args) => `Dnes, vybráno ${args.date}`
};
var $1cd578ef0547c8f1$exports = {};
$1cd578ef0547c8f1$exports = {
  "dateRange": (args) => `${args.startDate} til ${args.endDate}`,
  "dateSelected": (args) => `${args.date} valgt`,
  "finishRangeSelectionPrompt": `Klik for at fuldføre valg af datoområde`,
  "maximumDate": `Sidste ledige dato`,
  "minimumDate": `Første ledige dato`,
  "next": `Næste`,
  "previous": `Forrige`,
  "selectedDateDescription": (args) => `Valgt dato: ${args.date}`,
  "selectedRangeDescription": (args) => `Valgt interval: ${args.dateRange}`,
  "startRangeSelectionPrompt": `Klik for at starte valg af datoområde`,
  "todayDate": (args) => `I dag, ${args.date}`,
  "todayDateSelected": (args) => `I dag, ${args.date} valgt`
};
var $db55a8973925d619$exports = {};
$db55a8973925d619$exports = {
  "dateRange": (args) => `${args.startDate} bis ${args.endDate}`,
  "dateSelected": (args) => `${args.date} ausgewählt`,
  "finishRangeSelectionPrompt": `Klicken, um die Auswahl des Datumsbereichs zu beenden`,
  "maximumDate": `Letztes verfügbares Datum`,
  "minimumDate": `Erstes verfügbares Datum`,
  "next": `Weiter`,
  "previous": `Zurück`,
  "selectedDateDescription": (args) => `Ausgewähltes Datum: ${args.date}`,
  "selectedRangeDescription": (args) => `Ausgewählter Bereich: ${args.dateRange}`,
  "startRangeSelectionPrompt": `Klicken, um die Auswahl des Datumsbereichs zu beginnen`,
  "todayDate": (args) => `Heute, ${args.date}`,
  "todayDateSelected": (args) => `Heute, ${args.date} ausgewählt`
};
var $ec6937d58566d443$exports = {};
$ec6937d58566d443$exports = {
  "dateRange": (args) => `${args.startDate} έως ${args.endDate}`,
  "dateSelected": (args) => `Επιλέχθηκε ${args.date}`,
  "finishRangeSelectionPrompt": `Κάντε κλικ για να ολοκληρώσετε την επιλογή εύρους ημερομηνιών`,
  "maximumDate": `Τελευταία διαθέσιμη ημερομηνία`,
  "minimumDate": `Πρώτη διαθέσιμη ημερομηνία`,
  "next": `Επόμενο`,
  "previous": `Προηγούμενο`,
  "selectedDateDescription": (args) => `Επιλεγμένη ημερομηνία: ${args.date}`,
  "selectedRangeDescription": (args) => `Επιλεγμένο εύρος: ${args.dateRange}`,
  "startRangeSelectionPrompt": `Κάντε κλικ για να ξεκινήσετε την επιλογή εύρους ημερομηνιών`,
  "todayDate": (args) => `Σήμερα, ${args.date}`,
  "todayDateSelected": (args) => `Σήμερα, επιλέχτηκε ${args.date}`
};
var $1f5cea0742dc284a$exports = {};
$1f5cea0742dc284a$exports = {
  "previous": `Previous`,
  "next": `Next`,
  "selectedDateDescription": (args) => `Selected Date: ${args.date}`,
  "selectedRangeDescription": (args) => `Selected Range: ${args.dateRange}`,
  "todayDate": (args) => `Today, ${args.date}`,
  "todayDateSelected": (args) => `Today, ${args.date} selected`,
  "dateSelected": (args) => `${args.date} selected`,
  "startRangeSelectionPrompt": `Click to start selecting date range`,
  "finishRangeSelectionPrompt": `Click to finish selecting date range`,
  "minimumDate": `First available date`,
  "maximumDate": `Last available date`,
  "dateRange": (args) => `${args.startDate} to ${args.endDate}`
};
var $2ca7ea366384817b$exports = {};
$2ca7ea366384817b$exports = {
  "dateRange": (args) => `${args.startDate} a ${args.endDate}`,
  "dateSelected": (args) => `${args.date} seleccionado`,
  "finishRangeSelectionPrompt": `Haga clic para terminar de seleccionar rango de fechas`,
  "maximumDate": `Última fecha disponible`,
  "minimumDate": `Primera fecha disponible`,
  "next": `Siguiente`,
  "previous": `Anterior`,
  "selectedDateDescription": (args) => `Fecha seleccionada: ${args.date}`,
  "selectedRangeDescription": (args) => `Intervalo seleccionado: ${args.dateRange}`,
  "startRangeSelectionPrompt": `Haga clic para comenzar a seleccionar un rango de fechas`,
  "todayDate": (args) => `Hoy, ${args.date}`,
  "todayDateSelected": (args) => `Hoy, ${args.date} seleccionado`
};
var $97874a7fe9cd091f$exports = {};
$97874a7fe9cd091f$exports = {
  "dateRange": (args) => `${args.startDate} kuni ${args.endDate}`,
  "dateSelected": (args) => `${args.date} valitud`,
  "finishRangeSelectionPrompt": `Klõpsake kuupäevavahemiku valimise lõpetamiseks`,
  "maximumDate": `Viimane saadaolev kuupäev`,
  "minimumDate": `Esimene saadaolev kuupäev`,
  "next": `Järgmine`,
  "previous": `Eelmine`,
  "selectedDateDescription": (args) => `Valitud kuupäev: ${args.date}`,
  "selectedRangeDescription": (args) => `Valitud vahemik: ${args.dateRange}`,
  "startRangeSelectionPrompt": `Klõpsake kuupäevavahemiku valimiseks`,
  "todayDate": (args) => `Täna, ${args.date}`,
  "todayDateSelected": (args) => `Täna, ${args.date} valitud`
};
var $5d376b7fce1a45b2$exports = {};
$5d376b7fce1a45b2$exports = {
  "dateRange": (args) => `${args.startDate} – ${args.endDate}`,
  "dateSelected": (args) => `${args.date} valittu`,
  "finishRangeSelectionPrompt": `Lopeta päivämääräalueen valinta napsauttamalla tätä.`,
  "maximumDate": `Viimeinen varattavissa oleva päivämäärä`,
  "minimumDate": `Ensimmäinen varattavissa oleva päivämäärä`,
  "next": `Seuraava`,
  "previous": `Edellinen`,
  "selectedDateDescription": (args) => `Valittu päivämäärä: ${args.date}`,
  "selectedRangeDescription": (args) => `Valittu aikaväli: ${args.dateRange}`,
  "startRangeSelectionPrompt": `Aloita päivämääräalueen valinta napsauttamalla tätä.`,
  "todayDate": (args) => `Tänään, ${args.date}`,
  "todayDateSelected": (args) => `Tänään, ${args.date} valittu`
};
var $3bf722b362aaf54d$exports = {};
$3bf722b362aaf54d$exports = {
  "dateRange": (args) => `${args.startDate} à ${args.endDate}`,
  "dateSelected": (args) => `${args.date} sélectionné`,
  "finishRangeSelectionPrompt": `Cliquer pour finir de sélectionner la plage de dates`,
  "maximumDate": `Dernière date disponible`,
  "minimumDate": `Première date disponible`,
  "next": `Suivant`,
  "previous": `Précédent`,
  "selectedDateDescription": (args) => `Date sélectionnée : ${args.date}`,
  "selectedRangeDescription": (args) => `Plage sélectionnée : ${args.dateRange}`,
  "startRangeSelectionPrompt": `Cliquer pour commencer à sélectionner la plage de dates`,
  "todayDate": (args) => `Aujourd'hui, ${args.date}`,
  "todayDateSelected": (args) => `Aujourd’hui, ${args.date} sélectionné`
};
var $38c43f8322316031$exports = {};
$38c43f8322316031$exports = {
  "dateRange": (args) => `${args.startDate} עד ${args.endDate}`,
  "dateSelected": (args) => `${args.date} נבחר`,
  "finishRangeSelectionPrompt": `חץ כדי לסיים את בחירת טווח התאריכים`,
  "maximumDate": `תאריך פנוי אחרון`,
  "minimumDate": `תאריך פנוי ראשון`,
  "next": `הבא`,
  "previous": `הקודם`,
  "selectedDateDescription": (args) => `תאריך נבחר: ${args.date}`,
  "selectedRangeDescription": (args) => `טווח נבחר: ${args.dateRange}`,
  "startRangeSelectionPrompt": `לחץ כדי להתחיל בבחירת טווח התאריכים`,
  "todayDate": (args) => `היום, ${args.date}`,
  "todayDateSelected": (args) => `היום, ${args.date} נבחר`
};
var $c90e0f32b44630bf$exports = {};
$c90e0f32b44630bf$exports = {
  "dateRange": (args) => `${args.startDate} do ${args.endDate}`,
  "dateSelected": (args) => `${args.date} odabran`,
  "finishRangeSelectionPrompt": `Kliknite da dovršite raspon odabranih datuma`,
  "maximumDate": `Posljednji raspoloživi datum`,
  "minimumDate": `Prvi raspoloživi datum`,
  "next": `Sljedeći`,
  "previous": `Prethodni`,
  "selectedDateDescription": (args) => `Odabrani datum: ${args.date}`,
  "selectedRangeDescription": (args) => `Odabrani raspon: ${args.dateRange}`,
  "startRangeSelectionPrompt": `Kliknite da započnete raspon odabranih datuma`,
  "todayDate": (args) => `Danas, ${args.date}`,
  "todayDateSelected": (args) => `Danas, odabran ${args.date}`
};
var $715875e6e7a338f4$exports = {};
$715875e6e7a338f4$exports = {
  "dateRange": (args) => `${args.startDate}–${args.endDate}`,
  "dateSelected": (args) => `${args.date} kiválasztva`,
  "finishRangeSelectionPrompt": `Kattintson a dátumtartomány kijelölésének befejezéséhez`,
  "maximumDate": `Utolsó elérhető dátum`,
  "minimumDate": `Az első elérhető dátum`,
  "next": `Következő`,
  "previous": `Előző`,
  "selectedDateDescription": (args) => `Kijelölt dátum: ${args.date}`,
  "selectedRangeDescription": (args) => `Kijelölt tartomány: ${args.dateRange}`,
  "startRangeSelectionPrompt": `Kattintson a dátumtartomány kijelölésének indításához`,
  "todayDate": (args) => `Ma, ${args.date}`,
  "todayDateSelected": (args) => `Ma, ${args.date} kijelölve`
};
var $37d77c66e34daccf$exports = {};
$37d77c66e34daccf$exports = {
  "dateRange": (args) => `Da ${args.startDate} a ${args.endDate}`,
  "dateSelected": (args) => `${args.date} selezionata`,
  "finishRangeSelectionPrompt": `Fai clic per completare la selezione dell’intervallo di date`,
  "maximumDate": `Ultima data disponibile`,
  "minimumDate": `Prima data disponibile`,
  "next": `Successivo`,
  "previous": `Precedente`,
  "selectedDateDescription": (args) => `Data selezionata: ${args.date}`,
  "selectedRangeDescription": (args) => `Intervallo selezionato: ${args.dateRange}`,
  "startRangeSelectionPrompt": `Fai clic per selezionare l’intervallo di date`,
  "todayDate": (args) => `Oggi, ${args.date}`,
  "todayDateSelected": (args) => `Oggi, ${args.date} selezionata`
};
var $542f39aee29303c3$exports = {};
$542f39aee29303c3$exports = {
  "dateRange": (args) => `${args.startDate} から ${args.endDate}`,
  "dateSelected": (args) => `${args.date} を選択`,
  "finishRangeSelectionPrompt": `クリックして日付範囲の選択を終了`,
  "maximumDate": `最終利用可能日`,
  "minimumDate": `最初の利用可能日`,
  "next": `次へ`,
  "previous": `前へ`,
  "selectedDateDescription": (args) => `選択した日付 : ${args.date}`,
  "selectedRangeDescription": (args) => `選択範囲 : ${args.dateRange}`,
  "startRangeSelectionPrompt": `クリックして日付範囲の選択を開始`,
  "todayDate": (args) => `本日、${args.date}`,
  "todayDateSelected": (args) => `本日、${args.date} を選択`
};
var $22a5f0623ea73e4f$exports = {};
$22a5f0623ea73e4f$exports = {
  "dateRange": (args) => `${args.startDate} ~ ${args.endDate}`,
  "dateSelected": (args) => `${args.date} 선택됨`,
  "finishRangeSelectionPrompt": `날짜 범위 선택을 완료하려면 클릭하십시오.`,
  "maximumDate": `마지막으로 사용 가능한 일자`,
  "minimumDate": `처음으로 사용 가능한 일자`,
  "next": `다음`,
  "previous": `이전`,
  "selectedDateDescription": (args) => `선택 일자: ${args.date}`,
  "selectedRangeDescription": (args) => `선택 범위: ${args.dateRange}`,
  "startRangeSelectionPrompt": `날짜 범위 선택을 시작하려면 클릭하십시오.`,
  "todayDate": (args) => `오늘, ${args.date}`,
  "todayDateSelected": (args) => `오늘, ${args.date} 선택됨`
};
var $522380d13d62cba0$exports = {};
$522380d13d62cba0$exports = {
  "dateRange": (args) => `Nuo ${args.startDate} iki ${args.endDate}`,
  "dateSelected": (args) => `Pasirinkta ${args.date}`,
  "finishRangeSelectionPrompt": `Spustelėkite, kad baigtumėte pasirinkti datų intervalą`,
  "maximumDate": `Paskutinė galima data`,
  "minimumDate": `Pirmoji galima data`,
  "next": `Paskesnis`,
  "previous": `Ankstesnis`,
  "selectedDateDescription": (args) => `Pasirinkta data: ${args.date}`,
  "selectedRangeDescription": (args) => `Pasirinktas intervalas: ${args.dateRange}`,
  "startRangeSelectionPrompt": `Spustelėkite, kad pradėtumėte pasirinkti datų intervalą`,
  "todayDate": (args) => `Šiandien, ${args.date}`,
  "todayDateSelected": (args) => `Šiandien, pasirinkta ${args.date}`
};
var $8a7bc830b2fe6485$exports = {};
$8a7bc830b2fe6485$exports = {
  "dateRange": (args) => `No ${args.startDate} līdz ${args.endDate}`,
  "dateSelected": (args) => `Atlasīts: ${args.date}`,
  "finishRangeSelectionPrompt": `Noklikšķiniet, lai pabeigtu datumu diapazona atlasi`,
  "maximumDate": `Pēdējais pieejamais datums`,
  "minimumDate": `Pirmais pieejamais datums`,
  "next": `Tālāk`,
  "previous": `Atpakaļ`,
  "selectedDateDescription": (args) => `Atlasītais datums: ${args.date}`,
  "selectedRangeDescription": (args) => `Atlasītais diapazons: ${args.dateRange}`,
  "startRangeSelectionPrompt": `Noklikšķiniet, lai sāktu datumu diapazona atlasi`,
  "todayDate": (args) => `Šodien, ${args.date}`,
  "todayDateSelected": (args) => `Atlasīta šodiena, ${args.date}`
};
var $9fac9c044470683b$exports = {};
$9fac9c044470683b$exports = {
  "dateRange": (args) => `${args.startDate} til ${args.endDate}`,
  "dateSelected": (args) => `${args.date} valgt`,
  "finishRangeSelectionPrompt": `Klikk for å fullføre valg av datoområde`,
  "maximumDate": `Siste tilgjengelige dato`,
  "minimumDate": `Første tilgjengelige dato`,
  "next": `Neste`,
  "previous": `Forrige`,
  "selectedDateDescription": (args) => `Valgt dato: ${args.date}`,
  "selectedRangeDescription": (args) => `Valgt område: ${args.dateRange}`,
  "startRangeSelectionPrompt": `Klikk for å starte valg av datoområde`,
  "todayDate": (args) => `I dag, ${args.date}`,
  "todayDateSelected": (args) => `I dag, ${args.date} valgt`
};
var $b127d3569efb1449$exports = {};
$b127d3569efb1449$exports = {
  "dateRange": (args) => `${args.startDate} tot ${args.endDate}`,
  "dateSelected": (args) => `${args.date} geselecteerd`,
  "finishRangeSelectionPrompt": `Klik om de selectie van het datumbereik te voltooien`,
  "maximumDate": `Laatste beschikbare datum`,
  "minimumDate": `Eerste beschikbare datum`,
  "next": `Volgende`,
  "previous": `Vorige`,
  "selectedDateDescription": (args) => `Geselecteerde datum: ${args.date}`,
  "selectedRangeDescription": (args) => `Geselecteerd bereik: ${args.dateRange}`,
  "startRangeSelectionPrompt": `Klik om het datumbereik te selecteren`,
  "todayDate": (args) => `Vandaag, ${args.date}`,
  "todayDateSelected": (args) => `Vandaag, ${args.date} geselecteerd`
};
var $51404a4090633490$exports = {};
$51404a4090633490$exports = {
  "dateRange": (args) => `${args.startDate} do ${args.endDate}`,
  "dateSelected": (args) => `Wybrano ${args.date}`,
  "finishRangeSelectionPrompt": `Kliknij, aby zakończyć wybór zakresu dat`,
  "maximumDate": `Ostatnia dostępna data`,
  "minimumDate": `Pierwsza dostępna data`,
  "next": `Dalej`,
  "previous": `Wstecz`,
  "selectedDateDescription": (args) => `Wybrana data: ${args.date}`,
  "selectedRangeDescription": (args) => `Wybrany zakres: ${args.dateRange}`,
  "startRangeSelectionPrompt": `Kliknij, aby rozpocząć wybór zakresu dat`,
  "todayDate": (args) => `Dzisiaj, ${args.date}`,
  "todayDateSelected": (args) => `Dzisiaj wybrano ${args.date}`
};
var $e5e6a3fe3b4527df$exports = {};
$e5e6a3fe3b4527df$exports = {
  "dateRange": (args) => `${args.startDate} a ${args.endDate}`,
  "dateSelected": (args) => `${args.date} selecionado`,
  "finishRangeSelectionPrompt": `Clique para concluir a seleção do intervalo de datas`,
  "maximumDate": `Última data disponível`,
  "minimumDate": `Primeira data disponível`,
  "next": `Próximo`,
  "previous": `Anterior`,
  "selectedDateDescription": (args) => `Data selecionada: ${args.date}`,
  "selectedRangeDescription": (args) => `Intervalo selecionado: ${args.dateRange}`,
  "startRangeSelectionPrompt": `Clique para iniciar a seleção do intervalo de datas`,
  "todayDate": (args) => `Hoje, ${args.date}`,
  "todayDateSelected": (args) => `Hoje, ${args.date} selecionado`
};
var $c519dcadcbb1ee47$exports = {};
$c519dcadcbb1ee47$exports = {
  "dateRange": (args) => `${args.startDate} a ${args.endDate}`,
  "dateSelected": (args) => `${args.date} selecionado`,
  "finishRangeSelectionPrompt": `Clique para terminar de selecionar o intervalo de datas`,
  "maximumDate": `Última data disponível`,
  "minimumDate": `Primeira data disponível`,
  "next": `Próximo`,
  "previous": `Anterior`,
  "selectedDateDescription": (args) => `Data selecionada: ${args.date}`,
  "selectedRangeDescription": (args) => `Intervalo selecionado: ${args.dateRange}`,
  "startRangeSelectionPrompt": `Clique para começar a selecionar o intervalo de datas`,
  "todayDate": (args) => `Hoje, ${args.date}`,
  "todayDateSelected": (args) => `Hoje, ${args.date} selecionado`
};
var $e5aa0186ca7889c6$exports = {};
$e5aa0186ca7889c6$exports = {
  "dateRange": (args) => `De la ${args.startDate} până la ${args.endDate}`,
  "dateSelected": (args) => `${args.date} selectată`,
  "finishRangeSelectionPrompt": `Apăsaţi pentru a finaliza selecţia razei pentru dată`,
  "maximumDate": `Ultima dată disponibilă`,
  "minimumDate": `Prima dată disponibilă`,
  "next": `Următorul`,
  "previous": `Înainte`,
  "selectedDateDescription": (args) => `Dată selectată: ${args.date}`,
  "selectedRangeDescription": (args) => `Interval selectat: ${args.dateRange}`,
  "startRangeSelectionPrompt": `Apăsaţi pentru a începe selecţia razei pentru dată`,
  "todayDate": (args) => `Astăzi, ${args.date}`,
  "todayDateSelected": (args) => `Azi, ${args.date} selectată`
};
var $5b907f5fa3eee652$exports = {};
$5b907f5fa3eee652$exports = {
  "dateRange": (args) => `С ${args.startDate} по ${args.endDate}`,
  "dateSelected": (args) => `Выбрано ${args.date}`,
  "finishRangeSelectionPrompt": `Щелкните, чтобы завершить выбор диапазона дат`,
  "maximumDate": `Последняя доступная дата`,
  "minimumDate": `Первая доступная дата`,
  "next": `Далее`,
  "previous": `Назад`,
  "selectedDateDescription": (args) => `Выбранная дата: ${args.date}`,
  "selectedRangeDescription": (args) => `Выбранный диапазон: ${args.dateRange}`,
  "startRangeSelectionPrompt": `Щелкните, чтобы начать выбор диапазона дат`,
  "todayDate": (args) => `Сегодня, ${args.date}`,
  "todayDateSelected": (args) => `Сегодня, выбрано ${args.date}`
};
var $1b4c51359c99cf79$exports = {};
$1b4c51359c99cf79$exports = {
  "dateRange": (args) => `Od ${args.startDate} do ${args.endDate}`,
  "dateSelected": (args) => `Vybratý dátum ${args.date}`,
  "finishRangeSelectionPrompt": `Kliknutím dokončíte výber rozsahu dátumov`,
  "maximumDate": `Posledný dostupný dátum`,
  "minimumDate": `Prvý dostupný dátum`,
  "next": `Nasledujúce`,
  "previous": `Predchádzajúce`,
  "selectedDateDescription": (args) => `Vybratý dátum: ${args.date}`,
  "selectedRangeDescription": (args) => `Vybratý rozsah: ${args.dateRange}`,
  "startRangeSelectionPrompt": `Kliknutím spustíte výber rozsahu dátumov`,
  "todayDate": (args) => `Dnes ${args.date}`,
  "todayDateSelected": (args) => `Vybratý dnešný dátum ${args.date}`
};
var $02e4e6a4608cc6f3$exports = {};
$02e4e6a4608cc6f3$exports = {
  "dateRange": (args) => `${args.startDate} do ${args.endDate}`,
  "dateSelected": (args) => `${args.date} izbrano`,
  "finishRangeSelectionPrompt": `Kliknite za dokončanje izbire datumskega obsega`,
  "maximumDate": `Zadnji razpoložljivi datum`,
  "minimumDate": `Prvi razpoložljivi datum`,
  "next": `Naprej`,
  "previous": `Nazaj`,
  "selectedDateDescription": (args) => `Izbrani datum: ${args.date}`,
  "selectedRangeDescription": (args) => `Izbrano območje: ${args.dateRange}`,
  "startRangeSelectionPrompt": `Kliknite za začetek izbire datumskega obsega`,
  "todayDate": (args) => `Danes, ${args.date}`,
  "todayDateSelected": (args) => `Danes, ${args.date} izbrano`
};
var $6dd2fbaad93b6878$exports = {};
$6dd2fbaad93b6878$exports = {
  "dateRange": (args) => `${args.startDate} do ${args.endDate}`,
  "dateSelected": (args) => `${args.date} izabran`,
  "finishRangeSelectionPrompt": `Kliknite da dovršite opseg izabranih datuma`,
  "maximumDate": `Zadnji raspoloživi datum`,
  "minimumDate": `Prvi raspoloživi datum`,
  "next": `Sledeći`,
  "previous": `Prethodni`,
  "selectedDateDescription": (args) => `Izabrani datum: ${args.date}`,
  "selectedRangeDescription": (args) => `Izabrani period: ${args.dateRange}`,
  "startRangeSelectionPrompt": `Kliknite da započnete opseg izabranih datuma`,
  "todayDate": (args) => `Danas, ${args.date}`,
  "todayDateSelected": (args) => `Danas, izabran ${args.date}`
};
var $33ea59bfe6e804e0$exports = {};
$33ea59bfe6e804e0$exports = {
  "dateRange": (args) => `${args.startDate} till ${args.endDate}`,
  "dateSelected": (args) => `${args.date} har valts`,
  "finishRangeSelectionPrompt": `Klicka för att avsluta val av datumintervall`,
  "maximumDate": `Sista tillgängliga datum`,
  "minimumDate": `Första tillgängliga datum`,
  "next": `Nästa`,
  "previous": `Föregående`,
  "selectedDateDescription": (args) => `Valt datum: ${args.date}`,
  "selectedRangeDescription": (args) => `Valt intervall: ${args.dateRange}`,
  "startRangeSelectionPrompt": `Klicka för att välja datumintervall`,
  "todayDate": (args) => `Idag, ${args.date}`,
  "todayDateSelected": (args) => `Idag, ${args.date} har valts`
};
var $4603b0d0246969b2$exports = {};
$4603b0d0246969b2$exports = {
  "dateRange": (args) => `${args.startDate} - ${args.endDate}`,
  "dateSelected": (args) => `${args.date} seçildi`,
  "finishRangeSelectionPrompt": `Tarih aralığı seçimini tamamlamak için tıklayın`,
  "maximumDate": `Son müsait tarih`,
  "minimumDate": `İlk müsait tarih`,
  "next": `Sonraki`,
  "previous": `Önceki`,
  "selectedDateDescription": (args) => `Seçilen Tarih: ${args.date}`,
  "selectedRangeDescription": (args) => `Seçilen Aralık: ${args.dateRange}`,
  "startRangeSelectionPrompt": `Tarih aralığı seçimini başlatmak için tıklayın`,
  "todayDate": (args) => `Bugün, ${args.date}`,
  "todayDateSelected": (args) => `Bugün, ${args.date} seçildi`
};
var $82649816f530bb1b$exports = {};
$82649816f530bb1b$exports = {
  "dateRange": (args) => `${args.startDate} — ${args.endDate}`,
  "dateSelected": (args) => `Вибрано ${args.date}`,
  "finishRangeSelectionPrompt": `Натисніть, щоб завершити вибір діапазону дат`,
  "maximumDate": `Остання доступна дата`,
  "minimumDate": `Перша доступна дата`,
  "next": `Наступний`,
  "previous": `Попередній`,
  "selectedDateDescription": (args) => `Вибрана дата: ${args.date}`,
  "selectedRangeDescription": (args) => `Вибраний діапазон: ${args.dateRange}`,
  "startRangeSelectionPrompt": `Натисніть, щоб почати вибір діапазону дат`,
  "todayDate": (args) => `Сьогодні, ${args.date}`,
  "todayDateSelected": (args) => `Сьогодні, вибрано ${args.date}`
};
var $628e140a43dfb330$exports = {};
$628e140a43dfb330$exports = {
  "dateRange": (args) => `${args.startDate} 至 ${args.endDate}`,
  "dateSelected": (args) => `已选择 ${args.date}`,
  "finishRangeSelectionPrompt": `单击以完成选择日期范围`,
  "maximumDate": `最后一个可用日期`,
  "minimumDate": `第一个可用日期`,
  "next": `下一页`,
  "previous": `上一页`,
  "selectedDateDescription": (args) => `选定的日期：${args.date}`,
  "selectedRangeDescription": (args) => `选定的范围：${args.dateRange}`,
  "startRangeSelectionPrompt": `单击以开始选择日期范围`,
  "todayDate": (args) => `今天，即 ${args.date}`,
  "todayDateSelected": (args) => `已选择今天，即 ${args.date}`
};
var $745937250cd4679c$exports = {};
$745937250cd4679c$exports = {
  "dateRange": (args) => `${args.startDate} 至 ${args.endDate}`,
  "dateSelected": (args) => `已選取 ${args.date}`,
  "finishRangeSelectionPrompt": `按一下以完成選取日期範圍`,
  "maximumDate": `最後一個可用日期`,
  "minimumDate": `第一個可用日期`,
  "next": `下一頁`,
  "previous": `上一頁`,
  "selectedDateDescription": (args) => `選定的日期：${args.date}`,
  "selectedRangeDescription": (args) => `選定的範圍：${args.dateRange}`,
  "startRangeSelectionPrompt": `按一下以開始選取日期範圍`,
  "todayDate": (args) => `今天，${args.date}`,
  "todayDateSelected": (args) => `已選取今天，${args.date}`
};
var $3904726b442bd9b2$exports = {};
$3904726b442bd9b2$exports = {
  "ar-AE": $39324ace0d945f59$exports,
  "bg-BG": $1830a539e98c7baf$exports,
  "cs-CZ": $f4b92528965aab97$exports,
  "da-DK": $1cd578ef0547c8f1$exports,
  "de-DE": $db55a8973925d619$exports,
  "el-GR": $ec6937d58566d443$exports,
  "en-US": $1f5cea0742dc284a$exports,
  "es-ES": $2ca7ea366384817b$exports,
  "et-EE": $97874a7fe9cd091f$exports,
  "fi-FI": $5d376b7fce1a45b2$exports,
  "fr-FR": $3bf722b362aaf54d$exports,
  "he-IL": $38c43f8322316031$exports,
  "hr-HR": $c90e0f32b44630bf$exports,
  "hu-HU": $715875e6e7a338f4$exports,
  "it-IT": $37d77c66e34daccf$exports,
  "ja-JP": $542f39aee29303c3$exports,
  "ko-KR": $22a5f0623ea73e4f$exports,
  "lt-LT": $522380d13d62cba0$exports,
  "lv-LV": $8a7bc830b2fe6485$exports,
  "nb-NO": $9fac9c044470683b$exports,
  "nl-NL": $b127d3569efb1449$exports,
  "pl-PL": $51404a4090633490$exports,
  "pt-BR": $e5e6a3fe3b4527df$exports,
  "pt-PT": $c519dcadcbb1ee47$exports,
  "ro-RO": $e5aa0186ca7889c6$exports,
  "ru-RU": $5b907f5fa3eee652$exports,
  "sk-SK": $1b4c51359c99cf79$exports,
  "sl-SI": $02e4e6a4608cc6f3$exports,
  "sr-SP": $6dd2fbaad93b6878$exports,
  "sv-SE": $33ea59bfe6e804e0$exports,
  "tr-TR": $4603b0d0246969b2$exports,
  "uk-UA": $82649816f530bb1b$exports,
  "zh-CN": $628e140a43dfb330$exports,
  "zh-TW": $745937250cd4679c$exports
};
function $parcel$interopDefault$2(a) {
  return a && a.__esModule ? a.default : a;
}
const $a074e1e2d0f0a665$export$653eddfc964b0f8a = /* @__PURE__ */ new WeakMap();
function $a074e1e2d0f0a665$export$134cbb7fb09a9522(date) {
  return (date === null || date === void 0 ? void 0 : date.calendar.identifier) === "gregory" && date.era === "BC" ? "short" : void 0;
}
function $a074e1e2d0f0a665$export$b6df97c887c38e1a(state) {
  let stringFormatter = $fca6afa0e843324b$export$f12b703ca79dfbb1($parcel$interopDefault$2($3904726b442bd9b2$exports), "@react-aria/calendar");
  let start, end;
  if ("highlightedRange" in state) ({ start, end } = state.highlightedRange || {});
  else start = end = state.value;
  let dateFormatter = $896ba0a80a8f4d36$export$85fd5fdf27bacc79({
    weekday: "long",
    month: "long",
    year: "numeric",
    day: "numeric",
    era: $a074e1e2d0f0a665$export$134cbb7fb09a9522(start) || $a074e1e2d0f0a665$export$134cbb7fb09a9522(end),
    timeZone: state.timeZone
  });
  let anchorDate = "anchorDate" in state ? state.anchorDate : null;
  return reactExports.useMemo(() => {
    if (!anchorDate && start && end) {
      if ($14e0f24ef4ac5c92$export$ea39ec197993aef0(start, end)) {
        let date = dateFormatter.format(start.toDate(state.timeZone));
        return stringFormatter.format("selectedDateDescription", {
          date
        });
      } else {
        let dateRange = $a074e1e2d0f0a665$var$formatRange(dateFormatter, stringFormatter, start, end, state.timeZone);
        return stringFormatter.format("selectedRangeDescription", {
          dateRange
        });
      }
    }
    return "";
  }, [
    start,
    end,
    anchorDate,
    state.timeZone,
    stringFormatter,
    dateFormatter
  ]);
}
function $a074e1e2d0f0a665$export$31afe65d91ef6e8(startDate, endDate, timeZone, isAria) {
  let stringFormatter = $fca6afa0e843324b$export$f12b703ca79dfbb1($parcel$interopDefault$2($3904726b442bd9b2$exports), "@react-aria/calendar");
  let era = $a074e1e2d0f0a665$export$134cbb7fb09a9522(startDate) || $a074e1e2d0f0a665$export$134cbb7fb09a9522(endDate);
  let monthFormatter = $896ba0a80a8f4d36$export$85fd5fdf27bacc79({
    month: "long",
    year: "numeric",
    era,
    calendar: startDate.calendar.identifier,
    timeZone
  });
  let dateFormatter = $896ba0a80a8f4d36$export$85fd5fdf27bacc79({
    month: "long",
    year: "numeric",
    day: "numeric",
    era,
    calendar: startDate.calendar.identifier,
    timeZone
  });
  return reactExports.useMemo(() => {
    if ($14e0f24ef4ac5c92$export$ea39ec197993aef0(startDate, $14e0f24ef4ac5c92$export$a5a3b454ada2268e(startDate))) {
      if ($14e0f24ef4ac5c92$export$ea39ec197993aef0(endDate, $14e0f24ef4ac5c92$export$a2258d9c4118825c(startDate))) return monthFormatter.format(startDate.toDate(timeZone));
      else if ($14e0f24ef4ac5c92$export$ea39ec197993aef0(endDate, $14e0f24ef4ac5c92$export$a2258d9c4118825c(endDate))) return isAria ? $a074e1e2d0f0a665$var$formatRange(monthFormatter, stringFormatter, startDate, endDate, timeZone) : monthFormatter.formatRange(startDate.toDate(timeZone), endDate.toDate(timeZone));
    }
    return isAria ? $a074e1e2d0f0a665$var$formatRange(dateFormatter, stringFormatter, startDate, endDate, timeZone) : dateFormatter.formatRange(startDate.toDate(timeZone), endDate.toDate(timeZone));
  }, [
    startDate,
    endDate,
    monthFormatter,
    dateFormatter,
    stringFormatter,
    timeZone,
    isAria
  ]);
}
function $a074e1e2d0f0a665$var$formatRange(dateFormatter, stringFormatter, start, end, timeZone) {
  let parts = dateFormatter.formatRangeToParts(start.toDate(timeZone), end.toDate(timeZone));
  let separatorIndex = -1;
  for (let i = 0; i < parts.length; i++) {
    let part = parts[i];
    if (part.source === "shared" && part.type === "literal") separatorIndex = i;
    else if (part.source === "endRange") break;
  }
  let startValue = "";
  let endValue = "";
  for (let i = 0; i < parts.length; i++) {
    if (i < separatorIndex) startValue += parts[i].value;
    else if (i > separatorIndex) endValue += parts[i].value;
  }
  return stringFormatter.format("dateRange", {
    startDate: startValue,
    endDate: endValue
  });
}
function $parcel$interopDefault$1(a) {
  return a && a.__esModule ? a.default : a;
}
function $c4acc1de3ab169cf$export$d652b3ea2d672d5b(props, state) {
  let stringFormatter = $fca6afa0e843324b$export$f12b703ca79dfbb1($parcel$interopDefault$1($3904726b442bd9b2$exports), "@react-aria/calendar");
  let domProps = $65484d02dcb7eb3e$export$457c3d6518dd4c6f(props);
  let title = $a074e1e2d0f0a665$export$31afe65d91ef6e8(state.visibleRange.start, state.visibleRange.end, state.timeZone, false);
  let visibleRangeDescription = $a074e1e2d0f0a665$export$31afe65d91ef6e8(state.visibleRange.start, state.visibleRange.end, state.timeZone, true);
  $4f58c5f72bcf79f7$export$496315a1608d9602(() => {
    if (!state.isFocused) $319e236875307eab$export$a9b970dcc4ae71a9(visibleRangeDescription);
  }, [
    visibleRangeDescription
  ]);
  let selectedDateDescription = $a074e1e2d0f0a665$export$b6df97c887c38e1a(state);
  $4f58c5f72bcf79f7$export$496315a1608d9602(() => {
    if (selectedDateDescription) $319e236875307eab$export$a9b970dcc4ae71a9(selectedDateDescription, "polite", 4e3);
  }, [
    selectedDateDescription
  ]);
  let errorMessageId = $bdb11010cef70236$export$b4cc09c592e8fdb8([
    Boolean(props.errorMessage),
    props.isInvalid,
    props.validationState
  ]);
  $a074e1e2d0f0a665$export$653eddfc964b0f8a.set(state, {
    ariaLabel: props["aria-label"],
    ariaLabelledBy: props["aria-labelledby"],
    errorMessageId,
    selectedDateDescription
  });
  let [nextFocused, setNextFocused] = reactExports.useState(false);
  let nextDisabled = props.isDisabled || state.isNextVisibleRangeInvalid();
  if (nextDisabled && nextFocused) {
    setNextFocused(false);
    state.setFocused(true);
  }
  let [previousFocused, setPreviousFocused] = reactExports.useState(false);
  let previousDisabled = props.isDisabled || state.isPreviousVisibleRangeInvalid();
  if (previousDisabled && previousFocused) {
    setPreviousFocused(false);
    state.setFocused(true);
  }
  let labelProps = $313b98861ee5dd6c$export$d6875122194c7b44({
    id: props["id"],
    "aria-label": [
      props["aria-label"],
      visibleRangeDescription
    ].filter(Boolean).join(", "),
    "aria-labelledby": props["aria-labelledby"]
  });
  return {
    calendarProps: $3ef42575df84b30b$export$9d1611c77c2fe928(domProps, labelProps, {
      role: "application",
      "aria-describedby": props["aria-describedby"] || void 0
    }),
    nextButtonProps: {
      onPress: () => state.focusNextPage(),
      "aria-label": stringFormatter.format("next"),
      isDisabled: nextDisabled,
      onFocusChange: setNextFocused
    },
    prevButtonProps: {
      onPress: () => state.focusPreviousPage(),
      "aria-label": stringFormatter.format("previous"),
      isDisabled: previousDisabled,
      onFocusChange: setPreviousFocused
    },
    errorMessageProps: {
      id: errorMessageId
    },
    title
  };
}
function $9942cad8a072a530$export$3ee915f8151bd4f1(props, state) {
  return $c4acc1de3ab169cf$export$d652b3ea2d672d5b(props, state);
}
function $e3031d1f8c9d64eb$export$cb95147730a423f5(props, state) {
  let { startDate = state.visibleRange.start, endDate = state.visibleRange.end } = props;
  let { direction } = $18f2051aff69b9bf$export$43bb16f9c6d9e3f7();
  let onKeyDown = (e) => {
    switch (e.key) {
      case "Enter":
      case " ":
        e.preventDefault();
        state.selectFocusedDate();
        break;
      case "PageUp":
        e.preventDefault();
        e.stopPropagation();
        state.focusPreviousSection(e.shiftKey);
        break;
      case "PageDown":
        e.preventDefault();
        e.stopPropagation();
        state.focusNextSection(e.shiftKey);
        break;
      case "End":
        e.preventDefault();
        e.stopPropagation();
        state.focusSectionEnd();
        break;
      case "Home":
        e.preventDefault();
        e.stopPropagation();
        state.focusSectionStart();
        break;
      case "ArrowLeft":
        e.preventDefault();
        e.stopPropagation();
        if (direction === "rtl") state.focusNextDay();
        else state.focusPreviousDay();
        break;
      case "ArrowUp":
        e.preventDefault();
        e.stopPropagation();
        state.focusPreviousRow();
        break;
      case "ArrowRight":
        e.preventDefault();
        e.stopPropagation();
        if (direction === "rtl") state.focusPreviousDay();
        else state.focusNextDay();
        break;
      case "ArrowDown":
        e.preventDefault();
        e.stopPropagation();
        state.focusNextRow();
        break;
      case "Escape":
        if ("setAnchorDate" in state) {
          e.preventDefault();
          state.setAnchorDate(null);
        }
        break;
    }
  };
  let visibleRangeDescription = $a074e1e2d0f0a665$export$31afe65d91ef6e8(startDate, endDate, state.timeZone, true);
  let { ariaLabel, ariaLabelledBy } = $a074e1e2d0f0a665$export$653eddfc964b0f8a.get(state);
  let labelProps = $313b98861ee5dd6c$export$d6875122194c7b44({
    "aria-label": [
      ariaLabel,
      visibleRangeDescription
    ].filter(Boolean).join(", "),
    "aria-labelledby": ariaLabelledBy
  });
  let dayFormatter = $896ba0a80a8f4d36$export$85fd5fdf27bacc79({
    weekday: props.weekdayStyle || "narrow",
    timeZone: state.timeZone
  });
  let { locale } = $18f2051aff69b9bf$export$43bb16f9c6d9e3f7();
  let weekDays = reactExports.useMemo(() => {
    let weekStart = $14e0f24ef4ac5c92$export$42c81a444fbfb5d4($14e0f24ef4ac5c92$export$d0bdf45af03a6ea3(state.timeZone), locale);
    return [
      ...new Array(7).keys()
    ].map((index2) => {
      let date = weekStart.add({
        days: index2
      });
      let dateDay = date.toDate(state.timeZone);
      return dayFormatter.format(dateDay);
    });
  }, [
    locale,
    state.timeZone,
    dayFormatter
  ]);
  return {
    gridProps: $3ef42575df84b30b$export$9d1611c77c2fe928(labelProps, {
      role: "grid",
      "aria-readonly": state.isReadOnly || null,
      "aria-disabled": state.isDisabled || null,
      "aria-multiselectable": "highlightedRange" in state || void 0,
      onKeyDown,
      onFocus: () => state.setFocused(true),
      onBlur: () => state.setFocused(false)
    }),
    headerProps: {
      // Column headers are hidden to screen readers to make navigating with a touch screen reader easier.
      // The day names are already included in the label of each cell, so there's no need to announce them twice.
      "aria-hidden": true
    },
    weekDays
  };
}
function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}
function $36a0ac60f04457c5$export$136073280381448e(props, state, ref) {
  let { date, isDisabled } = props;
  let { errorMessageId, selectedDateDescription } = $a074e1e2d0f0a665$export$653eddfc964b0f8a.get(state);
  let stringFormatter = $fca6afa0e843324b$export$f12b703ca79dfbb1($parcel$interopDefault($3904726b442bd9b2$exports), "@react-aria/calendar");
  let dateFormatter = $896ba0a80a8f4d36$export$85fd5fdf27bacc79({
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
    era: $a074e1e2d0f0a665$export$134cbb7fb09a9522(date),
    timeZone: state.timeZone
  });
  let isSelected = state.isSelected(date);
  let isFocused = state.isCellFocused(date);
  isDisabled = isDisabled || state.isCellDisabled(date);
  let isUnavailable = state.isCellUnavailable(date);
  let isSelectable = !isDisabled && !isUnavailable;
  let isInvalid = state.isValueInvalid && ("highlightedRange" in state ? !state.anchorDate && state.highlightedRange && date.compare(state.highlightedRange.start) >= 0 && date.compare(state.highlightedRange.end) <= 0 : state.value && $14e0f24ef4ac5c92$export$ea39ec197993aef0(state.value, date));
  if (isInvalid) isSelected = true;
  date = $5a387cc49350e6db$export$722debc0e56fea39(date, $14e0f24ef4ac5c92$export$91b62ebf2ba703ee);
  let nativeDate = reactExports.useMemo(() => date.toDate(state.timeZone), [
    date,
    state.timeZone
  ]);
  let isDateToday = $14e0f24ef4ac5c92$export$629b0a497aa65267(date, state.timeZone);
  let label = reactExports.useMemo(() => {
    let label2 = "";
    if ("highlightedRange" in state && state.value && !state.anchorDate && ($14e0f24ef4ac5c92$export$ea39ec197993aef0(date, state.value.start) || $14e0f24ef4ac5c92$export$ea39ec197993aef0(date, state.value.end))) label2 = selectedDateDescription + ", ";
    label2 += dateFormatter.format(nativeDate);
    if (isDateToday)
      label2 = stringFormatter.format(isSelected ? "todayDateSelected" : "todayDate", {
        date: label2
      });
    else if (isSelected)
      label2 = stringFormatter.format("dateSelected", {
        date: label2
      });
    if (state.minValue && $14e0f24ef4ac5c92$export$ea39ec197993aef0(date, state.minValue)) label2 += ", " + stringFormatter.format("minimumDate");
    else if (state.maxValue && $14e0f24ef4ac5c92$export$ea39ec197993aef0(date, state.maxValue)) label2 += ", " + stringFormatter.format("maximumDate");
    return label2;
  }, [
    dateFormatter,
    nativeDate,
    stringFormatter,
    isSelected,
    isDateToday,
    date,
    state,
    selectedDateDescription
  ]);
  let rangeSelectionPrompt = "";
  if ("anchorDate" in state && isFocused && !state.isReadOnly && isSelectable) {
    if (state.anchorDate) rangeSelectionPrompt = stringFormatter.format("finishRangeSelectionPrompt");
    else rangeSelectionPrompt = stringFormatter.format("startRangeSelectionPrompt");
  }
  let descriptionProps = $ef06256079686ba0$export$f8aeda7b10753fa1(rangeSelectionPrompt);
  let isAnchorPressed = reactExports.useRef(false);
  let isRangeBoundaryPressed = reactExports.useRef(false);
  let touchDragTimerRef = reactExports.useRef(null);
  let { pressProps, isPressed } = $f6c31cce2adf654f$export$45712eceda6fad21({
    // When dragging to select a range, we don't want dragging over the original anchor
    // again to trigger onPressStart. Cancel presses immediately when the pointer exits.
    shouldCancelOnPointerExit: "anchorDate" in state && !!state.anchorDate,
    preventFocusOnPress: true,
    isDisabled: !isSelectable || state.isReadOnly,
    onPressStart(e) {
      if (state.isReadOnly) {
        state.setFocusedDate(date);
        return;
      }
      if ("highlightedRange" in state && !state.anchorDate && (e.pointerType === "mouse" || e.pointerType === "touch")) {
        if (state.highlightedRange && !isInvalid) {
          if ($14e0f24ef4ac5c92$export$ea39ec197993aef0(date, state.highlightedRange.start)) {
            state.setAnchorDate(state.highlightedRange.end);
            state.setFocusedDate(date);
            state.setDragging(true);
            isRangeBoundaryPressed.current = true;
            return;
          } else if ($14e0f24ef4ac5c92$export$ea39ec197993aef0(date, state.highlightedRange.end)) {
            state.setAnchorDate(state.highlightedRange.start);
            state.setFocusedDate(date);
            state.setDragging(true);
            isRangeBoundaryPressed.current = true;
            return;
          }
        }
        let startDragging = () => {
          state.setDragging(true);
          touchDragTimerRef.current = null;
          state.selectDate(date);
          state.setFocusedDate(date);
          isAnchorPressed.current = true;
        };
        if (e.pointerType === "touch") touchDragTimerRef.current = setTimeout(startDragging, 200);
        else startDragging();
      }
    },
    onPressEnd() {
      isRangeBoundaryPressed.current = false;
      isAnchorPressed.current = false;
      clearTimeout(touchDragTimerRef.current);
      touchDragTimerRef.current = null;
    },
    onPress() {
      if (!("anchorDate" in state) && !state.isReadOnly) {
        state.selectDate(date);
        state.setFocusedDate(date);
      }
    },
    onPressUp(e) {
      if (state.isReadOnly) return;
      if ("anchorDate" in state && touchDragTimerRef.current) {
        state.selectDate(date);
        state.setFocusedDate(date);
      }
      if ("anchorDate" in state) {
        if (isRangeBoundaryPressed.current)
          state.setAnchorDate(date);
        else if (state.anchorDate && !isAnchorPressed.current) {
          state.selectDate(date);
          state.setFocusedDate(date);
        } else if (e.pointerType === "keyboard" && !state.anchorDate) {
          state.selectDate(date);
          let nextDay = date.add({
            days: 1
          });
          if (state.isInvalid(nextDay)) nextDay = date.subtract({
            days: 1
          });
          if (!state.isInvalid(nextDay)) state.setFocusedDate(nextDay);
        } else if (e.pointerType === "virtual") {
          state.selectDate(date);
          state.setFocusedDate(date);
        }
      }
    }
  });
  let tabIndex = null;
  if (!isDisabled) tabIndex = $14e0f24ef4ac5c92$export$ea39ec197993aef0(date, state.focusedDate) ? 0 : -1;
  reactExports.useEffect(() => {
    if (isFocused && ref.current) {
      $7215afc6de606d6b$export$de79e2c695e052f3(ref.current);
      if ($507fabe10e71c6fb$export$630ff653c5ada6a9() !== "pointer" && document.activeElement === ref.current) $2f04cbc44ee30ce0$export$c826860796309d1b(ref.current, {
        containingElement: $62d8ded9296f3872$export$cfa2225e87938781(ref.current)
      });
    }
  }, [
    isFocused,
    ref
  ]);
  let cellDateFormatter = $896ba0a80a8f4d36$export$85fd5fdf27bacc79({
    day: "numeric",
    timeZone: state.timeZone,
    calendar: date.calendar.identifier
  });
  let formattedDate = reactExports.useMemo(() => cellDateFormatter.formatToParts(nativeDate).find((part) => part.type === "day").value, [
    cellDateFormatter,
    nativeDate
  ]);
  return {
    cellProps: {
      role: "gridcell",
      "aria-disabled": !isSelectable || null,
      "aria-selected": isSelected || null,
      "aria-invalid": isInvalid || null
    },
    buttonProps: $3ef42575df84b30b$export$9d1611c77c2fe928(pressProps, {
      onFocus() {
        if (!isDisabled) state.setFocusedDate(date);
      },
      tabIndex,
      role: "button",
      "aria-disabled": !isSelectable || null,
      "aria-label": label,
      "aria-invalid": isInvalid || null,
      "aria-describedby": [
        isInvalid ? errorMessageId : null,
        descriptionProps["aria-describedby"]
      ].filter(Boolean).join(" ") || void 0,
      onPointerEnter(e) {
        if ("highlightDate" in state && (e.pointerType !== "touch" || state.isDragging) && isSelectable) state.highlightDate(date);
      },
      onPointerDown(e) {
        if ("releasePointerCapture" in e.target) e.target.releasePointerCapture(e.pointerId);
      },
      onContextMenu(e) {
        e.preventDefault();
      }
    }),
    isPressed,
    isFocused,
    isSelected,
    isDisabled,
    isUnavailable,
    isOutsideVisibleRange: date.compare(state.visibleRange.start) < 0 || date.compare(state.visibleRange.end) > 0,
    isInvalid,
    formattedDate
  };
}
function $f62d864046160412$export$eac50920cf2fd59a(date, minValue, maxValue) {
  return minValue != null && date.compare(minValue) < 0 || maxValue != null && date.compare(maxValue) > 0;
}
function $f62d864046160412$export$f4a51ff076cc9a09(date, duration, locale, minValue, maxValue) {
  let halfDuration = {};
  for (let key in duration) {
    halfDuration[key] = Math.floor(duration[key] / 2);
    if (halfDuration[key] > 0 && duration[key] % 2 === 0) halfDuration[key]--;
  }
  let aligned = $f62d864046160412$export$144a00ba6044eb9(date, duration, locale).subtract(halfDuration);
  return $f62d864046160412$export$5bb865b12696a77d(date, aligned, duration, locale, minValue, maxValue);
}
function $f62d864046160412$export$144a00ba6044eb9(date, duration, locale, minValue, maxValue) {
  let aligned = date;
  if (duration.years) aligned = $14e0f24ef4ac5c92$export$f91e89d3d0406102(date);
  else if (duration.months) aligned = $14e0f24ef4ac5c92$export$a5a3b454ada2268e(date);
  else if (duration.weeks) aligned = $14e0f24ef4ac5c92$export$42c81a444fbfb5d4(date, locale);
  return $f62d864046160412$export$5bb865b12696a77d(date, aligned, duration, locale, minValue, maxValue);
}
function $f62d864046160412$export$530edbfc915b2b04(date, duration, locale, minValue, maxValue) {
  let d = {
    ...duration
  };
  if (duration.days) d.days--;
  else if (duration.weeks) d.weeks--;
  else if (duration.months) d.months--;
  else if (duration.years) d.years--;
  let aligned = $f62d864046160412$export$144a00ba6044eb9(date, duration, locale).subtract(d);
  return $f62d864046160412$export$5bb865b12696a77d(date, aligned, duration, locale, minValue, maxValue);
}
function $f62d864046160412$export$5bb865b12696a77d(date, aligned, duration, locale, minValue, maxValue) {
  if (minValue && date.compare(minValue) >= 0) aligned = $14e0f24ef4ac5c92$export$a75f2bff57811055(aligned, $f62d864046160412$export$144a00ba6044eb9($11d87f3f76e88657$export$93522d1a439f3617(minValue), duration, locale));
  if (maxValue && date.compare(maxValue) <= 0) aligned = $14e0f24ef4ac5c92$export$5c333a116e949cdd(aligned, $f62d864046160412$export$530edbfc915b2b04($11d87f3f76e88657$export$93522d1a439f3617(maxValue), duration, locale));
  return aligned;
}
function $f62d864046160412$export$4f5203c0d889109e(date, minValue, maxValue) {
  if (minValue) date = $14e0f24ef4ac5c92$export$a75f2bff57811055(date, $11d87f3f76e88657$export$93522d1a439f3617(minValue));
  if (maxValue) date = $14e0f24ef4ac5c92$export$5c333a116e949cdd(date, $11d87f3f76e88657$export$93522d1a439f3617(maxValue));
  return date;
}
function $f62d864046160412$export$a1d3911297b952d7(date, minValue, isDateUnavailable) {
  if (!isDateUnavailable) return date;
  while (date.compare(minValue) >= 0 && isDateUnavailable(date)) date = date.subtract({
    days: 1
  });
  if (date.compare(minValue) >= 0) return date;
}
function $131cf43a05231e1e$export$6d095e787d2b5e1f(props) {
  let defaultFormatter = reactExports.useMemo(() => new $fb18d541ea1ad717$export$ad991b66133851cf(props.locale), [
    props.locale
  ]);
  let resolvedOptions = reactExports.useMemo(() => defaultFormatter.resolvedOptions(), [
    defaultFormatter
  ]);
  let { locale, createCalendar, visibleDuration = {
    months: 1
  }, minValue, maxValue, selectionAlignment, isDateUnavailable, pageBehavior = "visible" } = props;
  let calendar2 = reactExports.useMemo(() => createCalendar(resolvedOptions.calendar), [
    createCalendar,
    resolvedOptions.calendar
  ]);
  let [value, setControlledValue] = $458b0a5536c1a7cf$export$40bfa8c7b0832715(props.value, props.defaultValue, props.onChange);
  let calendarDateValue = reactExports.useMemo(() => value ? $11d87f3f76e88657$export$b4a036af3fc0b032($11d87f3f76e88657$export$93522d1a439f3617(value), calendar2) : null, [
    value,
    calendar2
  ]);
  let timeZone = reactExports.useMemo(() => value && "timeZone" in value ? value.timeZone : resolvedOptions.timeZone, [
    value,
    resolvedOptions.timeZone
  ]);
  let focusedCalendarDate = reactExports.useMemo(() => props.focusedValue ? $f62d864046160412$export$4f5203c0d889109e($11d87f3f76e88657$export$b4a036af3fc0b032($11d87f3f76e88657$export$93522d1a439f3617(props.focusedValue), calendar2), minValue, maxValue) : void 0, [
    props.focusedValue,
    calendar2,
    minValue,
    maxValue
  ]);
  let defaultFocusedCalendarDate = reactExports.useMemo(() => $f62d864046160412$export$4f5203c0d889109e(props.defaultFocusedValue ? $11d87f3f76e88657$export$b4a036af3fc0b032($11d87f3f76e88657$export$93522d1a439f3617(props.defaultFocusedValue), calendar2) : calendarDateValue || $11d87f3f76e88657$export$b4a036af3fc0b032($14e0f24ef4ac5c92$export$d0bdf45af03a6ea3(timeZone), calendar2), minValue, maxValue), [
    props.defaultFocusedValue,
    calendarDateValue,
    timeZone,
    calendar2,
    minValue,
    maxValue
  ]);
  let [focusedDate, setFocusedDate] = $458b0a5536c1a7cf$export$40bfa8c7b0832715(focusedCalendarDate, defaultFocusedCalendarDate, props.onFocusChange);
  let [startDate, setStartDate] = reactExports.useState(() => {
    switch (selectionAlignment) {
      case "start":
        return $f62d864046160412$export$144a00ba6044eb9(focusedDate, visibleDuration, locale, minValue, maxValue);
      case "end":
        return $f62d864046160412$export$530edbfc915b2b04(focusedDate, visibleDuration, locale, minValue, maxValue);
      case "center":
      default:
        return $f62d864046160412$export$f4a51ff076cc9a09(focusedDate, visibleDuration, locale, minValue, maxValue);
    }
  });
  let [isFocused, setFocused] = reactExports.useState(props.autoFocus || false);
  let endDate = reactExports.useMemo(() => {
    let duration = {
      ...visibleDuration
    };
    if (duration.days) duration.days--;
    else duration.days = -1;
    return startDate.add(duration);
  }, [
    startDate,
    visibleDuration
  ]);
  let [lastCalendarIdentifier, setLastCalendarIdentifier] = reactExports.useState(calendar2.identifier);
  if (calendar2.identifier !== lastCalendarIdentifier) {
    let newFocusedDate = $11d87f3f76e88657$export$b4a036af3fc0b032(focusedDate, calendar2);
    setStartDate($f62d864046160412$export$f4a51ff076cc9a09(newFocusedDate, visibleDuration, locale, minValue, maxValue));
    setFocusedDate(newFocusedDate);
    setLastCalendarIdentifier(calendar2.identifier);
  }
  if ($f62d864046160412$export$eac50920cf2fd59a(focusedDate, minValue, maxValue))
    setFocusedDate($f62d864046160412$export$4f5203c0d889109e(focusedDate, minValue, maxValue));
  else if (focusedDate.compare(startDate) < 0) setStartDate($f62d864046160412$export$530edbfc915b2b04(focusedDate, visibleDuration, locale, minValue, maxValue));
  else if (focusedDate.compare(endDate) > 0) setStartDate($f62d864046160412$export$144a00ba6044eb9(focusedDate, visibleDuration, locale, minValue, maxValue));
  function focusCell(date) {
    date = $f62d864046160412$export$4f5203c0d889109e(date, minValue, maxValue);
    setFocusedDate(date);
  }
  function setValue(newValue) {
    if (!props.isDisabled && !props.isReadOnly) {
      if (newValue === null) {
        setControlledValue(null);
        return;
      }
      newValue = $f62d864046160412$export$4f5203c0d889109e(newValue, minValue, maxValue);
      newValue = $f62d864046160412$export$a1d3911297b952d7(newValue, startDate, isDateUnavailable);
      if (!newValue) return;
      newValue = $11d87f3f76e88657$export$b4a036af3fc0b032(newValue, (value === null || value === void 0 ? void 0 : value.calendar) || new $3b62074eb05584b2$export$80ee6245ec4f29ec());
      if (value && "hour" in value) setControlledValue(value.set(newValue));
      else setControlledValue(newValue);
    }
  }
  let isUnavailable = reactExports.useMemo(() => {
    if (!calendarDateValue) return false;
    if (isDateUnavailable && isDateUnavailable(calendarDateValue)) return true;
    return $f62d864046160412$export$eac50920cf2fd59a(calendarDateValue, minValue, maxValue);
  }, [
    calendarDateValue,
    isDateUnavailable,
    minValue,
    maxValue
  ]);
  let isValueInvalid = props.isInvalid || props.validationState === "invalid" || isUnavailable;
  let validationState = isValueInvalid ? "invalid" : null;
  let pageDuration = reactExports.useMemo(() => {
    if (pageBehavior === "visible") return visibleDuration;
    return $131cf43a05231e1e$var$unitDuration(visibleDuration);
  }, [
    pageBehavior,
    visibleDuration
  ]);
  return {
    isDisabled: props.isDisabled,
    isReadOnly: props.isReadOnly,
    value: calendarDateValue,
    setValue,
    visibleRange: {
      start: startDate,
      end: endDate
    },
    minValue,
    maxValue,
    focusedDate,
    timeZone,
    validationState,
    isValueInvalid,
    setFocusedDate(date) {
      focusCell(date);
      setFocused(true);
    },
    focusNextDay() {
      focusCell(focusedDate.add({
        days: 1
      }));
    },
    focusPreviousDay() {
      focusCell(focusedDate.subtract({
        days: 1
      }));
    },
    focusNextRow() {
      if (visibleDuration.days) this.focusNextPage();
      else if (visibleDuration.weeks || visibleDuration.months || visibleDuration.years) focusCell(focusedDate.add({
        weeks: 1
      }));
    },
    focusPreviousRow() {
      if (visibleDuration.days) this.focusPreviousPage();
      else if (visibleDuration.weeks || visibleDuration.months || visibleDuration.years) focusCell(focusedDate.subtract({
        weeks: 1
      }));
    },
    focusNextPage() {
      let start = startDate.add(pageDuration);
      setFocusedDate($f62d864046160412$export$4f5203c0d889109e(focusedDate.add(pageDuration), minValue, maxValue));
      setStartDate($f62d864046160412$export$144a00ba6044eb9($f62d864046160412$export$5bb865b12696a77d(focusedDate, start, pageDuration, locale, minValue, maxValue), pageDuration, locale));
    },
    focusPreviousPage() {
      let start = startDate.subtract(pageDuration);
      setFocusedDate($f62d864046160412$export$4f5203c0d889109e(focusedDate.subtract(pageDuration), minValue, maxValue));
      setStartDate($f62d864046160412$export$144a00ba6044eb9($f62d864046160412$export$5bb865b12696a77d(focusedDate, start, pageDuration, locale, minValue, maxValue), pageDuration, locale));
    },
    focusSectionStart() {
      if (visibleDuration.days) focusCell(startDate);
      else if (visibleDuration.weeks) focusCell($14e0f24ef4ac5c92$export$42c81a444fbfb5d4(focusedDate, locale));
      else if (visibleDuration.months || visibleDuration.years) focusCell($14e0f24ef4ac5c92$export$a5a3b454ada2268e(focusedDate));
    },
    focusSectionEnd() {
      if (visibleDuration.days) focusCell(endDate);
      else if (visibleDuration.weeks) focusCell($14e0f24ef4ac5c92$export$ef8b6d9133084f4e(focusedDate, locale));
      else if (visibleDuration.months || visibleDuration.years) focusCell($14e0f24ef4ac5c92$export$a2258d9c4118825c(focusedDate));
    },
    focusNextSection(larger) {
      if (!larger && !visibleDuration.days) {
        focusCell(focusedDate.add($131cf43a05231e1e$var$unitDuration(visibleDuration)));
        return;
      }
      if (visibleDuration.days) this.focusNextPage();
      else if (visibleDuration.weeks) focusCell(focusedDate.add({
        months: 1
      }));
      else if (visibleDuration.months || visibleDuration.years) focusCell(focusedDate.add({
        years: 1
      }));
    },
    focusPreviousSection(larger) {
      if (!larger && !visibleDuration.days) {
        focusCell(focusedDate.subtract($131cf43a05231e1e$var$unitDuration(visibleDuration)));
        return;
      }
      if (visibleDuration.days) this.focusPreviousPage();
      else if (visibleDuration.weeks) focusCell(focusedDate.subtract({
        months: 1
      }));
      else if (visibleDuration.months || visibleDuration.years) focusCell(focusedDate.subtract({
        years: 1
      }));
    },
    selectFocusedDate() {
      setValue(focusedDate);
    },
    selectDate(date) {
      setValue(date);
    },
    isFocused,
    setFocused,
    isInvalid(date) {
      return $f62d864046160412$export$eac50920cf2fd59a(date, minValue, maxValue);
    },
    isSelected(date) {
      return calendarDateValue != null && $14e0f24ef4ac5c92$export$ea39ec197993aef0(date, calendarDateValue) && !this.isCellDisabled(date) && !this.isCellUnavailable(date);
    },
    isCellFocused(date) {
      return isFocused && focusedDate && $14e0f24ef4ac5c92$export$ea39ec197993aef0(date, focusedDate);
    },
    isCellDisabled(date) {
      return props.isDisabled || date.compare(startDate) < 0 || date.compare(endDate) > 0 || this.isInvalid(date, minValue, maxValue);
    },
    isCellUnavailable(date) {
      return props.isDateUnavailable && props.isDateUnavailable(date);
    },
    isPreviousVisibleRangeInvalid() {
      let prev = startDate.subtract({
        days: 1
      });
      return $14e0f24ef4ac5c92$export$ea39ec197993aef0(prev, startDate) || this.isInvalid(prev, minValue, maxValue);
    },
    isNextVisibleRangeInvalid() {
      let next = endDate.add({
        days: 1
      });
      return $14e0f24ef4ac5c92$export$ea39ec197993aef0(next, endDate) || this.isInvalid(next, minValue, maxValue);
    },
    getDatesInWeek(weekIndex, from = startDate) {
      let date = from.add({
        weeks: weekIndex
      });
      let dates = [];
      date = $14e0f24ef4ac5c92$export$42c81a444fbfb5d4(date, locale);
      let dayOfWeek = $14e0f24ef4ac5c92$export$2061056d06d7cdf7(date, locale);
      for (let i = 0; i < dayOfWeek; i++) dates.push(null);
      while (dates.length < 7) {
        dates.push(date);
        let nextDate = date.add({
          days: 1
        });
        if ($14e0f24ef4ac5c92$export$ea39ec197993aef0(date, nextDate)) break;
        date = nextDate;
      }
      while (dates.length < 7) dates.push(null);
      return dates;
    }
  };
}
function $131cf43a05231e1e$var$unitDuration(duration) {
  let unit = {
    ...duration
  };
  for (let key in duration) unit[key] = 1;
  return unit;
}
function useCalendar({
  buttonPickerProps: buttonPickerPropsProp,
  className,
  ...originalProps
}) {
  const {
    Component,
    slots,
    children,
    domRef,
    locale,
    minValue,
    maxValue,
    showHelper,
    weekdayStyle,
    visibleDuration,
    baseProps,
    disableAnimation,
    shouldFilterDOMProps,
    isHeaderExpanded,
    visibleMonths,
    createCalendar: createCalendarProp,
    showMonthAndYearPickers,
    getPrevButtonProps,
    getNextButtonProps,
    getErrorMessageProps,
    setIsHeaderExpanded,
    topContent,
    bottomContent,
    errorMessage,
    classNames,
    otherProps
  } = useCalendarBase(originalProps);
  const headerRef = reactExports.useRef(null);
  const state = $131cf43a05231e1e$export$6d095e787d2b5e1f({
    ...originalProps,
    locale,
    minValue,
    maxValue,
    visibleDuration,
    createCalendar: !createCalendarProp || typeof createCalendarProp !== "function" ? $64244302c3013299$export$dd0bbc9b26defe37 : createCalendarProp
  });
  const { title, calendarProps, prevButtonProps, nextButtonProps, errorMessageProps } = $9942cad8a072a530$export$3ee915f8151bd4f1(originalProps, state);
  const baseStyles = clsx(classNames == null ? void 0 : classNames.base, className);
  const buttonPickerProps = {
    ...$3ef42575df84b30b$export$9d1611c77c2fe928(buttonPickerPropsProp, { isDisabled: originalProps.isDisabled }),
    onPress: $ff5963eb1fccf552$export$e08e3b67e392101e(buttonPickerPropsProp == null ? void 0 : buttonPickerPropsProp.onPress, () => setIsHeaderExpanded(!isHeaderExpanded))
  };
  const getBaseCalendarProps = (props = {}) => {
    return {
      ...baseProps,
      Component,
      showHelper,
      topContent,
      bottomContent,
      buttonPickerProps,
      calendarRef: domRef,
      calendarProps,
      prevButtonProps: getPrevButtonProps(prevButtonProps),
      nextButtonProps: getNextButtonProps(nextButtonProps),
      errorMessageProps: getErrorMessageProps(errorMessageProps),
      className: slots.base({ class: baseStyles }),
      errorMessage,
      ...filterDOMProps(otherProps, {
        enabled: shouldFilterDOMProps
      }),
      ...props
    };
  };
  const context = reactExports.useMemo(
    () => ({
      state,
      slots,
      headerRef,
      weekdayStyle,
      isHeaderExpanded,
      setIsHeaderExpanded,
      visibleMonths,
      classNames,
      showMonthAndYearPickers,
      disableAnimation
    }),
    [
      state,
      slots,
      classNames,
      weekdayStyle,
      isHeaderExpanded,
      setIsHeaderExpanded,
      visibleMonths,
      disableAnimation,
      showMonthAndYearPickers
    ]
  );
  return {
    Component,
    children,
    domRef,
    context,
    state,
    slots,
    title,
    classNames,
    getBaseCalendarProps
  };
}
var ChevronLeftIcon = (props) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  "svg",
  {
    "aria-hidden": "true",
    fill: "none",
    focusable: "false",
    height: "1em",
    role: "presentation",
    viewBox: "0 0 16 16",
    width: "1em",
    ...props,
    children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      "path",
      {
        d: "M10 3.33334L6 8.00001L10 12.6667",
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "1.5"
      }
    )
  }
);
var ChevronRightIcon = (props) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  "svg",
  {
    "aria-hidden": "true",
    fill: "none",
    focusable: "false",
    height: "1em",
    role: "presentation",
    viewBox: "0 0 16 16",
    width: "1em",
    ...props,
    children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      "path",
      {
        d: "M6 3.33334L10 8.00001L6 12.6667",
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "1.5"
      }
    )
  }
);
var ChevronDownIcon = (props) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  "svg",
  {
    "aria-hidden": "true",
    fill: "none",
    focusable: "false",
    height: "1em",
    role: "presentation",
    viewBox: "0 0 24 24",
    width: "1em",
    ...props,
    children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      "path",
      {
        d: "M19 9L12 15L5 9",
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "1.5"
      }
    )
  }
);
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
function memoize(fn) {
  var cache = {};
  return function(arg) {
    if (cache[arg] === void 0)
      cache[arg] = fn(arg);
    return cache[arg];
  };
}
var memoize_esm_default;
var init_memoize_esm = __esm({
  "../../../node_modules/.pnpm/@emotion+memoize@0.7.4/node_modules/@emotion/memoize/dist/memoize.esm.js"() {
    memoize_esm_default = memoize;
  }
});
var is_prop_valid_esm_exports = {};
__export(is_prop_valid_esm_exports, {
  default: () => is_prop_valid_esm_default
});
var reactPropsRegex, index, is_prop_valid_esm_default;
var init_is_prop_valid_esm = __esm({
  "../../../node_modules/.pnpm/@emotion+is-prop-valid@0.8.8/node_modules/@emotion/is-prop-valid/dist/is-prop-valid.esm.js"() {
    init_memoize_esm();
    reactPropsRegex = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|inert|itemProp|itemScope|itemType|itemID|itemRef|on|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/;
    index = memoize_esm_default(
      function(prop) {
        return reactPropsRegex.test(prop) || prop.charCodeAt(0) === 111 && prop.charCodeAt(1) === 110 && prop.charCodeAt(2) < 91;
      }
    );
    is_prop_valid_esm_default = index;
  }
});
var MotionConfigContext = reactExports.createContext({
  transformPagePoint: (p) => p,
  isStatic: false,
  reducedMotion: "never"
});
var MotionContext = reactExports.createContext({});
var PresenceContext = reactExports.createContext(null);
var isBrowser = typeof document !== "undefined";
var useIsomorphicLayoutEffect = isBrowser ? reactExports.useLayoutEffect : reactExports.useEffect;
var LazyContext = reactExports.createContext({ strict: false });
var camelToDash = (str) => str.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
var optimizedAppearDataId = "framerAppearId";
var optimizedAppearDataAttribute = "data-" + camelToDash(optimizedAppearDataId);
function useVisualElement(Component2, visualState, props, createVisualElement) {
  const { visualElement: parent } = reactExports.useContext(MotionContext);
  const lazyContext = reactExports.useContext(LazyContext);
  const presenceContext = reactExports.useContext(PresenceContext);
  const reducedMotionConfig = reactExports.useContext(MotionConfigContext).reducedMotion;
  const visualElementRef = reactExports.useRef();
  createVisualElement = createVisualElement || lazyContext.renderer;
  if (!visualElementRef.current && createVisualElement) {
    visualElementRef.current = createVisualElement(Component2, {
      visualState,
      parent,
      props,
      presenceContext,
      blockInitialAnimation: presenceContext ? presenceContext.initial === false : false,
      reducedMotionConfig
    });
  }
  const visualElement = visualElementRef.current;
  reactExports.useInsertionEffect(() => {
    visualElement && visualElement.update(props, presenceContext);
  });
  const wantsHandoff = reactExports.useRef(Boolean(props[optimizedAppearDataAttribute] && !window.HandoffComplete));
  useIsomorphicLayoutEffect(() => {
    if (!visualElement)
      return;
    visualElement.render();
    if (wantsHandoff.current && visualElement.animationState) {
      visualElement.animationState.animateChanges();
    }
  });
  reactExports.useEffect(() => {
    if (!visualElement)
      return;
    visualElement.updateFeatures();
    if (!wantsHandoff.current && visualElement.animationState) {
      visualElement.animationState.animateChanges();
    }
    if (wantsHandoff.current) {
      wantsHandoff.current = false;
      window.HandoffComplete = true;
    }
  });
  return visualElement;
}
function isRefObject(ref) {
  return ref && typeof ref === "object" && Object.prototype.hasOwnProperty.call(ref, "current");
}
function useMotionRef(visualState, visualElement, externalRef) {
  return reactExports.useCallback(
    (instance) => {
      instance && visualState.mount && visualState.mount(instance);
      if (visualElement) {
        instance ? visualElement.mount(instance) : visualElement.unmount();
      }
      if (externalRef) {
        if (typeof externalRef === "function") {
          externalRef(instance);
        } else if (isRefObject(externalRef)) {
          externalRef.current = instance;
        }
      }
    },
    [visualElement]
  );
}
function isVariantLabel(v) {
  return typeof v === "string" || Array.isArray(v);
}
function isAnimationControls(v) {
  return v !== null && typeof v === "object" && typeof v.start === "function";
}
var variantPriorityOrder = [
  "animate",
  "whileInView",
  "whileFocus",
  "whileHover",
  "whileTap",
  "whileDrag",
  "exit"
];
var variantProps = ["initial", ...variantPriorityOrder];
function isControllingVariants(props) {
  return isAnimationControls(props.animate) || variantProps.some((name) => isVariantLabel(props[name]));
}
function isVariantNode(props) {
  return Boolean(isControllingVariants(props) || props.variants);
}
function getCurrentTreeVariants(props, context) {
  if (isControllingVariants(props)) {
    const { initial, animate } = props;
    return {
      initial: initial === false || isVariantLabel(initial) ? initial : void 0,
      animate: isVariantLabel(animate) ? animate : void 0
    };
  }
  return props.inherit !== false ? context : {};
}
function useCreateMotionContext(props) {
  const { initial, animate } = getCurrentTreeVariants(props, reactExports.useContext(MotionContext));
  return reactExports.useMemo(() => ({ initial, animate }), [variantLabelsAsDependency(initial), variantLabelsAsDependency(animate)]);
}
function variantLabelsAsDependency(prop) {
  return Array.isArray(prop) ? prop.join(" ") : prop;
}
var featureProps = {
  animation: [
    "animate",
    "variants",
    "whileHover",
    "whileTap",
    "exit",
    "whileInView",
    "whileFocus",
    "whileDrag"
  ],
  exit: ["exit"],
  drag: ["drag", "dragControls"],
  focus: ["whileFocus"],
  hover: ["whileHover", "onHoverStart", "onHoverEnd"],
  tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
  pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
  inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
  layout: ["layout", "layoutId"]
};
var featureDefinitions = {};
for (const key in featureProps) {
  featureDefinitions[key] = {
    isEnabled: (props) => featureProps[key].some((name) => !!props[name])
  };
}
function loadFeatures(features) {
  for (const key in features) {
    featureDefinitions[key] = {
      ...featureDefinitions[key],
      ...features[key]
    };
  }
}
var LayoutGroupContext = reactExports.createContext({});
var SwitchLayoutGroupContext = reactExports.createContext({});
var motionComponentSymbol = Symbol.for("motionComponentSymbol");
function createMotionComponent({ preloadedFeatures, createVisualElement, useRender, useVisualState, Component: Component2 }) {
  preloadedFeatures && loadFeatures(preloadedFeatures);
  function MotionComponent(props, externalRef) {
    let MeasureLayout;
    const configAndProps = {
      ...reactExports.useContext(MotionConfigContext),
      ...props,
      layoutId: useLayoutId(props)
    };
    const { isStatic } = configAndProps;
    const context = useCreateMotionContext(props);
    const visualState = useVisualState(props, isStatic);
    if (!isStatic && isBrowser) {
      context.visualElement = useVisualElement(Component2, visualState, configAndProps, createVisualElement);
      const initialLayoutGroupConfig = reactExports.useContext(SwitchLayoutGroupContext);
      const isStrict = reactExports.useContext(LazyContext).strict;
      if (context.visualElement) {
        MeasureLayout = context.visualElement.loadFeatures(
          configAndProps,
          isStrict,
          preloadedFeatures,
          initialLayoutGroupConfig
        );
      }
    }
    return reactExports.createElement(
      MotionContext.Provider,
      { value: context },
      MeasureLayout && context.visualElement ? reactExports.createElement(MeasureLayout, { visualElement: context.visualElement, ...configAndProps }) : null,
      useRender(Component2, props, useMotionRef(visualState, context.visualElement, externalRef), visualState, isStatic, context.visualElement)
    );
  }
  const ForwardRefComponent = reactExports.forwardRef(MotionComponent);
  ForwardRefComponent[motionComponentSymbol] = Component2;
  return ForwardRefComponent;
}
function useLayoutId({ layoutId }) {
  const layoutGroupId = reactExports.useContext(LayoutGroupContext).id;
  return layoutGroupId && layoutId !== void 0 ? layoutGroupId + "-" + layoutId : layoutId;
}
function createMotionProxy(createConfig) {
  function custom(Component2, customMotionComponentConfig = {}) {
    return createMotionComponent(createConfig(Component2, customMotionComponentConfig));
  }
  if (typeof Proxy === "undefined") {
    return custom;
  }
  const componentCache = /* @__PURE__ */ new Map();
  return new Proxy(custom, {
    get: (_target, key) => {
      if (!componentCache.has(key)) {
        componentCache.set(key, custom(key));
      }
      return componentCache.get(key);
    }
  });
}
var lowercaseSVGElements = [
  "animate",
  "circle",
  "defs",
  "desc",
  "ellipse",
  "g",
  "image",
  "line",
  "filter",
  "marker",
  "mask",
  "metadata",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "rect",
  "stop",
  "switch",
  "symbol",
  "svg",
  "text",
  "tspan",
  "use",
  "view"
];
function isSVGComponent(Component2) {
  if (typeof Component2 !== "string" || Component2.includes("-")) {
    return false;
  } else if (lowercaseSVGElements.indexOf(Component2) > -1 || /[A-Z]/.test(Component2)) {
    return true;
  }
  return false;
}
var scaleCorrectors = {};
var transformPropOrder = [
  "transformPerspective",
  "x",
  "y",
  "z",
  "translateX",
  "translateY",
  "translateZ",
  "scale",
  "scaleX",
  "scaleY",
  "rotate",
  "rotateX",
  "rotateY",
  "rotateZ",
  "skew",
  "skewX",
  "skewY"
];
var transformProps = new Set(transformPropOrder);
function isForcedMotionValue(key, { layout, layoutId }) {
  return transformProps.has(key) || key.startsWith("origin") || (layout || layoutId !== void 0) && (!!scaleCorrectors[key] || key === "opacity");
}
var isMotionValue = (value) => Boolean(value && value.getVelocity);
var translateAlias = {
  x: "translateX",
  y: "translateY",
  z: "translateZ",
  transformPerspective: "perspective"
};
var numTransforms = transformPropOrder.length;
function buildTransform(transform, { enableHardwareAcceleration = true, allowTransformNone = true }, transformIsDefault, transformTemplate) {
  let transformString = "";
  for (let i = 0; i < numTransforms; i++) {
    const key = transformPropOrder[i];
    if (transform[key] !== void 0) {
      const transformName = translateAlias[key] || key;
      transformString += `${transformName}(${transform[key]}) `;
    }
  }
  if (enableHardwareAcceleration && !transform.z) {
    transformString += "translateZ(0)";
  }
  transformString = transformString.trim();
  if (transformTemplate) {
    transformString = transformTemplate(transform, transformIsDefault ? "" : transformString);
  } else if (allowTransformNone && transformIsDefault) {
    transformString = "none";
  }
  return transformString;
}
var checkStringStartsWith = (token) => (key) => typeof key === "string" && key.startsWith(token);
var isCSSVariableName = checkStringStartsWith("--");
var isCSSVariableToken = checkStringStartsWith("var(--");
var cssVariableRegex = /var\s*\(\s*--[\w-]+(\s*,\s*(?:(?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)+)?\s*\)/g;
var getValueAsType = (value, type) => {
  return type && typeof value === "number" ? type.transform(value) : value;
};
var clamp = (min, max, v) => Math.min(Math.max(v, min), max);
var number = {
  test: (v) => typeof v === "number",
  parse: parseFloat,
  transform: (v) => v
};
var alpha = {
  ...number,
  transform: (v) => clamp(0, 1, v)
};
var scale = {
  ...number,
  default: 1
};
var sanitize = (v) => Math.round(v * 1e5) / 1e5;
var floatRegex = /(-)?([\d]*\.?[\d])+/g;
var colorRegex = /(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi;
var singleColorRegex = /^(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;
function isString(v) {
  return typeof v === "string";
}
var createUnitType = (unit) => ({
  test: (v) => isString(v) && v.endsWith(unit) && v.split(" ").length === 1,
  parse: parseFloat,
  transform: (v) => `${v}${unit}`
});
var degrees = createUnitType("deg");
var percent = createUnitType("%");
var px = createUnitType("px");
var vh = createUnitType("vh");
var vw = createUnitType("vw");
var progressPercentage = {
  ...percent,
  parse: (v) => percent.parse(v) / 100,
  transform: (v) => percent.transform(v * 100)
};
var int = {
  ...number,
  transform: Math.round
};
var numberValueTypes = {
  borderWidth: px,
  borderTopWidth: px,
  borderRightWidth: px,
  borderBottomWidth: px,
  borderLeftWidth: px,
  borderRadius: px,
  radius: px,
  borderTopLeftRadius: px,
  borderTopRightRadius: px,
  borderBottomRightRadius: px,
  borderBottomLeftRadius: px,
  width: px,
  maxWidth: px,
  height: px,
  maxHeight: px,
  size: px,
  top: px,
  right: px,
  bottom: px,
  left: px,
  padding: px,
  paddingTop: px,
  paddingRight: px,
  paddingBottom: px,
  paddingLeft: px,
  margin: px,
  marginTop: px,
  marginRight: px,
  marginBottom: px,
  marginLeft: px,
  rotate: degrees,
  rotateX: degrees,
  rotateY: degrees,
  rotateZ: degrees,
  scale,
  scaleX: scale,
  scaleY: scale,
  scaleZ: scale,
  skew: degrees,
  skewX: degrees,
  skewY: degrees,
  distance: px,
  translateX: px,
  translateY: px,
  translateZ: px,
  x: px,
  y: px,
  z: px,
  perspective: px,
  transformPerspective: px,
  opacity: alpha,
  originX: progressPercentage,
  originY: progressPercentage,
  originZ: px,
  zIndex: int,
  fillOpacity: alpha,
  strokeOpacity: alpha,
  numOctaves: int
};
function buildHTMLStyles(state, latestValues, options, transformTemplate) {
  const { style, vars, transform, transformOrigin } = state;
  let hasTransform = false;
  let hasTransformOrigin = false;
  let transformIsNone = true;
  for (const key in latestValues) {
    const value = latestValues[key];
    if (isCSSVariableName(key)) {
      vars[key] = value;
      continue;
    }
    const valueType = numberValueTypes[key];
    const valueAsType = getValueAsType(value, valueType);
    if (transformProps.has(key)) {
      hasTransform = true;
      transform[key] = valueAsType;
      if (!transformIsNone)
        continue;
      if (value !== (valueType.default || 0))
        transformIsNone = false;
    } else if (key.startsWith("origin")) {
      hasTransformOrigin = true;
      transformOrigin[key] = valueAsType;
    } else {
      style[key] = valueAsType;
    }
  }
  if (!latestValues.transform) {
    if (hasTransform || transformTemplate) {
      style.transform = buildTransform(state.transform, options, transformIsNone, transformTemplate);
    } else if (style.transform) {
      style.transform = "none";
    }
  }
  if (hasTransformOrigin) {
    const { originX = "50%", originY = "50%", originZ = 0 } = transformOrigin;
    style.transformOrigin = `${originX} ${originY} ${originZ}`;
  }
}
var createHtmlRenderState = () => ({
  style: {},
  transform: {},
  transformOrigin: {},
  vars: {}
});
function copyRawValuesOnly(target, source, props) {
  for (const key in source) {
    if (!isMotionValue(source[key]) && !isForcedMotionValue(key, props)) {
      target[key] = source[key];
    }
  }
}
function useInitialMotionValues({ transformTemplate }, visualState, isStatic) {
  return reactExports.useMemo(() => {
    const state = createHtmlRenderState();
    buildHTMLStyles(state, visualState, { enableHardwareAcceleration: !isStatic }, transformTemplate);
    return Object.assign({}, state.vars, state.style);
  }, [visualState]);
}
function useStyle(props, visualState, isStatic) {
  const styleProp = props.style || {};
  const style = {};
  copyRawValuesOnly(style, styleProp, props);
  Object.assign(style, useInitialMotionValues(props, visualState, isStatic));
  return props.transformValues ? props.transformValues(style) : style;
}
function useHTMLProps(props, visualState, isStatic) {
  const htmlProps = {};
  const style = useStyle(props, visualState, isStatic);
  if (props.drag && props.dragListener !== false) {
    htmlProps.draggable = false;
    style.userSelect = style.WebkitUserSelect = style.WebkitTouchCallout = "none";
    style.touchAction = props.drag === true ? "none" : `pan-${props.drag === "x" ? "y" : "x"}`;
  }
  if (props.tabIndex === void 0 && (props.onTap || props.onTapStart || props.whileTap)) {
    htmlProps.tabIndex = 0;
  }
  htmlProps.style = style;
  return htmlProps;
}
var validMotionProps = /* @__PURE__ */ new Set([
  "animate",
  "exit",
  "variants",
  "initial",
  "style",
  "values",
  "variants",
  "transition",
  "transformTemplate",
  "transformValues",
  "custom",
  "inherit",
  "onBeforeLayoutMeasure",
  "onAnimationStart",
  "onAnimationComplete",
  "onUpdate",
  "onDragStart",
  "onDrag",
  "onDragEnd",
  "onMeasureDragConstraints",
  "onDirectionLock",
  "onDragTransitionEnd",
  "_dragX",
  "_dragY",
  "onHoverStart",
  "onHoverEnd",
  "onViewportEnter",
  "onViewportLeave",
  "globalTapTarget",
  "ignoreStrict",
  "viewport"
]);
function isValidMotionProp(key) {
  return key.startsWith("while") || key.startsWith("drag") && key !== "draggable" || key.startsWith("layout") || key.startsWith("onTap") || key.startsWith("onPan") || key.startsWith("onLayout") || validMotionProps.has(key);
}
var shouldForward = (key) => !isValidMotionProp(key);
function loadExternalIsValidProp(isValidProp) {
  if (!isValidProp)
    return;
  shouldForward = (key) => key.startsWith("on") ? !isValidMotionProp(key) : isValidProp(key);
}
try {
  loadExternalIsValidProp((init_is_prop_valid_esm(), __toCommonJS(is_prop_valid_esm_exports)).default);
} catch (_a) {
}
function filterProps(props, isDom, forwardMotionProps) {
  const filteredProps = {};
  for (const key in props) {
    if (key === "values" && typeof props.values === "object")
      continue;
    if (shouldForward(key) || forwardMotionProps === true && isValidMotionProp(key) || !isDom && !isValidMotionProp(key) || props["draggable"] && key.startsWith("onDrag")) {
      filteredProps[key] = props[key];
    }
  }
  return filteredProps;
}
function calcOrigin(origin, offset, size) {
  return typeof origin === "string" ? origin : px.transform(offset + size * origin);
}
function calcSVGTransformOrigin(dimensions, originX, originY) {
  const pxOriginX = calcOrigin(originX, dimensions.x, dimensions.width);
  const pxOriginY = calcOrigin(originY, dimensions.y, dimensions.height);
  return `${pxOriginX} ${pxOriginY}`;
}
var dashKeys = {
  offset: "stroke-dashoffset",
  array: "stroke-dasharray"
};
var camelKeys = {
  offset: "strokeDashoffset",
  array: "strokeDasharray"
};
function buildSVGPath(attrs, length, spacing = 1, offset = 0, useDashCase = true) {
  attrs.pathLength = 1;
  const keys = useDashCase ? dashKeys : camelKeys;
  attrs[keys.offset] = px.transform(-offset);
  const pathLength = px.transform(length);
  const pathSpacing = px.transform(spacing);
  attrs[keys.array] = `${pathLength} ${pathSpacing}`;
}
function buildSVGAttrs(state, {
  attrX,
  attrY,
  attrScale,
  originX,
  originY,
  pathLength,
  pathSpacing = 1,
  pathOffset = 0,
  ...latest
}, options, isSVGTag2, transformTemplate) {
  buildHTMLStyles(state, latest, options, transformTemplate);
  if (isSVGTag2) {
    if (state.style.viewBox) {
      state.attrs.viewBox = state.style.viewBox;
    }
    return;
  }
  state.attrs = state.style;
  state.style = {};
  const { attrs, style, dimensions } = state;
  if (attrs.transform) {
    if (dimensions)
      style.transform = attrs.transform;
    delete attrs.transform;
  }
  if (dimensions && (originX !== void 0 || originY !== void 0 || style.transform)) {
    style.transformOrigin = calcSVGTransformOrigin(dimensions, originX !== void 0 ? originX : 0.5, originY !== void 0 ? originY : 0.5);
  }
  if (attrX !== void 0)
    attrs.x = attrX;
  if (attrY !== void 0)
    attrs.y = attrY;
  if (attrScale !== void 0)
    attrs.scale = attrScale;
  if (pathLength !== void 0) {
    buildSVGPath(attrs, pathLength, pathSpacing, pathOffset, false);
  }
}
var createSvgRenderState = () => ({
  ...createHtmlRenderState(),
  attrs: {}
});
var isSVGTag = (tag) => typeof tag === "string" && tag.toLowerCase() === "svg";
function useSVGProps(props, visualState, _isStatic, Component2) {
  const visualProps = reactExports.useMemo(() => {
    const state = createSvgRenderState();
    buildSVGAttrs(state, visualState, { enableHardwareAcceleration: false }, isSVGTag(Component2), props.transformTemplate);
    return {
      ...state.attrs,
      style: { ...state.style }
    };
  }, [visualState]);
  if (props.style) {
    const rawStyles = {};
    copyRawValuesOnly(rawStyles, props.style, props);
    visualProps.style = { ...rawStyles, ...visualProps.style };
  }
  return visualProps;
}
function createUseRender(forwardMotionProps = false) {
  const useRender = (Component2, props, ref, { latestValues }, isStatic) => {
    const useVisualProps = isSVGComponent(Component2) ? useSVGProps : useHTMLProps;
    const visualProps = useVisualProps(props, latestValues, isStatic, Component2);
    const filteredProps = filterProps(props, typeof Component2 === "string", forwardMotionProps);
    const elementProps = {
      ...filteredProps,
      ...visualProps,
      ref
    };
    const { children } = props;
    const renderedChildren = reactExports.useMemo(() => isMotionValue(children) ? children.get() : children, [children]);
    return reactExports.createElement(Component2, {
      ...elementProps,
      children: renderedChildren
    });
  };
  return useRender;
}
function renderHTML(element, { style, vars }, styleProp, projection) {
  Object.assign(element.style, style, projection && projection.getProjectionStyles(styleProp));
  for (const key in vars) {
    element.style.setProperty(key, vars[key]);
  }
}
var camelCaseAttributes = /* @__PURE__ */ new Set([
  "baseFrequency",
  "diffuseConstant",
  "kernelMatrix",
  "kernelUnitLength",
  "keySplines",
  "keyTimes",
  "limitingConeAngle",
  "markerHeight",
  "markerWidth",
  "numOctaves",
  "targetX",
  "targetY",
  "surfaceScale",
  "specularConstant",
  "specularExponent",
  "stdDeviation",
  "tableValues",
  "viewBox",
  "gradientTransform",
  "pathLength",
  "startOffset",
  "textLength",
  "lengthAdjust"
]);
function renderSVG(element, renderState, _styleProp, projection) {
  renderHTML(element, renderState, void 0, projection);
  for (const key in renderState.attrs) {
    element.setAttribute(!camelCaseAttributes.has(key) ? camelToDash(key) : key, renderState.attrs[key]);
  }
}
function scrapeMotionValuesFromProps(props, prevProps) {
  const { style } = props;
  const newValues = {};
  for (const key in style) {
    if (isMotionValue(style[key]) || prevProps.style && isMotionValue(prevProps.style[key]) || isForcedMotionValue(key, props)) {
      newValues[key] = style[key];
    }
  }
  return newValues;
}
function scrapeMotionValuesFromProps2(props, prevProps) {
  const newValues = scrapeMotionValuesFromProps(props, prevProps);
  for (const key in props) {
    if (isMotionValue(props[key]) || isMotionValue(prevProps[key])) {
      const targetKey = transformPropOrder.indexOf(key) !== -1 ? "attr" + key.charAt(0).toUpperCase() + key.substring(1) : key;
      newValues[targetKey] = props[key];
    }
  }
  return newValues;
}
function resolveVariantFromProps(props, definition, custom, currentValues = {}, currentVelocity = {}) {
  if (typeof definition === "function") {
    definition = definition(custom !== void 0 ? custom : props.custom, currentValues, currentVelocity);
  }
  if (typeof definition === "string") {
    definition = props.variants && props.variants[definition];
  }
  if (typeof definition === "function") {
    definition = definition(custom !== void 0 ? custom : props.custom, currentValues, currentVelocity);
  }
  return definition;
}
function useConstant(init) {
  const ref = reactExports.useRef(null);
  if (ref.current === null) {
    ref.current = init();
  }
  return ref.current;
}
var isKeyframesTarget = (v) => {
  return Array.isArray(v);
};
var isCustomValue = (v) => {
  return Boolean(v && typeof v === "object" && v.mix && v.toValue);
};
var resolveFinalValueInKeyframes = (v) => {
  return isKeyframesTarget(v) ? v[v.length - 1] || 0 : v;
};
function resolveMotionValue(value) {
  const unwrappedValue = isMotionValue(value) ? value.get() : value;
  return isCustomValue(unwrappedValue) ? unwrappedValue.toValue() : unwrappedValue;
}
function makeState({ scrapeMotionValuesFromProps: scrapeMotionValuesFromProps3, createRenderState, onMount }, props, context, presenceContext) {
  const state = {
    latestValues: makeLatestValues(props, context, presenceContext, scrapeMotionValuesFromProps3),
    renderState: createRenderState()
  };
  if (onMount) {
    state.mount = (instance) => onMount(props, instance, state);
  }
  return state;
}
var makeUseVisualState = (config) => (props, isStatic) => {
  const context = reactExports.useContext(MotionContext);
  const presenceContext = reactExports.useContext(PresenceContext);
  const make = () => makeState(config, props, context, presenceContext);
  return isStatic ? make() : useConstant(make);
};
function makeLatestValues(props, context, presenceContext, scrapeMotionValues) {
  const values = {};
  const motionValues = scrapeMotionValues(props, {});
  for (const key in motionValues) {
    values[key] = resolveMotionValue(motionValues[key]);
  }
  let { initial, animate } = props;
  const isControllingVariants$1 = isControllingVariants(props);
  const isVariantNode$1 = isVariantNode(props);
  if (context && isVariantNode$1 && !isControllingVariants$1 && props.inherit !== false) {
    if (initial === void 0)
      initial = context.initial;
    if (animate === void 0)
      animate = context.animate;
  }
  let isInitialAnimationBlocked = presenceContext ? presenceContext.initial === false : false;
  isInitialAnimationBlocked = isInitialAnimationBlocked || initial === false;
  const variantToSet = isInitialAnimationBlocked ? animate : initial;
  if (variantToSet && typeof variantToSet !== "boolean" && !isAnimationControls(variantToSet)) {
    const list = Array.isArray(variantToSet) ? variantToSet : [variantToSet];
    list.forEach((definition) => {
      const resolved = resolveVariantFromProps(props, definition);
      if (!resolved)
        return;
      const { transitionEnd, transition: transition2, ...target } = resolved;
      for (const key in target) {
        let valueTarget = target[key];
        if (Array.isArray(valueTarget)) {
          const index2 = isInitialAnimationBlocked ? valueTarget.length - 1 : 0;
          valueTarget = valueTarget[index2];
        }
        if (valueTarget !== null) {
          values[key] = valueTarget;
        }
      }
      for (const key in transitionEnd)
        values[key] = transitionEnd[key];
    });
  }
  return values;
}
var noop = (any) => any;
var Queue = class {
  constructor() {
    this.order = [];
    this.scheduled = /* @__PURE__ */ new Set();
  }
  add(process2) {
    if (!this.scheduled.has(process2)) {
      this.scheduled.add(process2);
      this.order.push(process2);
      return true;
    }
  }
  remove(process2) {
    const index2 = this.order.indexOf(process2);
    if (index2 !== -1) {
      this.order.splice(index2, 1);
      this.scheduled.delete(process2);
    }
  }
  clear() {
    this.order.length = 0;
    this.scheduled.clear();
  }
};
function createRenderStep(runNextFrame) {
  let thisFrame = new Queue();
  let nextFrame = new Queue();
  let numToRun = 0;
  let isProcessing = false;
  let flushNextFrame = false;
  const toKeepAlive = /* @__PURE__ */ new WeakSet();
  const step = {
    schedule: (callback, keepAlive = false, immediate = false) => {
      const addToCurrentFrame = immediate && isProcessing;
      const queue = addToCurrentFrame ? thisFrame : nextFrame;
      if (keepAlive)
        toKeepAlive.add(callback);
      if (queue.add(callback) && addToCurrentFrame && isProcessing) {
        numToRun = thisFrame.order.length;
      }
      return callback;
    },
    cancel: (callback) => {
      nextFrame.remove(callback);
      toKeepAlive.delete(callback);
    },
    process: (frameData2) => {
      if (isProcessing) {
        flushNextFrame = true;
        return;
      }
      isProcessing = true;
      [thisFrame, nextFrame] = [nextFrame, thisFrame];
      nextFrame.clear();
      numToRun = thisFrame.order.length;
      if (numToRun) {
        for (let i = 0; i < numToRun; i++) {
          const callback = thisFrame.order[i];
          callback(frameData2);
          if (toKeepAlive.has(callback)) {
            step.schedule(callback);
            runNextFrame();
          }
        }
      }
      isProcessing = false;
      if (flushNextFrame) {
        flushNextFrame = false;
        step.process(frameData2);
      }
    }
  };
  return step;
}
var stepsOrder = [
  "prepare",
  "read",
  "update",
  "preRender",
  "render",
  "postRender"
];
var maxElapsed = 40;
function createRenderBatcher(scheduleNextBatch, allowKeepAlive) {
  let runNextFrame = false;
  let useDefaultElapsed = true;
  const state = {
    delta: 0,
    timestamp: 0,
    isProcessing: false
  };
  const steps2 = stepsOrder.reduce((acc, key) => {
    acc[key] = createRenderStep(() => runNextFrame = true);
    return acc;
  }, {});
  const processStep = (stepId) => steps2[stepId].process(state);
  const processBatch = () => {
    const timestamp = performance.now();
    runNextFrame = false;
    state.delta = useDefaultElapsed ? 1e3 / 60 : Math.max(Math.min(timestamp - state.timestamp, maxElapsed), 1);
    state.timestamp = timestamp;
    state.isProcessing = true;
    stepsOrder.forEach(processStep);
    state.isProcessing = false;
    if (runNextFrame && allowKeepAlive) {
      useDefaultElapsed = false;
      scheduleNextBatch(processBatch);
    }
  };
  const wake = () => {
    runNextFrame = true;
    useDefaultElapsed = true;
    if (!state.isProcessing) {
      scheduleNextBatch(processBatch);
    }
  };
  const schedule = stepsOrder.reduce((acc, key) => {
    const step = steps2[key];
    acc[key] = (process2, keepAlive = false, immediate = false) => {
      if (!runNextFrame)
        wake();
      return step.schedule(process2, keepAlive, immediate);
    };
    return acc;
  }, {});
  const cancel = (process2) => stepsOrder.forEach((key) => steps2[key].cancel(process2));
  return { schedule, cancel, state, steps: steps2 };
}
var { schedule: frame, cancel: cancelFrame, state: frameData, steps } = createRenderBatcher(typeof requestAnimationFrame !== "undefined" ? requestAnimationFrame : noop, true);
var svgMotionConfig = {
  useVisualState: makeUseVisualState({
    scrapeMotionValuesFromProps: scrapeMotionValuesFromProps2,
    createRenderState: createSvgRenderState,
    onMount: (props, instance, { renderState, latestValues }) => {
      frame.read(() => {
        try {
          renderState.dimensions = typeof instance.getBBox === "function" ? instance.getBBox() : instance.getBoundingClientRect();
        } catch (e) {
          renderState.dimensions = {
            x: 0,
            y: 0,
            width: 0,
            height: 0
          };
        }
      });
      frame.render(() => {
        buildSVGAttrs(renderState, latestValues, { enableHardwareAcceleration: false }, isSVGTag(instance.tagName), props.transformTemplate);
        renderSVG(instance, renderState);
      });
    }
  })
};
var htmlMotionConfig = {
  useVisualState: makeUseVisualState({
    scrapeMotionValuesFromProps,
    createRenderState: createHtmlRenderState
  })
};
function createDomMotionConfig(Component2, { forwardMotionProps = false }, preloadedFeatures, createVisualElement) {
  const baseConfig = isSVGComponent(Component2) ? svgMotionConfig : htmlMotionConfig;
  return {
    ...baseConfig,
    preloadedFeatures,
    useRender: createUseRender(forwardMotionProps),
    createVisualElement,
    Component: Component2
  };
}
var m = createMotionProxy(createDomMotionConfig);
function useIsMounted() {
  const isMounted = reactExports.useRef(false);
  useIsomorphicLayoutEffect(() => {
    isMounted.current = true;
    return () => {
      isMounted.current = false;
    };
  }, []);
  return isMounted;
}
function useForceUpdate() {
  const isMounted = useIsMounted();
  const [forcedRenderCount, setForcedRenderCount] = reactExports.useState(0);
  const forceRender = reactExports.useCallback(() => {
    isMounted.current && setForcedRenderCount(forcedRenderCount + 1);
  }, [forcedRenderCount]);
  const deferredForceRender = reactExports.useCallback(() => frame.postRender(forceRender), [forceRender]);
  return [deferredForceRender, forcedRenderCount];
}
var PopChildMeasure = class extends reactExports.Component {
  getSnapshotBeforeUpdate(prevProps) {
    const element = this.props.childRef.current;
    if (element && prevProps.isPresent && !this.props.isPresent) {
      const size = this.props.sizeRef.current;
      size.height = element.offsetHeight || 0;
      size.width = element.offsetWidth || 0;
      size.top = element.offsetTop;
      size.left = element.offsetLeft;
    }
    return null;
  }
  componentDidUpdate() {
  }
  render() {
    return this.props.children;
  }
};
function PopChild({ children, isPresent }) {
  const id2 = reactExports.useId();
  const ref = reactExports.useRef(null);
  const size = reactExports.useRef({
    width: 0,
    height: 0,
    top: 0,
    left: 0
  });
  reactExports.useInsertionEffect(() => {
    const { width, height, top, left } = size.current;
    if (isPresent || !ref.current || !width || !height)
      return;
    ref.current.dataset.motionPopId = id2;
    const style = document.createElement("style");
    document.head.appendChild(style);
    if (style.sheet) {
      style.sheet.insertRule(`
          [data-motion-pop-id="${id2}"] {
            position: absolute !important;
            width: ${width}px !important;
            height: ${height}px !important;
            top: ${top}px !important;
            left: ${left}px !important;
          }
        `);
    }
    return () => {
      document.head.removeChild(style);
    };
  }, [isPresent]);
  return reactExports.createElement(PopChildMeasure, { isPresent, childRef: ref, sizeRef: size }, reactExports.cloneElement(children, { ref }));
}
var PresenceChild = ({ children, initial, isPresent, onExitComplete, custom, presenceAffectsLayout, mode }) => {
  const presenceChildren = useConstant(newChildrenMap);
  const id2 = reactExports.useId();
  const context = reactExports.useMemo(
    () => ({
      id: id2,
      initial,
      isPresent,
      custom,
      onExitComplete: (childId) => {
        presenceChildren.set(childId, true);
        for (const isComplete of presenceChildren.values()) {
          if (!isComplete)
            return;
        }
        onExitComplete && onExitComplete();
      },
      register: (childId) => {
        presenceChildren.set(childId, false);
        return () => presenceChildren.delete(childId);
      }
    }),
    presenceAffectsLayout ? void 0 : [isPresent]
  );
  reactExports.useMemo(() => {
    presenceChildren.forEach((_, key) => presenceChildren.set(key, false));
  }, [isPresent]);
  reactExports.useEffect(() => {
    !isPresent && !presenceChildren.size && onExitComplete && onExitComplete();
  }, [isPresent]);
  if (mode === "popLayout") {
    children = reactExports.createElement(PopChild, { isPresent }, children);
  }
  return reactExports.createElement(PresenceContext.Provider, { value: context }, children);
};
function newChildrenMap() {
  return /* @__PURE__ */ new Map();
}
function useUnmountEffect(callback) {
  return reactExports.useEffect(() => () => callback(), []);
}
var invariant = noop;
var getChildKey = (child) => child.key || "";
function updateChildLookup(children, allChildren) {
  children.forEach((child) => {
    const key = getChildKey(child);
    allChildren.set(key, child);
  });
}
function onlyElements(children) {
  const filtered = [];
  reactExports.Children.forEach(children, (child) => {
    if (reactExports.isValidElement(child))
      filtered.push(child);
  });
  return filtered;
}
var AnimatePresence = ({ children, custom, initial = true, onExitComplete, exitBeforeEnter, presenceAffectsLayout = true, mode = "sync" }) => {
  const forceRender = reactExports.useContext(LayoutGroupContext).forceRender || useForceUpdate()[0];
  const isMounted = useIsMounted();
  const filteredChildren = onlyElements(children);
  let childrenToRender = filteredChildren;
  const exitingChildren = reactExports.useRef(/* @__PURE__ */ new Map()).current;
  const presentChildren = reactExports.useRef(childrenToRender);
  const allChildren = reactExports.useRef(/* @__PURE__ */ new Map()).current;
  const isInitialRender = reactExports.useRef(true);
  useIsomorphicLayoutEffect(() => {
    isInitialRender.current = false;
    updateChildLookup(filteredChildren, allChildren);
    presentChildren.current = childrenToRender;
  });
  useUnmountEffect(() => {
    isInitialRender.current = true;
    allChildren.clear();
    exitingChildren.clear();
  });
  if (isInitialRender.current) {
    return reactExports.createElement(reactExports.Fragment, null, childrenToRender.map((child) => reactExports.createElement(PresenceChild, { key: getChildKey(child), isPresent: true, initial: initial ? void 0 : false, presenceAffectsLayout, mode }, child)));
  }
  childrenToRender = [...childrenToRender];
  const presentKeys = presentChildren.current.map(getChildKey);
  const targetKeys = filteredChildren.map(getChildKey);
  const numPresent = presentKeys.length;
  for (let i = 0; i < numPresent; i++) {
    const key = presentKeys[i];
    if (targetKeys.indexOf(key) === -1 && !exitingChildren.has(key)) {
      exitingChildren.set(key, void 0);
    }
  }
  if (mode === "wait" && exitingChildren.size) {
    childrenToRender = [];
  }
  exitingChildren.forEach((component, key) => {
    if (targetKeys.indexOf(key) !== -1)
      return;
    const child = allChildren.get(key);
    if (!child)
      return;
    const insertionIndex = presentKeys.indexOf(key);
    let exitingComponent = component;
    if (!exitingComponent) {
      const onExit = () => {
        exitingChildren.delete(key);
        const leftOverKeys = Array.from(allChildren.keys()).filter((childKey) => !targetKeys.includes(childKey));
        leftOverKeys.forEach((leftOverKey) => allChildren.delete(leftOverKey));
        presentChildren.current = filteredChildren.filter((presentChild) => {
          const presentChildKey = getChildKey(presentChild);
          return presentChildKey === key || leftOverKeys.includes(presentChildKey);
        });
        if (!exitingChildren.size) {
          if (isMounted.current === false)
            return;
          forceRender();
          onExitComplete && onExitComplete();
        }
      };
      exitingComponent = reactExports.createElement(PresenceChild, { key: getChildKey(child), isPresent: false, onExitComplete: onExit, custom, presenceAffectsLayout, mode }, child);
      exitingChildren.set(key, exitingComponent);
    }
    childrenToRender.splice(insertionIndex, 0, exitingComponent);
  });
  childrenToRender = childrenToRender.map((child) => {
    const key = child.key;
    return exitingChildren.has(key) ? child : reactExports.createElement(PresenceChild, { key: getChildKey(child), isPresent: true, presenceAffectsLayout, mode }, child);
  });
  return reactExports.createElement(reactExports.Fragment, null, exitingChildren.size ? childrenToRender : childrenToRender.map((child) => reactExports.cloneElement(child)));
};
function MotionConfig({ children, isValidProp, ...config }) {
  isValidProp && loadExternalIsValidProp(isValidProp);
  config = { ...reactExports.useContext(MotionConfigContext), ...config };
  config.isStatic = useConstant(() => config.isStatic);
  const context = reactExports.useMemo(() => config, [JSON.stringify(config.transition), config.transformPagePoint, config.reducedMotion]);
  return reactExports.createElement(MotionConfigContext.Provider, { value: context }, children);
}
function LazyMotion({ children, features, strict = false }) {
  const [, setIsLoaded] = reactExports.useState(!isLazyBundle(features));
  const loadedRenderer = reactExports.useRef(void 0);
  if (!isLazyBundle(features)) {
    const { renderer, ...loadedFeatures } = features;
    loadedRenderer.current = renderer;
    loadFeatures(loadedFeatures);
  }
  reactExports.useEffect(() => {
    if (isLazyBundle(features)) {
      features().then(({ renderer, ...loadedFeatures }) => {
        loadFeatures(loadedFeatures);
        loadedRenderer.current = renderer;
        setIsLoaded(true);
      });
    }
  }, []);
  return reactExports.createElement(LazyContext.Provider, { value: { renderer: loadedRenderer.current, strict } }, children);
}
function isLazyBundle(features) {
  return typeof features === "function";
}
function shallowCompare(next, prev) {
  if (!Array.isArray(prev))
    return false;
  const prevLength = prev.length;
  if (prevLength !== next.length)
    return false;
  for (let i = 0; i < prevLength; i++) {
    if (prev[i] !== next[i])
      return false;
  }
  return true;
}
function getCurrent(visualElement) {
  const current = {};
  visualElement.values.forEach((value, key) => current[key] = value.get());
  return current;
}
function getVelocity(visualElement) {
  const velocity = {};
  visualElement.values.forEach((value, key) => velocity[key] = value.getVelocity());
  return velocity;
}
function resolveVariant(visualElement, definition, custom) {
  const props = visualElement.getProps();
  return resolveVariantFromProps(props, definition, custom !== void 0 ? custom : props.custom, getCurrent(visualElement), getVelocity(visualElement));
}
var secondsToMilliseconds = (seconds) => seconds * 1e3;
var millisecondsToSeconds = (milliseconds) => milliseconds / 1e3;
var instantAnimationState = {
  current: false
};
var isBezierDefinition = (easing) => Array.isArray(easing) && typeof easing[0] === "number";
function isWaapiSupportedEasing(easing) {
  return Boolean(!easing || typeof easing === "string" && supportedWaapiEasing[easing] || isBezierDefinition(easing) || Array.isArray(easing) && easing.every(isWaapiSupportedEasing));
}
var cubicBezierAsString = ([a, b, c, d]) => `cubic-bezier(${a}, ${b}, ${c}, ${d})`;
var supportedWaapiEasing = {
  linear: "linear",
  ease: "ease",
  easeIn: "ease-in",
  easeOut: "ease-out",
  easeInOut: "ease-in-out",
  circIn: cubicBezierAsString([0, 0.65, 0.55, 1]),
  circOut: cubicBezierAsString([0.55, 0, 1, 0.45]),
  backIn: cubicBezierAsString([0.31, 0.01, 0.66, -0.59]),
  backOut: cubicBezierAsString([0.33, 1.53, 0.69, 0.99])
};
function mapEasingToNativeEasing(easing) {
  if (!easing)
    return void 0;
  return isBezierDefinition(easing) ? cubicBezierAsString(easing) : Array.isArray(easing) ? easing.map(mapEasingToNativeEasing) : supportedWaapiEasing[easing];
}
function animateStyle(element, valueName, keyframes2, { delay = 0, duration, repeat = 0, repeatType = "loop", ease: ease2, times } = {}) {
  const keyframeOptions = { [valueName]: keyframes2 };
  if (times)
    keyframeOptions.offset = times;
  const easing = mapEasingToNativeEasing(ease2);
  if (Array.isArray(easing))
    keyframeOptions.easing = easing;
  return element.animate(keyframeOptions, {
    delay,
    duration,
    easing: !Array.isArray(easing) ? easing : "linear",
    fill: "both",
    iterations: repeat + 1,
    direction: repeatType === "reverse" ? "alternate" : "normal"
  });
}
function getFinalKeyframe(keyframes2, { repeat, repeatType = "loop" }) {
  const index2 = repeat && repeatType !== "loop" && repeat % 2 === 1 ? 0 : keyframes2.length - 1;
  return keyframes2[index2];
}
var calcBezier = (t2, a1, a2) => (((1 - 3 * a2 + 3 * a1) * t2 + (3 * a2 - 6 * a1)) * t2 + 3 * a1) * t2;
var subdivisionPrecision = 1e-7;
var subdivisionMaxIterations = 12;
function binarySubdivide(x, lowerBound, upperBound, mX1, mX2) {
  let currentX;
  let currentT;
  let i = 0;
  do {
    currentT = lowerBound + (upperBound - lowerBound) / 2;
    currentX = calcBezier(currentT, mX1, mX2) - x;
    if (currentX > 0) {
      upperBound = currentT;
    } else {
      lowerBound = currentT;
    }
  } while (Math.abs(currentX) > subdivisionPrecision && ++i < subdivisionMaxIterations);
  return currentT;
}
function cubicBezier(mX1, mY1, mX2, mY2) {
  if (mX1 === mY1 && mX2 === mY2)
    return noop;
  const getTForX = (aX) => binarySubdivide(aX, 0, 1, mX1, mX2);
  return (t2) => t2 === 0 || t2 === 1 ? t2 : calcBezier(getTForX(t2), mY1, mY2);
}
var easeIn = cubicBezier(0.42, 0, 1, 1);
var easeOut = cubicBezier(0, 0, 0.58, 1);
var easeInOut = cubicBezier(0.42, 0, 0.58, 1);
var isEasingArray = (ease2) => {
  return Array.isArray(ease2) && typeof ease2[0] !== "number";
};
var mirrorEasing = (easing) => (p) => p <= 0.5 ? easing(2 * p) / 2 : (2 - easing(2 * (1 - p))) / 2;
var reverseEasing = (easing) => (p) => 1 - easing(1 - p);
var circIn = (p) => 1 - Math.sin(Math.acos(p));
var circOut = reverseEasing(circIn);
var circInOut = mirrorEasing(circIn);
var backOut = cubicBezier(0.33, 1.53, 0.69, 0.99);
var backIn = reverseEasing(backOut);
var backInOut = mirrorEasing(backIn);
var anticipate = (p) => (p *= 2) < 1 ? 0.5 * backIn(p) : 0.5 * (2 - Math.pow(2, -10 * (p - 1)));
var easingLookup = {
  linear: noop,
  easeIn,
  easeInOut,
  easeOut,
  circIn,
  circInOut,
  circOut,
  backIn,
  backInOut,
  backOut,
  anticipate
};
var easingDefinitionToFunction = (definition) => {
  if (Array.isArray(definition)) {
    invariant(definition.length === 4);
    const [x1, y1, x2, y2] = definition;
    return cubicBezier(x1, y1, x2, y2);
  } else if (typeof definition === "string") {
    invariant(easingLookup[definition] !== void 0);
    return easingLookup[definition];
  }
  return definition;
};
var isColorString = (type, testProp) => (v) => {
  return Boolean(isString(v) && singleColorRegex.test(v) && v.startsWith(type) || testProp && Object.prototype.hasOwnProperty.call(v, testProp));
};
var splitColor = (aName, bName, cName) => (v) => {
  if (!isString(v))
    return v;
  const [a, b, c, alpha2] = v.match(floatRegex);
  return {
    [aName]: parseFloat(a),
    [bName]: parseFloat(b),
    [cName]: parseFloat(c),
    alpha: alpha2 !== void 0 ? parseFloat(alpha2) : 1
  };
};
var clampRgbUnit = (v) => clamp(0, 255, v);
var rgbUnit = {
  ...number,
  transform: (v) => Math.round(clampRgbUnit(v))
};
var rgba = {
  test: isColorString("rgb", "red"),
  parse: splitColor("red", "green", "blue"),
  transform: ({ red, green, blue, alpha: alpha$1 = 1 }) => "rgba(" + rgbUnit.transform(red) + ", " + rgbUnit.transform(green) + ", " + rgbUnit.transform(blue) + ", " + sanitize(alpha.transform(alpha$1)) + ")"
};
function parseHex(v) {
  let r = "";
  let g = "";
  let b = "";
  let a = "";
  if (v.length > 5) {
    r = v.substring(1, 3);
    g = v.substring(3, 5);
    b = v.substring(5, 7);
    a = v.substring(7, 9);
  } else {
    r = v.substring(1, 2);
    g = v.substring(2, 3);
    b = v.substring(3, 4);
    a = v.substring(4, 5);
    r += r;
    g += g;
    b += b;
    a += a;
  }
  return {
    red: parseInt(r, 16),
    green: parseInt(g, 16),
    blue: parseInt(b, 16),
    alpha: a ? parseInt(a, 16) / 255 : 1
  };
}
var hex = {
  test: isColorString("#"),
  parse: parseHex,
  transform: rgba.transform
};
var hsla = {
  test: isColorString("hsl", "hue"),
  parse: splitColor("hue", "saturation", "lightness"),
  transform: ({ hue, saturation, lightness, alpha: alpha$1 = 1 }) => {
    return "hsla(" + Math.round(hue) + ", " + percent.transform(sanitize(saturation)) + ", " + percent.transform(sanitize(lightness)) + ", " + sanitize(alpha.transform(alpha$1)) + ")";
  }
};
var color = {
  test: (v) => rgba.test(v) || hex.test(v) || hsla.test(v),
  parse: (v) => {
    if (rgba.test(v)) {
      return rgba.parse(v);
    } else if (hsla.test(v)) {
      return hsla.parse(v);
    } else {
      return hex.parse(v);
    }
  },
  transform: (v) => {
    return isString(v) ? v : v.hasOwnProperty("red") ? rgba.transform(v) : hsla.transform(v);
  }
};
var mix = (from, to, progress2) => -progress2 * from + progress2 * to + from;
function hueToRgb(p, q, t2) {
  if (t2 < 0)
    t2 += 1;
  if (t2 > 1)
    t2 -= 1;
  if (t2 < 1 / 6)
    return p + (q - p) * 6 * t2;
  if (t2 < 1 / 2)
    return q;
  if (t2 < 2 / 3)
    return p + (q - p) * (2 / 3 - t2) * 6;
  return p;
}
function hslaToRgba({ hue, saturation, lightness, alpha: alpha2 }) {
  hue /= 360;
  saturation /= 100;
  lightness /= 100;
  let red = 0;
  let green = 0;
  let blue = 0;
  if (!saturation) {
    red = green = blue = lightness;
  } else {
    const q = lightness < 0.5 ? lightness * (1 + saturation) : lightness + saturation - lightness * saturation;
    const p = 2 * lightness - q;
    red = hueToRgb(p, q, hue + 1 / 3);
    green = hueToRgb(p, q, hue);
    blue = hueToRgb(p, q, hue - 1 / 3);
  }
  return {
    red: Math.round(red * 255),
    green: Math.round(green * 255),
    blue: Math.round(blue * 255),
    alpha: alpha2
  };
}
var mixLinearColor = (from, to, v) => {
  const fromExpo = from * from;
  return Math.sqrt(Math.max(0, v * (to * to - fromExpo) + fromExpo));
};
var colorTypes = [hex, rgba, hsla];
var getColorType = (v) => colorTypes.find((type) => type.test(v));
function asRGBA(color2) {
  const type = getColorType(color2);
  let model = type.parse(color2);
  if (type === hsla) {
    model = hslaToRgba(model);
  }
  return model;
}
var mixColor = (from, to) => {
  const fromRGBA = asRGBA(from);
  const toRGBA = asRGBA(to);
  const blended = { ...fromRGBA };
  return (v) => {
    blended.red = mixLinearColor(fromRGBA.red, toRGBA.red, v);
    blended.green = mixLinearColor(fromRGBA.green, toRGBA.green, v);
    blended.blue = mixLinearColor(fromRGBA.blue, toRGBA.blue, v);
    blended.alpha = mix(fromRGBA.alpha, toRGBA.alpha, v);
    return rgba.transform(blended);
  };
};
var combineFunctions = (a, b) => (v) => b(a(v));
var pipe = (...transformers) => transformers.reduce(combineFunctions);
function test(v) {
  var _a, _b;
  return isNaN(v) && isString(v) && (((_a = v.match(floatRegex)) === null || _a === void 0 ? void 0 : _a.length) || 0) + (((_b = v.match(colorRegex)) === null || _b === void 0 ? void 0 : _b.length) || 0) > 0;
}
var cssVarTokeniser = {
  regex: cssVariableRegex,
  countKey: "Vars",
  token: "${v}",
  parse: noop
};
var colorTokeniser = {
  regex: colorRegex,
  countKey: "Colors",
  token: "${c}",
  parse: color.parse
};
var numberTokeniser = {
  regex: floatRegex,
  countKey: "Numbers",
  token: "${n}",
  parse: number.parse
};
function tokenise(info, { regex, countKey, token, parse }) {
  const matches = info.tokenised.match(regex);
  if (!matches)
    return;
  info["num" + countKey] = matches.length;
  info.tokenised = info.tokenised.replace(regex, token);
  info.values.push(...matches.map(parse));
}
function analyseComplexValue(value) {
  const originalValue = value.toString();
  const info = {
    value: originalValue,
    tokenised: originalValue,
    values: [],
    numVars: 0,
    numColors: 0,
    numNumbers: 0
  };
  if (info.value.includes("var(--"))
    tokenise(info, cssVarTokeniser);
  tokenise(info, colorTokeniser);
  tokenise(info, numberTokeniser);
  return info;
}
function parseComplexValue(v) {
  return analyseComplexValue(v).values;
}
function createTransformer(source) {
  const { values, numColors, numVars, tokenised } = analyseComplexValue(source);
  const numValues = values.length;
  return (v) => {
    let output = tokenised;
    for (let i = 0; i < numValues; i++) {
      if (i < numVars) {
        output = output.replace(cssVarTokeniser.token, v[i]);
      } else if (i < numVars + numColors) {
        output = output.replace(colorTokeniser.token, color.transform(v[i]));
      } else {
        output = output.replace(numberTokeniser.token, sanitize(v[i]));
      }
    }
    return output;
  };
}
var convertNumbersToZero = (v) => typeof v === "number" ? 0 : v;
function getAnimatableNone(v) {
  const parsed = parseComplexValue(v);
  const transformer = createTransformer(v);
  return transformer(parsed.map(convertNumbersToZero));
}
var complex = {
  test,
  parse: parseComplexValue,
  createTransformer,
  getAnimatableNone
};
var mixImmediate = (origin, target) => (p) => `${p > 0 ? target : origin}`;
function getMixer(origin, target) {
  if (typeof origin === "number") {
    return (v) => mix(origin, target, v);
  } else if (color.test(origin)) {
    return mixColor(origin, target);
  } else {
    return origin.startsWith("var(") ? mixImmediate(origin, target) : mixComplex(origin, target);
  }
}
var mixArray = (from, to) => {
  const output = [...from];
  const numValues = output.length;
  const blendValue = from.map((fromThis, i) => getMixer(fromThis, to[i]));
  return (v) => {
    for (let i = 0; i < numValues; i++) {
      output[i] = blendValue[i](v);
    }
    return output;
  };
};
var mixObject = (origin, target) => {
  const output = { ...origin, ...target };
  const blendValue = {};
  for (const key in output) {
    if (origin[key] !== void 0 && target[key] !== void 0) {
      blendValue[key] = getMixer(origin[key], target[key]);
    }
  }
  return (v) => {
    for (const key in blendValue) {
      output[key] = blendValue[key](v);
    }
    return output;
  };
};
var mixComplex = (origin, target) => {
  const template = complex.createTransformer(target);
  const originStats = analyseComplexValue(origin);
  const targetStats = analyseComplexValue(target);
  const canInterpolate = originStats.numVars === targetStats.numVars && originStats.numColors === targetStats.numColors && originStats.numNumbers >= targetStats.numNumbers;
  if (canInterpolate) {
    return pipe(mixArray(originStats.values, targetStats.values), template);
  } else {
    return mixImmediate(origin, target);
  }
};
var progress = (from, to, value) => {
  const toFromDifference = to - from;
  return toFromDifference === 0 ? 1 : (value - from) / toFromDifference;
};
var mixNumber = (from, to) => (p) => mix(from, to, p);
function detectMixerFactory(v) {
  if (typeof v === "number") {
    return mixNumber;
  } else if (typeof v === "string") {
    return color.test(v) ? mixColor : mixComplex;
  } else if (Array.isArray(v)) {
    return mixArray;
  } else if (typeof v === "object") {
    return mixObject;
  }
  return mixNumber;
}
function createMixers(output, ease2, customMixer) {
  const mixers = [];
  const mixerFactory = customMixer || detectMixerFactory(output[0]);
  const numMixers = output.length - 1;
  for (let i = 0; i < numMixers; i++) {
    let mixer = mixerFactory(output[i], output[i + 1]);
    if (ease2) {
      const easingFunction = Array.isArray(ease2) ? ease2[i] || noop : ease2;
      mixer = pipe(easingFunction, mixer);
    }
    mixers.push(mixer);
  }
  return mixers;
}
function interpolate(input, output, { clamp: isClamp = true, ease: ease2, mixer } = {}) {
  const inputLength = input.length;
  invariant(inputLength === output.length);
  if (inputLength === 1)
    return () => output[0];
  if (input[0] > input[inputLength - 1]) {
    input = [...input].reverse();
    output = [...output].reverse();
  }
  const mixers = createMixers(output, ease2, mixer);
  const numMixers = mixers.length;
  const interpolator = (v) => {
    let i = 0;
    if (numMixers > 1) {
      for (; i < input.length - 2; i++) {
        if (v < input[i + 1])
          break;
      }
    }
    const progressInRange = progress(input[i], input[i + 1], v);
    return mixers[i](progressInRange);
  };
  return isClamp ? (v) => interpolator(clamp(input[0], input[inputLength - 1], v)) : interpolator;
}
function fillOffset(offset, remaining) {
  const min = offset[offset.length - 1];
  for (let i = 1; i <= remaining; i++) {
    const offsetProgress = progress(0, remaining, i);
    offset.push(mix(min, 1, offsetProgress));
  }
}
function defaultOffset(arr) {
  const offset = [0];
  fillOffset(offset, arr.length - 1);
  return offset;
}
function convertOffsetToTimes(offset, duration) {
  return offset.map((o) => o * duration);
}
function defaultEasing(values, easing) {
  return values.map(() => easing || easeInOut).splice(0, values.length - 1);
}
function keyframes({ duration = 300, keyframes: keyframeValues, times, ease: ease2 = "easeInOut" }) {
  const easingFunctions = isEasingArray(ease2) ? ease2.map(easingDefinitionToFunction) : easingDefinitionToFunction(ease2);
  const state = {
    done: false,
    value: keyframeValues[0]
  };
  const absoluteTimes = convertOffsetToTimes(
    times && times.length === keyframeValues.length ? times : defaultOffset(keyframeValues),
    duration
  );
  const mapTimeToKeyframe = interpolate(absoluteTimes, keyframeValues, {
    ease: Array.isArray(easingFunctions) ? easingFunctions : defaultEasing(keyframeValues, easingFunctions)
  });
  return {
    calculatedDuration: duration,
    next: (t2) => {
      state.value = mapTimeToKeyframe(t2);
      state.done = t2 >= duration;
      return state;
    }
  };
}
function velocityPerSecond(velocity, frameDuration) {
  return frameDuration ? velocity * (1e3 / frameDuration) : 0;
}
var velocitySampleDuration = 5;
function calcGeneratorVelocity(resolveValue, t2, current) {
  const prevT = Math.max(t2 - velocitySampleDuration, 0);
  return velocityPerSecond(current - resolveValue(prevT), t2 - prevT);
}
var safeMin = 1e-3;
var minDuration = 0.01;
var maxDuration = 10;
var minDamping = 0.05;
var maxDamping = 1;
function findSpring({ duration = 800, bounce = 0.25, velocity = 0, mass = 1 }) {
  let envelope;
  let derivative;
  let dampingRatio = 1 - bounce;
  dampingRatio = clamp(minDamping, maxDamping, dampingRatio);
  duration = clamp(minDuration, maxDuration, millisecondsToSeconds(duration));
  if (dampingRatio < 1) {
    envelope = (undampedFreq2) => {
      const exponentialDecay = undampedFreq2 * dampingRatio;
      const delta = exponentialDecay * duration;
      const a = exponentialDecay - velocity;
      const b = calcAngularFreq(undampedFreq2, dampingRatio);
      const c = Math.exp(-delta);
      return safeMin - a / b * c;
    };
    derivative = (undampedFreq2) => {
      const exponentialDecay = undampedFreq2 * dampingRatio;
      const delta = exponentialDecay * duration;
      const d = delta * velocity + velocity;
      const e = Math.pow(dampingRatio, 2) * Math.pow(undampedFreq2, 2) * duration;
      const f = Math.exp(-delta);
      const g = calcAngularFreq(Math.pow(undampedFreq2, 2), dampingRatio);
      const factor = -envelope(undampedFreq2) + safeMin > 0 ? -1 : 1;
      return factor * ((d - e) * f) / g;
    };
  } else {
    envelope = (undampedFreq2) => {
      const a = Math.exp(-undampedFreq2 * duration);
      const b = (undampedFreq2 - velocity) * duration + 1;
      return -safeMin + a * b;
    };
    derivative = (undampedFreq2) => {
      const a = Math.exp(-undampedFreq2 * duration);
      const b = (velocity - undampedFreq2) * (duration * duration);
      return a * b;
    };
  }
  const initialGuess = 5 / duration;
  const undampedFreq = approximateRoot(envelope, derivative, initialGuess);
  duration = secondsToMilliseconds(duration);
  if (isNaN(undampedFreq)) {
    return {
      stiffness: 100,
      damping: 10,
      duration
    };
  } else {
    const stiffness = Math.pow(undampedFreq, 2) * mass;
    return {
      stiffness,
      damping: dampingRatio * 2 * Math.sqrt(mass * stiffness),
      duration
    };
  }
}
var rootIterations = 12;
function approximateRoot(envelope, derivative, initialGuess) {
  let result = initialGuess;
  for (let i = 1; i < rootIterations; i++) {
    result = result - envelope(result) / derivative(result);
  }
  return result;
}
function calcAngularFreq(undampedFreq, dampingRatio) {
  return undampedFreq * Math.sqrt(1 - dampingRatio * dampingRatio);
}
var durationKeys = ["duration", "bounce"];
var physicsKeys = ["stiffness", "damping", "mass"];
function isSpringType(options, keys) {
  return keys.some((key) => options[key] !== void 0);
}
function getSpringOptions(options) {
  let springOptions = {
    velocity: 0,
    stiffness: 100,
    damping: 10,
    mass: 1,
    isResolvedFromDuration: false,
    ...options
  };
  if (!isSpringType(options, physicsKeys) && isSpringType(options, durationKeys)) {
    const derived = findSpring(options);
    springOptions = {
      ...springOptions,
      ...derived,
      mass: 1
    };
    springOptions.isResolvedFromDuration = true;
  }
  return springOptions;
}
function spring({ keyframes: keyframes2, restDelta, restSpeed, ...options }) {
  const origin = keyframes2[0];
  const target = keyframes2[keyframes2.length - 1];
  const state = { done: false, value: origin };
  const { stiffness, damping, mass, duration, velocity, isResolvedFromDuration } = getSpringOptions({
    ...options,
    velocity: -millisecondsToSeconds(options.velocity || 0)
  });
  const initialVelocity = velocity || 0;
  const dampingRatio = damping / (2 * Math.sqrt(stiffness * mass));
  const initialDelta = target - origin;
  const undampedAngularFreq = millisecondsToSeconds(Math.sqrt(stiffness / mass));
  const isGranularScale = Math.abs(initialDelta) < 5;
  restSpeed || (restSpeed = isGranularScale ? 0.01 : 2);
  restDelta || (restDelta = isGranularScale ? 5e-3 : 0.5);
  let resolveSpring;
  if (dampingRatio < 1) {
    const angularFreq = calcAngularFreq(undampedAngularFreq, dampingRatio);
    resolveSpring = (t2) => {
      const envelope = Math.exp(-dampingRatio * undampedAngularFreq * t2);
      return target - envelope * ((initialVelocity + dampingRatio * undampedAngularFreq * initialDelta) / angularFreq * Math.sin(angularFreq * t2) + initialDelta * Math.cos(angularFreq * t2));
    };
  } else if (dampingRatio === 1) {
    resolveSpring = (t2) => target - Math.exp(-undampedAngularFreq * t2) * (initialDelta + (initialVelocity + undampedAngularFreq * initialDelta) * t2);
  } else {
    const dampedAngularFreq = undampedAngularFreq * Math.sqrt(dampingRatio * dampingRatio - 1);
    resolveSpring = (t2) => {
      const envelope = Math.exp(-dampingRatio * undampedAngularFreq * t2);
      const freqForT = Math.min(dampedAngularFreq * t2, 300);
      return target - envelope * ((initialVelocity + dampingRatio * undampedAngularFreq * initialDelta) * Math.sinh(freqForT) + dampedAngularFreq * initialDelta * Math.cosh(freqForT)) / dampedAngularFreq;
    };
  }
  return {
    calculatedDuration: isResolvedFromDuration ? duration || null : null,
    next: (t2) => {
      const current = resolveSpring(t2);
      if (!isResolvedFromDuration) {
        let currentVelocity = initialVelocity;
        if (t2 !== 0) {
          if (dampingRatio < 1) {
            currentVelocity = calcGeneratorVelocity(resolveSpring, t2, current);
          } else {
            currentVelocity = 0;
          }
        }
        const isBelowVelocityThreshold = Math.abs(currentVelocity) <= restSpeed;
        const isBelowDisplacementThreshold = Math.abs(target - current) <= restDelta;
        state.done = isBelowVelocityThreshold && isBelowDisplacementThreshold;
      } else {
        state.done = t2 >= duration;
      }
      state.value = state.done ? target : current;
      return state;
    }
  };
}
function inertia({ keyframes: keyframes2, velocity = 0, power = 0.8, timeConstant = 325, bounceDamping = 10, bounceStiffness = 500, modifyTarget, min, max, restDelta = 0.5, restSpeed }) {
  const origin = keyframes2[0];
  const state = {
    done: false,
    value: origin
  };
  const isOutOfBounds = (v) => min !== void 0 && v < min || max !== void 0 && v > max;
  const nearestBoundary = (v) => {
    if (min === void 0)
      return max;
    if (max === void 0)
      return min;
    return Math.abs(min - v) < Math.abs(max - v) ? min : max;
  };
  let amplitude = power * velocity;
  const ideal = origin + amplitude;
  const target = modifyTarget === void 0 ? ideal : modifyTarget(ideal);
  if (target !== ideal)
    amplitude = target - origin;
  const calcDelta = (t2) => -amplitude * Math.exp(-t2 / timeConstant);
  const calcLatest = (t2) => target + calcDelta(t2);
  const applyFriction = (t2) => {
    const delta = calcDelta(t2);
    const latest = calcLatest(t2);
    state.done = Math.abs(delta) <= restDelta;
    state.value = state.done ? target : latest;
  };
  let timeReachedBoundary;
  let spring$1;
  const checkCatchBoundary = (t2) => {
    if (!isOutOfBounds(state.value))
      return;
    timeReachedBoundary = t2;
    spring$1 = spring({
      keyframes: [state.value, nearestBoundary(state.value)],
      velocity: calcGeneratorVelocity(calcLatest, t2, state.value),
      damping: bounceDamping,
      stiffness: bounceStiffness,
      restDelta,
      restSpeed
    });
  };
  checkCatchBoundary(0);
  return {
    calculatedDuration: null,
    next: (t2) => {
      let hasUpdatedFrame = false;
      if (!spring$1 && timeReachedBoundary === void 0) {
        hasUpdatedFrame = true;
        applyFriction(t2);
        checkCatchBoundary(t2);
      }
      if (timeReachedBoundary !== void 0 && t2 > timeReachedBoundary) {
        return spring$1.next(t2 - timeReachedBoundary);
      } else {
        !hasUpdatedFrame && applyFriction(t2);
        return state;
      }
    }
  };
}
var frameloopDriver = (update) => {
  const passTimestamp = ({ timestamp }) => update(timestamp);
  return {
    start: () => frame.update(passTimestamp, true),
    stop: () => cancelFrame(passTimestamp),
    now: () => frameData.isProcessing ? frameData.timestamp : performance.now()
  };
};
var maxGeneratorDuration = 2e4;
function calcGeneratorDuration(generator) {
  let duration = 0;
  const timeStep = 50;
  let state = generator.next(duration);
  while (!state.done && duration < maxGeneratorDuration) {
    duration += timeStep;
    state = generator.next(duration);
  }
  return duration >= maxGeneratorDuration ? Infinity : duration;
}
var types = {
  decay: inertia,
  inertia,
  tween: keyframes,
  keyframes,
  spring
};
function animateValue({ autoplay = true, delay = 0, driver = frameloopDriver, keyframes: keyframes$1, type = "keyframes", repeat = 0, repeatDelay = 0, repeatType = "loop", onPlay, onStop, onComplete, onUpdate, ...options }) {
  let speed = 1;
  let hasStopped = false;
  let resolveFinishedPromise;
  let currentFinishedPromise;
  const updateFinishedPromise = () => {
    currentFinishedPromise = new Promise((resolve) => {
      resolveFinishedPromise = resolve;
    });
  };
  updateFinishedPromise();
  let animationDriver;
  const generatorFactory = types[type] || keyframes;
  let mapNumbersToKeyframes;
  if (generatorFactory !== keyframes && typeof keyframes$1[0] !== "number") {
    mapNumbersToKeyframes = interpolate([0, 100], keyframes$1, {
      clamp: false
    });
    keyframes$1 = [0, 100];
  }
  const generator = generatorFactory({ ...options, keyframes: keyframes$1 });
  let mirroredGenerator;
  if (repeatType === "mirror") {
    mirroredGenerator = generatorFactory({
      ...options,
      keyframes: [...keyframes$1].reverse(),
      velocity: -(options.velocity || 0)
    });
  }
  let playState = "idle";
  let holdTime = null;
  let startTime = null;
  let cancelTime = null;
  if (generator.calculatedDuration === null && repeat) {
    generator.calculatedDuration = calcGeneratorDuration(generator);
  }
  const { calculatedDuration } = generator;
  let resolvedDuration = Infinity;
  let totalDuration = Infinity;
  if (calculatedDuration !== null) {
    resolvedDuration = calculatedDuration + repeatDelay;
    totalDuration = resolvedDuration * (repeat + 1) - repeatDelay;
  }
  let currentTime = 0;
  const tick = (timestamp) => {
    if (startTime === null)
      return;
    if (speed > 0)
      startTime = Math.min(startTime, timestamp);
    if (speed < 0)
      startTime = Math.min(timestamp - totalDuration / speed, startTime);
    if (holdTime !== null) {
      currentTime = holdTime;
    } else {
      currentTime = Math.round(timestamp - startTime) * speed;
    }
    const timeWithoutDelay = currentTime - delay * (speed >= 0 ? 1 : -1);
    const isInDelayPhase = speed >= 0 ? timeWithoutDelay < 0 : timeWithoutDelay > totalDuration;
    currentTime = Math.max(timeWithoutDelay, 0);
    if (playState === "finished" && holdTime === null) {
      currentTime = totalDuration;
    }
    let elapsed = currentTime;
    let frameGenerator = generator;
    if (repeat) {
      const progress2 = Math.min(currentTime, totalDuration) / resolvedDuration;
      let currentIteration = Math.floor(progress2);
      let iterationProgress = progress2 % 1;
      if (!iterationProgress && progress2 >= 1) {
        iterationProgress = 1;
      }
      iterationProgress === 1 && currentIteration--;
      currentIteration = Math.min(currentIteration, repeat + 1);
      const isOddIteration = Boolean(currentIteration % 2);
      if (isOddIteration) {
        if (repeatType === "reverse") {
          iterationProgress = 1 - iterationProgress;
          if (repeatDelay) {
            iterationProgress -= repeatDelay / resolvedDuration;
          }
        } else if (repeatType === "mirror") {
          frameGenerator = mirroredGenerator;
        }
      }
      elapsed = clamp(0, 1, iterationProgress) * resolvedDuration;
    }
    const state = isInDelayPhase ? { done: false, value: keyframes$1[0] } : frameGenerator.next(elapsed);
    if (mapNumbersToKeyframes) {
      state.value = mapNumbersToKeyframes(state.value);
    }
    let { done } = state;
    if (!isInDelayPhase && calculatedDuration !== null) {
      done = speed >= 0 ? currentTime >= totalDuration : currentTime <= 0;
    }
    const isAnimationFinished = holdTime === null && (playState === "finished" || playState === "running" && done);
    if (onUpdate) {
      onUpdate(state.value);
    }
    if (isAnimationFinished) {
      finish();
    }
    return state;
  };
  const stopAnimationDriver = () => {
    animationDriver && animationDriver.stop();
    animationDriver = void 0;
  };
  const cancel = () => {
    playState = "idle";
    stopAnimationDriver();
    resolveFinishedPromise();
    updateFinishedPromise();
    startTime = cancelTime = null;
  };
  const finish = () => {
    playState = "finished";
    onComplete && onComplete();
    stopAnimationDriver();
    resolveFinishedPromise();
  };
  const play = () => {
    if (hasStopped)
      return;
    if (!animationDriver)
      animationDriver = driver(tick);
    const now = animationDriver.now();
    onPlay && onPlay();
    if (holdTime !== null) {
      startTime = now - holdTime;
    } else if (!startTime || playState === "finished") {
      startTime = now;
    }
    if (playState === "finished") {
      updateFinishedPromise();
    }
    cancelTime = startTime;
    holdTime = null;
    playState = "running";
    animationDriver.start();
  };
  if (autoplay) {
    play();
  }
  const controls = {
    then(resolve, reject) {
      return currentFinishedPromise.then(resolve, reject);
    },
    get time() {
      return millisecondsToSeconds(currentTime);
    },
    set time(newTime) {
      newTime = secondsToMilliseconds(newTime);
      currentTime = newTime;
      if (holdTime !== null || !animationDriver || speed === 0) {
        holdTime = newTime;
      } else {
        startTime = animationDriver.now() - newTime / speed;
      }
    },
    get duration() {
      const duration = generator.calculatedDuration === null ? calcGeneratorDuration(generator) : generator.calculatedDuration;
      return millisecondsToSeconds(duration);
    },
    get speed() {
      return speed;
    },
    set speed(newSpeed) {
      if (newSpeed === speed || !animationDriver)
        return;
      speed = newSpeed;
      controls.time = millisecondsToSeconds(currentTime);
    },
    get state() {
      return playState;
    },
    play,
    pause: () => {
      playState = "paused";
      holdTime = currentTime;
    },
    stop: () => {
      hasStopped = true;
      if (playState === "idle")
        return;
      playState = "idle";
      onStop && onStop();
      cancel();
    },
    cancel: () => {
      if (cancelTime !== null)
        tick(cancelTime);
      cancel();
    },
    complete: () => {
      playState = "finished";
    },
    sample: (elapsed) => {
      startTime = 0;
      return tick(elapsed);
    }
  };
  return controls;
}
function memo(callback) {
  let result;
  return () => {
    if (result === void 0)
      result = callback();
    return result;
  };
}
var supportsWaapi = memo(() => Object.hasOwnProperty.call(Element.prototype, "animate"));
var acceleratedValues = /* @__PURE__ */ new Set([
  "opacity",
  "clipPath",
  "filter",
  "transform",
  "backgroundColor"
]);
var sampleDelta = 10;
var maxDuration2 = 2e4;
var requiresPregeneratedKeyframes = (valueName, options) => options.type === "spring" || valueName === "backgroundColor" || !isWaapiSupportedEasing(options.ease);
function createAcceleratedAnimation(value, valueName, { onUpdate, onComplete, ...options }) {
  const canAccelerateAnimation = supportsWaapi() && acceleratedValues.has(valueName) && !options.repeatDelay && options.repeatType !== "mirror" && options.damping !== 0 && options.type !== "inertia";
  if (!canAccelerateAnimation)
    return false;
  let hasStopped = false;
  let resolveFinishedPromise;
  let currentFinishedPromise;
  let pendingCancel = false;
  const updateFinishedPromise = () => {
    currentFinishedPromise = new Promise((resolve) => {
      resolveFinishedPromise = resolve;
    });
  };
  updateFinishedPromise();
  let { keyframes: keyframes2, duration = 300, ease: ease2, times } = options;
  if (requiresPregeneratedKeyframes(valueName, options)) {
    const sampleAnimation = animateValue({
      ...options,
      repeat: 0,
      delay: 0
    });
    let state = { done: false, value: keyframes2[0] };
    const pregeneratedKeyframes = [];
    let t2 = 0;
    while (!state.done && t2 < maxDuration2) {
      state = sampleAnimation.sample(t2);
      pregeneratedKeyframes.push(state.value);
      t2 += sampleDelta;
    }
    times = void 0;
    keyframes2 = pregeneratedKeyframes;
    duration = t2 - sampleDelta;
    ease2 = "linear";
  }
  const animation = animateStyle(value.owner.current, valueName, keyframes2, {
    ...options,
    duration,
    ease: ease2,
    times
  });
  const cancelAnimation = () => {
    pendingCancel = false;
    animation.cancel();
  };
  const safeCancel = () => {
    pendingCancel = true;
    frame.update(cancelAnimation);
    resolveFinishedPromise();
    updateFinishedPromise();
  };
  animation.onfinish = () => {
    if (pendingCancel)
      return;
    value.set(getFinalKeyframe(keyframes2, options));
    onComplete && onComplete();
    safeCancel();
  };
  const controls = {
    then(resolve, reject) {
      return currentFinishedPromise.then(resolve, reject);
    },
    attachTimeline(timeline) {
      animation.timeline = timeline;
      animation.onfinish = null;
      return noop;
    },
    get time() {
      return millisecondsToSeconds(animation.currentTime || 0);
    },
    set time(newTime) {
      animation.currentTime = secondsToMilliseconds(newTime);
    },
    get speed() {
      return animation.playbackRate;
    },
    set speed(newSpeed) {
      animation.playbackRate = newSpeed;
    },
    get duration() {
      return millisecondsToSeconds(duration);
    },
    play: () => {
      if (hasStopped)
        return;
      animation.play();
      cancelFrame(cancelAnimation);
    },
    pause: () => animation.pause(),
    stop: () => {
      hasStopped = true;
      if (animation.playState === "idle")
        return;
      const { currentTime } = animation;
      if (currentTime) {
        const sampleAnimation = animateValue({
          ...options,
          autoplay: false
        });
        value.setWithVelocity(sampleAnimation.sample(currentTime - sampleDelta).value, sampleAnimation.sample(currentTime).value, sampleDelta);
      }
      safeCancel();
    },
    complete: () => {
      if (pendingCancel)
        return;
      animation.finish();
    },
    cancel: safeCancel
  };
  return controls;
}
function createInstantAnimation({ keyframes: keyframes2, delay, onUpdate, onComplete }) {
  const setValue = () => {
    onUpdate && onUpdate(keyframes2[keyframes2.length - 1]);
    onComplete && onComplete();
    return {
      time: 0,
      speed: 1,
      duration: 0,
      play: noop,
      pause: noop,
      stop: noop,
      then: (resolve) => {
        resolve();
        return Promise.resolve();
      },
      cancel: noop,
      complete: noop
    };
  };
  return delay ? animateValue({
    keyframes: [0, 1],
    duration: 0,
    delay,
    onComplete: setValue
  }) : setValue();
}
var underDampedSpring = {
  type: "spring",
  stiffness: 500,
  damping: 25,
  restSpeed: 10
};
var criticallyDampedSpring = (target) => ({
  type: "spring",
  stiffness: 550,
  damping: target === 0 ? 2 * Math.sqrt(550) : 30,
  restSpeed: 10
});
var keyframesTransition = {
  type: "keyframes",
  duration: 0.8
};
var ease = {
  type: "keyframes",
  ease: [0.25, 0.1, 0.35, 1],
  duration: 0.3
};
var getDefaultTransition = (valueKey, { keyframes: keyframes2 }) => {
  if (keyframes2.length > 2) {
    return keyframesTransition;
  } else if (transformProps.has(valueKey)) {
    return valueKey.startsWith("scale") ? criticallyDampedSpring(keyframes2[1]) : underDampedSpring;
  }
  return ease;
};
var isAnimatable = (key, value) => {
  if (key === "zIndex")
    return false;
  if (typeof value === "number" || Array.isArray(value))
    return true;
  if (typeof value === "string" && (complex.test(value) || value === "0") && !value.startsWith("url(")) {
    return true;
  }
  return false;
};
var maxDefaults = /* @__PURE__ */ new Set(["brightness", "contrast", "saturate", "opacity"]);
function applyDefaultFilter(v) {
  const [name, value] = v.slice(0, -1).split("(");
  if (name === "drop-shadow")
    return v;
  const [number2] = value.match(floatRegex) || [];
  if (!number2)
    return v;
  const unit = value.replace(number2, "");
  let defaultValue = maxDefaults.has(name) ? 1 : 0;
  if (number2 !== value)
    defaultValue *= 100;
  return name + "(" + defaultValue + unit + ")";
}
var functionRegex = /([a-z-]*)\(.*?\)/g;
var filter = {
  ...complex,
  getAnimatableNone: (v) => {
    const functions = v.match(functionRegex);
    return functions ? functions.map(applyDefaultFilter).join(" ") : v;
  }
};
var defaultValueTypes = {
  ...numberValueTypes,
  color,
  backgroundColor: color,
  outlineColor: color,
  fill: color,
  stroke: color,
  borderColor: color,
  borderTopColor: color,
  borderRightColor: color,
  borderBottomColor: color,
  borderLeftColor: color,
  filter,
  WebkitFilter: filter
};
var getDefaultValueType = (key) => defaultValueTypes[key];
function getAnimatableNone2(key, value) {
  let defaultValueType = getDefaultValueType(key);
  if (defaultValueType !== filter)
    defaultValueType = complex;
  return defaultValueType.getAnimatableNone ? defaultValueType.getAnimatableNone(value) : void 0;
}
var isZeroValueString = (v) => /^0[^.\s]+$/.test(v);
function isNone(value) {
  if (typeof value === "number") {
    return value === 0;
  } else if (value !== null) {
    return value === "none" || value === "0" || isZeroValueString(value);
  }
}
function getKeyframes(value, valueName, target, transition2) {
  const isTargetAnimatable = isAnimatable(valueName, target);
  let keyframes2;
  if (Array.isArray(target)) {
    keyframes2 = [...target];
  } else {
    keyframes2 = [null, target];
  }
  const defaultOrigin = transition2.from !== void 0 ? transition2.from : value.get();
  let animatableTemplateValue = void 0;
  const noneKeyframeIndexes = [];
  for (let i = 0; i < keyframes2.length; i++) {
    if (keyframes2[i] === null) {
      keyframes2[i] = i === 0 ? defaultOrigin : keyframes2[i - 1];
    }
    if (isNone(keyframes2[i])) {
      noneKeyframeIndexes.push(i);
    }
    if (typeof keyframes2[i] === "string" && keyframes2[i] !== "none" && keyframes2[i] !== "0") {
      animatableTemplateValue = keyframes2[i];
    }
  }
  if (isTargetAnimatable && noneKeyframeIndexes.length && animatableTemplateValue) {
    for (let i = 0; i < noneKeyframeIndexes.length; i++) {
      const index2 = noneKeyframeIndexes[i];
      keyframes2[index2] = getAnimatableNone2(valueName, animatableTemplateValue);
    }
  }
  return keyframes2;
}
function isTransitionDefined({ when, delay: _delay, delayChildren, staggerChildren, staggerDirection, repeat, repeatType, repeatDelay, from, elapsed, ...transition2 }) {
  return !!Object.keys(transition2).length;
}
function getValueTransition(transition2, key) {
  return transition2[key] || transition2["default"] || transition2;
}
var MotionGlobalConfig = {
  skipAnimations: false
};
var animateMotionValue = (valueName, value, target, transition2 = {}) => {
  return (onComplete) => {
    const valueTransition = getValueTransition(transition2, valueName) || {};
    const delay = valueTransition.delay || transition2.delay || 0;
    let { elapsed = 0 } = transition2;
    elapsed = elapsed - secondsToMilliseconds(delay);
    const keyframes2 = getKeyframes(value, valueName, target, valueTransition);
    const originKeyframe = keyframes2[0];
    const targetKeyframe = keyframes2[keyframes2.length - 1];
    const isOriginAnimatable = isAnimatable(valueName, originKeyframe);
    const isTargetAnimatable = isAnimatable(valueName, targetKeyframe);
    let options = {
      keyframes: keyframes2,
      velocity: value.getVelocity(),
      ease: "easeOut",
      ...valueTransition,
      delay: -elapsed,
      onUpdate: (v) => {
        value.set(v);
        valueTransition.onUpdate && valueTransition.onUpdate(v);
      },
      onComplete: () => {
        onComplete();
        valueTransition.onComplete && valueTransition.onComplete();
      }
    };
    if (!isTransitionDefined(valueTransition)) {
      options = {
        ...options,
        ...getDefaultTransition(valueName, options)
      };
    }
    if (options.duration) {
      options.duration = secondsToMilliseconds(options.duration);
    }
    if (options.repeatDelay) {
      options.repeatDelay = secondsToMilliseconds(options.repeatDelay);
    }
    if (!isOriginAnimatable || !isTargetAnimatable || instantAnimationState.current || valueTransition.type === false || MotionGlobalConfig.skipAnimations) {
      return createInstantAnimation(options);
    }
    if (!transition2.isHandoff && value.owner && value.owner.current instanceof HTMLElement && !value.owner.getProps().onUpdate) {
      const acceleratedAnimation = createAcceleratedAnimation(value, valueName, options);
      if (acceleratedAnimation)
        return acceleratedAnimation;
    }
    return animateValue(options);
  };
};
function isWillChangeMotionValue(value) {
  return Boolean(isMotionValue(value) && value.add);
}
var isNumericalString = (v) => /^\-?\d*\.?\d+$/.test(v);
function addUniqueItem(arr, item) {
  if (arr.indexOf(item) === -1)
    arr.push(item);
}
function removeItem(arr, item) {
  const index2 = arr.indexOf(item);
  if (index2 > -1)
    arr.splice(index2, 1);
}
var SubscriptionManager = class {
  constructor() {
    this.subscriptions = [];
  }
  add(handler) {
    addUniqueItem(this.subscriptions, handler);
    return () => removeItem(this.subscriptions, handler);
  }
  notify(a, b, c) {
    const numSubscriptions = this.subscriptions.length;
    if (!numSubscriptions)
      return;
    if (numSubscriptions === 1) {
      this.subscriptions[0](a, b, c);
    } else {
      for (let i = 0; i < numSubscriptions; i++) {
        const handler = this.subscriptions[i];
        handler && handler(a, b, c);
      }
    }
  }
  getSize() {
    return this.subscriptions.length;
  }
  clear() {
    this.subscriptions.length = 0;
  }
};
var isFloat = (value) => {
  return !isNaN(parseFloat(value));
};
var MotionValue = class {
  constructor(init, options = {}) {
    this.version = "10.18.0";
    this.timeDelta = 0;
    this.lastUpdated = 0;
    this.canTrackVelocity = false;
    this.events = {};
    this.updateAndNotify = (v, render = true) => {
      this.prev = this.current;
      this.current = v;
      const { delta, timestamp } = frameData;
      if (this.lastUpdated !== timestamp) {
        this.timeDelta = delta;
        this.lastUpdated = timestamp;
        frame.postRender(this.scheduleVelocityCheck);
      }
      if (this.prev !== this.current && this.events.change) {
        this.events.change.notify(this.current);
      }
      if (this.events.velocityChange) {
        this.events.velocityChange.notify(this.getVelocity());
      }
      if (render && this.events.renderRequest) {
        this.events.renderRequest.notify(this.current);
      }
    };
    this.scheduleVelocityCheck = () => frame.postRender(this.velocityCheck);
    this.velocityCheck = ({ timestamp }) => {
      if (timestamp !== this.lastUpdated) {
        this.prev = this.current;
        if (this.events.velocityChange) {
          this.events.velocityChange.notify(this.getVelocity());
        }
      }
    };
    this.hasAnimated = false;
    this.prev = this.current = init;
    this.canTrackVelocity = isFloat(this.current);
    this.owner = options.owner;
  }
  onChange(subscription) {
    return this.on("change", subscription);
  }
  on(eventName, callback) {
    if (!this.events[eventName]) {
      this.events[eventName] = new SubscriptionManager();
    }
    const unsubscribe = this.events[eventName].add(callback);
    if (eventName === "change") {
      return () => {
        unsubscribe();
        frame.read(() => {
          if (!this.events.change.getSize()) {
            this.stop();
          }
        });
      };
    }
    return unsubscribe;
  }
  clearListeners() {
    for (const eventManagers in this.events) {
      this.events[eventManagers].clear();
    }
  }
  attach(passiveEffect, stopPassiveEffect) {
    this.passiveEffect = passiveEffect;
    this.stopPassiveEffect = stopPassiveEffect;
  }
  set(v, render = true) {
    if (!render || !this.passiveEffect) {
      this.updateAndNotify(v, render);
    } else {
      this.passiveEffect(v, this.updateAndNotify);
    }
  }
  setWithVelocity(prev, current, delta) {
    this.set(current);
    this.prev = prev;
    this.timeDelta = delta;
  }
  jump(v) {
    this.updateAndNotify(v);
    this.prev = v;
    this.stop();
    if (this.stopPassiveEffect)
      this.stopPassiveEffect();
  }
  get() {
    return this.current;
  }
  getPrevious() {
    return this.prev;
  }
  getVelocity() {
    return this.canTrackVelocity ? velocityPerSecond(parseFloat(this.current) - parseFloat(this.prev), this.timeDelta) : 0;
  }
  start(startAnimation) {
    this.stop();
    return new Promise((resolve) => {
      this.hasAnimated = true;
      this.animation = startAnimation(resolve);
      if (this.events.animationStart) {
        this.events.animationStart.notify();
      }
    }).then(() => {
      if (this.events.animationComplete) {
        this.events.animationComplete.notify();
      }
      this.clearAnimation();
    });
  }
  stop() {
    if (this.animation) {
      this.animation.stop();
      if (this.events.animationCancel) {
        this.events.animationCancel.notify();
      }
    }
    this.clearAnimation();
  }
  isAnimating() {
    return !!this.animation;
  }
  clearAnimation() {
    delete this.animation;
  }
  destroy() {
    this.clearListeners();
    this.stop();
    if (this.stopPassiveEffect) {
      this.stopPassiveEffect();
    }
  }
};
function motionValue(init, options) {
  return new MotionValue(init, options);
}
var testValueType = (v) => (type) => type.test(v);
var auto = {
  test: (v) => v === "auto",
  parse: (v) => v
};
var dimensionValueTypes = [number, px, percent, degrees, vw, vh, auto];
var findDimensionValueType = (v) => dimensionValueTypes.find(testValueType(v));
var valueTypes = [...dimensionValueTypes, color, complex];
var findValueType = (v) => valueTypes.find(testValueType(v));
function setMotionValue(visualElement, key, value) {
  if (visualElement.hasValue(key)) {
    visualElement.getValue(key).set(value);
  } else {
    visualElement.addValue(key, motionValue(value));
  }
}
function setTarget(visualElement, definition) {
  const resolved = resolveVariant(visualElement, definition);
  let { transitionEnd = {}, transition: transition2 = {}, ...target } = resolved ? visualElement.makeTargetAnimatable(resolved, false) : {};
  target = { ...target, ...transitionEnd };
  for (const key in target) {
    const value = resolveFinalValueInKeyframes(target[key]);
    setMotionValue(visualElement, key, value);
  }
}
function checkTargetForNewValues(visualElement, target, origin) {
  var _a, _b;
  const newValueKeys = Object.keys(target).filter((key) => !visualElement.hasValue(key));
  const numNewValues = newValueKeys.length;
  if (!numNewValues)
    return;
  for (let i = 0; i < numNewValues; i++) {
    const key = newValueKeys[i];
    const targetValue = target[key];
    let value = null;
    if (Array.isArray(targetValue)) {
      value = targetValue[0];
    }
    if (value === null) {
      value = (_b = (_a = origin[key]) !== null && _a !== void 0 ? _a : visualElement.readValue(key)) !== null && _b !== void 0 ? _b : target[key];
    }
    if (value === void 0 || value === null)
      continue;
    if (typeof value === "string" && (isNumericalString(value) || isZeroValueString(value))) {
      value = parseFloat(value);
    } else if (!findValueType(value) && complex.test(targetValue)) {
      value = getAnimatableNone2(key, targetValue);
    }
    visualElement.addValue(key, motionValue(value, { owner: visualElement }));
    if (origin[key] === void 0) {
      origin[key] = value;
    }
    if (value !== null)
      visualElement.setBaseTarget(key, value);
  }
}
function getOriginFromTransition(key, transition2) {
  if (!transition2)
    return;
  const valueTransition = transition2[key] || transition2["default"] || transition2;
  return valueTransition.from;
}
function getOrigin(target, transition2, visualElement) {
  const origin = {};
  for (const key in target) {
    const transitionOrigin = getOriginFromTransition(key, transition2);
    if (transitionOrigin !== void 0) {
      origin[key] = transitionOrigin;
    } else {
      const value = visualElement.getValue(key);
      if (value) {
        origin[key] = value.get();
      }
    }
  }
  return origin;
}
function shouldBlockAnimation({ protectedKeys, needsAnimating }, key) {
  const shouldBlock = protectedKeys.hasOwnProperty(key) && needsAnimating[key] !== true;
  needsAnimating[key] = false;
  return shouldBlock;
}
function hasKeyframesChanged(value, target) {
  const current = value.get();
  if (Array.isArray(target)) {
    for (let i = 0; i < target.length; i++) {
      if (target[i] !== current)
        return true;
    }
  } else {
    return current !== target;
  }
}
function animateTarget(visualElement, definition, { delay = 0, transitionOverride, type } = {}) {
  let { transition: transition2 = visualElement.getDefaultTransition(), transitionEnd, ...target } = visualElement.makeTargetAnimatable(definition);
  const willChange = visualElement.getValue("willChange");
  if (transitionOverride)
    transition2 = transitionOverride;
  const animations2 = [];
  const animationTypeState = type && visualElement.animationState && visualElement.animationState.getState()[type];
  for (const key in target) {
    const value = visualElement.getValue(key);
    const valueTarget = target[key];
    if (!value || valueTarget === void 0 || animationTypeState && shouldBlockAnimation(animationTypeState, key)) {
      continue;
    }
    const valueTransition = {
      delay,
      elapsed: 0,
      ...getValueTransition(transition2 || {}, key)
    };
    if (window.HandoffAppearAnimations) {
      const appearId = visualElement.getProps()[optimizedAppearDataAttribute];
      if (appearId) {
        const elapsed = window.HandoffAppearAnimations(appearId, key, value, frame);
        if (elapsed !== null) {
          valueTransition.elapsed = elapsed;
          valueTransition.isHandoff = true;
        }
      }
    }
    let canSkip = !valueTransition.isHandoff && !hasKeyframesChanged(value, valueTarget);
    if (valueTransition.type === "spring" && (value.getVelocity() || valueTransition.velocity)) {
      canSkip = false;
    }
    if (value.animation) {
      canSkip = false;
    }
    if (canSkip)
      continue;
    value.start(animateMotionValue(key, value, valueTarget, visualElement.shouldReduceMotion && transformProps.has(key) ? { type: false } : valueTransition));
    const animation = value.animation;
    if (isWillChangeMotionValue(willChange)) {
      willChange.add(key);
      animation.then(() => willChange.remove(key));
    }
    animations2.push(animation);
  }
  if (transitionEnd) {
    Promise.all(animations2).then(() => {
      transitionEnd && setTarget(visualElement, transitionEnd);
    });
  }
  return animations2;
}
function animateVariant(visualElement, variant, options = {}) {
  const resolved = resolveVariant(visualElement, variant, options.custom);
  let { transition: transition2 = visualElement.getDefaultTransition() || {} } = resolved || {};
  if (options.transitionOverride) {
    transition2 = options.transitionOverride;
  }
  const getAnimation = resolved ? () => Promise.all(animateTarget(visualElement, resolved, options)) : () => Promise.resolve();
  const getChildAnimations = visualElement.variantChildren && visualElement.variantChildren.size ? (forwardDelay = 0) => {
    const { delayChildren = 0, staggerChildren, staggerDirection } = transition2;
    return animateChildren(visualElement, variant, delayChildren + forwardDelay, staggerChildren, staggerDirection, options);
  } : () => Promise.resolve();
  const { when } = transition2;
  if (when) {
    const [first, last] = when === "beforeChildren" ? [getAnimation, getChildAnimations] : [getChildAnimations, getAnimation];
    return first().then(() => last());
  } else {
    return Promise.all([getAnimation(), getChildAnimations(options.delay)]);
  }
}
function animateChildren(visualElement, variant, delayChildren = 0, staggerChildren = 0, staggerDirection = 1, options) {
  const animations2 = [];
  const maxStaggerDuration = (visualElement.variantChildren.size - 1) * staggerChildren;
  const generateStaggerDuration = staggerDirection === 1 ? (i = 0) => i * staggerChildren : (i = 0) => maxStaggerDuration - i * staggerChildren;
  Array.from(visualElement.variantChildren).sort(sortByTreeOrder).forEach((child, i) => {
    child.notify("AnimationStart", variant);
    animations2.push(animateVariant(child, variant, {
      ...options,
      delay: delayChildren + generateStaggerDuration(i)
    }).then(() => child.notify("AnimationComplete", variant)));
  });
  return Promise.all(animations2);
}
function sortByTreeOrder(a, b) {
  return a.sortNodePosition(b);
}
function animateVisualElement(visualElement, definition, options = {}) {
  visualElement.notify("AnimationStart", definition);
  let animation;
  if (Array.isArray(definition)) {
    const animations2 = definition.map((variant) => animateVariant(visualElement, variant, options));
    animation = Promise.all(animations2);
  } else if (typeof definition === "string") {
    animation = animateVariant(visualElement, definition, options);
  } else {
    const resolvedDefinition = typeof definition === "function" ? resolveVariant(visualElement, definition, options.custom) : definition;
    animation = Promise.all(animateTarget(visualElement, resolvedDefinition, options));
  }
  return animation.then(() => visualElement.notify("AnimationComplete", definition));
}
var reversePriorityOrder = [...variantPriorityOrder].reverse();
var numAnimationTypes = variantPriorityOrder.length;
function animateList(visualElement) {
  return (animations2) => Promise.all(animations2.map(({ animation, options }) => animateVisualElement(visualElement, animation, options)));
}
function createAnimationState(visualElement) {
  let animate = animateList(visualElement);
  const state = createState();
  let isInitialRender = true;
  const buildResolvedTypeValues = (acc, definition) => {
    const resolved = resolveVariant(visualElement, definition);
    if (resolved) {
      const { transition: transition2, transitionEnd, ...target } = resolved;
      acc = { ...acc, ...target, ...transitionEnd };
    }
    return acc;
  };
  function setAnimateFunction(makeAnimator) {
    animate = makeAnimator(visualElement);
  }
  function animateChanges(options, changedActiveType) {
    const props = visualElement.getProps();
    const context = visualElement.getVariantContext(true) || {};
    const animations2 = [];
    const removedKeys = /* @__PURE__ */ new Set();
    let encounteredKeys = {};
    let removedVariantIndex = Infinity;
    for (let i = 0; i < numAnimationTypes; i++) {
      const type = reversePriorityOrder[i];
      const typeState = state[type];
      const prop = props[type] !== void 0 ? props[type] : context[type];
      const propIsVariant = isVariantLabel(prop);
      const activeDelta = type === changedActiveType ? typeState.isActive : null;
      if (activeDelta === false)
        removedVariantIndex = i;
      let isInherited = prop === context[type] && prop !== props[type] && propIsVariant;
      if (isInherited && isInitialRender && visualElement.manuallyAnimateOnMount) {
        isInherited = false;
      }
      typeState.protectedKeys = { ...encounteredKeys };
      if (!typeState.isActive && activeDelta === null || !prop && !typeState.prevProp || isAnimationControls(prop) || typeof prop === "boolean") {
        continue;
      }
      const variantDidChange = checkVariantsDidChange(typeState.prevProp, prop);
      let shouldAnimateType = variantDidChange || type === changedActiveType && typeState.isActive && !isInherited && propIsVariant || i > removedVariantIndex && propIsVariant;
      let handledRemovedValues = false;
      const definitionList = Array.isArray(prop) ? prop : [prop];
      let resolvedValues = definitionList.reduce(buildResolvedTypeValues, {});
      if (activeDelta === false)
        resolvedValues = {};
      const { prevResolvedValues = {} } = typeState;
      const allKeys = {
        ...prevResolvedValues,
        ...resolvedValues
      };
      const markToAnimate = (key) => {
        shouldAnimateType = true;
        if (removedKeys.has(key)) {
          handledRemovedValues = true;
          removedKeys.delete(key);
        }
        typeState.needsAnimating[key] = true;
      };
      for (const key in allKeys) {
        const next = resolvedValues[key];
        const prev = prevResolvedValues[key];
        if (encounteredKeys.hasOwnProperty(key))
          continue;
        let valueHasChanged = false;
        if (isKeyframesTarget(next) && isKeyframesTarget(prev)) {
          valueHasChanged = !shallowCompare(next, prev);
        } else {
          valueHasChanged = next !== prev;
        }
        if (valueHasChanged) {
          if (next !== void 0) {
            markToAnimate(key);
          } else {
            removedKeys.add(key);
          }
        } else if (next !== void 0 && removedKeys.has(key)) {
          markToAnimate(key);
        } else {
          typeState.protectedKeys[key] = true;
        }
      }
      typeState.prevProp = prop;
      typeState.prevResolvedValues = resolvedValues;
      if (typeState.isActive) {
        encounteredKeys = { ...encounteredKeys, ...resolvedValues };
      }
      if (isInitialRender && visualElement.blockInitialAnimation) {
        shouldAnimateType = false;
      }
      if (shouldAnimateType && (!isInherited || handledRemovedValues)) {
        animations2.push(...definitionList.map((animation) => ({
          animation,
          options: { type, ...options }
        })));
      }
    }
    if (removedKeys.size) {
      const fallbackAnimation = {};
      removedKeys.forEach((key) => {
        const fallbackTarget = visualElement.getBaseTarget(key);
        if (fallbackTarget !== void 0) {
          fallbackAnimation[key] = fallbackTarget;
        }
      });
      animations2.push({ animation: fallbackAnimation });
    }
    let shouldAnimate = Boolean(animations2.length);
    if (isInitialRender && (props.initial === false || props.initial === props.animate) && !visualElement.manuallyAnimateOnMount) {
      shouldAnimate = false;
    }
    isInitialRender = false;
    return shouldAnimate ? animate(animations2) : Promise.resolve();
  }
  function setActive(type, isActive, options) {
    var _a;
    if (state[type].isActive === isActive)
      return Promise.resolve();
    (_a = visualElement.variantChildren) === null || _a === void 0 ? void 0 : _a.forEach((child) => {
      var _a2;
      return (_a2 = child.animationState) === null || _a2 === void 0 ? void 0 : _a2.setActive(type, isActive);
    });
    state[type].isActive = isActive;
    const animations2 = animateChanges(options, type);
    for (const key in state) {
      state[key].protectedKeys = {};
    }
    return animations2;
  }
  return {
    animateChanges,
    setActive,
    setAnimateFunction,
    getState: () => state
  };
}
function checkVariantsDidChange(prev, next) {
  if (typeof next === "string") {
    return next !== prev;
  } else if (Array.isArray(next)) {
    return !shallowCompare(next, prev);
  }
  return false;
}
function createTypeState(isActive = false) {
  return {
    isActive,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {}
  };
}
function createState() {
  return {
    animate: createTypeState(true),
    whileInView: createTypeState(),
    whileHover: createTypeState(),
    whileTap: createTypeState(),
    whileDrag: createTypeState(),
    whileFocus: createTypeState(),
    exit: createTypeState()
  };
}
var Feature = class {
  constructor(node) {
    this.isMounted = false;
    this.node = node;
  }
  update() {
  }
};
var AnimationFeature = class extends Feature {
  constructor(node) {
    super(node);
    node.animationState || (node.animationState = createAnimationState(node));
  }
  updateAnimationControlsSubscription() {
    const { animate } = this.node.getProps();
    this.unmount();
    if (isAnimationControls(animate)) {
      this.unmount = animate.subscribe(this.node);
    }
  }
  mount() {
    this.updateAnimationControlsSubscription();
  }
  update() {
    const { animate } = this.node.getProps();
    const { animate: prevAnimate } = this.node.prevProps || {};
    if (animate !== prevAnimate) {
      this.updateAnimationControlsSubscription();
    }
  }
  unmount() {
  }
};
var id = 0;
var ExitAnimationFeature = class extends Feature {
  constructor() {
    super(...arguments);
    this.id = id++;
  }
  update() {
    if (!this.node.presenceContext)
      return;
    const { isPresent, onExitComplete, custom } = this.node.presenceContext;
    const { isPresent: prevIsPresent } = this.node.prevPresenceContext || {};
    if (!this.node.animationState || isPresent === prevIsPresent) {
      return;
    }
    const exitAnimation = this.node.animationState.setActive("exit", !isPresent, { custom: custom !== null && custom !== void 0 ? custom : this.node.getProps().custom });
    if (onExitComplete && !isPresent) {
      exitAnimation.then(() => onExitComplete(this.id));
    }
  }
  mount() {
    const { register } = this.node.presenceContext || {};
    if (register) {
      this.unmount = register(this.id);
    }
  }
  unmount() {
  }
};
var animations = {
  animation: {
    Feature: AnimationFeature
  },
  exit: {
    Feature: ExitAnimationFeature
  }
};
function addDomEvent(target, eventName, handler, options = { passive: true }) {
  target.addEventListener(eventName, handler, options);
  return () => target.removeEventListener(eventName, handler);
}
var isPrimaryPointer = (event) => {
  if (event.pointerType === "mouse") {
    return typeof event.button !== "number" || event.button <= 0;
  } else {
    return event.isPrimary !== false;
  }
};
function extractEventInfo(event, pointType = "page") {
  return {
    point: {
      x: event[pointType + "X"],
      y: event[pointType + "Y"]
    }
  };
}
var addPointerInfo = (handler) => {
  return (event) => isPrimaryPointer(event) && handler(event, extractEventInfo(event));
};
function addPointerEvent(target, eventName, handler, options) {
  return addDomEvent(target, eventName, addPointerInfo(handler), options);
}
function createLock(name) {
  let lock = null;
  return () => {
    const openLock = () => {
      lock = null;
    };
    if (lock === null) {
      lock = name;
      return openLock;
    }
    return false;
  };
}
var globalHorizontalLock = createLock("dragHorizontal");
var globalVerticalLock = createLock("dragVertical");
function getGlobalLock(drag) {
  let lock = false;
  {
    const openHorizontal = globalHorizontalLock();
    const openVertical = globalVerticalLock();
    if (openHorizontal && openVertical) {
      lock = () => {
        openHorizontal();
        openVertical();
      };
    } else {
      if (openHorizontal)
        openHorizontal();
      if (openVertical)
        openVertical();
    }
  }
  return lock;
}
function isDragActive() {
  const openGestureLock = getGlobalLock();
  if (!openGestureLock)
    return true;
  openGestureLock();
  return false;
}
function addHoverEvent(node, isActive) {
  const eventName = "pointer" + (isActive ? "enter" : "leave");
  const callbackName = "onHover" + (isActive ? "Start" : "End");
  const handleEvent = (event, info) => {
    if (event.pointerType === "touch" || isDragActive())
      return;
    const props = node.getProps();
    if (node.animationState && props.whileHover) {
      node.animationState.setActive("whileHover", isActive);
    }
    if (props[callbackName]) {
      frame.update(() => props[callbackName](event, info));
    }
  };
  return addPointerEvent(node.current, eventName, handleEvent, {
    passive: !node.getProps()[callbackName]
  });
}
var HoverGesture = class extends Feature {
  mount() {
    this.unmount = pipe(addHoverEvent(this.node, true), addHoverEvent(this.node, false));
  }
  unmount() {
  }
};
var FocusGesture = class extends Feature {
  constructor() {
    super(...arguments);
    this.isActive = false;
  }
  onFocus() {
    let isFocusVisible = false;
    try {
      isFocusVisible = this.node.current.matches(":focus-visible");
    } catch (e) {
      isFocusVisible = true;
    }
    if (!isFocusVisible || !this.node.animationState)
      return;
    this.node.animationState.setActive("whileFocus", true);
    this.isActive = true;
  }
  onBlur() {
    if (!this.isActive || !this.node.animationState)
      return;
    this.node.animationState.setActive("whileFocus", false);
    this.isActive = false;
  }
  mount() {
    this.unmount = pipe(addDomEvent(this.node.current, "focus", () => this.onFocus()), addDomEvent(this.node.current, "blur", () => this.onBlur()));
  }
  unmount() {
  }
};
var isNodeOrChild = (parent, child) => {
  if (!child) {
    return false;
  } else if (parent === child) {
    return true;
  } else {
    return isNodeOrChild(parent, child.parentElement);
  }
};
function fireSyntheticPointerEvent(name, handler) {
  if (!handler)
    return;
  const syntheticPointerEvent = new PointerEvent("pointer" + name);
  handler(syntheticPointerEvent, extractEventInfo(syntheticPointerEvent));
}
var PressGesture = class extends Feature {
  constructor() {
    super(...arguments);
    this.removeStartListeners = noop;
    this.removeEndListeners = noop;
    this.removeAccessibleListeners = noop;
    this.startPointerPress = (startEvent, startInfo) => {
      if (this.isPressing)
        return;
      this.removeEndListeners();
      const props = this.node.getProps();
      const endPointerPress = (endEvent, endInfo) => {
        if (!this.checkPressEnd())
          return;
        const { onTap, onTapCancel, globalTapTarget } = this.node.getProps();
        frame.update(() => {
          !globalTapTarget && !isNodeOrChild(this.node.current, endEvent.target) ? onTapCancel && onTapCancel(endEvent, endInfo) : onTap && onTap(endEvent, endInfo);
        });
      };
      const removePointerUpListener = addPointerEvent(window, "pointerup", endPointerPress, { passive: !(props.onTap || props["onPointerUp"]) });
      const removePointerCancelListener = addPointerEvent(window, "pointercancel", (cancelEvent, cancelInfo) => this.cancelPress(cancelEvent, cancelInfo), { passive: !(props.onTapCancel || props["onPointerCancel"]) });
      this.removeEndListeners = pipe(removePointerUpListener, removePointerCancelListener);
      this.startPress(startEvent, startInfo);
    };
    this.startAccessiblePress = () => {
      const handleKeydown = (keydownEvent) => {
        if (keydownEvent.key !== "Enter" || this.isPressing)
          return;
        const handleKeyup = (keyupEvent) => {
          if (keyupEvent.key !== "Enter" || !this.checkPressEnd())
            return;
          fireSyntheticPointerEvent("up", (event, info) => {
            const { onTap } = this.node.getProps();
            if (onTap) {
              frame.update(() => onTap(event, info));
            }
          });
        };
        this.removeEndListeners();
        this.removeEndListeners = addDomEvent(this.node.current, "keyup", handleKeyup);
        fireSyntheticPointerEvent("down", (event, info) => {
          this.startPress(event, info);
        });
      };
      const removeKeydownListener = addDomEvent(this.node.current, "keydown", handleKeydown);
      const handleBlur = () => {
        if (!this.isPressing)
          return;
        fireSyntheticPointerEvent("cancel", (cancelEvent, cancelInfo) => this.cancelPress(cancelEvent, cancelInfo));
      };
      const removeBlurListener = addDomEvent(this.node.current, "blur", handleBlur);
      this.removeAccessibleListeners = pipe(removeKeydownListener, removeBlurListener);
    };
  }
  startPress(event, info) {
    this.isPressing = true;
    const { onTapStart, whileTap } = this.node.getProps();
    if (whileTap && this.node.animationState) {
      this.node.animationState.setActive("whileTap", true);
    }
    if (onTapStart) {
      frame.update(() => onTapStart(event, info));
    }
  }
  checkPressEnd() {
    this.removeEndListeners();
    this.isPressing = false;
    const props = this.node.getProps();
    if (props.whileTap && this.node.animationState) {
      this.node.animationState.setActive("whileTap", false);
    }
    return !isDragActive();
  }
  cancelPress(event, info) {
    if (!this.checkPressEnd())
      return;
    const { onTapCancel } = this.node.getProps();
    if (onTapCancel) {
      frame.update(() => onTapCancel(event, info));
    }
  }
  mount() {
    const props = this.node.getProps();
    const removePointerListener = addPointerEvent(props.globalTapTarget ? window : this.node.current, "pointerdown", this.startPointerPress, { passive: !(props.onTapStart || props["onPointerStart"]) });
    const removeFocusListener = addDomEvent(this.node.current, "focus", this.startAccessiblePress);
    this.removeStartListeners = pipe(removePointerListener, removeFocusListener);
  }
  unmount() {
    this.removeStartListeners();
    this.removeEndListeners();
    this.removeAccessibleListeners();
  }
};
var observerCallbacks = /* @__PURE__ */ new WeakMap();
var observers = /* @__PURE__ */ new WeakMap();
var fireObserverCallback = (entry) => {
  const callback = observerCallbacks.get(entry.target);
  callback && callback(entry);
};
var fireAllObserverCallbacks = (entries) => {
  entries.forEach(fireObserverCallback);
};
function initIntersectionObserver({ root, ...options }) {
  const lookupRoot = root || document;
  if (!observers.has(lookupRoot)) {
    observers.set(lookupRoot, {});
  }
  const rootObservers = observers.get(lookupRoot);
  const key = JSON.stringify(options);
  if (!rootObservers[key]) {
    rootObservers[key] = new IntersectionObserver(fireAllObserverCallbacks, { root, ...options });
  }
  return rootObservers[key];
}
function observeIntersection(element, options, callback) {
  const rootInteresectionObserver = initIntersectionObserver(options);
  observerCallbacks.set(element, callback);
  rootInteresectionObserver.observe(element);
  return () => {
    observerCallbacks.delete(element);
    rootInteresectionObserver.unobserve(element);
  };
}
var thresholdNames = {
  some: 0,
  all: 1
};
var InViewFeature = class extends Feature {
  constructor() {
    super(...arguments);
    this.hasEnteredView = false;
    this.isInView = false;
  }
  startObserver() {
    this.unmount();
    const { viewport = {} } = this.node.getProps();
    const { root, margin: rootMargin, amount = "some", once } = viewport;
    const options = {
      root: root ? root.current : void 0,
      rootMargin,
      threshold: typeof amount === "number" ? amount : thresholdNames[amount]
    };
    const onIntersectionUpdate = (entry) => {
      const { isIntersecting } = entry;
      if (this.isInView === isIntersecting)
        return;
      this.isInView = isIntersecting;
      if (once && !isIntersecting && this.hasEnteredView) {
        return;
      } else if (isIntersecting) {
        this.hasEnteredView = true;
      }
      if (this.node.animationState) {
        this.node.animationState.setActive("whileInView", isIntersecting);
      }
      const { onViewportEnter, onViewportLeave } = this.node.getProps();
      const callback = isIntersecting ? onViewportEnter : onViewportLeave;
      callback && callback(entry);
    };
    return observeIntersection(this.node.current, options, onIntersectionUpdate);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver === "undefined")
      return;
    const { props, prevProps } = this.node;
    const hasOptionsChanged = ["amount", "margin", "root"].some(hasViewportOptionChanged(props, prevProps));
    if (hasOptionsChanged) {
      this.startObserver();
    }
  }
  unmount() {
  }
};
function hasViewportOptionChanged({ viewport = {} }, { viewport: prevViewport = {} } = {}) {
  return (name) => viewport[name] !== prevViewport[name];
}
var gestureAnimations = {
  inView: {
    Feature: InViewFeature
  },
  tap: {
    Feature: PressGesture
  },
  focus: {
    Feature: FocusGesture
  },
  hover: {
    Feature: HoverGesture
  }
};
function convertBoundingBoxToBox({ top, left, right, bottom }) {
  return {
    x: { min: left, max: right },
    y: { min: top, max: bottom }
  };
}
function transformBoxPoints(point, transformPoint) {
  if (!transformPoint)
    return point;
  const topLeft = transformPoint({ x: point.left, y: point.top });
  const bottomRight = transformPoint({ x: point.right, y: point.bottom });
  return {
    top: topLeft.y,
    left: topLeft.x,
    bottom: bottomRight.y,
    right: bottomRight.x
  };
}
function measureViewportBox(instance, transformPoint) {
  return convertBoundingBoxToBox(transformBoxPoints(instance.getBoundingClientRect(), transformPoint));
}
var splitCSSVariableRegex = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;
function parseCSSVariable(current) {
  const match = splitCSSVariableRegex.exec(current);
  if (!match)
    return [,];
  const [, token, fallback] = match;
  return [token, fallback];
}
function getVariableValue(current, element, depth = 1) {
  const [token, fallback] = parseCSSVariable(current);
  if (!token)
    return;
  const resolved = window.getComputedStyle(element).getPropertyValue(token);
  if (resolved) {
    const trimmed = resolved.trim();
    return isNumericalString(trimmed) ? parseFloat(trimmed) : trimmed;
  } else if (isCSSVariableToken(fallback)) {
    return getVariableValue(fallback, element, depth + 1);
  } else {
    return fallback;
  }
}
function resolveCSSVariables(visualElement, { ...target }, transitionEnd) {
  const element = visualElement.current;
  if (!(element instanceof Element))
    return { target, transitionEnd };
  if (transitionEnd) {
    transitionEnd = { ...transitionEnd };
  }
  visualElement.values.forEach((value) => {
    const current = value.get();
    if (!isCSSVariableToken(current))
      return;
    const resolved = getVariableValue(current, element);
    if (resolved)
      value.set(resolved);
  });
  for (const key in target) {
    const current = target[key];
    if (!isCSSVariableToken(current))
      continue;
    const resolved = getVariableValue(current, element);
    if (!resolved)
      continue;
    target[key] = resolved;
    if (!transitionEnd)
      transitionEnd = {};
    if (transitionEnd[key] === void 0) {
      transitionEnd[key] = current;
    }
  }
  return { target, transitionEnd };
}
var positionalKeys = /* @__PURE__ */ new Set([
  "width",
  "height",
  "top",
  "left",
  "right",
  "bottom",
  "x",
  "y",
  "translateX",
  "translateY"
]);
var isPositionalKey = (key) => positionalKeys.has(key);
var hasPositionalKey = (target) => {
  return Object.keys(target).some(isPositionalKey);
};
var isNumOrPxType = (v) => v === number || v === px;
var getPosFromMatrix = (matrix, pos) => parseFloat(matrix.split(", ")[pos]);
var getTranslateFromMatrix = (pos2, pos3) => (_bbox, { transform }) => {
  if (transform === "none" || !transform)
    return 0;
  const matrix3d = transform.match(/^matrix3d\((.+)\)$/);
  if (matrix3d) {
    return getPosFromMatrix(matrix3d[1], pos3);
  } else {
    const matrix = transform.match(/^matrix\((.+)\)$/);
    if (matrix) {
      return getPosFromMatrix(matrix[1], pos2);
    } else {
      return 0;
    }
  }
};
var transformKeys = /* @__PURE__ */ new Set(["x", "y", "z"]);
var nonTranslationalTransformKeys = transformPropOrder.filter((key) => !transformKeys.has(key));
function removeNonTranslationalTransform(visualElement) {
  const removedTransforms = [];
  nonTranslationalTransformKeys.forEach((key) => {
    const value = visualElement.getValue(key);
    if (value !== void 0) {
      removedTransforms.push([key, value.get()]);
      value.set(key.startsWith("scale") ? 1 : 0);
    }
  });
  if (removedTransforms.length)
    visualElement.render();
  return removedTransforms;
}
var positionalValues = {
  width: ({ x }, { paddingLeft = "0", paddingRight = "0" }) => x.max - x.min - parseFloat(paddingLeft) - parseFloat(paddingRight),
  height: ({ y }, { paddingTop = "0", paddingBottom = "0" }) => y.max - y.min - parseFloat(paddingTop) - parseFloat(paddingBottom),
  top: (_bbox, { top }) => parseFloat(top),
  left: (_bbox, { left }) => parseFloat(left),
  bottom: ({ y }, { top }) => parseFloat(top) + (y.max - y.min),
  right: ({ x }, { left }) => parseFloat(left) + (x.max - x.min),
  x: getTranslateFromMatrix(4, 13),
  y: getTranslateFromMatrix(5, 14)
};
positionalValues.translateX = positionalValues.x;
positionalValues.translateY = positionalValues.y;
var convertChangedValueTypes = (target, visualElement, changedKeys) => {
  const originBbox = visualElement.measureViewportBox();
  const element = visualElement.current;
  const elementComputedStyle = getComputedStyle(element);
  const { display } = elementComputedStyle;
  const origin = {};
  if (display === "none") {
    visualElement.setStaticValue("display", target.display || "block");
  }
  changedKeys.forEach((key) => {
    origin[key] = positionalValues[key](originBbox, elementComputedStyle);
  });
  visualElement.render();
  const targetBbox = visualElement.measureViewportBox();
  changedKeys.forEach((key) => {
    const value = visualElement.getValue(key);
    value && value.jump(origin[key]);
    target[key] = positionalValues[key](targetBbox, elementComputedStyle);
  });
  return target;
};
var checkAndConvertChangedValueTypes = (visualElement, target, origin = {}, transitionEnd = {}) => {
  target = { ...target };
  transitionEnd = { ...transitionEnd };
  const targetPositionalKeys = Object.keys(target).filter(isPositionalKey);
  let removedTransformValues = [];
  let hasAttemptedToRemoveTransformValues = false;
  const changedValueTypeKeys = [];
  targetPositionalKeys.forEach((key) => {
    const value = visualElement.getValue(key);
    if (!visualElement.hasValue(key))
      return;
    let from = origin[key];
    let fromType = findDimensionValueType(from);
    const to = target[key];
    let toType;
    if (isKeyframesTarget(to)) {
      const numKeyframes = to.length;
      const fromIndex = to[0] === null ? 1 : 0;
      from = to[fromIndex];
      fromType = findDimensionValueType(from);
      for (let i = fromIndex; i < numKeyframes; i++) {
        if (to[i] === null)
          break;
        if (!toType) {
          toType = findDimensionValueType(to[i]);
        } else {
          invariant(findDimensionValueType(to[i]) === toType);
        }
      }
    } else {
      toType = findDimensionValueType(to);
    }
    if (fromType !== toType) {
      if (isNumOrPxType(fromType) && isNumOrPxType(toType)) {
        const current = value.get();
        if (typeof current === "string") {
          value.set(parseFloat(current));
        }
        if (typeof to === "string") {
          target[key] = parseFloat(to);
        } else if (Array.isArray(to) && toType === px) {
          target[key] = to.map(parseFloat);
        }
      } else if ((fromType === null || fromType === void 0 ? void 0 : fromType.transform) && (toType === null || toType === void 0 ? void 0 : toType.transform) && (from === 0 || to === 0)) {
        if (from === 0) {
          value.set(toType.transform(from));
        } else {
          target[key] = fromType.transform(to);
        }
      } else {
        if (!hasAttemptedToRemoveTransformValues) {
          removedTransformValues = removeNonTranslationalTransform(visualElement);
          hasAttemptedToRemoveTransformValues = true;
        }
        changedValueTypeKeys.push(key);
        transitionEnd[key] = transitionEnd[key] !== void 0 ? transitionEnd[key] : target[key];
        value.jump(to);
      }
    }
  });
  if (changedValueTypeKeys.length) {
    const scrollY = changedValueTypeKeys.indexOf("height") >= 0 ? window.pageYOffset : null;
    const convertedTarget = convertChangedValueTypes(target, visualElement, changedValueTypeKeys);
    if (removedTransformValues.length) {
      removedTransformValues.forEach(([key, value]) => {
        visualElement.getValue(key).set(value);
      });
    }
    visualElement.render();
    if (isBrowser && scrollY !== null) {
      window.scrollTo({ top: scrollY });
    }
    return { target: convertedTarget, transitionEnd };
  } else {
    return { target, transitionEnd };
  }
};
function unitConversion(visualElement, target, origin, transitionEnd) {
  return hasPositionalKey(target) ? checkAndConvertChangedValueTypes(visualElement, target, origin, transitionEnd) : { target, transitionEnd };
}
var parseDomVariant = (visualElement, target, origin, transitionEnd) => {
  const resolved = resolveCSSVariables(visualElement, target, transitionEnd);
  target = resolved.target;
  transitionEnd = resolved.transitionEnd;
  return unitConversion(visualElement, target, origin, transitionEnd);
};
var createAxis = () => ({ min: 0, max: 0 });
var createBox = () => ({
  x: createAxis(),
  y: createAxis()
});
var prefersReducedMotion = { current: null };
var hasReducedMotionListener = { current: false };
function initPrefersReducedMotion() {
  hasReducedMotionListener.current = true;
  if (!isBrowser)
    return;
  if (window.matchMedia) {
    const motionMediaQuery = window.matchMedia("(prefers-reduced-motion)");
    const setReducedMotionPreferences = () => prefersReducedMotion.current = motionMediaQuery.matches;
    motionMediaQuery.addListener(setReducedMotionPreferences);
    setReducedMotionPreferences();
  } else {
    prefersReducedMotion.current = false;
  }
}
function updateMotionValuesFromProps(element, next, prev) {
  const { willChange } = next;
  for (const key in next) {
    const nextValue = next[key];
    const prevValue = prev[key];
    if (isMotionValue(nextValue)) {
      element.addValue(key, nextValue);
      if (isWillChangeMotionValue(willChange)) {
        willChange.add(key);
      }
    } else if (isMotionValue(prevValue)) {
      element.addValue(key, motionValue(nextValue, { owner: element }));
      if (isWillChangeMotionValue(willChange)) {
        willChange.remove(key);
      }
    } else if (prevValue !== nextValue) {
      if (element.hasValue(key)) {
        const existingValue = element.getValue(key);
        !existingValue.hasAnimated && existingValue.set(nextValue);
      } else {
        const latestValue = element.getStaticValue(key);
        element.addValue(key, motionValue(latestValue !== void 0 ? latestValue : nextValue, { owner: element }));
      }
    }
  }
  for (const key in prev) {
    if (next[key] === void 0)
      element.removeValue(key);
  }
  return next;
}
var visualElementStore = /* @__PURE__ */ new WeakMap();
var featureNames = Object.keys(featureDefinitions);
var numFeatures = featureNames.length;
var propEventHandlers = [
  "AnimationStart",
  "AnimationComplete",
  "Update",
  "BeforeLayoutMeasure",
  "LayoutMeasure",
  "LayoutAnimationStart",
  "LayoutAnimationComplete"
];
var numVariantProps = variantProps.length;
var VisualElement = class {
  constructor({ parent, props, presenceContext, reducedMotionConfig, visualState }, options = {}) {
    this.current = null;
    this.children = /* @__PURE__ */ new Set();
    this.isVariantNode = false;
    this.isControllingVariants = false;
    this.shouldReduceMotion = null;
    this.values = /* @__PURE__ */ new Map();
    this.features = {};
    this.valueSubscriptions = /* @__PURE__ */ new Map();
    this.prevMotionValues = {};
    this.events = {};
    this.propEventSubscriptions = {};
    this.notifyUpdate = () => this.notify("Update", this.latestValues);
    this.render = () => {
      if (!this.current)
        return;
      this.triggerBuild();
      this.renderInstance(this.current, this.renderState, this.props.style, this.projection);
    };
    this.scheduleRender = () => frame.render(this.render, false, true);
    const { latestValues, renderState } = visualState;
    this.latestValues = latestValues;
    this.baseTarget = { ...latestValues };
    this.initialValues = props.initial ? { ...latestValues } : {};
    this.renderState = renderState;
    this.parent = parent;
    this.props = props;
    this.presenceContext = presenceContext;
    this.depth = parent ? parent.depth + 1 : 0;
    this.reducedMotionConfig = reducedMotionConfig;
    this.options = options;
    this.isControllingVariants = isControllingVariants(props);
    this.isVariantNode = isVariantNode(props);
    if (this.isVariantNode) {
      this.variantChildren = /* @__PURE__ */ new Set();
    }
    this.manuallyAnimateOnMount = Boolean(parent && parent.current);
    const { willChange, ...initialMotionValues } = this.scrapeMotionValuesFromProps(props, {});
    for (const key in initialMotionValues) {
      const value = initialMotionValues[key];
      if (latestValues[key] !== void 0 && isMotionValue(value)) {
        value.set(latestValues[key], false);
        if (isWillChangeMotionValue(willChange)) {
          willChange.add(key);
        }
      }
    }
  }
  scrapeMotionValuesFromProps(_props, _prevProps) {
    return {};
  }
  mount(instance) {
    this.current = instance;
    visualElementStore.set(instance, this);
    if (this.projection && !this.projection.instance) {
      this.projection.mount(instance);
    }
    if (this.parent && this.isVariantNode && !this.isControllingVariants) {
      this.removeFromVariantTree = this.parent.addVariantChild(this);
    }
    this.values.forEach((value, key) => this.bindToMotionValue(key, value));
    if (!hasReducedMotionListener.current) {
      initPrefersReducedMotion();
    }
    this.shouldReduceMotion = this.reducedMotionConfig === "never" ? false : this.reducedMotionConfig === "always" ? true : prefersReducedMotion.current;
    if (this.parent)
      this.parent.children.add(this);
    this.update(this.props, this.presenceContext);
  }
  unmount() {
    visualElementStore.delete(this.current);
    this.projection && this.projection.unmount();
    cancelFrame(this.notifyUpdate);
    cancelFrame(this.render);
    this.valueSubscriptions.forEach((remove) => remove());
    this.removeFromVariantTree && this.removeFromVariantTree();
    this.parent && this.parent.children.delete(this);
    for (const key in this.events) {
      this.events[key].clear();
    }
    for (const key in this.features) {
      this.features[key].unmount();
    }
    this.current = null;
  }
  bindToMotionValue(key, value) {
    const valueIsTransform = transformProps.has(key);
    const removeOnChange = value.on("change", (latestValue) => {
      this.latestValues[key] = latestValue;
      this.props.onUpdate && frame.update(this.notifyUpdate, false, true);
      if (valueIsTransform && this.projection) {
        this.projection.isTransformDirty = true;
      }
    });
    const removeOnRenderRequest = value.on("renderRequest", this.scheduleRender);
    this.valueSubscriptions.set(key, () => {
      removeOnChange();
      removeOnRenderRequest();
    });
  }
  sortNodePosition(other) {
    if (!this.current || !this.sortInstanceNodePosition || this.type !== other.type) {
      return 0;
    }
    return this.sortInstanceNodePosition(this.current, other.current);
  }
  loadFeatures({ children, ...renderedProps }, isStrict, preloadedFeatures, initialLayoutGroupConfig) {
    let ProjectionNodeConstructor;
    let MeasureLayout;
    for (let i = 0; i < numFeatures; i++) {
      const name = featureNames[i];
      const { isEnabled, Feature: FeatureConstructor, ProjectionNode, MeasureLayout: MeasureLayoutComponent } = featureDefinitions[name];
      if (ProjectionNode)
        ProjectionNodeConstructor = ProjectionNode;
      if (isEnabled(renderedProps)) {
        if (!this.features[name] && FeatureConstructor) {
          this.features[name] = new FeatureConstructor(this);
        }
        if (MeasureLayoutComponent) {
          MeasureLayout = MeasureLayoutComponent;
        }
      }
    }
    if ((this.type === "html" || this.type === "svg") && !this.projection && ProjectionNodeConstructor) {
      this.projection = new ProjectionNodeConstructor(this.latestValues, this.parent && this.parent.projection);
      const { layoutId, layout, drag, dragConstraints, layoutScroll, layoutRoot } = renderedProps;
      this.projection.setOptions({
        layoutId,
        layout,
        alwaysMeasureLayout: Boolean(drag) || dragConstraints && isRefObject(dragConstraints),
        visualElement: this,
        scheduleRender: () => this.scheduleRender(),
        animationType: typeof layout === "string" ? layout : "both",
        initialPromotionConfig: initialLayoutGroupConfig,
        layoutScroll,
        layoutRoot
      });
    }
    return MeasureLayout;
  }
  updateFeatures() {
    for (const key in this.features) {
      const feature = this.features[key];
      if (feature.isMounted) {
        feature.update();
      } else {
        feature.mount();
        feature.isMounted = true;
      }
    }
  }
  triggerBuild() {
    this.build(this.renderState, this.latestValues, this.options, this.props);
  }
  measureViewportBox() {
    return this.current ? this.measureInstanceViewportBox(this.current, this.props) : createBox();
  }
  getStaticValue(key) {
    return this.latestValues[key];
  }
  setStaticValue(key, value) {
    this.latestValues[key] = value;
  }
  makeTargetAnimatable(target, canMutate = true) {
    return this.makeTargetAnimatableFromInstance(target, this.props, canMutate);
  }
  update(props, presenceContext) {
    if (props.transformTemplate || this.props.transformTemplate) {
      this.scheduleRender();
    }
    this.prevProps = this.props;
    this.props = props;
    this.prevPresenceContext = this.presenceContext;
    this.presenceContext = presenceContext;
    for (let i = 0; i < propEventHandlers.length; i++) {
      const key = propEventHandlers[i];
      if (this.propEventSubscriptions[key]) {
        this.propEventSubscriptions[key]();
        delete this.propEventSubscriptions[key];
      }
      const listener = props["on" + key];
      if (listener) {
        this.propEventSubscriptions[key] = this.on(key, listener);
      }
    }
    this.prevMotionValues = updateMotionValuesFromProps(this, this.scrapeMotionValuesFromProps(props, this.prevProps), this.prevMotionValues);
    if (this.handleChildMotionValue) {
      this.handleChildMotionValue();
    }
  }
  getProps() {
    return this.props;
  }
  getVariant(name) {
    return this.props.variants ? this.props.variants[name] : void 0;
  }
  getDefaultTransition() {
    return this.props.transition;
  }
  getTransformPagePoint() {
    return this.props.transformPagePoint;
  }
  getClosestVariantNode() {
    return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0;
  }
  getVariantContext(startAtParent = false) {
    if (startAtParent) {
      return this.parent ? this.parent.getVariantContext() : void 0;
    }
    if (!this.isControllingVariants) {
      const context2 = this.parent ? this.parent.getVariantContext() || {} : {};
      if (this.props.initial !== void 0) {
        context2.initial = this.props.initial;
      }
      return context2;
    }
    const context = {};
    for (let i = 0; i < numVariantProps; i++) {
      const name = variantProps[i];
      const prop = this.props[name];
      if (isVariantLabel(prop) || prop === false) {
        context[name] = prop;
      }
    }
    return context;
  }
  addVariantChild(child) {
    const closestVariantNode = this.getClosestVariantNode();
    if (closestVariantNode) {
      closestVariantNode.variantChildren && closestVariantNode.variantChildren.add(child);
      return () => closestVariantNode.variantChildren.delete(child);
    }
  }
  addValue(key, value) {
    if (value !== this.values.get(key)) {
      this.removeValue(key);
      this.bindToMotionValue(key, value);
    }
    this.values.set(key, value);
    this.latestValues[key] = value.get();
  }
  removeValue(key) {
    this.values.delete(key);
    const unsubscribe = this.valueSubscriptions.get(key);
    if (unsubscribe) {
      unsubscribe();
      this.valueSubscriptions.delete(key);
    }
    delete this.latestValues[key];
    this.removeValueFromRenderState(key, this.renderState);
  }
  hasValue(key) {
    return this.values.has(key);
  }
  getValue(key, defaultValue) {
    if (this.props.values && this.props.values[key]) {
      return this.props.values[key];
    }
    let value = this.values.get(key);
    if (value === void 0 && defaultValue !== void 0) {
      value = motionValue(defaultValue, { owner: this });
      this.addValue(key, value);
    }
    return value;
  }
  readValue(key) {
    var _a;
    return this.latestValues[key] !== void 0 || !this.current ? this.latestValues[key] : (_a = this.getBaseTargetFromProps(this.props, key)) !== null && _a !== void 0 ? _a : this.readValueFromInstance(this.current, key, this.options);
  }
  setBaseTarget(key, value) {
    this.baseTarget[key] = value;
  }
  getBaseTarget(key) {
    var _a;
    const { initial } = this.props;
    const valueFromInitial = typeof initial === "string" || typeof initial === "object" ? (_a = resolveVariantFromProps(this.props, initial)) === null || _a === void 0 ? void 0 : _a[key] : void 0;
    if (initial && valueFromInitial !== void 0) {
      return valueFromInitial;
    }
    const target = this.getBaseTargetFromProps(this.props, key);
    if (target !== void 0 && !isMotionValue(target))
      return target;
    return this.initialValues[key] !== void 0 && valueFromInitial === void 0 ? void 0 : this.baseTarget[key];
  }
  on(eventName, callback) {
    if (!this.events[eventName]) {
      this.events[eventName] = new SubscriptionManager();
    }
    return this.events[eventName].add(callback);
  }
  notify(eventName, ...args) {
    if (this.events[eventName]) {
      this.events[eventName].notify(...args);
    }
  }
};
var DOMVisualElement = class extends VisualElement {
  sortInstanceNodePosition(a, b) {
    return a.compareDocumentPosition(b) & 2 ? 1 : -1;
  }
  getBaseTargetFromProps(props, key) {
    return props.style ? props.style[key] : void 0;
  }
  removeValueFromRenderState(key, { vars, style }) {
    delete vars[key];
    delete style[key];
  }
  makeTargetAnimatableFromInstance({ transition: transition2, transitionEnd, ...target }, { transformValues }, isMounted) {
    let origin = getOrigin(target, transition2 || {}, this);
    if (transformValues) {
      if (transitionEnd)
        transitionEnd = transformValues(transitionEnd);
      if (target)
        target = transformValues(target);
      if (origin)
        origin = transformValues(origin);
    }
    if (isMounted) {
      checkTargetForNewValues(this, target, origin);
      const parsed = parseDomVariant(this, target, origin, transitionEnd);
      transitionEnd = parsed.transitionEnd;
      target = parsed.target;
    }
    return {
      transition: transition2,
      transitionEnd,
      ...target
    };
  }
};
function getComputedStyle2(element) {
  return window.getComputedStyle(element);
}
var HTMLVisualElement = class extends DOMVisualElement {
  constructor() {
    super(...arguments);
    this.type = "html";
  }
  readValueFromInstance(instance, key) {
    if (transformProps.has(key)) {
      const defaultType = getDefaultValueType(key);
      return defaultType ? defaultType.default || 0 : 0;
    } else {
      const computedStyle = getComputedStyle2(instance);
      const value = (isCSSVariableName(key) ? computedStyle.getPropertyValue(key) : computedStyle[key]) || 0;
      return typeof value === "string" ? value.trim() : value;
    }
  }
  measureInstanceViewportBox(instance, { transformPagePoint }) {
    return measureViewportBox(instance, transformPagePoint);
  }
  build(renderState, latestValues, options, props) {
    buildHTMLStyles(renderState, latestValues, options, props.transformTemplate);
  }
  scrapeMotionValuesFromProps(props, prevProps) {
    return scrapeMotionValuesFromProps(props, prevProps);
  }
  handleChildMotionValue() {
    if (this.childSubscription) {
      this.childSubscription();
      delete this.childSubscription;
    }
    const { children } = this.props;
    if (isMotionValue(children)) {
      this.childSubscription = children.on("change", (latest) => {
        if (this.current)
          this.current.textContent = `${latest}`;
      });
    }
  }
  renderInstance(instance, renderState, styleProp, projection) {
    renderHTML(instance, renderState, styleProp, projection);
  }
};
var SVGVisualElement = class extends DOMVisualElement {
  constructor() {
    super(...arguments);
    this.type = "svg";
    this.isSVGTag = false;
  }
  getBaseTargetFromProps(props, key) {
    return props[key];
  }
  readValueFromInstance(instance, key) {
    if (transformProps.has(key)) {
      const defaultType = getDefaultValueType(key);
      return defaultType ? defaultType.default || 0 : 0;
    }
    key = !camelCaseAttributes.has(key) ? camelToDash(key) : key;
    return instance.getAttribute(key);
  }
  measureInstanceViewportBox() {
    return createBox();
  }
  scrapeMotionValuesFromProps(props, prevProps) {
    return scrapeMotionValuesFromProps2(props, prevProps);
  }
  build(renderState, latestValues, options, props) {
    buildSVGAttrs(renderState, latestValues, options, this.isSVGTag, props.transformTemplate);
  }
  renderInstance(instance, renderState, styleProp, projection) {
    renderSVG(instance, renderState, styleProp, projection);
  }
  mount(instance) {
    this.isSVGTag = isSVGTag(instance.tagName);
    super.mount(instance);
  }
};
var createDomVisualElement = (Component2, options) => {
  return isSVGComponent(Component2) ? new SVGVisualElement(options, { enableHardwareAcceleration: false }) : new HTMLVisualElement(options, { enableHardwareAcceleration: true });
};
var domAnimation = {
  renderer: createDomVisualElement,
  ...animations,
  ...gestureAnimations
};
var [CalendarProvider, useCalendarContext] = createContext2({
  name: "CalendarContext",
  strict: true,
  errorMessage: "useContext: `context` is undefined. Seems you forgot to wrap component within the CalendarProvider"
});
var transition = {
  type: "spring",
  bounce: 0,
  duration: 0.3
};
var slideVariants = {
  enter: (direction) => ({
    x: `${direction * 100}%`
  }),
  center: {
    x: "0%"
  },
  exit: (direction) => ({
    x: `${direction * -100}%`
  })
};
function CalendarHeader(props) {
  const { direction, date, currentMonth, buttonPickerProps } = props;
  const {
    state,
    slots,
    headerRef,
    showMonthAndYearPickers,
    isHeaderExpanded,
    setIsHeaderExpanded,
    disableAnimation,
    classNames
  } = useCalendarContext();
  const monthAndYearDateFormatter = $896ba0a80a8f4d36$export$85fd5fdf27bacc79({
    month: "long",
    era: currentMonth.calendar.identifier === "gregory" && currentMonth.era === "BC" ? "short" : void 0,
    calendar: currentMonth.calendar.identifier,
    timeZone: state.timeZone,
    year: "numeric"
  });
  const monthDateContent = monthAndYearDateFormatter.format(date.toDate(state.timeZone));
  const headerTitle = /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: disableAnimation ? /* @__PURE__ */ jsxRuntimeExports.jsx(
    "span",
    {
      "aria-hidden": true,
      className: slots == null ? void 0 : slots.title({ class: classNames == null ? void 0 : classNames.title }),
      "data-slot": "title",
      children: monthDateContent
    },
    currentMonth.month
  ) : /* @__PURE__ */ jsxRuntimeExports.jsx(
    m.span,
    {
      animate: "center",
      "aria-hidden": true,
      className: slots == null ? void 0 : slots.title({ class: classNames == null ? void 0 : classNames.title }),
      custom: direction,
      "data-slot": "title",
      exit: "exit",
      initial: "enter",
      variants: isHeaderExpanded ? {} : slideVariants,
      children: monthDateContent
    },
    currentMonth.month
  ) });
  const headerProps = {
    ref: headerRef,
    className: slots == null ? void 0 : slots.header({ class: classNames == null ? void 0 : classNames.header }),
    "data-slot": "header"
  };
  const handleKeyDown = reactExports.useCallback(
    (e) => {
      if (e.key === "Escape") {
        e.preventDefault();
        e.stopPropagation();
        setIsHeaderExpanded == null ? void 0 : setIsHeaderExpanded(false);
      }
    },
    [setIsHeaderExpanded]
  );
  return showMonthAndYearPickers ? /* @__PURE__ */ jsxRuntimeExports.jsx(
    button_default,
    {
      ...headerProps,
      disableAnimation,
      endContent: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDownIcon, { className: "chevron-icon" }),
      onKeyDown: handleKeyDown,
      ...buttonPickerProps,
      children: headerTitle
    }
  ) : /* @__PURE__ */ jsxRuntimeExports.jsx("header", { ...headerProps, children: headerTitle });
}
function CalendarCell(originalProps) {
  const { state, slots, isPickerVisible, currentMonth, classNames, ...props } = originalProps;
  const ref = reactExports.useRef(null);
  const {
    cellProps,
    buttonProps,
    isPressed,
    isSelected,
    isDisabled,
    isFocused,
    isInvalid,
    formattedDate
  } = $36a0ac60f04457c5$export$136073280381448e(
    {
      ...props,
      isDisabled: !$14e0f24ef4ac5c92$export$a18c89cbd24170ff(props.date, currentMonth) || isPickerVisible
    },
    state,
    ref
  );
  const isUnavailable = state.isCellUnavailable(props.date);
  const isLastSelectedBeforeDisabled = !isDisabled && !isInvalid && state.isCellUnavailable(props.date.add({ days: 1 }));
  const isFirstSelectedAfterDisabled = !isDisabled && !isInvalid && state.isCellUnavailable(props.date.subtract({ days: 1 }));
  const highlightedRange = "highlightedRange" in state && state.highlightedRange;
  const isSelectionStart = isSelected && highlightedRange && $14e0f24ef4ac5c92$export$ea39ec197993aef0(props.date, highlightedRange.start);
  const isSelectionEnd = isSelected && highlightedRange && $14e0f24ef4ac5c92$export$ea39ec197993aef0(props.date, highlightedRange.end);
  const { locale } = $18f2051aff69b9bf$export$43bb16f9c6d9e3f7();
  const dayOfWeek = $14e0f24ef4ac5c92$export$2061056d06d7cdf7(props.date, locale);
  const isRangeStart = isSelected && (isFirstSelectedAfterDisabled || dayOfWeek === 0 || props.date.day === 1);
  const isRangeEnd = isSelected && (isLastSelectedBeforeDisabled || dayOfWeek === 6 || props.date.day === currentMonth.calendar.getDaysInMonth(currentMonth));
  const { focusProps, isFocusVisible } = $f7dceffc5ad7768b$export$4e328f61c538687f();
  const { hoverProps, isHovered } = $6179b936705e76d3$export$ae780daf29e6d456({
    isDisabled: isDisabled || isUnavailable || state.isReadOnly
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: slots == null ? void 0 : slots.cell({ class: classNames == null ? void 0 : classNames.cell }), "data-slot": "cell", ...cellProps, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
    "span",
    {
      ...$3ef42575df84b30b$export$9d1611c77c2fe928(buttonProps, hoverProps, focusProps),
      ref,
      className: slots == null ? void 0 : slots.cellButton({ class: classNames == null ? void 0 : classNames.cellButton }),
      "data-disabled": dataAttr(isDisabled && !isInvalid),
      "data-focus-visible": dataAttr(isFocused && isFocusVisible),
      "data-hover": dataAttr(isHovered),
      "data-invalid": dataAttr(isInvalid),
      "data-outside-month": dataAttr(!$14e0f24ef4ac5c92$export$a18c89cbd24170ff(props.date, currentMonth)),
      "data-pressed": dataAttr(isPressed && !state.isReadOnly),
      "data-range-end": dataAttr(isRangeEnd),
      "data-range-selection": dataAttr(isSelected && "highlightedRange" in state),
      "data-range-start": dataAttr(isRangeStart),
      "data-readonly": dataAttr(state.isReadOnly),
      "data-selected": dataAttr(isSelected),
      "data-selection-end": dataAttr(isSelectionEnd),
      "data-selection-start": dataAttr(isSelectionStart),
      "data-today": dataAttr($14e0f24ef4ac5c92$export$629b0a497aa65267(props.date, state.timeZone)),
      "data-unavailable": dataAttr(isUnavailable),
      children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: formattedDate })
    }
  ) });
}
function CalendarMonth(props) {
  const { startDate, direction, currentMonth } = props;
  const { locale } = $18f2051aff69b9bf$export$43bb16f9c6d9e3f7();
  const weeksInMonth = $14e0f24ef4ac5c92$export$ccc1b2479e7dd654(startDate, locale);
  const { state, slots, weekdayStyle, isHeaderExpanded, disableAnimation, classNames } = useCalendarContext();
  const { gridProps, headerProps, weekDays } = $e3031d1f8c9d64eb$export$cb95147730a423f5(
    {
      ...props,
      weekdayStyle,
      endDate: $14e0f24ef4ac5c92$export$a2258d9c4118825c(startDate)
    },
    state
  );
  const bodyContent = [...new Array(weeksInMonth).keys()].map((weekIndex) => /* @__PURE__ */ jsxRuntimeExports.jsx(
    "tr",
    {
      className: slots == null ? void 0 : slots.gridBodyRow({ class: classNames == null ? void 0 : classNames.gridBodyRow }),
      "data-slot": "grid-body-row",
      inert: isHeaderExpanded ? "" : void 0,
      children: state.getDatesInWeek(weekIndex, startDate).map(
        (date, i) => date ? /* @__PURE__ */ jsxRuntimeExports.jsx(
          CalendarCell,
          {
            classNames,
            currentMonth: startDate,
            date,
            isPickerVisible: isHeaderExpanded,
            slots,
            state
          },
          i
        ) : /* @__PURE__ */ jsxRuntimeExports.jsx("td", {}, i)
      )
    },
    weekIndex
  ));
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "table",
    {
      ...gridProps,
      "aria-hidden": dataAttr(isHeaderExpanded),
      className: slots == null ? void 0 : slots.grid({ class: classNames == null ? void 0 : classNames.grid }),
      "data-slot": "grid",
      tabIndex: -1,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "thead",
          {
            ...headerProps,
            className: slots == null ? void 0 : slots.gridHeader({ class: classNames == null ? void 0 : classNames.gridHeader }),
            "data-slot": "grid-header",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              "tr",
              {
                className: slots == null ? void 0 : slots.gridHeaderRow({ class: classNames == null ? void 0 : classNames.gridHeaderRow }),
                "data-slot": "grid-header-row",
                children: weekDays.map((day, index2) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "th",
                  {
                    className: slots == null ? void 0 : slots.gridHeaderCell({ class: classNames == null ? void 0 : classNames.gridHeaderCell }),
                    "data-slot": "grid-header-cell",
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: day })
                  },
                  index2
                ))
              }
            )
          }
        ),
        disableAnimation ? /* @__PURE__ */ jsxRuntimeExports.jsx(
          "tbody",
          {
            className: slots == null ? void 0 : slots.gridBody({ class: classNames == null ? void 0 : classNames.gridBody }),
            "data-slot": "grid-body",
            tabIndex: isHeaderExpanded ? -1 : 0,
            children: bodyContent
          },
          currentMonth
        ) : /* @__PURE__ */ jsxRuntimeExports.jsx(
          m.tbody,
          {
            animate: "center",
            className: slots == null ? void 0 : slots.gridBody({ class: classNames == null ? void 0 : classNames.gridBody }),
            custom: direction,
            "data-slot": "grid-body",
            exit: "exit",
            initial: "enter",
            variants: slideVariants,
            children: bodyContent
          },
          currentMonth
        )
      ]
    }
  );
}
function getYearRange(start, end) {
  const years = [];
  if (!start || !end) {
    return years;
  }
  let current = $14e0f24ef4ac5c92$export$f91e89d3d0406102(start);
  while (current.compare(end) <= 0) {
    years.push(current);
    current = $14e0f24ef4ac5c92$export$f91e89d3d0406102(current.add({ years: 1 }));
  }
  return years;
}
function addMonths(date, months) {
  return date.add({ months });
}
function getMonthsInYear(year) {
  const firstMonth = $14e0f24ef4ac5c92$export$f91e89d3d0406102(year);
  const months = [firstMonth];
  while (months.length < 12) {
    const prevMonth = months[months.length - 1];
    months.push(addMonths(prevMonth, 1));
  }
  return months;
}
var SCROLL_DEBOUNCE_TIME = 200;
function useCalendarPicker(props) {
  var _a;
  const { date, currentMonth } = props;
  const { slots, state, headerRef, isHeaderExpanded, setIsHeaderExpanded, classNames } = useCalendarContext();
  const highlightRef = reactExports.useRef(null);
  const yearsListRef = reactExports.useRef(null);
  const monthsListRef = reactExports.useRef(null);
  const monthsItemsRef = reactExports.useRef();
  const yearsItemsRef = reactExports.useRef();
  const monthDateFormatter = $896ba0a80a8f4d36$export$85fd5fdf27bacc79({
    month: "long",
    era: currentMonth.calendar.identifier === "gregory" && currentMonth.era === "BC" ? "short" : void 0,
    calendar: currentMonth.calendar.identifier,
    timeZone: state.timeZone
  });
  const yearDateFormatter = $896ba0a80a8f4d36$export$85fd5fdf27bacc79({
    year: "numeric",
    timeZone: state.timeZone
  });
  const years = (_a = getYearRange(state.minValue, state.maxValue)) == null ? void 0 : _a.map((y) => ({
    value: y.year,
    label: yearDateFormatter.format(y.toDate(state.timeZone))
  }));
  const months = getMonthsInYear(date).map((m2) => ({
    value: m2.month,
    label: monthDateFormatter.format(m2.toDate(state.timeZone))
  }));
  function getItemsRefMap(itemsRef) {
    if (!itemsRef.current) {
      itemsRef.current = /* @__PURE__ */ new Map();
    }
    return itemsRef.current;
  }
  function getItemRef(node, value, list) {
    const map = getItemsRefMap(list === "months" ? monthsItemsRef : yearsItemsRef);
    if (node) {
      map.set(value, node);
    } else {
      map.delete(value);
    }
  }
  const handleListScroll = reactExports.useCallback(
    (e, highlightEl, list) => {
      if (!(e.target instanceof HTMLElement))
        return;
      const map = getItemsRefMap(list === "months" ? monthsItemsRef : yearsItemsRef);
      const items = Array.from(map.values());
      const item = items.find((itemEl) => {
        const rect1 = itemEl.getBoundingClientRect();
        const rect2 = highlightEl == null ? void 0 : highlightEl.getBoundingClientRect();
        if (!rect2) {
          return false;
        }
        return areRectsIntersecting(rect1, rect2);
      });
      const itemValue = Number(item == null ? void 0 : item.getAttribute("data-value"));
      if (!itemValue)
        return;
      let date2 = state.focusedDate.set(list === "months" ? { month: itemValue } : { year: itemValue });
      state.setFocusedDate(date2);
    },
    [state, isHeaderExpanded]
  );
  reactExports.useEffect(() => {
    if (!isHeaderExpanded)
      return;
    scrollTo(date.month, "months", false);
    scrollTo(date.year, "years", false);
  }, [isHeaderExpanded]);
  reactExports.useEffect(() => {
    const monthsList = monthsListRef.current;
    const yearsList = yearsListRef.current;
    const highlightEl = highlightRef.current;
    if (!highlightEl)
      return;
    const debouncedHandleMonthsScroll = debounce(
      (e) => handleListScroll(e, highlightEl, "months"),
      SCROLL_DEBOUNCE_TIME
    );
    const debouncedHandleYearsScroll = debounce(
      (e) => handleListScroll(e, highlightEl, "years"),
      SCROLL_DEBOUNCE_TIME
    );
    monthsList == null ? void 0 : monthsList.addEventListener("scroll", debouncedHandleMonthsScroll);
    yearsList == null ? void 0 : yearsList.addEventListener("scroll", debouncedHandleYearsScroll);
    return () => {
      if (debouncedHandleMonthsScroll) {
        monthsList == null ? void 0 : monthsList.removeEventListener("scroll", debouncedHandleMonthsScroll);
      }
      if (debouncedHandleYearsScroll) {
        yearsList == null ? void 0 : yearsList.removeEventListener("scroll", debouncedHandleYearsScroll);
      }
    };
  }, [handleListScroll]);
  function scrollTo(value, list, smooth = true) {
    const mapListRef = list === "months" ? monthsItemsRef : yearsItemsRef;
    const listRef = list === "months" ? monthsListRef : yearsListRef;
    const map = getItemsRefMap(mapListRef);
    const node = map.get(value);
    if (!node)
      return;
    t(node, {
      scrollMode: "always",
      behavior: smooth ? "smooth" : "auto",
      boundary: listRef.current
    });
  }
  const onPickerItemPressed = reactExports.useCallback(
    (e, list) => {
      const target = e.target;
      const value = Number(target.getAttribute("data-value"));
      if (!value)
        return;
      scrollTo(value, list);
    },
    [state]
  );
  const onPickerItemKeyDown = reactExports.useCallback(
    (e, value, list) => {
      var _a2;
      const map = getItemsRefMap(list === "months" ? monthsItemsRef : yearsItemsRef);
      const node = map.get(value);
      if (!node)
        return;
      let nextValue = value;
      switch (e.key) {
        case "ArrowDown":
          nextValue = value + 1;
          break;
        case "ArrowUp":
          nextValue = value - 1;
          break;
        case "Home":
          nextValue = 0;
          break;
        case "End":
          nextValue = months.length - 1;
          break;
        case "PageUp":
          nextValue = value - 3;
          break;
        case "PageDown":
          nextValue = value + 3;
          break;
        case "Escape":
        case "Enter":
        case " ":
          setIsHeaderExpanded == null ? void 0 : setIsHeaderExpanded(false);
          (_a2 = headerRef == null ? void 0 : headerRef.current) == null ? void 0 : _a2.focus();
          return;
      }
      const nextItem = map.get(nextValue);
      nextItem == null ? void 0 : nextItem.focus();
    },
    [state]
  );
  return {
    state,
    slots,
    classNames,
    years,
    months,
    highlightRef,
    monthsListRef,
    yearsListRef,
    getItemRef,
    isHeaderExpanded,
    onPickerItemPressed,
    onPickerItemKeyDown
  };
}
var CalendarPickerItem = reactExports.forwardRef(({ children, autoFocus, isDisabled, onKeyDown, ...otherProps }, ref) => {
  const domRef = useDOMRef(ref);
  const { buttonProps: ariaButtonProps, isPressed } = useAriaButton(
    {
      elementType: "button",
      isDisabled,
      onKeyDown,
      ...otherProps
    },
    domRef
  );
  const { isFocusVisible, isFocused, focusProps } = $f7dceffc5ad7768b$export$4e328f61c538687f({
    autoFocus
  });
  const { isHovered, hoverProps } = $6179b936705e76d3$export$ae780daf29e6d456({ isDisabled });
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "button",
    {
      ref: domRef,
      "data-disabled": dataAttr(isDisabled),
      "data-focus": dataAttr(isFocused),
      "data-focus-visible": dataAttr(isFocusVisible),
      "data-hover": dataAttr(isHovered),
      "data-pressed": dataAttr(isPressed),
      "data-slot": "picker-item",
      ...$3ef42575df84b30b$export$9d1611c77c2fe928(
        focusProps,
        hoverProps,
        ariaButtonProps,
        filterDOMProps(otherProps, { enabled: true })
      ),
      children
    }
  );
});
CalendarPickerItem.displayName = "CalendarPickerItem";
var EMPTY_ITEMS_OFFSET = 3;
function CalendarPicker(props) {
  const {
    state,
    slots,
    months,
    years,
    highlightRef,
    monthsListRef,
    yearsListRef,
    classNames,
    getItemRef,
    isHeaderExpanded,
    onPickerItemPressed,
    onPickerItemKeyDown
  } = useCalendarPicker(props);
  const EmptyItem = reactExports.useCallback(
    (props2) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        "aria-hidden": "true",
        className: slots == null ? void 0 : slots.pickerItem({ class: classNames == null ? void 0 : classNames.pickerItem }),
        "data-slot": "picker-item-empty",
        tabIndex: -1,
        ...props2,
        children: " "
      }
    ),
    [slots, classNames == null ? void 0 : classNames.pickerItem]
  );
  const PickerItemWrapper = reactExports.useCallback(
    ({ children }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      Array.from({ length: EMPTY_ITEMS_OFFSET }, (_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(EmptyItem, {}, i)),
      children,
      Array.from({ length: EMPTY_ITEMS_OFFSET }, (_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(EmptyItem, {}, i))
    ] }),
    [EmptyItem]
  );
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: slots == null ? void 0 : slots.pickerWrapper({
        class: classNames == null ? void 0 : classNames.pickerWrapper
      }),
      "data-slot": "picker-wrapper",
      inert: isHeaderExpanded ? void 0 : "",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            ref: highlightRef,
            className: slots == null ? void 0 : slots.pickerHighlight({ class: classNames == null ? void 0 : classNames.pickerHighlight }),
            "data-slot": "picker-highlight"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            ref: monthsListRef,
            className: slots == null ? void 0 : slots.pickerMonthList({ class: classNames == null ? void 0 : classNames.pickerMonthList }),
            "data-slot": "picker-month-list",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(PickerItemWrapper, { children: months.map((month) => {
              var _a;
              return /* @__PURE__ */ jsxRuntimeExports.jsx(
                CalendarPickerItem,
                {
                  ref: (node) => getItemRef(node, month.value, "months"),
                  className: slots == null ? void 0 : slots.pickerItem({ class: classNames == null ? void 0 : classNames.pickerItem }),
                  "data-value": month.value,
                  tabIndex: !isHeaderExpanded || ((_a = state.focusedDate) == null ? void 0 : _a.month) !== month.value ? -1 : 0,
                  onKeyDown: (e) => onPickerItemKeyDown(e, month.value, "months"),
                  onPress: (e) => onPickerItemPressed(e, "months"),
                  children: month.label
                },
                `picker-month-${month.value}`
              );
            }) })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            ref: yearsListRef,
            className: slots == null ? void 0 : slots.pickerYearList({ class: classNames == null ? void 0 : classNames.pickerYearList }),
            "data-slot": "picker-year-list",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(PickerItemWrapper, { children: years.map((year) => {
              var _a;
              return /* @__PURE__ */ jsxRuntimeExports.jsx(
                CalendarPickerItem,
                {
                  ref: (node) => getItemRef(node, year.value, "years"),
                  className: slots == null ? void 0 : slots.pickerItem({ class: classNames == null ? void 0 : classNames.pickerItem }),
                  "data-value": year.value,
                  tabIndex: !isHeaderExpanded || ((_a = state.focusedDate) == null ? void 0 : _a.year) !== year.value ? -1 : 0,
                  onKeyDown: (e) => onPickerItemKeyDown(e, year.value, "years"),
                  onPress: (e) => onPickerItemPressed(e, "years"),
                  children: year.label
                },
                `picker-year-${year.value}`
              );
            }) })
          }
        )
      ]
    }
  );
}
function CalendarBase(props) {
  const {
    Component = "div",
    showHelper,
    topContent,
    bottomContent,
    calendarProps,
    nextButtonProps,
    prevButtonProps,
    buttonPickerProps,
    errorMessageProps,
    calendarRef: ref,
    errorMessage,
    ...otherProps
  } = props;
  const { state, slots, visibleMonths, showMonthAndYearPickers, disableAnimation, classNames } = useCalendarContext();
  const [direction, setDirection] = reactExports.useState(0);
  const { direction: rtlDirection } = $18f2051aff69b9bf$export$43bb16f9c6d9e3f7();
  const currentMonth = state.visibleRange.start;
  const headers = [];
  const calendars = [];
  for (let i = 0; i < visibleMonths; i++) {
    let d = currentMonth.add({ months: i });
    headers.push(
      /* @__PURE__ */ jsxRuntimeExports.jsxs(reactExports.Fragment, { children: [
        i === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(
          button_default,
          {
            ...prevButtonProps,
            onPress: $ff5963eb1fccf552$export$e08e3b67e392101e(prevButtonProps.onPress, () => setDirection(-1)),
            children: rtlDirection === "rtl" ? /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRightIcon, {}) : /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronLeftIcon, {})
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          CalendarHeader,
          {
            buttonPickerProps,
            currentMonth,
            date: d,
            direction
          }
        ),
        i === visibleMonths - 1 && /* @__PURE__ */ jsxRuntimeExports.jsx(
          button_default,
          {
            ...nextButtonProps,
            onPress: $ff5963eb1fccf552$export$e08e3b67e392101e(nextButtonProps.onPress, () => setDirection(1)),
            children: rtlDirection === "rtl" ? /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronLeftIcon, {}) : /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRightIcon, {})
          }
        )
      ] }, `calendar-header-${i}`)
    );
    const calendarMonthContent = /* @__PURE__ */ reactExports.createElement(
      CalendarMonth,
      {
        ...props,
        key: `calendar-month-${i}`,
        currentMonth: currentMonth.month,
        direction,
        startDate: d
      }
    );
    calendars.push(
      showMonthAndYearPickers ? /* @__PURE__ */ jsxRuntimeExports.jsxs(reactExports.Fragment, { children: [
        calendarMonthContent,
        /* @__PURE__ */ jsxRuntimeExports.jsx(CalendarPicker, { currentMonth, date: d })
      ] }, `calendar-month-with-pickers-${i}`) : calendarMonthContent
    );
  }
  const calendarContent = /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: slots == null ? void 0 : slots.headerWrapper({ class: classNames == null ? void 0 : classNames.headerWrapper }),
        "data-slot": "header-wrapper",
        children: headers
      },
      "header-wrapper"
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: slots == null ? void 0 : slots.gridWrapper({ class: classNames == null ? void 0 : classNames.gridWrapper }),
        "data-slot": "grid-wrapper",
        children: calendars
      },
      "grid-wrapper"
    )
  ] });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Component, { ...$3ef42575df84b30b$export$9d1611c77c2fe928(calendarProps, otherProps), ref, children: [
    topContent,
    /* @__PURE__ */ jsxRuntimeExports.jsx($5c3e21d68f1c4674$export$439d29a4e110a164, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: calendarProps["aria-label"] }) }),
    disableAnimation ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: slots == null ? void 0 : slots.content({ class: classNames == null ? void 0 : classNames.content }), "data-slot": "content", children: calendarContent }) : /* @__PURE__ */ jsxRuntimeExports.jsx(
      ResizablePanel,
      {
        className: slots == null ? void 0 : slots.content({ class: classNames == null ? void 0 : classNames.content }),
        "data-slot": "content",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { custom: direction, initial: false, mode: "popLayout", children: /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(MotionConfig, { transition, children: /* @__PURE__ */ jsxRuntimeExports.jsx(LazyMotion, { features: domAnimation, children: calendarContent }) }) }) })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx($5c3e21d68f1c4674$export$439d29a4e110a164, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        "aria-label": nextButtonProps["aria-label"],
        disabled: nextButtonProps.isDisabled,
        tabIndex: -1,
        onClick: () => state.focusNextPage()
      }
    ) }),
    state.isValueInvalid && showHelper && /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: slots == null ? void 0 : slots.helperWrapper({ class: classNames == null ? void 0 : classNames.helperWrapper }),
        "data-slot": "helper-wrapper",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "span",
          {
            ...errorMessageProps,
            className: slots == null ? void 0 : slots.errorMessage({ class: classNames == null ? void 0 : classNames.errorMessage }),
            "data-slot": "error-message",
            children: errorMessage || "Selected date unavailable."
          }
        )
      }
    ),
    bottomContent
  ] });
}
function Calendar(props, ref) {
  const { context, getBaseCalendarProps } = useCalendar({ ...props, ref });
  return /* @__PURE__ */ jsxRuntimeExports.jsx(CalendarProvider, { value: context, children: /* @__PURE__ */ jsxRuntimeExports.jsx(CalendarBase, { ...getBaseCalendarProps() }) });
}
Calendar.displayName = "NextUI.Calendar";
var calendar_default = forwardRef(Calendar);
/**
 * @license lucide-react v0.436.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ChevronLeft = createLucideIcon("ChevronLeft", [
  ["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]
]);
/**
 * @license lucide-react v0.436.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ChevronRight = createLucideIcon("ChevronRight", [
  ["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]
]);
const BookingTable = () => {
  const now = $14e0f24ef4ac5c92$export$d0bdf45af03a6ea3($14e0f24ef4ac5c92$export$aa8b41735afcabd2());
  const [selectedSeat, setSelectedSeat] = reactExports.useState(null);
  const [seatIdSelected, setIdSeatSelected] = reactExports.useState("");
  const [selectedDate, setSelectedDate] = reactExports.useState($14e0f24ef4ac5c92$export$d0bdf45af03a6ea3($14e0f24ef4ac5c92$export$aa8b41735afcabd2()));
  const [dateSelected, setDateSelected] = reactExports.useState(false);
  const [availableSeats, setAvailableSeats] = reactExports.useState([]);
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.user);
  const [tables, setTables] = reactExports.useState([]);
  const { id: id2 } = useParams();
  const [workspaceData, setWorkspace] = reactExports.useState({
    _id: "",
    buildingName: "",
    state: "",
    district: "",
    location: "",
    pinCode: "",
    street: "",
    contactNo: "",
    powerBackup: false,
    ac: false,
    bathroom: false,
    tablesAvailable: 0,
    seatsPerTable: 0,
    photos: null,
    video: null,
    imageAdded: false,
    videoAdded: false,
    pricePerSeat: 0,
    timing: "",
    workingDays: "",
    ownerId: "",
    createdAt: "",
    updatedAt: "",
    __v: 0
  });
  const [currentTableIndex, setCurrentTableIndex] = reactExports.useState(0);
  const navigate = useNavigate();
  const { locale } = $18f2051aff69b9bf$export$43bb16f9c6d9e3f7();
  const minDate = now;
  const maxDate = now.add({ days: 10 });
  const toggleSeat = (seatKey, seatId) => {
    setSelectedSeat(selectedSeat === seatKey ? null : seatKey);
    setIdSeatSelected(seatId);
  };
  const isDateUnavailable = (date) => {
    return $14e0f24ef4ac5c92$export$618d60ea299da42(date, locale) || date.compare(minDate) < 0 || date.compare(maxDate) > 0;
  };
  const handleDateChange = (date) => {
    setSelectedDate(date);
    setDateSelected(true);
  };
  const fetchAvailableSeats = async (selectedDate2) => {
    try {
      dispatch(setLoading(true));
      const workspaceResponse = await getSingleWorkspace(id2);
      const seatsAvailableResponse = await getAvailableSeats(id2);
      if ((workspaceResponse == null ? void 0 : workspaceResponse.status) === 200 && (seatsAvailableResponse == null ? void 0 : seatsAvailableResponse.status) === 200) {
        const seatData = seatsAvailableResponse.data.data;
        const availableSeatsArray = seatData.filter((seat) => {
          const availability = seat.availability[selectedDate2];
          return availability === void 0 || availability === null || availability === true;
        }).map((seat) => `${seat.tableNumber}-${seat.seatNumber}`);
        setAvailableSeats(availableSeatsArray);
        const groupedTables = seatData.reduce((tables2, seat) => {
          let table = tables2.find((t2) => t2.tableNumber === seat.tableNumber);
          if (!table) {
            table = { tableNumber: seat.tableNumber, seats: [] };
            tables2.push(table);
          }
          table.seats.push(seat);
          table.seats.sort((a, b) => a.seatNumber - b.seatNumber);
          return tables2;
        }, []);
        setTables(groupedTables);
        setWorkspace(workspaceResponse.data.data);
      }
      dispatch(setLoading(false));
    } catch (error) {
      console.error(error);
      dispatch(setLoading(false));
      _t.error("An error occurred. Please try again.");
    }
  };
  const handleBooking = async () => {
    navigate(
      `/workspace/${id2}/booking?seat=${selectedSeat}&seatId=${seatIdSelected}&date=${selectedDate}`
    );
  };
  const nextTable = () => {
    setCurrentTableIndex((prevIndex) => (prevIndex + 1) % tables.length);
  };
  const prevTable = () => {
    setCurrentTableIndex(
      (prevIndex) => (prevIndex - 1 + tables.length) % tables.length
    );
  };
  reactExports.useEffect(() => {
    const fetchWorkSpace = async () => {
      try {
        dispatch(setLoading(true));
        const response = await getSingleWorkspace(id2);
        if ((response == null ? void 0 : response.status) === 200) {
          dispatch(setLoading(false));
          setWorkspace(response.data.data);
        } else {
          _t.error("Failed to fetch workspace details");
          dispatch(setLoading(false));
          navigate("/");
        }
      } catch (error) {
        console.error(error);
        dispatch(setLoading(false));
        navigate("/");
        _t.error("Failed to fetch workspace details");
      }
    };
    fetchWorkSpace();
  }, [dispatch, id2, navigate]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center items-center p-4 min-h-screen bg-gradient-to-br dark:from-gray-800 dark:to-gray-900", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white dark:bg-gray-900 shadow-lg rounded-lg p-6 w-full max-w-3xl border border-gray-200 dark:border-gray-700 transition-transform duration-300 transform hover:scale-105", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-bold text-gray-800 dark:text-white mb-4", children: workspaceData.buildingName }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-gray-600 dark:text-gray-400", children: [
      workspaceData.state,
      ", ",
      workspaceData.district
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center mb-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-lg text-gray-800 dark:text-white mb-2", children: "Select Date" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-500 dark:text-gray-300 mb-2", children: "Please select a date to check available seats" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        calendar_default,
        {
          "aria-label": "Select a date",
          isDateUnavailable,
          onChange: handleDateChange,
          value: selectedDate
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center mb-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        disabled: !dateSelected,
        onClick: () => fetchAvailableSeats(selectedDate.toString()),
        className: "bg-orange-500 text-white py-2 px-6 rounded-md shadow-md hover:bg-orange-400 transition duration-300 flex items-center",
        children: loading ? /* @__PURE__ */ jsxRuntimeExports.jsx(ReactLoading, { type: "spin", height: 20, width: 20, color: "white" }) : "Check Available Seats"
      }
    ) }),
    dateSelected && tables.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: prevTable, className: "p-2 bg-orange-100 dark:bg-gray-700 rounded-full hover:bg-orange-200 dark:hover:bg-gray-600 transition duration-300", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronLeft, { className: "w-6 h-6 text-orange-500 dark:text-orange-400" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "font-semibold text-lg text-gray-800 dark:text-white", children: [
          "Table ",
          tables[currentTableIndex].tableNumber
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: nextTable, className: "p-2 bg-orange-100 dark:bg-gray-700 rounded-full hover:bg-orange-200 dark:hover:bg-gray-600 transition duration-300", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "w-6 h-6 text-orange-500 dark:text-orange-400" }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-center w-full space-x-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col space-y-2", children: tables[currentTableIndex].seats.slice(0, Math.ceil(tables[currentTableIndex].seats.length / 2)).map((seat) => {
          const seatKey = `${tables[currentTableIndex].tableNumber}-${seat.seatNumber}`;
          const isSelected = selectedSeat === seatKey;
          const isAvailable = availableSeats.includes(seatKey);
          const seatId = `${seat._id}`;
          return /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: () => isAvailable && toggleSeat(seatKey, seatId),
              className: `w-12 h-12 rounded-full border-2 transition duration-300 transform hover:scale-105 
                    ${isSelected ? "bg-orange-500 text-white" : isAvailable ? "bg-white dark:bg-gray-700 text-black border-orange-500" : "bg-gray-200 dark:bg-gray-600 text-gray-400"}`,
              disabled: !isAvailable,
              children: seat.seatNumber
            },
            seatKey
          );
        }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-gray-300 dark:bg-gray-600 w-24 h-32 rounded-lg shadow-lg flex flex-col justify-center items-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-orange-500 dark:text-orange-300 font-semibold", children: "Table" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col space-y-2", children: tables[currentTableIndex].seats.slice(Math.ceil(tables[currentTableIndex].seats.length / 2)).map((seat) => {
          const seatKey = `${tables[currentTableIndex].tableNumber}-${seat.seatNumber}`;
          const isSelected = selectedSeat === seatKey;
          const isAvailable = availableSeats.includes(seatKey);
          const seatId = `${seat._id}`;
          return /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: () => isAvailable && toggleSeat(seatKey, seatId),
              className: `w-12 h-12 rounded-full border-2 transition duration-300 transform hover:scale-105 
                    ${isSelected ? "bg-orange-500 text-white" : isAvailable ? "bg-white dark:bg-gray-700 text-black border-orange-500" : "bg-gray-200 dark:bg-gray-600 text-gray-400"}`,
              disabled: !isAvailable,
              children: seat.seatNumber
            },
            seatKey
          );
        }) })
      ] })
    ] }),
    tables.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 flex justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        onClick: handleBooking,
        className: "bg-orange-500 text-white py-2 px-6 rounded-md hover:bg-orange-400 transition duration-300",
        children: "Confirm Booking"
      }
    ) })
  ] }) });
};
const BookingFrom = () => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatedPage, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen dark:bg-gray-900  flex flex-col", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Header, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: "flex-grow flex", children: /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "flex-1 p-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(BookingTable, {}) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] }) }) });
};
export {
  BookingFrom as default
};
