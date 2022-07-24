namespace tmpro
{
    export class VertexGradient
    {
        topLeft: feng3d.Color4;

        topRight: feng3d.Color4;

        bottomLeft: feng3d.Color4;

        bottomRight: feng3d.Color4;

        constructor(color: feng3d.Color4)
        {
            this.topLeft = color;
            this.topRight = color;
            this.bottomLeft = color;
            this.bottomRight = color;
        }

        public VertexGradient(color0: feng3d.Color4, color1: feng3d.Color4, color2: feng3d.Color4, color3: feng3d.Color4)
        {
            this.topLeft = color0;
            this.topRight = color1;
            this.bottomLeft = color2;
            this.bottomRight = color3;
        }
    }
}