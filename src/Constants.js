export const GAME_WIDTH = window.innerWidth;
export const GAME_HEIGHT = window.innerHeight;

export const SKIER_CRASH = "skierCrash";
export const SKIER_LEFT = "skierLeft";
export const SKIER_LEFTDOWN = "skierLeftDown";
export const SKIER_DOWN = "skierDown";
export const SKIER_RIGHTDOWN = "skierRightDown";
export const SKIER_RIGHT = "skierRight";
export const TREE = "tree";
export const TREE_CLUSTER = "treeCluster";
export const JUMP_RAMP = "jumpramp";
export const ROCK1 = "rock1";
export const ROCK2 = "rock2";
export const JUMP1 = "jump1";
export const JUMP2 = "jump2";
export const JUMP3 = "jump3";
export const JUMP4 = "jump4";
export const JUMP5 = "jump5";

export const SKIER_STARTING_SPEED = 10;
export const SKIER_DIAGONAL_SPEED_REDUCER = 1.4142;

export const ASSETS = {
  [SKIER_CRASH]: "img/skier_crash.png",
  [SKIER_LEFT]: "img/skier_left.png",
  [SKIER_LEFTDOWN]: "img/skier_left_down.png",
  [SKIER_DOWN]: "img/skier_down.png",
  [SKIER_RIGHTDOWN]: "img/skier_right_down.png",
  [SKIER_RIGHT]: "img/skier_right.png",
  [TREE]: "img/tree_1.png",
  [TREE_CLUSTER]: "img/tree_cluster.png",
  [ROCK1]: "img/rock_1.png",
  [ROCK2]: "img/rock_2.png",
  [JUMP_RAMP]: "img/jump_ramp.png",
  [JUMP1]: "img/skier_jump_1.png",
  [JUMP2]: "img/skier_jump_2.png",
  [JUMP3]: "img/skier_jump_3.png",
  [JUMP4]: "img/skier_jump_4.png",
  [JUMP5]: "img/skier_jump_5.png",
};

export const SKIER_DIRECTIONS = {
  CRASH: 0,
  LEFT: 1,
  LEFT_DOWN: 2,
  DOWN: 3,
  RIGHT_DOWN: 4,
  RIGHT: 5,
  JUMP: 6,
  JUMP1: 7,
  JUMP2: 8,
  JUMP3: 9,
  JUMP4: 10,
};

export const SKIER_DIRECTION_ASSET = {
  [SKIER_DIRECTIONS.CRASH]: SKIER_CRASH,
  [SKIER_DIRECTIONS.LEFT]: SKIER_LEFT,
  [SKIER_DIRECTIONS.LEFT_DOWN]: SKIER_LEFTDOWN,
  [SKIER_DIRECTIONS.DOWN]: SKIER_DOWN,
  [SKIER_DIRECTIONS.RIGHT_DOWN]: SKIER_RIGHTDOWN,
  [SKIER_DIRECTIONS.RIGHT]: SKIER_RIGHT,
  [SKIER_DIRECTIONS.JUMP]: JUMP1,
  [SKIER_DIRECTIONS.JUMP1]: JUMP2,
  [SKIER_DIRECTIONS.JUMP2]: JUMP3,
  [SKIER_DIRECTIONS.JUMP3]: JUMP4,
  [SKIER_DIRECTIONS.JUMP4]: JUMP5,
};

export const KEYS = {
  LEFT: 37,
  RIGHT: 39,
  UP: 38,
  DOWN: 40,
  JUMP: 32,
  JUMP1: 32,
  JUMP2: 32,
  JUMP3: 32,
  JUMP4: 32,
};
