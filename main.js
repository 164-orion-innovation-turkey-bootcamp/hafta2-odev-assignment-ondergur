// import * as readline from 'readline';
// import { stdin as input, stdout as output } from 'process';
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
var Ingredient = /** @class */ (function () {
    function Ingredient(name, count) {
        this.name = name;
        this.count = count;
    }
    return Ingredient;
}());
var marul = new Ingredient("marul", 5);
var tursu = new Ingredient("tursu", 5);
var paketSos = new Ingredient("paketSos", 5);
var sogan = new Ingredient("sogan", 5);
var kofte = new Ingredient("kofte", 5);
var tavuk = new Ingredient("tavuk", 5);
var domates = new Ingredient("domates", 5);
var ekmek = new Ingredient("ekmek", 5);
var patates = new Ingredient("patates", 5);
var cola = new Ingredient("cola", 5);
var ingredients = [marul, tursu, paketSos, sogan, kofte, tavuk, domates, ekmek, patates, cola];
var step = function (time, text) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve(console.log(text));
        }, time);
    });
};
var checkStock = function () {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            for (var _i = 0, ingredients_1 = ingredients; _i < ingredients_1.length; _i++) {
                var ing = ingredients_1[_i];
                if (ing.count > 0) {
                    continue;
                }
                else {
                    reject("Stokta yeterli ".concat(ing.name, " yok."));
                }
            }
            resolve(console.log("Stok kontrolü yapıldı"));
        }, 3000);
    });
};
var readline = require("readline");
var rl = readline.createInterface({ input: process.stdin, output: process.stdout });
var chooseMeat = function () {
    return new Promise(function (resolve, reject) {
        rl.question("Köfte(K) mi Tavuk(T) mu tercih edersiniz?", function (answer) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(answer === "K")) return [3 /*break*/, 2];
                        kofte.count--;
                        return [4 /*yield*/, chooseCookingDegree()];
                    case 1:
                        _a.sent();
                        console.log("buradayim 4");
                        return [3 /*break*/, 5];
                    case 2:
                        if (!(answer === "T")) return [3 /*break*/, 4];
                        return [4 /*yield*/, step(3000, "Tavuk pişir")];
                    case 3:
                        _a.sent();
                        return [3 /*break*/, 5];
                    case 4:
                        reject("Yanlış bir seçim yaptınız");
                        _a.label = 5;
                    case 5:
                        resolve();
                        return [2 /*return*/];
                }
            });
        }); });
    });
};
var chooseCookingDegree = function () {
    return new Promise(function (resolve, reject) {
        rl.question("Pişirme derecesi tercihiniz nedir? \n(1) Az Pişmiş \n (2)Orta Pişmiş \n (3)İyi Pişmiş", function (answer) {
            switch (answer) {
                case "1":
                    step(2000, "Az pişmiş köfte hazır");
                    resolve();
                    break;
                case "2":
                    step(3000, "Orta pişmiş köfte hazır");
                    resolve();
                    break;
                case "3":
                    step(4000, "Çok pişmiş köfte hazır");
                    resolve();
                default:
                    reject();
                    break;
            }
        });
    });
};
var madeHamburger = function () {
    marul.count--;
    domates.count--;
    tursu.count--;
    sogan.count--;
};
var prepareDrink = function () {
    cola.count--;
    step(2000, "İçecek hazır");
};
var prepareSauces = function () { return __awaiter(_this, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                paketSos.count--;
                return [4 /*yield*/, step(1000, "Soslar hazır")];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); };
var combinedSteps = function () { return __awaiter(_this, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                madeHamburger();
                prepareDrink();
                return [4 /*yield*/, step(5000, "Patates kızart")];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); };
function main() {
    return __awaiter(this, void 0, void 0, function () {
        var error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 7, 8, 9]);
                    return [4 /*yield*/, step(1000, "Sipariş alındı.")];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, checkStock()];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, chooseMeat()];
                case 3:
                    _a.sent();
                    return [4 /*yield*/, combinedSteps()];
                case 4:
                    _a.sent();
                    return [4 /*yield*/, prepareSauces()];
                case 5:
                    _a.sent();
                    return [4 /*yield*/, step(1000, "Servis edildi. Afiyet olsun")];
                case 6:
                    _a.sent();
                    return [3 /*break*/, 9];
                case 7:
                    error_1 = _a.sent();
                    console.log(error_1, "Error yazdır");
                    return [3 /*break*/, 9];
                case 8:
                    rl.close();
                    return [7 /*endfinally*/];
                case 9: return [2 /*return*/];
            }
        });
    });
}
main();
