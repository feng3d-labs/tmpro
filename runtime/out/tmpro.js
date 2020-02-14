var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
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
var tmpro;
(function (tmpro) {
    /**
     * Internal horizontal text alignment options.
     */
    var HorizontalAlignmentOptions;
    (function (HorizontalAlignmentOptions) {
        HorizontalAlignmentOptions[HorizontalAlignmentOptions["Left"] = 1] = "Left";
        HorizontalAlignmentOptions[HorizontalAlignmentOptions["Center"] = 2] = "Center";
        HorizontalAlignmentOptions[HorizontalAlignmentOptions["Right"] = 4] = "Right";
        HorizontalAlignmentOptions[HorizontalAlignmentOptions["Justified"] = 8] = "Justified";
        HorizontalAlignmentOptions[HorizontalAlignmentOptions["Flush"] = 16] = "Flush";
        HorizontalAlignmentOptions[HorizontalAlignmentOptions["Geometry"] = 32] = "Geometry";
    })(HorizontalAlignmentOptions = tmpro.HorizontalAlignmentOptions || (tmpro.HorizontalAlignmentOptions = {}));
})(tmpro || (tmpro = {}));
var tmpro;
(function (tmpro) {
    /**
     * Internal vertical text alignment options.
     */
    var VerticalAlignmentOptions;
    (function (VerticalAlignmentOptions) {
        VerticalAlignmentOptions[VerticalAlignmentOptions["Top"] = 256] = "Top";
        VerticalAlignmentOptions[VerticalAlignmentOptions["Middle"] = 512] = "Middle";
        VerticalAlignmentOptions[VerticalAlignmentOptions["Bottom"] = 1024] = "Bottom";
        VerticalAlignmentOptions[VerticalAlignmentOptions["Baseline"] = 2048] = "Baseline";
        VerticalAlignmentOptions[VerticalAlignmentOptions["Geometry"] = 4096] = "Geometry";
        VerticalAlignmentOptions[VerticalAlignmentOptions["Capline"] = 8192] = "Capline";
    })(VerticalAlignmentOptions = tmpro.VerticalAlignmentOptions || (tmpro.VerticalAlignmentOptions = {}));
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
})(tmpro || (tmpro = {}));
var tmpro;
(function (tmpro) {
    var TextAlignmentOptions;
    (function (TextAlignmentOptions) {
        TextAlignmentOptions[TextAlignmentOptions["TopLeft"] = 257] = "TopLeft";
        TextAlignmentOptions[TextAlignmentOptions["Top"] = 258] = "Top";
        TextAlignmentOptions[TextAlignmentOptions["TopRight"] = 260] = "TopRight";
        TextAlignmentOptions[TextAlignmentOptions["TopJustified"] = 264] = "TopJustified";
        TextAlignmentOptions[TextAlignmentOptions["TopFlush"] = 272] = "TopFlush";
        TextAlignmentOptions[TextAlignmentOptions["TopGeoAligned"] = 288] = "TopGeoAligned";
        TextAlignmentOptions[TextAlignmentOptions["Left"] = 513] = "Left";
        TextAlignmentOptions[TextAlignmentOptions["Center"] = 514] = "Center";
        TextAlignmentOptions[TextAlignmentOptions["Right"] = 516] = "Right";
        TextAlignmentOptions[TextAlignmentOptions["Justified"] = 520] = "Justified";
        TextAlignmentOptions[TextAlignmentOptions["Flush"] = 528] = "Flush";
        TextAlignmentOptions[TextAlignmentOptions["CenterGeoAligned"] = 544] = "CenterGeoAligned";
        TextAlignmentOptions[TextAlignmentOptions["BottomLeft"] = 1025] = "BottomLeft";
        TextAlignmentOptions[TextAlignmentOptions["Bottom"] = 1026] = "Bottom";
        TextAlignmentOptions[TextAlignmentOptions["BottomRight"] = 1028] = "BottomRight";
        TextAlignmentOptions[TextAlignmentOptions["BottomJustified"] = 1032] = "BottomJustified";
        TextAlignmentOptions[TextAlignmentOptions["BottomFlush"] = 1040] = "BottomFlush";
        TextAlignmentOptions[TextAlignmentOptions["BottomGeoAligned"] = 1056] = "BottomGeoAligned";
        TextAlignmentOptions[TextAlignmentOptions["BaselineLeft"] = 2049] = "BaselineLeft";
        TextAlignmentOptions[TextAlignmentOptions["Baseline"] = 2050] = "Baseline";
        TextAlignmentOptions[TextAlignmentOptions["BaselineRight"] = 2052] = "BaselineRight";
        TextAlignmentOptions[TextAlignmentOptions["BaselineJustified"] = 2056] = "BaselineJustified";
        TextAlignmentOptions[TextAlignmentOptions["BaselineFlush"] = 2064] = "BaselineFlush";
        TextAlignmentOptions[TextAlignmentOptions["BaselineGeoAligned"] = 2080] = "BaselineGeoAligned";
        TextAlignmentOptions[TextAlignmentOptions["MidlineLeft"] = 4097] = "MidlineLeft";
        TextAlignmentOptions[TextAlignmentOptions["Midline"] = 4098] = "Midline";
        TextAlignmentOptions[TextAlignmentOptions["MidlineRight"] = 4100] = "MidlineRight";
        TextAlignmentOptions[TextAlignmentOptions["MidlineJustified"] = 4104] = "MidlineJustified";
        TextAlignmentOptions[TextAlignmentOptions["MidlineFlush"] = 4112] = "MidlineFlush";
        TextAlignmentOptions[TextAlignmentOptions["MidlineGeoAligned"] = 4128] = "MidlineGeoAligned";
        TextAlignmentOptions[TextAlignmentOptions["CaplineLeft"] = 8193] = "CaplineLeft";
        TextAlignmentOptions[TextAlignmentOptions["Capline"] = 8194] = "Capline";
        TextAlignmentOptions[TextAlignmentOptions["CaplineRight"] = 8196] = "CaplineRight";
        TextAlignmentOptions[TextAlignmentOptions["CaplineJustified"] = 8200] = "CaplineJustified";
        TextAlignmentOptions[TextAlignmentOptions["CaplineFlush"] = 8208] = "CaplineFlush";
        TextAlignmentOptions[TextAlignmentOptions["CaplineGeoAligned"] = 8224] = "CaplineGeoAligned";
    })(TextAlignmentOptions = tmpro.TextAlignmentOptions || (tmpro.TextAlignmentOptions = {}));
    ;
})(tmpro || (tmpro = {}));
var tmpro;
(function (tmpro) {
    var TextOverflowModes;
    (function (TextOverflowModes) {
        TextOverflowModes[TextOverflowModes["Overflow"] = 0] = "Overflow";
        TextOverflowModes[TextOverflowModes["Ellipsis"] = 1] = "Ellipsis";
        TextOverflowModes[TextOverflowModes["Masking"] = 2] = "Masking";
        TextOverflowModes[TextOverflowModes["Truncate"] = 3] = "Truncate";
        TextOverflowModes[TextOverflowModes["ScrollRect"] = 4] = "ScrollRect";
        TextOverflowModes[TextOverflowModes["Page"] = 5] = "Page";
        TextOverflowModes[TextOverflowModes["Linked"] = 6] = "Linked";
    })(TextOverflowModes = tmpro.TextOverflowModes || (tmpro.TextOverflowModes = {}));
    ;
})(tmpro || (tmpro = {}));
var tmpro;
(function (tmpro) {
    var TextureMappingOptions;
    (function (TextureMappingOptions) {
        TextureMappingOptions[TextureMappingOptions["Character"] = 0] = "Character";
        TextureMappingOptions[TextureMappingOptions["Line"] = 1] = "Line";
        TextureMappingOptions[TextureMappingOptions["Paragraph"] = 2] = "Paragraph";
        TextureMappingOptions[TextureMappingOptions["MatchAspect"] = 3] = "MatchAspect";
    })(TextureMappingOptions = tmpro.TextureMappingOptions || (tmpro.TextureMappingOptions = {}));
    ;
})(tmpro || (tmpro = {}));
var tmpro;
(function (tmpro) {
    var VertexSortingOrder;
    (function (VertexSortingOrder) {
        VertexSortingOrder[VertexSortingOrder["Normal"] = 0] = "Normal";
        VertexSortingOrder[VertexSortingOrder["Reverse"] = 1] = "Reverse";
    })(VertexSortingOrder = tmpro.VertexSortingOrder || (tmpro.VertexSortingOrder = {}));
    ;
})(tmpro || (tmpro = {}));
var tmpro;
(function (tmpro) {
    var VertexGradient = /** @class */ (function () {
        function VertexGradient(color) {
            this.topLeft = color;
            this.topRight = color;
            this.bottomLeft = color;
            this.bottomRight = color;
        }
        VertexGradient.prototype.VertexGradient = function (color0, color1, color2, color3) {
            this.topLeft = color0;
            this.topRight = color1;
            this.bottomLeft = color2;
            this.bottomRight = color3;
        };
        return VertexGradient;
    }());
    tmpro.VertexGradient = VertexGradient;
})(tmpro || (tmpro = {}));
var tmpro;
(function (tmpro) {
    tmpro.TMP_SDF_vertex = "\n\nattribute vec2 a_position;\nattribute vec2 a_uv;\n\nuniform vec4 u_uvRect;\nuniform vec2 u_size;\nuniform mat4 u_modelMatrix;\nuniform mat4 u_viewProjection;\n\nvarying vec2 v_uv;\nvarying vec2 v_position;\n\nvoid main() \n{\n    vec2 position = a_position * u_size;\n    gl_Position = u_viewProjection * u_modelMatrix * vec4(position, 0.0, 1.0);\n    v_uv = u_uvRect.xy + a_uv * u_uvRect.zw;\n    v_position = position.xy;\n}\n    ";
})(tmpro || (tmpro = {}));
var tmpro;
(function (tmpro) {
    tmpro.TMP_SDF_fragment = "\nprecision mediump float;\n\nuniform sampler2D s_texture;\nvarying vec2 v_uv;\nvarying vec2 v_position;\n\nuniform vec4 u_color;\nuniform vec4 u_mask;\n\nvoid main() \n{\n    if(v_position.x < u_mask.x || v_position.x > u_mask.x + u_mask.z || v_position.y < u_mask.y || v_position.y > u_mask.y + u_mask.w)\n        discard;\n\n    vec4 color = texture2D(s_texture, v_uv);\n    gl_FragColor = color * u_color;\n}\n    ";
})(tmpro || (tmpro = {}));
var tmpro;
(function (tmpro) {
    /**
     * UnityShader "TextMeshPro/Distance Field"
     */
    var TextMeshProDistanceFieldUniforms = /** @class */ (function () {
        function TextMeshProDistanceFieldUniforms() {
            this._FaceColor = new feng3d.Color4(1, 1, 1, 1);
            this._FaceTex = feng3d.Texture2D.white;
            this._FaceTex_ST = new feng3d.Vector4(1, 1, 0, 0);
            this._FaceUVSpeedX = 0;
            this._FaceUVSpeedY = 0;
            this._OutlineSoftness = 0;
            this._FaceDilate = 0;
            this._OutlineColor = new feng3d.Color4(0, 0, 0, 1);
            this._OutlineTex = feng3d.Texture2D.white;
            this._OutlineTex_ST = new feng3d.Vector4(1, 1, 0, 0);
            this._OutlineUVSpeedX = 0;
            this._OutlineUVSpeedY = 0;
            this._OutlineWidth = 0;
            this._UnderlayColor = new feng3d.Vector4(0, 0, 0, 0.5);
            this._UnderlayOffsetX = 0;
            this._UnderlayOffsetY = 0;
            this._UnderlayDilate = 0;
            this._UnderlaySoftness = 0;
            this._Bevel = 0.5;
            this._BevelOffset = 0;
            this._BevelWidth = 0;
            this._BevelRoundness = 0;
            this._BevelClamp = 0;
            this._LightAngle = 3.1416;
            this._SpecularColor = new feng3d.Vector4(0, 0, 0, 0.5);
            this._SpecularPower = 2.0;
            this._Reflectivity = 10.0;
            this._Diffuse = 0.5;
            this._Ambient = 0.5;
            this._BumpMap = feng3d.Texture2D.defaultNormal;
            this._BumpFace = 0;
            this._BumpOutline = 0;
            this._ReflectFaceColor = new feng3d.Vector4(0, 0, 0, 1);
            this._ReflectOutlineColor = new feng3d.Vector4(0, 0, 0, 1);
            this.s_skyboxTexture = feng3d.TextureCube.default;
            this._EnvMatrixRotation = new feng3d.Vector4(0, 0, 0, 0);
            this._GlowColor = new feng3d.Vector4(0, 1, 0, 0.5);
            this._GlowOffset = 0;
            this._GlowInner = 0.05;
            this._GlowOuter = 0.05;
            this._GlowPower = 0.75;
            this._MainTex = feng3d.Texture2D.white;
            this._GradientScale = 5.0;
            this._TextureWidth = 512;
            this._TextureHeight = 512;
            this._ScaleX = 1.0;
            this._ScaleY = 1.0;
            this._Sharpness = 0;
            this._PerspectiveFilter = 0.875;
            this._VertexOffsetX = 0;
            this._VertexOffsetY = 0;
            this._MaskCoord = new feng3d.Vector4(0, 0, 32767, 32767);
            this._MaskSoftnessX = 0;
            this._MaskSoftnessY = 0;
            this._ClipRect = new feng3d.Vector4(-32767, -32767, 32767, 32767);
            this._StencilReadMask = 255;
            this._WeightNormal = 0;
            this._WeightBold = 0.5;
            this._ShaderFlags = 0;
            this._ScaleRatioA = 1;
            this._ScaleRatioB = 1;
            this._ScaleRatioC = 1;
            this._Stencil = 0;
            this._StencilComp = 0;
            this._StencilOp = 0;
            this._StencilWriteMask = 255;
        }
        __decorate([
            feng3d.serialize,
            feng3d.oav({ block: "Face" })
        ], TextMeshProDistanceFieldUniforms.prototype, "_FaceColor", void 0);
        __decorate([
            feng3d.serialize,
            feng3d.oav({ block: "Face" })
        ], TextMeshProDistanceFieldUniforms.prototype, "_FaceTex", void 0);
        __decorate([
            feng3d.serialize,
            feng3d.oav({ block: "Face" })
        ], TextMeshProDistanceFieldUniforms.prototype, "_FaceTex_ST", void 0);
        __decorate([
            feng3d.serialize,
            feng3d.oav({ block: "Face", componentParam: { step: 0.05, minValue: -5, maxValue: 5 } })
        ], TextMeshProDistanceFieldUniforms.prototype, "_FaceUVSpeedX", void 0);
        __decorate([
            feng3d.serialize,
            feng3d.oav({ block: "Face", componentParam: { step: 0.05, minValue: -5, maxValue: 5 } })
        ], TextMeshProDistanceFieldUniforms.prototype, "_FaceUVSpeedY", void 0);
        __decorate([
            feng3d.serialize,
            feng3d.oav({ block: "Face", componentParam: { step: 0.05, minValue: 0, maxValue: 1 } })
        ], TextMeshProDistanceFieldUniforms.prototype, "_OutlineSoftness", void 0);
        __decorate([
            feng3d.serialize,
            feng3d.oav({ block: "Face", componentParam: { step: 0.05, minValue: -1, maxValue: 1 } })
        ], TextMeshProDistanceFieldUniforms.prototype, "_FaceDilate", void 0);
        __decorate([
            feng3d.oav({ block: "Outline" })
        ], TextMeshProDistanceFieldUniforms.prototype, "_OutlineColor", void 0);
        __decorate([
            feng3d.serialize,
            feng3d.oav({ block: "Outline" })
        ], TextMeshProDistanceFieldUniforms.prototype, "_OutlineTex", void 0);
        __decorate([
            feng3d.serialize,
            feng3d.oav({ block: "Outline" })
        ], TextMeshProDistanceFieldUniforms.prototype, "_OutlineTex_ST", void 0);
        __decorate([
            feng3d.serialize,
            feng3d.oav({ block: "Outline", componentParam: { step: 0.05, minValue: -5, maxValue: 5 } })
        ], TextMeshProDistanceFieldUniforms.prototype, "_OutlineUVSpeedX", void 0);
        __decorate([
            feng3d.serialize,
            feng3d.oav({ block: "Outline", componentParam: { step: 0.05, minValue: -5, maxValue: 5 } })
        ], TextMeshProDistanceFieldUniforms.prototype, "_OutlineUVSpeedY", void 0);
        __decorate([
            feng3d.serialize,
            feng3d.oav({ block: "Outline", componentParam: { step: 0.05, minValue: 0, maxValue: 1 } })
        ], TextMeshProDistanceFieldUniforms.prototype, "_OutlineWidth", void 0);
        __decorate([
            feng3d.serialize,
            feng3d.oav({ block: "Underlay" })
        ], TextMeshProDistanceFieldUniforms.prototype, "_UnderlayColor", void 0);
        __decorate([
            feng3d.serialize,
            feng3d.oav({ block: "Underlay", componentParam: { step: 0.05, minValue: -1, maxValue: 1 } })
        ], TextMeshProDistanceFieldUniforms.prototype, "_UnderlayOffsetX", void 0);
        __decorate([
            feng3d.serialize,
            feng3d.oav({ block: "Underlay", componentParam: { step: 0.05, minValue: -1, maxValue: 1 } })
        ], TextMeshProDistanceFieldUniforms.prototype, "_UnderlayOffsetY", void 0);
        __decorate([
            feng3d.serialize,
            feng3d.oav({ block: "Underlay", componentParam: { step: 0.05, minValue: -1, maxValue: 1 } })
        ], TextMeshProDistanceFieldUniforms.prototype, "_UnderlayDilate", void 0);
        __decorate([
            feng3d.serialize,
            feng3d.oav({ block: "Underlay", componentParam: { step: 0.05, minValue: 0, maxValue: 1 } })
        ], TextMeshProDistanceFieldUniforms.prototype, "_UnderlaySoftness", void 0);
        __decorate([
            feng3d.serialize,
            feng3d.oav({ block: "Lighting/Bevel", componentParam: { step: 0.05, minValue: 0, maxValue: 1 } })
        ], TextMeshProDistanceFieldUniforms.prototype, "_Bevel", void 0);
        __decorate([
            feng3d.serialize,
            feng3d.oav({ block: "Lighting/Bevel", componentParam: { step: 0.05, minValue: 0.5, maxValue: 0.5 } })
        ], TextMeshProDistanceFieldUniforms.prototype, "_BevelOffset", void 0);
        __decorate([
            feng3d.serialize,
            feng3d.oav({ block: "Lighting/Bevel", componentParam: { step: 0.05, minValue: -0.5, maxValue: 0.5 } })
        ], TextMeshProDistanceFieldUniforms.prototype, "_BevelWidth", void 0);
        __decorate([
            feng3d.serialize,
            feng3d.oav({ block: "Lighting/Bevel", componentParam: { step: 0.05, minValue: 0, maxValue: 1 } })
        ], TextMeshProDistanceFieldUniforms.prototype, "_BevelRoundness", void 0);
        __decorate([
            feng3d.serialize,
            feng3d.oav({ block: "Lighting/Bevel", componentParam: { step: 0.05, minValue: 0, maxValue: 1 } })
        ], TextMeshProDistanceFieldUniforms.prototype, "_BevelClamp", void 0);
        __decorate([
            feng3d.serialize,
            feng3d.oav({ block: "Lighting/Local Lighting", componentParam: { step: 0.05, minValue: 0, maxValue: 6.2831853 } })
        ], TextMeshProDistanceFieldUniforms.prototype, "_LightAngle", void 0);
        __decorate([
            feng3d.serialize,
            feng3d.oav({ block: "Lighting/Local Lighting" })
        ], TextMeshProDistanceFieldUniforms.prototype, "_SpecularColor", void 0);
        __decorate([
            feng3d.serialize,
            feng3d.oav({ block: "Lighting/Local Lighting", componentParam: { step: 0.05, minValue: 0, maxValue: 4 } })
        ], TextMeshProDistanceFieldUniforms.prototype, "_SpecularPower", void 0);
        __decorate([
            feng3d.serialize,
            feng3d.oav({ block: "Lighting/Local Lighting", componentParam: { step: 0.05, minValue: 5, maxValue: 15 } })
        ], TextMeshProDistanceFieldUniforms.prototype, "_Reflectivity", void 0);
        __decorate([
            feng3d.serialize,
            feng3d.oav({ block: "Lighting/Local Lighting", componentParam: { step: 0.05, minValue: 0, maxValue: 1 } })
        ], TextMeshProDistanceFieldUniforms.prototype, "_Diffuse", void 0);
        __decorate([
            feng3d.serialize,
            feng3d.oav({ block: "Lighting/Local Lighting", componentParam: { step: 0.05, minValue: 1, maxValue: 0 } })
        ], TextMeshProDistanceFieldUniforms.prototype, "_Ambient", void 0);
        __decorate([
            feng3d.serialize,
            feng3d.oav({ block: "Lighting/Bump Map" })
        ], TextMeshProDistanceFieldUniforms.prototype, "_BumpMap", void 0);
        __decorate([
            feng3d.serialize,
            feng3d.oav({ block: "Lighting/Bump Map", componentParam: { step: 0.05, minValue: 0, maxValue: 1 } })
        ], TextMeshProDistanceFieldUniforms.prototype, "_BumpFace", void 0);
        __decorate([
            feng3d.serialize,
            feng3d.oav({ block: "Lighting/Bump Map", componentParam: { step: 0.05, minValue: 0, maxValue: 1 } })
        ], TextMeshProDistanceFieldUniforms.prototype, "_BumpOutline", void 0);
        __decorate([
            feng3d.serialize,
            feng3d.oav({ block: "Lighting/Environment Map" })
        ], TextMeshProDistanceFieldUniforms.prototype, "_ReflectFaceColor", void 0);
        __decorate([
            feng3d.serialize,
            feng3d.oav({ block: "Lighting/Environment Map" })
        ], TextMeshProDistanceFieldUniforms.prototype, "_ReflectOutlineColor", void 0);
        __decorate([
            feng3d.serialize,
            feng3d.oav({ block: "Lighting/Environment Map", component: "OAVPick", componentParam: { accepttype: "texturecube", datatype: "texturecube" } })
        ], TextMeshProDistanceFieldUniforms.prototype, "s_skyboxTexture", void 0);
        __decorate([
            feng3d.serialize,
            feng3d.oav({ block: "Lighting/Environment Map" })
        ], TextMeshProDistanceFieldUniforms.prototype, "_EnvMatrixRotation", void 0);
        __decorate([
            feng3d.serialize,
            feng3d.oav({ block: "Glow" })
        ], TextMeshProDistanceFieldUniforms.prototype, "_GlowColor", void 0);
        __decorate([
            feng3d.serialize,
            feng3d.oav({ block: "Glow", componentParam: { step: 0.05, minValue: -1, maxValue: 1 } })
        ], TextMeshProDistanceFieldUniforms.prototype, "_GlowOffset", void 0);
        __decorate([
            feng3d.serialize,
            feng3d.oav({ block: "Glow", componentParam: { step: 0.05, minValue: 0, maxValue: 1 } })
        ], TextMeshProDistanceFieldUniforms.prototype, "_GlowInner", void 0);
        __decorate([
            feng3d.serialize,
            feng3d.oav({ block: "Glow", componentParam: { step: 0.05, minValue: 0, maxValue: 1 } })
        ], TextMeshProDistanceFieldUniforms.prototype, "_GlowOuter", void 0);
        __decorate([
            feng3d.serialize,
            feng3d.oav({ block: "Glow", componentParam: { step: 0.05, minValue: 1, maxValue: 0 } })
        ], TextMeshProDistanceFieldUniforms.prototype, "_GlowPower", void 0);
        __decorate([
            feng3d.serialize,
            feng3d.oav({ block: "Debug Settings" })
        ], TextMeshProDistanceFieldUniforms.prototype, "_MainTex", void 0);
        __decorate([
            feng3d.serialize,
            feng3d.oav({ block: "Debug Settings" })
        ], TextMeshProDistanceFieldUniforms.prototype, "_GradientScale", void 0);
        __decorate([
            feng3d.serialize,
            feng3d.oav({ block: "Debug Settings" })
        ], TextMeshProDistanceFieldUniforms.prototype, "_TextureWidth", void 0);
        __decorate([
            feng3d.serialize,
            feng3d.oav({ block: "Debug Settings" })
        ], TextMeshProDistanceFieldUniforms.prototype, "_TextureHeight", void 0);
        __decorate([
            feng3d.serialize,
            feng3d.oav({ block: "Debug Settings" })
        ], TextMeshProDistanceFieldUniforms.prototype, "_ScaleX", void 0);
        __decorate([
            feng3d.serialize,
            feng3d.oav({ block: "Debug Settings" })
        ], TextMeshProDistanceFieldUniforms.prototype, "_ScaleY", void 0);
        __decorate([
            feng3d.serialize,
            feng3d.oav({ block: "Debug Settings", componentParam: { step: 0.05, minValue: -1, maxValue: 1 } })
        ], TextMeshProDistanceFieldUniforms.prototype, "_Sharpness", void 0);
        __decorate([
            feng3d.serialize,
            feng3d.oav({ block: "Debug Settings", componentParam: { step: 0.05, minValue: 0, maxValue: 1 } })
        ], TextMeshProDistanceFieldUniforms.prototype, "_PerspectiveFilter", void 0);
        __decorate([
            feng3d.serialize,
            feng3d.oav({ block: "Debug Settings" })
        ], TextMeshProDistanceFieldUniforms.prototype, "_VertexOffsetX", void 0);
        __decorate([
            feng3d.serialize,
            feng3d.oav({ block: "Debug Settings" })
        ], TextMeshProDistanceFieldUniforms.prototype, "_VertexOffsetY", void 0);
        __decorate([
            feng3d.serialize,
            feng3d.oav({ block: "Debug Settings" })
        ], TextMeshProDistanceFieldUniforms.prototype, "_MaskCoord", void 0);
        __decorate([
            feng3d.serialize,
            feng3d.oav({ block: "Debug Settings" })
        ], TextMeshProDistanceFieldUniforms.prototype, "_MaskSoftnessX", void 0);
        __decorate([
            feng3d.serialize,
            feng3d.oav({ block: "Debug Settings" })
        ], TextMeshProDistanceFieldUniforms.prototype, "_MaskSoftnessY", void 0);
        __decorate([
            feng3d.serialize,
            feng3d.oav({ block: "Debug Settings" })
        ], TextMeshProDistanceFieldUniforms.prototype, "_ClipRect", void 0);
        __decorate([
            feng3d.serialize
        ], TextMeshProDistanceFieldUniforms.prototype, "_WeightNormal", void 0);
        __decorate([
            feng3d.serialize
        ], TextMeshProDistanceFieldUniforms.prototype, "_WeightBold", void 0);
        __decorate([
            feng3d.serialize,
            feng3d.oav({ block: "Debug Settings" })
        ], TextMeshProDistanceFieldUniforms.prototype, "_ShaderFlags", void 0);
        __decorate([
            feng3d.serialize,
            feng3d.oav({ block: "Debug Settings" })
        ], TextMeshProDistanceFieldUniforms.prototype, "_ScaleRatioA", void 0);
        __decorate([
            feng3d.serialize,
            feng3d.oav({ block: "Debug Settings" })
        ], TextMeshProDistanceFieldUniforms.prototype, "_ScaleRatioB", void 0);
        __decorate([
            feng3d.serialize,
            feng3d.oav({ block: "Debug Settings" })
        ], TextMeshProDistanceFieldUniforms.prototype, "_ScaleRatioC", void 0);
        __decorate([
            feng3d.serialize,
            feng3d.oav({ block: "Debug Settings" })
        ], TextMeshProDistanceFieldUniforms.prototype, "_Stencil", void 0);
        __decorate([
            feng3d.serialize,
            feng3d.oav({ block: "Debug Settings" })
        ], TextMeshProDistanceFieldUniforms.prototype, "_StencilComp", void 0);
        __decorate([
            feng3d.serialize
        ], TextMeshProDistanceFieldUniforms.prototype, "_StencilOp", void 0);
        __decorate([
            feng3d.serialize
        ], TextMeshProDistanceFieldUniforms.prototype, "_StencilWriteMask", void 0);
        return TextMeshProDistanceFieldUniforms;
    }());
    tmpro.TextMeshProDistanceFieldUniforms = TextMeshProDistanceFieldUniforms;
    feng3d.shaderConfig.shaders["TextMeshPro/Distance Field"] =
        {
            vertex: tmpro.TMP_SDF_vertex,
            fragment: tmpro.TMP_SDF_fragment,
            cls: TextMeshProDistanceFieldUniforms,
            renderParams: {
                enableBlend: true,
                sfactor: feng3d.BlendFactor.ONE,
                dfactor: feng3d.BlendFactor.ONE_MINUS_SRC_ALPHA,
                colorMask: feng3d.ColorMask.RGBA,
                cullFace: feng3d.CullFace.NONE,
                depthMask: false,
            },
        };
    feng3d.Material.setDefault("TextMeshPro-Material", { shaderName: "TextMeshPro/Distance Field" });
})(tmpro || (tmpro = {}));
var tmpro;
(function (tmpro) {
    var ColorMode;
    (function (ColorMode) {
        ColorMode[ColorMode["Single"] = 0] = "Single";
        ColorMode[ColorMode["HorizontalGradient"] = 1] = "HorizontalGradient";
        ColorMode[ColorMode["VerticalGradient"] = 2] = "VerticalGradient";
        ColorMode[ColorMode["FourCornersGradient"] = 3] = "FourCornersGradient";
    })(ColorMode = tmpro.ColorMode || (tmpro.ColorMode = {}));
    var TMP_ColorGradient = /** @class */ (function () {
        function TMP_ColorGradient() {
            this.colorMode = ColorMode.FourCornersGradient;
            this.topLeft = new feng3d.Color4(1, 1, 1, 1);
            this.topRight = new feng3d.Color4(1, 1, 1, 1);
            this.bottomLeft = new feng3d.Color4(1, 1, 1, 1);
            this.bottomRight = new feng3d.Color4(1, 1, 1, 1);
        }
        return TMP_ColorGradient;
    }());
    tmpro.TMP_ColorGradient = TMP_ColorGradient;
})(tmpro || (tmpro = {}));
var tmpro;
(function (tmpro) {
    /**
     * Base class inherited by the various TextMeshPro Assets.
     */
    var TMP_Asset = /** @class */ (function () {
        function TMP_Asset() {
        }
        return TMP_Asset;
    }());
    tmpro.TMP_Asset = TMP_Asset;
})(tmpro || (tmpro = {}));
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
    var TMP_SpriteAsset = /** @class */ (function (_super) {
        __extends(TMP_SpriteAsset, _super);
        function TMP_SpriteAsset() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return TMP_SpriteAsset;
    }(tmpro.TMP_Asset));
    tmpro.TMP_SpriteAsset = TMP_SpriteAsset;
})(tmpro || (tmpro = {}));
var tmpro;
(function (tmpro) {
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
             * The material to be assigned to this text object. An instance of the material will be assigned to the object's renderer.
             */
            _this.fontMaterial = feng3d.Material.getDefault("TextMeshPro-Material");
            /**
             * Styles to apply to the text such as Bold or Italic.
             */
            _this.fontStyle = tmpro.FontStyles.Normal;
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
            /**
             * A Color Preset which override the local color settings.
             */
            _this.colorGradientPreset = new tmpro.TMP_ColorGradient();
            /**
             * The gradient color applied over the Vertex Color. Can be locally set or driven by a Gradient Asset.
             */
            _this.colorGradient = new tmpro.VertexGradient(new feng3d.Color4(1, 1, 1, 1));
            /**
             * Whether the color settings override the <color> tag.
             */
            _this.overrideColorTags = false;
            /**
             * Spacing adjustments between different character of the text.
             */
            _this.characterSpacing = 0;
            /**
             * Spacing adjustments between different word of the text.
             */
            _this.wordSpacing = 0;
            /**
             * Spacing adjustments between different line of the text.
             */
            _this.lineSpacing = 0;
            /**
             * Spacing adjustments between different paragraph of the text.
             */
            _this.paragraphSpacing = 0;
            /**
             * Horizontal and vertical aligment of the text within its container.
             */
            _this.textAlignment = tmpro.TextAlignmentOptions.TopLeft;
            /**
             *
             */
            _this.enableWordWrapping = false;
            /**
             * CHow to display text which goes past the edge of the container.
             */
            _this.overflowMode = tmpro.TextOverflowModes.Overflow;
            /**
             * Horizontal UV mapping when using a shader with a texture face option.
             */
            _this.horizontalMapping = tmpro.TextureMappingOptions.Character;
            /**
             * Vertical UV mapping when using a shader with a texture face option.
             */
            _this.verticalMapping = tmpro.TextureMappingOptions.Character;
            /**
             * The space between the text and the edge of its container.
             */
            _this.margin = new feng3d.Vector4(0, 0, 0, 0);
            /**
             * Used to enable or disable Rich Text.
             */
            _this.isRichText = true;
            /**
             * Whether the text blocks raycasts from the Graphic Raycaster.
             */
            _this.raycastTarget = true;
            /**
             * Whether to display strings such as \"\\n\" as is or replace them by the character they represent.
             */
            _this.parseCtrlCharacters = true;
            /**
             * Compute descender values from visible characters only. Used to adjust layout behavior when hiding and revealing characters dynamically.
             */
            _this.useMaxVisibleDescender = true;
            /**
             * Enables character specific spacing between pairs of characters.
             */
            _this.enableKerning = true;
            /**
             * Adds some padding between the characters and the edge of the text mesh. Can reduce graphical errors when displaying small text.
             */
            _this.enableExtraPadding = false;
            return _this;
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
            feng3d.oav({ block: "Main Settings", tooltip: "Styles to apply to the text such as Bold or Italic.", component: "OAVEnum", componentParam: { enumClass: tmpro.FontStyles } })
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
    feng3d.classUtils.addClassNameSpace("tmpro");
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