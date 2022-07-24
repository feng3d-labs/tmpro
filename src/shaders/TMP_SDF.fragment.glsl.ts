namespace tmpro
{
    export var TMP_SDF_fragment = `
precision mediump float;

uniform sampler2D s_texture;
varying vec2 v_uv;
varying vec2 v_position;

uniform vec4 u_color;
uniform vec4 u_mask;

void main() 
{
    if(v_position.x < u_mask.x || v_position.x > u_mask.x + u_mask.z || v_position.y < u_mask.y || v_position.y > u_mask.y + u_mask.w)
        discard;

    vec4 color = texture2D(s_texture, v_uv);
    gl_FragColor = color * u_color;
}
    `;
}