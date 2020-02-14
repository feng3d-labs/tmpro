namespace tmpro
{
    export var TMP_SDF_vertex = `

attribute vec2 a_position;
attribute vec2 a_uv;

uniform vec4 u_uvRect;
uniform vec2 u_size;
uniform mat4 u_modelMatrix;
uniform mat4 u_viewProjection;

varying vec2 v_uv;
varying vec2 v_position;

void main() 
{
    vec2 position = a_position * u_size;
    gl_Position = u_viewProjection * u_modelMatrix * vec4(position, 0.0, 1.0);
    v_uv = u_uvRect.xy + a_uv * u_uvRect.zw;
    v_position = position.xy;
}
    `;
}