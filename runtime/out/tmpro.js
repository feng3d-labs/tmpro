var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var TMPro;
(function (TMPro) {
    var TMP_Text = /** @class */ (function () {
        function TMP_Text() {
        }
        return TMP_Text;
    }());
    TMPro.TMP_Text = TMP_Text;
})(TMPro || (TMPro = {}));
var TMPro;
(function (TMPro) {
    feng3d.classUtils.addClassNameSpace("TMPro");
    // [0]:Text (TMP) (UnityEngine.RectTransform)
    // [1]:Text (TMP) (UnityEngine.CanvasRenderer)
    // [2]:Text (TMP) (TMPro.TextMeshProUGUI)
    var TextMeshProUGUI = /** @class */ (function (_super) {
        __extends(TextMeshProUGUI, _super);
        function TextMeshProUGUI() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        TextMeshProUGUI = __decorate([
            feng3d.AddComponentMenu("UI/TextMeshPro - Text (UI)")
        ], TextMeshProUGUI);
        return TextMeshProUGUI;
    }(feng3d.Component));
    TMPro.TextMeshProUGUI = TextMeshProUGUI;
})(TMPro || (TMPro = {}));
var TMPro;
(function (TMPro) {
    var TextMeshPro = /** @class */ (function () {
        function TextMeshPro() {
        }
        return TextMeshPro;
    }());
    TMPro.TextMeshPro = TextMeshPro;
})(TMPro || (TMPro = {}));
//# sourceMappingURL=tmpro.js.map