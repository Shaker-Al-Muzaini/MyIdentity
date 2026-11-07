import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';
import dashboard from '../../assets/digital-momentum-dashboard.webp';

const smooth = (a, b, v) => { const t = Math.max(0, Math.min(1, (v - a) / (b - a))); return t * t * (3 - 2 * t); };

export default function EngineeringScene({ storyRef }) {
  const host = useRef(null);
  const [failed, setFailed] = useState(false);
  useEffect(() => {
    if (!failed) return;
    let frame;
    const update = () => {
      frame = null;
      if (!storyRef.current || !host.current) return;
      const rect = storyRef.current.getBoundingClientRect();
      const p = Math.max(0, Math.min(3.5, -rect.top / (rect.height / 4)));
      host.current.style.setProperty('--open', smooth(.05, .85, p));
      host.current.style.setProperty('--explode', smooth(.65, 1.2, p) * (1 - smooth(1.65, 2.15, p)));
      host.current.style.setProperty('--finish', smooth(2.45, 2.95, p));
      host.current.dataset.product = p > 1.95 ? 'true' : 'false';
    };
    const schedule = () => { if (!frame) frame = requestAnimationFrame(update); };
    update(); window.addEventListener('scroll', schedule, { passive: true }); window.addEventListener('resize', schedule);
    return () => { cancelAnimationFrame(frame); window.removeEventListener('scroll', schedule); window.removeEventListener('resize', schedule); };
  }, [failed, storyRef]);
  useEffect(() => {
    const container = host.current;
    let renderer;
    try { renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'low-power' }); }
    catch { setFailed(true); return; }
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.75));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.25;
    container.appendChild(renderer.domElement);
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(33, 1, .1, 100);
    camera.position.set(0, 4.1, 12);
    camera.lookAt(0, .4, 0);
    const room = new RoomEnvironment();
    const pmrem = new THREE.PMREMGenerator(renderer);
    const env = pmrem.fromScene(room, .04);
    scene.environment = env.texture;
    room.dispose(); pmrem.dispose();
    scene.add(new THREE.HemisphereLight(0xffffff, 0x7e8b6f, 2.3));
    const light = new THREE.DirectionalLight(0xfff8e7, 4); light.position.set(-3, 7, 5); scene.add(light);
    const fill = new THREE.DirectionalLight(0xc4e8db, 2); fill.position.set(5, 2, -3); scene.add(fill);
    const model = new THREE.Group(); scene.add(model);
    const materials = [];
    const mat = (color, metalness=.4, roughness=.32) => { const m = new THREE.MeshStandardMaterial({ color, metalness, roughness }); materials.push(m); return m; };
    const shell = mat('#b9bdb4', .78, .23), edge = mat('#555d54', .75, .28), keyMaterial = mat('#263c34', .25, .4), boardMat = mat('#184b39', .5, .35), gold = mat('#d7b86b', .72, .23), black = mat('#101b17', .2, .35);
    const box = (parent, w, h, d, material, x=0, y=0, z=0, radius=.06) => {
      const mesh = new THREE.Mesh(new RoundedBoxGeometry(w,h,d,3,Math.min(radius,h/2,d/2,w/2)),material);
      mesh.position.set(x,y,z); parent.add(mesh); return mesh;
    };
    const base = new THREE.Group(); model.add(base);
    box(base, 4.6, .17, 3.08, shell, 0, 0, 0, .08);
    box(base, 4.5, .04, 2.98, edge, 0, -.09);
    const deck = new THREE.Group(); model.add(deck);
    box(deck, 4.56, .07, 3.04, shell, 0, .105);
    box(deck, 4.08, .025, 1.55, edge, 0, .155, -.48);
    const keys = new THREE.Group(); deck.add(keys);
    const keyGeometry = new RoundedBoxGeometry(.255,.047,.21,2,.025);
    const keyMesh = new THREE.InstancedMesh(keyGeometry,keyMaterial,65);
    const dummy = new THREE.Object3D();
    for(let row=0;row<5;row++) for(let col=0;col<13;col++) { dummy.position.set((col-6)*.302,.19,-1.06+row*.28); dummy.updateMatrix(); keyMesh.setMatrixAt(row*13+col,dummy.matrix); }
    keys.add(keyMesh);
    box(keys,1.6,.044,.18,keyMaterial,0,.19,.37,.02);
    box(deck,1.6,.012,.76,edge,0,.147,.94,.06);
    box(deck,1.55,.015,.71,shell,0,.156,.94,.05);
    for(const side of [-1,1]){
      for(let n=0;n<13;n++) box(deck,.055,.01,.035,edge,side*2.13,.15,-1.12+n*.12,.005);
      box(base,.035,.055,.26,black,side*2.3,0,-.8,.01);
      box(base,.035,.055,.26,black,side*2.3,0,-.3,.01);
    }
    // The hinge rotates the same lid from closed object to working screen.
    const hinge = new THREE.Group(); hinge.position.set(0,.17,-1.43); model.add(hinge);
    box(hinge,4.6,2.95,.105,shell,0,1.475,0,.05);
    box(hinge,4.39,2.73,.025,black,0,1.475,.066,.07);
    const screenCanvas = document.createElement('canvas'); screenCanvas.width=1280;screenCanvas.height=800;
    const ctx = screenCanvas.getContext('2d');
    function drawCode(){
      ctx.fillStyle='#11271f';ctx.fillRect(0,0,1280,800);
      ctx.fillStyle='#203a2f';ctx.fillRect(0,0,1280,58);
      ['#d0917b','#e1c983','#8fbda1'].forEach((c,i)=>{ctx.fillStyle=c;ctx.beginPath();ctx.arc(30+i*24,29,7,0,Math.PI*2);ctx.fill();});
      ctx.font='18px monospace';ctx.fillStyle='#abc3af';ctx.fillText('workspace / build-something-meaningful',155,36);
      const lines=[['#8ba894','// A good idea deserves a great foundation.'],['#e5ce91','class MeaningfulSoftware'],['#c6d9cb','{'],['#c6d9cb','    public function build(Idea $idea)'],['#c6d9cb','    {'],['#8fd7b2','        return Product::from($idea)'],['#d8bb82',"            ->connect('Laravel API')"],['#d8bb82',"            ->think('FastAPI')"],['#d8bb82',"            ->automate('n8n')"],['#8fd7b2','            ->ship();'],['#c6d9cb','    }'],['#c6d9cb','}']];
      ctx.font='25px monospace'; lines.forEach(([c,t],i)=>{ctx.fillStyle='#536d5d';ctx.fillText(String(i+1).padStart(2,'0'),30,115+i*43);ctx.fillStyle=c;ctx.fillText(t,99,115+i*43);});
      ctx.fillStyle='#82bd99';ctx.fillRect(0,749,1280,51);ctx.fillStyle='#132b20';ctx.font='19px monospace';ctx.fillText('main   •   PHP / Python / Automation',28,782);ctx.fillText('Shaker Al-Muzayni',1000,782);
    }
    drawCode();
    const codeTexture = new THREE.CanvasTexture(screenCanvas);codeTexture.colorSpace=THREE.SRGBColorSpace;
    const screenMaterial = new THREE.MeshBasicMaterial({map:codeTexture,toneMapped:false});materials.push(screenMaterial);
    const screen = new THREE.Mesh(new THREE.PlaneGeometry(4.15,2.52),screenMaterial);screen.position.set(0,1.48,.083);hinge.add(screen);
    const lens = new THREE.Mesh(new THREE.SphereGeometry(.024,12,8),black);lens.position.set(0,2.83,.09);hinge.add(lens);
    // A machined monogram on the outer shell.
    const logoCanvas=document.createElement('canvas');logoCanvas.width=256;logoCanvas.height=256;
    const lc=logoCanvas.getContext('2d');lc.fillStyle='#314b3c';lc.font='bold 90px Georgia';lc.textAlign='center';lc.fillText('{S}',128,157);
    const logoTexture=new THREE.CanvasTexture(logoCanvas);const logoMaterial=new THREE.MeshBasicMaterial({map:logoTexture,transparent:true,side:THREE.DoubleSide});materials.push(logoMaterial);
    const logo=new THREE.Mesh(new THREE.PlaneGeometry(.9,.9),logoMaterial);logo.position.set(0,1.5,-.06);logo.rotation.y=Math.PI;hinge.add(logo);
    // The inner board and four service modules emerge from the laptop itself.
    const core = new THREE.Group();model.add(core);
    box(core,3.95,.075,2.45,boardMat,0,.03,0,.06);
    for(let j=0;j<9;j++){
      box(core,2.9,.007,.012,gold,0,.072,-1+j*.24,.001);
      box(core,.012,.007,1.95,gold,-1.55+j*.38,.073,0,.001);
    }
    const modules=[]; const textures=[];
    const moduleData=[['LARAVEL','API / APPLICATION','#daba77',-1,-.6],['FASTAPI','AI / INTELLIGENCE','#c4d4b7',1,-.6],['POSTGRES','DATA / STORAGE','#a3bcb0',-1,.65],['n8n','WORKFLOWS','#e0ad9c',1,.65]];
    moduleData.forEach(([name,subtitle,color,x,z])=>{
      const group=new THREE.Group();core.add(group);group.position.set(x,.16,z);
      box(group,1.62,.16,.96,mat(color,.6,.25));
      for(let k=0;k<8;k++)for(const s of [-1,1])box(group,.08,.04,.15,gold,-.65+k*.18,-.045,s*.53,.008);
      const c=document.createElement('canvas');c.width=512;c.height=256;const cc=c.getContext('2d');cc.fillStyle=color;cc.fillRect(0,0,512,256);cc.fillStyle='#20392c';cc.font='bold 54px monospace';cc.fillText(name,30,115);cc.font='20px monospace';cc.fillText(subtitle,30,175);cc.strokeStyle='#20392c';cc.strokeRect(13,13,486,230);
      const texture=new THREE.CanvasTexture(c);texture.colorSpace=THREE.SRGBColorSpace;textures.push(texture);
      const m=new THREE.MeshBasicMaterial({map:texture});materials.push(m);
      const label=new THREE.Mesh(new THREE.PlaneGeometry(1.55,.9),m);label.rotation.x=-Math.PI/2;label.position.y=.085;group.add(label);modules.push(group);
    });
    // Soft studio contact shadow, without an expensive real-time shadow pass.
    const shadowCanvas=document.createElement('canvas');shadowCanvas.width=256;shadowCanvas.height=256;const sc=shadowCanvas.getContext('2d');const grad=sc.createRadialGradient(128,128,0,128,128,128);grad.addColorStop(0,'rgba(20,35,22,.28)');grad.addColorStop(.45,'rgba(20,35,22,.16)');grad.addColorStop(1,'rgba(20,35,22,0)');sc.fillStyle=grad;sc.fillRect(0,0,256,256);
    const shadowTex=new THREE.CanvasTexture(shadowCanvas);const shadowMat=new THREE.MeshBasicMaterial({map:shadowTex,transparent:true,depthWrite:false});materials.push(shadowMat);
    const shadow=new THREE.Mesh(new THREE.PlaneGeometry(7,4),shadowMat);shadow.rotation.x=-Math.PI/2;shadow.position.y=-1.35;scene.add(shadow);
    let disposed=false, productTexture=null, frame=null, width=0,height=0;
    const media=window.matchMedia('(prefers-reduced-motion: reduce)');
    const render=()=>{
      frame=null;if(disposed || !storyRef.current)return;
      const rect=storyRef.current.getBoundingClientRect();
      const p=media.matches ? .2 : Math.max(0,Math.min(3.5,-rect.top/(rect.height/4)));
      const mobile=width<700;
      const open=smooth(.05,.85,p);
      const explode=smooth(.65,1.2,p)*(1-smooth(1.65,2.15,p));
      const finish=smooth(2.45,2.95,p);
      model.position.set(mobile?0:THREE.MathUtils.lerp(2.45,-2.55,finish),mobile?-.75: -.3,0);
      model.rotation.set(THREE.MathUtils.lerp(.12,-.02,open)+explode*.13,THREE.MathUtils.lerp(-.36,.12,open)+explode*.22-finish*.4,-.07*(1-open)+explode*.04);
      model.scale.setScalar(mobile?.66:1.02);
      hinge.rotation.x=THREE.MathUtils.lerp(Math.PI/2-.12,-.2,open);
      hinge.position.y=.17+explode*1.8;
      hinge.position.z=-1.43-explode*.65;
      deck.position.y=explode*.9;
      core.position.y=explode*.24;
      core.visible=explode>.02;
      modules.forEach((m,i)=>{m.position.y=.16+explode*(.18+(i%2)*.14);});
      // Keyboard tray separates sideways so the architectural core is readable.
      deck.position.x=explode*1.45;
      deck.rotation.z=-explode*.09;
      base.position.y=-explode*.45;
      screenMaterial.map=p>1.95 && productTexture ? productTexture : codeTexture;
      shadow.position.x=model.position.x;shadow.material.opacity=1-explode*.35;
      renderer.render(scene,camera);
    };
    const schedule=()=>{if(frame===null)frame=requestAnimationFrame(render);};
    const resize=()=>{width=container.clientWidth;height=container.clientHeight;renderer.setSize(width,height);camera.aspect=width/height;camera.position.z=width<700?11:12;camera.updateProjectionMatrix();schedule();};
    const observer=new ResizeObserver(resize);observer.observe(container);
    const loader=new THREE.TextureLoader();loader.load(dashboard,t=>{if(disposed){t.dispose();return;} t.colorSpace=THREE.SRGBColorSpace; productTexture=t;schedule();},undefined,()=>{});
    const contextLost=(event)=>{event.preventDefault();setFailed(true);};renderer.domElement.addEventListener('webglcontextlost',contextLost);
    window.addEventListener('scroll',schedule,{passive:true});media.addEventListener('change',schedule);resize();
    return()=>{disposed=true;cancelAnimationFrame(frame);observer.disconnect();window.removeEventListener('scroll',schedule);media.removeEventListener('change',schedule);renderer.domElement.removeEventListener('webglcontextlost',contextLost);scene.traverse(o=>o.geometry?.dispose());materials.forEach(m=>m.dispose());[codeTexture,logoTexture,shadowTex,productTexture,...textures].forEach(t=>t?.dispose());env.dispose();renderer.dispose();renderer.domElement.remove();};
  },[storyRef]);
  return <div ref={host} className={`engineering-canvas ${failed?'scene-failed':''}`}>{failed && <div className="fallback-stage">
      <div className="fallback-shadow" />
      <div className="fallback-laptop">
        <div className="fallback-lid"><div className="fallback-screen"><div className="fallback-code"><div className="code-toolbar"><b /> <b /> <b /><span>workspace / meaningful-software</span></div><pre><span>// Built with purpose.</span>{'\n\n'}class MeaningfulSoftware{'\n'}{'{'}{'\n'}  public function build(){'\n'}  {'{'}{'\n'}    return Product::create(){'\n'}      → connect('Laravel'){'\n'}      → think('FastAPI'){'\n'}      → automate('n8n'){'\n'}      → ship();{'\n'}  {'}'}{'\n'}{'}'}</pre></div><img src={dashboard} alt="" /></div><div className="fallback-brand">SHAKER / ENGINEERED WITH PURPOSE</div></div>
        <div className="fallback-board">{['LARAVEL', 'FASTAPI', 'POSTGRES', 'n8n'].map((name, i) => <div className={`fallback-chip chip-${i}`} key={name}><span>{name}</span><small>{['APPLICATION', 'INTELLIGENCE', 'DATA', 'AUTOMATION'][i]}</small></div>)}</div>
        <div className="fallback-deck"><div className="fallback-keys">{Array.from({length: 60}, (_, i) => <span key={i} />)}</div><div className="fallback-space" /><div className="fallback-trackpad" /></div>
        <div className="fallback-bottom" />
      </div>
    </div>}</div>;
}
