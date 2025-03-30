type DashboardItem = {
  id: number;
  title: string;
  subdescription?: string[];
  data: string[]; // Array of strings
  date: string; // Date in string format (e.g., "YYYY-MM-DD")
};

type DashboardDataType = {
  [key: string]: DashboardItem[]; // Dynamic keys with arrays of DashboardItem
};

export const DashboardData: DashboardDataType = {
  AYZB3728: [
    {
      id: 0,
      title: "memo_1",
      subdescription: [
        "Personal Memo",
        "Safety Level - Alpha",
        "Lerry Palmen",
        "Location - B Team Office"
      ],
      data: [
        "팀을 옮기게 되었다. 올해 유독 새로 들어온 사람들이 많으니, 어쩔 수 없는 일이기는 했다.",
        "나탈리, 유진과 떨어지게 된 건, 정말 유감이다. 이 끔찍한 지옥에서 유일하게 의지할 수 있었던 동료이자 친구들이었으니까. 그래도 영영 떨어져 있는 것은 아니니까, 이 새로운 변화에 다시 한 번 적응해야 할 때다.",
        "J의 말대로 메모장에 이것 저것 써보니 마음이 조금 정리되는 기분이다. 나탈리가 늘 일기를 쓰는 것도, 이런 이유 때문일까?",
        "이 안에서 살아가는 동안은 시간 개념이 상실되어 버리니, 내가 여기 얼마나 있었는지도 잘 체감이 되지 않는다.",
        "...가족들이 보고 싶다. 용서를, 구하고 싶다.",
        "구할 수 없다는 걸 알면서도."
      ],
      date: "2014-01-01"
    },
    {
      id: 1,
      title: "B",
      data: [
        "관리 B 구역은 다른 구역과는 별개로, 조금 특수한 구역이다.",
        '현재까지 남아있는 신화 시대의 흔적 중, 그나마 가장 온전한 형태로 남아있는 "저승"이라고 해야 할까.',
        "그렇다 보니, 이곳의 개체들은 다른 구역에 비하여 유독 그 힘과 형태가 뚜렷하게 남아있는 경우가 많다.",
        "마지막 안가쿠이트가 세상을 떠나게 됨에 따라, 당분간은 안정화를 위해 관리팀에서 그 역할을 대신해야 했다.",
        "폐쇄된 관리 A 구역과 관리 B 구역은 오블리비언이 가장 오래도록 통제하고 있던 구역이라고 알고 있는데, 특히 이 B구역의 푸른 피가 매우 중요한 연구 자료였다.",
        "이렇게 되면, 관리 B 구역을 폐쇄하는 것이 가능한가?",
        "요즘 오블리비언의 진짜 목적이 무엇인지, 의심이 들 때가 있다. 나탈-...아니, 1팀장의 상태도 전혀 나아질 기미가 보이지 않고...",
        "우리는, 죽을 때 까지 나가지 못하는 걸까?",
        "그만 생각하자."
      ],
      date: "2014-11-21"
    },
    {
      id: 2,
      title: "Freshman",
      data: [
        "신입 사원이 들어왔다. 사나와 같은 한국인 출신 사원이었다.",
        "이상하게도 이 회사는 영국에서 처음 시작된 것으로 알고 있는데, 유진도 그렇고, 이사나도 그렇고, 한월이도-... 한국인 출신이 점점 늘어나고 있다.",
        "현대화 된 나라들은 대부분 이러한 이상 현상에 휘말린 사람들의 비중이 점점 줄어들어야 정상인데, 동북아시아의 이 조그마한 나라는 오히려 나날이 증가하는 기현상을 보이고 있다.",
        "사실, 그 이유 때문에 이 나라의 이상재해관리본부 쪽의 협조를 받아 회사의 일부를 이전해 온 것이기는 하지.",
        "그런데 그쪽 공무원 분들은 별로 달가워하지는 않는 분위기다. 뭐, 이해는 한다.",
        "사실상 우리는-... 아니, 여기까지 하자. 그만, 그만, 그만."
      ],
      date: "2017-10-31"
    },

    {
      id: 3,
      title: "memo_2",
      data: [
        "권총",
        "은빛 늑대 털",
        "알람시계",
        "초콜릿바",
        "녹음기",
        "진, 만약 내게 무슨 일이 생겼다면, 내 모든 기록에 대한 결정권은 네게 넘길게.",
        "한월이, 한월이...한테, 잘 설명해주고-... 1팀장에게 미안하다고도, 전달해줘.",
        "살아남아. 살아남아서, 자유로워지기를 바라.",
        "너는 그럴 자격이 있어. 하지만 나는 아니야.",
        "만약 내가 잘못된다면, 그건 벌을 받는 거야.",
        "그러니까, 죄책감 가지지 않아도 돼.",
        "어차피 돌아갈 곳도 없었으니까, 괜찮아.",
        "안전한 하루 되기를. 너도, 나도... 우리 모두."
      ],
      date: "2020-01-01"
    }
  ]
};
