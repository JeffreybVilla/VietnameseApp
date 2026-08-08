const CHAT_PERSONAS = {
  everyday: [
    { name:'Xe Ôm Driver', icon:'🛵', opener:{v:'Anh/chị đi đâu?', e:'Where are you headed?'}, turns:[
      { youOptions:[
          {v:'Tôi đi chợ Bến Thành', e:"I'm going to Ben Thanh Market", correct:true},
          {v:'Tôi không biết', e:"I don't know", correct:false, tip:"Doesn't give the driver anything to work with — he needs a destination before he can quote a price."},
          {v:'Xe máy đẹp quá', e:'Nice bike!', correct:false, tip:"He's asking where you're headed, not for a compliment — off-topic here."},
        ], them:{v:'Ok, 50 nghìn nhé. Lên xe đi!', e:'Ok, 50k. Hop on!'} },
      { youOptions:[
          {v:'Được, cảm ơn anh', e:'Sounds good, thank you', correct:true},
          {v:'Đắt quá!', e:'Too expensive!', correct:false, tip:"Haggling over an already-fair short ride is a bit much — save bargaining for bigger purchases."},
          {v:'Tôi đi bộ vậy', e:"I'll just walk then", correct:false, tip:"Backing out right after he's quoted a fair price feels abrupt."},
        ], them:{v:'Ok, ngồi vững nhé!', e:'Ok, hold on tight!'} },
      { youOptions:[
          {v:'Anh chạy chậm chậm thôi nhé', e:'Please drive a bit slowly', correct:true},
          {v:'Nhanh lên!', e:'Faster!', correct:false, tip:"Rushing a xe ôm driver in traffic is genuinely unsafe — ask for a comfortable pace instead."},
          {v:'Tôi không sợ đâu', e:"I'm not scared", correct:false, tip:"Doesn't respond to anything he's said — reads as a non sequitur mid-ride."},
        ], them:{v:'Yên tâm đi, tôi chạy an toàn', e:'Relax, I drive safely'} },
      { youOptions:[
          {v:'Dừng ở đây được rồi, cảm ơn anh', e:'You can stop here, thank you', correct:true},
          {v:'Tôi đổi ý rồi', e:'I changed my mind', correct:false, tip:"Changing plans without naming a new destination just confuses the driver mid-ride."},
          {v:'Ok bye', e:'Ok bye', correct:false, tip:"A little too casual for ending a paid ride — a quick thank-you lands better."},
        ], them:{v:'Được rồi, 50 nghìn nhé. Cảm ơn bạn!', e:'Alright, 50k. Thanks!'} },
      { youOptions:[
          {v:'Dạ, đây tiền anh nè', e:"Here's the money", correct:true},
          {v:'Anh chờ tôi đi rút tiền nhé', e:'Wait here while I go withdraw cash', correct:false, tip:"Making a driver wait mid-street for you to find an ATM is inconsiderate — always carry small cash for xe ôm rides."},
          {v:'Tôi chuyển khoản được không?', e:'Can I bank transfer?', correct:false, tip:"Most xe ôm drivers expect cash on the spot — asking to transfer can slow things down and feels presumptuous."},
        ], them:{v:'Cảm ơn bạn, đi mạnh giỏi nhé!', e:'Thank you, take care!'} },
    ]},
    { name:'Neighbor (Cô Ba)', icon:'🏠', opener:{v:'Chào con, dạo này khỏe không?', e:'Hello dear, how have you been?'}, turns:[
      { youOptions:[
          {v:'Dạ, con khỏe, cảm ơn cô', e:"I'm well, thank you", correct:true},
          {v:'Con không biết cô là ai', e:"I don't know who you are", correct:false, tip:"She's a warm, familiar neighbor — pretending not to know her reads as oddly cold."},
          {v:'Cô hỏi làm gì vậy?', e:'Why are you asking?', correct:false, tip:"This is just a normal friendly greeting — treating it as suspicious feels off."},
        ], them:{v:'Vậy tốt rồi, ăn cơm chưa?', e:'Good — have you eaten yet?'} },
      { youOptions:[
          {v:'Dạ, con ăn rồi ạ', e:"Yes, I've eaten", correct:true},
          {v:'Con đi ngủ đây', e:"I'm going to sleep", correct:false, tip:"Doesn't answer her question and ends the chat rather abruptly."},
          {v:'Cô ăn cơm với con nhé', e:'Eat with me, auntie', correct:false, tip:"Sweet idea, but comes out of nowhere before you've even answered her question."},
        ], them:{v:'Rảnh thì ghé nhà cô chơi nhé', e:'Come visit when you have time'} },
      { youOptions:[
          {v:'Dạ, con sẽ ghé qua cuối tuần', e:"I'll stop by this weekend", correct:true},
          {v:'Con bận lắm, không đi được', e:"I'm too busy, can't go", correct:false, tip:"Flatly declining a kind invitation without any softening can feel cold here."},
          {v:'Nhà cô ở đâu vậy?', e:'Where do you live?', correct:false, tip:"A little strange to ask — as her neighbor, you'd normally already know."},
        ], them:{v:'Được đó, cô nấu chè đợi con', e:"Great, I'll make chè and wait for you"} },
      { youOptions:[
          {v:'Dạ, con cảm ơn cô nhiều lắm', e:'Thank you so much', correct:true},
          {v:'Thôi khỏi cô ơi', e:"Oh no, you don't have to", correct:false, tip:"Turning down her generosity outright can feel like refusing hospitality — accept warmly instead."},
          {v:'Chè gì vậy cô?', e:'What kind of chè?', correct:false, tip:"Not wrong exactly, but skips thanking her first — a little graceless before asking for details."},
        ], them:{v:'Không có gì đâu con, cô thương con mà', e:"It's nothing, dear — I care about you"} },
      { youOptions:[
          {v:'Con thấy mình may mắn có cô ở gần bên', e:"I feel lucky to have you nearby", correct:true},
          {v:'Thôi con về phòng đây', e:"I'm going back to my room now", correct:false, tip:"Cuts a warm moment short — a little more warmth back costs nothing here."},
          {v:'Cô nấu chè hoài không mệt à?', e:"Don't you get tired of always cooking chè?", correct:false, tip:"Comes across as questioning her generosity rather than appreciating it."},
        ], them:{v:'Con nói vậy cô vui lắm đó. Cuối tuần nhớ ghé nha!', e:"That makes me so happy to hear. Don't forget to stop by this weekend!"} },
    ]},
    { name:'Landlord', icon:'🔑', opener:{v:'Tiền nhà tháng này chưa đóng nhé.', e:"You haven't paid this month's rent yet."}, turns:[
      { youOptions:[
          {v:'Dạ, con đóng tiền hôm nay', e:"I'll pay today", correct:true},
          {v:'Con không có tiền', e:"I don't have money", correct:false, tip:"Giving a clear plan works much better than saying you have no money — landlords respond to specifics, not vague refusals."},
          {v:'Sao tháng nào cô cũng nhắc vậy', e:'Why do you remind me every month?', correct:false, tip:"Reads as confrontational — she has every right to remind you about rent."},
        ], them:{v:'Được, chuyển khoản cho cô nhé', e:'Okay, transfer it to me then'} },
      { youOptions:[
          {v:'Dạ, con chuyển ngay', e:"I'll transfer it right away", correct:true},
          {v:'Để mai con đóng', e:"I'll pay tomorrow", correct:false, tip:"Delaying without asking first can create friction — always confirm a new date is okay."},
          {v:'Số tài khoản của cô là gì?', e:"What's your account number?", correct:false, tip:"Reasonable, but she's likely already given this before — reads like you weren't listening."},
        ], them:{v:'Được rồi, cảm ơn con', e:'Alright, thank you'} },
      { youOptions:[
          {v:'Dạ, máy nước nóng phòng con bị hỏng ạ', e:'By the way, my water heater is broken', correct:true},
          {v:'Nhà cô nát quá', e:"Your place is falling apart", correct:false, tip:"Insulting the property to your landlord's face will sour things fast — report issues neutrally instead."},
          {v:'Thôi kệ đi', e:"Never mind, forget it", correct:false, tip:"Letting a real maintenance issue go unreported means it never gets fixed."},
        ], them:{v:'Ồ, để cô gọi thợ qua sửa nhé', e:"Oh, I'll call someone to fix it"} },
      { youOptions:[
          {v:'Dạ, con cảm ơn cô nhiều', e:'Thank you so much', correct:true},
          {v:'Bao giờ thợ tới vậy?', e:'When will the repairman come?', correct:false, tip:"Fair question, but jumping straight to logistics without a thank-you first feels transactional."},
          {v:'Cô nhớ gọi sớm nha', e:"Remember to call soon", correct:false, tip:"Comes across as instructing your landlord — better to simply thank her and let her handle timing."},
        ], them:{v:'Không có gì, con ở thoải mái nhé', e:'No problem, make yourself at home'} },
      { youOptions:[
          {v:'Dạ, cô cho con hỏi thợ tới khoảng mấy giờ để con sắp xếp ạ', e:'Could you let me know roughly what time the repairman will come so I can plan?', correct:true},
          {v:'Con phải đi làm, cô tự lo nhé', e:"I have to go to work, you handle it yourself", correct:false, tip:"Sounds like you're offloading the whole thing onto her — better to politely ask for timing so you can be there."},
          {v:'Thợ giỏi không cô?', e:'Is the repairman any good?', correct:false, tip:"A bit of an odd thing to question — better to focus on logistics like timing."},
        ], them:{v:'Chắc khoảng chiều mai, cô sẽ nhắn con trước', e:"Probably tomorrow afternoon, I'll message you beforehand"} },
    ]},
    { name:'Motorbike Mechanic', icon:'🔧', opener:{v:'Xe bạn bị sao vậy?', e:"What's wrong with your bike?"}, turns:[
      { youOptions:[
          {v:'Xe không nổ máy được', e:"It won't start", correct:true},
          {v:'Xe đẹp lắm', e:'The bike is beautiful', correct:false, tip:"Describe the problem, not the bike — that's what gets it fixed faster."},
          {v:'Tôi mới mua xe này', e:'I just bought this bike', correct:false, tip:"Interesting, but doesn't tell him what's actually wrong — he still can't diagnose anything."},
        ], them:{v:'Để tôi kiểm tra bugi nhé', e:'Let me check the spark plug'} },
      { youOptions:[
          {v:'Bao lâu thì xong?', e:'How long will it take?', correct:true},
          {v:'Tôi không quan tâm', e:"I don't care", correct:false, tip:"Comes across dismissive to someone about to spend time fixing your bike."},
          {v:'Bugi là gì vậy?', e:"What's a spark plug?", correct:false, tip:"Fair question, but pulls him away from working — better saved for after."},
        ], them:{v:'Khoảng 15 phút thôi', e:'About 15 minutes'} },
      { youOptions:[
          {v:'Sửa xong hết bao nhiêu tiền vậy anh?', e:'How much will the whole repair cost?', correct:true},
          {v:'Rẻ thôi nhé', e:'Keep it cheap', correct:false, tip:"Telling the mechanic what to charge before he's even quoted a price can come across pushy."},
          {v:'Tôi trả sau được không?', e:'Can I pay later?', correct:false, tip:"Asking to pay later before you even know the price, with no prior relationship, is a big ask."},
        ], them:{v:'Khoảng 100 nghìn thôi, rẻ mà', e:"Only about 100k, it's cheap"} },
      { youOptions:[
          {v:'Được, cảm ơn anh nhiều', e:'Great, thank you so much', correct:true},
          {v:'Đắt vậy?', e:"That expensive?", correct:false, tip:"100k for a spark plug fix is genuinely cheap here — pushing back reads as out of touch with local prices."},
          {v:'Anh sửa xe lâu chưa?', e:'Have you been a mechanic long?', correct:false, tip:"Friendly, but skips agreeing to the price — confirm first, chat after."},
        ], them:{v:'Xong rồi đó, chạy thử xem sao', e:'All done, try starting it up'} },
      { youOptions:[
          {v:'Nổ máy ngon rồi, cảm ơn anh nha', e:'It starts great now, thank you', correct:true},
          {v:'Vẫn nghe kỳ kỳ', e:'It still sounds kind of off', correct:false, tip:"If something genuinely still sounds wrong you should say so — but claiming this after it clearly runs fine wastes his time for no reason."},
          {v:'Thôi tôi đi luôn nha, khỏi chạy thử', e:"I'll just go, no need to test it", correct:false, tip:"Skipping the test-start he's offering means you might drive off with an unresolved problem."},
        ], them:{v:'Được rồi, đi cẩn thận nhé!', e:'Great, ride safe!'} },
    ]},
    { name:'Security Guard', icon:'🛡️', opener:{v:'Anh/chị ở phòng nào vậy?', e:'Which room are you staying in?'}, turns:[
      { youOptions:[
          {v:'Tôi ở phòng 302', e:"I'm in room 302", correct:true},
          {v:'Tôi không nhớ', e:"I don't remember", correct:false, tip:"Not remembering your own room number will likely prompt more questions, not fewer."},
          {v:'Sao chú cần biết?', e:'Why do you need to know?', correct:false, tip:"Building security checking who's coming in is routine, not intrusive — answering directly is easiest."},
        ], them:{v:'Dạ, mời anh/chị vào', e:'Okay, please go ahead'} },
      { youOptions:[
          {v:'Cảm ơn chú', e:'Thank you', correct:true},
          {v:'Sao chú hỏi nhiều vậy', e:'Why are you asking so much?', correct:false, tip:"Security asking your room number is normal protocol, not personal — a simple thanks keeps things friendly."},
          {v:'Chú làm ở đây lâu chưa?', e:'Have you worked here long?', correct:false, tip:"Friendly, but skips thanking him for letting you through — small courtesies go first."},
        ], them:{v:'Không có gì, chúc anh/chị một ngày tốt lành', e:'No problem, have a good day'} },
      { youOptions:[
          {v:'Chú ơi, thang máy bên này có hoạt động không ạ?', e:'Excuse me, is the elevator on this side working?', correct:true},
          {v:'Thang máy hỏng lâu chưa vậy?', e:'How long has the elevator been broken?', correct:false, tip:"Leads with a complaint tone rather than simply asking if it's working right now."},
          {v:'Tôi tự đi tìm được', e:"I'll find it myself", correct:false, tip:"He's right there to help — brushing off the offer can feel needlessly independent."},
        ], them:{v:'Dạ, thang máy bên trái đang sửa, anh/chị đi bên phải nhé', e:'The left elevator is under repair, please use the right one'} },
      { youOptions:[
          {v:'Dạ, cảm ơn chú đã chỉ', e:'Thank you for showing me', correct:true},
          {v:'Sao không sửa sớm hơn', e:"Why isn't it fixed already?", correct:false, tip:"Complaining about building maintenance to the guard, who doesn't control repair schedules, puts him on the spot unfairly."},
          {v:'Ừ', e:'Yeah', correct:false, tip:"A bit too curt for someone who just helped you — a proper cảm ơn is warmer."},
        ], them:{v:'Dạ không có gì ạ', e:"You're welcome"} },
      { youOptions:[
          {v:'Chú ơi, có ai đến tìm con thì chú gọi con giúp nha', e:'If anyone comes looking for me, could you call me please', correct:true},
          {v:'Tôi không muốn gặp ai hết', e:"I don't want to see anyone", correct:false, tip:"An odd, slightly hostile thing to volunteer to a guard who hasn't asked."},
          {v:'Chú nhớ mặt tôi chưa?', e:'Do you remember my face yet?', correct:false, tip:"An unusual question that puts him on the spot rather than making a simple, useful request."},
        ], them:{v:'Dạ được, chú sẽ gọi con liền', e:"Sure, I'll call you right away"} },
    ]},
    { name:'Ve Chai Collector', icon:'♻️', opener:{v:'Ai bán ve chai không?', e:'Anyone selling scrap/recyclables?'}, turns:[
      { youOptions:[
          {v:'Tôi có mấy cái lon với giấy cũ', e:'I have some cans and old paper', correct:true},
          {v:'Tôi không có gì bán', e:"I don't have anything to sell", correct:false, tip:"Fine if true — but if you do have items, this ends things before you've even checked."},
          {v:'Chị mua bao nhiêu một cân?', e:'How much per kilo?', correct:false, tip:"Jumps to price before saying what you actually have to sell."},
        ], them:{v:'Được, chị xem qua giúp em nhé', e:'Sure, let me take a look'} },
      { youOptions:[
          {v:'Được bao nhiêu tiền vậy chị?', e:'How much will this come to?', correct:true},
          {v:'Chị tính rẻ vậy sao', e:"You're pricing it that low?", correct:false, tip:"Assumes a low price before she's even weighed anything — a bit premature."},
          {v:'Thôi khỏi cũng được', e:"Never mind then", correct:false, tip:"Backing out mid-transaction after she's already started looking through your items feels abrupt."},
        ], them:{v:'Khoảng 20 nghìn thôi em', e:'About 20k'} },
      { youOptions:[
          {v:'Dạ được, cảm ơn chị', e:'Sounds good, thank you', correct:true},
          {v:'Ít vậy à', e:"That little?", correct:false, tip:"Scrap prices are genuinely low and fairly standard — not really negotiable like a market stall."},
          {v:'Chị lấy hết đồ trong nhà em luôn được không', e:'Can you take everything in my house?', correct:false, tip:"Funny thought, but derails the transaction — she buys what's offered, not everything you own."},
        ], them:{v:'Dạ, cảm ơn em nhiều', e:'Thank you so much'} },
      { youOptions:[
          {v:'Lần sau em gọi chị lại nha', e:"I'll call you again next time", correct:true},
          {v:'Chị đi đâu suốt vậy', e:'Where do you go all day?', correct:false, tip:"A bit personal for what's usually a quick, transactional exchange."},
          {v:'Ok bye', e:'Ok bye', correct:false, tip:"Fine in a pinch, but a warmer send-off matches the friendly tone she's shown you."},
        ], them:{v:'Dạ được, chị đi tiếp đây nhé', e:"Sure thing, I'll be on my way"} },
      { youOptions:[
          {v:'Chị có số điện thoại không, để lần sau em nhắn?', e:'Do you have a phone number so I can message you next time?', correct:true},
          {v:'Chị nhớ đường về nhà em không?', e:'Do you remember the way back to my house?', correct:false, tip:"Sounds oddly suspicious — better to just exchange contact info directly."},
          {v:'Thôi khỏi, chị tự ghé cũng được', e:"Never mind, just drop by whenever", correct:false, tip:"Vague and unhelpful — a phone number makes it much easier for both of you."},
        ], them:{v:'Dạ có nè em, lưu số chị đi', e:"Sure, here you go — save my number"} },
    ]},
    { name:'Barber', icon:'💈', opener:{v:'Cắt kiểu gì hôm nay anh?', e:'What style are we cutting today?'}, turns:[
      { youOptions:[
          {v:'Cắt ngắn gọn thôi anh', e:'Just a short, neat cut please', correct:true},
          {v:'Tuỳ anh luôn', e:'Whatever you think is best', correct:false, tip:"Can work, but for a first visit it's safer to give at least a general direction."},
          {v:'Tóc tôi dài quá', e:'My hair is too long', correct:false, tip:"States the obvious rather than answering what style you actually want."},
        ], them:{v:'Được, ngồi thoải mái nhé', e:'Sure, get comfortable'} },
      { youOptions:[
          {v:'Hai bên ngắn thôi, ở trên để dài chút', e:'Short on the sides, a bit longer on top', correct:true},
          {v:'Cắt sao cũng được', e:'Cut it however', correct:false, tip:"After he's asked for specifics, staying vague again means you might not get what you want."},
          {v:'Giống ca sĩ Sơn Tùng', e:"Like singer Sơn Tùng", correct:false, tip:"Referencing a specific celebrity can be an awkward ask for an exact match — describing the cut works better."},
        ], them:{v:'Ok, để tôi cắt thử nhé', e:'Okay, let me start cutting'} },
      { youOptions:[
          {v:'Vậy được rồi anh, đẹp lắm', e:'That looks great, thank you', correct:true},
          {v:'Ngắn quá rồi', e:"It's too short now", correct:false, tip:"If unhappy mid-cut, it's worth saying earlier and specifically — a vague complaint after it's done is hard to fix."},
          {v:'Anh cắt tóc lâu chưa?', e:'Have you been a barber long?', correct:false, tip:"Friendly, but skips reacting to the haircut he just showed you."},
        ], them:{v:'Cảm ơn anh, có gội đầu không?', e:'Thanks — want a shampoo too?'} },
      { youOptions:[
          {v:'Dạ có, cảm ơn anh', e:'Yes please, thank you', correct:true},
          {v:'Thôi khỏi, mất thời gian', e:"No thanks, takes too long", correct:false, tip:"A shampoo is usually quick and often included — declining like it's a burden feels abrupt."},
          {v:'Bao nhiêu tiền thêm vậy', e:'How much extra is that?', correct:false, tip:"Fair to ask, but leading with price before saying yes/no feels transactional for a small add-on."},
        ], them:{v:'Được, mời anh qua bên này', e:'Great, come this way'} },
      { youOptions:[
          {v:'Nước ấm vừa đủ, thoải mái lắm anh', e:'The water is just the right warmth, very relaxing', correct:true},
          {v:'Nước nóng quá', e:'The water is too hot', correct:false, tip:"If it's genuinely too hot you should say so plainly — but claiming discomfort with no real issue just confuses him."},
          {v:'Xong chưa vậy anh', e:'Are we done yet', correct:false, tip:"Sounds impatient during a relaxing shampoo service — let him finish at his pace."},
        ], them:{v:'Vậy là xong rồi đó, cảm ơn anh đã ghé', e:"All finished — thanks for coming in"} },
    ]},
    { name:'New Neighbor', icon:'🏢', opener:{v:'Chào bạn, mình mới chuyển đến tầng này', e:'Hi, I just moved to this floor'}, turns:[
      { youOptions:[
          {v:'Chào bạn, rất vui được làm quen', e:'Hello, nice to meet you', correct:true},
          {v:'Ừ', e:'Yeah', correct:false, tip:"A bit flat for meeting someone new — a proper greeting sets a friendlier tone."},
          {v:'Bạn ở phòng nào vậy?', e:'Which room are you in?', correct:false, tip:"Reasonable follow-up, but skips greeting them back first — comes across brusque."},
        ], them:{v:'Mình ở phòng 405, cạnh bạn đó', e:"I'm in 405, right next to you"} },
      { youOptions:[
          {v:'Ồ vậy à, có gì cần giúp cứ nói nhé', e:'Oh really, let me know if you need anything', correct:true},
          {v:'Chúc may mắn nha', e:'Good luck', correct:false, tip:"Reads as a farewell rather than a welcome — a bit premature this early."},
          {v:'Ở đây ồn lắm đó', e:"It's really noisy here", correct:false, tip:"Leading with a complaint about the building isn't the warmest welcome for a new neighbor."},
        ], them:{v:'Cảm ơn bạn nhiều, bạn ở đây lâu chưa?', e:'Thank you so much, how long have you lived here?'} },
      { youOptions:[
          {v:'Mình ở đây khoảng hai năm rồi', e:"I've been here about two years", correct:true},
          {v:'Lâu lắm rồi, không nhớ nữa', e:"A long time, I don't remember", correct:false, tip:"Comes across evasive for a simple, friendly question — a rough estimate is fine."},
          {v:'Sao bạn hỏi vậy?', e:'Why do you ask?', correct:false, tip:"A little defensive for small talk — she's just making conversation."},
        ], them:{v:'Vậy chắc bạn rành khu này lắm', e:'So you must know the area well'} },
      { youOptions:[
          {v:'Cũng khá rành, có gì bạn cứ hỏi mình', e:'Pretty well, feel free to ask me anything', correct:true},
          {v:'Không rành lắm đâu', e:"Not that well, actually", correct:false, tip:"Undersells your own local knowledge right after she hinted she'd like your advice — a small missed opportunity."},
          {v:'Mình bận lắm, không có thời gian đâu', e:"I'm too busy, no time", correct:false, tip:"Shuts down a friendly new-neighbor connection before it starts — even a brief offer to help goes a long way."},
        ], them:{v:'Cảm ơn bạn, chắc mình sẽ hỏi nhiều đó!', e:"Thanks, I'll probably ask a lot!"} },
      { youOptions:[
          {v:'Gần đây có quán ăn ngon, để mình chỉ cho', e:"There's a good place to eat nearby, let me show you", correct:true},
          {v:'Tự đi tìm đi, dễ lắm', e:'Just go find it yourself, it\'s easy', correct:false, tip:"After offering to help, brushing her off when she takes you up on it undercuts your own offer."},
          {v:'Mình toàn đặt đồ ăn thôi, không biết', e:"I always just order delivery, I wouldn't know", correct:false, tip:"Possible, but a weak follow-through right after claiming you knew the area well."},
        ], them:{v:'Hay quá, cuối tuần mình đi thử nha!', e:"Awesome, let's try it this weekend!"} },
    ]},
    { name:'Coffee Shop Regular', icon:'☕', opener:{v:'Ủa, hôm nay đến sớm vậy!', e:"Oh, you're here early today!"}, turns:[
      { youOptions:[
          {v:'Dạ, sáng nay con dậy sớm nên ghé luôn', e:'I woke up early this morning so I stopped by', correct:true},
          {v:'Không liên quan gì tới cô đâu', e:"That's none of your business", correct:false, tip:"Overly defensive for a friendly regular making harmless small talk."},
          {v:'Cô đoán coi', e:'You guess', correct:false, tip:"Playful in the right context, but comes off evasive for a simple, friendly observation."},
        ], them:{v:'Vậy hả, uống như mọi khi hen?', e:'I see — the usual, then?'} },
      { youOptions:[
          {v:'Dạ, như mọi khi cô ơi', e:'Yes please, the usual', correct:true},
          {v:'Con không nhớ con hay uống gì', e:"I don't remember what I usually order", correct:false, tip:"As a regular, this feels a little odd — even a rough answer works better than total blank."},
          {v:'Hôm nay đổi món khác đi', e:'Let\'s change it up today', correct:false, tip:"Fine as a choice, but then you should actually name a new drink — leaving it open makes her guess."},
        ], them:{v:'Được, cà phê sữa đá liền nha', e:'Coming right up — iced milk coffee'} },
      { youOptions:[
          {v:'Dạ, cảm ơn cô. Dạo này quán đông không?', e:'Thanks — has the shop been busy lately?', correct:true},
          {v:'Nhanh lên giùm con', e:'Hurry it up for me', correct:false, tip:"Rude to a shop owner who's known you long enough to remember your order."},
          {v:'Con không có thời gian nói chuyện', e:"I don't have time to talk", correct:false, tip:"Comes across cold when she's just being warm and familiar with a regular customer."},
        ], them:{v:'Đông lắm, nhất là buổi sáng', e:'Very busy, especially in the mornings'} },
      { youOptions:[
          {v:'Chắc quán ngon nên đông vậy đó cô', e:'Must be busy because the coffee is so good', correct:true},
          {v:'Đông quá chắc con hết ghé nữa', e:"Too crowded, guess I'll stop coming", correct:false, tip:"A discouraging thing to say to someone whose livelihood depends on customers — a compliment fits the moment better."},
          {v:'Cô nên thuê thêm người', e:'You should hire more staff', correct:false, tip:"Unsolicited business advice to someone who didn't ask — comes across presumptuous."},
        ], them:{v:'Cảm ơn con nói vậy, cô vui lắm!', e:"Thanks for saying that, it makes me happy!"} },
    ]},
    { name:'Lost Tourist Asking You', icon:'🗺️', opener:{v:'Xin lỗi, bạn biết đường tới Nhà Thờ Đức Bà không?', e:'Excuse me, do you know the way to Notre-Dame Cathedral?'}, turns:[
      { youOptions:[
          {v:'Biết chứ, đi thẳng rồi quẹo trái nhé', e:'Yes, go straight then turn left', correct:true},
          {v:'Tôi cũng không phải người ở đây', e:"I'm not from here either", correct:false, tip:"Fine if genuinely true, but only after you've tried to help — don't lead with a dead end."},
          {v:'Xa lắm, thôi đừng đi', e:"It's really far, just don't bother", correct:false, tip:"Discouraging a tourist from a major landmark instead of just giving directions isn't helpful."},
        ], them:{v:'Cảm ơn bạn! Đi bộ mất bao lâu vậy?', e:'Thank you! How long is the walk?'} },
      { youOptions:[
          {v:'Khoảng 15 phút thôi, gần lắm', e:"About 15 minutes, it's close", correct:true},
          {v:'Tôi không biết chính xác', e:"I don't know exactly", correct:false, tip:"A rough estimate is far more useful than admitting total uncertainty right after giving directions confidently."},
          {v:'Đi taxi cho lẹ', e:'Just take a taxi to be fast', correct:false, tip:"Unnecessary for a 15-minute walk — she asked about walking, not for alternative transport."},
        ], them:{v:'Tuyệt, vậy mình đi bộ luôn. Cảm ơn nhiều nha!', e:"Great, I'll just walk then. Thanks so much!"} },
      { youOptions:[
          {v:'Không có gì, chúc bạn đi chơi vui vẻ', e:'No problem, have a great time exploring', correct:true},
          {v:'Nhớ cẩn thận móc túi đó', e:'Watch out for pickpockets', correct:false, tip:"Not wrong to mention, but ending on a warning after such a friendly exchange sours the mood — better said earlier if truly needed."},
          {v:'Ok', e:'Ok', correct:false, tip:"A bit too curt to close out a warm, helpful exchange with a lost visitor."},
        ], them:{v:'Cảm ơn bạn, bạn tốt bụng quá!', e:"Thank you, you're so kind!"} },
      { youOptions:[
          {v:'Có gì cứ hỏi thêm người dân ở đây nhé, ai cũng thân thiện', e:'Feel free to ask other locals too, everyone here is friendly', correct:true},
          {v:'Đừng tin ai khác ngoài tôi', e:"Don't trust anyone else but me", correct:false, tip:"An odd, slightly unsettling thing to say to a stranger you just met on the street."},
          {v:'Thôi tôi phải đi rồi, tự lo nhé', e:"I have to go now, figure it out yourself", correct:false, tip:"Ends the exchange on an abrupt, unfriendly note after being helpful just a moment ago."},
        ], them:{v:'Dạ, cảm ơn bạn lần nữa. Tạm biệt!', e:'Thanks again. Goodbye!'} },
    ]},
  ],
  fnb: [
    { name:'Phở Vendor', icon:'🍜', opener:{v:'Anh/chị ăn gì?', e:'What would you like to eat?'}, turns:[
      { youOptions:[
          {v:'Cho tôi một tô phở bò', e:'One beef phở please', correct:true},
          {v:'Tôi không đói', e:"I'm not hungry", correct:false, tip:"You're sitting at a phở stall — this just confuses the vendor about why you're here."},
          {v:'Có bánh mì không?', e:'Do you have bánh mì?', correct:false, tip:"This is a phở stall, not a bánh mì cart — better to just order what she actually sells."},
        ], them:{v:'Dạ, chờ một chút nhé', e:'Okay, one moment'} },
      { youOptions:[
          {v:'Cho tôi thêm rau', e:'More herbs please', correct:true},
          {v:'Tôi muốn về nhà', e:'I want to go home', correct:false, tip:"A strange non sequitur while she's actively preparing your food."},
          {v:'Bao giờ xong vậy?', e:'When will it be ready?', correct:false, tip:"Rushing a vendor who just said 'one moment' comes across impatient."},
        ], them:{v:'Đây rồi, ăn ngon nhé!', e:'Here you go, enjoy!'} },
      { youOptions:[
          {v:'Cảm ơn chị, thơm quá!', e:'Thank you, it smells amazing!', correct:true},
          {v:'Sao lâu vậy', e:'Why did it take so long', correct:false, tip:"Complaining about wait time right as she hands you fresh food is poor timing."},
          {v:'Tôi ăn chay mà', e:"I'm vegetarian", correct:false, tip:"Too late to mention this now — you already ordered phở bò; bring dietary needs up before ordering."},
        ], them:{v:'Ăn ngon miệng nha em!', e:'Enjoy your meal!'} },
      { youOptions:[
          {v:'Chị ơi, tính tiền giúp em', e:'Check please', correct:true},
          {v:'Tôi ăn xong rồi, chị dọn giùm', e:'I finished, please clear this away', correct:false, tip:"Skips paying entirely — always settle the bill before anything else at a street stall."},
          {v:'Ngon quá, chị nấu lâu chưa?', e:'So good, how long have you been cooking?', correct:false, tip:"Friendly, but pay first — she's got other customers waiting too."},
        ], them:{v:'Dạ, 45 nghìn em nhé', e:"That's 45,000 dong"} },
      { youOptions:[
          {v:'Dạ, gửi chị tiền nè. Cảm ơn chị nhiều', e:"Here you go — thank you so much", correct:true},
          {v:'Đắt vậy chị?', e:'That expensive?', correct:false, tip:"45k for a full bowl of phở is a completely standard, fair price — pushing back here reads as out of touch."},
          {v:'Mai em ghé nữa', e:"I'll come back tomorrow", correct:false, tip:"A nice sentiment, but you still haven't actually paid — settle the bill first."},
        ], them:{v:'Dạ, cảm ơn em, mai ghé nữa nha!', e:'Thank you, come back tomorrow!'} },
    ]},
    { name:'Cafe Barista', icon:'☕', opener:{v:'Anh/chị uống gì ạ?', e:'What would you like to drink?'}, turns:[
      { youOptions:[
          {v:'Cho tôi cà phê sữa đá', e:'One iced milk coffee please', correct:true},
          {v:'Tôi không uống cà phê', e:"I don't drink coffee", correct:false, tip:"Fine if true, but then you should name something else the shop serves — leaving it blank stalls the order."},
          {v:'Gì cũng được', e:'Anything is fine', correct:false, tip:"A cafe usually has many options — giving at least a rough preference helps her serve you faster."},
        ], them:{v:'Ít đường hay nhiều đường?', e:'Less sugar or more sugar?'} },
      { youOptions:[
          {v:'Ít đường thôi', e:'Less sugar please', correct:true},
          {v:'Không biết', e:"I don't know", correct:false, tip:"An easy question to answer — even 'bình thường' (normal) works better than leaving it fully open."},
          {v:'Nhiều đá thôi', e:'Just lots of ice', correct:false, tip:"Doesn't actually answer her sugar question — answer what she asked first."},
        ], them:{v:'Dạ, có ngay ạ', e:'Coming right up'} },
      { youOptions:[
          {v:'Cảm ơn chị, ở đây có wifi không?', e:'Thanks — is there wifi here?', correct:true},
          {v:'Lẹ lên giùm nha', e:'Hurry it up please', correct:false, tip:"Sounds demanding for a normal drink order that hasn't even been long."},
          {v:'Chị pha cà phê ngon không?', e:'Are you good at making coffee?', correct:false, tip:"A slightly awkward, backhanded thing to ask right before she makes your drink."},
        ], them:{v:'Dạ có, mật khẩu ghi trên bàn nhé', e:'Yes, the password is written on the table'} },
      { youOptions:[
          {v:'Dạ, cảm ơn chị nhiều', e:'Thank you so much', correct:true},
          {v:'Mật khẩu khó nhớ quá', e:"That password is hard to remember", correct:false, tip:"An odd complaint about something she has no control over."},
          {v:'Chị đổi mật khẩu được không?', e:'Can you change the password?', correct:false, tip:"An unusual, slightly demanding request over something trivial."},
        ], them:{v:'Không có gì, cà phê của anh/chị đây', e:"No problem, here's your coffee"} },
      { youOptions:[
          {v:'Cảm ơn chị, ngon lắm!', e:"Thank you, it's delicious!", correct:true},
          {v:'Đá tan hết rồi', e:'The ice has all melted', correct:false, tip:"The drink just arrived — this complaint doesn't match the timing at all."},
          {v:'Tôi đổi ý, cho tôi trà thay vì cà phê', e:"I changed my mind, I want tea instead of coffee", correct:false, tip:"Asking for a swap after she's already made and served the drink wastes what she just prepared."},
        ], them:{v:'Dạ, cảm ơn anh/chị, chúc ngon miệng!', e:'Thank you, enjoy!'} },
    ]},
    { name:'Bánh Mì Cart', icon:'🥖', opener:{v:'Bánh mì gì đây? Thịt hay chay?', e:'What kind of bánh mì? Meat or vegetarian?'}, turns:[
      { youOptions:[
          {v:'Cho tôi bánh mì thịt', e:'Meat bánh mì please', correct:true},
          {v:'Tôi không đói', e:"I'm not hungry", correct:false, tip:"If you're not hungry, you likely wouldn't have stopped at the cart — this confuses the vendor mid-order."},
          {v:'Bánh mì là gì vậy?', e:"What is bánh mì?", correct:false, tip:"She's already asked which filling you want — this suggests you weren't listening."},
        ], them:{v:'Có cay không?', e:'Spicy or not?'} },
      { youOptions:[
          {v:'Không cay nhé', e:'Not spicy please', correct:true},
          {v:'Tôi không biết', e:"I don't know", correct:false, tip:"An easy yes/no question — worth just picking one so she can build your sandwich."},
          {v:'Cay cỡ nào cũng được', e:'Any spice level is fine', correct:false, tip:"Vague when a simple answer works — Southern chili can be intense, so it's worth being specific."},
        ], them:{v:'Đây bạn, 20 nghìn nhé', e:'Here you go, 20k'} },
      { youOptions:[
          {v:'Dạ, gửi cô tiền nè', e:"Here's the money", correct:true},
          {v:'Cho tôi thêm đồ chua', e:'Add more pickled veggies please', correct:false, tip:"She's already handed you the finished sandwich — asking for extras now means unwrapping it again."},
          {v:'Rẻ vậy cô?', e:'That cheap?', correct:false, tip:"20k is a completely normal street-cart price — questioning it just slows down the line behind you."},
        ], them:{v:'Cảm ơn con, ăn ngon nhé', e:'Thank you, enjoy!'} },
      { youOptions:[
          {v:'Dạ, cảm ơn cô. Mai con ghé nữa', e:"Thank you, I'll come back tomorrow", correct:true},
          {v:'Bánh mì hôm nay không ngon', e:"Today's bánh mì isn't good", correct:false, tip:"You haven't even taken a bite yet — an odd, premature complaint."},
          {v:'Cô bán ở đây bao lâu rồi?', e:'How long have you been selling here?', correct:false, tip:"A fine question in general, but there's a line forming — better to move along after paying."},
        ], them:{v:'Ừ, mai ghé cô làm cho', e:"Sure, come by tomorrow and I'll make you one"} },
      { youOptions:[
          {v:'Dạ, hẹn cô mai gặp lại', e:'See you tomorrow', correct:true},
          {v:'Chắc con quên mất', e:"I'll probably forget", correct:false, tip:"An unnecessarily discouraging way to end a friendly exchange with a vendor you plan to support again."},
          {v:'Cô nhớ để dành phần con nha', e:'Remember to save me a portion', correct:false, tip:"A slightly presumptuous ask for a street cart that sells to many people — a simple see-you-tomorrow is warmer."},
        ], them:{v:'Ừ, cô nhớ mà, mai gặp nha con!', e:'I\'ll remember, see you tomorrow!'} },
    ]},
    { name:'Bia Hơi Buddy', icon:'🍻', opener:{v:'Làm một ly không?', e:'Want a glass?'}, turns:[
      { youOptions:[
          {v:'Được, một ly thôi nhé', e:'Sure, just one', correct:true},
          {v:'Tôi không uống bia', e:"I don't drink beer", correct:false, tip:"Fine if true, but you can still politely decline while joining the table — flatly refusing can feel like rejecting the invite itself."},
          {v:'Cho tôi cả thùng luôn', e:'Give me the whole crate', correct:false, tip:"A bit much for a casual first round — pacing yourself is the norm at bia hơi tables."},
        ], them:{v:'Dzô! Một trăm phần trăm!', e:'Cheers! Bottoms up!'} },
      { youOptions:[
          {v:'Từ từ thôi, tôi uống ít thôi', e:"Slow down, I'll just drink a little", correct:true},
          {v:'Tôi say rồi', e:"I'm drunk", correct:false, tip:"After just one glass this seems exaggerated — pace yourself instead of dramatizing it."},
          {v:'Một trăm phần trăm nữa đi!', e:'Bottoms up again!', correct:false, tip:"Matching his full-send energy every round is a fast way to overdo it — it's fine to set your own pace."},
        ], them:{v:'Ok, tuỳ bạn thôi', e:'Ok, up to you'} },
      { youOptions:[
          {v:'Mồi gì ngon vậy anh?', e:"What's good to snack on here?", correct:true},
          {v:'Tôi không đói', e:"I'm not hungry", correct:false, tip:"Bia hơi culture usually pairs drinks with mồi (snacks) — showing zero interest feels a bit standoffish."},
          {v:'Anh uống nhiều chưa?', e:'Have you had a lot to drink already?', correct:false, tip:"A bit of an awkward, personal question to lead with at a casual table."},
        ], them:{v:'Có đậu phộng với khô mực, ngon lắm', e:'There\'s peanuts and dried squid, really good'} },
      { youOptions:[
          {v:'Vậy cho tôi thử một ít đi', e:"I'll try a bit of that then", correct:true},
          {v:'Nghe ghê quá, thôi khỏi', e:'Sounds gross, no thanks', correct:false, tip:"Dried squid is a beloved local bar snack — dismissing it outright can come across judgmental."},
          {v:'Tôi ăn chay', e:"I'm vegetarian", correct:false, tip:"Reasonable if true, but better mentioned before he describes the snacks in detail, not right after."},
        ], them:{v:'Đây, ăn thử đi, ngon mà!', e:"Here, try it, it's good!"} },
      { youOptions:[
          {v:'Ngon thiệt đó anh, cảm ơn nha', e:'It really is good, thanks', correct:true},
          {v:'Bình thường thôi', e:"It's just okay", correct:false, tip:"A lukewarm reaction to something he proudly recommended can feel a little deflating."},
          {v:'Thôi tôi về đây', e:"I'm heading home now", correct:false, tip:"Leaving abruptly right after he shared food with you skips a proper, warm goodbye."},
        ], them:{v:'Vui ghê, lần sau nhậu tiếp nha!', e:"This was fun, let's drink again next time!"} },
    ]},
    { name:'Ốc Alley Waiter', icon:'🦪', opener:{v:'Anh chị ăn ốc gì? Ốc hương, ốc len, hay nghêu hấp?', e:'What kind of snails would you like — ốc hương, ốc len, or steamed clams?'}, turns:[
      { youOptions:[
          {v:'Cho tôi ốc hương xào bơ tỏi', e:'One garlic butter ốc hương please', correct:true},
          {v:'Tôi không biết mấy món này', e:"I don't know any of these dishes", correct:false, tip:"Fair to be unfamiliar, but ask him to recommend one rather than leaving the order completely open at a busy alley stall."},
          {v:'Cho tôi hết luôn các món', e:'Give me all of them', correct:false, tip:"Ordering the entire menu at once is excessive for one person — better to start with one or two dishes."},
        ], them:{v:'Dạ được, còn uống gì không anh/chị?', e:'Got it — anything to drink?'} },
      { youOptions:[
          {v:'Cho tôi một chai bia Sài Gòn', e:'One bottle of Saigon beer please', correct:true},
          {v:'Tôi không uống gì hết', e:"I don't want anything to drink", correct:false, tip:"Fine if true, but ốc alleys usually expect a drink order alongside food — worth at least considering water or soda."},
          {v:'Anh chọn giùm tôi đi', e:'You pick for me', correct:false, tip:"A little unusual to hand over your drink choice entirely to the waiter without any preference at all."},
        ], them:{v:'Dạ có ngay. Ốc nóng ăn liền cho ngon nha!', e:'Coming right up. Eat the snails hot for the best flavor!'} },
      { youOptions:[
          {v:'Dạ, cảm ơn anh, để tôi ăn thử liền', e:"Thanks, I'll dig in right away", correct:true},
          {v:'Để nguội rồi ăn cho chắc', e:"I'll let it cool down first to be safe", correct:false, tip:"He just told you they taste best hot — waiting defeats the whole point of his advice."},
          {v:'Ốc này ăn bằng tay hay đũa vậy?', e:'Do I eat these with my hands or chopsticks?', correct:false, tip:"A fair question, but better asked before the food arrives hot and ready — don't let it get cold while you figure out utensils."},
        ], them:{v:'Ngon không anh/chị?', e:'Is it good?'} },
      { youOptions:[
          {v:'Ngon lắm, đậm đà quá!', e:'Really good, so flavorful!', correct:true},
          {v:'Hơi mặn', e:'A bit too salty', correct:false, tip:"If genuinely too salty it's fine to mention gently, but doing it right as he's checking in with pride in his dish can feel harsh without softening it first."},
          {v:'Cũng được', e:"It's okay I guess", correct:false, tip:"A lukewarm answer that undersells a dish he's clearly proud of — a warmer response fits the moment better."},
        ], them:{v:'Ăn thêm món khác không? Nghêu hấp sả cũng ngon lắm', e:'Want to try another dish? The lemongrass steamed clams are great too'} },
      { youOptions:[
          {v:'Dạ được, cho tôi thêm một phần nghêu hấp', e:'Sure, one order of steamed clams please', correct:true},
          {v:'Thôi, no rồi', e:"No thanks, I'm full", correct:false, tip:"A fine choice if genuinely full, but this ends the recommendation exchange rather than continuing it — the scene works best when you say yes to keep exploring the menu with him."},
          {v:'Nghêu là con gì vậy anh?', e:'What kind of creature is nghêu?', correct:false, tip:"A reasonable question elsewhere, but he's mid-recommendation of a specific dish — better to just say yes or no first."},
        ], them:{v:'Dạ có liền, ăn thêm cho đã miệng nha!', e:'Coming right up, enjoy some more!'} },
    ]},
    { name:'Buffet Host', icon:'🍽️', opener:{v:'Chào anh/chị, buffet hôm nay 250 nghìn một người, ăn thoải mái nhé', e:'Welcome — the buffet today is 250k per person, all you can eat'}, turns:[
      { youOptions:[
          {v:'Dạ được, cho tôi hai suất', e:'Sounds good, two portions please', correct:true},
          {v:'Đắt quá, giảm giá được không?', e:'Too expensive, can you give a discount?', correct:false, tip:"Buffet prices are usually fixed, unlike market stalls — bargaining here doesn't really apply."},
          {v:'Tôi ăn ít thôi, giảm giá được không', e:'I eat very little, can I get a discount?', correct:false, tip:"Buffets are priced flat regardless of appetite — this request doesn't really fit how they work."},
        ], them:{v:'Dạ, mời anh/chị theo tôi ra bàn', e:'Please follow me to your table'} },
      { youOptions:[
          {v:'Dạ cảm ơn, đồ ăn để ở đâu vậy anh?', e:'Thank you — where is the food set up?', correct:true},
          {v:'Bàn xa quá', e:"The table is too far", correct:false, tip:"A minor complaint about seating right after being seated feels a bit fussy for a casual buffet."},
          {v:'Tôi tự tìm được', e:"I'll find it myself", correct:false, tip:"He's actively guiding you — brushing off his help isn't necessary."},
        ], them:{v:'Khu hải sản bên trái, khu nướng bên phải nhé', e:'Seafood is on the left, the grill station is on the right'} },
      { youOptions:[
          {v:'Dạ, cảm ơn anh nhiều', e:'Thank you so much', correct:true},
          {v:'Sao ít món vậy?', e:'Why so few dishes?', correct:false, tip:"A complaint before you've even seen the full spread — better to look around first."},
          {v:'Chỉ vậy thôi hả?', e:'Is that all?', correct:false, tip:"Comes across dismissive before you've explored what's actually offered."},
        ], them:{v:'Dạ, ăn thoải mái, đừng lấy dư bỏ phí nha', e:"Enjoy — just please don't take more than you'll eat"} },
      { youOptions:[
          {v:'Dạ, con hiểu rồi, lấy vừa đủ thôi', e:"Got it, I'll just take what I'll eat", correct:true},
          {v:'Con trả tiền rồi, muốn lấy bao nhiêu cũng được', e:"I paid already, I can take as much as I want", correct:false, tip:"Most Vietnamese buffets fine you for wasted food — treating it as unlimited without limits risks a real penalty."},
          {v:'Ai mà bỏ phí đồ ăn chi', e:'Who would even waste food anyway', correct:false, tip:"A slightly dismissive response to a completely reasonable house rule he's just trying to explain."},
        ], them:{v:'Dạ, đúng rồi đó. Chúc anh/chị ăn ngon miệng!', e:'Exactly. Enjoy your meal!'} },
      { youOptions:[
          {v:'Cảm ơn anh, đồ ăn ở đây ngon thiệt', e:'Thanks, the food here is really good', correct:true},
          {v:'Bình thường thôi', e:"It's just average", correct:false, tip:"A lukewarm comment to the host of the place you're currently eating at and enjoying — a genuine compliment costs nothing."},
          {v:'Lần sau chắc không ghé nữa', e:"I probably won't come back next time", correct:false, tip:"An oddly negative closing note with no real reason given — better to end warmly if you enjoyed it."},
        ], them:{v:'Dạ, cảm ơn anh/chị, hẹn gặp lại nhé!', e:'Thank you, hope to see you again!'} },
    ]},
  ],
  dating: [
    { name:'Local Friend (Linh)', icon:'👩', opener:{v:'Tối nay rảnh không? Đi ăn phở cùng đi!', e:"Free tonight? Let's get phở together!"}, turns:[
      { youOptions:[
          {v:'Rảnh! Mấy giờ gặp nhau?', e:'Free! What time shall we meet?', correct:true},
          {v:'Xin lỗi, tôi bận', e:"Sorry, I'm busy", correct:false, tip:"Fine if genuinely true, but if you actually want to go, asking for the time is a much better opener."},
          {v:'Phở hả, tôi ăn hoài rồi', e:"Phở again? I've had it so many times", correct:false, tip:"Sounds like you're already complaining about her suggestion before even agreeing to go."},
        ], them:{v:'Bảy giờ tối nhé, ở quán quen', e:'7pm, at our usual spot'} },
      { youOptions:[
          {v:'Được, hẹn gặp lại', e:'Sounds good, see you then', correct:true},
          {v:'Tôi không muốn đi', e:"I don't want to go", correct:false, tip:"You just confirmed you were free — backing out immediately after sends mixed signals."},
          {v:'Quán quen là quán nào?', e:'Which usual spot?', correct:false, tip:"If you two have a regular spot, asking this suggests you weren't really paying attention."},
        ], them:{v:'Hẹn gặp lại nha!', e:'See you then!'} },
      { youOptions:[
          {v:'Tối nay ăn phở xong đi dạo luôn nha?', e:'After phở tonight, want to go for a walk too?', correct:true},
          {v:'Ăn xong về liền nha, tôi không có thời gian', e:"Let's just eat and leave right after, I don't have time", correct:false, tip:"A bit cold for someone you're clearly comfortable enough with to grab food regularly."},
          {v:'Bữa nay tôi trả tiền cho bạn luôn được không', e:'Can I pay for you today?', correct:false, tip:"Sweet gesture, but jumping straight to this before even meeting up feels premature — better said in person."},
        ], them:{v:'Ừ được đó, lâu rồi mình chưa đi dạo', e:"Sure, we haven't gone for a walk in a while"} },
      { youOptions:[
          {v:'Vậy hẹn bảy giờ nha, gặp lại sau', e:'Alright, see you at 7 then', correct:true},
          {v:'Thôi đổi ý rồi, không đi dạo nữa', e:"Actually never mind, let's not walk after all", correct:false, tip:"Backing out right after she agreed to your own suggestion is a bit flaky."},
          {v:'Ok', e:'Ok', correct:false, tip:"A little too flat to close out a warm exchange with a good friend."},
        ], them:{v:'Ừ, tối gặp nha!', e:'Okay, see you tonight!'} },
    ]},
    { name:'Coffee Date', icon:'💕', opener:{v:'Bạn thích uống gì?', e:'What do you like to drink?'}, turns:[
      { youOptions:[
          {v:'Cho tôi cà phê sữa đá, cảm ơn', e:'Iced milk coffee for me, thanks', correct:true},
          {v:'Tôi không biết bạn là ai', e:"I don't know who you are", correct:false, tip:"An odd thing to say on a date you agreed to — answer the drink question instead."},
          {v:'Bạn chọn giùm tôi đi', e:'You choose for me', correct:false, tip:"Fine occasionally, but on a first date, showing a little of your own personality (even in a drink order) helps conversation flow."},
        ], them:{v:'Bạn dễ thương quá', e:"You're so charming"} },
      { youOptions:[
          {v:'Cảm ơn, bạn cũng vậy', e:'Thanks, you too', correct:true},
          {v:'Tôi phải đi rồi', e:'I have to go now', correct:false, tip:"Leaving abruptly right after a compliment reads as a rejection, even if that's not what you meant."},
          {v:'Thật hả?', e:'Really?', correct:false, tip:"Not wrong, but a little flat — reflecting the compliment back is warmer."},
        ], them:{v:'Lần sau đi chơi tiếp nhé', e:"Let's hang out again next time"} },
      { youOptions:[
          {v:'Được chứ, tôi cũng muốn gặp lại bạn', e:"Sure, I'd like to see you again too", correct:true},
          {v:'Để tôi coi lịch đã', e:'Let me check my schedule first', correct:false, tip:"Reasonable in general, but right after such a warm compliment, this feels noncommittal."},
          {v:'Chắc không rảnh đâu', e:"Probably won't be free", correct:false, tip:"A discouraging response after she just expressed interest in seeing you again."},
        ], them:{v:'Vậy cuối tuần này được không?', e:'How about this weekend?'} },
      { youOptions:[
          {v:'Được đó, cuối tuần mình đi xem phim nha', e:"Sounds great, let's watch a movie this weekend", correct:true},
          {v:'Cuối tuần tôi bận lắm', e:"I'm really busy this weekend", correct:false, tip:"After agreeing you wanted to see her again, immediately declining a specific plan sends mixed signals."},
          {v:'Tuỳ bạn thôi', e:'Whatever you want', correct:false, tip:"A bit passive for a second date — offering an actual idea keeps things engaging."},
        ], them:{v:'Nghe hay đó, mình hẹn nhau sau nha!', e:"Sounds fun, let's plan the details later!"} },
    ]},
    { name:'Group Hangout Invite', icon:'👯', opener:{v:'Cuối tuần này nhóm mình đi Đà Lạt, đi không?', e:'Our group is going to Da Lat this weekend, want to come?'}, turns:[
      { youOptions:[
          {v:'Nghe hay đó, cho tôi đi với!', e:'Sounds fun, count me in!', correct:true},
          {v:'Đà Lạt ở đâu?', e:"Where's Da Lat?", correct:false, tip:"A reasonable question, but jumping to logistics before even saying you're interested feels backwards."},
          {v:'Đi xa vậy chi cho mệt', e:"Why go somewhere so far, so tiring", correct:false, tip:"A discouraging response to a fun group invite — better to express interest first even if you have questions."},
        ], them:{v:'Tuyệt! Mình sẽ gửi lịch trình sau', e:"Great! I'll send the itinerary later"} },
      { youOptions:[
          {v:'Cảm ơn đã rủ nhé', e:'Thanks for inviting me', correct:true},
          {v:'Chắc tôi không đi đâu', e:"I probably won't go", correct:false, tip:"You just said you were in — reversing immediately after feels inconsistent."},
          {v:'Ai đi chung vậy?', e:'Who else is going?', correct:false, tip:"Reasonable curiosity, but asking this instead of thanking her for the invite feels a bit calculating."},
        ], them:{v:'Không có gì, vui lắm đó!', e:"No problem, it'll be fun!"} },
      { youOptions:[
          {v:'Mình cần chuẩn bị gì không?', e:'Is there anything I should prepare?', correct:true},
          {v:'Tôi không mang gì hết', e:"I'm not bringing anything", correct:false, tip:"A trip like this usually needs some prep (warm clothes for Đà Lạt's cool weather) — worth asking rather than assuming."},
          {v:'Ai lo hết mọi thứ vậy?', e:'Who is handling everything?', correct:false, tip:"Sounds like you're trying to avoid contributing rather than pitching in for a group trip."},
        ], them:{v:'Mang áo ấm nha, Đà Lạt lạnh lắm', e:'Bring a warm jacket, Da Lat gets cold'} },
      { youOptions:[
          {v:'Ok, cảm ơn đã nhắc. Háo hức quá!', e:'Got it, thanks for the heads up. So excited!', correct:true},
          {v:'Lạnh vậy chắc tôi không đi nữa', e:"That cold? I might not go anymore", correct:false, tip:"Backing out over cool weather after already committing feels flaky to the group."},
          {v:'Tôi có áo ấm rồi khỏi lo', e:"I already have warm clothes, no need to worry", correct:false, tip:"Not wrong, but skips any enthusiasm for the trip — a little excitement matches the group's energy better."},
        ], them:{v:'Đi thôi, chắc chắn sẽ vui lắm!', e:"Let's go, it's going to be so much fun!"} },
    ]},
    { name:'Meeting the Parents', icon:'🙏', opener:{v:'Con chào hai bác ạ.', e:'Hello, nice to meet you both.'}, turns:[
      { youOptions:[
          {v:'Con là bạn của Linh ạ', e:"I'm Linh's friend", correct:true},
          {v:'Tôi không biết nói gì', e:"I don't know what to say", correct:false, tip:"A simple self-introduction goes a long way — Vietnamese parents appreciate directness and politeness together."},
          {v:'Chào', e:'Hi', correct:false, tip:"Too casual and bare for meeting your partner's parents for the first time — a fuller introduction shows respect."},
        ], them:{v:'À, con ngồi chơi đi', e:'Ah, please sit down'} },
      { youOptions:[
          {v:'Dạ, con cảm ơn ạ', e:'Thank you', correct:true},
          {v:'Tôi phải về rồi', e:'I have to go now', correct:false, tip:"Leaving right after being invited to sit is a jarring, disrespectful start to meeting the parents."},
          {v:'Nhà đẹp quá bác', e:'Your home is lovely', correct:false, tip:"A nice compliment, but skips accepting their invitation to sit first."},
        ], them:{v:'Ở lại ăn cơm với gia đình nhé', e:'Stay and eat with the family'} },
      { youOptions:[
          {v:'Dạ, con cảm ơn hai bác đã mời ạ', e:'Thank you so much for inviting me', correct:true},
          {v:'Con ăn ở nhà rồi ạ', e:"I already ate at home", correct:false, tip:"Declining a meal invitation from your partner's parents, especially the first time, can feel like rejecting their hospitality."},
          {v:'Con ăn chay, chắc không ăn được gì đâu', e:"I'm vegetarian, I probably can't eat anything", correct:false, tip:"A fair thing to mention, but better said warmly and earlier, not as a reason to decline the whole invitation."},
        ], them:{v:'Con thích ăn món gì, để bác chuẩn bị', e:'What do you like to eat? Let me prepare it'} },
      { youOptions:[
          {v:'Dạ, con ăn gì cũng được, bác đừng bận tâm ạ', e:"I'll eat anything, please don't trouble yourself", correct:true},
          {v:'Con kén ăn lắm bác ơi', e:"I'm a very picky eater", correct:false, tip:"Not the best first impression to give your partner's mother — better to be accommodating for a first visit."},
          {v:'Bác nấu gì con cũng chê hết á', e:"Whatever you cook, I'll probably criticize it", correct:false, tip:"Clearly a joke gone wrong here — this reads as genuinely rude to a parent trying to welcome you."},
        ], them:{v:'Con ngoan quá, Linh có phước lắm mới quen được con', e:"You're so sweet — Linh is lucky to have met you"} },
      { youOptions:[
          {v:'Dạ, con mới là người may mắn ạ', e:"I'm actually the lucky one", correct:true},
          {v:'Dạ đúng rồi ạ', e:"Yes, that's right", correct:false, tip:"Agreeing too readily that you're the better catch can come across a bit self-satisfied in front of her parents."},
          {v:'Con cũng nghĩ vậy á bác', e:'I think so too, auntie/uncle', correct:false, tip:"Same issue — sounds like you're agreeing you're the prize, rather than humbly deflecting the compliment."},
        ], them:{v:'Hai đứa cứ vậy mà thương nhau lâu dài nhé', e:"You two just keep loving each other like this for a long time"} },
    ]},
    { name:'Zalo Match', icon:'📱', opener:{v:'Chào bạn, mình thấy hồ sơ của bạn hay quá, làm quen được không?', e:'Hi, I saw your profile and thought it was interesting — can we chat?'}, turns:[
      { youOptions:[
          {v:'Chào bạn, được chứ! Bạn ở đâu vậy?', e:'Hi, sure! Where are you from?', correct:true},
          {v:'Bạn là ai vậy?', e:'Who are you?', correct:false, tip:"He already introduced himself and his intent — this sounds unnecessarily standoffish for a friendly opener."},
          {v:'Mình không quen người lạ trên mạng', e:"I don't talk to strangers online", correct:false, tip:"Fair caution in general, but if you're on the app and matched with him, flatly refusing to chat at all defeats the purpose."},
        ], them:{v:'Mình ở Quận 3, còn bạn?', e:"I'm in District 3, what about you?"} },
      { youOptions:[
          {v:'Mình ở Quận 1, gần đây thôi', e:"I'm in District 1, pretty close by", correct:true},
          {v:'Mình không muốn nói địa chỉ', e:"I don't want to share my address", correct:false, tip:"He asked about your general district, not your home address — a district name is normal, safe info to share."},
          {v:'Xa lắm, chắc không hợp đâu', e:"Really far, probably won't work out", correct:false, tip:"Discouraging a conversation before it's even begun over district distance in the same city is premature."},
        ], them:{v:'Gần vậy à, hay là mình gặp nhau uống cà phê?', e:"That's close — how about we meet for coffee?"} },
      { youOptions:[
          {v:'Được đó, nhưng mình muốn gặp ở chỗ đông người nha', e:"Sounds good, but let's meet somewhere public please", correct:true},
          {v:'Ok, qua nhà mình luôn đi', e:'Sure, just come over to my place', correct:false, tip:"Inviting someone you've never met in person straight to your home is a real safety risk — public first meetings are the smart norm."},
          {v:'Gấp gáp quá, mình chưa sẵn sàng', e:"That's too fast, I'm not ready", correct:false, tip:"A public coffee meetup is a completely normal, low-pressure next step — this reaction seems overly hesitant without reason."},
        ], them:{v:'Ừ đúng rồi, vậy hẹn quán cà phê ở Quận 1 nha', e:"Good call, let's meet at a cafe in District 1 then"} },
      { youOptions:[
          {v:'Được, mình sẽ gửi bạn địa chỉ cụ thể sau nha', e:"Great, I'll send you the exact address later", correct:true},
          {v:'Bạn tự tìm quán đi', e:'You find the place yourself', correct:false, tip:"A bit dismissive after he's been engaged and considerate — some shared planning keeps the conversation warm."},
          {v:'Chắc mình huỷ hẹn đó', e:'I might cancel actually', correct:false, tip:"An oddly discouraging thing to say right after agreeing on a plan together."},
        ], them:{v:'Ok, mình mong được gặp bạn!', e:'Okay, looking forward to meeting you!'} },
      { youOptions:[
          {v:'Mình cũng vậy, hẹn gặp cuối tuần này nha', e:'Me too, see you this weekend', correct:true},
          {v:'Chắc mình không có thời gian đâu', e:"I probably won't have time", correct:false, tip:"Backing away right after confirming a meetup plan is confusing for the other person."},
          {v:'Ừ', e:'Yeah', correct:false, tip:"A bit too flat to close out an otherwise warm and thoughtful exchange."},
        ], them:{v:'Tuyệt, hẹn gặp bạn nha!', e:'Great, see you then!'} },
    ]},
    { name:'Awkward Blind Date', icon:'😅', opener:{v:'Xin lỗi mình tới trễ, kẹt xe quá!', e:"Sorry I'm late, traffic was terrible!"}, turns:[
      { youOptions:[
          {v:'Không sao đâu, mình mới tới thôi', e:"No worries, I just got here myself", correct:true},
          {v:'Trễ 20 phút luôn đó', e:"You're 20 minutes late", correct:false, tip:"Pointing out exactly how late she was right off the bat sets a tense tone for a first date."},
          {v:'Kẹt xe hoài, lần sau đi sớm hơn nha', e:'Traffic is always bad, leave earlier next time', correct:false, tip:"Comes across a bit lecture-y for a first meeting — a warm, easygoing response works much better."},
        ], them:{v:'Cảm ơn bạn thông cảm. Bạn gọi món chưa?', e:'Thanks for understanding. Have you ordered yet?'} },
      { youOptions:[
          {v:'Chưa, đợi bạn tới rồi gọi chung', e:'Not yet, I waited so we could order together', correct:true},
          {v:'Gọi rồi, mình đói quá không đợi được', e:"Already ordered, I was too hungry to wait", correct:false, tip:"Ordering without waiting for your date can feel inconsiderate on a first meeting."},
          {v:'Mình không đói lắm', e:"I'm not very hungry", correct:false, tip:"Doesn't really answer whether you've ordered — feels evasive."},
        ], them:{v:'Bạn chu đáo quá. Vậy gọi món gì đây?', e:"That's so thoughtful. What should we order then?"} },
      { youOptions:[
          {v:'Bạn thích ăn gì thì gọi đi, mình ăn được hết', e:'Order whatever you like, I can eat anything', correct:true},
          {v:'Mình kén ăn lắm, để mình gọi', e:"I'm a picky eater, let me order", correct:false, tip:"A bit of an awkward, self-centered note to strike early in a first date."},
          {v:'Đồ ở đây chắc dở lắm', e:'The food here is probably bad', correct:false, tip:"Needlessly negative about the place you're both sitting in — not a great first-date vibe."},
        ], them:{v:'Vậy mình gọi lẩu nha, ăn chung cho vui', e:"Let's get hotpot then, it's more fun to share"} },
      { youOptions:[
          {v:'Hay đó, mình thích lẩu lắm', e:'Great idea, I love hotpot', correct:true},
          {v:'Lẩu nóng lắm, thôi khỏi', e:"Hotpot is too hot, let's not", correct:false, tip:"Shoots down her idea outright without offering any alternative — a little discouraging for the mood."},
          {v:'Tuỳ bạn, mình không có ý kiến gì', e:'Up to you, I have no opinion', correct:false, tip:"A little passive — showing genuine enthusiasm for her suggestion builds better rapport."},
        ], them:{v:'Vậy là xong, chờ món tới thôi nha!', e:"Great, all set — let's just wait for the food!"} },
      { youOptions:[
          {v:'Trong lúc chờ, kể mình nghe về công việc của bạn đi', e:'While we wait, tell me about your work', correct:true},
          {v:'Trong lúc chờ mình chơi điện thoại nha', e:"I'll just be on my phone while we wait", correct:false, tip:"Being on your phone instead of talking defeats the whole purpose of a date."},
          {v:'Chờ lâu quá, chán ghê', e:'This wait is so long, so boring', correct:false, tip:"Complaining about boredom on a date isn't exactly flattering to your company."},
        ], them:{v:'Mình làm thiết kế, còn bạn thì sao?', e:"I'm a designer — what about you?"} },
    ]},
  ],
  travel: [
    { name:'Grab Driver', icon:'🚗', opener:{v:'Bạn đang đứng ở đâu vậy?', e:'Where are you standing?'}, turns:[
      { youOptions:[
          {v:'Tôi đứng ở cổng chính', e:"I'm at the main gate", correct:true},
          {v:'Tôi không biết ở đâu', e:"I don't know where I am", correct:false, tip:"Without a landmark, the driver has nothing to navigate to — try to name something nearby."},
          {v:'Bạn tự tìm tôi đi', e:'You find me yourself', correct:false, tip:"Puts all the work on the driver — a specific landmark is much faster for both of you."},
        ], them:{v:'Ok, tôi tới trong 2 phút', e:"Ok, I'll be there in 2 minutes"} },
      { youOptions:[
          {v:'Cảm ơn, tôi đợi ở đây', e:"Thanks, I'll wait here", correct:true},
          {v:'Tôi huỷ chuyến', e:"I'm cancelling", correct:false, tip:"He's already on his way — cancelling now after confirming your location wastes his trip."},
          {v:'Nhanh lên nha', e:'Hurry up', correct:false, tip:"He just gave a reasonable 2-minute ETA — pushing him to rush isn't necessary or safe."},
        ], them:{v:'Tới nơi rồi bạn nhé!', e:"I've arrived!"} },
      { youOptions:[
          {v:'Dạ, tôi ra liền, cảm ơn anh', e:"I'm coming out now, thank you", correct:true},
          {v:'Đợi tôi thêm chút', e:'Wait a bit longer for me', correct:false, tip:"You confirmed you'd wait right at the gate — making him wait further after he's arrived is inconsiderate, especially with other riders waiting."},
          {v:'Xe màu gì vậy anh?', e:'What color is the car?', correct:false, tip:"The app already shows the car details — asking again suggests you didn't check."},
        ], them:{v:'Ok, tôi đậu ngay cổng nhé', e:"Okay, I'm parked right at the gate"} },
      { youOptions:[
          {v:'Anh ơi, cho tôi đến sân bay Tân Sơn Nhất nhé', e:'Please take me to Tan Son Nhat airport', correct:true},
          {v:'Chở tôi đi đâu cũng được', e:'Take me anywhere', correct:false, tip:"The destination should already be set in the app, but confirming it verbally avoids mix-ups — leaving it open invites confusion."},
          {v:'Tôi chưa quyết định đi đâu', e:"I haven't decided where to go yet", correct:false, tip:"You should already have a destination set before booking a ride — figuring it out now wastes his time."},
        ], them:{v:'Dạ được, khoảng 30 phút là tới', e:"Sure, about 30 minutes to get there"} },
      { youOptions:[
          {v:'Dạ, cảm ơn anh nhiều', e:'Thank you so much', correct:true},
          {v:'30 phút lâu quá', e:"30 minutes is too long", correct:false, tip:"That's a normal travel estimate to the airport — complaining about traffic he can't control doesn't help."},
          {v:'Anh chạy lụa qua bên phải nha', e:'Weave over to the right lane', correct:false, tip:"Backseat driving during a ride is both unhelpful and can be genuinely distracting for the driver."},
        ], them:{v:'Không có gì, ngồi thoải mái nhé', e:'No problem, sit back and relax'} },
    ]},
    { name:'Market Vendor', icon:'🧺', opener:{v:'Túi này đẹp lắm, 800 nghìn thôi!', e:'This bag is lovely, only 800k!'}, turns:[
      { youOptions:[
          {v:'Đắt quá, bớt được không?', e:'Too expensive, can you lower it?', correct:true, tip:"Bargaining is expected here — asking to lower the price is completely normal and polite."},
          {v:'Được rồi, tôi mua ngay', e:"Ok, I'll buy it now", correct:false, tip:"Agreeing to the first price you hear means you'll usually pay more than a local would."},
        ], them:{v:'Thôi được, 250 nghìn nhé', e:'Alright, 250k then'} },
      { youOptions:[
          {v:'Được rồi, cảm ơn!', e:'Deal, thank you!', correct:true},
          {v:'Vẫn đắt quá', e:'Still too expensive', correct:false, tip:"Once a vendor drops the price significantly, pushing much further can come across as rude — know when to accept a fair deal."},
        ], them:{v:'Tổng cộng 250,000 đồng nhé bạn.', e:'Total is 250,000 dong.'} },
      { youOptions:[
          {v:'Đây 300,000. Thối lại cho tôi nhé.', e:"Here's 300,000. Please give me the change.", correct:true},
          {v:'Đây 300,000.', e:"Here's 300,000.", correct:false, tip:"Just handing over money without asking for change — in a busy market it's easy to be forgotten. Always say 'thối lại nhé'."},
        ], them:{v:'Dạ, gửi lại bạn 50,000 nhé.', e:"Sure, here's your 50,000 change."} },
      { youOptions:[
          {v:'Cảm ơn chị, chị bán ở đây lâu chưa?', e:'Thank you — have you been selling here long?', correct:true},
          {v:'Thôi tôi đi đây', e:"Ok, I'm off then", correct:false, tip:"A little abrupt right after a friendly transaction — a warmer send-off suits the moment better."},
          {v:'Túi này hàng thật hay giả vậy?', e:'Is this bag real or fake?', correct:false, tip:"A fair question in general, but better asked before buying, not right after the deal is already closed."},
        ], them:{v:'Cũng khá lâu rồi, hơn chục năm đó', e:'Quite a while now, over ten years'} },
      { youOptions:[
          {v:'Vậy chị rành khu này lắm nhỉ, cảm ơn chị nhiều', e:'You must know this area really well then — thanks so much', correct:true},
          {v:'Lâu vậy chắc mệt rồi', e:"That long? You must be tired of it", correct:false, tip:"A slightly backhanded thing to say to someone proud of her long-running stall."},
          {v:'Vậy chắc chị giàu lắm', e:'You must be rich then', correct:false, tip:"An oddly personal and presumptuous comment about her finances."},
        ], them:{v:'Cảm ơn em, rảnh ghé chị chơi nữa nha!', e:'Thanks, stop by again when you\'re free!'} },
    ]},
    { name:'Hotel Check-in', icon:'🏨', opener:{v:'Anh/chị đã đặt phòng chưa?', e:'Have you booked a room?'}, turns:[
      { youOptions:[
          {v:'Dạ rồi, tên tôi là...', e:'Yes, my name is...', correct:true},
          {v:'Chưa, tôi mới tới', e:"No, I just arrived", correct:false, tip:"Doesn't answer whether you booked — if you actually have a reservation, say so directly."},
          {v:'Phòng nào cũng được', e:'Any room is fine', correct:false, tip:"She's asking about your existing booking, not offering to pick one for you."},
        ], them:{v:'Cho tôi xem hộ chiếu nhé', e:'May I see your passport?'} },
      { youOptions:[
          {v:'Đây ạ', e:'Here you go', correct:true},
          {v:'Tôi không mang theo', e:"I don't have it with me", correct:false, tip:"Hotels in Vietnam are legally required to register your passport — always carry it at check-in."},
          {v:'Chụp hình được không?', e:'Can I just take a photo of it instead?', correct:false, tip:"Hotels need the physical document to register your stay properly — a photo usually isn't accepted."},
        ], them:{v:'Cảm ơn, phòng của anh/chị ở tầng 3', e:'Thank you, your room is on the 3rd floor'} },
      { youOptions:[
          {v:'Giờ trả phòng là mấy giờ vậy chị?', e:'What time is checkout?', correct:true},
          {v:'Tôi ở lâu lắm, khỏi cần biết giờ trả phòng', e:"I'm staying a long time, no need to know checkout time", correct:false, tip:"Worth knowing regardless of how long you're staying — good info to have up front."},
          {v:'Phòng có đẹp không?', e:'Is the room nice?', correct:false, tip:"You'll see for yourself shortly — better to ask something practical while she's helping you check in."},
        ], them:{v:'Trả phòng lúc 12 giờ trưa nhé', e:'Checkout is at 12 noon'} },
      { youOptions:[
          {v:'Dạ, cảm ơn chị nhiều', e:'Thank you so much', correct:true},
          {v:'Trễ vậy hả', e:'That late?', correct:false, tip:"Noon checkout is completely standard — reacting like it's unusual doesn't quite make sense."},
          {v:'Tôi có thể trả phòng trễ hơn không?', e:'Can I check out later than that?', correct:false, tip:"A fine question to ask on your actual departure day, but a bit premature to negotiate right at check-in."},
        ], them:{v:'Không có gì, chúc anh/chị nghỉ ngơi vui vẻ', e:'No problem, enjoy your stay'} },
      { youOptions:[
          {v:'Cho tôi hỏi wifi mật khẩu là gì ạ?', e:"Could I get the wifi password?", correct:true},
          {v:'Tôi tự tìm wifi được', e:"I'll figure out the wifi myself", correct:false, tip:"There's no need to guess when the front desk can just tell you directly."},
          {v:'Ở đây có wifi không vậy trời', e:'Does this place even have wifi', correct:false, tip:"Comes across a bit rude in tone for a simple, normal question."},
        ], them:{v:'Dạ, mật khẩu ghi trên thẻ phòng của anh/chị đó', e:"It's written on your room key card"} },
    ]},
    { name:'Bus Ticket Counter', icon:'🚌', opener:{v:'Anh/chị đi đâu?', e:'Where are you headed?'}, turns:[
      { youOptions:[
          {v:'Cho tôi một vé đi Đà Nẵng', e:'One ticket to Da Nang please', correct:true},
          {v:'Tôi chưa biết', e:"I don't know yet", correct:false, tip:"She can't sell you a ticket without a destination — decide before you reach the counter."},
          {v:'Xe nào cũng được', e:'Any bus is fine', correct:false, tip:"Buses go to specific destinations — she needs to know where you're headed, not just any bus."},
        ], them:{v:'Xe chạy lúc 8 giờ tối nhé', e:'The bus leaves at 8pm'} },
      { youOptions:[
          {v:'Vé bao nhiêu tiền vậy?', e:'How much is the ticket?', correct:true},
          {v:'Tôi không cần biết giá', e:"I don't need to know the price", correct:false, tip:"You'll need to pay eventually — better to know the amount upfront."},
          {v:'8 giờ trễ quá', e:'8pm is too late', correct:false, tip:"If the timing doesn't work you can ask about other departures, but flatly calling it 'too late' without asking for alternatives goes nowhere."},
        ], them:{v:'350 nghìn đồng nhé', e:'350,000 dong'} },
      { youOptions:[
          {v:'Dạ được, đây tiền của tôi', e:"Okay, here's my payment", correct:true},
          {v:'Đắt quá, bớt được không?', e:'Too expensive, can you lower it?', correct:false, tip:"Bus tickets are fixed-price, unlike market goods — bargaining doesn't apply here."},
          {v:'Tôi trả sau khi lên xe được không?', e:'Can I pay after boarding?', correct:false, tip:"Bus tickets are almost always paid at the counter before boarding — this isn't how it works here."},
        ], them:{v:'Dạ, đây vé của anh/chị, nhớ ra bến sớm 30 phút nhé', e:"Here's your ticket, please arrive 30 minutes early"} },
      { youOptions:[
          {v:'Dạ, tôi sẽ ra sớm. Xe đón ở cổng nào vậy?', e:"I'll be there early. Which gate does the bus leave from?", correct:true},
          {v:'Tôi tới trễ chút chắc không sao', e:"I'll probably be a bit late, should be fine", correct:false, tip:"Buses in Vietnam often leave close to on time without waiting for late passengers — cutting it close is risky."},
          {v:'Cổng nào cũng được, tôi tìm sau', e:"Any gate is fine, I'll find it later", correct:false, tip:"Better to confirm the gate now than scramble to find it right before departure."},
        ], them:{v:'Cổng số 5 nhé, có bảng ghi rõ', e:'Gate 5, it\'s clearly marked'} },
      { youOptions:[
          {v:'Dạ, cảm ơn chị nhiều, chúc chị buổi tối tốt lành', e:'Thank you so much, have a good evening', correct:true},
          {v:'Ok, xong chưa?', e:'Ok, are we done?', correct:false, tip:"A bit curt for wrapping up an interaction where she's been helpful and thorough."},
          {v:'Chị nhớ giữ vé cho tôi nha', e:'Remember to keep my ticket for me', correct:false, tip:"She already handed the ticket to you — this suggests you weren't paying attention."},
        ], them:{v:'Dạ, chúc anh/chị đi đường bình an!', e:'Have a safe trip!'} },
    ]},
    { name:'Boat Tour Guide', icon:'🚤', opener:{v:'Chào cả nhà! Hôm nay mình sẽ đi thăm chợ nổi nhé.', e:'Welcome everyone! Today we\'ll visit the floating market.'}, turns:[
      { youOptions:[
          {v:'Dạ, tuyệt quá, đi được chưa anh?', e:"Great, can we get going?", correct:true},
          {v:'Chợ nổi là gì vậy?', e:'What is a floating market?', correct:false, tip:"A fair question, but he's probably about to explain it as the boat departs — better to just confirm you're ready first."},
          {v:'Tôi sợ nước lắm', e:"I'm really scared of water", correct:false, tip:"Worth mentioning to a guide before boarding, but this response doesn't address his announcement at all — say it earlier if it's a real safety concern."},
        ], them:{v:'Dạ, mời cả nhà lên thuyền, nhớ mặc áo phao nhé', e:'Please board the boat, and remember to wear your life vest'} },
      { youOptions:[
          {v:'Dạ, tôi mặc ngay đây', e:"I'll put it on right away", correct:true},
          {v:'Tôi biết bơi nên khỏi cần', e:"I know how to swim, so I don't need it", correct:false, tip:"Life vests are required regardless of swimming ability — safety rule, not a suggestion."},
          {v:'Áo phao xấu quá, tôi không mặc đâu', e:"The life vest looks ugly, I won't wear it", correct:false, tip:"Refusing safety gear over appearance is a genuinely risky choice on the water."},
        ], them:{v:'Tốt lắm, giờ mình xuất phát nhé', e:"Great, let's set off now"} },
      { youOptions:[
          {v:'Chợ nổi này họp mấy giờ sáng vậy anh?', e:'What time does this floating market open?', correct:true},
          {v:'Bao giờ tới nơi vậy, lâu quá', e:'When will we get there, this is taking forever', correct:false, tip:"Impatience this early in the ride isn't a great look — better to ask something curious about the destination."},
          {v:'Tôi không thích cảnh sông nước lắm', e:"I'm not really into river scenery", correct:false, tip:"A discouraging thing to say to a guide who's excited to show you the highlight of the tour."},
        ], them:{v:'Thường họp từ 5 giờ sáng, đông nhất lúc 6-7 giờ', e:"It usually starts around 5am, busiest between 6 and 7"} },
      { youOptions:[
          {v:'Vậy là mình tới đúng lúc đông vui rồi, hay quá', e:"So we're arriving right when it's liveliest, awesome", correct:true},
          {v:'Vậy là dậy sớm uổng công rồi', e:'So waking up early was a waste then', correct:false, tip:"Comes across as complaining about the very experience he's guiding you through."},
          {v:'Sao không họp buổi chiều cho tiện', e:"Why don't they hold it in the afternoon, that'd be more convenient", correct:false, tip:"An odd complaint about a centuries-old local tradition he has no control over."},
        ], them:{v:'Đúng rồi đó! Sắp tới nơi, mọi người chuẩn bị máy ảnh nhé', e:"Exactly! We're almost there, get your cameras ready"} },
      { youOptions:[
          {v:'Dạ, cảm ơn anh đã dẫn tụi tôi đi, thích quá', e:'Thank you for guiding us, this is wonderful', correct:true},
          {v:'Chèo chậm quá anh ơi', e:"You're paddling too slowly", correct:false, tip:"Rushing your tour guide mid-tour isn't necessary or polite — let him set the pace."},
          {v:'Tôi mệt rồi, quay lại được không', e:"I'm tired, can we head back", correct:false, tip:"Cutting the tour short right as you're arriving at the highlight is a shame — and puts him on the spot unfairly."},
        ], them:{v:'Không có gì, mình cùng tận hưởng nhé!', e:"No problem, let's enjoy it together!"} },
    ]},
    { name:'Homestay Host', icon:'🏡', opener:{v:'Chào con, con đặt phòng homestay của cô đúng không?', e:"Hi dear, you're the one who booked my homestay, right?"}, turns:[
      { youOptions:[
          {v:'Dạ đúng rồi cô, con tên là...', e:"Yes that's right, my name is...", correct:true},
          {v:'Homestay này ở đâu vậy cô?', e:'Where exactly is this homestay?', correct:false, tip:"If you're already standing there talking to her, asking where it is seems out of place — confirm your booking first."},
          {v:'Con không nhớ có đặt hay không', e:"I don't remember if I booked or not", correct:false, tip:"A bit disorganized-sounding for a guest who should have their booking confirmation on hand."},
        ], them:{v:'Dạ, mời con vào, để cô dẫn con lên phòng', e:'Please come in, let me show you to your room'} },
      { youOptions:[
          {v:'Dạ, cảm ơn cô nhiều', e:'Thank you so much', correct:true},
          {v:'Phòng có xa không cô, con mệt lắm', e:'Is the room far, I\'m really tired', correct:false, tip:"A bit of an entitled thing to lead with before even thanking her for the welcome."},
          {v:'Con tự lên được, khỏi cần dẫn', e:"I can find it myself, no need to show me", correct:false, tip:"She's offering hospitality as a host — brushing it off can feel a little cold."},
        ], them:{v:'Đây là phòng của con, có gì cần cứ gọi cô nhé', e:"This is your room — call me if you need anything"} },
      { youOptions:[
          {v:'Dạ, cô ơi, bữa sáng mấy giờ vậy cô?', e:'What time is breakfast?', correct:true},
          {v:'Phòng nhỏ quá cô ơi', e:'The room is really small', correct:false, tip:"A blunt complaint right after she's welcomed you warmly — better to ask something practical instead."},
          {v:'Con không ăn sáng đâu', e:"I don't eat breakfast", correct:false, tip:"Fine if true, but jumping straight to declining before she's even mentioned breakfast is a bit presumptuous."},
        ], them:{v:'Bảy giờ sáng nhé, cô nấu món miền Tây cho con ăn', e:"7am — I'll cook some Mekong Delta dishes for you"} },
      { youOptions:[
          {v:'Dạ, con háo hức quá, cảm ơn cô nhiều', e:"I'm so excited, thank you so much", correct:true},
          {v:'Con không quen ăn món lạ', e:"I'm not used to eating unfamiliar food", correct:false, tip:"A little discouraging to a host who's excited to share local culture with you — worth at least trying it."},
          {v:'Cô nấu dở thì sao', e:'What if your cooking is bad?', correct:false, tip:"A genuinely rude thing to say to a host offering to cook for you."},
        ], them:{v:'Yên tâm đi, cô nấu ngon lắm. Con nghỉ ngơi nhé!', e:"Don't worry, I cook well. Get some rest!"} },
      { youOptions:[
          {v:'Dạ, con cảm ơn cô, chúc cô ngủ ngon', e:'Thank you, goodnight', correct:true},
          {v:'Cô ở nhà bên cạnh hả, ồn không?', e:'Do you live right next door, will it be noisy?', correct:false, tip:"A slightly awkward question to end the night on — better saved for tomorrow if it's a real concern."},
          {v:'Mai con dậy trễ chắc không kịp ăn sáng', e:"I'll probably wake up late tomorrow and miss breakfast", correct:false, tip:"If that's a real concern, better to ask if a later time works rather than assuming you'll miss it entirely."},
        ], them:{v:'Ngủ ngon nha con, mai gặp lại!', e:"Goodnight dear, see you tomorrow!"} },
    ]},
  ],
  factory: [
    { name:'Line Supervisor', icon:'👷', opener:{v:'Kiểm tra máy trước khi bắt đầu ca nhé.', e:'Check the machine before starting the shift.'}, turns:[
      { youOptions:[
          {v:'Vâng, tôi hiểu rồi', e:'Yes, understood', correct:true},
          {v:'Tôi không hiểu', e:"I don't understand", correct:false, tip:"If you genuinely don't understand a safety instruction, you should ask for clarification rather than just leaving it unresolved."},
          {v:'Để lát nữa kiểm tra cũng được', e:"I'll check it a bit later", correct:false, tip:"Machine checks before starting a shift are a safety step, not optional — delaying it isn't appropriate."},
        ], them:{v:'Tốt. Có vấn đề gì báo ngay cho tôi.', e:'Good. Report any issues to me right away.'} },
      { youOptions:[
          {v:'Vâng, sếp', e:'Yes, boss', correct:true},
          {v:'Tôi về trước đây', e:"I'm leaving early", correct:false, tip:"An odd thing to say right at the start of a shift he's just briefing you on."},
          {v:'Vấn đề gì cũng báo hết à?', e:'Report literally every issue?', correct:false, tip:"Comes across as pushing back on a very standard safety instruction."},
        ], them:{v:'Cảm ơn, làm việc tốt nhé', e:'Thanks, good work'} },
      { youOptions:[
          {v:'Dạ, sếp ơi, máy số 3 phát ra tiếng lạ ạ', e:'Boss, machine number 3 is making a strange noise', correct:true},
          {v:'Máy hơi ồn nhưng chắc không sao', e:"The machine is a bit loud but probably fine", correct:false, tip:"He just told you to report issues immediately — assuming it's fine yourself defeats the purpose of that instruction."},
          {v:'Tôi tự sửa được, khỏi báo', e:"I can fix it myself, no need to report", correct:false, tip:"Repairing machinery without authorization or reporting it first can violate safety protocol."},
        ], them:{v:'Được, để tôi cho người qua kiểm tra ngay', e:"Okay, I'll send someone to check it right away"} },
      { youOptions:[
          {v:'Dạ, cảm ơn sếp', e:'Thank you, boss', correct:true},
          {v:'Nhanh lên nha sếp, tôi cần máy chạy', e:'Hurry up boss, I need the machine running', correct:false, tip:"Rushing your supervisor comes across disrespectful, even if the delay is inconvenient."},
          {v:'Chắc không cần kiểm tra đâu', e:"Probably doesn't need checking", correct:false, tip:"Reversing your own report right after he's agreed to act on it is confusing and undermines the safety process."},
        ], them:{v:'Không có gì, an toàn là quan trọng nhất', e:'No problem, safety comes first'} },
    ]},
    { name:'Supplier', icon:'📦', opener:{v:'Đơn hàng sẽ giao vào thứ Ba.', e:'The order will be delivered Tuesday.'}, turns:[
      { youOptions:[
          {v:'Cảm ơn, tôi sẽ kiểm tra kho', e:"Thanks, I'll check the warehouse", correct:true},
          {v:'Tôi không cần hàng nữa', e:"I don't need the goods anymore", correct:false, tip:"Cancelling an already-confirmed order without explanation can damage a supplier relationship."},
          {v:'Thứ mấy cũng được', e:"Any day is fine", correct:false, tip:"He's already confirmed a specific date — this reply doesn't really respond to what he said."},
        ], them:{v:'Có gì cứ liên hệ tôi nhé', e:'Feel free to contact me anytime'} },
      { youOptions:[
          {v:'Được, cảm ơn anh', e:'Sounds good, thank you', correct:true},
          {v:'Trễ quá rồi', e:"That's too late", correct:false, tip:"If Tuesday genuinely doesn't work, it's worth explaining why or proposing an earlier date, not just calling it too late."},
          {v:'Tôi không tin anh đâu', e:"I don't trust you", correct:false, tip:"An abrupt, distrustful reply to a routine delivery update — not a good way to maintain a supplier relationship."},
        ], them:{v:'Không có gì!', e:"You're welcome!"} },
      { youOptions:[
          {v:'Anh ơi, số lượng lần này có đủ như đơn đặt không?', e:'Will the quantity this time match what we ordered?', correct:true},
          {v:'Chắc giao thiếu như mọi lần', e:"You'll probably short us again like always", correct:false, tip:"Accusatory phrasing, even if past deliveries had issues — better to ask directly and neutrally."},
          {v:'Tôi không quan tâm số lượng', e:"I don't care about the quantity", correct:false, tip:"Quantity matters a lot for warehouse planning — this dismisses something genuinely important."},
        ], them:{v:'Dạ đủ số lượng, tôi đã kiểm tra kỹ rồi', e:"Full quantity, I've double-checked it carefully"} },
      { youOptions:[
          {v:'Dạ, cảm ơn anh đã xác nhận', e:'Thank you for confirming', correct:true},
          {v:'Để coi có đúng không đã', e:"We'll see if that's actually true", correct:false, tip:"A somewhat suspicious tone toward a supplier who's just given you a direct, reassuring answer."},
          {v:'Anh nói vậy thôi chứ chưa chắc đâu', e:"You say that, but who knows", correct:false, tip:"Undermines his word without cause — better to trust the confirmation and verify quietly on delivery if needed."},
        ], them:{v:'Dạ, không có gì, hẹn thứ Ba nhé', e:"No problem, see you Tuesday"} },
    ]},
    { name:'HR Onboarding', icon:'📋', opener:{v:'Bạn đã nộp đủ giấy tờ chưa?', e:'Have you submitted all your documents?'}, turns:[
      { youOptions:[
          {v:'Dạ rồi, đây là hồ sơ của tôi', e:"Yes, here's my file", correct:true},
          {v:'Giấy tờ gì cơ?', e:'What documents?', correct:false, tip:"If you're unsure what's needed, better to ask specifically rather than sound totally unprepared during onboarding."},
          {v:'Tôi nộp sau được không?', e:'Can I submit them later?', correct:false, tip:"Onboarding paperwork is usually required before you can officially start — delaying isn't ideal on day one."},
        ], them:{v:'Tốt, ca làm việc bắt đầu lúc 7 giờ sáng', e:'Good, your shift starts at 7am'} },
      { youOptions:[
          {v:'Vâng, tôi sẽ đến đúng giờ', e:"Understood, I'll be on time", correct:true},
          {v:'7 giờ sớm quá', e:'7am is too early', correct:false, tip:"Complaining about a standard factory shift start time on your first day isn't a great first impression."},
          {v:'Tôi hay đi trễ lắm', e:"I'm usually late a lot", correct:false, tip:"Admitting this upfront during onboarding raises a red flag right away — better to simply commit to being on time."},
        ], them:{v:'Cảm ơn, chúc bạn làm việc tốt', e:'Thanks, good luck with the work'} },
      { youOptions:[
          {v:'Dạ, cho tôi hỏi đồng phục nhận ở đâu ạ?', e:'Where do I get my uniform?', correct:true},
          {v:'Tôi không cần đồng phục', e:"I don't need a uniform", correct:false, tip:"Uniforms are typically mandatory in factory settings for safety and identification — this isn't optional."},
          {v:'Đồng phục xấu quá chắc tôi không mặc', e:'The uniform looks ugly, I probably won\'t wear it', correct:false, tip:"Refusing required workwear over appearance isn't really an option in most factory settings."},
        ], them:{v:'Bạn xuống kho lấy ở phòng bên cạnh nhé', e:"Go to the storeroom next door to get it"} },
      { youOptions:[
          {v:'Dạ, cảm ơn chị nhiều', e:'Thank you so much', correct:true},
          {v:'Xa vậy hả', e:'That far?', correct:false, tip:"The room next door is hardly far — this reaction doesn't quite fit."},
          {v:'Tôi lười đi lắm', e:"I'm too lazy to go", correct:false, tip:"An odd, unprofessional thing to admit to HR on your first day."},
        ], them:{v:'Không có gì, chúc bạn ngày đầu tốt lành', e:'No problem, have a good first day'} },
    ]},
    { name:'Safety Briefing', icon:'⛑️', opener:{v:'Nhớ đội mũ bảo hộ khi vào xưởng nhé.', e:'Remember to wear a hard hat when entering the workshop.'}, turns:[
      { youOptions:[
          {v:'Vâng, tôi sẽ đội ngay', e:"Yes, I'll put it on now", correct:true},
          {v:'Tôi không cần đâu', e:"I don't need it", correct:false, tip:"Safety gear isn't optional on a factory floor — refusing it can get you sent home, or worse, hurt."},
          {v:'Mũ này xấu quá', e:'This helmet looks ugly', correct:false, tip:"Beside the point — hard hats are for protection, not style, and are mandatory regardless of appearance."},
        ], them:{v:'Tốt, an toàn là trên hết', e:'Good, safety first'} },
      { youOptions:[
          {v:'Có vấn đề gì tôi sẽ báo ngay', e:"I'll report right away if there's an issue", correct:true},
          {v:'Chắc không sao đâu', e:'Probably fine', correct:false, tip:"Assuming small issues are fine is how accidents happen — always report promptly."},
          {v:'Tôi không thích báo cáo lắm', e:"I don't really like reporting things", correct:false, tip:"Personal preference doesn't override a genuine safety obligation on the floor."},
        ], them:{v:'Rất tốt, cảm ơn bạn', e:'Very good, thank you'} },
      { youOptions:[
          {v:'Ngoài mũ bảo hộ, tôi còn cần trang bị gì nữa không?', e:'Besides the hard hat, what other safety gear do I need?', correct:true},
          {v:'Mũ vậy chắc đủ rồi', e:'The helmet is probably enough', correct:false, tip:"Assuming this yourself instead of asking risks missing required gear like gloves or ear protection."},
          {v:'Tôi mang đồ của mình được không', e:'Can I just bring my own gear?', correct:false, tip:"Factory-issued safety equipment is usually required to meet specific safety standards — personal gear may not be approved."},
        ], them:{v:'Bạn cần thêm găng tay và kính bảo hộ nữa', e:'You\'ll also need gloves and safety goggles'} },
      { youOptions:[
          {v:'Dạ, tôi sẽ lấy đầy đủ trước khi vào xưởng', e:"I'll get all of it before entering the workshop", correct:true},
          {v:'Thôi khỏi kính, vướng lắm', e:"Skip the goggles, they're annoying", correct:false, tip:"Safety goggles protect your eyes from real hazards on the floor — discomfort isn't a valid reason to skip them."},
          {v:'Găng tay tôi tự mang theo rồi', e:"I already brought my own gloves", correct:false, tip:"Same issue as before — factory-approved gear usually needs to meet specific safety standards, not just any gloves."},
        ], them:{v:'Tốt lắm, giờ bạn có thể vào xưởng rồi', e:'Great, you can head into the workshop now'} },
    ]},
    { name:'Quality Control Inspector', icon:'🔍', opener:{v:'Lô hàng này có mấy sản phẩm bị lỗi, bạn kiểm tra lại giúp tôi nhé.', e:'This batch has some defective items, can you please recheck them?'}, turns:[
      { youOptions:[
          {v:'Dạ được, để tôi kiểm tra ngay', e:"Sure, I'll check right away", correct:true},
          {v:'Chắc máy đo sai thôi', e:"The measuring device is probably wrong", correct:false, tip:"Assuming the inspector is mistaken before even checking dismisses a legitimate quality concern."},
          {v:'Lỗi nhỏ thôi mà, chắc không sao', e:"It's a small defect, probably fine", correct:false, tip:"Quality standards exist for a reason — deciding a defect doesn't matter isn't your call to make."},
        ], them:{v:'Cảm ơn, lỗi chủ yếu ở phần mối hàn', e:'Thanks — the issue is mainly in the welding'} },
      { youOptions:[
          {v:'Dạ, tôi sẽ báo lại cho tổ hàn kiểm tra máy', e:"I'll let the welding team know to check their equipment", correct:true},
          {v:'Chắc thợ hàn làm ẩu', e:'The welder was probably careless', correct:false, tip:"Jumping to blame a coworker before any real investigation isn't fair or productive."},
          {v:'Chuyện đó không phải việc của tôi', e:"That's not my job", correct:false, tip:"Passing the buck when a quality issue has been flagged to you directly isn't a great look."},
        ], them:{v:'Được, cảm ơn bạn đã xử lý nhanh', e:"Great, thanks for handling it quickly"} },
      { youOptions:[
          {v:'Dạ, chị cần tôi ghi lại số lượng lỗi vào báo cáo không?', e:'Do you need me to log the defect count in the report?', correct:true},
          {v:'Thôi khỏi ghi báo cáo, mất công', e:"No need to log a report, too much hassle", correct:false, tip:"Quality issues typically need to be documented for tracking and accountability — skipping it isn't appropriate."},
          {v:'Chị tự ghi đi, tôi bận lắm', e:'You log it yourself, I\'m busy', correct:false, tip:"Comes across dismissive toward someone doing an important quality check on your line."},
        ], them:{v:'Dạ có, ghi rõ số lô và ngày giúp tôi nhé', e:'Yes please, note the batch number and date'} },
      { youOptions:[
          {v:'Dạ, tôi ghi đầy đủ rồi ạ', e:"Done, I've logged everything", correct:true},
          {v:'Tôi quên số lô rồi', e:"I forgot the batch number", correct:false, tip:"Batch tracking is important for tracing defects — worth double-checking rather than leaving it incomplete."},
          {v:'Ghi đại cho xong', e:'I just filled it in randomly to get it done', correct:false, tip:"Inaccurate quality records can cause real problems down the line — this defeats the purpose of the report."},
        ], them:{v:'Cảm ơn bạn, làm việc rất chuyên nghiệp', e:"Thank you, very professionally handled"} },
    ]},
    { name:'Forklift Operator', icon:'🏗️', opener:{v:'Coi chừng, xe nâng đang qua đây!', e:'Watch out, forklift coming through!'}, turns:[
      { youOptions:[
          {v:'Dạ, tôi tránh ra ngay', e:"I'll get out of the way now", correct:true},
          {v:'Tôi đứng đây quen rồi, không sao đâu', e:"I always stand here, it's fine", correct:false, tip:"Familiarity with a spot doesn't make it safe when heavy machinery is actively moving through — always yield."},
          {v:'Xe nâng chạy chậm mà, khỏi lo', e:"The forklift moves slowly, no worries", correct:false, tip:"Even slow-moving forklifts carry heavy loads and cause serious injuries — always clear the path when warned."},
        ], them:{v:'Cảm ơn bạn, cẩn thận là tốt nhất', e:'Thanks, better safe than sorry'} },
      { youOptions:[
          {v:'Anh ơi, chỗ này có vạch đường đi riêng cho xe nâng không?', e:'Is there a designated path for the forklift here?', correct:true},
          {v:'Sao anh không báo trước sớm hơn', e:"Why didn't you warn me earlier", correct:false, tip:"He warned you the moment it became relevant — this comes across a bit accusatory for no real reason."},
          {v:'Xe nâng nguy hiểm quá, nên cấm luôn', e:'Forklifts are dangerous, they should just be banned', correct:false, tip:"An overreaction — forklifts are standard, necessary equipment; the real fix is just staying alert to the marked paths."},
        ], them:{v:'Có đó, vạch vàng dưới sàn là đường xe nâng', e:'Yes, the yellow lines on the floor mark the forklift path'} },
      { youOptions:[
          {v:'Dạ, từ giờ tôi sẽ để ý vạch vàng', e:"I'll pay attention to the yellow lines from now on", correct:true},
          {v:'Vạch vàng khó thấy lắm', e:"The yellow lines are hard to see", correct:false, tip:"If genuinely faded or unclear this is worth reporting to a supervisor, but dismissing the whole system isn't the right response."},
          {v:'Tôi không quan tâm vạch nào hết', e:"I don't care about any lines", correct:false, tip:"Ignoring marked safety paths around heavy machinery is a real hazard to yourself and others."},
        ], them:{v:'Tốt lắm, vậy là an toàn cho cả hai bên', e:'Great, that keeps things safe for everyone'} },
      { youOptions:[
          {v:'Cảm ơn anh đã nhắc nhở nhé', e:'Thanks for the reminder', correct:true},
          {v:'Thôi khỏi nhắc nữa, tôi nhớ rồi', e:"No need to remind me again, I've got it", correct:false, tip:"A bit dismissive toward someone looking out for your safety — a simple thanks is warmer."},
          {v:'Chắc tôi đứng đâu cũng được thôi', e:"I can probably stand wherever anyway", correct:false, tip:"Contradicts the safety lesson he just walked you through."},
        ], them:{v:'Không có gì, giữ an toàn nhé!', e:'No problem, stay safe!'} },
    ]},
  ],
