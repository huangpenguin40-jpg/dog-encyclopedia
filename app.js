'use strict';

const GROUPS = [
  { id: 'all', label: '全部品种' },
  { id: 'pastoral', label: '牧羊犬组' },
  { id: 'working', label: '工作犬组' },
  { id: 'retriever', label: '寻回犬组' },
  { id: 'hound', label: '狩猎犬组' },
  { id: 'companion', label: '伴侣犬组' }
];

const GROUP_NAMES = {
  pastoral: '牧羊犬组',
  working: '工作犬组',
  retriever: '寻回犬组',
  hound: '狩猎犬组',
  companion: '伴侣犬组'
};

const TRAITS = [
  { key: 'affection', label: '亲和度' },
  { key: 'trainability', label: '可训练性' },
  { key: 'energy', label: '运动需求' },
  { key: 'independence', label: '独立性' },
  { key: 'guarding', label: '护家欲' },
  { key: 'shedding', label: '掉毛量' }
];

const BREEDS = [
  {
    id: 'labrador',
    name: '拉布拉多寻回犬',
    en: 'Labrador Retriever',
    img: 'assets/img/breeds/labrador.jpg',
    group: 'retriever',
    origin: '英国（源自纽芬兰）',
    size: '大型犬',
    height: '55-62 cm',
    weight: '25-36 kg',
    lifespan: '10-12 年',
    personality: ['友好', '活泼', '贪吃'],
    desc: '性格稳定、精力充沛的寻回与家庭犬，对食物和运动的热情都很高，是新手友好的大型犬。',
    story: '源自纽芬兰渔犬，后在英国被培育为出色的寻回犬，名字里的 Lab 来自拉布拉多地区。',
    fact: '它们对食物几乎没有抵抗力，是偷吃高发犬种。',
    bestFor: '新手家庭、户外爱好者、儿童家庭',
    traits: { affection: 95, trainability: 90, energy: 85, independence: 30, guarding: 40, shedding: 70 },
    needs: { space: ['mid', 'large'], experience: ['beginner', 'pro'], energy: 4, family: ['kids', 'couple', 'single', 'elder'], shed: 'high' },
    care: {
      diet: '控制食量防肥胖，优质犬粮加适量蔬果。',
      exercise: '每日 60 分钟以上，游泳与巡回都是好选择。',
      grooming: '短毛易打理，换毛季勤梳，注意耳道。',
      training: '热情爱学习，口令加食物奖励见效快。'
    },
    health: ['髋 / 肘关节发育不良', '肥胖与关节负担', '耳道感染']
  },
  {
    id: 'golden',
    name: '金毛寻回犬',
    en: 'Golden Retriever',
    img: 'assets/img/breeds/golden.jpg',
    group: 'retriever',
    origin: '英国',
    size: '大型犬',
    height: '51-61 cm',
    weight: '25-34 kg',
    lifespan: '10-12 年',
    personality: ['温和', '耐心', '爱玩'],
    desc: '温和耐心、天生愿意配合，对儿童包容度高，是经典的家庭伴侣犬。',
    story: '19 世纪苏格兰培育，由猎犬与寻回犬改良而来，目标是把水陆猎获稳稳衔回。',
    fact: '成年后依然爱玩，被称作永远长不大的孩子。',
    bestFor: '有耐心陪伴的家庭、儿童家庭',
    traits: { affection: 95, trainability: 85, energy: 75, independence: 35, guarding: 45, shedding: 75 },
    needs: { space: ['mid', 'large'], experience: ['beginner', 'pro'], energy: 4, family: ['kids', 'couple', 'elder'], shed: 'high' },
    care: {
      diet: '分餐喂养，避免生长过快，注意体重。',
      exercise: '每日 60 分钟，游泳和巡回都是好选择。',
      grooming: '长毛需每周梳毛 2-3 次，换毛季加频。',
      training: '耐心温和，正向强化效果极佳。'
    },
    health: ['髋肘发育不良', '遗传性心脏病', '癌症风险关注']
  },
  {
    id: 'german-shepherd',
    name: '德国牧羊犬',
    en: 'German Shepherd Dog',
    img: 'assets/img/breeds/german-shepherd.jpg',
    group: 'pastoral',
    origin: '德国',
    size: '大型犬',
    height: '55-65 cm',
    weight: '22-40 kg',
    lifespan: '9-13 年',
    personality: ['忠诚', '警觉', '自信'],
    desc: '忠诚、自信、警觉性强，擅长执行任务，适合有训练经验的家庭。',
    story: '19 世纪末德国培育的牧羊犬，后成为警犬、导盲犬等工作犬代表。',
    fact: '一生中会学习大量口令，是工作犬里的全能选手。',
    bestFor: '有训练经验的家庭、工作犬爱好者',
    traits: { affection: 75, trainability: 95, energy: 90, independence: 55, guarding: 90, shedding: 80 },
    needs: { space: ['large'], experience: ['pro'], energy: 5, family: ['kids', 'couple', 'single'], shed: 'high' },
    care: {
      diet: '高质量犬粮，按运动量分餐。',
      exercise: '每日 90 分钟以上，需要工作型任务。',
      grooming: '双层被毛，换毛季大量掉毛需勤梳。',
      training: '高服从性，适合系统化训练与犬运动。'
    },
    health: ['髋肘发育不良', '退行性脊髓病', '胃扭转风险']
  },
  {
    id: 'border-collie',
    name: '边境牧羊犬',
    en: 'Border Collie',
    img: 'assets/img/breeds/border-collie.jpg',
    group: 'pastoral',
    origin: '英国 / 苏格兰边境',
    size: '中型犬',
    height: '46-56 cm',
    weight: '14-20 kg',
    lifespan: '12-15 年',
    personality: ['聪慧', '专注', '精力旺盛'],
    desc: '公认的高智商犬种，工作热情极强，需要大量脑力与体力消耗。',
    story: '源自英格兰与苏格兰边境，凭超强眼神控制驱赶羊群，被誉为牧羊天才。',
    fact: '有学者统计其词汇理解能力可达数百个词。',
    bestFor: '愿意投入大量训练与运动的主人',
    traits: { affection: 80, trainability: 98, energy: 100, independence: 60, guarding: 65, shedding: 75 },
    needs: { space: ['large'], experience: ['pro'], energy: 5, family: ['kids', 'couple'], shed: 'high' },
    care: {
      diet: '高能量饮食，按训练量调节。',
      exercise: '每日 2 小时以上，需要复杂任务消耗脑力。',
      grooming: '中长毛每周梳理 2 次。',
      training: '需要丰富训练，否则容易出现刻板行为。'
    },
    health: ['遗传性癫痫', '髋关节发育不良', '柯利眼异常']
  },
  {
    id: 'collie',
    name: '苏格兰牧羊犬',
    en: 'Rough Collie',
    img: 'assets/img/breeds/collie.jpg',
    group: 'pastoral',
    origin: '英国（苏格兰）',
    size: '中大型犬',
    height: '51-61 cm',
    weight: '20-34 kg',
    lifespan: '12-14 年',
    personality: ['优雅', '温柔', '机警'],
    desc: '优雅温柔、对家人忠诚，运动量适中，是耐心型家庭犬的代表。',
    story: '苏格兰高地牧羊犬的后代，因影视剧灵犬莱西而闻名世界。',
    fact: '对陌生环境敏感，是会看眼色的体贴型狗狗。',
    bestFor: '安静耐心的家庭、老人陪伴',
    traits: { affection: 85, trainability: 80, energy: 60, independence: 50, guarding: 75, shedding: 80 },
    needs: { space: ['mid', 'large'], experience: ['beginner', 'pro'], energy: 3, family: ['kids', 'elder', 'couple'], shed: 'high' },
    care: {
      diet: '均衡犬粮，控制零食比例。',
      exercise: '每日 60 分钟散步加游戏即可。',
      grooming: '华丽长毛每周梳理 3 次以上。',
      training: '温和敏感，避免粗暴口令。'
    },
    health: ['柯利眼异常', 'MDR1 药物敏感', '皮肤问题']
  },
  {
    id: 'corgi',
    name: '威尔士柯基犬',
    en: 'Welsh Corgi',
    img: 'assets/img/breeds/corgi.jpg',
    group: 'pastoral',
    origin: '英国（威尔士）',
    size: '中小型犬',
    height: '25-30 cm',
    weight: '10-14 kg',
    lifespan: '12-15 年',
    personality: ['聪明', '固执', '热情'],
    desc: '身短腿长的小个子牧牛犬，聪明活泼却带点固执，警觉性高。',
    story: '威尔士的矮脚牧牛犬，利用低矮身姿在牛群脚下穿梭，聪明又勇敢。',
    fact: '没有尾巴或短尾的品种，跑动时臀部非常醒目。',
    bestFor: '小院子家庭、喜欢狗狗有个性的主人',
    traits: { affection: 90, trainability: 85, energy: 70, independence: 65, guarding: 85, shedding: 80 },
    needs: { space: ['mid', 'large'], experience: ['beginner', 'pro'], energy: 4, family: ['kids', 'couple', 'single'], shed: 'high' },
    care: {
      diet: '严格控制食量，警惕肥胖。',
      exercise: '每日 45-60 分钟，避免频繁跳跃。',
      grooming: '双层被毛换毛季勤梳，定期修剪趾甲。',
      training: '聪明但固执，奖励要高于惩罚。'
    },
    health: ['椎间盘疾病', '髋关节发育不良', '肥胖']
  },
  {
    id: 'husky',
    name: '哈士奇',
    en: 'Siberian Husky',
    img: 'assets/img/breeds/husky.jpg',
    group: 'working',
    origin: '西伯利亚',
    size: '中型犬',
    height: '50-60 cm',
    weight: '16-27 kg',
    lifespan: '12-14 年',
    personality: ['独立', '好奇', '精力旺盛'],
    desc: '精力旺盛、性格独立的雪橇犬，好奇心强，对围栏与牵绳有极高要求。',
    story: '西伯利亚楚科奇人培育的雪橇犬，曾以耐力接力运送药物闻名。',
    fact: '吠叫声少，却擅长发出各种狼式长啸。',
    bestFor: '运动达人、有围栏与牵绳纪律的主人',
    traits: { affection: 75, trainability: 55, energy: 95, independence: 80, guarding: 35, shedding: 90 },
    needs: { space: ['large'], experience: ['pro'], energy: 5, family: ['couple', 'single'], shed: 'high' },
    care: {
      diet: '按运动量供给，防止过度喂食。',
      exercise: '每日 2 小时高强度运动加嗅闻探索。',
      grooming: '双层被毛，换毛季像下雪需勤梳。',
      training: '独立性强，训练要趣味化并保证围栏安全。'
    },
    health: ['髋关节发育不良', '遗传性眼病', '甲状腺问题']
  },
  {
    id: 'samoyed',
    name: '萨摩耶犬',
    en: 'Samoyed',
    img: 'assets/img/breeds/samoyed.jpg',
    group: 'working',
    origin: '西伯利亚',
    size: '中型犬',
    height: '48-60 cm',
    weight: '16-30 kg',
    lifespan: '12-14 年',
    personality: ['亲人', '活泼', '爱笑'],
    desc: '标志性微笑与白色双层毛，亲人爱玩，但需要高频毛发打理。',
    story: '西伯利亚萨摩耶人培育的白色工作犬，能拉雪橇、放驯鹿，也爱微笑。',
    fact: '嘴角天生上翘，被称为微笑天使。',
    bestFor: '愿意高频打理毛发、喜欢互动的主人',
    traits: { affection: 95, trainability: 75, energy: 70, independence: 45, guarding: 55, shedding: 95 },
    needs: { space: ['mid', 'large'], experience: ['beginner', 'pro'], energy: 4, family: ['kids', 'couple'], shed: 'high' },
    care: {
      diet: '分餐定量，保持体重稳定。',
      exercise: '每日 60-90 分钟，喜欢寒冷天气活动。',
      grooming: '白色双层毛需高频梳理，注意泪痕。',
      training: '亲人但顽皮，耐心加零食效果最好。'
    },
    health: ['髋关节发育不良', '进行性视网膜萎缩', '糖尿病风险']
  },
  {
    id: 'beagle',
    name: '比格犬',
    en: 'Beagle',
    img: 'assets/img/breeds/beagle.jpg',
    group: 'hound',
    origin: '英国',
    size: '中小型犬',
    height: '33-41 cm',
    weight: '9-14 kg',
    lifespan: '12-15 年',
    personality: ['好奇', '友善', '嗅觉敏锐'],
    desc: '嗅觉灵敏的群猎犬，友善外向，容易因气味分心，适合嗅闻游戏。',
    story: '英国古老的群猎犬，嗅觉在犬类中名列前茅，常被用于机场检疫。',
    fact: '耳朵垂软，闻到气味时会完全进入追踪模式。',
    bestFor: '喜欢散步与嗅闻游戏的家庭',
    traits: { affection: 90, trainability: 60, energy: 75, independence: 60, guarding: 45, shedding: 60 },
    needs: { space: ['small', 'mid'], experience: ['beginner', 'pro'], energy: 4, family: ['kids', 'couple', 'single', 'elder'], shed: 'mid' },
    care: {
      diet: '控制食欲，防止肥胖。',
      exercise: '每日 60 分钟，嗅闻路线是亮点。',
      grooming: '短毛易打理，注意耳朵清洁。',
      training: '好奇心强易分心，嗅闻游戏可辅助训练。'
    },
    health: ['耳道感染', '椎间盘疾病', '肥胖']
  },
  {
    id: 'shiba',
    name: '柴犬',
    en: 'Shiba Inu',
    img: 'assets/img/breeds/shiba.jpg',
    group: 'companion',
    origin: '日本',
    size: '中小型犬',
    height: '35-43 cm',
    weight: '8-11 kg',
    lifespan: '12-15 年',
    personality: ['独立', '洁癖', '忠诚'],
    desc: '干净、独立、忠诚度高的日本犬种，领地意识强，需要稳定规则。',
    story: '日本古老的小型狩猎犬，擅长在灌木丛中追逐小动物，性格独立爱干净。',
    fact: '有强烈的清洁习惯，会像猫一样舔爪子。',
    bestFor: '经验丰富、尊重狗狗独立性的主人',
    traits: { affection: 60, trainability: 60, energy: 65, independence: 85, guarding: 80, shedding: 80 },
    needs: { space: ['small', 'mid'], experience: ['pro'], energy: 3, family: ['couple', 'single'], shed: 'high' },
    care: {
      diet: '定餐定量，保护肠胃敏感。',
      exercise: '每日 45-60 分钟，喜欢探索但警惕性高。',
      grooming: '短毛但掉毛量大，换毛季勤梳。',
      training: '聪明独立，需要一致性高的规则。'
    },
    health: ['髌骨脱位', '髋关节发育不良', '皮肤过敏']
  },
  {
    id: 'french-bulldog',
    name: '法国斗牛犬',
    en: 'French Bulldog',
    img: 'assets/img/breeds/french-bulldog.jpg',
    group: 'companion',
    origin: '法国',
    size: '小型犬',
    height: '28-33 cm',
    weight: '8-14 kg',
    lifespan: '10-12 年',
    personality: ['温和', '黏人', '爱玩'],
    desc: '小型伴侣犬，温和黏人，运动需求低，适合公寓生活。',
    story: '英国玩具犬在法国改良而成，体型紧凑、耳朵像蝙蝠，成为都市人气犬。',
    fact: '因为短吻，打呼噜是它们的日常背景音。',
    bestFor: '公寓家庭、低运动量陪伴需求',
    traits: { affection: 90, trainability: 65, energy: 35, independence: 35, guarding: 60, shedding: 40 },
    needs: { space: ['small', 'mid'], experience: ['beginner', 'pro'], energy: 2, family: ['kids', 'couple', 'single', 'elder'], shed: 'low' },
    care: {
      diet: '少食多餐，避免过热环境进食。',
      exercise: '短时间低强度运动，夏季避免暴晒。',
      grooming: '短毛易打理，注意面部褶皱清洁。',
      training: '温和但稍固执，用零食和小游戏引导。'
    },
    health: ['短头综合征', '椎间盘疾病', '皮肤褶皱炎']
  },
  {
    id: 'poodle',
    name: '贵宾犬',
    en: 'Poodle',
    img: 'assets/img/breeds/poodle.jpg',
    group: 'companion',
    origin: '法国 / 德国',
    size: '标准型中型犬',
    height: '38-60 cm',
    weight: '20-32 kg',
    lifespan: '12-15 年',
    personality: ['聪明', '优雅', '活泼'],
    desc: '聪明优雅的卷毛犬，几乎不掉毛，训练潜力高，是过敏人群常见选择。',
    story: '起源于欧洲水猎犬，后被法国贵族喜爱，聪明优雅，有多种尺寸。',
    fact: '卷毛几乎不掉毛，但需要定期专业修剪。',
    bestFor: '过敏人群、喜欢训练与造型打理的主人',
    traits: { affection: 80, trainability: 95, energy: 60, independence: 55, guarding: 70, shedding: 10 },
    needs: { space: ['small', 'mid', 'large'], experience: ['beginner', 'pro'], energy: 3, family: ['kids', 'couple', 'single', 'elder'], shed: 'low' },
    care: {
      diet: '按体重与活动量控制，防止肥胖。',
      exercise: '每日 45-60 分钟散步加智力游戏。',
      grooming: '卷毛需 4-6 周修剪一次，每日梳理。',
      training: '学习力强，指令加花样训练都很擅长。'
    },
    health: ['髌骨脱位', '髋关节发育不良', '遗传性眼病']
  }
];

const QUIZ = [
  {
    q: '你期待和狗狗在一起的主要方式是？',
    options: [
      { icon: 'mountain', label: '一起运动冒险', note: '跑步、飞盘、户外探索', weights: { energy: 2, trainability: 0.4, affection: 0.2 } },
      { icon: 'footprints', label: '日常散步陪伴', note: '早晚散步加在家贴贴', weights: { energy: 0.8, affection: 1.2 } },
      { icon: 'home', label: '安静宅家互动', note: '玩具、训练、沙发时光', weights: { energy: -0.6, affection: 0.7, trainability: 0.4 } }
    ]
  },
  {
    q: '你家最常见的生活空间是？',
    options: [
      { icon: 'home', label: '宽敞有院子', note: '有充足户外活动条件', field: { space: 'large' }, weights: { energy: 0.3 } },
      { icon: 'building-2', label: '普通公寓', note: '需要适应室内生活', field: { space: 'small' }, weights: { energy: -0.2 } },
      { icon: 'house', label: '中等户型', note: '散步方便，室内适中', field: { space: 'mid' } }
    ]
  },
  {
    q: '你的养宠经验是？',
    options: [
      { icon: 'graduation-cap', label: '第一次养狗', note: '希望它温和好上手', field: { experience: 'beginner' }, weights: { trainability: 0.8, affection: 0.4 } },
      { icon: 'award', label: '有经验爱训练', note: '愿意投入系统训练', field: { experience: 'pro' }, weights: { trainability: 0.6, energy: 0.3 } },
      { icon: 'clock', label: '有经验但时间有限', note: '想要省心好打理', field: { experience: 'pro' }, weights: { energy: -0.5, independence: 0.5 } }
    ]
  },
  {
    q: '家里还有哪些成员？',
    options: [
      { icon: 'baby', label: '有儿童', note: '希望性格稳定耐心', field: { family: 'kids' }, weights: { affection: 0.8, guarding: 0.2 } },
      { icon: 'users', label: '有老人', note: '节奏温和不吵闹', field: { family: 'elder' }, weights: { energy: -0.4, affection: 0.8 } },
      { icon: 'user', label: '独居或二人世界', note: '它是我重要的同伴', field: { family: 'couple' }, weights: { affection: 0.5, independence: 0.3 } }
    ]
  },
  {
    q: '你能接受多少毛发和打理？',
    options: [
      { icon: 'wind', label: '尽量少掉毛', note: '喜欢短毛或卷毛', field: { shed: 'low' }, weights: { trainability: 0.2 } },
      { icon: 'sparkles', label: '中度可以接受', note: '勤梳毛没问题', field: { shed: 'mid' }, weights: { affection: 0.2 } },
      { icon: 'check', label: '无所谓', note: '换毛季也能接受', weights: { affection: 0.3 } }
    ]
  }
];

const FACT_KEYS = [
  { key: 'size', label: '体型' },
  { key: 'height', label: '肩高' },
  { key: 'weight', label: '体重' },
  { key: 'lifespan', label: '寿命' },
  { key: 'group', label: '分组' },
  { key: 'personality', label: '性格' }
];

const filterState = { space: null, experience: null, energy: 3, family: [], shed: null };
const compareState = { a: 'labrador', b: 'golden' };
let currentGroup = 'all';
let quizIndex = 0;
let quizAnswers = [];
let quizDone = false;
let quizWeights = {};
let quizFields = {};

function findBreed(id) {
  return BREEDS.find(b => b.id === id);
}

function groupLabel(id) {
  return GROUP_NAMES[id] || '全部品种';
}

function iconHTML(name) {
  return `<i data-lucide="${name}"></i>`;
}

function refreshIcons() {
  if (window.lucide && typeof lucide.createIcons === 'function') {
    lucide.createIcons();
  }
}

function renderGroupTabs() {
  const wrap = document.getElementById('groupTabs');
  wrap.innerHTML = GROUPS.map(g => {
    const count = g.id === 'all' ? BREEDS.length : BREEDS.filter(b => b.group === g.id).length;
    return `<button class="tab${currentGroup === g.id ? ' is-active' : ''}" data-group="${g.id}" type="button" role="tab" aria-selected="${currentGroup === g.id}">${g.label}<small>${count} 个犬种</small></button>`;
  }).join('');
}

function bindGroupTabs() {
  const wrap = document.getElementById('groupTabs');
  wrap.addEventListener('click', e => {
    const btn = e.target.closest('.tab[data-group]');
    if (!btn) return;
    currentGroup = btn.dataset.group;
    renderGroupTabs();
    renderBreeds();
  });
}

function miniTraitHTML(breed, trait) {
  return `<div class="mini-trait"><span>${trait.label}</span><div class="mini-bar"><i style="width:${breed.traits[trait.key]}%"></i></div></div>`;
}

function breedCardHTML(breed) {
  return `
    <article class="breed-card">
      <div class="breed-photo">
        <img src="${breed.img}" alt="${breed.name}" loading="lazy">
        <span class="breed-chip">${groupLabel(breed.group)}</span>
      </div>
      <div class="breed-body">
        <h3>${breed.name}</h3>
        <p class="breed-en">${breed.en}</p>
        <div class="breed-tags">${breed.personality.map(p => `<span class="tag">${p}</span>`).join('')}</div>
        <div class="breed-traits">${TRAITS.map(t => miniTraitHTML(breed, t)).join('')}</div>
        <div class="breed-meta">
          <span>${breed.size} · ${breed.lifespan}</span>
          <button type="button" data-action="open" data-id="${breed.id}">详情 ${iconHTML('arrow-right')}</button>
        </div>
      </div>
    </article>`;
}

function renderBreeds() {
  const list = currentGroup === 'all' ? BREEDS : BREEDS.filter(b => b.group === currentGroup);
  document.getElementById('breedGrid').innerHTML = list.map(breedCardHTML).join('');
  refreshIcons();
}

function shedScore(breedShed, tolerance) {
  const level = breedShed === 'low' ? 0 : breedShed === 'mid' ? 1 : 2;
  if (tolerance === 'low') return [100, 55, 15][level];
  if (tolerance === 'mid') return [85, 100, 70][level];
  return 100;
}

function computeScores() {
  return BREEDS.map(b => {
    let sum = 0;
    let count = 0;
    if (filterState.space) {
      sum += b.needs.space.includes(filterState.space) ? 100 : 35;
      count++;
    }
    if (filterState.experience) {
      sum += b.needs.experience.includes(filterState.experience) ? 100 : 45;
      count++;
    }
    const diff = Math.abs(b.needs.energy - filterState.energy);
    sum += Math.max(0, 100 - diff * 22);
    count++;
    if (filterState.family.length) {
      const hit = filterState.family.filter(f => b.needs.family.includes(f)).length;
      sum += (100 * hit) / filterState.family.length;
      count++;
    }
    if (filterState.shed) {
      sum += shedScore(b.needs.shed, filterState.shed);
      count++;
    }
    return { breed: b, score: count ? Math.round(sum / count) : 100 };
  }).sort((x, y) => y.score - x.score || x.breed.name.localeCompare(y.breed.name, 'zh'));
}

const spaceLabels = { small: '小户型', mid: '中户型', large: '有院子' };
const shedLabels = { low: '低掉毛', mid: '中度掉毛', high: '高掉毛' };

function matchReasons(breed) {
  const reasons = [];
  if (filterState.space && breed.needs.space.includes(filterState.space)) reasons.push(spaceLabels[filterState.space]);
  if (filterState.experience && breed.needs.experience.includes(filterState.experience)) reasons.push(filterState.experience === 'beginner' ? '新手友好' : '经验适配');
  if (Math.abs(breed.needs.energy - filterState.energy) <= 1) reasons.push(`活动量 ${breed.needs.energy}/5`);
  if (filterState.family.length) {
    const hit = filterState.family.filter(f => breed.needs.family.includes(f)).length;
    if (hit > 0) reasons.push('家庭结构适配');
  }
  if (filterState.shed) reasons.push(shedLabels[breed.needs.shed]);
  return reasons.slice(0, 4);
}

function scoreCardHTML(breed, score) {
  const reasons = matchReasons(breed);
  return `
    <article class="match-card">
      <div class="match-head">
        <img class="match-photo" src="${breed.img}" alt="${breed.name}" loading="lazy">
        <div><h3>${breed.name}</h3><p>${breed.en} · ${groupLabel(breed.group)}</p></div>
        <div class="score-badge">${score}%</div>
      </div>
      ${reasons.length ? `<div class="match-reasons">${reasons.map(r => `<span>${r}</span>`).join('')}</div>` : ''}
      <button class="match-cta" type="button" data-action="open" data-id="${breed.id}">查看完整档案</button>
    </article>`;
}

function applyFilters() {
  const ranked = computeScores();
  const summary = document.getElementById('resultSummary');
  const hasConditions = filterState.space || filterState.experience || filterState.family.length || filterState.shed;
  summary.innerHTML = hasConditions
    ? `<strong>${ranked.length}</strong> 个犬种已按匹配度排序，第一名：${ranked[0].breed.name}`
    : `<strong>${ranked.length}</strong> 个犬种 · 选择左侧条件即可开始匹配`;
  document.getElementById('matchList').innerHTML = ranked.map(r => scoreCardHTML(r.breed, r.score)).join('');
  refreshIcons();
}

function initFilterEvents() {
  document.querySelectorAll('.seg[data-filter]').forEach(group => {
    group.addEventListener('click', e => {
      const btn = e.target.closest('button[data-value]');
      if (!btn) return;
      group.querySelectorAll('button').forEach(b => b.classList.remove('is-active'));
      btn.classList.add('is-active');
      filterState[group.dataset.filter] = btn.dataset.value;
      applyFilters();
    });
  });

  const familyGroup = document.querySelector('.chip-set[data-filter="family"]');
  familyGroup.addEventListener('click', e => {
    const btn = e.target.closest('button[data-value]');
    if (!btn) return;
    const value = btn.dataset.value;
    btn.classList.toggle('is-active');
    const idx = filterState.family.indexOf(value);
    if (idx > -1) filterState.family.splice(idx, 1);
    else filterState.family.push(value);
    applyFilters();
  });

  const range = document.getElementById('energyRange');
  const output = document.getElementById('energyOutput');
  range.addEventListener('input', () => {
    filterState.energy = Number(range.value);
    output.textContent = range.value;
    applyFilters();
  });

  document.getElementById('resetFilters').addEventListener('click', () => {
    Object.assign(filterState, { space: null, experience: null, energy: 3, family: [], shed: null });
    range.value = 3;
    output.textContent = 3;
    document.querySelectorAll('.seg button, .chip-set button').forEach(b => b.classList.remove('is-active'));
    applyFilters();
  });
}

function traitRowHTML(breed, trait) {
  return `
    <div class="trait-full-row">
      <span>${trait.label}</span>
      <div class="track"><i style="width:${breed.traits[trait.key]}%"></i></div>
      <small>${breed.traits[trait.key]}</small>
    </div>`;
}

function rhythmHTML(breed) {
  const e = breed.needs.energy;
  const steps = [
    { label: '晨间散步', time: e >= 4 ? '40-60 分钟' : '20-30 分钟' },
    { label: '智力游戏', time: '15 分钟' },
    { label: '午间休息', time: '安静时间' },
    { label: '傍晚运动', time: e >= 5 ? '60+ 分钟' : e >= 4 ? '30-45 分钟' : '20 分钟' },
    { label: '睡前陪伴', time: '晚安时光' }
  ];
  const path = 'M28 22 C 120 4, 180 40, 280 22 C 380 4, 440 40, 532 22';
  return `
    <div class="rhythm-wrap">
      <svg class="rhythm-route" viewBox="0 0 560 44" preserveAspectRatio="none">
        <path class="rhythm-line" d="${path}" fill="none"></path>
        <g class="rhythm-dot"><circle r="6"></circle><animateMotion dur="5s" repeatCount="indefinite" path="${path}"></animateMotion></g>
      </svg>
      <div class="rhythm-steps">${steps.map((s, i) => `<div class="rhythm-step"><i>${i + 1}</i><b>${s.label}</b><small>${s.time}</small></div>`).join('')}</div>
    </div>`;
}

function modalHTML(breed) {
  return `
    <div class="dialog-scroll">
      <div class="dialog-hero">
        <img src="${breed.img}" alt="${breed.name}">
        <span class="breed-chip dialog-chip">${groupLabel(breed.group)}</span>
        <button class="dialog-close" type="button" aria-label="关闭"><i data-lucide="x"></i></button>
      </div>
      <div class="dialog-body">
        <div class="dialog-head">
          <div>
            <h2 id="dialogTitle">${breed.name}</h2>
            <p>${breed.en} · ${breed.origin}</p>
          </div>
          <div class="dialog-tags">${breed.personality.map(p => `<span class="tag">${p}</span>`).join('')}</div>
        </div>
        <div class="dialog-stats">
          <div class="dialog-stat"><span>体型</span><strong>${breed.size}</strong></div>
          <div class="dialog-stat"><span>肩高</span><strong>${breed.height}</strong></div>
          <div class="dialog-stat"><span>体重</span><strong>${breed.weight}</strong></div>
          <div class="dialog-stat"><span>寿命</span><strong>${breed.lifespan}</strong></div>
        </div>
        <p class="breed-desc">${breed.desc}</p>
        <section class="dialog-section">
          <h4><i data-lucide="map-pin"></i>起源故事</h4>
          <p class="dialog-story">${breed.story}</p>
        </section>
        <section class="dialog-section">
          <h4><i data-lucide="sparkles"></i>性格与喜好</h4>
          <div class="trait-full">${TRAITS.map(t => traitRowHTML(breed, t)).join('')}</div>
        </section>
        <section class="dialog-section">
          <h4><i data-lucide="sun"></i>一日节奏</h4>
          ${rhythmHTML(breed)}
        </section>
        <section class="dialog-section">
          <h4><i data-lucide="heart-handshake"></i>饲养要点</h4>
          <div class="care-mini-grid">
            <div class="care-mini"><strong><i data-lucide="utensils"></i>饮食</strong><p>${breed.care.diet}</p></div>
            <div class="care-mini"><strong><i data-lucide="dumbbell"></i>运动</strong><p>${breed.care.exercise}</p></div>
            <div class="care-mini"><strong><i data-lucide="scissors"></i>美容</strong><p>${breed.care.grooming}</p></div>
            <div class="care-mini"><strong><i data-lucide="graduation-cap"></i>训练</strong><p>${breed.care.training}</p></div>
          </div>
        </section>
        <section class="dialog-section">
          <h4><i data-lucide="activity"></i>健康关注</h4>
          <ul class="dialog-health">${breed.health.map(h => `<li>${h}</li>`).join('')}</ul>
        </section>
        <section class="dialog-section">
          <h4><i data-lucide="users"></i>适合人群</h4>
          <p class="dialog-story">${breed.bestFor}</p>
        </section>
        <section class="dialog-section">
          <h4><i data-lucide="lightbulb"></i>冷知识</h4>
          <p class="dialog-story">${breed.fact}</p>
        </section>
        <div class="dialog-actions">
          <button class="btn btn-primary compare-from-modal" data-breed="${breed.id}" type="button">去对比 ${iconHTML('scale')}</button>
          <button class="btn btn-outline dialog-close-btn" type="button">关闭</button>
        </div>
      </div>
    </div>`;
}

function openBreed(id) {
  const breed = findBreed(id);
  if (!breed) return;
  const dialog = document.getElementById('breedDialog');
  dialog.innerHTML = modalHTML(breed);
  dialog.showModal();
  refreshIcons();
}

function bindDialog() {
  const dialog = document.getElementById('breedDialog');
  dialog.addEventListener('click', e => {
    if (e.target === dialog) {
      dialog.close();
      return;
    }
    if (e.target.closest('.dialog-close, .dialog-close-btn')) {
      dialog.close();
      return;
    }
    const compareBtn = e.target.closest('.compare-from-modal');
    if (compareBtn) {
      compareState.a = compareBtn.dataset.breed;
      if (compareState.b === compareState.a) {
        compareState.b = compareState.a === 'labrador' ? 'golden' : 'labrador';
      }
      document.getElementById('compareA').value = compareState.a;
      document.getElementById('compareB').value = compareState.b;
      renderCompare();
      dialog.close();
      document.getElementById('compare').scrollIntoView({ behavior: 'smooth' });
    }
  });

  document.addEventListener('click', e => {
    const opener = e.target.closest('[data-action="open"]');
    if (opener) openBreed(opener.dataset.id);
  });
}

function renderQuiz() {
  const app = document.getElementById('quizApp');
  if (quizDone) {
    renderQuizResult();
    return;
  }
  const q = QUIZ[quizIndex];
  app.innerHTML = `
    <div class="quiz-progress">
      <div class="paw-steps">${Array.from({ length: QUIZ.length }, (_, i) => `<i data-lucide="paw-print" class="${i < quizIndex ? 'done' : i === quizIndex ? 'current' : ''}"></i>`).join('')}</div>
      <div class="bar"><i style="width:${(quizIndex / QUIZ.length) * 100}%"></i></div>
      <span>${quizIndex + 1} / ${QUIZ.length}</span>
    </div>
    <div class="quiz-question">
      <h3>${q.q}</h3>
      <div class="quiz-options">
        ${q.options.map((o, i) => `<button class="quiz-option" data-answer="${i}" type="button">${iconHTML(o.icon)}<span>${o.label}</span><small>${o.note}</small></button>`).join('')}
      </div>
    </div>`;
  refreshIcons();
}

function quizScoreBreed(breed) {
  let score = 70;
  TRAITS.forEach(t => {
    score += breed.traits[t.key] * (quizWeights[t.key] || 0);
  });
  Object.keys(quizFields).forEach(field => {
    const want = quizFields[field];
    if (field === 'shed') {
      if (want === 'low' && breed.needs.shed === 'low') score += 18;
      else if (want === 'mid' && breed.needs.shed !== 'high') score += 12;
    } else if (Array.isArray(breed.needs[field])) {
      if (breed.needs[field].includes(want)) score += 16;
    } else if (breed.needs[field] === want) {
      score += 16;
    }
  });
  return score;
}

function renderQuizResult() {
  const app = document.getElementById('quizApp');
  const ranked = BREEDS.map(b => ({ breed: b, score: quizScoreBreed(b) })).sort((x, y) => y.score - x.score);
  const maxScore = Math.max(ranked[0].score, 1);
  const top = ranked.slice(0, 2).map(r => ({
    ...r,
    pct: Math.max(58, Math.min(98, Math.round((r.score / maxScore) * 100)))
  }));
  app.innerHTML = `
    <div class="quiz-progress">
      <div class="paw-steps">${Array.from({ length: QUIZ.length }, () => `<i data-lucide="paw-print" class="done"></i>`).join('')}</div>
      <div class="bar"><i style="width:100%"></i></div>
      <span>完成</span>
    </div>
    <div class="quiz-question">
      <h3>你的理想伙伴可能是</h3>
      <div class="quiz-result">
        ${top.map(r => `
          <article class="quiz-result-card">
            <div class="match-head">
              <img class="match-photo" src="${r.breed.img}" alt="${r.breed.name}" loading="lazy">
              <div><h3>${r.breed.name}</h3><p>${r.breed.en} · ${groupLabel(r.breed.group)}</p></div>
              <div class="score-badge">${r.pct}%</div>
            </div>
            <div class="match-reasons"><span>${r.breed.personality[0]}</span><span>${r.breed.personality[1]}</span><span>${r.breed.fact}</span></div>
            <button class="match-cta" type="button" data-action="open" data-id="${r.breed.id}">查看完整档案</button>
          </article>`).join('')}
      </div>
    </div>
    <div class="quiz-digest">
      ${QUIZ.map((q, i) => `<div><small>${q.q}</small><b>${quizAnswers[i]?.label}</b></div>`).join('')}
    </div>
    <div class="quiz-actions">
      <button class="btn" id="quizRestart" type="button">${iconHTML('rotate-ccw')}重新测试</button>
      <button class="btn btn-secondary" id="quizToBreeds" type="button">${iconHTML('book-open')}查看全部品种</button>
    </div>`;
  refreshIcons();
}

function bindQuiz() {
  const app = document.getElementById('quizApp');
  app.addEventListener('click', e => {
    const answer = e.target.closest('.quiz-option');
    if (answer && !quizDone) {
      const option = QUIZ[quizIndex].options[Number(answer.dataset.answer)];
      quizAnswers.push(option);
      if (option.weights) {
        Object.keys(option.weights).forEach(k => {
          quizWeights[k] = (quizWeights[k] || 0) + option.weights[k];
        });
      }
      if (option.field) Object.assign(quizFields, option.field);
      quizIndex++;
      if (quizIndex >= QUIZ.length) {
        quizDone = true;
        renderQuizResult();
      } else {
        renderQuiz();
      }
      return;
    }
    if (e.target.closest('#quizRestart')) {
      quizIndex = 0;
      quizAnswers = [];
      quizDone = false;
      quizWeights = {};
      quizFields = {};
      renderQuiz();
      return;
    }
    if (e.target.closest('#quizToBreeds')) {
      document.getElementById('breeds').scrollIntoView({ behavior: 'smooth' });
    }
  });
}

function renderCompare() {
  const a = findBreed(compareState.a);
  const b = findBreed(compareState.b);
  if (!a || !b) return;
  const board = document.getElementById('compareBoard');
  const formatFact = (breed, key) => key === 'personality' ? breed.personality.join(' / ') : key === 'group' ? groupLabel(breed.group) : breed[key];
  board.innerHTML = `
    <div class="compare-photos">
      <div class="compare-photo">
        <img src="${a.img}" alt="${a.name}">
        <div><strong>${a.name}</strong><span>${a.size} · ${a.lifespan}</span></div>
      </div>
      <div class="vs-badge">VS</div>
      <div class="compare-photo">
        <img src="${b.img}" alt="${b.name}">
        <div><strong>${b.name}</strong><span>${b.size} · ${b.lifespan}</span></div>
      </div>
    </div>
    <div class="compare-facts">
      <div class="fact fact-head">维度</div>
      <div class="fact fact-cell fact-a">A · ${a.name}</div>
      <div class="fact fact-cell fact-b">B · ${b.name}</div>
      ${FACT_KEYS.map(k => `
        <div class="fact fact-head">${k.label}</div>
        <div class="fact fact-cell fact-a">${formatFact(a, k.key)}</div>
        <div class="fact fact-cell fact-b">${formatFact(b, k.key)}</div>`).join('')}
    </div>
    <div class="compare-traits">
      ${TRAITS.map(t => `
        <div class="trait-row">
          <span>${t.label}</span>
          <div class="trait-bars">
            <div class="trait-bar trait-a">
              <small><span>A</span><span>${a.traits[t.key]}</span></small>
              <div class="track"><i style="width:${a.traits[t.key]}%"></i></div>
            </div>
            <div class="trait-bar trait-b">
              <small><span>B</span><span>${b.traits[t.key]}</span></small>
              <div class="track"><i style="width:${b.traits[t.key]}%"></i></div>
            </div>
          </div>
        </div>`).join('')}
    </div>
    <div class="compare-health">
      <div>
        <h4><i data-lucide="heart-pulse"></i>${a.name} 健康关注</h4>
        <ul>${a.health.map(h => `<li>${h}</li>`).join('')}</ul>
      </div>
      <div>
        <h4><i data-lucide="heart-pulse"></i>${b.name} 健康关注</h4>
        <ul>${b.health.map(h => `<li>${h}</li>`).join('')}</ul>
      </div>
    </div>`;
  refreshIcons();
}

function bindCompare() {
  const selectA = document.getElementById('compareA');
  const selectB = document.getElementById('compareB');
  const optionsHTML = BREEDS.map(b => `<option value="${b.id}">${b.name}</option>`).join('');
  selectA.innerHTML = optionsHTML;
  selectB.innerHTML = optionsHTML;
  selectA.value = compareState.a;
  selectB.value = compareState.b;
  selectA.addEventListener('change', () => {
    compareState.a = selectA.value;
    renderCompare();
  });
  selectB.addEventListener('change', () => {
    compareState.b = selectB.value;
    renderCompare();
  });
  document.getElementById('swapCompare').addEventListener('click', () => {
    const tmp = compareState.a;
    compareState.a = compareState.b;
    compareState.b = tmp;
    selectA.value = compareState.a;
    selectB.value = compareState.b;
    renderCompare();
  });
}

function bindGallery() {
  const track = document.getElementById('galleryTrack');
  document.getElementById('galleryPrev').addEventListener('click', () => track.scrollBy({ left: -310, behavior: 'smooth' }));
  document.getElementById('galleryNext').addEventListener('click', () => track.scrollBy({ left: 310, behavior: 'smooth' }));
}

function bindBackTop() {
  const btn = document.getElementById('backTop');
  window.addEventListener('scroll', () => {
    btn.classList.toggle('show', window.scrollY > 600);
  });
  btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

document.addEventListener('DOMContentLoaded', () => {
  renderGroupTabs();
  bindGroupTabs();
  renderBreeds();
  initFilterEvents();
  applyFilters();
  bindDialog();
  renderQuiz();
  bindQuiz();
  bindCompare();
  renderCompare();
  bindGallery();
  bindBackTop();
  refreshIcons();
});
