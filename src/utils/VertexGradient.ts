import { Color4 } from 'feng3d';

export class VertexGradient
{
    topLeft: Color4;

    topRight: Color4;

    bottomLeft: Color4;

    bottomRight: Color4;

    constructor(color: Color4)
    {
        this.topLeft = color;
        this.topRight = color;
        this.bottomLeft = color;
        this.bottomRight = color;
    }

    public VertexGradient(color0: Color4, color1: Color4, color2: Color4, color3: Color4)
    {
        this.topLeft = color0;
        this.topRight = color1;
        this.bottomLeft = color2;
        this.bottomRight = color3;
    }
}
