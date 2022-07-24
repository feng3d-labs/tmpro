namespace tmpro
{
    export enum ColorMode
    {
        Single,
        HorizontalGradient,
        VerticalGradient,
        FourCornersGradient
    }

    export class TMP_ColorGradient
    {
        colorMode = ColorMode.FourCornersGradient;

        topLeft = new feng3d.Color4(1, 1, 1, 1);
        topRight = new feng3d.Color4(1, 1, 1, 1);
        bottomLeft = new feng3d.Color4(1, 1, 1, 1);
        bottomRight = new feng3d.Color4(1, 1, 1, 1);
    }
}