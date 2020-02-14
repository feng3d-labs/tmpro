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
var tmpro;
(function (tmpro) {
    var TMP_FontAsset = /** @class */ (function () {
        function TMP_FontAsset() {
        }
        return TMP_FontAsset;
    }());
    tmpro.TMP_FontAsset = TMP_FontAsset;
})(tmpro || (tmpro = {}));
var tmpro;
(function (tmpro) {
    /**
     * Styles to apply to the text such as Bold or Italic.
     */
    var FontStyles;
    (function (FontStyles) {
        FontStyles[FontStyles["Normal"] = 0] = "Normal";
        FontStyles[FontStyles["Bold"] = 1] = "Bold";
        FontStyles[FontStyles["Italic"] = 2] = "Italic";
        FontStyles[FontStyles["Underline"] = 4] = "Underline";
        FontStyles[FontStyles["LowerCase"] = 8] = "LowerCase";
        FontStyles[FontStyles["UpperCase"] = 16] = "UpperCase";
        FontStyles[FontStyles["SmallCaps"] = 32] = "SmallCaps";
        FontStyles[FontStyles["Strikethrough"] = 64] = "Strikethrough";
        FontStyles[FontStyles["Superscript"] = 128] = "Superscript";
        FontStyles[FontStyles["Subscript"] = 256] = "Subscript";
        FontStyles[FontStyles["Highlight"] = 512] = "Highlight";
    })(FontStyles = tmpro.FontStyles || (tmpro.FontStyles = {}));
    ;
    var TMP_Text = /** @class */ (function (_super) {
        __extends(TMP_Text, _super);
        function TMP_Text() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            /**
             * A string containing the text to be displayed.
             */
            _this.text = "New Text";
            _this.isRightToLeftText = false;
            /**
             * Styles to apply to the text such as Bold or Italic.
             */
            _this.fontStyle = FontStyles.Normal;
            /**
             * The size the text will be rendered at in points.
             */
            _this.fontSize = 36;
            // fontSizeBase = 36;
            /**
             * Auto sizes the text to fit the available space.
             */
            _this.enableAutoSizing = false;
            /**
             * Text Auto Sizing Min Font Size.
             */
            _this.fontSizeMin = 0;
            /**
             * Text Auto Sizing Max Font Size.
             */
            _this.fontSizeMax = 0;
            /**
             * Compresses character width up to this value before reducing font size.
             */
            _this.charWidthMaxAdj = 0;
            /**
             * Negative value only. Compresses line height down to this value before reducing font size.
             */
            _this.lineSpacingMax = 0;
            /**
             * The base color of the text vertices.
             */
            _this.color = new feng3d.Color4(1, 1, 1, 1);
            /**
             * The gradient color applied over the Vertex Color. Can be locally set or driven by a Gradient Asset.
             */
            _this.enableColorGradient = false;
            return _this;
            /**
             *
             */
            // colorGradient = new VertexGradient(new feng3d.Color4(1, 1, 1, 1));
            // colorGradientPreset: TMP_ColorGradient
        }
        __decorate([
            feng3d.oav({ tooltip: "A string containing the text to be displayed." })
        ], TMP_Text.prototype, "text", void 0);
        __decorate([
            feng3d.oav()
        ], TMP_Text.prototype, "isRightToLeftText", void 0);
        __decorate([
            feng3d.oav({ block: "Main Settings", tooltip: "The Font Asset to be assigned to this text object." })
        ], TMP_Text.prototype, "font", void 0);
        __decorate([
            feng3d.oav({ block: "Main Settings", tooltip: "The material to be assigned to this text object. An instance of the material will be assigned to the object's renderer." })
        ], TMP_Text.prototype, "fontMaterial", void 0);
        __decorate([
            feng3d.oav({ block: "Main Settings", tooltip: "Styles to apply to the text such as Bold or Italic.", component: "OAVEnum", componentParam: { enumClass: FontStyles } })
        ], TMP_Text.prototype, "fontStyle", void 0);
        __decorate([
            feng3d.oav({ block: "Main Settings", tooltip: "The size the text will be rendered at in points." })
        ], TMP_Text.prototype, "fontSize", void 0);
        __decorate([
            feng3d.oav({ block: "Main Settings", tooltip: "Auto sizes the text to fit the available space." })
        ], TMP_Text.prototype, "enableAutoSizing", void 0);
        return TMP_Text;
    }(feng3d.Component));
    tmpro.TMP_Text = TMP_Text;
})(tmpro || (tmpro = {}));
var tmpro;
(function (tmpro) {
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
    }(tmpro.TMP_Text));
    tmpro.TextMeshProUGUI = TextMeshProUGUI;
})(tmpro || (tmpro = {}));
//# sourceMappingURL=tmpro.js.map