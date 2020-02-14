namespace tmpro
{

    /**
     * UnityShader "TextMeshPro/Distance Field"
     */
    export class TextMeshProDistanceFieldUniforms
    {
        __class__: "tmpro.TextMeshProDistanceFieldUniforms";

        @feng3d.serialize
        @feng3d.oav({ block: "Face" })
        _FaceColor = new feng3d.Color4(1, 1, 1, 1);

        @feng3d.serialize
        @feng3d.oav({ block: "Face" })
        _FaceTex = feng3d.Texture2D.white;

        @feng3d.serialize
        @feng3d.oav({ block: "Face" })
        _FaceTex_ST = new feng3d.Vector4(1, 1, 0, 0);

        @feng3d.serialize
        @feng3d.oav({ block: "Face", componentParam: { step: 0.05, minValue: -5, maxValue: 5 } })
        _FaceUVSpeedX = 0;

        @feng3d.serialize
        @feng3d.oav({ block: "Face", componentParam: { step: 0.05, minValue: -5, maxValue: 5 } })
        _FaceUVSpeedY = 0;

        @feng3d.serialize
        @feng3d.oav({ block: "Face", componentParam: { step: 0.05, minValue: 0, maxValue: 1 } })
        _OutlineSoftness = 0;

        @feng3d.serialize
        @feng3d.oav({ block: "Face", componentParam: { step: 0.05, minValue: -1, maxValue: 1 } })
        _FaceDilate = 0;

        @feng3d.oav({ block: "Outline" })
        _OutlineColor = new feng3d.Color4(0, 0, 0, 1);

        @feng3d.serialize
        @feng3d.oav({ block: "Outline" })
        _OutlineTex = feng3d.Texture2D.white;

        @feng3d.serialize
        @feng3d.oav({ block: "Outline" })
        _OutlineTex_ST = new feng3d.Vector4(1, 1, 0, 0);

        @feng3d.serialize
        @feng3d.oav({ block: "Outline", componentParam: { step: 0.05, minValue: -5, maxValue: 5 } })
        _OutlineUVSpeedX = 0;

        @feng3d.serialize
        @feng3d.oav({ block: "Outline", componentParam: { step: 0.05, minValue: -5, maxValue: 5 } })
        _OutlineUVSpeedY = 0;

        @feng3d.serialize
        @feng3d.oav({ block: "Outline", componentParam: { step: 0.05, minValue: 0, maxValue: 1 } })
        _OutlineWidth = 0;

        @feng3d.serialize
        @feng3d.oav({ block: "Underlay" })
        _UnderlayColor = new feng3d.Vector4(0, 0, 0, 0.5);

        @feng3d.serialize
        @feng3d.oav({ block: "Underlay", componentParam: { step: 0.05, minValue: -1, maxValue: 1 } })
        _UnderlayOffsetX = 0;

        @feng3d.serialize
        @feng3d.oav({ block: "Underlay", componentParam: { step: 0.05, minValue: -1, maxValue: 1 } })
        _UnderlayOffsetY = 0;

        @feng3d.serialize
        @feng3d.oav({ block: "Underlay", componentParam: { step: 0.05, minValue: -1, maxValue: 1 } })
        _UnderlayDilate = 0;

        @feng3d.serialize
        @feng3d.oav({ block: "Underlay", componentParam: { step: 0.05, minValue: 0, maxValue: 1 } })
        _UnderlaySoftness = 0;

        @feng3d.serialize
        @feng3d.oav({ block: "Lighting/Bevel", componentParam: { step: 0.05, minValue: 0, maxValue: 1 } })
        _Bevel = 0.5;

        @feng3d.serialize
        @feng3d.oav({ block: "Lighting/Bevel", componentParam: { step: 0.05, minValue: 0.5, maxValue: 0.5 } })
        _BevelOffset = 0;

        @feng3d.serialize
        @feng3d.oav({ block: "Lighting/Bevel", componentParam: { step: 0.05, minValue: -0.5, maxValue: 0.5 } })
        _BevelWidth = 0;

        @feng3d.serialize
        @feng3d.oav({ block: "Lighting/Bevel", componentParam: { step: 0.05, minValue: 0, maxValue: 1 } })
        _BevelRoundness = 0;

        @feng3d.serialize
        @feng3d.oav({ block: "Lighting/Bevel", componentParam: { step: 0.05, minValue: 0, maxValue: 1 } })
        _BevelClamp = 0;

        @feng3d.serialize
        @feng3d.oav({ block: "Lighting/Local Lighting", componentParam: { step: 0.05, minValue: 0, maxValue: 6.2831853 } })
        _LightAngle = 3.1416;

        @feng3d.serialize
        @feng3d.oav({ block: "Lighting/Local Lighting" })
        _SpecularColor = new feng3d.Vector4(0, 0, 0, 0.5);

        @feng3d.serialize
        @feng3d.oav({ block: "Lighting/Local Lighting", componentParam: { step: 0.05, minValue: 0, maxValue: 4 } })
        _SpecularPower = 2.0;

        @feng3d.serialize
        @feng3d.oav({ block: "Lighting/Local Lighting", componentParam: { step: 0.05, minValue: 5, maxValue: 15 } })
        _Reflectivity = 10.0;

        @feng3d.serialize
        @feng3d.oav({ block: "Lighting/Local Lighting", componentParam: { step: 0.05, minValue: 0, maxValue: 1 } })
        _Diffuse = 0.5;

        @feng3d.serialize
        @feng3d.oav({ block: "Lighting/Local Lighting", componentParam: { step: 0.05, minValue: 1, maxValue: 0 } })
        _Ambient = 0.5;

        @feng3d.serialize
        @feng3d.oav({ block: "Lighting/Bump Map" })
        _BumpMap = feng3d.Texture2D.defaultNormal;

        @feng3d.serialize
        @feng3d.oav({ block: "Lighting/Bump Map", componentParam: { step: 0.05, minValue: 0, maxValue: 1 } })
        _BumpFace = 0;

        @feng3d.serialize
        @feng3d.oav({ block: "Lighting/Bump Map", componentParam: { step: 0.05, minValue: 0, maxValue: 1 } })
        _BumpOutline = 0;

        @feng3d.serialize
        @feng3d.oav({ block: "Lighting/Environment Map" })
        _ReflectFaceColor = new feng3d.Vector4(0, 0, 0, 1);

        @feng3d.serialize
        @feng3d.oav({ block: "Lighting/Environment Map" })
        _ReflectOutlineColor = new feng3d.Vector4(0, 0, 0, 1);

        @feng3d.serialize
        @feng3d.oav({ block: "Lighting/Environment Map", component: "OAVPick", componentParam: { accepttype: "texturecube", datatype: "texturecube" } })
        s_skyboxTexture = feng3d.TextureCube.default;

        @feng3d.serialize
        @feng3d.oav({ block: "Lighting/Environment Map" })
        _EnvMatrixRotation = new feng3d.Vector4(0, 0, 0, 0);

        @feng3d.serialize
        @feng3d.oav({ block: "Glow" })
        _GlowColor = new feng3d.Vector4(0, 1, 0, 0.5);

        @feng3d.serialize
        @feng3d.oav({ block: "Glow", componentParam: { step: 0.05, minValue: -1, maxValue: 1 } })
        _GlowOffset = 0;

        @feng3d.serialize
        @feng3d.oav({ block: "Glow", componentParam: { step: 0.05, minValue: 0, maxValue: 1 } })
        _GlowInner = 0.05;

        @feng3d.serialize
        @feng3d.oav({ block: "Glow", componentParam: { step: 0.05, minValue: 0, maxValue: 1 } })
        _GlowOuter = 0.05;

        @feng3d.serialize
        @feng3d.oav({ block: "Glow", componentParam: { step: 0.05, minValue: 1, maxValue: 0 } })
        _GlowPower = 0.75;

        @feng3d.serialize
        @feng3d.oav({ block: "Debug Settings" })
        _MainTex = feng3d.Texture2D.white;

        @feng3d.serialize
        @feng3d.oav({ block: "Debug Settings" })
        _GradientScale = 5.0;

        @feng3d.serialize
        @feng3d.oav({ block: "Debug Settings" })
        _TextureWidth = 512;

        @feng3d.serialize
        @feng3d.oav({ block: "Debug Settings" })
        _TextureHeight = 512;

        @feng3d.serialize
        @feng3d.oav({ block: "Debug Settings" })
        _ScaleX = 1.0;

        @feng3d.serialize
        @feng3d.oav({ block: "Debug Settings" })
        _ScaleY = 1.0;

        @feng3d.serialize
        @feng3d.oav({ block: "Debug Settings", componentParam: { step: 0.05, minValue: -1, maxValue: 1 } })
        _Sharpness = 0;

        @feng3d.serialize
        @feng3d.oav({ block: "Debug Settings", componentParam: { step: 0.05, minValue: 0, maxValue: 1 } })
        _PerspectiveFilter = 0.875;

        @feng3d.serialize
        @feng3d.oav({ block: "Debug Settings" })
        _VertexOffsetX = 0;

        @feng3d.serialize
        @feng3d.oav({ block: "Debug Settings" })
        _VertexOffsetY = 0;

        @feng3d.serialize
        @feng3d.oav({ block: "Debug Settings" })
        _MaskCoord = new feng3d.Vector4(0, 0, 32767, 32767);

        @feng3d.serialize
        @feng3d.oav({ block: "Debug Settings" })
        _MaskSoftnessX = 0;

        @feng3d.serialize
        @feng3d.oav({ block: "Debug Settings" })
        _MaskSoftnessY = 0;

        @feng3d.serialize
        @feng3d.oav({ block: "Debug Settings" })
        _ClipRect = new feng3d.Vector4(-32767, -32767, 32767, 32767);

        _StencilReadMask = 255

        @feng3d.serialize
        _WeightNormal = 0

        @feng3d.serialize
        _WeightBold = 0.5

        @feng3d.serialize
        @feng3d.oav({ block: "Debug Settings" })
        _ShaderFlags = 0

        @feng3d.serialize
        @feng3d.oav({ block: "Debug Settings" })
        _ScaleRatioA = 1

        @feng3d.serialize
        @feng3d.oav({ block: "Debug Settings" })
        _ScaleRatioB = 1

        @feng3d.serialize
        @feng3d.oav({ block: "Debug Settings" })
        _ScaleRatioC = 1

        @feng3d.serialize
        @feng3d.oav({ block: "Debug Settings" })
        _Stencil = 0

        @feng3d.serialize
        @feng3d.oav({ block: "Debug Settings" })
        _StencilComp = 0

        @feng3d.serialize
        _StencilOp = 0

        @feng3d.serialize
        _StencilWriteMask = 255
    }

    feng3d.shaderConfig.shaders["TextMeshPro/Distance Field"] =
    {
        vertex: TMP_SDF_vertex,
        fragment: TMP_SDF_fragment,
        cls: TextMeshProDistanceFieldUniforms,
        renderParams: {
            enableBlend: true,
            sfactor: feng3d.BlendFactor.ONE,
            dfactor: feng3d.BlendFactor.ONE_MINUS_SRC_ALPHA,
            colorMask: feng3d.ColorMask.RGBA,
            cullFace: feng3d.CullFace.NONE,
            depthMask: false,
        },
    }
    feng3d.Material.setDefault("TextMeshPro-Material", { shaderName: "TextMeshPro/Distance Field" });
}

namespace feng3d
{
    export interface UniformsTypes { "TextMeshPro/Distance Field": tmpro.TextMeshProDistanceFieldUniforms }

    export interface DefaultMaterial
    {
        "TextMeshPro-Material": Material;
    }
}