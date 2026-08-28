struct Params {
  time: f32,
  texel: vec2f,
}

@group(0) @binding(0) var<uniform> params: Params;

fn sdEllipse(p: vec2f, ab: vec2f) -> f32 {
  return (length(p / ab) - 1.0) * min(ab.x, ab.y);
}

fn hash21(p: vec2f) -> f32 {
  return fract(sin(dot(p, vec2f(127.1, 311.7))) * 43758.5453);
}

fn routeHub(p: vec2f, radius: f32) -> f32 {
  let outer = sdEllipse(p, vec2f(radius));
  let inner = sdEllipse(p, vec2f(radius * 0.48));
  return min(abs(outer) - 0.004, inner);
}

fn ribbons(p: vec2f, t: f32) -> f32 {
  var acc = 0.0;
  for (var i = 0; i < 5; i = i + 1) {
    let fi = f32(i);
    let y0 = -0.30 + fi * 0.135;
    let amp = 0.032 + fi * 0.007;
    let freq = 5.4 + fi * 1.65;
    let speed = 0.28 + fi * 0.09;
    let y = y0 + amp * sin(p.x * freq + t * speed + fi * 1.1);
    let d = abs(p.y - y);
    acc += (1.0 - smoothstep(0.0, 0.0032, d)) * (0.28 - fi * 0.03);
    let tick = abs(fract(p.x * 2.6 + t * 0.07 + fi * 0.18) - 0.5);
    acc += (1.0 - smoothstep(0.0, 0.0018, abs(d - 0.014)))
      * (1.0 - smoothstep(0.45, 0.5, tick))
      * 0.09;
  }
  return acc;
}

@fragment
fn fs_main(@location(0) uv: vec2f) -> @location(0) vec4f {
  let aspect = params.texel.y / max(params.texel.x, 1.0e-6);
  let p = (uv - vec2f(0.5)) * vec2f(aspect, 1.0);
  let t = params.time;

  let breathe = 1.0 + 0.02 * sin(t * 0.85);
  let hubA = routeHub((p - vec2f(0.36, -0.10)) / breathe, 0.055);
  let hubB = routeHub((p - vec2f(0.48, 0.10)) / breathe, 0.038);
  let hubC = routeHub((p - vec2f(0.22, 0.22)) / breathe, 0.032);
  let hubs = min(hubA, min(hubB, hubC));
  let fill = 1.0 - smoothstep(-0.0015, 0.004, hubs);
  let line = 1.0 - smoothstep(0.0, 0.0055, abs(hubs));
  let glow = exp(-max(hubs, 0.0) * 18.0);

  let traces = ribbons(p, t);
  let cell = floor(uv * vec2f(32.0, 18.0));
  let h = hash21(cell);
  let spark = step(0.972, h) * (0.45 + 0.55 * sin(t * 1.8 + h * 40.0));

  let pink = vec3f(1.0, 0.0, 0.749020);
  let blue = vec3f(0.356863, 0.552941, 0.937255);
  let paper = vec3f(1.0, 0.960784, 0.901961);
  let leftClear = smoothstep(0.34, 0.62, uv.x);
  var a = fill * 0.08 + line * 0.28 + glow * 0.08 + traces * 0.32 + spark * 0.06;
  a *= 0.55 * leftClear;
  a = clamp(a, 0.0, 0.34);
  let col = mix(pink, blue, traces * 0.3 + spark * 0.45);
  let softened = mix(col, paper, line * 0.08);
  return vec4f(softened * a, a);
}
