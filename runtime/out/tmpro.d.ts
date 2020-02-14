declare namespace tmpro {
    class VertexGradient {
        topLeft: feng3d.Color4;
        topRight: feng3d.Color4;
        bottomLeft: feng3d.Color4;
        bottomRight: feng3d.Color4;
        constructor(color: feng3d.Color4);
        VertexGradient(color0: feng3d.Color4, color1: feng3d.Color4, color2: feng3d.Color4, color3: feng3d.Color4): void;
    }
}
declare namespace tmpro {
    enum ColorMode {
        Single = 0,
        HorizontalGradient = 1,
        VerticalGradient = 2,
        FourCornersGradient = 3
    }
    class TMP_ColorGradient {
        colorMode: ColorMode;
        topLeft: feng3d.Color4;
        topRight: feng3d.Color4;
        bottomLeft: feng3d.Color4;
        bottomRight: feng3d.Color4;
    }
}
declare namespace tmpro {
    class TMP_FontAsset {
    }
}
declare namespace tmpro {
    /**
     * Styles to apply to the text such as Bold or Italic.
     */
    enum FontStyles {
        Normal = 0,
        Bold = 1,
        Italic = 2,
        Underline = 4,
        LowerCase = 8,
        UpperCase = 16,
        SmallCaps = 32,
        Strikethrough = 64,
        Superscript = 128,
        Subscript = 256,
        Highlight = 512
    }
    abstract class TMP_Text extends feng3d.Component {
        /**
         * A string containing the text to be displayed.
         */
        text: string;
        isRightToLeftText: boolean;
        /**
         * The Font Asset to be assigned to this text object.
         */
        font: TMP_FontAsset;
        /**
         * The material to be assigned to this text object. An instance of the material will be assigned to the object's renderer.
         */
        fontMaterial: feng3d.Material;
        /**
         * Styles to apply to the text such as Bold or Italic.
         */
        fontStyle: FontStyles;
        /**
         * The size the text will be rendered at in points.
         */
        fontSize: number;
        /**
         * Auto sizes the text to fit the available space.
         */
        enableAutoSizing: boolean;
        /**
         * Text Auto Sizing Min Font Size.
         */
        fontSizeMin: number;
        /**
         * Text Auto Sizing Max Font Size.
         */
        fontSizeMax: number;
        /**
         * Compresses character width up to this value before reducing font size.
         */
        charWidthMaxAdj: number;
        /**
         * Negative value only. Compresses line height down to this value before reducing font size.
         */
        lineSpacingMax: number;
        /**
         * The base color of the text vertices.
         */
        color: feng3d.Color4;
        /**
         * The gradient color applied over the Vertex Color. Can be locally set or driven by a Gradient Asset.
         */
        enableColorGradient: boolean;
        /**
         *
         */
        colorGradient: VertexGradient;
        colorGradientPreset: TMP_ColorGradient;
    }
}
declare namespace tmpro {
    class TextMeshProUGUI extends TMP_Text {
    }
}
//# sourceMappingURL=tmpro.d.ts.map