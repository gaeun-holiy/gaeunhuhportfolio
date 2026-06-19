export type Film = {
  slug: string;
  titleEn: string;
  titleKr?: string;
  category: string;
  duration: string;
  thumbnail: string;
  videoUrl?: string;
  youtubeId?: string;
  videoAspectRatio?: string;
  caption: string;
  captionEn?: string;
  captionKo?: string;
  captionKoBlocks?: Array<{
    heading?: string;
    text: string;
  }>;
  needsMp4Conversion?: boolean;
};

export const films: Film[] = [
  {
    slug: "absent-presence",
    titleEn: "Absent Presence",
    titleKr: "투명인간",
    category: "Short Film",
    duration: "3m 56s",
    thumbnail: "/images/unseen_1.png",
    videoUrl: "/videos/투명인간.mov",
    youtubeId: "wXBjFcZQ6aA",
    videoAspectRatio: "2.35/1",
    caption:
      "A short film adapting Seok-je Sung's novel The Invisible Man into 2020s Seoul.",
    captionKoBlocks: [
      {
        text: "단편영화 · 각색 연출"
      },
      {
        text: "성석제의 장편소설 『투명인간』을 2020년대 서울로 옮겨 각색한 단편영화다. 원작이 품은 '투명인간'의 정신은 그대로 두되, 오늘날 가장 흔하게 마주치는 20대 인물에 그 정신을 입혔다."
      },
      {
        text: "투명인간은 흔히 소수자이자 약자로 읽힌다. 그러나 이 영화의 투명인간은 우리 곁 어디에나 있지만 아무도 돌아보지 않는 사람이며, 사랑하는 이들과 함께하기 위해 기꺼이 지지대가 되어주는 강한 존재다."
      },
      {
        heading: "Director's Note",
        text: "드라마틱한 서사를 좇기보다, '투명인간'이라는 개념적 인간상을 시각적 메타포로 옮기는 데 집중했다. 타인을 위해 온몸으로 버팀목이 되는 장면 — 평범하지만 결코 무시할 수 없이 아름다운 투명인간의 순간이다."
      }
    ],
    captionEn:
      "A short film adapting Seok-je Sung's novel \"The Invisible Man\" into 2020s Seoul. The invisible man here is not a marginalized figure but a quiet, unseen presence beside us — strong enough to become a support for those they love.",
    needsMp4Conversion: true
  },
  {
    slug: "mvrk-day",
    titleEn: "MVRK DAY",
    category: "Documentary Film",
    duration: "20m 04s",
    thumbnail: "/images/mvrk_thumb.png",
    videoUrl: "/videos/MVRK DAY.mp4",
    youtubeId: "63oUHBNxEFI",
    videoAspectRatio: "16/9",
    caption: "A documentary on MVRK House's first public event.",
    captionKoBlocks: [
      {
        text: "다큐멘터리 · 연출 / 모션그래픽"
      },
      {
        text: "메버릭하우스는 한국의 새로운 비전을 실현할 젊은 세대가 모이는 광장이다. 예술가 플랫폼도 단체도 아닌, 서로 다른 분야의 개척자들이 각자의 자리에서 출발해 한자리에 모이는 열린 공간."
      },
      {
        heading: "Project Background",
        text: "대중과의 본격적인 소통을 알리는 첫 행사 'MVRK Day'의 기록을 의뢰받았다. 멤버 인터뷰가 영상의 중심인 만큼, 각 인물의 고유한 백그라운드를 유연하게 수용하는 인터뷰 시스템 설계가 프로젝트의 핵심 과제였다."
      },
      {
        heading: "Why Documentary",
        text: "사전 밀착 취재에서 멤버들이 서로의 다름을 포용하는 생동감을 발견했다. 인위적이고 정제된 연출을 배제하고, 날것의 몸짓과 언어에서 뿜어져 나오는 현장의 공기 자체를 담기 위해 다큐멘터리를 택했다."
      },
      {
        heading: "Why Nodes & Network",
        text: "모션그래픽으로 각기 다른 비전을 품고 세계로 향하는 멤버들의 정체성을 시각화했다. 한국 지도 위에 흩어진 개별 노드가 하나의 로고로 수렴하는 구조를 통해 '서로 다른 위치, 하나의 광장'이라는 단체의 비전을 직관적으로 구현했다."
      },
      {
        heading: "Note — 응답을 읽고, 재프레임하고, 되돌려주는 인터뷰",
        text: "10명의 인터뷰이는 각기 다른 분야의 개척자였기에 고정된 질문지로는 그들의 결을 담을 수 없었다. 공통 질문에서 출발하되, 응답 속에서 핵심 메타포를 포착해 인터뷰이의 업(業)과 재연결하고, 재프레임된 질문으로 되돌려주는 인터뷰 시스템을 설계했다. 이 과정은 현장에서 실시간으로 수행되었다."
      }
    ],
    captionEn:
      "A documentary on MVRK House's first public event. With member interviews at its center, the core challenge was designing an interview system flexible enough to hold ten pioneers from ten different fields — listening, reframing, and returning each question in real time on site."
  },
  {
    slug: "eros",
    titleEn: "EROS!",
    category: "AI Film",
    duration: "10m 30s",
    thumbnail: "/images/EROS_1.png",
    caption: "An AI-generated film about Eros, the god of love.",
    captionKoBlocks: [
      {
        text: "AI 영화 · 캐릭터 디자인 / 제작"
      },
      {
        text: "인간에게 신이 처음 부여한 감정 '사랑'. 그 사랑의 신 에로스가 프로메테우스와의 관계에서 시련을 겪고, 인간 세상에서 '사랑'을 거두면서 전 세계에 비상이 걸린다. 에로스를 체포한 형사는 그를 심문하며, 우리가 사랑이라 믿어온 것들을 송두리째 뒤흔드는 근본적인 질문을 던진다."
      },
      {
        heading: "Note",
        text: "사랑의 신 에로스를 디자인하며, 통념 속 어린 소년 천사의 이미지를 탈피해 더 인간적이면서도 시각적 충격을 주는 비주얼을 만들고자 했다. 영화는 Seedance 모델을 활용해 팀원들과 함께 생성했다."
      }
    ],
    captionEn:
      "An AI-generated film. When Eros, the god of love, withdraws love from the human world, a detective interrogates him — and asks the questions that unsettle everything we believed love to be. The character design departs from the cherubic-angel cliché toward something more human, more striking."
  }
];

export function getFilmBySlug(slug: string) {
  return films.find((film) => film.slug === slug);
}
