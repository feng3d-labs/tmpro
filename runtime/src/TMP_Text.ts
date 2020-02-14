namespace tmpro
{

    /**
     * Styles to apply to the text such as Bold or Italic.
     */
    export enum FontStyles
    {
        Normal = 0x0,
        Bold = 0x1,
        Italic = 0x2,
        Underline = 0x4,
        LowerCase = 0x8,
        UpperCase = 0x10,
        SmallCaps = 0x20,
        Strikethrough = 0x40,
        Superscript = 0x80,
        Subscript = 0x100,
        Highlight = 0x200
    };

    export abstract class TMP_Text extends feng3d.Component
    {
        /**
         * A string containing the text to be displayed.
         */
        @feng3d.oav({ tooltip: "A string containing the text to be displayed." })
        text = "New Text";

        @feng3d.oav()
        isRightToLeftText = false;

        /**
         * The Font Asset to be assigned to this text object.
         */
        @feng3d.oav({ block: "Main Settings", tooltip: "The Font Asset to be assigned to this text object." })
        font: TMP_FontAsset;

        /**
         * The material to be assigned to this text object. An instance of the material will be assigned to the object's renderer.
         */
        @feng3d.oav({ block: "Main Settings", tooltip: "The material to be assigned to this text object. An instance of the material will be assigned to the object's renderer." })
        fontMaterial: feng3d.Material;

        /**
         * Styles to apply to the text such as Bold or Italic.
         */
        @feng3d.oav({ block: "Main Settings", tooltip: "Styles to apply to the text such as Bold or Italic.", component: "OAVEnum", componentParam: { enumClass: FontStyles } })
        fontStyle = FontStyles.Normal;

        /**
         * The size the text will be rendered at in points.
         */
        @feng3d.oav({ block: "Main Settings", tooltip: "The size the text will be rendered at in points." })
        fontSize = 36;

        // fontSizeBase = 36;

        /**
         * Auto sizes the text to fit the available space.
         */
        @feng3d.oav({ block: "Main Settings", tooltip: "Auto sizes the text to fit the available space." })
        enableAutoSizing = false;

        /**
         * Text Auto Sizing Min Font Size.
         */
        fontSizeMin = 0;

        /**
         * Text Auto Sizing Max Font Size.
         */
        fontSizeMax = 0;

        /**
         * Compresses character width up to this value before reducing font size.
         */
        charWidthMaxAdj = 0;

        /**
         * Negative value only. Compresses line height down to this value before reducing font size.
         */
        lineSpacingMax = 0;

        /**
         * The base color of the text vertices.
         */
        color = new feng3d.Color4(1, 1, 1, 1);

        /**
         * The gradient color applied over the Vertex Color. Can be locally set or driven by a Gradient Asset.
         */
        enableColorGradient = false;

        /**
         * 
         */
        colorGradient = new VertexGradient(new feng3d.Color4(1, 1, 1, 1));

        colorGradientPreset: TMP_ColorGradient
    }
}