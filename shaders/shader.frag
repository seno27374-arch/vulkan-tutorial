#version 450

layout(binding = 1) uniform sampler2D texSampler;

layout(location = 0) in vec3 fragColor;
layout(location = 1) in vec2 fragTexCoord;

layout(location = 0) out vec4 outColor;

void main() {
    outColor = texture(texSampler, fragTexCoord);
}

/*
void debug() {
    float r = 0.0;
    if (fragTexCoord.x < 0.0) {
        r += 0.5;
    }
    if (fragTexCoord.y < 0.0) {
        r += 0.5;
    }
    outColor = vec4(r, abs(fragTexCoord.x), abs(fragTexCoord.y), 1.0);
}
*/