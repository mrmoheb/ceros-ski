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
export const JUMP = "jump";
export const AFTER_JUMP = "afterjump";
export const KILLED = "killed";
export const RHINO = "rhino";
export const RHINO_LEFT = "rhinoleft";
export const RHINO_RIGHT = "rhinoright";
export const INITIAL_Y_SKIER_START = 30000;
export const DISTANCE_THE_RHINO_SHOULD_APPEAR = 60000;
export const DISTANCE_BETWEEN_RHINO_AND_SKIER = 440;

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
  [JUMP]: "img/skier_jump_1.png",
  [AFTER_JUMP]: "img/skier_jump_2.png",
  [KILLED]: "img/rhino_lift_eat_1.png",
  [RHINO]: "img/rhino_default.png",
  [RHINO_RIGHT]: "img/rhino_run_left_2.png",
  [RHINO_LEFT]: "img/rhino_run_left.png",
};

export const SKIER_DIRECTIONS = {
  CRASH: 0,
  LEFT: 1,
  LEFT_DOWN: 2,
  DOWN: 3,
  RIGHT_DOWN: 4,
  RIGHT: 5,
  JUMP: 6,
  AFTER_JUMP: 7,
  KILLED: 8,
};

export const SKIER_DIRECTION_ASSET = {
  [SKIER_DIRECTIONS.CRASH]: SKIER_CRASH,
  [SKIER_DIRECTIONS.LEFT]: SKIER_LEFT,
  [SKIER_DIRECTIONS.LEFT_DOWN]: SKIER_LEFTDOWN,
  [SKIER_DIRECTIONS.DOWN]: SKIER_DOWN,
  [SKIER_DIRECTIONS.RIGHT_DOWN]: SKIER_RIGHTDOWN,
  [SKIER_DIRECTIONS.RIGHT]: SKIER_RIGHT,
  [SKIER_DIRECTIONS.JUMP]: JUMP,
  [SKIER_DIRECTIONS.AFTER_JUMP]: AFTER_JUMP,
  [SKIER_DIRECTIONS.KILLED]: KILLED,
};

export const RHINO_DIRECTION_ASSET = {
  [SKIER_DIRECTIONS.CRASH]: KILLED,
  [SKIER_DIRECTIONS.LEFT]: RHINO_LEFT,
  [SKIER_DIRECTIONS.LEFT_DOWN]: RHINO_LEFT,
  [SKIER_DIRECTIONS.DOWN]: RHINO,
  [SKIER_DIRECTIONS.RIGHT_DOWN]: RHINO_RIGHT,
  [SKIER_DIRECTIONS.RIGHT]: RHINO_RIGHT,
  [SKIER_DIRECTIONS.AFTER_JUMP]: RHINO,
  [SKIER_DIRECTIONS.AFTER_JUMP]: RHINO,
  [SKIER_DIRECTIONS.KILLED]: KILLED,
};

export const KEYS = {
  LEFT: 37,
  RIGHT: 39,
  UP: 38,
  DOWN: 40,
  JUMP: 32,
};
