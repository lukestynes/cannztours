"use client";
import { type Locale } from "@/i18n.config";
import { CardStack } from "./ui/card-stack";

const CARDS = [
  {
    id: 0,
    name: "Lam Z",
    designation: "TripAdvisor",
    content: (
      <p>
        We just completed a tour to Arthur&apos;s Pass today. I would not
        hesitate to recommend this tour to anyone who wants to sit back, relax,
        and enjoy the best of NZ&apos;s wonderful nature. The organisation of
        the tour was perfect: Craig tweaked the schedule slightly to suit the
        weather of the day. Craig is extremely knowledgeable.
      </p>
    ),
  },
  {
    id: 1,
    name: "Benjamin G.",
    designation: "TripAdvisor",
    content: (
      <p>
        Craig was a very good host on our tour around Christchurch. He made sure
        we were well looked after by providing lots of activities that we could
        do on our tour around Christchurch and he was very very flexible with
        our needs. He helped out in as many ways he could always with a big
        smile on his face - great service. Would recommend.
      </p>
    ),
  },
  {
    id: 2,
    name: "John B",
    designation: "TripAdvisor",
    content: (
      <p>
        Craig picked us up at our hotel and from start to finish he customized
        our tour to meet our wishes. We drove to Arthur&apos;s Pass where we
        were served a delightful picnic with views of the mountains. Along the
        way ther and back, he answered a thousand questions about flora, fauna,
        history, geology, you name it. Craig goes out of his way to make your
        tour something you will always remember. You can&apos;t go wrong!
      </p>
    ),
  },
];

const CARDS_JA = [
  {
    id: 0,
    name: "Masahiko W.",
    designation: "TripAdvisor",
    content: (
      <p>
        Craigさんとは3年くらい前に初めて北島〜南島ツアーをしてもらってからのお付き合いですが、NZ中どこでもどんなリクエストにもフレキシブルに応えてくれて、かつ手作り感も満載な最高のガイドさんです。(私の旅行人生の中では間違いなく金賞)
        今回、まだ行ったことのなかったクライストチャーチから西側への日帰りツアーをお願いしたところその翌日のアーサーズパスへのツアー(日本から来られていた家族旅行)に飛び入り参加させてもらい、その方らと楽しい時間を過ごさせてもらうこともできました。
        夜は市内の27stepsという人気のレストランで日本でも流行りの熟成肉やNZワインを堪能。その時Craigさんが隣の方に声をかけてその方らの日本旅行の話とかもでき、楽しい夜でした。
        初めてNZに来られる方やNZで具体的にこれをやりたいと思っている方まで、まずは彼のツアーを体験されることお勧めです。個人で行く何倍もの新しい情報や歴史を知ることができるし、何より退屈しないです(こっちが寝てても静かにしゃべり続けている)。料金以上の満足を得られるツアーって中々ないと思います。
      </p>
    ),
  },
  {
    id: 1,
    name: "Akane S",
    designation: "TripAdvisor",
    content: (
      <p>
        初ニュージーランド、初クライストチャーチで自由行動が4日間だけの個人旅行、でもマウントクックにも行ってみたい・・・そんなワガママが叶いました！
        クライストチャーチからマウントクックに行くには、自由時間がほとんどない日帰りツアーに参加するか、自力で高速バスを使って1泊2日で行くしか無さそうと諦めていたところにクレイグさんの日帰り日本語ツアーを見つけたのです。
        朝7時にホテルまで迎えに来ていただき、行く道中にはクライストチャーチの地震からの復興状況のお話や、心のこもったモーニングティーと食事のおもてなしをいただき、すっかりお友達に案内してもらっているような気持ちになれました。
        天気だけは運次第ですが、私たちのツアーは晴天に恵まれ、目を見張る美しい景色の連続を楽しむことができました。
        クライストチャーチに戻ったのは夜の8時。往復600km以上、自分では連続して運転できない距離です。本当にありがたかったです。
        申し込まれる方は自由行動期間の前の方にされることをお勧めします。天気が合わなかったら、クレイグさんが何か別の提案を下さるかもしれません。そのときの選択肢を広げるために(^_-)
      </p>
    ),
  },
  {
    id: 2,
    name: "Chestnut",
    designation: "TripAdvisor",
    content: (
      <p>
        クライストチャーチからツアーに参加しました。
        宿泊先までお迎えにきてくださり SpringField から Tranz Alpine
        に乗ってArthersPassまで 列車の旅を楽しみました。 TranzAlpine
        にはクライストチャーチからも乗れるのですが
        景色を楽しむのに丁度よい区間でCraigさんがアレンジしてくださっていることを一緒に参加した方から伺い有り難く思いました。
        Arthurs Pass Nationa
        Parkではすばらしい自然を体感して癒され、行きは列車から、帰りは車から違った景色を楽しめました。
        また車では途中、羊の群れや、景色のよい場所で
        車を停めて時間をとってくださったり、
        ツアー中は各地域の歴史、地形や動植物、暮らしのことなど色々教えてくださり
        とても興味深くてあっという間の1日でした。
        また絶景を眺めながらのランチは最高でした。
        ツアーに参加されたらランチの美味しさにみなさんびっくりすると思います！！
        きっとほかのツアーでは体験できないような
        素敵な時間をすごせると思います。
        何よりCraigさんのお人柄が素晴らしく、行ったことのある所にも Craig
        さんのツアーでもう一度行ってみたいと思いました。
      </p>
    ),
  },
];

export interface ReviewStackCard {
  id: number;
  name: string;
  designation: string;
  content: string;
}

export default function ReviewStack({ lang }: { lang: Locale }) {
  if (lang == "en-US") {
    return (
      <div className="flex h-[24rem]  w-full items-center justify-center">
        <CardStack items={CARDS} />
      </div>
    );
  } else {
    return (
      <div className="flex h-[650px]  w-full items-center justify-center">
        <CardStack items={CARDS_JA} />
      </div>
    );
  }
}
