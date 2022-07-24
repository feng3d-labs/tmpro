import { BlendFactor, Color4, ColorMask, CullFace, Material, oav, serialize, shaderConfig, Texture2D, TextureCube, Vector4 } from 'feng3d';
import { TMP_SDF_fragment } from './TMP_SDF.fragment.glsl';
import { TMP_SDF_vertex } from './TMP_SDF.vertex.glsl';

declare global
{
    export interface MixinsUniformsTypes
    {
        'TextMeshPro/Distance Field': TextMeshProDistanceFieldUniforms
    }

    export interface MixinsDefaultMaterial
    {
        'TextMeshPro-Material': Material;
    }

}

/**
 * UnityShader "TextMeshPro/Distance Field"
 */
export class TextMeshProDistanceFieldUniforms
{
    __class__: 'tmpro.TextMeshProDistanceFieldUniforms';

    @serialize
    @oav({ block: 'Face' })
    _FaceColor = new Color4(1, 1, 1, 1);

    @serialize
    @oav({ block: 'Face' })
    _FaceTex = Texture2D.white;

    @serialize
    @oav({ block: 'Face' })
    _FaceTex_ST = new Vector4(1, 1, 0, 0);

    @serialize
    @oav({ block: 'Face', componentParam: { step: 0.05, minValue: -5, maxValue: 5 } })
    _FaceUVSpeedX = 0;

    @serialize
    @oav({ block: 'Face', componentParam: { step: 0.05, minValue: -5, maxValue: 5 } })
    _FaceUVSpeedY = 0;

    @serialize
    @oav({ block: 'Face', componentParam: { step: 0.05, minValue: 0, maxValue: 1 } })
    _OutlineSoftness = 0;

    @serialize
    @oav({ block: 'Face', componentParam: { step: 0.05, minValue: -1, maxValue: 1 } })
    _FaceDilate = 0;

    @oav({ block: 'Outline' })
    _OutlineColor = new Color4(0, 0, 0, 1);

    @serialize
    @oav({ block: 'Outline' })
    _OutlineTex = Texture2D.white;

    @serialize
    @oav({ block: 'Outline' })
    _OutlineTex_ST = new Vector4(1, 1, 0, 0);

    @serialize
    @oav({ block: 'Outline', componentParam: { step: 0.05, minValue: -5, maxValue: 5 } })
    _OutlineUVSpeedX = 0;

    @serialize
    @oav({ block: 'Outline', componentParam: { step: 0.05, minValue: -5, maxValue: 5 } })
    _OutlineUVSpeedY = 0;

    @serialize
    @oav({ block: 'Outline', componentParam: { step: 0.05, minValue: 0, maxValue: 1 } })
    _OutlineWidth = 0;

    @serialize
    @oav({ block: 'Underlay' })
    _UnderlayColor = new Vector4(0, 0, 0, 0.5);

    @serialize
    @oav({ block: 'Underlay', componentParam: { step: 0.05, minValue: -1, maxValue: 1 } })
    _UnderlayOffsetX = 0;

    @serialize
    @oav({ block: 'Underlay', componentParam: { step: 0.05, minValue: -1, maxValue: 1 } })
    _UnderlayOffsetY = 0;

    @serialize
    @oav({ block: 'Underlay', componentParam: { step: 0.05, minValue: -1, maxValue: 1 } })
    _UnderlayDilate = 0;

    @serialize
    @oav({ block: 'Underlay', componentParam: { step: 0.05, minValue: 0, maxValue: 1 } })
    _UnderlaySoftness = 0;

    @serialize
    @oav({ block: 'Lighting/Bevel', componentParam: { step: 0.05, minValue: 0, maxValue: 1 } })
    _Bevel = 0.5;

    @serialize
    @oav({ block: 'Lighting/Bevel', componentParam: { step: 0.05, minValue: 0.5, maxValue: 0.5 } })
    _BevelOffset = 0;

    @serialize
    @oav({ block: 'Lighting/Bevel', componentParam: { step: 0.05, minValue: -0.5, maxValue: 0.5 } })
    _BevelWidth = 0;

    @serialize
    @oav({ block: 'Lighting/Bevel', componentParam: { step: 0.05, minValue: 0, maxValue: 1 } })
    _BevelRoundness = 0;

    @serialize
    @oav({ block: 'Lighting/Bevel', componentParam: { step: 0.05, minValue: 0, maxValue: 1 } })
    _BevelClamp = 0;

    @serialize
    @oav({ block: 'Lighting/Local Lighting', componentParam: { step: 0.05, minValue: 0, maxValue: 6.2831853 } })
    _LightAngle = 3.1416;

    @serialize
    @oav({ block: 'Lighting/Local Lighting' })
    _SpecularColor = new Vector4(0, 0, 0, 0.5);

    @serialize
    @oav({ block: 'Lighting/Local Lighting', componentParam: { step: 0.05, minValue: 0, maxValue: 4 } })
    _SpecularPower = 2.0;

    @serialize
    @oav({ block: 'Lighting/Local Lighting', componentParam: { step: 0.05, minValue: 5, maxValue: 15 } })
    _Reflectivity = 10.0;

    @serialize
    @oav({ block: 'Lighting/Local Lighting', componentParam: { step: 0.05, minValue: 0, maxValue: 1 } })
    _Diffuse = 0.5;

    @serialize
    @oav({ block: 'Lighting/Local Lighting', componentParam: { step: 0.05, minValue: 1, maxValue: 0 } })
    _Ambient = 0.5;

    @serialize
    @oav({ block: 'Lighting/Bump Map' })
    _BumpMap = Texture2D.defaultNormal;

    @serialize
    @oav({ block: 'Lighting/Bump Map', componentParam: { step: 0.05, minValue: 0, maxValue: 1 } })
    _BumpFace = 0;

    @serialize
    @oav({ block: 'Lighting/Bump Map', componentParam: { step: 0.05, minValue: 0, maxValue: 1 } })
    _BumpOutline = 0;

    @serialize
    @oav({ block: 'Lighting/Environment Map' })
    _ReflectFaceColor = new Vector4(0, 0, 0, 1);

    @serialize
    @oav({ block: 'Lighting/Environment Map' })
    _ReflectOutlineColor = new Vector4(0, 0, 0, 1);

    @serialize
    @oav({ block: 'Lighting/Environment Map', component: 'OAVPick', componentParam: { accepttype: 'texturecube', datatype: 'texturecube' } })
    s_skyboxTexture = TextureCube.default;

    @serialize
    @oav({ block: 'Lighting/Environment Map' })
    _EnvMatrixRotation = new Vector4(0, 0, 0, 0);

    @serialize
    @oav({ block: 'Glow' })
    _GlowColor = new Vector4(0, 1, 0, 0.5);

    @serialize
    @oav({ block: 'Glow', componentParam: { step: 0.05, minValue: -1, maxValue: 1 } })
    _GlowOffset = 0;

    @serialize
    @oav({ block: 'Glow', componentParam: { step: 0.05, minValue: 0, maxValue: 1 } })
    _GlowInner = 0.05;

    @serialize
    @oav({ block: 'Glow', componentParam: { step: 0.05, minValue: 0, maxValue: 1 } })
    _GlowOuter = 0.05;

    @serialize
    @oav({ block: 'Glow', componentParam: { step: 0.05, minValue: 1, maxValue: 0 } })
    _GlowPower = 0.75;

    @serialize
    @oav({ block: 'Debug Settings' })
    _MainTex = Texture2D.white;

    @serialize
    @oav({ block: 'Debug Settings' })
    _GradientScale = 5.0;

    @serialize
    @oav({ block: 'Debug Settings' })
    _TextureWidth = 512;

    @serialize
    @oav({ block: 'Debug Settings' })
    _TextureHeight = 512;

    @serialize
    @oav({ block: 'Debug Settings' })
    _ScaleX = 1.0;

    @serialize
    @oav({ block: 'Debug Settings' })
    _ScaleY = 1.0;

    @serialize
    @oav({ block: 'Debug Settings', componentParam: { step: 0.05, minValue: -1, maxValue: 1 } })
    _Sharpness = 0;

    @serialize
    @oav({ block: 'Debug Settings', componentParam: { step: 0.05, minValue: 0, maxValue: 1 } })
    _PerspectiveFilter = 0.875;

    @serialize
    @oav({ block: 'Debug Settings' })
    _VertexOffsetX = 0;

    @serialize
    @oav({ block: 'Debug Settings' })
    _VertexOffsetY = 0;

    @serialize
    @oav({ block: 'Debug Settings' })
    _MaskCoord = new Vector4(0, 0, 32767, 32767);

    @serialize
    @oav({ block: 'Debug Settings' })
    _MaskSoftnessX = 0;

    @serialize
    @oav({ block: 'Debug Settings' })
    _MaskSoftnessY = 0;

    @serialize
    @oav({ block: 'Debug Settings' })
    _ClipRect = new Vector4(-32767, -32767, 32767, 32767);

    _StencilReadMask = 255;

    @serialize
    _WeightNormal = 0;

    @serialize
    _WeightBold = 0.5;

    @serialize
    @oav({ block: 'Debug Settings' })
    _ShaderFlags = 0;

    @serialize
    @oav({ block: 'Debug Settings' })
    _ScaleRatioA = 1;

    @serialize
    @oav({ block: 'Debug Settings' })
    _ScaleRatioB = 1;

    @serialize
    @oav({ block: 'Debug Settings' })
    _ScaleRatioC = 1;

    @serialize
    @oav({ block: 'Debug Settings' })
    _Stencil = 0;

    @serialize
    @oav({ block: 'Debug Settings' })
    _StencilComp = 0;

    @serialize
    _StencilOp = 0;

    @serialize
    _StencilWriteMask = 255;
}

shaderConfig.shaders['TextMeshPro/Distance Field']
    = {
    vertex: TMP_SDF_vertex,
    fragment: TMP_SDF_fragment,
    cls: TextMeshProDistanceFieldUniforms,
    renderParams: {
        enableBlend: true,
        sfactor: BlendFactor.ONE,
        dfactor: BlendFactor.ONE_MINUS_SRC_ALPHA,
        colorMask: ColorMask.RGBA,
        cullFace: CullFace.NONE,
        depthMask: false,
    },
};
Material.setDefault('TextMeshPro-Material', { shaderName: 'TextMeshPro/Distance Field' });
