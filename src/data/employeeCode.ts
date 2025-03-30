type EmployeeCodeType = {
  [key: string]: {
    name: string;
    nickname: string;
    country: string;
    age: string;
    team: string;
    type: string;
    history: string[];
  };
};
export const EmployeeCode: EmployeeCodeType = {
  AYZB3728: {
    name: "Lerry  Palmen",
    nickname: "P",
    country: "German",
    age: "43",
    team: "B - Leader",
    type: "Stigma - Black Forest Witches",
    history: [
      "독일의 농부 출신으로 이상 현상 이력이 없는 혈통의 일반인",
      "검은 숲에 이끌려 슈바르발츠의 마녀에게 저주(낙인)를 받음",
      "반경 10m 이내의 농작물과 가축이 죽는 저주. 사람의 경우 무작위 질병에 의한 사망 발생.",
      "독일 그림(Grimm) 재단의 요청으로 (주) 오블리비언에서 신변을 인계",
      "관리 1팀에서 4팀으로 이전됨에 따라 관리 B 구역 담당",
      "높은 적응력과 리더쉽. 관리 B 구역 개체에 대한 대처 숙련도 높음",
      "관리 B 구역 구출 작전 중 사망 판정. 시신 회수 실패"
    ]
  }
};
