"use strict";

let truncate = (str, maxLength) => str.length > maxLength ? str.slice(0, maxLength - 1) + "…" : str;
