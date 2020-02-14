declare namespace tmpro {
    /**
     * Internal horizontal text alignment options.
     */
    enum HorizontalAlignmentOptions {
        Left = 1,
        Center = 2,
        Right = 4,
        Justified = 8,
        Flush = 16,
        Geometry = 32
    }
}
declare namespace tmpro {
    /**
     * Internal vertical text alignment options.
     */
    enum VerticalAlignmentOptions {
        Top = 256,
        Middle = 512,
        Bottom = 1024,
        Baseline = 2048,
        Geometry = 4096,
        Capline = 8192
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
}
declare namespace tmpro {
    enum TextAlignmentOptions {
        TopLeft = 257,
        Top = 258,
        TopRight = 260,
        TopJustified = 264,
        TopFlush = 272,
        TopGeoAligned = 288,
        Left = 513,
        Center = 514,
        Right = 516,
        Justified = 520,
        Flush = 528,
        CenterGeoAligned = 544,
        BottomLeft = 1025,
        Bottom = 1026,
        BottomRight = 1028,
        BottomJustified = 1032,
        BottomFlush = 1040,
        BottomGeoAligned = 1056,
        BaselineLeft = 2049,
        Baseline = 2050,
        BaselineRight = 2052,
        BaselineJustified = 2056,
        BaselineFlush = 2064,
        BaselineGeoAligned = 2080,
        MidlineLeft = 4097,
        Midline = 4098,
        MidlineRight = 4100,
        MidlineJustified = 4104,
        MidlineFlush = 4112,
        MidlineGeoAligned = 4128,
        CaplineLeft = 8193,
        Capline = 8194,
        CaplineRight = 8196,
        CaplineJustified = 8200,
        CaplineFlush = 8208,
        CaplineGeoAligned = 8224
    }
}
declare namespace tmpro {
    enum TextOverflowModes {
        Overflow = 0,
        Ellipsis = 1,
        Masking = 2,
        Truncate = 3,
        ScrollRect = 4,
        Page = 5,
        Linked = 6
    }
}
declare namespace tmpro {
    enum TextureMappingOptions {
        Character = 0,
        Line = 1,
        Paragraph = 2,
        MatchAspect = 3
    }
}
declare namespace tmpro {
    enum VertexSortingOrder {
        Normal = 0,
        Reverse = 1
    }
}
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
    /**
     * Base class inherited by the various TextMeshPro Assets.
     */
    class TMP_Asset {
        /**
         * HashCode based on the name of the asset.
         */
        hashCode: number;
        /**
         * The material used by this asset.
         */
        material: feng3d.Material;
        /**
         * HashCode based on the name of the material assigned to this asset.
         */
        materialHashCode: number;
    }
}
declare namespace tmpro {
    class TMP_FontAsset {
    }
}
declare namespace tmpro {
    class TMP_SpriteAsset extends TMP_Asset {
    }
}
declare namespace tmpro {
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
         * A Color Preset which override the local color settings.
         */
        colorGradientPreset: TMP_ColorGradient;
        /**
         * The gradient color applied over the Vertex Color. Can be locally set or driven by a Gradient Asset.
         */
        colorGradient: VertexGradient;
        /**
         * Whether the color settings override the <color> tag.
         */
        overrideColorTags: boolean;
        /**
         * Spacing adjustments between different character of the text.
         */
        characterSpacing: number;
        /**
         * Spacing adjustments between different word of the text.
         */
        wordSpacing: number;
        /**
         * Spacing adjustments between different line of the text.
         */
        lineSpacing: number;
        /**
         * Spacing adjustments between different paragraph of the text.
         */
        paragraphSpacing: number;
        /**
         * Horizontal and vertical aligment of the text within its container.
         */
        textAlignment: TextAlignmentOptions;
        /**
         *
         */
        enableWordWrapping: boolean;
        /**
         * CHow to display text which goes past the edge of the container.
         */
        overflowMode: TextOverflowModes;
        /**
         * Horizontal UV mapping when using a shader with a texture face option.
         */
        horizontalMapping: TextureMappingOptions;
        /**
         * Vertical UV mapping when using a shader with a texture face option.
         */
        verticalMapping: TextureMappingOptions;
        /**
         * The space between the text and the edge of its container.
         */
        margin: feng3d.Vector4;
        /**
         * The order in which text geometry is sorted. Used to adjust the way overlapping characters are displayed.
         */
        geometrySortingOrder: VertexSortingOrder;
        /**
         * Used to enable or disable Rich Text.
         */
        isRichText: boolean;
        /**
         * Whether the text blocks raycasts from the Graphic Raycaster.
         */
        raycastTarget: boolean;
        /**
         * Whether to display strings such as \"\\n\" as is or replace them by the character they represent.
         */
        parseCtrlCharacters: boolean;
        /**
         * Compute descender values from visible characters only. Used to adjust layout behavior when hiding and revealing characters dynamically.
         */
        useMaxVisibleDescender: boolean;
        /**
         * The Sprite Asset used when NOT specifically referencing one using <sprite=\"Sprite Asset Name\">.
         */
        spriteAsset: TMP_SpriteAsset;
        /**
         * Enables character specific spacing between pairs of characters.
         */
        enableKerning: boolean;
        /**
         * Adds some padding between the characters and the edge of the text mesh. Can reduce graphical errors when displaying small text.
         */
        enableExtraPadding: boolean;
    }
}
declare namespace tmpro {
    class TextMeshProUGUI extends TMP_Text {
    }
}
//# sourceMappingURL=tmpro.d.ts.map