import { Color4 } from 'feng3d';

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

    topLeft = new Color4(1, 1, 1, 1);
    topRight = new Color4(1, 1, 1, 1);
    bottomLeft = new Color4(1, 1, 1, 1);
    bottomRight = new Color4(1, 1, 1, 1);
}
