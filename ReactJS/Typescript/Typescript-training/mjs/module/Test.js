define(["require", "exports", "./TestModule"], function (require, exports, TestModule_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    let objTestModule = new TestModule_1.TestModule();
    objTestModule.showInfo();
    TestModule_1.showInfo02();
});
