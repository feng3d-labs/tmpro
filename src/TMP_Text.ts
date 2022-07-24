namespace tmpro
{

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
        fontMaterial = feng3d.Material.getDefault("TextMeshPro-Material");

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
         * A Color Preset which override the local color settings.
         */
        colorGradientPreset = new TMP_ColorGradient();

        /**
         * The gradient color applied over the Vertex Color. Can be locally set or driven by a Gradient Asset.
         */
        colorGradient = new VertexGradient(new feng3d.Color4(1, 1, 1, 1));

        /**
         * Whether the color settings override the <color> tag.
         */
        overrideColorTags = false;

        /**
         * Spacing adjustments between different character of the text.
         */
        characterSpacing = 0;

        /**
         * Spacing adjustments between different word of the text.
         */
        wordSpacing = 0;

        /**
         * Spacing adjustments between different line of the text.
         */
        lineSpacing = 0;

        /**
         * Spacing adjustments between different paragraph of the text.
         */
        paragraphSpacing = 0;

        /**
         * Horizontal and vertical aligment of the text within its container.
         */
        textAlignment = TextAlignmentOptions.TopLeft;

        /**
         * 
         */
        enableWordWrapping = false;

        /**
         * CHow to display text which goes past the edge of the container.
         */
        overflowMode = TextOverflowModes.Overflow;

        /**
         * Horizontal UV mapping when using a shader with a texture face option.
         */
        horizontalMapping = TextureMappingOptions.Character;

        /**
         * Vertical UV mapping when using a shader with a texture face option.
         */
        verticalMapping = TextureMappingOptions.Character;

        /**
         * The space between the text and the edge of its container.
         */
        margin = new feng3d.Vector4(0, 0, 0, 0);

        /**
         * The order in which text geometry is sorted. Used to adjust the way overlapping characters are displayed.
         */
        geometrySortingOrder: VertexSortingOrder;

        /**
         * Used to enable or disable Rich Text.
         */
        isRichText = true;

        /**
         * Whether the text blocks raycasts from the Graphic Raycaster.
         */
        raycastTarget = true;

        /**
         * Whether to display strings such as \"\\n\" as is or replace them by the character they represent.
         */
        parseCtrlCharacters = true;

        /**
         * Compute descender values from visible characters only. Used to adjust layout behavior when hiding and revealing characters dynamically.
         */
        useMaxVisibleDescender = true;

        /**
         * The Sprite Asset used when NOT specifically referencing one using <sprite=\"Sprite Asset Name\">.
         */
        spriteAsset: TMP_SpriteAsset;

        /**
         * Enables character specific spacing between pairs of characters.
         */
        enableKerning = true;

        /**
         * Adds some padding between the characters and the edge of the text mesh. Can reduce graphical errors when displaying small text.
         */
        enableExtraPadding = false;

    }


}