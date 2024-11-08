var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
class Alert {
  constructor(alert, message) {
    __publicField(this, "alert");
    __publicField(this, "message");
    this.alert = alert;
    this.message = message;
  }
}
export {
  Alert as A
};
