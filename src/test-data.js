// =========================================================
// Copyright 2019 Dietrich Bollmann
// 
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
// 
//      http://www.apache.org/licenses/LICENSE-2.0
// 
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
// ---------------------------------------------------------
// 
// @overview    Example data for first experiments.
// 
// @author      Dietrich Bollmann
// @email       dietrich@formgames.org
// @copyright   Copyright 2019 Dietrich Bollmann
// @license     Apache License 2.0, http://www.apache.org/licenses/LICENSE-2.0"
// @date        2019/12/19
// 
// ---------------------------------------------------------

// =========================================================
// Test Data
// ---------------------------------------------------------

// =========================================================
// 秘密花园 (The Secret Garden)
// ---------------------------------------------------------
// 
// Taken with permission from:
// 
//   - 秘密花园
//     The Secret Garden
//     Mandarin Companion graded readers
//     https://mandarincompanion.com/products/the-secret-garden/
// 
//   - Sample of 秘密花园 (The Secret Garden)
//     https://mandarincompanion.com/wp-content/uploads/samples/Mandarin%20Companion%20-%20The%20Secret%20Garden%20(Sample).pdf
// 
// ---------------------------------------------------------

// =========================================================
// 秘密花园 (The Secret Garden): Title.
// ---------------------------------------------------------
// 
//   秘密花园。
//   mìmì huāyuán
//   The Secret Garden
// 
// Vocabulary:
// 
//   秘密
//   mìmì
//   secret
// 
//   花园
//   huāyuán
//   garden
// 
// Hanzi:
// 
//   秘
//   mì
//   secret
// 
//   密
//   mì
//   secret
// 
//   花
//   huā
//   flower
// 
//   园
//   yuán
//   garden
// 
//   。
// 
// Hanzi Tone Colors:
// 
//    no tone: black
//   1st tone: red
//   2nd tone: green
//   3rd tone: blue
//   4th tone: purple
// 
// ---------------------------------------------------------

let _mimihuayuan_title = {

  type: "text",
  title: "Title Text 001",
  chapters: [
    {
      type: "chapter",
      title: "Title Chapter 000",
      paragraphs: [
	{
	  type: "paragraph",
	  sentences: [
	    {
	      type: "sentence",
	      comment: "秘密花园。/ mìmì huāyuán / The Secret Garden.",
	      words: [
		{
		  type: "word",
		  hanzis: [
		    {
		      type: "hanzi",
		      shape: "秘",
		      pinyin: "mì", 
		      tone: 4,
		      translation: "secret"
		    },
		    {
		      type: "hanzi",
		      shape: "密",
		      pinyin: "mì", 
		      tone: 4,
		      translation: "secret"
		    }
		  ],
		  translation: "secret"
		},
		{
		  type: "word",
		  hanzis: [
		    {
		      type: "hanzi",
		      shape: "花",
		      pinyin: "huā", 
		      tone: 1,
		      translation: "flower"
		    },
		    {
		      type: "hanzi",
		      shape: "园",
		      pinyin: "yuán", 
		      tone: 2,
		      translation: "garden"
		    }
		  ],
		  translation: "garden"
		},
		{
		  type: "word",
		  hanzis: [
		    {
		      type: "hanzi",
		      shape: "。",
		      pinyin: "",
		      tone: 0,
		      translation: ""
		    }
		  ],
		  translation: ""
		},
	      ],
	      translation: "The Secret Garden."
	    }
	  ]
	}
      ]
    }
  ]
}

// =========================================================
// 秘密花园 (The Secret Garden): Chapter 1.
// ---------------------------------------------------------

let _mimihuayuan_chapter1 = {

  type: "book",
  title: "秘密花园",
  chapters: [
    {
      type: "chapter",
      title: "没有人喜欢的女孩",
      paragraphs: [
	{
	  type: "paragraph",
	  paragraph: "她叫李叶，是一个不太好看的女孩。",
	},
	{
	  type: "paragraph",
	  paragraph: "李叶出生在海南。海南在中国的最南边，很远很远。李叶的爸爸经常在外面，很少在家。李叶的妈妈是个很好看的女人，她有很多朋友，每天都和朋友一起玩。李叶的爸爸妈妈都很忙，他们没有时间理他们的女儿。还有，李叶的妈妈好像一点也不喜欢李叶，她觉得李叶一点也不像她。李叶出生以后，她就告诉家里的阿姨:“如果你们想让我开心，就不要让我看到这个孩子。” 所以，李叶很少能见到她的爸爸妈妈。",
	},
	{
	  type: "paragraph",
	  paragraph: "李叶真的跟她的妈妈不一样，她看起来又瘦又小，还经常生病。她总是喜欢生气，生气的时候总是哭。如果李叶的妈妈听到她哭，就会很生气。所有的人都不喜欢这个孩子，他们从来没有见过这样的孩子。为了不让李叶哭，她的阿姨总是很听李叶的话。李叶喜欢什么，她的阿姨就给她什么。李叶觉得在这个家里只有她的阿姨关心她。",
	},
	{
	  type: "paragraph",
	  paragraph: "李叶还不到十岁的时候，有一天，她早上起来以后看到一个新的阿姨，又生气了，因为她想要以前的阿姨。阿姨告诉李叶:“她不会来了。” 李叶更生气了，她让这个新阿姨马上出去，让以前的阿姨马上来。可是很长时间，她的新阿姨没有回来，她以前的阿姨也没来。",
	},
	{
	  type: "paragraph",
	  paragraph: "那一天和平时不一样，没有人跟她说话，也没有人跟她玩。她很不开心，不知道为什么今天只有她一个人。一定出事了!",
	},
	{
	  type: "paragraph",
	  paragraph: "后来，她听到妈妈和别人说话，才知道真的出事了。她家里很多人都生病了，不到两天就死了很多人。李叶很难过，因为所有人都不理她。她一个人回到房间哭了一会儿，然后睡了很久。她起来的时候，还是没有人来看她。",
	},
	{
	  type: "paragraph",
	  paragraph: "“这儿有个孩子!” 后来，几个人发现了又瘦又小的李叶，她一个人在房间里。",
	},
	{
	  type: "paragraph",
	  paragraph: "“孩子，你是谁?为什么在这里?” 有个人问她。",
	},
	{
	  type: "paragraph",
	  paragraph: "“我叫李叶，我睡了很久。为什么我的阿姨不来?” 李叶问。",
	},
	{
	  type: "paragraph",
	  paragraph: "“孩子，他们都死了。”",
	},
	{
	  type: "paragraph",
	  paragraph: "后来李叶才知道，她的爸爸妈妈和以前的阿姨都死了，别人都走了。没有人想到这个孩子，因为他们不喜欢她，所以没有人关心她。",
	},
      ]
    }
  ]
}

// =========================================================
// All test data
// ---------------------------------------------------------

let _data = {

  mimihuayuan: {

    title:    _mimihuayuan_title,
    chapter1: _mimihuayuan_chapter1,

  },
}

// =========================================================
// Functions
// ---------------------------------------------------------

const getData = () => {
  return _data;
}

export default getData;

// =========================================================
// =========================================================

// fin.
