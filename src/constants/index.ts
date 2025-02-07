interface ConstantType {
  [index: string]: string;
}

export const ROUTINE_TAB: ConstantType = Object.freeze({
  TOTAL: '전체 루틴',
  TODO: '오늘의 루틴',
  COMPLETE: '완료한 루틴',
});

export const ROUTINE_CATEGORY: ConstantType = Object.freeze({
  TOTAL: '전체',
  EXERCISE: '운동',
  GAME: '게임',
  FOOD: '음식',
  HOBBY: '취미',
  SHOPPING: '쇼핑',
  HEALTH: '건강',
  STUDY: '공부',
  LIFE: '라이프',
  ART: '아트',
  MUSIC: '뮤직',
});

export const WEEK: ConstantType = Object.freeze({
  MON: '월',
  TUE: '화',
  WED: '수',
  THU: '목',
  FRI: '금',
  SAT: '토',
  SUN: '일',
});
