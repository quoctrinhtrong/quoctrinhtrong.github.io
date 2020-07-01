define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.showInfo02 = exports.TestModule = void 0;
    class TestModule {
        showInfo() {
            console.log('log from showInfo!');
        }
    }
    exports.TestModule = TestModule;
    function showInfo02() {
        console.log('log from showInfo02!');
    }
    exports.showInfo02 = showInfo02;
});
